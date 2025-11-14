import './Experience-section-component.css';
import { ExperienceCard } from './Experience-card/Experience-card-component.jsx';
import { workExperienceCard } from './Experience-card/work-experience-card.js';


export function Experience() {
  return (
    <>
      <div className='experience-section'>
        <div className='wrapper'>
          <div className='experience-section__item-container'>
            <div className='gradient-underline'><h1 className='experience-section__title'>Work and Education</h1></div>
            <p className='experience-section__subtitle'>I develop and optimize landing pages for a large company, and I also work on several personal projects, gaining experience in web development. Here are some examples of my work experience and education.</p>
          </div>
          <div className='experience-section__experience-card-list-container'>
            <ul className='experience-section__experience-card-list'>
              {workExperienceCard.map((card) => (
                <li key={card.id} className='experience-section__experience-card-item'>
                  <div className='experience-section__experience-card-container'>
                    <ExperienceCard period={card.period} title={card.title} subtitle={card.subtitle}/>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
