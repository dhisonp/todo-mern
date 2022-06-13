import styled from "styled-components";
import { AiFillDelete } from "react-icons/ai";
import { Button } from "../pages/styles/HomeStyles";

const Left = styled.span`
  text-align: left;
  font-size: 1rem;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 4px;
`;

const Right = styled.div`
  text-align: right;
`;

const deleteHandler = (id) => {
  alert(`Deleting: ${id}`);
};

const Entry = (props) => {
  return (
    <Row>
      <Left>{props.taskName}</Left>
      <Right>
        <Button transparent onMouseUp={() => deleteHandler(props.id)}>
          <AiFillDelete />
        </Button>
      </Right>
    </Row>
  );
};

export default Entry;
