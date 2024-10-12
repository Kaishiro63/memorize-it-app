import { Typo, Container, Button } from '../../components/atoms';
import colors from '../../utils/Colors';

export default function Login({ navigation }) {
  return (
    <Container.ScreenBase centered>
      <Typo.Title>Memorize It</Typo.Title>
      <Button.ClassicButton
        onPress={() => navigation.navigate('MainStack')}
        backgroundColor={colors.lightPurple}
      >
        <Typo.SubTitle color={colors.white}>Se connecter</Typo.SubTitle>
      </Button.ClassicButton>
    </Container.ScreenBase>
  );
}
