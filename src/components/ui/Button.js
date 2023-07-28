import "./Button.scss";

const Button = ({ children, size, color, props }) => {
  return (
    <button className={`Button ${size} ${color}`} onClick={()=>props.onClick}>
      { children }
    </button>
  );
};

Button.defaultProps = {
  size: "medium",
  color: "black",
};
export default Button;