import { IoIosArrowDropright } from 'react-icons/io';
import { RiSettingsLine } from 'react-icons/ri';
import { IoColorPaletteOutline, IoCloseOutline, IoImage } from 'react-icons/io5';
import { HiColorSwatch } from 'react-icons/hi';
import { MdKeyboardArrowDown } from 'react-icons/md';

const icons = {
  rightCircularArror: IoIosArrowDropright,
  settings: RiSettingsLine,
  theme: IoColorPaletteOutline,
  colorAccent: HiColorSwatch,
  arrowDown: MdKeyboardArrowDown,
  close: IoCloseOutline,
  image: IoImage
};

export type Icons = keyof typeof icons;

export const getIcon = (iconName: Icons) => icons[iconName];
