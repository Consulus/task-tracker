import Button from "./Button";

const Header = ({ title }) => {
  const toggle = () => {
    console.log("click");
  };

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button title="Добавить" onClick={toggle} />
    </header>
  );
};

export default Header;
