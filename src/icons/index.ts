import { IoIosArrowDropright } from 'react-icons/io';

const icons = {
  rightCircularArror: IoIosArrowDropright
};

export type Icons = keyof typeof icons;

export const getIcon = (iconName: Icons) => icons[iconName];
