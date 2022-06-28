import React, { useEffect, useState } from "react";
import {
  Container,
  Header,
  HeaderRight,
  HeaderLeft,
  Footer,
  Span,
  H1,
  Link,
  Input,
  Button,
  Row,
  theme,
  ScrollableBox,
  InnerContainer,
  OuterContainer,
  CenterSpan,
  HeaderLink,
} from "./styles/HomeStyles";
import { AiFillGithub, AiOutlinePlus } from "react-icons/ai";
import Entry from "../components/Entry";
// import mockData from "../data/mockData.json";
const axios = require("axios");

function Home() {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);
  const dev = false; //DEV MODE

  // Initialization
  document.title = "Simpl-it – A simple To Do app";
  useEffect(() => {
    async function getList() {
      const response = await axios
        .get("http://localhost:8080/record")
        .then((res) => {
          return res;
        })
        .catch((err) => {
          console.log(err);
          return;
        });
      // console.log(response.statusText);
      const records = await response.data;
      setData(records);
    }
    getList();
    return;
  }, [data.length, refreshKey]);

  const github = "https://github.com/dhisonp";
  const githubSpan = (
    <Span>
      by{" "}
      <Link href={github}>
        Dhison Padma <AiFillGithub size={14} />
      </Link>
    </Span>
  );

  // Handlers

  async function handleAdd(event) {
    if (loading) {
      return;
    }
    setLoading(true);
    event.preventDefault();
    if (text.length < 3) {
      window.alert("ToDo should be more than 3 characters.");
      setLoading(false);
      return;
    }
    const obj = {
      taskName: text,
    };
    await axios
      .post("http://localhost:8080/record/add", obj)
      .then((res) => {
        console.log("POST status: " + res.statusText);
        setRefreshKey((c) => c + 1);
        setText("");
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
    return;
  }

  async function handleOnEnter(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      event.stopPropagation();
      handleAdd(event);
    }
  }

  async function handleDelete(id) {
    await axios
      .delete(`http://localhost:8080/${id}`)
      .then((res) => {
        console.log("DELETE status: " + res.statusText);
        setRefreshKey((c) => c + 1);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const renderList = () => {
    if (data.length === 0) {
      return <CenterSpan>No ToDos. Add some to get started!</CenterSpan>;
    }
    return data.map((child) => (
      <Entry
        key={child._id}
        taskName={child.taskName}
        id={child._id}
        handleDelete={handleDelete}
      />
    ));
  };

  const renderLoading = loading ? (
    <Span>Loading</Span>
  ) : (
    <Span>Not Loading</Span>
  );

  return (
    <Container>
      <Span style={{ position: "absolute", top: 0, left: 0 }}>
        {dev ? renderLoading : null}
      </Span>
      <Header>
        <HeaderLeft>
          <H1>SIMPL-IT</H1>
        </HeaderLeft>
        <HeaderRight>
          <HeaderLink>Login</HeaderLink>
          <HeaderLink>Register</HeaderLink>
        </HeaderRight>
      </Header>
      <OuterContainer>
        <InnerContainer>
          <Row>
            <Input
              placeholder="Enter a new ToDo.."
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={handleOnEnter}
            />{" "}
            <Button transparent onMouseUp={handleAdd} disabled={loading}>
              <AiOutlinePlus
                size={24}
                style={{ marginLeft: 4, marginBottom: 18 }}
                color={theme.primary}
              />
            </Button>
          </Row>
          <ScrollableBox>{renderList()}</ScrollableBox>
        </InnerContainer>
      </OuterContainer>
      <Footer>{githubSpan}</Footer>
    </Container>
  );
}

export default Home;
