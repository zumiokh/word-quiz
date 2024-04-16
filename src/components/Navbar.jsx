import Button from "./button";
import "./Navbar.css";

export default function Navbar({ children, onToggleForm, onToggleWordList }) {
  return (
    <nav>
      <p className="text-logo">{children}</p>
      <div className="btn-container flex-center nav-btn">
        <Button className="btn-utility" onClick={onToggleWordList}>
          <i className="fa-solid fa-pencil"></i>
        </Button>
        <Button className="btn-utility" onClick={onToggleForm}>
          <i className="fa-solid fa-plus"></i>
        </Button>
      </div>
    </nav>
  );
}
