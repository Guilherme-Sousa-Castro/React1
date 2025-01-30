export default function TabButton({ children, onSelect }) {
  console.log("TabButton CONTENT EXECUTING");
    return (
    <li>
      <button onClick = {onSelect}> {children}</button>
    </li>
  );
}
