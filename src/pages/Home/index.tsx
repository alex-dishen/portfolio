import uniqid from 'uniqid';
import {
  options,
  styledHomeAnimation,
  imAnimation,
  imageHolderAnimation,
  nameAnimation,
  positionAnimation,
  navigationSectionAnimation,
  optionAnimation,
  textAnimation,
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
    <StyledHome variants={styledHomeAnimation} initial="hidden" animate="show">
      <Greeting>
        <TopGreeting>
          <Header variants={imAnimation}>Hey, I'm</Header>
          <ImageHolder variants={imageHolderAnimation}>
            <img src={meInBlueShirt} alt="Oleksandr in blue shirt" />
          </ImageHolder>
          <Header variants={nameAnimation}>Oleksandr</Header>
        </TopGreeting>
        <Header variants={positionAnimation}>A Software Engineer</Header>
      </Greeting>
      <NavigationSection variants={navigationSectionAnimation}>
        {options.map((option) => (
          <Option key={uniqid()} variants={optionAnimation}>
            <NavigationLink to={option.page}>
              <div>
                <p>{option.variant}</p> {option.text}
              </div>
              <ArrowContainer>
                <RightArrow />
                <RightArrow />
              </ArrowContainer>
            </NavigationLink>
          </Option>
        ))}
      </NavigationSection>
      <Text variants={textAnimation}>
        Never Mind -- <StyledLink to="/contact">Just Say Hi</StyledLink>
      </Text>
    </StyledHome>
  );
}

export default Home;
