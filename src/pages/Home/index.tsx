import { Link } from 'react-router-dom';
import {
  StyledHome,
  Greeting,
  NavigationSection,
  Option,
  Text,
  Underline,
} from 'pages/Home/styles';

function Home() {
  return (
    <StyledHome>
      <NavigationSection>
        <Option>
          <span>A</span> I heard you are designing great apps & websites!
        </Option>
        <Option>
          <span>B</span> I like reading about design & technology!
        </Option>
        <Option>
          <span>C</span> Oleksandr, who?!
        </Option>
      </NavigationSection>
      <Text>
        Never Mind -
        <Link to="/">
          Just Say Hi <Underline />
        </Link>
      </Text>
    </StyledHome>
  );
}

export default Home;
