import styled from 'styled-components/native';

const StyledClassicButton = styled.TouchableOpacity`
  ${({ isRounded }) =>
    isRounded
      ? `
    border-radius: 50px;
    width: 84px;
    height: 84px;
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
  return <StyledClassicButton backgroundColor={backgroundColor} isRounded={isRounded} {...props} />;
};

export default ClassicButton;
