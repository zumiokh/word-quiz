import Button from "./Button.jsx";
import Modal from "./Modal.jsx";
import FormAddNewWord from "./FormAddNewWord.jsx";
import { useGame } from "../contexts/GameContext.jsx";
import FormEditWord from "./FormEditWord.jsx";
import Instruction from "./Instruction.jsx";

export default function Navbar() {
  const { resetGame } = useGame();

  return (
    <header className="flex items-center justify-center p-5">
      <a className="me-auto cursor-pointer">
        <div
          id="logo"
          onClick={resetGame}
          className="font-tiny5 text-4xl font-bold text-emerald-500"
        >
          WordQuiz
        </div>
      </a>

      <Modal>
        <div className="space-x-3">
          <Modal.Open modalName="help-modal">
            <Button>
              <i className="fa fa-question fa-xl mx-1"></i>
            </Button>
          </Modal.Open>
          <Modal.Window name="help-modal" title="Instruction">
            <Instruction />
          </Modal.Window>

          <Modal.Open modalName="edit-modal">
            <Button>
              <i className="fa fa-pen fa-xl"></i>
            </Button>
          </Modal.Open>
          <Modal.Window name="edit-modal" title="Edit word">
            <FormEditWord />
          </Modal.Window>

          <Modal.Open modalName="add-modal">
            <Button>
              <i className="fa fa-plus fa-xl"></i>
            </Button>
          </Modal.Open>
          <Modal.Window name="add-modal" title="Add word">
            <FormAddNewWord />
          </Modal.Window>
        </div>
      </Modal>
    </header>
  );
}
