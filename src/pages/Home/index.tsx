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
import meInBlueShirt from 'assets/images/black-shirt.webp';
import { ReactComponent as RightArrow } from 'assets/images/ui/arrow-right.svg';

const Home = () => (
  <StyledHome>
    <Welcome>
      <TopGreeting>
        <Greeting>Hey, I'm Branch for Testing 5</Greeting>
        <ImageHolder>
          <img src={meInBlueShirt} alt="Oleksandr in black shirt" />
        </ImageHolder>
        <Name>Oleksandr</Name>
      </TopGreeting>
      <Position>A Software Engineer</Position>
    </Welcome>
    <NavigationSection>
      {options.map(({ page, variant, text }, index) => (
        <Option
          to={page}
          key={page}
          index={index}
          target={page.includes('http') ? '_blank' : ''}
        >
          <div>
            <p>{variant}</p> {text}
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

export default Home;
