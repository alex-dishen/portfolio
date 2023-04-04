import { ReactComponent as Bolt } from 'assets/ui/bolt.svg';
import { ReactComponent as FBolt } from 'assets/ui/bolt-filled.svg';
import { ReactComponent as Pen } from 'assets/ui/pen.svg';
import { ReactComponent as Explore } from 'assets/ui/explore.svg';
import { ReactComponent as FExplore } from 'assets/ui/explore-filled.svg';
import { ReactComponent as Person } from 'assets/ui/person.svg';
import { ReactComponent as FPerson } from 'assets/ui/person-filled.svg';
import { ReactComponent as Mail } from 'assets/ui/mail.svg';
import { ReactComponent as FMail } from 'assets/ui/mail-filled.svg';

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
