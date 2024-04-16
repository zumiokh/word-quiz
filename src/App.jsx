import { useState } from "react";
import Controller from "./components/Controller";
import WordCard from "./components/WordCard";
import Navbar from "./components/Navbar";
import FormAddNewWord from "./components/formAddNewWord";
import WordList from "./components/WordList";
import { useLocalStorage } from "./utils/useLocalStorage";

export default function App() {
  const [isFormOpen, setFormOpen] = useState(false);
  const [isWordListOpen, setIsWordListOpen] = useState(false);
  const [isAnswerShown, setIsAnswerShown] = useState(false);
  const [message, setMessage] = useState("Welcome to WordQuiz!");
  const [currentWord, setCurrentWord] = useState(null);
  const [words, setWords] = useLocalStorage([], "words");

  const isPoolEmpty = words.length === 0;

  function handleToggleForm() {
    setFormOpen((isOpen) => !isOpen);
  }

  function handleToggleWordList() {
    setIsWordListOpen((isOpen) => !isOpen);
  }

  function handleCorrectAnswer() {
    // handle controller btn
    randomNewWord();
  }

  function handleWrongAnswer() {
    // handle controller btn
    randomNewWord();
  }

  function handleAddWord(newWord) {
    setWords((words) => [...words, newWord]);
  }

  function handleRemoveWord(id) {
    setWords((words) => words.filter((word) => word.id !== id));
  }

  function randomNewWord() {
    if (isPoolEmpty) {
      setMessage("There is no word, Please add some words to start");
      return null;
    }

    setIsAnswerShown(false);

    const randomIndex = Math.floor(Math.random() * words.length);
    const randomWord = words[randomIndex];

    setCurrentWord(randomWord);
    setMessage(randomWord.word);

    return words[randomIndex];
  }

  function handleCardAction() {
    if (isAnswerShown) {
      return;
    }

    randomNewWord();

    if (currentWord !== null && !isAnswerShown) {
      const formattedMeaning = currentWord.meaning.join(", ");
      setMessage(formattedMeaning);
      setIsAnswerShown(true);
    }
  }

  return (
    <div id="App">
      <Navbar
        onToggleForm={handleToggleForm}
        onToggleWordList={handleToggleWordList}
      >
        WordQuiz
      </Navbar>
      {isWordListOpen && (
        <WordList
          words={words}
          onToggleWordList={handleToggleWordList}
          onRemoveWord={handleRemoveWord}
        />
      )}
      {isFormOpen && (
        <FormAddNewWord
          onAddWord={handleAddWord}
          onToggleForm={handleToggleForm}
          setMessage={setMessage}
        />
      )}
      <WordCard onCardAction={handleCardAction} isAnswerShown={isAnswerShown}>
        {message}
      </WordCard>
      {isAnswerShown && (
        <Controller
          onCorrectAnswer={handleCorrectAnswer}
          onWrongAnswer={handleWrongAnswer}
        />
      )}
    </div>
  );
}
