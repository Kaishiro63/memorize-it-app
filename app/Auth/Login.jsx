import { Typo, Container, Button } from '../../components/atoms';
import colors from '../../utils/Colors';
import {
  GoogleOneTapSignIn,
  statusCodes,
  isErrorWithCode,
  GoogleSignin,
} from '@react-native-google-signin/google-signin';

export default function Login({ navigation }) {
  return (
    <Container.ScreenBase centered>
      <Typo.Title>Memorize It</Typo.Title>
      <Button.ClassicButton onPress={() => login()} backgroundColor={colors.lightPurple}>
        <Typo.SubTitle color={colors.white}>Se connecter</Typo.SubTitle>
      </Button.ClassicButton>
    </Container.ScreenBase>
  );
}
