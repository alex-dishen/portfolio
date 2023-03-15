import { motion } from 'framer-motion';
import uniqid from 'uniqid';
import {
  linkOptions,
  headerAnimation,
  pitchAnimation,
  cardAnimation,
} from 'pages/Contact/constants';
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
        <motion.h1 variants={headerAnimation} initial="hidden" animate="show">
          The Stage is Yours
        </motion.h1>
        <motion.div variants={pitchAnimation} initial="hidden" animate="show">
          <p>
            I'm always looking to collaborate on interesting projects with great
            people.
          </p>
          <p>Need a supportive hand? I have two!</p>
        </motion.div>
      </Intro>
      <Card variants={cardAnimation} initial="hidden" animate="show">
        <ImageHolder>
          <img src={meInRedShirt} alt="Oleksandr in red shirt" />
        </ImageHolder>
        <Name>
          <p>Oleksandr Didyshen</p>
          <p>Software engineer </p>
        </Name>
        <ContactsWrapper>
          {linkOptions.map((option) => (
            <Option key={uniqid()} href={option.link} target="_blank">
              {option.text}
            </Option>
          ))}
        </ContactsWrapper>
      </Card>
    </StyledContact>
  );
}

export default Contact;
