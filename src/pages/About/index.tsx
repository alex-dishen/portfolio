import useInView from 'hooks/useInView';
import { languages, tools } from 'pages/About/constants';
import {
  StyledAbout,
  Header,
  Image,
  Greeting,
  AboutMe,
  Specifics,
  Projects,
  Experience,
  Number,
  SkillsHeader,
  SkillsSection,
  Skills,
  Tools,
} from 'pages/About/styles';
import meInRedShirt from 'assets/red-shirt.webp';

function About() {
  const visibleSections = useInView('section[id], h2[id]');

  return (
    <StyledAbout>
      <Header>Meet Oleksandr</Header>
      <Image src={meInRedShirt} onMouseDown={(e) => e.preventDefault()} />
      <Greeting>Greetings and welcome to my personal website!</Greeting>
      <AboutMe>
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
      </AboutMe>
      <Specifics id="specifics">
        <Projects isVisible={visibleSections?.specifics}>
          <Number>17</Number> <p>Finished projects</p>
        </Projects>
        <Experience isVisible={visibleSections?.specifics}>
          <Number>6</Number> <p>Months of experience</p>
        </Experience>
      </Specifics>
      <SkillsHeader id="skills" isVisible={visibleSections?.skills}>
        Skills
      </SkillsHeader>
      <SkillsSection id="tools">
        <Skills isVisible={visibleSections?.tools}>
          {languages.map((language) => (
            <div key={language.id}>
              {language.picture} {language.name}
            </div>
          ))}
        </Skills>
        <Tools isVisible={visibleSections?.tools}>
          {tools.map((tool) => (
            <div key={tool.id}>
              {tool.picture} {tool.name}
            </div>
          ))}
        </Tools>
      </SkillsSection>
    </StyledAbout>
  );
}

export default About;
