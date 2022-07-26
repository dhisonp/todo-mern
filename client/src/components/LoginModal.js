import ReactModal from "react-modal";
import React from "react";
import styled from "styled-components";

const Span = styled.span`
  color: gray;
  font-size: 0.8rem;
  margin: 4px;
`;

const Input = styled.input`
  margin: 4px;
  padding-inline: 8px;
  padding-block: 4px;
  font-size: 1rem;
`;

const RegisterText = styled.p`
  font-size: .8rem;
  color: gray;
  margin: 12px;
  width: 100vw;  
`;

const InlineLink = styled.a`

`

const LoginModal = (isOpen, toggleModal) => {
  function handleRequestClose() {
    toggleModal(false);
  }

  const modalStyle = {
    overlay: {
      backgroundColor: "rgb(0,0,0,0.15)",
    },
    content: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      marginBlock: "100px",
      marginInline: "200px",
      textAlign: "center",
      borderRadius: 4,
      backgroundColor: "aliceblue",
    },
  };

  return (
    //Will have two modes: Login and Register
    <ReactModal
      isOpen={isOpen}
      onRequestClose={handleRequestClose}
      style={modalStyle}
    >
      <Span>Username</Span>
      <Input />
      <Span>Password</Span>
      <Input type="password" />
      <RegisterText>Don't have an account? <InlineLink href="">Register here now.</InlineLink></RegisterText>
    </ReactModal>
  );
};

export default LoginModal;
