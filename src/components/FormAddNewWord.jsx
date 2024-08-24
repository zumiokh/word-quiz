import { useContext, useState } from "react";
import Button from "./Button.jsx";
import { useGame } from "../contexts/GameContext.jsx";
import { nanoid } from "nanoid";
import toast from "react-hot-toast";
import { ModalContext } from "./Modal.jsx";

export default function FormAddNewWord() {
  const [word, setWord] = useState("");
  const [meaning, setMeaning] = useState("");
  const { addNewWord } = useGame();
  const { closeModal } = useContext(ModalContext);

  function handleAddWord(e) {
    e.preventDefault();

    if (word === "" || meaning === "") {
      toast.error("Please provide a valid word/meaning");
      return;
    }

    const id = nanoid(10);
    const newWord = { id, word, meaning };
    addNewWord(newWord);

    setWord("");
    setMeaning("");
    toast.success("word added");
    closeModal();
  }

  return (
    <div className="mx-auto max-w-2xl p-3">
      <form>
        <label htmlFor="word" className="mr-3 block">
          Word
        </label>
        <input
          id="word"
          type="text"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          className="mb-5 block w-full border border-stone-600 bg-stone-100 p-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
        />
        <label htmlFor="word" className="mr-3 block">
          Meaning
        </label>
        <input
          id="word"
          type="text"
          value={meaning}
          onChange={(e) => setMeaning(e.target.value)}
          className="mb-5 block w-full border border-stone-600 bg-stone-100 p-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
        />

        <Button onClick={handleAddWord}>Add word</Button>
      </form>
    </div>
  );
}
