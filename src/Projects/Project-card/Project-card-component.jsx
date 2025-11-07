import './project-card-component.css';
import { projectsCard } from './project-card.js'

export function ProjectCard({image, title, subtitle, link}) {

  return (
    <li className='projects-section__project-card projects-section__project-card--gradient-border'>
      <img className='projects-section__project-card-image' src={image} alt="project" />
      <h4 className='projects-section__project-card-title'>{title}</h4>
      <p className='projects-section__project-card-subtitle'>{subtitle}</p>
      <a className='projects-section__project-card-link' href={link}>Visit</a>
    </li>
  );
}
