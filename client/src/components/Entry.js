import styled from "styled-components";
import { TiDeleteOutline as DeleteIcon } from "react-icons/ti";
import { Button } from "../pages/styles/HomeStyles";
import axios from "axios";

const Left = styled.span`
  text-align: left;
  font-size: 1rem;
`;

const Card = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 6px;
  border: solid;
  border-width: 1.5px;
  border-radius: 2px;
  border-color: lightgrey;
  padding: 6px;
  background-color: lavenderblush;
`;

const Right = styled.div`
  text-align: right;
`;

const Entry = (props) => {
  return (
    <Card>
      <Left>{props.taskName}</Left>
      <Right>
        <Button transparent onMouseUp={() => props.handleDelete(props.id)}>
          <DeleteIcon size={16} />
        </Button>
      </Right>
    </Card>
  );
};

export default Entry;
