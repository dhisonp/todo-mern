import React from "react";
import {
  Container,
  Header,
  Footer,
  Span,
  H1,
  Link,
  HeaderItem,
  Input,
  Button,
  Row,
  theme,
  ScrollableBox,
  InnerContainer,
  OuterContainer,
} from "./styles/HomeStyles";
import { AiFillGithub, AiOutlinePlus } from "react-icons/ai";
import Entry from "../components/Entry";

import mockData from "../data/mockData.json";

function Home() {
  const github = "https://github.com/dhisonp";
  const githubSpan = (
    <Span>
      by{" "}
      <Link href={github}>
        Dhison Padma <AiFillGithub size={14} />
      </Link>
    </Span>
  );

  const handleAdd = (text) => {;
    alert("Submit")
  };

  return (
    <Container>
      <Header>
        <HeaderItem>
          <H1>SIMPL-IT</H1>
        </HeaderItem>
      </Header>
      <OuterContainer>
        <InnerContainer>
          <Row>
            <Input placeholder="Enter a new ToDo.." />{" "}
            <Button transparent onMouseUp={handleAdd}>
              <AiOutlinePlus
                size={24}
                style={{ marginLeft: 4, marginBottom: 18 }}
                color={theme.primary}
              />
            </Button>
          </Row>
          <ScrollableBox>
            {mockData.map((child) => (
              <Entry key={child.id} taskName={child.taskName} id={child.id} />
            ))}
          </ScrollableBox>
        </InnerContainer>
      </OuterContainer>
      <Footer>{githubSpan}</Footer>
    </Container>
  );
}

export default Home;
