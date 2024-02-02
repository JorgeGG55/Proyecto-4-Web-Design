const data = {
  name: 'Jorge Gravel',
  address: 'Las Rozas de Madrid, Madrid',
  email: 'jorge.gravel.g@gmail.com',
  avatar: './assets/jorge.jpg',
  github_avatar: './assets/github-avatar.jpg',
  aboutMe:
    'I am a highly motivated Full Stack developer passionate about software development. I possess a strong knowledge of web technologies, including JavaScript, TypeScript, PHP, React, Next, Node, SQL, and NoSQL. My goal is to create exceptional user experiences, focusing on interactive design and intuitive functionality.',

  education: {
    degree: 'CFGS - Multiplatform Application Development',
    university: ' University of Technology, Arts and Design, Madrid',
    startYear: 2021,
    graduationYear: 2023,
    skillsLearned: [
      'Java',
      'HTML',
      'CSS',
      'JavaScript',
      'SwiftUI',
      'Kotlin',
      'MySQL',
      'MongoDB',
      'Git'
    ],
    university_image: './assets/utad.png'
  },
  workExperience: [
    {
      position: 'Web Developer Intern',
      company: 'Alebat',
      startDate: '2023',
      endDate: '2023',
      company_image: './assets/alebat.jpg',
      description:
        'During my internship, I carried out training activities in the software development field, which included Rest service testing, e-commerce development with WordPress, digital content transcoding, and website creation for clients.'
    }
  ],
  projects: [
    {
      title: 'Fyra.',
      description:
        'Designed and developed a feature-rich e-commerce platform with advanced product search, user reviews, and a secure payment system, resulting in a 30% increase in sales for the client.',
      link: 'https://fyra.es/',
      preview: './assets/fyra.png'
    }
  ]
};

export default data;
