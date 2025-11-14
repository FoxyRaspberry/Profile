import './Experience-card-component.css';

export function ExperienceCard({ period, title, subtitle }) {
  return (
    <div className='experience-card__container'>
      <div className='experience-card__text-container'>
        <div className='experience-card__period-and-title'>
          <h4 className='experience-card__title'>{title}</h4>
          <span className='experience-card__period'>{period}</span>
        </div>
        <p className='experience-card__subtitle'>{subtitle}</p>
      </div>
    </div>
  );
}
