import uniqid from 'uniqid';
import Carousel from 'components/Carousel';
import Dots from 'components/Dots';
import projects from 'pages/Projects/constants';
import {
  StyledProjects,
  ProjectHolder,
  ProjectInfo,
  ProjectLinks,
  Link,
} from 'pages/Projects/styles';

function Projects() {
  return (
    <StyledProjects>
      <h1>Welcome to my projects</h1>
      {projects.map((project, i) => (
        <ProjectHolder key={uniqid()}>
          <h2>{project.name}</h2>
          <h4>{project.description}</h4>
          <Carousel pictures={project.pictures} />
          <ProjectInfo>
            <h3>Technologies</h3>
            <p>{project.technologies}</p>

            <h3>Summery</h3>
            <p>{project.summery}</p>

            <ProjectLinks>
              <Link href={project.live} target="_blank">
                Live Preview
              </Link>
              <Link href={project.code} target="_blank">
                View Code
              </Link>
            </ProjectLinks>
          </ProjectInfo>
          {projects.length !== i + 1 && <Dots />}
        </ProjectHolder>
      ))}
    </StyledProjects>
  );
}

export default Projects;
