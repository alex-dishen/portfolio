import useInView from 'hooks/useInView';
import Carousel from 'components/Carousel';
import Dots from 'components/Dots';
import Summery from 'components/Summery';
import { projects } from 'pages/Projects/constants';
import {
  StyledProjects,
  MainHeader,
  ProjectHolder,
  ProjectInitials,
  ProjectName,
  ProjectDescription,
  TechnologiesSection,
  TechnologiesHeader,
  Technologies,
  SummerySection,
  SummeryHeader,
  ProjectLinks,
  Link,
} from 'pages/Projects/styles';

function Projects() {
  const visibleSections = useInView('h2[id], p[id], #root div[id]');

  return (
    <StyledProjects>
      <MainHeader>Welcome to my projects</MainHeader>
      {projects.map((project, index) => (
        <ProjectHolder key={project.id}>
          <ProjectInitials
            id={`projectInitials${index}`}
            isVisible={visibleSections[`projectInitials${index}`]}
          >
            <ProjectName>{project.name}</ProjectName>
            <ProjectDescription>{project.description}</ProjectDescription>
          </ProjectInitials>

          <Carousel
            pictures={project.pictures}
            id={`carousel${index}`}
            isVisible={visibleSections[`carousel${index}`]}
          />

          <TechnologiesSection
            id={`technologiesSection${index}`}
            isVisible={visibleSections[`technologiesSection${index}`]}
          >
            <TechnologiesHeader>Technologies</TechnologiesHeader>
            <Technologies>{project.technologies}</Technologies>
          </TechnologiesSection>

          <SummerySection
            id={`summerySection${index}`}
            isVisible={visibleSections[`summerySection${index}`]}
          >
            <SummeryHeader>Summery</SummeryHeader>
            <Summery summery={project.summery} />
          </SummerySection>

          <ProjectLinks id={`projectLinks${index}`}>
            <Link
              href={project.live}
              target="_blank"
              isVisible={visibleSections[`projectLinks${index}`]}
            >
              Live Preview
            </Link>
            <Link
              href={project.code}
              target="_blank"
              isVisible={visibleSections[`projectLinks${index}`]}
            >
              View Code
            </Link>
          </ProjectLinks>
          {projects.length !== index + 1 && (
            <Dots isVisible={visibleSections[`projectLinks${index}`]} />
          )}
        </ProjectHolder>
      ))}
    </StyledProjects>
  );
}

export default Projects;
