import { useState, useCallback } from "react";

import { NotesController, NotesTextArea } from "./components";

const Notes = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleExpandToggle = useCallback(
    () => setIsExpanded((prev) => !prev),
    []
  );

  return (
    <div className="border-radius-base glass-inverted flex-spread-col appear-slow">
      {/* Notes Controller: Handle font size */}
      <NotesController
        handleExpandToggle={handleExpandToggle}
        isExpanded={isExpanded}
      />

      {/* TextArea */}
      <NotesTextArea isExpanded={isExpanded} />
    </div>
  );
};

export default Notes;
