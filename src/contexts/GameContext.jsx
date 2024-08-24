import { createContext, useContext, useEffect, useReducer } from "react";

const GameContext = createContext();

const initialState = {
  words: JSON.parse(localStorage.getItem("words")) || [],
  currentWord: null,
  isAnswerShown: false,
};

const actionTypes = {
  ADDWORDS: "words/add",
  SETCURRENT: "words/setCurrent",
  TOGGLEANSWER: "words/toggleAnswer",
  UPDATEWORD: "words/update",
  REMOVEWORD: "words/remove",
  RESETGAME: "game/reset",
};

function reducer(state, action) {
  switch (action.type) {
    case actionTypes.ADDWORDS:
      return { ...state, words: [...state.words, action.payload] };
    case actionTypes.SETCURRENT:
      return { ...state, currentWord: action.payload, isAnswerShown: false };
    case actionTypes.TOGGLEANSWER:
      return { ...state, isAnswerShown: !state.isAnswerShown };
    case actionTypes.UPDATEWORD:
      return { ...state, words: action.payload };
    case actionTypes.REMOVEWORD:
      return { ...state, words: action.payload };
    case actionTypes.RESETGAME:
      return {
        ...state,
        currentWord: null,
        isAnswerShown: false,
        isGameStart: false,
      };

    default:
      throw new Error("Error unknown action type");
  }
}

function GameProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { words, currentWord, isAnswerShown, isGameStart } = state;

  useEffect(() => {
    localStorage.setItem("words", JSON.stringify(words));
  }, [words]);

  function addNewWord(wordObject) {
    dispatch({ type: actionTypes.ADDWORDS, payload: wordObject });
  }

  function getRandomWord() {
    const numWords = words.length;
    const randomNum = Math.floor(Math.random() * numWords);
    const selectedWord = words[randomNum];

    dispatch({ type: actionTypes.SETCURRENT, payload: selectedWord });
  }

  function editWord(id, updateWord) {
    const newArr = words.map((item) => {
      if (item.id === id)
        return { ...item, word: updateWord.word, meaning: updateWord.meaning };

      return item;
    });

    dispatch({ type: actionTypes.UPDATEWORD, payload: newArr });
  }

  function removeWord(id) {
    const newArr = words.filter((item) => item.id !== id);
    dispatch({ type: actionTypes.REMOVEWORD, payload: newArr });
  }

  function toggleAnswer() {
    dispatch({ type: actionTypes.TOGGLEANSWER });
  }

  function resetGame() {
    dispatch({ type: actionTypes.RESETGAME });
  }

  return (
    <GameContext.Provider
      value={{
        words,
        currentWord,
        isAnswerShown,
        isGameStart,
        addNewWord,
        getRandomWord,
        editWord,
        removeWord,
        toggleAnswer,
        resetGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

function useGame() {
  const value = useContext(GameContext);
  if (!value) throw new Error("GameContext must be used within GameProvider");

  return value;
}

export { GameProvider, useGame };
