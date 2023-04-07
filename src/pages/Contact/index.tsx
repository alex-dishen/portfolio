import { linkOptions } from 'pages/Contact/constants';
import {
  StyledContact,
  Intro,
  Header,
  Pitch,
  Card,
  ImageHolder,
  Name,
  ContactsWrapper,
  Option,
} from 'pages/Contact/styles';
import meInRedShirt from 'assets/images/black-shirt.webp';

const Contact = () => (
  <StyledContact>
    <Intro>
      <Header>The Stage is Yours</Header>
      <Pitch>
        <p>
          I'm always looking to collaborate on interesting projects with great
          people.
        </p>
        <p>Need a supportive hand? I have two!</p>
      </Pitch>
    </Intro>
    <Card>
      <ImageHolder>
        <img src={meInRedShirt} alt="Oleksandr in black shirt" />
      </ImageHolder>
      <Name>
        <p>Oleksandr Didyshen</p>
        <p>Software engineer </p>
      </Name>
      <ContactsWrapper>
        {linkOptions.map(({ id, link, text }) => (
          <Option key={id} href={link} target="_blank">
            {text}
          </Option>
        ))}
      </ContactsWrapper>
    </Card>
  </StyledContact>
);

export default Contact;
