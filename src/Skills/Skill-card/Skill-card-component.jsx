import './Skill-card-component.css';

export function SkillCard({ image, name }) {
  return (
    <div className='skill-card__container'>
      <img className='skill-card__image' src={image} alt="skill" />
      <span className='skill-card__title'>{name}</span>
      {/* <progress className='skills-section__skill-card-progress' value={value} max="100"></progress> */}
    </div>
  );
}
