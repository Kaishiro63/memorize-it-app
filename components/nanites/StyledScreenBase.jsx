import styled from 'styled-components/native';
import colors from '../../utils/Colors';

const StyledScreenBase = styled.View`
  flex: 1;
  ${({ isNotPadding }) => {
    return isNotPadding ? '' : 'padding: 0 20px;';
  }}
  ${({ paddingInsets }) => {
    return paddingInsets && `padding-top: ${paddingInsets}px;`;
  }}
  background-color: ${colors.beige};
  ${({ centered }) => {
    return centered && 'justify-content: center; align-items: center;';
  }}
  ${({ containerStyle }) => containerStyle && containerStyle};
`;

export default StyledScreenBase;
