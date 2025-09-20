import Card, { CardBody } from "./components/Card";
import Button from "./components/Button";
import List from "./components/List";
import { useState } from "react";
function App() {
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = () => setIsLoading(!isLoading);

  const list = ["Pikachu", "Snorlax", "Bulbasur"];
  const handleSelect = (elemento: string) => {
    console.log("imprimiento:", elemento);
  };
  const contenido = list.length ? (
    <List data={list} onSelect={handleSelect}></List>
  ) : (
    "sin elementos para mostrar"
  );

  return (
    <Card>
      <CardBody title="Titulo" text="este es el texto" />
      {contenido}
      <Button isLoading={isLoading} onClick={handleClick}>
        hola mundo
      </Button>
    </Card>
  );
}

export default App;
