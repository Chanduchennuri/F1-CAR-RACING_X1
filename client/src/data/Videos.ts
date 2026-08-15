export interface VideoData {
  id: number;
  title: string;
  category: string;
  duration: string;
  publishedAt: string;
  thumbnail: string;
  description: string;
}

export const videosData: VideoData[] = [
  {
    id: 1,
    title: "Race Highlights",
    category: "Race Highlights",
    duration: "12:45",
    publishedAt: "2 hours ago",
    thumbnail: "/assets/videos/F1_the.jpg",
    description:
      "Catch the biggest moments, overtakes and battles from the latest Grand Prix.",
  },
  {
    id: 2,
    title: "Qualifying Highlights",
    category: "Qualifying",
    duration: "08:32",
    publishedAt: "5 hours ago",
    thumbnail: "/assets/videos/f1_the.jpg",
    description:
      "The fastest laps and most important moments from qualifying.",
  },
  {
    id: 3,
    title: "Driver Interview",
    category: "Interviews",
    duration: "06:18",
    publishedAt: "8 hours ago",
    thumbnail: "/assets/videos/interview.jpg",
    description:
      "Hear from the drivers as they discuss the race weekend.",
  },
  {
    id: 4,
    title: "Best Overtakes",
    category: "Highlights",
    duration: "10:21",
    publishedAt: "1 day ago",
    thumbnail: "/assets/videos/overtakes.jpg",
    description:
      "Some of the most exciting overtakes from the season.",
  },
  {
    id: 5,
    title: "Behind the Scenes",
    category: "Behind the Scenes",
    duration: "09:47",
    publishedAt: "1 day ago",
    thumbnail: "/assets/videos/behind-scenes.jpg",
    description:
      "Take a look behind the scenes of a Formula 1 race weekend.",
  },
  {
    id: 6,
    title: "Team Radio Moments",
    category: "Team Radio",
    duration: "07:15",
    publishedAt: "2 days ago",
    thumbnail: "/assets/videos/team-radio.jpg",
    description:
      "The most memorable team radio moments from the weekend.",
  },
];