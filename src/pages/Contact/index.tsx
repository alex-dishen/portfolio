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
          <img src={meInRedShirt} alt="" />
        </ImageHolder>
        <Name>
          <p>Oleksandr Didyshen</p>
          <p>Software engineer </p>
        </Name>
        <ContactsWrapper>
          <a href="mailto:didyshen.oleksandr@gmail.com" target="_blank">
            <Option>Drop an E-Mail</Option>
          </a>
          <a href="https://github.com/alex-dishen">
            <Option>See my GitHub</Option>
          </a>
          <a href="https://www.linkedin.com/in/oleksandr-didyshen/">
            <Option>Visit my Linkedin</Option>
          </a>
        </ContactsWrapper>
      </Card>
    </StyledContact>
  );
}

export default Contact;
