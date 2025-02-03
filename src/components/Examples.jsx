import { useState } from "react";
import { EXAMPLES } from "../data.js";
import TabButton from "./TabButton.jsx";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";

export default function Examples() {
  let /*frase*/ [selectedToppic, setSelectedTopic] /*array*/ = useState();
  //obrigado a chamar sempre no inicio do componente principal ou de custom hooks

  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton);
    //console.log(selectedToppic);
  }

  let tabContent = <p>Please select a topic.</p>;
  if (selectedToppic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedToppic].title}</h3>
        <p>{EXAMPLES[selectedToppic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedToppic].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <Section title="Examples" id="examples">
      <Tabs
      //ButtonsContainer="menu"
      //trocar pelo que quiser, deixa a classe tabs mais flexivel
      //pode-se usar ainda {Section} e "div"
        buttons={
          <>
            <TabButton
              isSelected={selectedToppic === "components"}
              onClick={() => handleClick("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedToppic === "jsx"}
              onClick={() => handleClick("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedToppic === "props"}
              onClick={() => handleClick("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedToppic === "state"}
              onClick={() => handleClick("state")}
            >
              State
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
