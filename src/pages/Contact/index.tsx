import {
  StyledContact,
  Intro,
  Card,
  ImageHolder,
  Name,
  ContactsWrapper,
  Option,
} from 'pages/Contact/styles';
import meInRedShirt from 'assets/red-shirt.JPG';

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
          <p>Font-End Developer </p>
        </Name>
        <ContactsWrapper>
          <a href="">
            <Option>Drop an E-Main</Option>
          </a>
          <a href="">
            <Option>Visit my GitHub</Option>
          </a>
          <a href="">
            <Option>See Linkedin</Option>
          </a>
        </ContactsWrapper>
      </Card>
    </StyledContact>
  );
}

export default Contact;
