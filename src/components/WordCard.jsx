import { useEffect, useState } from "react";
import { useGame } from "../contexts/GameContext.jsx";

export default function WordCard() {
  const { words, currentWord, isAnswerShown, getRandomWord, toggleAnswer } =
    useGame();

  const [cardText, setCardText] = useState("Click here to start");

  function handleCardClick() {
    if (!words.length) {
      setCardText("Please add some words");
      return;
    }

    if (!currentWord) {
      getRandomWord();
      return;
    }

    toggleAnswer();
  }

  useEffect(() => {
    if (currentWord) {
      if (isAnswerShown) {
        setCardText(currentWord.meaning);
        return;
      }

      setCardText(currentWord.word);
    } else {
      setCardText("Click here to start");
    }
  }, [currentWord, isAnswerShown]);

  return (
    <div className="my-10 mx-3 h-[200px]">
      <div
        id="card"
        className={`${
          isAnswerShown ? "bg-emerald-500" : "bg-stone-300"
        } w-full h-full text-4xl font-bold py-5 text-center rounded-lg uppercase cursor-pointer flex justify-center items-center`}
        onClick={handleCardClick}
      >
        {cardText}
      </div>
    </div>
  );
}
