import React, { useEffect } from 'react';
import { Container, Typo, Image, ContainerButton } from '../../../components/atoms';
import { useDispatch } from 'react-redux';
import { useLogoutMutation } from '../../../services/user';
import { useMeQuery } from '../../../services/user';
import { logout } from '../../../store/userSlice';

const Profile = ({ navigation }) => {
  const dispatch = useDispatch();
  const [logoutMutation, { isLoading, isError, isSuccess, error }] = useLogoutMutation();
  const { data, isLoading: isUserLoading, isError: isUserError } = useMeQuery();

  useEffect(() => {
    if (isSuccess) {
      dispatch(logout());
    }
  }, [isSuccess]);

  const handleLogout = async () => {
    try {
      await logoutMutation().unwrap();
    } catch (err) {
      console.error('Erreur lors de la déconnexion :', err);
    }
  };

  return (
    <Container.ScreenBase centeredTop>
      <Image.Base source={require('../../../assets/images/account.png')} size={120} />

      <Typo.Title fontSize='20px' color={({ theme }) => theme.lightPurple}>
        {data?.email}
      </Typo.Title>

      <ContainerButton.ClassicButton
        onPress={handleLogout}
        backgroundColor={({ theme }) => theme.lightPurple}
        disabled={isLoading}
      >
        <Typo.SubTitle color={({ theme }) => theme.white}>
          {isLoading ? 'Déconnexion...' : 'Se déconnecter'}
        </Typo.SubTitle>
      </ContainerButton.ClassicButton>
    </Container.ScreenBase>
  );
};

export default Profile;
