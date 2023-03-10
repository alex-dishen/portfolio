import { Link } from 'react-router-dom';
import { ReactComponent as RightArrow } from 'assets/ui/arrow-right.svg';
import {
  StyledHome,
  Greeting,
  ImageHolder,
  NavigationSection,
  Option,
  Text,
  Underline,
} from 'pages/Home/styles';
import meInBlueShirt from 'assets/black-shirt.JPG';

function Home() {
  return (
    <StyledHome>
      <Greeting>
        <h1>
          Hey, I'm
          <ImageHolder>
            <img src={meInBlueShirt} alt="" />
          </ImageHolder>
          Oleksandr.
        </h1>
        <h1>A Front-End Developer</h1>
      </Greeting>
      <NavigationSection>
        <Option to="/projects">
          <p>
            <span>A</span> I heard you are creating great websites!
          </p>
          <RightArrow />
        </Option>
        {/* <Option to="">
          <p>
            <span>B</span> I like reading about technologies!
          </p>
          <RightArrow />
        </Option> */}
        <Option to="/about">
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
