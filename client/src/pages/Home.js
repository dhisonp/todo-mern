import React from "react";
import {
  Container,
  Box,
  Header,
  HeaderRight,
  Span,
  H1,
  Link,
  HeaderItem,
  Input,
  Button,
  Row,
  theme,
} from "./styles/HomeStyles";
import {
  AiFillGithub,
  AiOutlineCheckCircle,
  AiOutlinePlus,
} from "react-icons/ai";

function Home() {
  const github = "https://github.com/dhisonp";
  const space = <span> </span>;

  return (
    <>
      <Header>
        <HeaderItem></HeaderItem>
        <HeaderItem>
          <H1>
            <AiOutlineCheckCircle size={22} />
            {space}
            STD: Simple To Do
            {space}
            <AiOutlineCheckCircle size={22} />
          </H1>
        </HeaderItem>
        <HeaderItem>
          <HeaderRight>
            <Span>
              by{" "}
              <Link href={github}>
                Dhison Padma <AiFillGithub size={14} />
              </Link>
            </Span>
          </HeaderRight>
        </HeaderItem>
      </Header>
      <Container>
        <Box>
          <Row>
            <Input placeholder="Enter a new ToDo.." />{" "}
            <Button transparent>
              <AiOutlinePlus
                size={24}
                style={{ marginLeft: 4 }}
                color={theme.primary}
              />
            </Button>
          </Row>
        </Box>
      </Container>
    </>
  );
}

export default Home;
