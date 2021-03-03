import { Engine } from "geotic";
import { Appearance, Move, IsBlocking, Position,
Layer100, Layer300, Layer400, IsInFov, IsOpaque, IsRevealed, 
Description, Ai, Defense, Power, Health, IsDead,
IsPickup,
} from "./components";
import { Being, Tile, Goblin, Player, Wall, Floor, 
    Item, HealthPotion } from "./prefabs";

const ecs = new Engine();

const world = ecs.createWorld();

// Create an empty entity. Call `entity.id` to get the unique ID.

ecs.registerComponent(Appearance);
ecs.registerComponent(Position);
ecs.registerComponent(IsBlocking);
ecs.registerComponent(Move);
ecs.registerComponent(Description);

ecs.registerComponent(Layer100);
ecs.registerComponent(Layer300);
ecs.registerComponent(Layer400);

ecs.registerComponent(IsInFov);
ecs.registerComponent(IsOpaque);
ecs.registerComponent(IsRevealed);

ecs.registerComponent(IsPickup);

ecs.registerComponent(Ai);

ecs.registerComponent(Defense)
ecs.registerComponent(Health)
ecs.registerComponent(Power)
ecs.registerComponent(IsDead)

// register "base" prefabs first!
ecs.registerPrefab(Tile);
ecs.registerPrefab(Being);
ecs.registerPrefab(Item);


ecs.registerPrefab(Wall);
ecs.registerPrefab(Floor);
ecs.registerPrefab(Goblin);
ecs.registerPrefab(Player);
ecs.registerPrefab(HealthPotion);

export const messageLog = ["", "Welcome to Gobs 'O Goblins!", ""];
export const addLog = (text) => {
  messageLog.unshift(text);
};


export default world;