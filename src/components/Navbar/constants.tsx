import Bolt from 'src/assets/icons/bolt.svg'
import FBolt from 'src/assets/icons/bolt-filled.svg'
import Pen from 'src/assets/icons/pen.svg'
import Explore from 'src/assets/icons/explore.svg'
import FExplore from 'src/assets/icons/explore-filled.svg'
import Person from 'src/assets/icons/person.svg'
import FPerson from 'src/assets/icons/person-filled.svg'
import Mail from 'src/assets/icons/mail.svg'
import FMail from 'src/assets/icons/mail-filled.svg'

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
]
