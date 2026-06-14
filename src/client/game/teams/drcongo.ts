import { buildSquad, type TeamData } from './types';
import { F_433 } from './formations';

// DR Congo — 4-3-3.
export const drCongo: TeamData = {
  name: 'DR Congo',
  abbr: 'COD',
  formation: '4-3-3',
  color: '#1f8fff',
  textColor: '#ffd200',
  kit: { shirt: '#1f8fff', sleeve: '#1670cc', outline: '#0b3e72' },
  gkKit: { shirt: '#111827', sleeve: '#0a0f1c', outline: '#000000' },
  kickoffFwd: 9,
  players: buildSquad(F_433, [
    { num: 1, name: 'MPASI' },
    { num: 2, name: 'MBEMBA' },
    { num: 5, name: 'MUKAU' },
    { num: 4, name: 'KIALONDA' },
    { num: 3, name: 'MASUAKU' },
    { num: 8, name: 'MOUTOUSSAMY' },
    { num: 6, name: 'PICKEL' },
    { num: 10, name: 'WISSA' },
    { num: 7, name: 'BAKAMBU' },
    { num: 9, name: 'ELIA' },
    { num: 11, name: 'MUANANGA' },
  ]),
};
