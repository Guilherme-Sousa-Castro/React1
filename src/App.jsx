import { useState, Fragment /*usado para juntar os elementos sem precisar da div*/  } from "react";
//React Hooks -> tudo o que começa com use vindo do react. Componentes do react que so podem ser chamadas dentro da App
import CoreConcepts from "./components/CoreConcepts.jsx";
import Header from "./components/Header/Header.jsx";
import Examples from "./components/Examples.jsx";

function App() {
  
 //invés do fragment pode-se usar as <></> vazias

  return (
    <Fragment>
      <Header />
      <main>
        <CoreConcepts/>
        <Examples/>
      </main>
    </Fragment>
  );
}

export default App;
