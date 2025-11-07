import './Projects-section-component.css';
import { ProjectCard } from './Project-card/Project-card-component.jsx';
import { projectsCard } from './Project-card/project-card.js';

export function Projects() {
  return (
    <>
      <div className='projects-section'>
        <div className='wrapper'>
          <div className='projects-section__item-container'>
            <h1 className='projects-section__title'>Projects</h1>
            <p className='projects-section__subtitle'>Here are some of the projects I've worked on. This is a constantly growing list of my work, demonstrating my skills and interests in web development.</p>
          </div>
          <div className='projects-section__project-card-container'>
            <ul className='projects-section__project-card-list'>
              {projectsCard.map((card) => (
                <ProjectCard key={card.id} image={card.image} title={card.title} subtitle={card.subtitle} link={card.link}/>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
