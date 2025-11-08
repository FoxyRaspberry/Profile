import './Skill-card-component.css';

export function SkillCard({image, name, value}) {

  return (
    <li className='skills-section__skill-card skills-section__skill-card--gradient-border'>
      <img className='skills-section__skill-card-image' src={image} alt="skill" />
      <span className='skills-section__skill-card-name'>{name}</span>
      {/* <progress className='skills-section__skill-card-progress' value={value} max="100"></progress> */}
    </li>
  );
}
