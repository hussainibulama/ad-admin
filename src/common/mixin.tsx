import { css } from "styled-components";

export const Center = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: 576px) {
    top: 20%;
    transform: translate(-50%, -20%);
  }
`;
export const CenterPartial = css`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const CenterPartial1 = css`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
`;

//  <Animated
//    animationIn="bounceInLeft"
//    animationOut="bounceInRight"
//    isVisible={true}
//  >
//    <div className="text-white">hello world </div>
//  </Animated>;
