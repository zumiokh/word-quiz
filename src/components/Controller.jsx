import { useGame } from "../contexts/GameContext.jsx";

export default function Controller() {
  const { currentWord, getRandomWord } = useGame();

  function handleClick() {
    if (!currentWord) return;

    getRandomWord();
  }

  return (
    <div
      id="controller"
      className="w-full flex flex-col justify-center items-center my-10"
    >
      <div className="space-x-5">
        <button
          onClick={handleClick}
          className={`${
            !currentWord
              ? "cursor-not-allowed bg-stone-400"
              : "cursor-pointer bg-emerald-400"
          } px-5 py-3 rounded-lg border-2 border-stone-900 text-lg`}
        >
          Next word
        </button>
      </div>
    </div>
  );
}
