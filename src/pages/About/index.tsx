import { languages, tools } from 'pages/About/constants';
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
      <h1>Meet Oleksandr</h1>
      <Image
        src={meInRedShirt}
        onMouseDown={(e) => {
          e.preventDefault();
        }}
      />
      <h3>Greetings and welcome to my personal website!</h3>
      <p>
        My name is Oleksandr Didyshen, and I am a dynamic and motivated
        individual who is passionate about Front-End Development.
      </p>
      <p>
        I am a firm believer in the power of hard work and dedication, and I
        bring these qualities to everything I do. Whether I'm developing new
        ideas, collaborating with colleagues, or pursuing my own personal
        projects.
      </p>
      <p>
        In my line of work, I have had the privilege of working with some of the
        most talented people. These experiences have taught me the importance of
        collaboration, communication, and perseverance, and have inspired me to
        continue learning and growing as a professional.
      </p>
      <p>
        Whether you're here to learn more about my professional background, read
        my latest blog post, or just say hello, I'm thrilled you stopped by. My
        website is a reflection of who I am and what I stand for, and I hope it
        will provide you with valuable information and inspiration. Thank you
        for visiting and I look forward to connecting with you.
      </p>
      <Specifics>
        <div>
          <Number>17</Number> <p>Finished projects</p>
        </div>
        <div>
          <Number>6</Number> <p>Months of experience</p>
        </div>
      </Specifics>
      <h2>Skills</h2>
      <SkillSection>
        <Skills>
          {languages.map((language) => (
            <div>
              {language.picture} {language.name}
            </div>
          ))}
        </Skills>
        <Skills>
          {tools.map((tool) => (
            <div>
              {tool.picture} {tool.name}
            </div>
          ))}
        </Skills>
      </SkillSection>
    </StyledAbout>
  );
}

export default About;
