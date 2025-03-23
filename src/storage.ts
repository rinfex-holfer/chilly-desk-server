import { v4 as uuidv4 } from 'uuid';
import { Desk } from '../types/desks';
import { GameTypeKey } from '../types/games';

const generateId = uuidv4;

export const desks: Desk[] = [{
  id: '1',
  name: 'Classroom',
  description: 'Classroom with a strict teacher',
  createdAt: new Date('2024-01-01'),
  updatedAt: new Date('2024-01-01'),
  games: ['pickMe', 'pickMe2']
},
{
  id: '2',
  name: 'Library room',
  description: 'Library room with a lot of bookshelves and a sleepy librarian',
  createdAt: new Date('2024-01-15'),
  updatedAt: new Date('2024-01-20'),
  games: ['pickMe', 'pickMe3']
},
{
  id: '3',
  name: 'Snowy cottage',
  description: 'Snowy cottage with a cozy fireplace and a snowfall outside',
  createdAt: new Date('2024-02-01'),
  updatedAt: new Date('2024-02-01'),
  games: ['pickMe2', 'pickMe3']
}];

export const findDesk = (deskId: string): Desk | undefined =>
  desks.find(desk => desk.id === deskId);

export const createNewDesk = ({
  name,
  description,
  games,
}: {
  name: string;
  description: string;
  games: GameTypeKey[];
}): Desk => {
  const desk: Desk = {
    id: generateId(),
    name,
    description,
    createdAt: new Date(),
    updatedAt: new Date(),
    games,
  };

  desks.push(desk);

  return desk;
};
