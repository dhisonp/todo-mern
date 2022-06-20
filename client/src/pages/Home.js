import React, { useEffect, useState } from "react";
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
// import mockData from "../data/mockData.json";
const axios = require("axios");

function Home() {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

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

  async function handleAdd(event) {
    // setLoading(true); //LOADING NOT WORKING!
    event.preventDefault();
    const obj = {
      taskName: text,
    };
    await axios
      .post("http://localhost:8080/record/add", obj)
      .then((res) => {
        console.log("POST status: " + res.statusText);
        setRefreshKey((c) => c + 1);
        setText("");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async function handleDelete(id) {
    //Please add validation!
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
            <Input
              placeholder="Enter a new ToDo.."
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />{" "}
            <Button transparent onMouseUp={handleAdd} disabled={loading}>
              <AiOutlinePlus
                size={24}
                style={{ marginLeft: 4, marginBottom: 18 }}
                color={theme.primary}
              />
            </Button>
          </Row>
          <ScrollableBox>
            {data.map((child) => (
              <Entry
                key={child._id}
                taskName={child.taskName}
                id={child._id}
                handleDelete={handleDelete}
              />
            ))}
          </ScrollableBox>
        </InnerContainer>
      </OuterContainer>
      <Footer>{githubSpan}</Footer>
    </Container>
  );
}

export default Home;
