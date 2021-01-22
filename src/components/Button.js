const Button = ({ title, onClick, color }) => {
  return (
    <button
      className="btn"
      onClick={onClick}
      style={{ backgroundColor: color }}
    >
      {title}
    </button>
  );
};

export default Button;
