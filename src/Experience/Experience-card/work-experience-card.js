const workExperienceCardsInitialData = [
  {
    id: 1,
    periodFrom: '2022-09',
    periodTo: '2023-04',
    title: 'Course "UpSkillMe" from the company "EPAM"',
    subtitle: 'A course from the international company EPAM helped me acquire basic HTML, CSS, and JS skills.',
  },

  {
    id: 2,
    periodFrom: '2022-04',
    periodTo: '2022-05',
    title: 'HTML Academy and HTML and CSS Tutorials at w3schools',
    subtitle: 'Helped me solidify my acquired knowledge.',
  },

  {
    id: 3,
    periodFrom: '2023-05',
    periodTo: '2023-09',
    title: 'RS Schools Course "JavaScript/Front-end"',
    subtitle: 'This course provided a deeper understanding of JavaScript and front-end development.',
  },

  {
    id: 4,
    periodFrom: '2025-11',
    periodTo: null,
    title: 'React Developer Course from Praktikum',
    subtitle: 'I am exploring the React ecosystem, writing my own web app, and mastering Typescript and other useful tools.',
  },

  {
    id: 5,
    periodFrom: '2023-04',
    periodTo: null,
    title: 'Independent development',
    subtitle: 'Responsive website design of varying complexity based on Figma layouts, commissioned by clients.',
  },

  {
    id: 6,
    periodFrom: '2023-10',
    periodTo: '2025-09',
    title: 'A large company engaged in marketing',
    subtitle: 'Developed and optimized websites (html, css, js), developed landing pages on WordPress.',
  },
];

export const workExperienceCard = [...workExperienceCardsInitialData]
  .sort((a, b) => {
    const periodFromDifference = parsePeriodFrom(b.periodFrom) - parsePeriodFrom(a.periodFrom);
    if (periodFromDifference !== 0) {
      return periodFromDifference;
    }

    const periodToDifference = parsePeriodTo(b.periodTo) - parsePeriodTo(a.periodTo);
    return !Number.isNaN(periodToDifference) ? periodToDifference : 0;
  })
  .map((card) => {
    const period = generatePeriodText(card.periodFrom, card.periodTo);
    const { id, subtitle, title } = card;
    return {
      id,
      period,
      subtitle,
      title,
    };
  });


function generateDateText(dateStringOrNull) {
  if (dateStringOrNull !== null) {
    const date = new Date(dateStringOrNull);
    const month = (date.getMonth() + 1 + '').padStart(2, '0');
    const year = date.getFullYear();
    return `${year}-${month}`;
  }
  return 'present';
}

function generatePeriodText(periodFrom, periodTo) {
  return `${generateDateText(periodFrom)} – ${generateDateText(periodTo)}`;
}

function parsePeriodFrom(periodFrom) {
  return Date.parse(periodFrom);
}

function parsePeriodTo(periodTo) {
  return periodTo !== null ? Date.parse(periodTo) : Infinity;
}
