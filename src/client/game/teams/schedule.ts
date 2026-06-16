import type { TeamData } from './types';

// ── Team imports ─────────────────────────────────────────────────────────
import { argentina } from './argentina';
import { brazil } from './brazil';
import { uruguay } from './uruguay';
import { colombia } from './colombia';
import { ecuador } from './ecuador';
import { paraguay } from './paraguay';
import { france } from './france';
import { spain } from './spain';
import { england } from './england';
import { germany } from './germany';
import { portugal } from './portugal';
import { netherlands } from './netherlands';
import { croatia } from './croatia';
import { belgium } from './belgium';
import { switzerland } from './switzerland';
import { austria } from './austria';
import { turkey } from './turkey';
import { norway } from './norway';
import { sweden } from './sweden';
import { scotland } from './scotland';
import { czechia } from './czechia';
import { bosnia } from './bosnia';
import { usa } from './usa';
import { mexico } from './mexico';
import { canada } from './canada';
import { panama } from './panama';
import { curacao } from './curacao';
import { haiti } from './haiti';
import { japan } from './japan';
import { southKorea } from './southkorea';
import { iran } from './iran';
import { australia } from './australia';
import { saudiArabia } from './saudiarabia';
import { qatar } from './qatar';
import { uzbekistan } from './uzbekistan';
import { iraq } from './iraq';
import { jordan } from './jordan';
import { morocco } from './morocco';
import { senegal } from './senegal';
import { egypt } from './egypt';
import { ghana } from './ghana';
import { algeria } from './algeria';
import { ivoryCoast } from './ivorycoast';
import { tunisia } from './tunisia';
import { southAfrica } from './southafrica';
import { capeVerde } from './capeverde';
import { drCongo } from './drcongo';
import { newZealand } from './newzealand';

// ── Groups (illustrative — real draw is post-game data) ──────────────────
// Hosts seeded per FIFA: Mexico=A1, Canada=B1, USA=D1. The other 9 group
// heads are seeded by FIFA Ranking. Pots 2/3/4 mixed for variety.
export const GROUPS: Record<string, TeamData[]> = {
  A: [mexico, algeria, czechia, switzerland],
  B: [canada, belgium, iran, capeVerde],
  C: [usa, norway, tunisia, curacao],
  D: [argentina, croatia, ghana, australia],
  E: [brazil, netherlands, egypt, newZealand],
  F: [spain, uruguay, senegal, southKorea],
  G: [france, portugal, ivoryCoast, japan],
  H: [england, colombia, morocco, panama],
  I: [germany, ecuador, southAfrica, uzbekistan],
  J: [turkey, paraguay, drCongo, iraq],
  K: [scotland, sweden, saudiArabia, haiti],
  L: [austria, bosnia, qatar, jordan],
};

// ── Schedule type ────────────────────────────────────────────────────────
export type Match = {
  kickoffUTC: Date;
  home: TeamData;
  away: TeamData;
  group: string;
  venue: string;
};

// Helpers to make the fixture list readable below.
const m = (
  iso: string,
  group: string,
  homeIdx: number,
  awayIdx: number,
  venue: string,
): Match => ({
  kickoffUTC: new Date(iso),
  home: GROUPS[group][homeIdx],
  away: GROUPS[group][awayIdx],
  group,
  venue,
});

// Each group plays a 3-matchday round-robin:
//   MD1: 0v1, 2v3   MD2: 0v2, 3v1   MD3: 0v3, 1v2
// Times are UTC. Match days are spread across June 11-26, 2026 with ~5
// matches per day at realistic North-American slots (16:00 / 19:00 /
// 22:00 / 01:00 UTC, i.e. local afternoon-to-evening across host cities).

export const MATCHES: Match[] = [
  // ── MATCHDAY 1 (June 11-16) ────────────────────────────────────────────
  // Jun 11 — opener
  m('2026-06-11T20:00:00Z', 'A', 0, 1, 'Estadio Azteca, Mexico City'),
  // Jun 12
  m('2026-06-12T19:00:00Z', 'A', 2, 3, 'Estadio BBVA, Monterrey'),
  m('2026-06-12T22:00:00Z', 'B', 0, 1, 'BMO Field, Toronto'),
  m('2026-06-12T01:00:00Z', 'C', 0, 1, 'SoFi Stadium, Los Angeles'),
  // Jun 13
  m('2026-06-13T16:00:00Z', 'B', 2, 3, 'BC Place, Vancouver'),
  m('2026-06-13T19:00:00Z', 'C', 2, 3, 'AT&T Stadium, Arlington'),
  m('2026-06-13T22:00:00Z', 'D', 0, 1, 'MetLife Stadium, New Jersey'),
  m('2026-06-14T01:00:00Z', 'D', 2, 3, 'Lincoln Financial Field, Philadelphia'),
  // Jun 14
  m('2026-06-14T16:00:00Z', 'E', 0, 1, 'Mercedes-Benz Stadium, Atlanta'),
  m('2026-06-14T19:00:00Z', 'E', 2, 3, 'Hard Rock Stadium, Miami'),
  m('2026-06-14T22:00:00Z', 'F', 0, 1, 'Levi’s Stadium, San Francisco'),
  m('2026-06-15T01:00:00Z', 'F', 2, 3, 'NRG Stadium, Houston'),
  // Jun 15
  m('2026-06-15T16:00:00Z', 'G', 0, 1, 'Gillette Stadium, Boston'),
  m('2026-06-15T19:00:00Z', 'G', 2, 3, 'Lumen Field, Seattle'),
  m('2026-06-15T22:00:00Z', 'H', 0, 1, 'Arrowhead Stadium, Kansas City'),
  m('2026-06-16T01:00:00Z', 'H', 2, 3, 'Lincoln Financial Field, Philadelphia'),
  // Jun 16
  m('2026-06-16T16:00:00Z', 'I', 0, 1, 'MetLife Stadium, New Jersey'),
  m('2026-06-16T19:00:00Z', 'I', 2, 3, 'AT&T Stadium, Arlington'),
  m('2026-06-16T22:00:00Z', 'J', 0, 1, 'Mercedes-Benz Stadium, Atlanta'),
  m('2026-06-17T01:00:00Z', 'J', 2, 3, 'Estadio BBVA, Monterrey'),
  // Jun 17
  m('2026-06-17T16:00:00Z', 'K', 0, 1, 'BMO Field, Toronto'),
  m('2026-06-17T19:00:00Z', 'K', 2, 3, 'Hard Rock Stadium, Miami'),
  m('2026-06-17T22:00:00Z', 'L', 0, 1, 'Levi’s Stadium, San Francisco'),
  m('2026-06-18T01:00:00Z', 'L', 2, 3, 'Estadio Azteca, Mexico City'),

  // ── MATCHDAY 2 (June 18-22) ────────────────────────────────────────────
  // Jun 18
  m('2026-06-18T16:00:00Z', 'A', 0, 2, 'Estadio Azteca, Mexico City'),
  m('2026-06-18T19:00:00Z', 'A', 3, 1, 'Estadio BBVA, Monterrey'),
  m('2026-06-18T22:00:00Z', 'B', 0, 2, 'BC Place, Vancouver'),
  m('2026-06-19T01:00:00Z', 'B', 3, 1, 'BMO Field, Toronto'),
  // Jun 19
  m('2026-06-19T16:00:00Z', 'C', 0, 2, 'AT&T Stadium, Arlington'),
  m('2026-06-19T19:00:00Z', 'C', 3, 1, 'SoFi Stadium, Los Angeles'),
  m('2026-06-19T22:00:00Z', 'D', 0, 2, 'MetLife Stadium, New Jersey'),
  m('2026-06-20T01:00:00Z', 'D', 3, 1, 'Lincoln Financial Field, Philadelphia'),
  // Jun 20
  m('2026-06-20T16:00:00Z', 'E', 0, 2, 'Hard Rock Stadium, Miami'),
  m('2026-06-20T19:00:00Z', 'E', 3, 1, 'Mercedes-Benz Stadium, Atlanta'),
  m('2026-06-20T22:00:00Z', 'F', 0, 2, 'NRG Stadium, Houston'),
  m('2026-06-21T01:00:00Z', 'F', 3, 1, 'Levi’s Stadium, San Francisco'),
  // Jun 21
  m('2026-06-21T16:00:00Z', 'G', 0, 2, 'Gillette Stadium, Boston'),
  m('2026-06-21T19:00:00Z', 'G', 3, 1, 'Lumen Field, Seattle'),
  m('2026-06-21T22:00:00Z', 'H', 0, 2, 'Arrowhead Stadium, Kansas City'),
  m('2026-06-22T01:00:00Z', 'H', 3, 1, 'Lincoln Financial Field, Philadelphia'),
  // Jun 22
  m('2026-06-22T16:00:00Z', 'I', 0, 2, 'MetLife Stadium, New Jersey'),
  m('2026-06-22T19:00:00Z', 'I', 3, 1, 'AT&T Stadium, Arlington'),
  m('2026-06-22T22:00:00Z', 'J', 0, 2, 'Mercedes-Benz Stadium, Atlanta'),
  m('2026-06-23T01:00:00Z', 'J', 3, 1, 'Estadio BBVA, Monterrey'),
  // Jun 23
  m('2026-06-23T16:00:00Z', 'K', 0, 2, 'BC Place, Vancouver'),
  m('2026-06-23T19:00:00Z', 'K', 3, 1, 'BMO Field, Toronto'),
  m('2026-06-23T22:00:00Z', 'L', 0, 2, 'Hard Rock Stadium, Miami'),
  m('2026-06-24T01:00:00Z', 'L', 3, 1, 'Estadio Azteca, Mexico City'),

  // ── MATCHDAY 3 (June 24-27) — same group, same kickoff for fairness ───
  // Jun 24
  m('2026-06-24T18:00:00Z', 'A', 0, 3, 'Estadio Azteca, Mexico City'),
  m('2026-06-24T18:00:00Z', 'A', 1, 2, 'Estadio BBVA, Monterrey'),
  m('2026-06-24T22:00:00Z', 'B', 0, 3, 'BMO Field, Toronto'),
  m('2026-06-24T22:00:00Z', 'B', 1, 2, 'BC Place, Vancouver'),
  // Jun 25
  m('2026-06-25T18:00:00Z', 'C', 0, 3, 'SoFi Stadium, Los Angeles'),
  m('2026-06-25T18:00:00Z', 'C', 1, 2, 'AT&T Stadium, Arlington'),
  m('2026-06-25T22:00:00Z', 'D', 0, 3, 'MetLife Stadium, New Jersey'),
  m('2026-06-25T22:00:00Z', 'D', 1, 2, 'Lincoln Financial Field, Philadelphia'),
  // Jun 26
  m('2026-06-26T18:00:00Z', 'E', 0, 3, 'Mercedes-Benz Stadium, Atlanta'),
  m('2026-06-26T18:00:00Z', 'E', 1, 2, 'Hard Rock Stadium, Miami'),
  m('2026-06-26T22:00:00Z', 'F', 0, 3, 'Levi’s Stadium, San Francisco'),
  m('2026-06-26T22:00:00Z', 'F', 1, 2, 'NRG Stadium, Houston'),
  // Jun 27
  m('2026-06-27T16:00:00Z', 'G', 0, 3, 'Gillette Stadium, Boston'),
  m('2026-06-27T16:00:00Z', 'G', 1, 2, 'Lumen Field, Seattle'),
  m('2026-06-27T20:00:00Z', 'H', 0, 3, 'Arrowhead Stadium, Kansas City'),
  m('2026-06-27T20:00:00Z', 'H', 1, 2, 'Lincoln Financial Field, Philadelphia'),
  m('2026-06-28T00:00:00Z', 'I', 0, 3, 'MetLife Stadium, New Jersey'),
  m('2026-06-28T00:00:00Z', 'I', 1, 2, 'AT&T Stadium, Arlington'),
  // Jun 28
  m('2026-06-28T16:00:00Z', 'J', 0, 3, 'Mercedes-Benz Stadium, Atlanta'),
  m('2026-06-28T16:00:00Z', 'J', 1, 2, 'Estadio BBVA, Monterrey'),
  m('2026-06-28T20:00:00Z', 'K', 0, 3, 'BC Place, Vancouver'),
  m('2026-06-28T20:00:00Z', 'K', 1, 2, 'BMO Field, Toronto'),
  m('2026-06-29T00:00:00Z', 'L', 0, 3, 'Hard Rock Stadium, Miami'),
  m('2026-06-29T00:00:00Z', 'L', 1, 2, 'Estadio Azteca, Mexico City'),
].sort((a, b) => a.kickoffUTC.getTime() - b.kickoffUTC.getTime());

// ── Lookups ──────────────────────────────────────────────────────────────

const MATCH_DURATION_MS = 110 * 60 * 1000; // 110 min covers a full 90' + stoppage

/**
 * Returns the match currently being played (kickoff <= now < kickoff + 110m),
 * or the next upcoming match if none is live, or null if the group stage is
 * over.
 */
export function findCurrentOrNextMatch(now: Date = new Date()): Match | null {
  const t = now.getTime();
  // Currently live?
  for (const match of MATCHES) {
    const start = match.kickoffUTC.getTime();
    if (t >= start && t < start + MATCH_DURATION_MS) return match;
  }
  // Next upcoming
  for (const match of MATCHES) {
    if (match.kickoffUTC.getTime() > t) return match;
  }
  return null;
}
