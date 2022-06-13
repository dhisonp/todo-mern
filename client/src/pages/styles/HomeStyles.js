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

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  max-width: 100%;
  min-height: 100vh;
  align-items: center;
  background-color: ${theme.lightBackground};

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
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

export const ScrollableBox = styled(Box)`
  overflow-y: scroll;
`;

export const Header = styled.div`
  position: absolute;
  display: flex;
  left: 0;
  right: 0;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-between;
  min-height: 10vh;
  /* background-color: ${theme.primary}; */
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
  color: #555;
`;

export const H1 = styled.h1`
  color: ${theme.text};
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