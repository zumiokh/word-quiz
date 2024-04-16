import "./button.css";

export default function Button({
  children,
  onClick,
  className = "utility",
  type = "button",
}) {
  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
}
