export const workExperienceCard = [
  {
    id: 1,
    period: '09.2022 - 04.2023',
    periodFrom: '2022-09',
    periodTo: '2023-04',
    title: 'Course "UpSkillMe" from the company "EPAM"',
    subtitle: 'A course from the international company EPAM helped me acquire basic HTML, CSS, and JS skills.',
  },

  {
    id: 2,
    period: '04.2022 - 05.2022',
    periodFrom: '2022-04',
    periodTo: '2022-05',
    title: 'HTML Academy and HTML and CSS Tutorials at w3schools',
    subtitle: 'Helped me solidify my acquired knowledge.',
  },

  {
    id: 3,
    period: '05.2023 - 09.2023',
    periodFrom: '2023-05',
    periodTo: '2023-09',
    title: 'RS Schools Course "JavaScript/Front-end"',
    subtitle: 'This course provided a deeper understanding of JavaScript and front-end development.',
  },

  {
    id: 4,
    period: '11.2025 - present',
    periodFrom: '2025-11',
    periodTo: null,
    title: 'React Developer Course from Praktikum',
    subtitle: 'I am exploring the React ecosystem, writing my own web app, and mastering Typescript and other useful tools.',
  },


  {
    id: 5,
    period: '04.2023 - present',
    periodFrom: '2023-04',
    periodTo: null,
    title: 'Independent development',
    subtitle: 'Responsive website design of varying complexity based on Figma layouts, commissioned by clients.',
  },

  {
    id: 6,
    period: '10.2023 - 09.2025',
    periodFrom: '2023-10',
    periodTo: '2025-09',
    title: 'A large company engaged in marketing',
    subtitle: 'Developed and optimized websites (html, css, js), developed landing pages on WordPress.',
  },
];

workExperienceCard.sort((a, b) => {
  const periodFromDifference = parsePeriodFrom(b.periodFrom) - parsePeriodFrom(a.periodFrom);
  if (periodFromDifference !== 0) {
    return periodFromDifference;
  }

  const periodToDifference = parsePeriodTo(b.periodTo) - parsePeriodTo(a.periodTo);
  return !Number.isNaN(periodToDifference) ? periodToDifference : 0;
});


function parsePeriodFrom(periodFrom) {
  return Date.parse(periodFrom)
}

function parsePeriodTo(periodTo) {
  return periodTo !== null ? Date.parse(periodTo) : Infinity
}
