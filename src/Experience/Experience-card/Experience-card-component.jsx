import './Experience-card-component.css';

export function ExperienceCard({ period, title, subtitle }) {

  return (
    <div className='experience-section__experience-card-container'>
      <div className='experience-section__experience-card-text-container'>
        <div className='experience-section__experience-card-text'>
          <h4 className='experience-section__experience-card-title'>{title}</h4>
          <span className='experience-section__experience-card-period'>{period}</span>
        </div>
        <p className='experience-section__experience-card-subtitle'>{subtitle}</p>
      </div>
    </div>
  );
}
