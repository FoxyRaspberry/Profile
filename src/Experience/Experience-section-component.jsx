import './Experience-section-component.css';
import { ExperienceCard } from './Experience-card/Experience-card-component.jsx';
import { workExperienceCard } from './Experience-card/work-experience-card.js';


export function Experience() {
  return (
    <>
      <div className='experience-section'>
        <div className='wrapper'>
          <div className='experience-section__item-container'>
            <h1 className='experience-section__title'>Work and Education</h1>
            <p className='experience-section__subtitle'>I develop and optimize landing pages for a large company, and I also work on several personal projects, gaining experience in web development. Here are some examples of my work experience and education.</p>
          </div>
          <div className='experience-section__experience-card-container'>
            <ul className='experience-section__experience-card-list'>
              {workExperienceCard.map((card) => (
                <ExperienceCard key={card.id} title={card.title} subtitle={card.subtitle}/>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
