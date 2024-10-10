import styled from 'styled-components/native';

const StyledScreenBase = styled.View`
  flex: 1;
  padding: 0 20px;
  ${({ centered }) => {
    return centered && 'justify-content: center; align-items: center;';
  }}
  ${({ containerStyle }) => containerStyle && containerStyle}
`;

export default StyledScreenBase;
