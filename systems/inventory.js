export function createInventory() {
  return [];
}

export function addItem(player, item) {
  if (!player.inventory.includes(item)) {
    player.inventory.push(item);
  }
}

export function removeItem(player, item) {
  player.inventory = player.inventory.filter(i => i !== item);
}

export function hasItem(player, item) {
  return player.inventory.includes(item);
}
