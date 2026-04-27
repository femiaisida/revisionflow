export function createTimer(initial = 0) {
  let time = initial;

  return {
    set: (t) => { time = Number(t) || 0; },
    get: () => time,
    tick: () => { if (time > 0) time--; }
  };
}
