import { Link } from 'react-router-dom';
import { ReactComponent as RightArrow } from 'assets/arrow-right.svg';
import {
  StyledHome,
  Greeting,
  ImageHolder,
  NavigationSection,
  Option,
  Text,
  Underline,
} from 'pages/Home/styles';

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
          <p>
            <span>A</span> I heard you are creating great websites!
          </p>
          <RightArrow />
        </Option>
        <Option>
          <p>
            <span>B</span> I like reading about technologies!
          </p>
          <RightArrow />
        </Option>
        <Option>
          <p>
            <span>C</span> Oleksandr, who?!
          </p>
          <RightArrow />
        </Option>
      </NavigationSection>
      <Text>
        Never Mind -
        <Link to="/contact">
          Just Say Hi <Underline />
        </Link>
      </Text>
    </StyledHome>
  );
}

export default Home;
