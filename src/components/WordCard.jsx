import "./wordCard.css";

export default function WordCard({ children, onCardAction, isAnswerShown }) {
  return (
    <div className="card-container flex-center">
      <div
        id="card"
        className={`flex-center ${isAnswerShown ? "answer" : "question"}`}
        onClick={onCardAction}
      >
        <p className="main-text">{children}</p>
      </div>
    </div>
  );
}
