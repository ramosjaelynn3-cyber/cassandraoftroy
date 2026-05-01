import { getStat } from "./stats.js";
import { hasItem } from "./inventory.js";

export function evaluateCondition(player, condition) {
  if (!condition) return true;

  // AND
  if (condition.and) {
    return condition.and.every(c => evaluateCondition(player, c));
  }

  // OR
  if (condition.or) {
    return condition.or.some(c => evaluateCondition(player, c));
  }

  // NOT
  if (condition.not) {
    return !evaluateCondition(player, condition.not);
  }

  // STAT CHECK
  if (condition.stat) {
    return Object.entries(condition.stat).every(([stat, value]) => {
      return getStat(player, stat) >= value;
    });
  }

  // ITEM CHECK
  if (condition.item) {
    return hasItem(player, condition.item);
  }

  return true;
}
