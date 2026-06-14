import { buildSquad, type TeamData } from './types';
import { F_352 } from './formations';

// Scotland — 3-5-2.
export const scotland: TeamData = {
  name: 'Scotland',
  abbr: 'SCO',
  formation: '3-5-2',
  color: '#0a285f',
  textColor: '#ffffff',
  kit: { shirt: '#0a285f', sleeve: '#071e47', outline: '#030f24' },
  gkKit: { shirt: '#f59e0b', sleeve: '#c47b06', outline: '#7a4d02' },
  kickoffFwd: 9,
  players: buildSquad(F_352, [
    { num: 1, name: 'GUNN' },
    { num: 2, name: 'HENDRY' },
    { num: 5, name: 'McKENNA' },
    { num: 4, name: 'SOUTTAR' },
    { num: 6, name: 'McTOMINAY' },
    { num: 18, name: 'RALSTON' },
    { num: 8, name: 'McGINN' },
    { num: 14, name: 'GILMOUR' },
    { num: 3, name: 'ROBERTSON' },
    { num: 9, name: 'ADAMS' },
    { num: 17, name: 'McLEAN' },
  ]),
};
