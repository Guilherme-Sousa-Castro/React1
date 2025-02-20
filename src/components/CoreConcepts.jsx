import CoreConcept from "./CoreConcept.jsx";
import { CORE_CONCEPTS } from "../data.js";

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept
            key={
              conceptItem.title
            } /*evita erros na consola do website, utiliza um dos campos como valor unico para se 
              diferenciarem */
            {...conceptItem}
          />
        ))}
      </ul>
    </section>
  );
}
