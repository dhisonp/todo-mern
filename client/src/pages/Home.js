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
  ScrollableBox,
} from "./styles/HomeStyles";
import {
  AiFillGithub,
  AiOutlineCheckCircle,
  AiOutlinePlus,
} from "react-icons/ai";
import Entry from "../components/Entry";

import mockData from "../data/mockData";

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
        <Box minHeight={"40vh"} minWidth={"50vw"}>
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
          <ScrollableBox padding={"24px"} margin={"12px"}>
            {mockData.map((child) => (
              <Entry taskName={child.taskName} id={child.id} />
            ))}
          </ScrollableBox>
        </Box>
      </Container>
    </>
  );
}

export default Home;
