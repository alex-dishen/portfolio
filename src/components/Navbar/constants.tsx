import { ReactComponent as Bolt } from 'assets/icons/bolt.svg';
import { ReactComponent as FBolt } from 'assets/icons/bolt-filled.svg';
import { ReactComponent as Pen } from 'assets/icons/pen.svg';
import { ReactComponent as Explore } from 'assets/icons/explore.svg';
import { ReactComponent as FExplore } from 'assets/icons/explore-filled.svg';
import { ReactComponent as Person } from 'assets/icons/person.svg';
import { ReactComponent as FPerson } from 'assets/icons/person-filled.svg';
import { ReactComponent as Mail } from 'assets/icons/mail.svg';
import { ReactComponent as FMail } from 'assets/icons/mail-filled.svg';

export const pages = [
  {
    path: '/',
    filledPicture: <FExplore />,
    plainPicture: <Explore />,
  },
  {
    path: '/projects',
    filledPicture: <FBolt />,
    plainPicture: <Bolt />,
  },
  {
    path: 'https://medium.com/@oleksandrdidyshen',
    filledPicture: <Pen />,
    plainPicture: <Pen />,
  },
  {
    path: '/about',
    filledPicture: <FPerson />,
    plainPicture: <Person />,
  },
  { path: '/contact', filledPicture: <FMail />, plainPicture: <Mail /> },
];
