import { Table } from "Table";
import "./index.css";
import { Row } from "Row";
import { Column } from "Column";
import { List } from "List";
import { Try } from "Try";

function App() {
  return (
    <>
      <Table>
        <Row>
          <Column>№</Column>
          <Column>Name</Column>
        </Row>
        <Row>
          <Column>1</Column>
          <Column>Mariia</Column>
        </Row>
        <Row>
          <Column>2</Column>
          <Column>Alex</Column>
        </Row>
      </Table>
      <List />
      <Try typeBox="error"/>
    </>
  );
}

export default App;
