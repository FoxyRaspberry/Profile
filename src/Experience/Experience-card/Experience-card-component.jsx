import './Experience-card-component.css';

export function ExperienceCard({title, subtitle}) {

  return (
    <li className='experience-section__experience-card'>
      <h4 className='experience-section__experience-card-title'>{title}</h4>
      <p className='experience-section__experience-card-subtitle'>{subtitle}</p>
    </li>
  );
}
