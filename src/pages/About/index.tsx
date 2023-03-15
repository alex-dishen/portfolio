import { motion } from 'framer-motion';
import uniqid from 'uniqid';
import {
  languages,
  tools,
  meetOleksandrAnimation,
  imageAnimation,
  greetingsAnimation,
  pitchAnimation,
  finishedProjectsAnimation,
  experienceAnimation,
  skillsAnimation,
  toolsAnimation,
} from 'pages/About/constants';
import {
  StyledAbout,
  Image,
  Specifics,
  Number,
  SkillSection,
  Skills,
} from 'pages/About/styles';
import meInRedShirt from 'assets/red-shirt.JPG';

function About() {
  return (
    <StyledAbout>
      <motion.h1
        variants={meetOleksandrAnimation}
        initial="hidden"
        animate="show"
      >
        Meet Oleksandr
      </motion.h1>
      <Image
        src={meInRedShirt}
        onMouseDown={(e) => {
          e.preventDefault();
        }}
        variants={imageAnimation}
        initial="hidden"
        animate="show"
      />
      <motion.h3 variants={greetingsAnimation} initial="hidden" animate="show">
        Greetings and welcome to my personal website!
      </motion.h3>
      <motion.div variants={pitchAnimation} initial="hidden" animate="show">
        <p>
          My name is Oleksandr Didyshen, and I am a dynamic and motivated
          individual who is passionate about Software Engineering.
        </p>
        <p>
          I am a firm believer in the power of hard work and dedication, and I
          bring these qualities to everything I do. Whether I'm developing new
          ideas, collaborating with colleagues, or pursuing my own personal
          projects.
        </p>
        <p>
          In my line of work, I have had the privilege of working with some of
          the most talented people. These experiences have taught me the
          importance of collaboration, communication, and perseverance, and have
          inspired me to continue learning and growing as a professional.
        </p>
        <p>
          Whether you're here to learn more about my professional background,
          read my latest blog post, or just say hello, I'm thrilled you stopped
          by. My website is a reflection of who I am and what I stand for, and I
          hope it will provide you with valuable information and inspiration.
          Thank you for visiting and I look forward to connecting with you.
        </p>
      </motion.div>
      <Specifics>
        <motion.div
          variants={finishedProjectsAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <Number>17</Number> <p>Finished projects</p>
        </motion.div>
        <motion.div
          variants={experienceAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <Number>6</Number> <p>Months of experience</p>
        </motion.div>
      </Specifics>
      <motion.h2
        variants={skillsAnimation}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>
      <SkillSection>
        <Skills
          variants={skillsAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {languages.map((language) => (
            <div key={uniqid()}>
              {language.picture} {language.name}
            </div>
          ))}
        </Skills>
        <Skills
          variants={toolsAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {tools.map((tool) => (
            <div key={uniqid()}>
              {tool.picture} {tool.name}
            </div>
          ))}
        </Skills>
      </SkillSection>
    </StyledAbout>
  );
}

export default About;
