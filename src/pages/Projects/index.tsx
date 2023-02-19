import Carousel from 'pages/Projects/Carousel';
import projects from 'pages/Projects/constants';
import {
  StyledProjects,
  ProjectHolder,
  ProjectInfo,
  Summery,
} from 'pages/Projects/styles';

function Projects() {
  return (
    <StyledProjects>
      <h1>Projects</h1>
      {projects.map((project) => (
        <ProjectHolder>
          <Carousel pictures={project.pictures} />
          <ProjectInfo>
            <Summery>
              <h3>Summery</h3>
              <p>{project.description}</p>
            </Summery>
            <div>
              <h4>Technologies</h4>
              <p>{project.technologies}</p>
            </div>
            <div>
              <button type="button">Live Preview</button>
              <button type="button">View code</button>
            </div>
          </ProjectInfo>
        </ProjectHolder>
      ))}
    </StyledProjects>
  );
}

export default Projects;
