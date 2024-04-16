import Button from "./button";
import "./Controller.css";

export default function Controller({ onCorrectAnswer, onWrongAnswer }) {
  return (
    <div id="controller">
      <p className="instruction">Did you get it right?</p>
      <div className="btn-container flex-center">
        <Button className="btn-correct proceed" onClick={onCorrectAnswer}>
          Yes! I do
        </Button>
        <Button className="btn-wrong utility" onClick={onWrongAnswer}>
          No, I don&apos;t
        </Button>
      </div>
    </div>
  );
}
