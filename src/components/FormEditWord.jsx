import { useEffect, useState } from "react";
import { useGame } from "../contexts/GameContext.jsx";
import { formatText } from "../utils/truncateText.js";

function FormEditWord() {
  const { words, removeWord, editWord } = useGame();

  const [idToEdit, setIdToEdit] = useState("");
  const [newWord, setNewWord] = useState("");
  const [newMeaning, setNewMeaning] = useState("");

  function handleEditWord(id) {
    const target = words.find((word) => word.id === id);
    const { word: oldWord, meaning: oldMeaning } = target;

    if (newWord === oldWord && newMeaning === oldMeaning) {
      reset();
      return;
    }

    setIdToEdit(id);
  }

  function handleConfirmUpdate() {
    if (newWord === "" || newMeaning === "") return;

    editWord(idToEdit, { word: newWord, meaning: newMeaning });

    reset();
  }

  function reset() {
    setIdToEdit("");
    setNewWord("");
    setNewMeaning("");
  }

  useEffect(() => {
    if (idToEdit !== "") {
      const targetWord = words.find((item) => item.id === idToEdit);
      setNewWord(targetWord.word);
      setNewMeaning(targetWord.meaning);
    }
  }, [idToEdit, words]);

  return (
    <>
      <table className="max-h-[200px] w-full">
        <thead>
          <tr className="border-b border-stone-500">
            <th className="py-2">Word</th>
            <th>Meaning</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {words.map((item, i) => (
            <tr
              className={`${i % 2 === 1 ? "bg-stone-300" : ""} text-center`}
              key={item.id}
            >
              <td className="w-[100px] py-2">
                {idToEdit === item.id ? (
                  <input
                    type="text"
                    defaultValue={item.word}
                    onChange={(e) => setNewWord(e.target.value)}
                    className="w-full text-center"
                  />
                ) : (
                  formatText(item.word)
                )}
              </td>
              <td className="w-[100px]">
                {idToEdit === item.id ? (
                  <input
                    type="text"
                    defaultValue={item.meaning}
                    onChange={(e) => setNewMeaning(e.target.value)}
                    className="w-full text-center"
                  />
                ) : (
                  formatText(item.meaning)
                )}
              </td>

              <td className="w-[100px] min-w-10 space-x-2 px-1 md:space-x-5">
                {idToEdit !== item.id ? (
                  <>
                    <button onClick={() => handleEditWord(item.id)}>
                      <i className="fa fa-pen fa-lg"></i>
                    </button>
                    <button onClick={() => removeWord(item.id)}>
                      <i className="fa fa-trash-can fa-lg text-rose-500"></i>
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="rounded-md bg-emerald-500 px-2 py-1"
                      onClick={handleConfirmUpdate}
                    >
                      <i className="fa fa-check fa-sm"></i>
                    </button>
                    <button
                      className="rounded-md bg-rose-500 px-2 py-1"
                      onClick={reset}
                    >
                      <i className="fa fa-xmark"></i>
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default FormEditWord;
