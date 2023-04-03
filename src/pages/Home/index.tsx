import uniqid from 'uniqid';
import { options } from 'pages/Home/constants';
import {
  StyledHome,
  Welcome,
  TopGreeting,
  Greeting,
  ImageHolder,
  Name,
  Position,
  NavigationSection,
  Option,
  ArrowContainer,
  Text,
  StyledLink,
} from 'pages/Home/styles';
import meInBlueShirt from 'assets/black-shirt.JPG';
import { ReactComponent as RightArrow } from 'assets/ui/arrow-right.svg';

function Home() {
  return (
    <StyledHome>
      <Welcome>
        <TopGreeting>
          <Greeting>Hey, I'm</Greeting>
          <ImageHolder>
            <img src={meInBlueShirt} alt="Oleksandr in blue shirt" />
          </ImageHolder>
          <Name>Oleksandr</Name>
        </TopGreeting>
        <Position>A Software Engineer</Position>
      </Welcome>
      <NavigationSection>
        {options.map((option, index) => (
          <Option to={option.page} key={uniqid()} index={index}>
            <div>
              <p>{option.variant}</p> {option.text}
            </div>
            <ArrowContainer>
              <RightArrow />
              <RightArrow />
            </ArrowContainer>
          </Option>
        ))}
      </NavigationSection>
      <Text>
        Never Mind -- <StyledLink to="/contact">Just Say Hi</StyledLink>
      </Text>
    </StyledHome>
  );
}

export default Home;
