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

function Projects() {
  const visibleSections = useInView('h2[id], p[id], #root div[id]');

  return (
    <StyledProjects>
      <MainHeader>Welcome to my projects</MainHeader>
      {projects.map(
        (
          {
            id,
            name,
            description,
            pictures,
            technologies,
            summary,
            live,
            code,
          },
          index
        ) => (
          <ProjectHolder key={id}>
            <ProjectInitials
              id={`projectInitials${index}`}
              isVisible={visibleSections[`projectInitials${index}`]}
            >
              <ProjectName>{name}</ProjectName>
              <ProjectDescription>{description}</ProjectDescription>
            </ProjectInitials>

            <Carousel
              pictures={pictures}
              name={name}
              id={`carousel${index}`}
              isVisible={visibleSections[`carousel${index}`]}
            />

            <TechnologiesSection
              id={`technologiesSection${index}`}
              isVisible={visibleSections[`technologiesSection${index}`]}
            >
              <TechnologiesHeader>Technologies</TechnologiesHeader>
              <Technologies>{technologies}</Technologies>
            </TechnologiesSection>

            <SummarySection
              id={`summarySection${index}`}
              isVisible={visibleSections[`summarySection${index}`]}
            >
              <SummaryHeader>Summary</SummaryHeader>
              <Summary summary={summary} />
            </SummarySection>

            <ProjectLinks id={`projectLinks${index}`}>
              <Link
                href={live}
                target="_blank"
                isVisible={visibleSections[`projectLinks${index}`]}
              >
                Live Preview
              </Link>
              {code && (
                <Link
                  href={code}
                  target="_blank"
                  isVisible={visibleSections[`projectLinks${index}`]}
                >
                  View Code
                </Link>
              )}
            </ProjectLinks>
            {projects.length !== index + 1 && (
              <Dots isVisible={visibleSections[`projectLinks${index}`]} />
            )}
          </ProjectHolder>
        )
      )}
    </StyledProjects>
  );
}

export default Projects;
