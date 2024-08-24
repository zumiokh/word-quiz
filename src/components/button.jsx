export default function Button({ children, onClick = () => {}, color = "" }) {
  const buttonOptions = {
    color: {
      rose: "hover:bg-rose-500",
      emerald: "hover:bg-emerald-500",
      sky: "hover:bg-sky-500",
    },
  };

  const baseClassName = `border-2 border-stone-900 p-2 rounded-md bg-transparent transition-all `;
  let coloredClassName;

  if (color === "rose") {
    coloredClassName = baseClassName + buttonOptions.color.rose;
  } else if (color === "emerald") {
    coloredClassName = baseClassName + buttonOptions.color.emerald;
  } else {
    coloredClassName = baseClassName + buttonOptions.color.sky;
  }

  return (
    <button className={coloredClassName} onClick={onClick}>
      {children}
    </button>
  );
}
