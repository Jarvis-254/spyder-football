import { buildSquad, type TeamData } from './types';
import { F_433 } from './formations';

// Cape Verde — 4-3-3 (World Cup debut).
export const capeVerde: TeamData = {
  name: 'Cape Verde',
  abbr: 'CPV',
  formation: '4-3-3',
  color: '#1f3a93',
  textColor: '#ffffff',
  kit: { shirt: '#1f3a93', sleeve: '#162b6f', outline: '#0a153a' },
  gkKit: { shirt: '#f59e0b', sleeve: '#c47b06', outline: '#7a4d02' },
  kickoffFwd: 9,
  players: buildSquad(F_433, [
    { num: 1, name: 'VOZINHA' },
    { num: 2, name: 'STOPIRA' },
    { num: 5, name: 'DIEY' },
    { num: 4, name: 'LOPES' },
    { num: 3, name: 'FERNANDES' },
    { num: 8, name: 'PINA' },
    { num: 6, name: 'MENDES' },
    { num: 10, name: 'TAVARES' },
    { num: 7, name: 'RODRIGUES' },
    { num: 9, name: 'CABRAL' },
    { num: 11, name: 'ANDRADE' },
  ]),
};
