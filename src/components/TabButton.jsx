export default function TabButton({ children, isSelected, ...props }) {
  console.log("TabButton CONTENT EXECUTING");
  return (
    <li>
      <button className={isSelected ? "active" : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}
