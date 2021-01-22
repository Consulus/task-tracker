import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAdd ? "gray" : "green"}
        title={showAdd ? "Скрыть меню" : "Добавить задачу"}
        onClick={onAdd}
      />
    </header>
  );
};

export default Header;
