const TabButton = ({ children, onselect, isSelected }) => {
  return (
    <li>
      <button onClick={onselect} className={isSelected ? "active" : undefined}>
        {children}
      </button>
    </li>
  );
};

export default TabButton;
