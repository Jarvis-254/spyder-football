import { buildSquad, type TeamData } from './types';
import { F_433 } from './formations';

// Haiti — 4-3-3.
export const haiti: TeamData = {
  name: 'Haiti',
  abbr: 'HAI',
  formation: '4-3-3',
  color: '#1f3a93',
  textColor: '#ffffff',
  kit: { shirt: '#1f3a93', sleeve: '#162b6f', outline: '#0a153a' },
  gkKit: { shirt: '#c8102e', sleeve: '#a00b24', outline: '#5e0714' },
  kickoffFwd: 9,
  players: buildSquad(F_433, [
    { num: 1, name: 'PLACIDE' },
    { num: 2, name: 'GONZALEZ' },
    { num: 5, name: 'ADÉ' },
    { num: 4, name: 'BOUCICAUT' },
    { num: 3, name: 'JEAN-BAPTISTE' },
    { num: 8, name: 'BELLEGARDE' },
    { num: 6, name: 'PIERROT G.' },
    { num: 10, name: 'SAINT-JUSTE' },
    { num: 7, name: 'DESULME' },
    { num: 9, name: 'PIERROT' },
    { num: 11, name: 'CICILIANO' },
  ]),
};
