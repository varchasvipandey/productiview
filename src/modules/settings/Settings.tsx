import { useState, useEffect } from 'react';
import { getIcon } from 'icons';
import { ToggleOnContainer, MenuContainer } from './settings.style';
import { Menu } from './components';
import { AbsoluteBackground } from 'components';

const SettingsIcon = getIcon('settings');
const CloseIcon = getIcon('close');

const Settings = () => {
  const [menuOn, setMenuOn] = useState(false);

  const handleToggleMenu = () => setMenuOn((prev) => !prev);

  const handleExitMenuFromKeyboard = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOn(false);

  useEffect(() => {
    if (menuOn) document.addEventListener('keydown', handleExitMenuFromKeyboard);
    else document.removeEventListener('keydown', handleExitMenuFromKeyboard);
    return () => document.removeEventListener('keydown', handleExitMenuFromKeyboard);
  }, [menuOn]);

  return (
    <>
      {menuOn && (
        <MenuContainer>
          {/* pseudo absolute bg */}
          <AbsoluteBackground opacity={0.5} />

          <div className="top-bar">
            <button className="top-bar__action" aria-label="close" onClick={handleToggleMenu}>
              <CloseIcon className="top-bar__action__icon" />
            </button>
          </div>

          <div className="body">
            <Menu />
          </div>
        </MenuContainer>
      )}

      <ToggleOnContainer>
        <button className="settings" aria-label="settings" onClick={handleToggleMenu}>
          <SettingsIcon className="settings__icon" />
        </button>
      </ToggleOnContainer>
    </>
  );
};

export default Settings;
