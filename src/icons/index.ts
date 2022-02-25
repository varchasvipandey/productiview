import { IoIosArrowDropright, IoIosArrowDropdown } from 'react-icons/io';
import { RiSettingsLine } from 'react-icons/ri';
import { IoColorPaletteOutline, IoCloseOutline, IoImage } from 'react-icons/io5';
import { HiColorSwatch } from 'react-icons/hi';
import { MdKeyboardArrowDown, MdWorkOff, MdWork } from 'react-icons/md';
import { FaPlay, FaPause, FaStop, FaForward, FaBackward } from 'react-icons/fa';

const icons = {
  rightCircularArror: IoIosArrowDropright,
  downCircularArror: IoIosArrowDropdown,
  settings: RiSettingsLine,
  theme: IoColorPaletteOutline,
  colorAccent: HiColorSwatch,
  arrowDown: MdKeyboardArrowDown,
  close: IoCloseOutline,
  image: IoImage,
  play: FaPlay,
  pause: FaPause,
  stop: FaStop,
  forward: FaForward,
  backward: FaBackward,
  workOff: MdWorkOff,
  workOn: MdWork
};

export type Icons = keyof typeof icons;

export const getIcon = (iconName: Icons) => icons[iconName];
