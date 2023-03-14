import {
  options,
  homeStyle,
  imStyle,
  imageStyle,
  nameStyle,
  positionStyle,
  navigationStyle,
  item,
  textStyle,
} from 'pages/Home/constants';
import {
  StyledHome,
  Greeting,
  TopGreeting,
  NavigationLink,
  Header,
  ImageHolder,
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
    <StyledHome variants={homeStyle} initial="hidden" animate="show">
      <Greeting>
        <TopGreeting>
          <Header variants={imStyle}>Hey, I'm</Header>
          <ImageHolder variants={imageStyle}>
            <img src={meInBlueShirt} alt="Oleksandr in blue shirt" />
          </ImageHolder>
          <Header variants={nameStyle}>Oleksandr</Header>
        </TopGreeting>
        <Header variants={positionStyle}>A Software Engineer</Header>
      </Greeting>
      <NavigationSection variants={navigationStyle}>
        {options.map((option) => (
          <Option variants={item}>
            <NavigationLink to={option.page}>
              <p>
                <span>{option.variant}</span> {option.text}
              </p>
              <ArrowContainer>
                <RightArrow />
                <RightArrow />
              </ArrowContainer>
            </NavigationLink>
          </Option>
        ))}
      </NavigationSection>
      <Text variants={textStyle}>
        Never Mind -- <StyledLink to="/contact">Just Say Hi</StyledLink>
      </Text>
    </StyledHome>
  );
}

export default Home;
