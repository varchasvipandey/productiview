import { IoIosArrowDropright, IoIosArrowDropdown } from "react-icons/io";
import { RiSettingsLine } from "react-icons/ri";
import {
  IoColorPaletteOutline,
  IoCloseOutline,
  IoImage,
} from "react-icons/io5";
import { HiColorSwatch } from "react-icons/hi";
import {
  MdKeyboardArrowDown,
  MdWorkOff,
  MdWork,
  MdOutlineHourglassEmpty,
  MdOutlineHourglassDisabled,
  MdOutlineInfo,
  MdOutlineWidgets,
  MdCheckBoxOutlineBlank,
  MdCheckBox,
} from "react-icons/md";
import { FaPlay, FaPause, FaStop, FaForward, FaBackward } from "react-icons/fa";
import { GiCompactDisc } from "react-icons/gi";
import { FiMinus, FiPlus } from "react-icons/fi";

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
  workOn: MdWork,
  timeDisabled: MdOutlineHourglassDisabled,
  timeEnabled: MdOutlineHourglassEmpty,
  disc: GiCompactDisc,
  info: MdOutlineInfo,
  widgets: MdOutlineWidgets,
  unchecked: MdCheckBoxOutlineBlank,
  checked: MdCheckBox,
  minus: FiMinus,
  plus: FiPlus,
};

export type Icons = keyof typeof icons;

export const getIcon = (iconName: Icons) => icons[iconName];
