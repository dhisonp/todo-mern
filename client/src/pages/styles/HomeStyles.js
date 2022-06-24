import styled, { css } from "styled-components";
export const theme = {
  primary: "#82954B",
  secondary: "#BABD42",
  medium: "#EFD345",
  light: "#FFEF82",
  text: "#333",
  textMedium: "#555",
  textLight: "#777",
  lightBackground: "#F4F4F4",
};

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  background-color: mintcream;
  justify-content: center;

  @media (max-width: ${size.tablet}) {
    background-color: aliceblue;
  }

  @media (max-width: ${size.mobileL}) {
    background-color: yellowgreen;
  }
`;

export const OuterContainer = styled.div`
  /* background-color: black; */
  display: flex;
  flex-grow: 1;
  max-width: 80vw;
  @media (min-width: ${size.tablet}) {
    background-color: transparent;
    display: flex;
    flex-grow: 1;
    min-width: 100vw;
    /* align-items: center; */
    justify-content: center;
  }
`;

export const InnerContainer = styled.div`
  /* background-color: tomato; */
  display: flex;
  flex-direction: column;
  padding: 12px;
  width: 100%;
  @media (min-width: ${size.tablet}) {
    padding: 24px;
    border-radius: 4px;
    width: 50%;
  }
`;

export const Box = styled.div`
  /* display: flex; */
  padding: ${(props) => props.padding || "24px"};
  text-align: center;
  align-items: center;
  border-radius: 8px;
  background-color: ${(props) => props.backgroundColor || "#fff"};
  margin: ${(props) => props.margin || "0px"};
  min-width: ${(props) => props.minWidth || "0"};
  min-height: ${(props) => props.minHeight || "0"};
`;

export const ScrollableBox = styled.div`
  overflow: scroll;
  //Hide visible scrollbar
  &::-webkit-scrollbar {
    display: none;
  }
  min-height: 240px;
  max-height: 360px;
  margin-top: 24px;
  border: solid;
  border-radius: 2px;
  border-color: ${theme.primary};
  background-color: white;
  padding-top: 18px;
  padding-bottom: 12px;
  padding-inline: 14px;
`;

export const Header = styled.div`
  display: flex;
  /* background-color: ${theme.primary}; */
  width: 100vw;
`;

export const HeaderItem = styled.div`
  width: 100%;
  min-height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const HeaderRight = styled.div`
  text-align: right;
  justify-content: end;
  flex-grow: 1;
  padding-right: 12px;
`;

export const Span = styled.span`
  color: ${props => props.color || theme.textMedium};
  margin-bottom: ${props => props.marginBottom};
`;

export const CenterSpan = styled(Span)`
  display: flex;
  text-align: center;
  justify-content: center;
`

export const H1 = styled.h1`
  color: ${theme.primary};
  margin-top: 12px;
  margin-bottom: 12px;
  font-size: 1.8rem;
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${theme.secondary};
`;

export const Input = styled.input`
  border: 0;
  border-radius: 4px;
  height: 28px;
  min-width: 240px;
  padding-left: 12px;
  padding-right: 12px;
  background-color: ${theme.lightBackground};
  font-size: 1rem;
  margin-bottom: 18px;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px ${theme.primary};
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const InputIcon = styled.span`
  float: right;
  margin: 6px;
  position: relative;
  z-index: 2;
  color: ${theme.secondary};
`;

export const Button = styled.button`
  border: 0;
  margin-left: 2px;
  padding: 2px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.transparent &&
    css`
      background: transparent;
    `}
`;

export const Footer = styled.div`
  margin: 6px;
  align-self: flex-end;
`;
