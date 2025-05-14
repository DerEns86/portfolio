export function skillsList() {
  return [
    { key: 'languages', values: ['Java', 'TypeScript', 'JavaScript'] },
    {
      key: 'frameworks',
      values: [
        'Angular',
        'Spring Boot',
        'TailwindCSS',
        'Bootstrap',
        'React',
        'Vue.js',
      ],
    },
    { key: 'databases', values: ['PostgeSQL', 'MySQL', 'MongoDB'] },
    {
      key: 'tools',
      values: [
        'Git',
        'Firebase',
        'CI/CD',
        'Docker',
        'Github Actions',
        'Scrum',
        'Material Design',
      ],
    },
    { key: 'testing', values: ['JUnit', 'Jasmine', 'Integration Tests'] },
    { key: 'other', values: ['HTML', 'CSS', 'RESTful APIs', 'RxJS'] },
  ];
}
