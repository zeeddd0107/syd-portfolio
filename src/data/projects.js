import gymplifyImage from '@/assets/images/projects/gymplify-dashboard.png';
import secondImage from '@/assets/images/projects/secondImage.png';

export const projects = [
  {
    id: 'gymplify',
    title: 'GymPlify',
    description:
      'A full-stack fitness management platform spanning web and mobile applications, with Firebase-powered data, authentication, notifications, and an Express backend.',
    technologies: [
      'React',
      'Vite',
      'Tailwind CSS',
      'Firebase',
      'Express',
      'React Native',
      'Expo',
    ],
    githubUrl: 'https://github.com/zeeddd0107/GymPlify',
    liveUrl: null,
    image: gymplifyImage,
    imageAlt: 'GymPlify fitness management dashboard showing workout and member information',
    images: [
    {
      src: gymplifyImage,
      alt: 'GymPlify fitness management dashboard showing workout and member information',
    },
    {
      src: secondImage,
      alt: 'GymPlify mobile workout tracking screen',
    },
],
    type: 'website',
    size: 'wide',
  },
  {
    id: 'devtrack',
    title: 'DevTrack',
    description:
      'A focused dashboard concept for organizing development tasks, learning goals, and project milestones in one place. ',
    technologies: ['React', 'Tailwind CSS', 'Node.js'],
    githubUrl: null,
    liveUrl: null,
    image: null,
    imageAlt: 'DevTrack dashboard concept preview placeholder',
    type: 'web-app',
    size: 'standard',
  },
  {
    id: 'api-pulse',
    title: 'API Pulse',
    description:
      'A lightweight monitoring concept for checking API health, response time, and service availability.',
    technologies: ['JavaScript', 'Express', 'REST API'],
    githubUrl: null,
    liveUrl: null,
    image: null,
    imageAlt: 'API Pulse monitoring concept preview placeholder',
    type: 'tool',
    size: 'standard',
  },
  {
    id: 'campus-connect',
    title: 'Campus Connect',
    description:
      'A mobile collaboration concept that helps students discover groups, coordinate activities, and share campus updates.',
    technologies: ['React Native', 'Expo', 'Firebase'],
    githubUrl: null,
    liveUrl: null,
    image: null,
    imageAlt: 'Campus Connect mobile concept preview placeholder',
    type: 'mobile-app',
    size: 'wide',
  },
];