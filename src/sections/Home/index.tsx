import { Link } from 'react-router-dom';
import {
  StyledHome,
  Greeting,
  ImageHolder,
  NavigationSection,
  Option,
  Text,
  Underline,
} from 'sections/Home/styles';

function Home() {
  return (
    <StyledHome>
      <Greeting>
        <h1>
          Hey, I'm <ImageHolder /> Oleksandr.
        </h1>
        <h1>A Front-End Developer</h1>
      </Greeting>
      <NavigationSection>
        <Option>
          {/* <span>A</span> I heard you are designing great apps & websites! */}
        </Option>
        <Option>
          {/* <span>B</span> I like reading about design & technology! */}
        </Option>
        <Option>{/* <span>C</span> Oleksandr, who?! */}</Option>
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
