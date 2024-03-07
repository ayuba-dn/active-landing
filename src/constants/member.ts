export interface MemberProps {
  name: string;
  role: string;
  imageUrl: string;
  linkedin?: string;
  github?: string;
  email?: string;
  skills: string[];
}

export const membersList: MemberProps[] = [
  {
    name: 'Debasish Sarkar',
    role: 'DevOps engineer',
    imageUrl: 'debasish.png',
    skills: ['AWS', 'Docker', 'Terraform', 'Kubernetes', 'Jenkins'],
    linkedin: 'linkedin.com/in/debasish-sarkar-08465388',
    github: '',
    email: 'debasishrocks27@gmail.com',
  },
  {
    name: 'Antaro Hyedima Waha',
    role: 'Senior backend engineer',
    imageUrl: '',
    skills: [
      'Node JS',
      'Unit Testing',
      'Server administration',
      'Docker',
      'Redis',
    ],
    linkedin: '',
    github: 'hyedima',
    email: 'hyedimawaha@gmail.com',
  },
  //   {
  //     name: '',
  //     role: '',
  //     skills: ['', '', '', '', ''],
  //     linkedin: '',
  //     github: '',
  //     email: '',
  //   },
  //   {
  //     name: '',
  //     role: '',
  //     skills: ['', '', '', '', ''],
  //     linkedin: '',
  //     github: '',
  //     email: '',
  //   },
  //   {
  //     name: '',
  //     role: '',
  //     skills: ['', '', '', '', ''],
  //     linkedin: '',
  //     github: '',
  //     email: '',
  //   },
];
