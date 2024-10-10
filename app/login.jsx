import { router } from 'expo-router';
import { Typo, Button, Container } from '../components/atoms';
import { useSession } from './ctx';
import colors from '../utils/Colors';

export default function Login() {
  const { login } = useSession();

  return (
    <Container.ScreenBase centered>
      <Typo.Title>Memorize It</Typo.Title>
      <Button.ClassicButton
        onPress={() => {
          login('token');
          router.replace('/');
        }}
        backgroundColor={colors.lightPurple}
      >
        <Typo.Paragraph color={colors.white}>Se connecter</Typo.Paragraph>
      </Button.ClassicButton>
    </Container.ScreenBase>
  );
}
