import { NotesController, NotesTextArea } from "./components";

const Notes = () => {
  return (
    <div className="border-radius-base glass-inverted flex-spread-col appear-slow">
      {/* Notes Controller: Handle font size */}
      <NotesController />

      {/* TextArea */}
      <NotesTextArea />
    </div>
  );
};

export default Notes;
