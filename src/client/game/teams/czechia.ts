import { buildSquad, type TeamData } from './types';
import { F_4231 } from './formations';

// Czech Republic — 4-2-3-1.
export const czechia: TeamData = {
  name: 'Czech Republic',
  abbr: 'CZE',
  formation: '4-2-3-1',
  color: '#c8102e',
  textColor: '#ffffff',
  kit: { shirt: '#c8102e', sleeve: '#a00b24', outline: '#5e0714' },
  gkKit: { shirt: '#111827', sleeve: '#0a0f1c', outline: '#000000' },
  kickoffFwd: 9,
  players: buildSquad(F_4231, [
    { num: 1, name: 'STANĚK' },
    { num: 2, name: 'COUFAL' },
    { num: 4, name: 'HRANÁČ' },
    { num: 3, name: 'KREJČÍ' },
    { num: 18, name: 'ZELENÝ' },
    { num: 8, name: 'SOUČEK' },
    { num: 14, name: 'PROVOD' },
    { num: 10, name: 'ŠULC' },
    { num: 20, name: 'ČERNÝ' },
    { num: 9, name: 'CHORÝ' },
    { num: 7, name: 'HLOŽEK' },
  ]),
};
