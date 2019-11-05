import { css } from 'styled-components';

const containerStyles = css`
  width: 50%;
  background-position: center;
  background-repeat: no-repeat;
  display: grid;
  grid-template-columns: 0.8fr 1fr;
  position: relative;
  border: 1px solid transparent;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px,
    rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
`;

export default containerStyles;
