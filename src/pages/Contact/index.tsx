import { linkOptions } from 'pages/Contact/constants';
import {
  StyledContact,
  Intro,
  Card,
  ImageHolder,
  Name,
  ContactsWrapper,
  Option,
} from 'pages/Contact/styles';
import meInRedShirt from 'assets/black-shirt.JPG';

function Contact() {
  return (
    <StyledContact>
      <Intro>
        <h1>The Stage is Yours</h1>
        <p>
          I'm always looking to collaborate on interesting projects with great
          people.
        </p>
        <p>Need a supportive hand? I have two!</p>
      </Intro>
      <Card>
        <ImageHolder>
          <img src={meInRedShirt} alt="Oleksandr in red shirt" />
        </ImageHolder>
        <Name>
          <p>Oleksandr Didyshen</p>
          <p>Software engineer </p>
        </Name>
        <ContactsWrapper>
          {linkOptions.map((option) => (
            <Option href={option.link} target="_blank">
              {option.text}
            </Option>
          ))}
        </ContactsWrapper>
      </Card>
    </StyledContact>
  );
}

export default Contact;
