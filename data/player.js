import { createStats } from "../systems/stats.js";
import { createInventory } from "../systems/inventory.js";

export const player = {
  name: "Cassandra",
  stats: createStats(),
  inventory: createInventory()
};
