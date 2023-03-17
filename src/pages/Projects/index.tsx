import { motion } from 'framer-motion';
import uniqid from 'uniqid';
import Carousel from 'components/Carousel';
import Dots from 'components/Dots';
import {
  projects,
  headerAnimation,
  secondaryHeaderAnimation,
  generalAnimation,
} from 'pages/Projects/constants';
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
      <motion.h1 variants={headerAnimation} initial="hidden" animate="show">
        Welcome to my projects
      </motion.h1>
      {projects.map((project, i) => (
        <ProjectHolder key={uniqid()}>
          <motion.h2
            variants={secondaryHeaderAnimation}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {project.name}
          </motion.h2>
          <motion.h4
            variants={generalAnimation}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {project.description}
          </motion.h4>
          <Carousel pictures={project.pictures} />
          <ProjectInfo>
            <motion.h3
              variants={generalAnimation}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              Technologies
            </motion.h3>
            <motion.p
              variants={generalAnimation}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {project.technologies}
            </motion.p>

            <motion.h3
              variants={generalAnimation}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              Summery
            </motion.h3>
            <motion.p
              variants={generalAnimation}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {project.summery}
            </motion.p>

            <ProjectLinks
              variants={generalAnimation}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
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
