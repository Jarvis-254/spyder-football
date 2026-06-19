// ---- World configuration: real-world scale, geometry, physics, tunables ----
// Everything on the pitch is derived from a single pixels-per-metre scale so
// the field, goals, markings, ball and players keep true FIFA proportions.
// A regulation pitch is 105 m (goal-to-goal) × 68 m (touchline-to-touchline).

export const FIELD_W = 2200; // 105 m  → PX_PER_M ≈ 20.95
export const PX_PER_M = FIELD_W / 105;
export const FIELD_H = Math.round(68 * PX_PER_M); // 68 m ≈ 1425 (true 105:68)
export const MARGIN = 56;
// Broadcast viewport. A wider (2:1) frame than the pitch is tall shows more of
// the goal-to-goal axis at once, so the goalmouth + net behind it stay fully on
// screen (a shot into the net used to clip off the right edge) and the field
// fills a wide monitor edge-to-edge.
export const CANVAS_W = 1400;
export const CANVAS_H = 700;

/** Metres → field pixels. */
export const M = (m: number) => m * PX_PER_M;

// ---- Goal geometry --------------------------------------------------------
export const GOAL_HEIGHT = Math.round(M(7.32)); // goal mouth width = 7.32 m ≈ 153
export const GOAL_DEPTH = Math.round(M(2.0)); // net depth ≈ 2 m ≈ 42
export const goalTop = FIELD_H / 2 - GOAL_HEIGHT / 2;
export const goalBottom = FIELD_H / 2 + GOAL_HEIGHT / 2;

// ---- Body / ball scale ----------------------------------------------------
// A player's ground footprint ≈ 0.5 m radius; a regulation ball is 0.22 m
// across (0.11 m radius) — genuinely small next to a footballer.
export const PLAYER_R = Math.round(M(0.52)); // ≈ 11
// True real-life scale: a regulation ball is 0.22 m across → 0.11 m radius
// (≈ 2.3 px next to a 1.85 m player). Genuinely small, exactly as in life.
// The height renderer grows it as it rises so airborne balls stay readable.
export const BALL_R = M(0.11);
// Football games (incl. FIFA) draw the ball larger than life so it's trackable.
// Physics/collision use the true BALL_R; only the rendered ball uses this factor.
export const BALL_VIS_SCALE = 1.3;
// The upright sprite is drawn 44 internal units tall; scale it so a footballer
// stands ~1.85 m in true world pixels (keeps player:ball:goal proportions).
export const PLAYER_SCALE = M(1.85) / 44;

// ---- Ball height (z-axis) -------------------------------------------------
// The pitch sim is on the ground plane (x,y); `z` is height ABOVE the grass so
// the ball can be lofted, chipped, crossed and bounce like in FIFA. Gravity is
// exaggerated vs real (9.8 m/s²) for snappy arcade arcs.
export const GRAVITY = M(46); // downward accel on the ball while airborne (px/s²)
export const BOUNCE = 0.58; // vertical restitution on landing
/** A player can only trap/control the ball when it's below this height. */
export const CONTROL_HEIGHT = M(1.25);

// ---- Movement speeds ------------------------------------------------------
// Tuned down from the first prototype — calmer, more readable pace.
export const WALK_SPEED = 165;
export const SPRINT_SPEED = 255;
export const TEAMMATE_SPEED = 155;
export const AWAY_CHASE_SPEED = 180;
export const AWAY_CARRY_SPEED = 165;
export const AWAY_FORMATION_SPEED = 140;
/** Off-ball forward runs in behind (both teams). */
export const RUN_SPEED = 200;
/** Closing down the carrier / tracking a marked attacker. */
export const PRESS_SPEED = 200;
/** Contain (hold C): jockey speed while shadowing the carrier. */
export const JOCKEY_SPEED = 180;
/** Burst speed of the standing-tackle lunge (D without the ball). */
export const TACKLE_LUNGE_SPEED = 310;
export const CONTROL_DIST = PLAYER_R + BALL_R + 16; // ball "at feet" reach ≈ 1.4 m
/** Ball rolling friction (exponential decay per second). A kick at power v
 *  rolls v/BALL_DECAY px total — pass powers MUST account for this. */
export const BALL_DECAY = 1.5;

// ---- Kick charging / input buffering --------------------------------------
/** Seconds of holding a kick key for a full power gauge (FIFA-style:
 *  press charges, release kicks; a tap = minimum power). */
export const CHARGE_FULL = 0.5;
// FIFA-style input buffering: a shot/pass pressed while the ball is still
// travelling to your player is remembered for this long and fired the instant
// you receive it (a "first-time" kick), instead of being dropped.
export const KICK_BUFFER = 0.5;

// ---- Match clock ----------------------------------------------------------
// A real soccer clock that counts UP to the full match length, accelerated
// FIFA-style. The match displays 0:00 -> 90:00 (in-game minutes) but only
// lasts MATCH_REAL_SECS of real play. accel = 5400 / MATCH_REAL_SECS.
export const MATCH_DISPLAY_SECS = 90 * 60; // 90' shown on the clock at full time
export const MATCH_REAL_SECS = 180; // real seconds a match actually lasts

// ---- Steering -------------------------------------------------------------
/** How quickly velocity approaches the desired velocity (per second). */
export const ACCEL = 8;
/** Max turn rate in radians per second. */
export const TURN_RATE = 13;

// ---- Cosmetic palettes ----------------------------------------------------
export const HAIR_COLORS = ['#2b2118', '#0e0c0a', '#5a3b1e', '#857058'];
export const SKIN_TONES = ['#e0ac7e', '#c98c5e', '#8d5a3b', '#f0c49a'];
