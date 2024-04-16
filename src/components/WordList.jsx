import "./WordList.css";
import Button from "./button";

export default function WordList({ words, onToggleWordList, onRemoveWord }) {
  return (
    <>
      <div className="overlay"></div>
      <div className="container flex-center">
        <div className="modal-edit">
          <div className="title">
            <p>Edit Words</p>
            <Button className="btn-close utility" onClick={onToggleWordList}>
              <i className="fa-solid fa-x"></i>
            </Button>
          </div>
          <div className="pool">
            {words.map((word) => (
              <Word word={word} key={word.id} onRemoveWord={onRemoveWord} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function Word({ word, onRemoveWord }) {
  function reformatMeaning(wordMeaning) {
    const meaningLength = wordMeaning.join("").length;
    if (meaningLength > 20) {
      return word.meaning.join(", ").slice(0, 20) + "...";
    }

    return wordMeaning.join(", ");
  }

  const formattedMeaning = reformatMeaning(word.meaning);

  return (
    <div className="word-item">
      <div className="word-detail">
        <p>
          <b>{word.word}</b>
        </p>
        <p>{formattedMeaning}</p>
      </div>
      <Button
        className="btn-remove"
        onClick={() => {
          onRemoveWord(word.id);
        }}
      >
        <i className="fa-solid fa-x"></i>
      </Button>
    </div>
  );
}
