import styled from 'styled-components/native';
import colors from '../../../utils/Colors';
import { useHeaderHeight } from '@react-navigation/elements';

const StyledClassicButton = styled.TouchableOpacity`
  ${({ isRounded }) =>
    isRounded
      ? `
    border-radius: 50px;
    width: 60px;
    height: 60px;
    position: absolute;
    bottom: 20px;
    right: 20px;
    box-shadow: 0px 0px 15px ${colors.black};
    shadow-opacity: 0.3;
  `
      : `
    border-radius: 16px;
    width: 100%;
    height: 50px;
    margin: 10px 0;
  `}
  ${({ absoluteBottom, safePaddingBottom }) =>
    absoluteBottom &&
    `
    position: absolute;
    bottom: ${safePaddingBottom};
  `}
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor ? backgroundColor : theme.darkPurple};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ClassicButton = ({ backgroundColor, isRounded, absoluteBottom, ...props }) => {
  const bottom = useHeaderHeight();
  return (
    <StyledClassicButton
      safePaddingBottom={bottom + 20}
      activeOpacity={0.8}
      backgroundColor={backgroundColor}
      isRounded={isRounded}
      absoluteBottom={absoluteBottom}
      {...props}
    />
  );
};

export default ClassicButton;
