import './Skill-card-component.css';

export function SkillCard({ image, name }) {
  return (
    <div className='skills-section__skill-card'>
      <img className='skills-section__skill-card-image' src={image} alt="skill" />
      <span className='skills-section__skill-card-name'>{name}</span>
      {/* <progress className='skills-section__skill-card-progress' value={value} max="100"></progress> */}
    </div>
  );
}
