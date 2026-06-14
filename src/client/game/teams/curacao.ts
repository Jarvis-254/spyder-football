import { buildSquad, type TeamData } from './types';
import { F_4231 } from './formations';

// Curaçao — 4-2-3-1 (World Cup debut).
export const curacao: TeamData = {
  name: 'Curaçao',
  abbr: 'CUW',
  formation: '4-2-3-1',
  color: '#0a285f',
  textColor: '#ffd200',
  kit: { shirt: '#0a285f', sleeve: '#071e47', outline: '#030f24' },
  gkKit: { shirt: '#16a34a', sleeve: '#107a37', outline: '#08461f' },
  kickoffFwd: 9,
  players: buildSquad(F_4231, [
    { num: 1, name: 'ROOS' },
    { num: 2, name: 'BACUNA J.' },
    { num: 5, name: 'JANGA' },
    { num: 4, name: 'MARTINA' },
    { num: 3, name: 'PEROTTI' },
    { num: 8, name: 'BACUNA L.' },
    { num: 6, name: 'GORRÉ' },
    { num: 10, name: 'SCHET' },
    { num: 7, name: 'CHONG' },
    { num: 9, name: 'LOCADIA' },
    { num: 11, name: 'KASTANEER' },
  ]),
};
