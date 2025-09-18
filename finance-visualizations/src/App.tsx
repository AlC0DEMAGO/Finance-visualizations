import Card, { CardBody } from "./components/Card";
import List from "./components/List";
function App() {
  const list = ["Pikachu", "Snorlax", "Bulbasur"];

  const handleSelect = (elemento: string) => {
    console.log("imprimiento:", elemento);
  };

  const handleSelect2 = (elemento: string) => {
    console.log("este es: ", elemento);
  };

  return (
    <Card>
      <CardBody title="Titulo" text="este es el texto" />
      <List data={list} onSelect={handleSelect}></List>
      <List data={list} onSelect={handleSelect2}></List>
    </Card>
  );
}

export default App;
