export function createStats(initial = {}) {
  return {
    values: {
      sanity: 100,
      influence: 5,
      ...initial
    }
  };
}

export function getStat(player, stat) {
  return player.stats.values[stat];
}

export function setStat(player, stat, value) {
  player.stats.values[stat] = value;
}

export function addStat(player, stat, amount) {
  player.stats.values[stat] += amount;
}

export function clampStat(player, stat, min = 0, max = 100) {
  const v = player.stats.values[stat];
  player.stats.values[stat] = Math.max(min, Math.min(max, v));
}
