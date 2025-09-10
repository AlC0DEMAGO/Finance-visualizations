import Card, { CardBody } from "./components/Card";
import List from "./components/List";
function App() {
  const list = ["Pikachu","Snorlax","Bulbasur"];
  return (
    <Card>
      <CardBody title="Titulo" text="este es el texto" />
      <List data={list}></List>
    </Card>
  );
}

export default App;
