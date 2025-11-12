import './Skills-section-component.css';
import { SkillCard } from './Skill-card/Skill-card-component.jsx';
import { skillsCard } from './Skill-card/skills-card.js';

export function Skills() {
  return (
    <>
      <div className='skills-section'>
        <div className='wrapper'>
          <div className='skills-section__item-container '>
            <div className='gradient-underline'><h1 className='skills-section__title'>Skills</h1></div>
            <p className='skills-section__subtitle'>The main technologies and tools that I own.</p>
          </div>
          <div className='skills-section__skill-card-container'>
            <ul className='skills-section__skill-card-list'>
              {skillsCard.map((card) => (
                <li key={card.id} className='skills-section__skill-card--gradient-border'>
                  <SkillCard image={card.image} name={card.name} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
