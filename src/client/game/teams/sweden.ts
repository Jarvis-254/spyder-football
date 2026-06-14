import { buildSquad, type TeamData } from './types';
import { F_442 } from './formations';

// Sweden — 4-4-2.
export const sweden: TeamData = {
  name: 'Sweden',
  abbr: 'SWE',
  formation: '4-4-2',
  color: '#1f6bd6',
  textColor: '#ffd200',
  kit: { shirt: '#ffd200', sleeve: '#d8b000', outline: '#7a6300' },
  gkKit: { shirt: '#1f6bd6', sleeve: '#1652a8', outline: '#0a2a5e' },
  kickoffFwd: 9,
  players: buildSquad(F_442, [
    { num: 1, name: 'OLSEN' },
    { num: 2, name: 'KRAFTH' },
    { num: 5, name: 'LINDELÖF' },
    { num: 4, name: 'STARFELT' },
    { num: 3, name: 'AUGUSTINSSON' },
    { num: 7, name: 'LARSSON' },
    { num: 8, name: 'BERGVALL' },
    { num: 16, name: 'AYARI' },
    { num: 11, name: 'BERNHARDSSON' },
    { num: 9, name: 'GYÖKERES' },
    { num: 10, name: 'ISAK' },
  ]),
};
