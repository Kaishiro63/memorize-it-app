import styled from 'styled-components/native';
import colors from '../../../utils/Colors';

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
    height: 60px;
  `}
  background-color: ${({ backgroundColor }) => backgroundColor || 'white'};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ClassicButton = ({ backgroundColor, isRounded, ...props }) => {
  return (
    <StyledClassicButton
      activeOpacity={0.8}
      backgroundColor={backgroundColor}
      isRounded={isRounded}
      {...props}
    />
  );
};

export default ClassicButton;
