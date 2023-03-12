import { Link } from 'react-router-dom';
import { options } from 'pages/Home/constants';
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
import { ReactComponent as RightArrow } from 'assets/ui/arrow-right.svg';

function Home() {
  return (
    <StyledHome>
      <Greeting>
        <h1>
          Hey, I'm
          <ImageHolder>
            <img src={meInBlueShirt} alt="Oleksandr in blue shirt" />
          </ImageHolder>
          Oleksandr.
        </h1>
        <h1>A Front-End Developer</h1>
      </Greeting>
      <NavigationSection>
        {options.map((option) => (
          <Option to={option.page}>
            <p>
              <span>{option.variant}</span> {option.text}
            </p>
            <RightArrow />
          </Option>
        ))}
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
