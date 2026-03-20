# Blaster — Match-3 Puzzle Game

A pet project built with **Cocos Creator 2.4.5** (TypeScript) to explore game development patterns: Dependency Injection, State Machine, Observable Containers, and a clean layered architecture.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Architecture at a Glance](#architecture-at-a-glance)
- [Dependency Injection & Bootstrapper](#dependency-injection--bootstrapper)
- [Observable Value Containers](#observable-value-containers)
- [Game Configuration](#game-configuration)
- [State Machine](#state-machine)
- [Layered Design: Managers, Services, Views](#layered-design-managers-services-views)
- [Game Flow](#game-flow)
- [Directory Structure](#directory-structure)

---

## Project Overview

Blaster is a **match-3 puzzle game** where the player clicks groups of two or more connected same-color tiles to remove them, earn points, and try to reach a target score before running out of moves. The project was created as a learning exercise to practice architectural patterns inside the Cocos Creator engine.

**Key facts:**

| Detail | Value |
|---|---|
| Engine | Cocos Creator 2.4.5 |
| Language | TypeScript (ES5 target, decorators enabled) |
| Board size | 8 × 8 (configurable) |
| Tile colors | Red, Green, Blue, Yellow, Purple + Booster |
| Win condition | Reach 1 000 points |
| Moves limit | 20 |

---

## Architecture at a Glance

```
┌──────────────────────────────────────────────────────────────┐
│                       Bootstrapper                           │
│  Creates ServiceContainer, registers every service, and      │
│  kicks off the StateMachine                                  │
└────────────────────────┬─────────────────────────────────────┘
                         │ owns
                         ▼
┌──────────────────────────────────────────────────────────────┐
│                    ServiceContainer                           │
│  Map<string, any> — register / resolve by key                │
│  Also holds a direct reference to GameConfig                 │
└──┬──────────┬──────────┬──────────┬──────────┬───────────────┘
   │          │          │          │          │
   ▼          ▼          ▼          ▼          ▼
GameConfig BoardMgr  ScoreMgr  GameMgr   UIManager
   │          │          │          │          │
   │          │     IntContainer  IntContainer │
   │          │     (score,moves) (shuffle,    │
   │          │          │        booster)     │
   │          ▼          │                     │
   │     BoardService    │                     │
   │     BoosterService  │                     │
   │          │          │                     │
   └──────────┴──────────┴─────────────────────┘
                         │
                  StateMachine
              ┌─────┬─────┬──────┐
              │     │     │      │
           Init  Playing  Win  Loose
```

The architecture follows a **Service Locator / Dependency Injection** approach with four clearly separated layers:

1. **Core** — pure data: `BoardState`, `TileData`, `TileType`, `GameConfig`
2. **Services** — stateless business logic: `BoardService`, `BoosterService`
3. **Managers** — orchestrate services, hold state containers: `BoardManager`, `ScoreManager`, `GameManager`, `UIManager`
4. **Views** — render and animate the UI: `BoardViewController`, `TileViewController`, `MainMenuController`, `WinScreenController`

---

## Dependency Injection & Bootstrapper

### ServiceContainer

`ServiceContainer` is a lightweight generic service locator built on top of a `Map<string, any>`:

```typescript
// Blaster/assets/Scripts/DI/ServiceContainer.ts
export class ServiceContainer {
    public config: GameConfig;
    private services = new Map<string, any>();

    register<T>(key: string, instance: T) { this.services.set(key, instance); }
    resolve<T>(key: string): T             { /* get or throw */ }
}
```

Services are registered **by string key** and resolved with a generic type parameter, giving type-safe access while keeping the container engine-agnostic.

### Bootstrapper

`Bootstrapper` is a Cocos Creator component (`cc.Component`) attached to the root scene node. It acts as the **composition root** — the single place where every dependency is wired together:

```typescript
// Blaster/assets/Scripts/DI/Bootstrapper.ts (simplified)
onLoad() {
    const container = new ServiceContainer(this.gameConfig);

    container.register('GameConfig',    this.gameConfig);
    container.register('BoardManager',  this.boardManager);
    container.register('ScoreManager',  this.scoreManager);
    container.register('GameManager',   this.gameManager);
    container.register('UIManager',     this.uiManager);
    container.register('StateMachine',  this.stateMachine);

    // Every manager caches the container for later resolves
    this.boardManager.init(container);
    this.scoreManager.init(container);
    this.gameManager.init(container);
    this.uiManager.init(container);

    this.stateMachine.injectContainer(container);
    this.stateMachine.goInit();          // start the game
}
```

**Why this design?**

* All concrete references live in a single file — easy to swap implementations.
* Managers receive the container through `init()` (method injection), so they can resolve sibling services whenever needed without import-time circular dependencies.
* `ManagerBase` provides the shared `init(container)` template, storing the container for every subclass.

---

## Observable Value Containers

One of the most interesting features is the **typed value container** system — a mini reactive-property layer built on top of `cc.Component`.

### ContainerBase\<T\>

```typescript
// Blaster/assets/Scripts/ContainerBase.ts
export class ContainerBase<T> extends cc.Component {
    private Value: T;
    public onValueChanged: (newValue: T) => void = null;

    setValue(newValue: T) {
        this.Value = newValue;
        if (this.onValueChanged) this.onValueChanged(newValue);
    }
    getValue(): T { return this.Value; }
}
```

### Specialized containers

| Class | Type | Typical use |
|---|---|---|
| `IntContainer` | `number` | Score, remaining moves, shuffle count, booster count |
| `StringContainer` | `string` | Text display values |
| `BoolContainer` | `boolean` | Flags and toggles |

Each is a `cc.Component`, so it can be **attached to any node in the Cocos Creator editor** and wired via the `@property` decorator — no code changes needed to bind a new counter to the UI.

### How they power the UI

The `UIManager` subscribes to containers during `init()`:

```typescript
// UIManager subscribes to ScoreManager's IntContainers
this.scoreManager.score.onValueChanged = (newScore) => {
    this.updateScore(newScore);     // refreshes the score label
};
this.scoreManager.moves.onValueChanged = (newMoves) => {
    this.updateMoves(newMoves);     // refreshes the moves label
};
```

When `ScoreManager.addPoints()` calls `this.score.setValue(newValue)`, the UI updates automatically — a clean **Observer pattern** without events buses or signals libraries.

Similarly, `GameManager` exposes `shuffleCount: IntContainer` and `boosterCount: IntContainer`, and the `UIManager` subscribes to them to update the shuffle/booster labels on screen in real time.

---

## Game Configuration

`GameConfig` is a `cc.Component` with editor-exposed properties:

```typescript
// Blaster/assets/Scripts/Core/GameConfig.ts
@ccclass
export default class GameConfig extends cc.Component {
    @property scorePerTile: number  = 20;
    @property targetScore: number   = 1000;
    @property gameMoves: number     = 20;
    @property boardRows: number     = 8;
    @property boardCols: number     = 8;
    @property bosterCount: number   = 3;
    @property shuffleCount: number  = 5;
    @property([TileData]) allowedTiles: TileData[] = [];
}
```

Because every field is decorated with `@property`, game designers can **tune all balance values directly in the Cocos Creator Inspector** without touching code. `GameConfig` is the first service registered in the container and is also stored as `container.config` for convenient access from states.

`TileData` pairs a `TileType` enum value with a `cc.SpriteFrame`, so the list of allowed tiles (and their visuals) is also configured in the editor.

---

## State Machine

The game lifecycle is modeled as a **finite state machine** with four states:

```
Init ──► Playing ──► Win ──► Playing (restart)
                 └──► Loose ──► Playing (restart)
```

### StateMachine

```typescript
// Blaster/assets/Scripts/States/StateMachine.ts
export class StateMachine extends cc.Component {
    private states = new Map<StateType, StateBase>();
    private currentState: StateBase | null = null;

    changeState(type: StateType) {
        this.currentState?.onExit();
        this.currentState = this.states.get(type);
        this.currentState.onEnter();
    }
    update(dt) { this.currentState?.update(dt); }

    // Convenience helpers
    goInit()    { this.changeState(StateType.Init);    }
    goPlaying() { this.changeState(StateType.Playing); }
    goWin()     { this.changeState(StateType.Win);     }
    goLoose()   { this.changeState(StateType.Loose);   }
}
```

### StateBase

Every state extends `StateBase`, which provides:

* `onEnter()` / `onExit()` — setup and teardown hooks
* `update(dt)` — per-frame logic
* `get game(): ServiceContainer` — shortcut to the DI container via the owning `StateMachine`

### State details

| State | onEnter | onExit |
|---|---|---|
| **InitState** | Immediately transitions to `Playing` | — |
| **PlayingState** | Calls `GameManager.startGame()` → builds the board; resets moves | Calls `GameManager.endGame()` → clears the board |
| **WinState** | Shows the win screen (green background, "Victory!" text) | Hides the screen, resets score & moves |
| **LooseState** | Shows the lose screen (red background, "Defeat" text) | Hides the screen, resets score & moves |

Both `WinState` and `LooseState` wire a restart button that transitions back to `PlayingState`, creating a seamless replay loop.

---

## Layered Design: Managers, Services, Views

### Managers (orchestration)

All managers extend `ManagerBase`, which stores the `ServiceContainer` reference:

| Manager | Responsibility |
|---|---|
| **BoardManager** | Creates the board (`BuildUpBoard`), handles tile clicks, coordinates `BoardService` ↔ `BoardViewController`, forwards score changes to `ScoreManager` |
| **ScoreManager** | Owns `score` and `moves` as `IntContainer` instances; checks win/lose conditions after every move |
| **GameManager** | Owns `shuffleCount` and `boosterCount` as `IntContainer` instances; tracks booster mode flag; delegates `startGame` / `endGame` |
| **UIManager** | Subscribes to every `IntContainer` callback; wires shuffle/booster/restart buttons; shows/hides win and lose overlays |

### Services (pure logic)

| Service | Responsibility |
|---|---|
| **BoardService** | Flood-fill matching (`findMatchingTiles`), gravity (`applyGravity`), empty-space refill (`fillEmptySpaces`), booster delegation, score calculation |
| **BoosterService** | Three booster strategies: **radius** (3×3), **line** (full row + column cross), **explosion** (5×5) |

Services are plain classes (no `cc.Component` base), keeping game logic testable and engine-independent.

### Views (rendering & animation)

| View | Responsibility |
|---|---|
| **BoardViewController** | Object pool of `TileViewController` instances; generates the grid; animates tile fall, disappear, and appear using `cc.tween` |
| **TileViewController** | Per-tile click handling with debounce; visual feedback (color blink, shake); delegates click to the callback provided by `BoardManager` |
| **MainMenuController** | Shuffle and booster buttons; label updates |
| **WinScreenController** | Win/lose overlay; restart button; background color swap |

---

## Game Flow

```
1. Scene loads → Bootstrapper.onLoad()
2. ServiceContainer created, all services registered
3. Managers initialized (each caches the container)
4. StateMachine.goInit()
5. InitState.onEnter() → immediately → StateMachine.goPlaying()
6. PlayingState.onEnter():
   └─ GameManager.startGame()
       └─ BoardManager.BuildUpBoard()
           ├─ Creates BoardState (random tiles from GameConfig.allowedTiles)
           ├─ Initializes BoardService with the board state
           └─ BoardViewController.GenerateBoard() — spawns 64 tile sprites
7. Player clicks a tile:
   └─ TileViewController.onTileClicked()
       └─ BoardManager.onTileClickedInternal()
           ├─ BoardService.handleTileClick(row, col)
           │   ├─ Flood-fill finds ≥2 connected same-color tiles
           │   ├─ Removes them, applies gravity, fills empty spaces
           │   └─ Returns new BoardState
           ├─ BoardViewController.updateBoardFromState()
           │   ├─ Animate disappear (blink red + shake)
           │   ├─ Animate fall (tween to new position)
           │   └─ Animate appear (scale 0→1, fade in)
           ├─ ScoreManager.addPoints(tilesRemoved)
           │   └─ If score ≥ targetScore → StateMachine.goWin()
           └─ ScoreManager.reduceMoves(1)
               └─ If moves ≤ 0 → StateMachine.goLoose()
8. Win/Lose screen shown → player taps Restart → back to step 5
```

---

## Directory Structure

```
Blaster/assets/Scripts/
├── DI/
│   ├── Bootstrapper.ts          # Composition root
│   └── ServiceContainer.ts      # Service locator / DI container
├── Core/
│   ├── GameConfig.ts            # Editor-tunable game parameters
│   ├── BoardState.ts            # Grid state (2D TileType array + clone)
│   ├── TileData.ts              # TileType ↔ SpriteFrame mapping
│   └── TileType.ts              # Enum: None, Red, Green, Blue, Yellow, Purple, Booster
├── Managers/
│   ├── ManagerBase.ts           # Base class — stores ServiceContainer
│   ├── BoardManager.ts          # Board creation & click orchestration
│   ├── GameManager.ts           # Game flow, shuffle & booster counts
│   ├── ScoreManager.ts          # Score & moves tracking, win/lose checks
│   └── UIManager.ts             # UI bindings & event subscriptions
├── Services/
│   ├── BoardService.ts          # Match-3 algorithms (flood fill, gravity, refill)
│   └── BoosterService.ts        # Booster strategies (radius, line, explosion)
├── States/
│   ├── StateBase.ts             # Abstract state with onEnter/onExit/update
│   ├── StateMachine.ts          # State registry & transitions
│   ├── InitState.ts             # Boot → immediately transitions to Playing
│   ├── PlayingState.ts          # Main gameplay loop
│   ├── WinState.ts              # Victory screen
│   └── LooseState.ts            # Defeat screen
├── View/
│   ├── BoardViewController.ts   # Board rendering, tile pool, animations
│   ├── TileViewController.ts    # Per-tile click handling & visual feedback
│   ├── MainMenuController.ts    # Shuffle & booster buttons
│   └── WinScreenController.ts   # Win/lose overlay & restart
├── ContainerBase.ts             # Generic observable value container
├── IntContainer.ts              # ContainerBase<number>
├── StringContainer.ts           # ContainerBase<string>
└── BoolContainer.ts             # ContainerBase<boolean>
```

---

## License

See [LICENSE](./LICENSE).
