import { ReactComponent as Bolt } from 'assets/images/ui/bolt.svg';
import { ReactComponent as FBolt } from 'assets/images/ui/bolt-filled.svg';
import { ReactComponent as Pen } from 'assets/images/ui/pen.svg';
import { ReactComponent as Explore } from 'assets/images/ui/explore.svg';
import { ReactComponent as FExplore } from 'assets/images/ui/explore-filled.svg';
import { ReactComponent as Person } from 'assets/images/ui/person.svg';
import { ReactComponent as FPerson } from 'assets/images/ui/person-filled.svg';
import { ReactComponent as Mail } from 'assets/images/ui/mail.svg';
import { ReactComponent as FMail } from 'assets/images/ui/mail-filled.svg';

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
