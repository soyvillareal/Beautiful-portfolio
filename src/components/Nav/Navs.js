import {
  BiHome,
  BiUser,
  BiMessageDots,
  BiBookHeart,
} from 'react-icons/bi';
import { MdWorkOutline } from 'react-icons/md';

export const NavsNon = [
  {
    href: '#main',
    icon: <BiHome />,
  },
  {
    href: '#contact',
    icon: <BiMessageDots />,
  },
];

export const NavsCollapse = [
  {
    href: '#main',
    icon: <BiHome />,
  },
  {
    href: '#education',
    icon: <BiBookHeart />,
  },
  {
    href: '#about',
    icon: <BiUser />,
  },
  {
    href: '#projects',
    icon: <MdWorkOutline />,
  },
  {
    href: '#contact',
    icon: <BiMessageDots />,
  },
];
