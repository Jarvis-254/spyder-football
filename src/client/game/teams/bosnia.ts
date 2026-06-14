import { buildSquad, type TeamData } from './types';
import { F_4231 } from './formations';

// Bosnia and Herzegovina — 4-2-3-1.
export const bosnia: TeamData = {
  name: 'Bosnia & H.',
  abbr: 'BIH',
  formation: '4-2-3-1',
  color: '#1f57b6',
  textColor: '#ffd200',
  kit: { shirt: '#1f57b6', sleeve: '#16438f', outline: '#0a234d' },
  gkKit: { shirt: '#f59e0b', sleeve: '#c47b06', outline: '#7a4d02' },
  kickoffFwd: 9,
  players: buildSquad(F_4231, [
    { num: 1, name: 'VASILJ' },
    { num: 21, name: 'KATIĆ' },
    { num: 5, name: 'BIČAKČIĆ' },
    { num: 6, name: 'BARIŠIĆ' },
    { num: 3, name: 'MUJAKIĆ' },
    { num: 8, name: 'PJANIĆ' },
    { num: 14, name: 'GIGOVIĆ' },
    { num: 10, name: 'TABAKOVIĆ' },
    { num: 7, name: 'HADŽIAHMETOVIĆ' },
    { num: 9, name: 'DEMIROVIĆ' },
    { num: 11, name: 'BAJRAKTAREVIĆ' },
  ]),
};
