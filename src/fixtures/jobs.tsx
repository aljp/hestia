import { Job } from "../models/Job";

const jobs: Job[] = [
  {
    id: 1,
    title: "Blocked Toilet",
    when: new Date(),
    where: "123 Fake Street",
    location: {
      latitude: -33.7468,
      longitude: 151.2727
    },
    comments: ['some comments', 'more comments'],
  },
  {
    id: 2,
    title: "Blocked Toilet",
    when: new Date(),
    where: "123 Fake Street",
    location: {
      latitude: -33.7468,
      longitude: 151.2727
    },
    comments: ['some comments', 'more comments'],
  },
  {
    id: 3,
    title: "Blocked Toilet",
    when: new Date(),
    where: "123 Fake Street",
    location: {
      latitude: -33.7463,
      longitude: 151.2727
    },
    comments: ['some comments', 'more comments'],
  },
  {
    id: 4,
    title: "Blocked Toilet",
    when: new Date(),
    where: "123 Fake Street",
    location: {
      latitude: -33.7448,
      longitude: 151.2727
    },
    comments: ['some comments', 'more comments'],
  },
  {
    id: 5,
    title: "Blocked Toilet",
    when: new Date(),
    where: "123 Fake Street",
    location: {
      latitude: -33.7468,
      longitude: 151.2747
    },
    comments: ['some comments', 'more comments'],
  },
];

export default jobs;
