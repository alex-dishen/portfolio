'use client'

import Image from 'next/image'
import useInView from 'src/hooks/useInView'
import { front, back, tools } from './constants'
import {
  StyledAbout,
  Header,
  Greeting,
  AboutMe,
  Specifics,
  Projects,
  Experience,
  Number,
  SkillsHeader,
  SkillsSection,
  Skills,
} from './styles'

const About = () => {
  const visibleSections = useInView('section[id], h2[id], body div[id]')

  return (
    <StyledAbout>
      <Header>Meet Oleksandr</Header>
      <Image
        unoptimized
        src="/red-shirt.webp"
        alt="Oleksandr in red shirt"
        height={350}
        width={600}
      />
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
          <Number>21</Number> <p>Finished projects</p>
        </Projects>
        <Experience isVisible={visibleSections?.specifics}>
          <Number>12</Number> <p>Months of experience</p>
        </Experience>
      </Specifics>
      <SkillsHeader id="skills" isVisible={visibleSections?.skills}>
        Skills
      </SkillsHeader>
      <SkillsSection>
        <Skills id="front" isVisible={visibleSections?.front}>
          {front.map(({ id, picture, name }) => (
            <div key={id}>
              {picture} {name}
            </div>
          ))}
        </Skills>
        <Skills id="back" isVisible={visibleSections?.back}>
          {back.map(({ id, picture, name }) => (
            <div key={id}>
              {picture} {name}
            </div>
          ))}
        </Skills>
        <Skills id="tools" isVisible={visibleSections?.tools}>
          {tools.map(({ id, picture, name }) => (
            <div key={id}>
              {picture} {name}
            </div>
          ))}
        </Skills>
      </SkillsSection>
    </StyledAbout>
  )
}

export default About
