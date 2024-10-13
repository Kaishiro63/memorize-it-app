import styled from 'styled-components/native';
import colors from '../../utils/Colors';

const StyledScreenBase = styled.View`
  flex: 1;
  ${({ isNotPadding }) => {
    return isNotPadding ? '' : 'padding: 0 20px;';
  }}
  ${({ safePaddingTop }) => `padding-top: ${safePaddingTop}px;`}
  background-color: ${colors.darkWhite};
  ${({ centered }) => {
    return centered && 'justify-content: center; align-items: center;';
  }}
  ${({ containerStyle }) => containerStyle && containerStyle};
`;

export default StyledScreenBase;
