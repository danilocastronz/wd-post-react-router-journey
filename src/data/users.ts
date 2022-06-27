export interface User {
  id: number;
  name: string;
  emoji: string;
}

const users: User[] = [
  {
    id: 1,
    name: "Martin McFly",
    emoji: "🧑",
  },
  {
    id: 2,
    name: "Lorraine Baines",
    emoji: "👩",
  },
  {
    id: 3,
    name: "Doc Brown",
    emoji: "👴🏻",
  },
  {
    id: 4,
    name: "Einstein",
    emoji: "🐶",
  },
];

export function getUsers(): User[] {
  return users;
}
