import useInView from 'hooks/useInView';
import Carousel from 'components/Carousel';
import Dots from 'components/Dots';
import Summary from 'components/Summary';
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
  SummarySection,
  SummaryHeader,
  ProjectLinks,
  Link,
} from 'pages/Projects/styles';
import DownloadButton from 'components/DownloadButton';
import { ReactComponent as Apple } from 'assets/icons/apple.svg';

const Projects = () => {
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
            name={project.name}
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

          <SummarySection
            id={`summarySection${index}`}
            isVisible={visibleSections[`summarySection${index}`]}
          >
            <SummaryHeader>Summary</SummaryHeader>
            <Summary summary={project.summary} />
          </SummarySection>

          <ProjectLinks id={`projectLinks${index}`}>
            {project.appleLink ? (
              <DownloadButton
                icon={<Apple />}
                text="Download on the"
                platform="App Store"
                href={project.appleLink}
              />
            ) : (
              <>
                <Link
                  href={project.live}
                  target="_blank"
                  isVisible={visibleSections[`projectLinks${index}`]}
                >
                  🚀 Live Preview
                </Link>

                {project.code && (
                  <Link
                    href={project.code}
                    target="_blank"
                    isVisible={visibleSections[`projectLinks${index}`]}
                  >
                    ⚗️ View Code
                  </Link>
                )}
              </>
            )}
          </ProjectLinks>
          {projects.length !== index + 1 && (
            <Dots isVisible={visibleSections[`projectLinks${index}`]} />
          )}
        </ProjectHolder>
      ))}
    </StyledProjects>
  );
};

export default Projects;
