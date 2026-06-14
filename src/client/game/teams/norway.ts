import { buildSquad, type TeamData } from './types';
import { F_433 } from './formations';

// Norway — 4-3-3.
export const norway: TeamData = {
  name: 'Norway',
  abbr: 'NOR',
  formation: '4-3-3',
  color: '#c8102e',
  textColor: '#ffffff',
  kit: { shirt: '#c8102e', sleeve: '#a00b24', outline: '#5e0714' },
  gkKit: { shirt: '#16a34a', sleeve: '#107a37', outline: '#08461f' },
  kickoffFwd: 9,
  players: buildSquad(F_433, [
    { num: 1, name: 'NYLAND' },
    { num: 2, name: 'RYERSON' },
    { num: 5, name: 'ØSTIGÅRD' },
    { num: 6, name: 'AJER' },
    { num: 3, name: 'WOLFE' },
    { num: 8, name: 'BERGE' },
    { num: 18, name: 'AURSNES' },
    { num: 10, name: 'ØDEGAARD' },
    { num: 7, name: 'NUSA' },
    { num: 9, name: 'HAALAND' },
    { num: 11, name: 'SØRLOTH' },
  ]),
};
