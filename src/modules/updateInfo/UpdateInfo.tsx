import { useEffect, useState } from "react";
import shallow from "zustand/shallow";

import { useData } from "data";
import { metaData } from "meta";
import { Modal } from "components";

import { ListPoint } from "./components";
import { Container } from "./updateInfo.style";

const UpdateInfo = () => {
  const [currentVersion, updateDataStore] = useData(
    (state) => [state.currentVersion, state.updateDataStore],
    shallow
  );

  const [showUpdate, setShowUpdate] = useState(false);

  const handleCloseUpdateInfo = () => setShowUpdate(false);

  useEffect(() => {
    if (metaData.version !== currentVersion) {
      setShowUpdate(true);
      setTimeout(
        () => updateDataStore({ currentVersion: metaData.version }),
        0
      );
    }
  }, []);

  return (
    <Modal
      isOpen={showUpdate}
      onClose={handleCloseUpdateInfo}
      title={"Updated to version " + metaData.version}
    >
      <Container>
        <div className="section">
          <p className="section__title sectionHeading mb">What&apos;s New</p>
          <div className="section__content">
            {metaData.changeLog.map((item, index) => (
              <ListPoint key={index} {...item} />
            ))}
          </div>
        </div>

        {!!metaData.updateNotes && (
          <div className="section">
            <p className="section__title sectionHeading mb">Update Notes</p>
            <div className="section__content">
              <p className="text">{metaData.updateNotes}</p>
            </div>
          </div>
        )}

        <div className="section">
          <div className="section__content">
            <p className="caption">Press &quot;esc&quot; to close the info.</p>
          </div>
        </div>
      </Container>
    </Modal>
  );
};

export default UpdateInfo;
