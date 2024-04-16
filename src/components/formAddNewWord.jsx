import { useState } from "react";
import Button from "./button";
import "./formAddNewWord.css";

export default function FormAddNewWord({
  onAddWord,
  onToggleForm,
  setMessage,
}) {
  const [wordInput, setWordInput] = useState("");
  const [meaningInput, setmeaningInput] = useState("");

  function createNewWord(e) {
    e.preventDefault();

    if (wordInput === "" || meaningInput === "") {
      console.log("One or more inputs are empty");
      return;
    }

    const cleanupWord = wordInput.toLowerCase();

    // cleanup input
    const spaceRegex = /(\s+)/g;
    const meaningArr = meaningInput.split(",");
    const meaningArrClean = meaningArr.map((word) =>
      word.replace(spaceRegex, "")
    );

    const newWord = {
      id: crypto.randomUUID(),
      word: cleanupWord,
      meaning: [meaningArrClean],
      multiplier: 0,
    };

    onAddWord(newWord);
    setMessage("word added!");
    onToggleForm();
    console.log("You have successfully added a new word!");
  }

  return (
    <>
      <div className="overlay"></div>
      <div className="container flex-center">
        <form className="form-add-word">
          <h2>Add new word</h2>
          <label htmlFor="vocab">Word: </label>
          <input
            id="vocab"
            type="text"
            value={wordInput}
            onChange={(e) => setWordInput(e.target.value)}
            required
          />
          <label htmlFor="meaning">Meaning: </label>
          <input
            id="meaning"
            type="text"
            value={meaningInput}
            onChange={(e) => setmeaningInput(e.target.value)}
            required
          />
          <div className="btn-container">
            <Button
              className="btn-add proceed"
              onClick={createNewWord}
              type="submit"
            >
              Add
            </Button>
            <Button className="btn-cancel utility" onClick={onToggleForm}>
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
