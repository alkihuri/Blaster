window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
        o = b;
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  BoardManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7cf28FHpiJFSrFVG6bpMfJk", "BoardManager");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.BoardManager = void 0;
    var ManagerBase_1 = require("./ManagerBase");
    var BoardViewController_1 = require("../View/BoardViewController");
    var BoardService_1 = require("../Services/BoardService");
    var BoardState_1 = require("../Core/BoardState");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BoardManager = function(_super) {
      __extends(BoardManager, _super);
      function BoardManager() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.boardViewController = null;
        _this.config = null;
        _this.boardService = null;
        _this.boardState = null;
        _this.isAnimating = false;
        _this.scoremanager = null;
        return _this;
      }
      BoardManager.prototype.onLoad = function() {};
      BoardManager.prototype.init = function(container) {
        _super.prototype.init.call(this, container);
        try {
          this.scoremanager = this.container.resolve("ScoreManager");
        } catch (err) {
          console.warn("ScoreManager not available during BoardManager.init:", err);
          this.scoremanager = null;
        }
      };
      BoardManager.prototype.start = function() {
        this.config = this.container.resolve("GameConfig");
        this.config || console.error("GameConfig is not assigned in BoardManager");
        null == this.boardViewController && console.error("BoardViewController is not assigned in BoardManager");
      };
      BoardManager.prototype.BuildUpBoard = function() {
        this.config = this.container.resolve("GameConfig");
        if (!this.config) {
          console.error("GameConfig is not assigned in BoardManager");
          return;
        }
        if (null == this.boardViewController) {
          console.error("BoardViewController is not assigned in BoardManager");
          return;
        }
        if (!this.boardService) {
          this.boardService = new BoardService_1.default();
          this.container.register("BoardService", this.boardService);
        }
        this.boardState = new BoardState_1.default(this.config.boardRows, this.config.boardCols, this.config.allowedTiles);
        this.boardState.initialize(this.config.allowedTiles);
        this.boardService.initializeBoard(this.boardState);
        this.boardViewController.setTileClickCallback(this.onTileClicked.bind(this));
        this.boardViewController.GenrateBoard(this.config);
      };
      BoardManager.prototype.onTileClicked = function(row, col) {
        return __awaiter(this, void 0, void 0, function() {
          var err_1;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              _a.trys.push([ 0, 2, , 3 ]);
              return [ 4, this.onTileClickedInternal(row, col) ];

             case 1:
              _a.sent();
              return [ 3, 3 ];

             case 2:
              err_1 = _a.sent();
              console.error("Tile click error:", err_1);
              return [ 3, 3 ];

             case 3:
              return [ 2 ];
            }
          });
        });
      };
      BoardManager.prototype.onTileClickedInternal = function(row, col) {
        return __awaiter(this, void 0, void 0, function() {
          var oldState, newState, scoreGained, err_2;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              if (this.isAnimating) {
                console.log("Animation in progress, click ignored");
                return [ 2 ];
              }
              console.log("Tile clicked at [" + row + ", " + col + "]");
              this.isAnimating = true;
              _a.label = 1;

             case 1:
              _a.trys.push([ 1, 6, 7, 8 ]);
              oldState = this.boardState.clone();
              return [ 4, this.boardService.handleTileClick(row, col) ];

             case 2:
              newState = _a.sent();
              if (!newState) return [ 3, 4 ];
              console.log("Board state updated, rendering changes...");
              this.boardState = newState;
              return [ 4, this.boardViewController.updateBoardFromState(oldState, newState) ];

             case 3:
              _a.sent();
              scoreGained = this.boardService.calculateScore(newState);
              if (this.scoremanager) {
                this.scoremanager.addPoints(scoreGained);
                this.scoremanager.reduceMoves(1);
              }
              console.log("Board update complete");
              return [ 3, 5 ];

             case 4:
              console.log("No matching tiles for this position");
              _a.label = 5;

             case 5:
              return [ 3, 8 ];

             case 6:
              err_2 = _a.sent();
              console.error("Error in tile click handler:", err_2);
              return [ 3, 8 ];

             case 7:
              this.isAnimating = false;
              console.log("Ready for next click");
              return [ 7 ];

             case 8:
              return [ 2 ];
            }
          });
        });
      };
      BoardManager.prototype.ClearBoard = function() {
        this.boardViewController.clearBoard();
      };
      __decorate([ property({
        type: BoardViewController_1.default
      }) ], BoardManager.prototype, "boardViewController", void 0);
      BoardManager = __decorate([ ccclass ], BoardManager);
      return BoardManager;
    }(ManagerBase_1.default);
    exports.BoardManager = BoardManager;
    cc._RF.pop();
  }, {
    "../Core/BoardState": "BoardState",
    "../Services/BoardService": "BoardService",
    "../View/BoardViewController": "BoardViewController",
    "./ManagerBase": "ManagerBase"
  } ],
  BoardService: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9a803NE6bZPNJ0KynuOigrD", "BoardService");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var TileType_1 = require("../Core/TileType");
    var BoosterService_1 = require("./BoosterService");
    var ccclass = cc._decorator.ccclass;
    var BoardService = function() {
      function BoardService() {
        this.boardState = null;
        this.boosterService = new BoosterService_1.default();
      }
      BoardService.prototype.initializeBoard = function(boardState) {
        this.boardState = boardState;
      };
      BoardService.prototype.getBoardState = function() {
        return this.boardState;
      };
      BoardService.prototype.handleTileClick = function(row, col) {
        return __awaiter(this, void 0, Promise, function() {
          var tileType, tilesToRemove, newState, _i, tilesToRemove_1, tile;
          return __generator(this, function(_a) {
            if (!this.boardState) {
              console.error("Board state not initialized");
              return [ 2, null ];
            }
            tileType = this.boardState.getTileAt(row, col);
            if (tileType === TileType_1.TileType.None) return [ 2, null ];
            if (this.boosterService.isBooster(tileType)) {
              console.log("Booster tile clicked");
              return [ 2, this.handleBoosterClick(row, col) ];
            }
            tilesToRemove = this.findMatchingTiles(row, col, tileType);
            if (0 === tilesToRemove.length) {
              console.log("No matching tiles found");
              return [ 2, null ];
            }
            newState = this.boardState.clone();
            newState.wasRemove = tilesToRemove;
            for (_i = 0, tilesToRemove_1 = tilesToRemove; _i < tilesToRemove_1.length; _i++) {
              tile = tilesToRemove_1[_i];
              newState.setTileAt(tile.row, tile.col, TileType_1.TileType.None);
            }
            this.applyGravity(newState);
            this.fillEmptySpaces(newState);
            this.boardState = newState;
            return [ 2, newState ];
          });
        });
      };
      BoardService.prototype.findMatchingTiles = function(startRow, startCol, tileType) {
        var visited = [];
        for (var i = 0; i < this.boardState.rows; i++) {
          visited[i] = [];
          for (var j = 0; j < this.boardState.cols; j++) visited[i][j] = false;
        }
        var result = [];
        this.floodFill(startRow, startCol, tileType, visited, result);
        if (result.length >= 2) return result;
        return [];
      };
      BoardService.prototype.floodFill = function(row, col, tileType, visited, result) {
        if (row < 0 || row >= this.boardState.rows || col < 0 || col >= this.boardState.cols) return;
        if (visited[row][col]) return;
        if (this.boardState.getTileAt(row, col) !== tileType) return;
        visited[row][col] = true;
        result.push({
          row: row,
          col: col
        });
        this.floodFill(row - 1, col, tileType, visited, result);
        this.floodFill(row + 1, col, tileType, visited, result);
        this.floodFill(row, col - 1, tileType, visited, result);
        this.floodFill(row, col + 1, tileType, visited, result);
      };
      BoardService.prototype.applyGravity = function(state) {
        for (var col = 0; col < state.cols; col++) {
          var writePos = state.rows - 1;
          for (var row = state.rows - 1; row >= 0; row--) {
            var tileType = state.getTileAt(row, col);
            if (tileType !== TileType_1.TileType.None) {
              state.setTileAt(writePos, col, tileType);
              writePos !== row && state.setTileAt(row, col, TileType_1.TileType.None);
              writePos--;
            }
          }
        }
      };
      BoardService.prototype.fillEmptySpaces = function(state) {
        for (var row = 0; row < state.rows; row++) for (var col = 0; col < state.cols; col++) if (state.getTileAt(row, col) === TileType_1.TileType.None) {
          var randomTile = state.allowedTiles[Math.floor(Math.random() * state.allowedTiles.length)];
          state.setTileAt(row, col, randomTile.type);
        }
      };
      BoardService.prototype.handleBoosterClick = function(row, col, radius) {
        void 0 === radius && (radius = 1);
        console.log("Booster activated at [" + row + ", " + col + "] with radius " + radius);
        var newState = this.boosterService.activateBooster(this.boardState, row, col, radius);
        if (!newState) {
          console.error("Failed to activate booster");
          return null;
        }
        this.applyGravity(newState);
        this.fillEmptySpaces(newState);
        this.boardState = newState;
        return newState;
      };
      BoardService.prototype.handleLineBoosterClick = function(row, col) {
        if (!this.boardState) {
          console.error("Board state not initialized");
          return null;
        }
        console.log("Line Booster activated at [" + row + ", " + col + "]");
        var newState = this.boosterService.activateLineBooster(this.boardState, row, col);
        if (!newState) {
          console.error("Failed to activate line booster");
          return null;
        }
        this.applyGravity(newState);
        this.fillEmptySpaces(newState);
        this.boardState = newState;
        return newState;
      };
      BoardService.prototype.handleExplosionBoosterClick = function(row, col, explosionRadius) {
        void 0 === explosionRadius && (explosionRadius = 2);
        if (!this.boardState) {
          console.error("Board state not initialized");
          return null;
        }
        console.log("Explosion Booster activated at [" + row + ", " + col + "] with radius " + explosionRadius);
        var newState = this.boosterService.activateExplosionBooster(this.boardState, row, col, explosionRadius);
        if (!newState) {
          console.error("Failed to activate explosion booster");
          return null;
        }
        this.applyGravity(newState);
        this.fillEmptySpaces(newState);
        this.boardState = newState;
        return newState;
      };
      BoardService.prototype.calculateScore = function(state) {
        var tilesRemoved = state.wasRemove.length;
        return tilesRemoved;
      };
      BoardService = __decorate([ ccclass ], BoardService);
      return BoardService;
    }();
    exports.default = BoardService;
    cc._RF.pop();
  }, {
    "../Core/TileType": "TileType",
    "./BoosterService": "BoosterService"
  } ],
  BoardState: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "da878rcNAlPJa1PnPXkv2SH", "BoardState");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __spreadArrays = this && this.__spreadArrays || function() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, 
      k++) r[k] = a[j];
      return r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BoardState = function() {
      function BoardState(rows, cols, allowedTiles) {
        void 0 === rows && (rows = 8);
        void 0 === cols && (cols = 8);
        void 0 === allowedTiles && (allowedTiles = []);
        this.grid = [];
        this.wasRemove = [];
        this.rows = rows;
        this.cols = cols;
        this.allowedTiles = allowedTiles;
        this.grid = [];
      }
      BoardState_1 = BoardState;
      BoardState.prototype.initialize = function(tileDataArray) {
        console.log("Initializing BoardState with tiles data: " + tileDataArray.map(function(t) {
          return t.type;
        }).join(", "));
        this.grid = [];
        for (var i = 0; i < this.rows; i++) {
          var row = [];
          for (var j = 0; j < this.cols; j++) {
            var randomTile = tileDataArray[Math.floor(Math.random() * tileDataArray.length)];
            row.push(randomTile.type);
          }
          this.grid.push(row);
        }
      };
      BoardState.prototype.getTileAt = function(row, col) {
        if (row >= 0 && row < this.rows && col >= 0 && col < this.cols) return this.grid[row][col];
        return null;
      };
      BoardState.prototype.setTileAt = function(row, col, type) {
        row >= 0 && row < this.rows && col >= 0 && col < this.cols && (this.grid[row][col] = type);
      };
      BoardState.prototype.getTileDataByType = function(type) {
        for (var _i = 0, _a = this.allowedTiles; _i < _a.length; _i++) {
          var tile = _a[_i];
          if (tile.type === type) return tile;
        }
        return null;
      };
      BoardState.prototype.clone = function() {
        var newState = new BoardState_1(this.rows, this.cols, this.allowedTiles);
        newState.grid = this.grid.map(function(row) {
          return __spreadArrays(row);
        });
        return newState;
      };
      var BoardState_1;
      BoardState = BoardState_1 = __decorate([ ccclass ], BoardState);
      return BoardState;
    }();
    exports.default = BoardState;
    cc._RF.pop();
  }, {} ],
  BoardViewController: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7d9b8dAqbxC4o+yV2toFIuV", "BoardViewController");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var TileViewController_1 = require("./TileViewController");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BoardViewController = function(_super) {
      __extends(BoardViewController, _super);
      function BoardViewController() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.tilesPool = [];
        _this.tileGrid = [];
        _this.tileOffset = 5;
        _this.animationDuration = .2;
        _this.disappearDuration = .15;
        _this.appearDuration = .1;
        _this.tilesAnchor = null;
        _this.onTileClickCallback = null;
        _this.cellPrefab = null;
        return _this;
      }
      BoardViewController.prototype.onLoad = function() {
        this.InitPool();
        this.tileSize = this.cellPrefab.data.getComponent(cc.Sprite).spriteFrame.getRect().width;
        if (this.animationDuration <= 0) {
          console.warn("animationDuration is <= 0 \u2014 setting to default 0.2");
          this.animationDuration = .2;
        }
        if (this.disappearDuration <= 0) {
          console.warn("disappearDuration is <= 0 \u2014 setting to default 0.15");
          this.disappearDuration = .15;
        }
        if (this.appearDuration <= 0) {
          console.warn("appearDuration is <= 0 \u2014 setting to default 0.1");
          this.appearDuration = .1;
        }
      };
      BoardViewController.prototype.InitPool = function() {
        for (var i = 0; i < 100; i++) {
          var tile = cc.instantiate(this.cellPrefab).getComponent(TileViewController_1.default);
          tile.node.active = false;
          this.tilesPool.push(tile);
          this.node.addChild(tile.node);
        }
      };
      BoardViewController.prototype.GetTileFromPool = function() {
        for (var _i = 0, _a = this.tilesPool; _i < _a.length; _i++) {
          var tile = _a[_i];
          if (!tile.node.active) return tile;
        }
        console.warn("No available tiles in pool");
        var newTile = cc.instantiate(this.cellPrefab).getComponent(TileViewController_1.default);
        newTile.node.active = false;
        this.tilesPool.push(newTile);
        this.node.addChild(newTile.node);
        return newTile;
      };
      BoardViewController.prototype.setTileClickCallback = function(callback) {
        this.onTileClickCallback = callback;
      };
      BoardViewController.prototype.getTileWorldPosition = function(row, col) {
        var anchorPos = this.tilesAnchor.position;
        return cc.v3(col * this.tileSize + this.tileOffset, -row * this.tileSize + this.tileOffset).add(anchorPos);
      };
      BoardViewController.prototype.animateTileFall = function(tile, targetRow, targetCol) {
        var _this = this;
        var targetPos = this.getTileWorldPosition(targetRow, targetCol);
        var start = Date.now();
        return new Promise(function(resolve) {
          cc.Tween.stopAllByTarget(tile.node);
          cc.tween(tile.node).to(_this.animationDuration, {
            x: targetPos.x,
            y: targetPos.y
          }, {
            easing: "quadIn"
          }).call(function() {
            var end = Date.now();
            resolve();
          }).start();
        });
      };
      BoardViewController.prototype.animateTileDisappear = function(tile) {
        return __awaiter(this, void 0, Promise, function() {
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              return [ 4, tile.BlinkColor(cc.Color.RED) ];

             case 1:
              _a.sent();
              return [ 2, new Promise(function(resolve) {
                cc.Tween.stopAllByTarget(tile.node);
                var originalX = tile.node.x;
                cc.tween(tile.node).by(.05, {
                  x: 10
                }).by(.05, {
                  x: -20
                }).by(.05, {
                  x: 20
                }).by(.05, {
                  x: -10
                }).to(.05, {
                  x: originalX
                }).call(function() {
                  resolve();
                }).start();
              }) ];
            }
          });
        });
      };
      BoardViewController.prototype.animateTileAppear = function(tile) {
        var _this = this;
        var start = Date.now();
        return new Promise(function(resolve) {
          cc.Tween.stopAllByTarget(tile.node);
          tile.node.active = true;
          tile.node.scale = 0;
          tile.node.opacity = 0;
          cc.tween(tile.node).to(_this.appearDuration, {
            scale: 1,
            opacity: 255
          }).call(function() {
            var end = Date.now();
            resolve();
          }).start();
        });
      };
      BoardViewController.prototype.GenrateBoard = function(config) {
        this.tilesPool.forEach(function(element) {
          element.isClickable = true;
        });
        var rows = config.boardRows;
        var cols = config.boardCols;
        this.tileGrid = [];
        var anchorBasePosition = this.tilesAnchor.position;
        for (var i = 0; i < rows; i++) {
          this.tileGrid[i] = [];
          for (var j = 0; j < cols; j++) {
            var tile = this.GetTileFromPool();
            if (tile) {
              var tilePosition = cc.v3(j * this.tileSize + this.tileOffset, -i * this.tileSize + this.tileOffset).add(anchorBasePosition);
              tile.node.setPosition(tilePosition);
              tile.node.active = true;
              tile.setPosition(i, j, this.onTileClickCallback);
              tile.updateData(config.allowedTiles[Math.floor(Math.random() * config.allowedTiles.length)]);
              this.tileGrid[i][j] = tile;
            }
          }
        }
      };
      BoardViewController.prototype.delay = function(ms) {
        return new Promise(function(resolve) {
          return setTimeout(resolve, ms);
        });
      };
      BoardViewController.prototype.updateBoardFromState = function(oldState, newState) {
        return __awaiter(this, void 0, void 0, function() {
          var animationPromises, row, col, oldType, newType, tile, row, col, tileType, tileData, tile, isNewTile, targetPos, err_1;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              _a.trys.push([ 0, 8, , 9 ]);
              animationPromises = [];
              for (row = 0; row < oldState.rows; row++) for (col = 0; col < oldState.cols; col++) {
                oldType = oldState.getTileAt(row, col);
                newType = newState.getTileAt(row, col);
                if (oldType != newType && this.tileGrid[row] && this.tileGrid[row][col]) {
                  tile = this.tileGrid[row][col];
                  animationPromises.push(tile.BlinkColor(cc.Color.RED));
                }
              }
              if (!(animationPromises.length > 0)) return [ 3, 2 ];
              return [ 4, Promise.all(animationPromises) ];

             case 1:
              _a.sent();
              _a.label = 2;

             case 2:
              animationPromises.length = 0;
              for (row = 0; row < newState.rows; row++) {
                this.tileGrid[row] || (this.tileGrid[row] = []);
                for (col = 0; col < newState.cols; col++) {
                  tileType = newState.getTileAt(row, col);
                  tileData = newState.getTileDataByType(tileType);
                  if (tileData) {
                    tile = this.tileGrid[row] && this.tileGrid[row][col];
                    isNewTile = false;
                    if (!tile) {
                      tile = this.GetTileFromPool();
                      isNewTile = true;
                    }
                    if (tile) {
                      tile.updateData(tileData);
                      tile.setPosition(row, col, this.onTileClickCallback);
                      tile.node.active = true;
                      targetPos = this.getTileWorldPosition(row, col);
                      animationPromises.push(this.animateTileFall(tile, row, col));
                      this.tileGrid[row][col] = tile;
                      isNewTile && animationPromises.push(this.animateTileAppear(tile));
                    }
                  } else this.tileGrid[row][col] = null;
                }
              }
              console.log("Waiting for " + animationPromises.length + " fall/appear animations...");
              if (!(animationPromises.length > 0)) return [ 3, 5 ];
              return [ 4, Promise.all(animationPromises) ];

             case 3:
              _a.sent();
              return [ 4, this.delay(50) ];

             case 4:
              _a.sent();
              _a.label = 5;

             case 5:
              if (!(animationPromises.length > 0)) return [ 3, 7 ];
              return [ 4, Promise.all(animationPromises) ];

             case 6:
              _a.sent();
              _a.label = 7;

             case 7:
              return [ 3, 9 ];

             case 8:
              err_1 = _a.sent();
              console.error("Error in updateBoardFromState:", err_1);
              return [ 3, 9 ];

             case 9:
              return [ 2 ];
            }
          });
        });
      };
      BoardViewController.prototype.clearBoard = function() {
        this.tilesPool.forEach(function(element) {
          element.isClickable = false;
        });
      };
      __decorate([ property({
        type: cc.Node
      }) ], BoardViewController.prototype, "tilesAnchor", void 0);
      __decorate([ property(cc.Prefab) ], BoardViewController.prototype, "cellPrefab", void 0);
      BoardViewController = __decorate([ ccclass ], BoardViewController);
      return BoardViewController;
    }(cc.Component);
    exports.default = BoardViewController;
    cc._RF.pop();
  }, {
    "./TileViewController": "TileViewController"
  } ],
  BoolContainer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b20f5xz5XlDYLT7zJW/MVBY", "BoolContainer");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.BoolContainer = void 0;
    var ContainerBase_1 = require("./ContainerBase");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BoolContainer = function(_super) {
      __extends(BoolContainer, _super);
      function BoolContainer(initialValue) {
        void 0 === initialValue && (initialValue = false);
        var _this = _super.call(this) || this;
        _this.Value = initialValue;
        return _this;
      }
      BoolContainer = __decorate([ ccclass ], BoolContainer);
      return BoolContainer;
    }(ContainerBase_1.ContainerBase);
    exports.BoolContainer = BoolContainer;
    cc._RF.pop();
  }, {
    "./ContainerBase": "ContainerBase"
  } ],
  BoosterService: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6520f3EAEVKn5bo6SMPsiVI", "BoosterService");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var TileType_1 = require("../Core/TileType");
    var ccclass = cc._decorator.ccclass;
    var BoosterService = function() {
      function BoosterService() {}
      BoosterService.prototype.isBooster = function(tileType) {
        console.log("comparing : " + tileType);
        return tileType === TileType_1.TileType.Booster;
      };
      BoosterService.prototype.activateBooster = function(state, centerRow, centerCol, radius) {
        void 0 === radius && (radius = 1);
        if (state.getTileAt(centerRow, centerCol) !== TileType_1.TileType.Booster) {
          console.warn("Selected tile is not a booster");
          return null;
        }
        var newState = state.clone();
        var affectedTiles = [];
        for (var row = Math.max(0, centerRow - radius); row <= Math.min(newState.rows - 1, centerRow + radius); row++) for (var col = Math.max(0, centerCol - radius); col <= Math.min(newState.cols - 1, centerCol + radius); col++) {
          var tileType = newState.getTileAt(row, col);
          if (tileType !== TileType_1.TileType.None) {
            affectedTiles.push({
              row: row,
              col: col
            });
            newState.setTileAt(row, col, TileType_1.TileType.None);
          }
        }
        newState.wasRemove = affectedTiles;
        return newState;
      };
      BoosterService.prototype.activateLineBooster = function(state, centerRow, centerCol) {
        if (state.getTileAt(centerRow, centerCol) !== TileType_1.TileType.Booster) {
          console.warn("Selected tile is not a booster");
          return null;
        }
        var newState = state.clone();
        var affectedTiles = [];
        for (var col = 0; col < newState.cols; col++) {
          var tileType = newState.getTileAt(centerRow, col);
          if (tileType !== TileType_1.TileType.None) {
            affectedTiles.push({
              row: centerRow,
              col: col
            });
            newState.setTileAt(centerRow, col, TileType_1.TileType.None);
          }
        }
        for (var row = 0; row < newState.rows; row++) {
          var tileType = newState.getTileAt(row, centerCol);
          if (tileType !== TileType_1.TileType.None) {
            affectedTiles.push({
              row: row,
              col: centerCol
            });
            newState.setTileAt(row, centerCol, TileType_1.TileType.None);
          }
        }
        newState.wasRemove = affectedTiles;
        return newState;
      };
      BoosterService.prototype.activateExplosionBooster = function(state, centerRow, centerCol, explosionRadius) {
        void 0 === explosionRadius && (explosionRadius = 2);
        if (state.getTileAt(centerRow, centerCol) !== TileType_1.TileType.Booster) {
          console.warn("Selected tile is not a booster");
          return null;
        }
        var newState = state.clone();
        var affectedTiles = [];
        for (var row = Math.max(0, centerRow - explosionRadius); row <= Math.min(newState.rows - 1, centerRow + explosionRadius); row++) for (var col = Math.max(0, centerCol - explosionRadius); col <= Math.min(newState.cols - 1, centerCol + explosionRadius); col++) {
          var tileType = newState.getTileAt(row, col);
          if (tileType !== TileType_1.TileType.None) {
            affectedTiles.push({
              row: row,
              col: col
            });
            newState.setTileAt(row, col, TileType_1.TileType.None);
          }
        }
        newState.wasRemove = affectedTiles;
        return newState;
      };
      BoosterService = __decorate([ ccclass ], BoosterService);
      return BoosterService;
    }();
    exports.default = BoosterService;
    cc._RF.pop();
  }, {
    "../Core/TileType": "TileType"
  } ],
  Bootstrapper: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d8b2eYHYQ1FTaQ0ZpoISD0s", "Bootstrapper");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ServiceContainer_1 = require("./ServiceContainer");
    var BoardManager_1 = require("../Managers/BoardManager");
    var ScoreManager_1 = require("../Managers/ScoreManager");
    var GameManager_1 = require("../Managers/GameManager");
    var GameConfig_1 = require("../Core/GameConfig");
    var StateMachine_1 = require("../States/StateMachine");
    var UIManager_1 = require("../Managers/UIManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Bootstrapper = function(_super) {
      __extends(Bootstrapper, _super);
      function Bootstrapper() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.gameConfig = null;
        _this.boardManager = null;
        _this.scoreManager = null;
        _this.gameManager = null;
        _this.uiManager = null;
        _this.stateMachine = null;
        return _this;
      }
      Bootstrapper.prototype.onLoad = function() {
        var container = new ServiceContainer_1.ServiceContainer(this.gameConfig);
        container.register("GameConfig", this.gameConfig);
        container.register("BoardManager", this.boardManager);
        container.register("ScoreManager", this.scoreManager);
        container.register("GameManager", this.gameManager);
        container.register("UIManager", this.uiManager);
        container.register("StateMachine", this.stateMachine);
        this.boardManager.init(container);
        this.scoreManager.init(container);
        this.gameManager.init(container);
        this.uiManager.init(container);
        this.stateMachine.injectContainer(container);
        this.stateMachine.goInit();
      };
      Bootstrapper.prototype.start = function() {};
      __decorate([ property(GameConfig_1.default) ], Bootstrapper.prototype, "gameConfig", void 0);
      __decorate([ property(BoardManager_1.BoardManager) ], Bootstrapper.prototype, "boardManager", void 0);
      __decorate([ property(ScoreManager_1.ScoreManager) ], Bootstrapper.prototype, "scoreManager", void 0);
      __decorate([ property(GameManager_1.GameManager) ], Bootstrapper.prototype, "gameManager", void 0);
      __decorate([ property(UIManager_1.default) ], Bootstrapper.prototype, "uiManager", void 0);
      __decorate([ property(StateMachine_1.StateMachine) ], Bootstrapper.prototype, "stateMachine", void 0);
      Bootstrapper = __decorate([ ccclass ], Bootstrapper);
      return Bootstrapper;
    }(cc.Component);
    exports.default = Bootstrapper;
    cc._RF.pop();
  }, {
    "../Core/GameConfig": "GameConfig",
    "../Managers/BoardManager": "BoardManager",
    "../Managers/GameManager": "GameManager",
    "../Managers/ScoreManager": "ScoreManager",
    "../Managers/UIManager": "UIManager",
    "../States/StateMachine": "StateMachine",
    "./ServiceContainer": "ServiceContainer"
  } ],
  ContainerBase: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9831aTxwGZNpa1jxn6UgKRr", "ContainerBase");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ContainerBase = void 0;
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ContainerBase = function(_super) {
      __extends(ContainerBase, _super);
      function ContainerBase() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.onValueChanged = null;
        return _this;
      }
      ContainerBase.prototype.setValue = function(newValue) {
        this.Value = newValue;
        this.onValueChanged && this.onValueChanged(newValue);
      };
      ContainerBase.prototype.getValue = function() {
        return this.Value;
      };
      __decorate([ property ], ContainerBase.prototype, "Value", void 0);
      ContainerBase = __decorate([ ccclass ], ContainerBase);
      return ContainerBase;
    }(cc.Component);
    exports.ContainerBase = ContainerBase;
    cc._RF.pop();
  }, {} ],
  GameConfig: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a1737JbvEtHUJeT6kfwv3Ip", "GameConfig");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var TileData_1 = require("../Core/TileData");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var GameConfig = function(_super) {
      __extends(GameConfig, _super);
      function GameConfig() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.scorePerTile = 20;
        _this.targetScore = 1e3;
        _this.gameMoves = 20;
        _this.boardRows = 8;
        _this.boardCols = 8;
        _this.bosterCount = 3;
        _this.shuffleCount = 5;
        _this.allowedTiles = [];
        return _this;
      }
      __decorate([ property ], GameConfig.prototype, "scorePerTile", void 0);
      __decorate([ property ], GameConfig.prototype, "targetScore", void 0);
      __decorate([ property ], GameConfig.prototype, "gameMoves", void 0);
      __decorate([ property ], GameConfig.prototype, "boardRows", void 0);
      __decorate([ property ], GameConfig.prototype, "boardCols", void 0);
      __decorate([ property ], GameConfig.prototype, "bosterCount", void 0);
      __decorate([ property ], GameConfig.prototype, "shuffleCount", void 0);
      __decorate([ property([ TileData_1.default ]) ], GameConfig.prototype, "allowedTiles", void 0);
      GameConfig = __decorate([ ccclass ], GameConfig);
      return GameConfig;
    }(cc.Component);
    exports.default = GameConfig;
    cc._RF.pop();
  }, {
    "../Core/TileData": "TileData"
  } ],
  GameManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a89b4wl1yBEkr1KDhBAG0UD", "GameManager");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.GameManager = void 0;
    var IntContainer_1 = require("../IntContainer");
    var ManagerBase_1 = require("./ManagerBase");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var GameManager = function(_super) {
      __extends(GameManager, _super);
      function GameManager() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.boardManager = null;
        _this.scoreManager = null;
        _this.isBoosterMode = false;
        _this.shuffleCount = null;
        _this.boosterCount = null;
        return _this;
      }
      GameManager.prototype.init = function(container) {
        _super.prototype.init.call(this, container);
        this.boardManager = this.container.resolve("BoardManager");
        this.boardManager || console.error("BoardManager is not available in GameManager.init");
        this.scoreManager = this.container.resolve("ScoreManager");
        this.scoreManager || console.error("ScoreManager is not available in GameManager.init");
        this.shuffleCount && this.boosterCount || console.error("GameManager initialization failed due to missing dependencies");
        this.shuffleCount.setValue(this.container.resolve("GameConfig").shuffleCount);
        this.boosterCount.setValue(this.container.resolve("GameConfig").bosterCount);
      };
      GameManager.prototype.MinusShuffle = function() {
        if (this.shuffleCount.getValue() > 0) {
          this.shuffleCount.setValue(this.shuffleCount.getValue() - 1);
          0 === this.shuffleCount.getValue() && this.container.resolve("UIManager").mainMenu.disableShuffleButton();
        } else console.warn("No shuffles left!");
      };
      GameManager.prototype.MinusBooster = function() {
        this.boosterCount.getValue() > 0 ? this.boosterCount.setValue(this.boosterCount.getValue() - 1) : console.warn("No boosters left!");
      };
      GameManager.prototype.startGame = function() {
        this.boardManager.BuildUpBoard();
      };
      GameManager.prototype.endGame = function() {
        this.boardManager.ClearBoard();
      };
      __decorate([ property(IntContainer_1.IntContainer) ], GameManager.prototype, "shuffleCount", void 0);
      __decorate([ property(IntContainer_1.IntContainer) ], GameManager.prototype, "boosterCount", void 0);
      GameManager = __decorate([ ccclass ], GameManager);
      return GameManager;
    }(ManagerBase_1.default);
    exports.GameManager = GameManager;
    exports.default = GameManager;
    cc._RF.pop();
  }, {
    "../IntContainer": "IntContainer",
    "./ManagerBase": "ManagerBase"
  } ],
  InitState: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2c926twBllE6ZFUDy7LGQLp", "InitState");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.InitState = void 0;
    var StateBase_1 = require("./StateBase");
    var InitState = function(_super) {
      __extends(InitState, _super);
      function InitState() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      InitState.prototype.update = function(dt) {};
      InitState.prototype.onEnter = function() {
        console.log("[InitState] enter");
        this.stateMachine.goPlaying();
      };
      InitState.prototype.onExit = function() {
        console.log("[InitState] exit");
      };
      return InitState;
    }(StateBase_1.StateBase);
    exports.InitState = InitState;
    cc._RF.pop();
  }, {
    "./StateBase": "StateBase"
  } ],
  IntContainer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0dce37Q6DlId6f+ZBVSfw11", "IntContainer");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.IntContainer = void 0;
    var ContainerBase_1 = require("./ContainerBase");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var IntContainer = function(_super) {
      __extends(IntContainer, _super);
      function IntContainer(initialValue) {
        void 0 === initialValue && (initialValue = 0);
        var _this = _super.call(this) || this;
        _this.setValue(initialValue);
        return _this;
      }
      IntContainer = __decorate([ ccclass("IntContainer") ], IntContainer);
      return IntContainer;
    }(ContainerBase_1.ContainerBase);
    exports.IntContainer = IntContainer;
    cc._RF.pop();
  }, {
    "./ContainerBase": "ContainerBase"
  } ],
  LooseState: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "96a2aCmw4pHp44DxhgKgVMs", "LooseState");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.LooseState = void 0;
    var StateBase_1 = require("./StateBase");
    var LooseState = function(_super) {
      __extends(LooseState, _super);
      function LooseState() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      LooseState.prototype.update = function(dt) {};
      LooseState.prototype.onEnter = function() {
        console.log("[LooseState] enter");
        this.game.resolve("UIManager").showLooseScreen();
        this.game.resolve("ScoreManager").reset();
      };
      LooseState.prototype.onExit = function() {
        console.log("[LooseState] exit");
        this.game.resolve("UIManager").hideLooseScreen();
        this.game.resolve("ScoreManager").reset();
      };
      return LooseState;
    }(StateBase_1.StateBase);
    exports.LooseState = LooseState;
    cc._RF.pop();
  }, {
    "./StateBase": "StateBase"
  } ],
  MainMenuController: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a6cearxWDlCF62jZesKgKw8", "MainMenuController");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var MainMenuController = function(_super) {
      __extends(MainMenuController, _super);
      function MainMenuController() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.shuffleCounterLabel = null;
        _this.boosterCounterLabel = null;
        _this.shiffleButton = null;
        _this.boosterButton = null;
        return _this;
      }
      MainMenuController.prototype.updateShuffleCount = function(count) {
        this.shuffleCounterLabel && (this.shuffleCounterLabel.string = "" + count);
      };
      MainMenuController.prototype.updateBoosterCount = function(count) {
        this.boosterCounterLabel && (this.boosterCounterLabel.string = "" + count);
      };
      MainMenuController.prototype.subscribeToShuffleButton = function(callback) {
        this.shiffleButton && this.shiffleButton.node.on("click", callback);
      };
      MainMenuController.prototype.subscribeToBoosterButton = function(callback) {
        this.boosterButton && this.boosterButton.node.on(cc.Node.EventType.TOUCH_START, callback, this);
      };
      MainMenuController.prototype.disableShuffleButton = function() {
        this.shiffleButton && (this.shiffleButton.interactable = false);
      };
      MainMenuController.prototype.disableBoosterButton = function() {
        this.boosterButton && (this.boosterButton.interactable = false);
      };
      __decorate([ property(cc.Label) ], MainMenuController.prototype, "shuffleCounterLabel", void 0);
      __decorate([ property(cc.Label) ], MainMenuController.prototype, "boosterCounterLabel", void 0);
      __decorate([ property(cc.Button) ], MainMenuController.prototype, "shiffleButton", void 0);
      __decorate([ property(cc.Button) ], MainMenuController.prototype, "boosterButton", void 0);
      MainMenuController = __decorate([ ccclass ], MainMenuController);
      return MainMenuController;
    }(cc.Component);
    exports.default = MainMenuController;
    cc._RF.pop();
  }, {} ],
  ManagerBase: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ce2e27pawRI9b+mYAWe25qM", "ManagerBase");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ccclass = cc._decorator.ccclass;
    var ManagerBase = function(_super) {
      __extends(ManagerBase, _super);
      function ManagerBase() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.container = null;
        return _this;
      }
      ManagerBase.prototype.init = function(container) {
        this.container = container;
      };
      ManagerBase = __decorate([ ccclass ], ManagerBase);
      return ManagerBase;
    }(cc.Component);
    exports.default = ManagerBase;
    cc._RF.pop();
  }, {} ],
  PlayingState: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3aa2568fXVGDomszAgI/WVm", "PlayingState");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.PlayingState = void 0;
    var StateBase_1 = require("./StateBase");
    var PlayingState = function(_super) {
      __extends(PlayingState, _super);
      function PlayingState() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      PlayingState.prototype.update = function(dt) {};
      PlayingState.prototype.onEnter = function() {
        console.log("[PlayingState] enter");
        this.game.resolve("GameManager").startGame();
        this.game.resolve("ScoreManager").moves.setValue(this.game.config.gameMoves);
      };
      PlayingState.prototype.onExit = function() {
        this.game.resolve("GameManager").endGame();
        console.log("[PlayingState] exit");
      };
      return PlayingState;
    }(StateBase_1.StateBase);
    exports.PlayingState = PlayingState;
    cc._RF.pop();
  }, {
    "./StateBase": "StateBase"
  } ],
  ScoreManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4e8a4GuMZVNvIfwkdPDBauK", "ScoreManager");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ScoreManager = void 0;
    var IntContainer_1 = require("../IntContainer");
    var ManagerBase_1 = require("./ManagerBase");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ScoreManager = function(_super) {
      __extends(ScoreManager, _super);
      function ScoreManager() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.gameConfig = null;
        return _this;
      }
      ScoreManager.prototype.onLoad = function() {
        if (!this.score) {
          this.score = this.node.getComponent(IntContainer_1.IntContainer);
          if (this.score) {
            this.score.setValue(0);
            this.moves.setValue(this.container.config.gameMoves);
          } else console.error("ScoreManager requires an IntContainer component on the same node.");
        }
        if (!this.moves) {
          this.moves = this.node.getComponent(IntContainer_1.IntContainer);
          this.moves ? this.moves.setValue(0) : console.error("ScoreManager requires an IntContainer component for moves on the same node.");
        }
      };
      ScoreManager.prototype.init = function(container) {
        _super.prototype.init.call(this, container);
        this.score || (this.score = this.node.getComponent(IntContainer_1.IntContainer));
        if (this.score) {
          this.score.setValue(0);
          this.gameConfig = this.container.resolve("GameConfig");
          this.moves.setValue(this.gameConfig.gameMoves);
        } else console.error("ScoreManager requires an IntContainer component on the same node.");
      };
      ScoreManager.prototype.addPoints = function(points) {
        points = this.score.getValue() + points * this.gameConfig.scorePerTile;
        this.score.setValue(points);
        if (this.score.getValue() >= this.gameConfig.targetScore) {
          console.log("Target score reached! You win!");
          this.container.resolve("StateMachine").goWin();
        }
        console.log("Score updated: " + this.score.getValue());
      };
      ScoreManager.prototype.reduceMoves = function(count) {
        var remainingMoves = this.moves.getValue() - count;
        this.moves.setValue(remainingMoves);
        if (remainingMoves <= 0) {
          console.log("No moves left! Game Over!");
          this.container.resolve("StateMachine").goLoose();
        }
        console.log("Moves remaining: " + this.moves.getValue());
      };
      ScoreManager.prototype.reset = function() {
        this.score.setValue(0);
        this.moves.setValue(this.gameConfig.gameMoves);
        console.log("Score and moves reset.");
      };
      __decorate([ property(IntContainer_1.IntContainer) ], ScoreManager.prototype, "score", void 0);
      __decorate([ property(IntContainer_1.IntContainer) ], ScoreManager.prototype, "moves", void 0);
      ScoreManager = __decorate([ ccclass ], ScoreManager);
      return ScoreManager;
    }(ManagerBase_1.default);
    exports.ScoreManager = ScoreManager;
    exports.default = ScoreManager;
    cc._RF.pop();
  }, {
    "../IntContainer": "IntContainer",
    "./ManagerBase": "ManagerBase"
  } ],
  ServiceContainer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9b989pYUz1K5a0xgherdSmA", "ServiceContainer");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ServiceContainer = void 0;
    var ServiceContainer = function() {
      function ServiceContainer(GameConfig) {
        this.services = new Map();
        GameConfig && (this.config = GameConfig);
      }
      ServiceContainer.prototype.register = function(key, instance) {
        console.log(key + " is registred!");
        this.services.set(key, instance);
      };
      ServiceContainer.prototype.resolve = function(key) {
        var service = this.services.get(key);
        if (!service) throw new Error("Service not found: " + key);
        return service;
      };
      return ServiceContainer;
    }();
    exports.ServiceContainer = ServiceContainer;
    cc._RF.pop();
  }, {} ],
  StateBase: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "25eefDueI1KKrhStcI7p8j3", "StateBase");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.StateBase = void 0;
    var StateBase = function() {
      function StateBase(stateMachine) {
        this.stateMachine = stateMachine;
      }
      Object.defineProperty(StateBase.prototype, "game", {
        get: function() {
          return this.stateMachine.serviceContainer;
        },
        enumerable: false,
        configurable: true
      });
      return StateBase;
    }();
    exports.StateBase = StateBase;
    cc._RF.pop();
  }, {} ],
  StateMachine: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4afa4brVaRBJJBtXbTDj33p", "StateMachine");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.StateType = exports.StateMachine = void 0;
    var InitState_1 = require("./InitState");
    var PlayingState_1 = require("./PlayingState");
    var WinState_1 = require("./WinState");
    var LooseState_1 = require("./LooseState");
    var ccclass = cc._decorator.ccclass;
    var StateMachine = function(_super) {
      __extends(StateMachine, _super);
      function StateMachine() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.currentState = null;
        _this.states = new Map();
        return _this;
      }
      StateMachine.prototype.onLoad = function() {
        this.registerState(StateType.Init, new InitState_1.InitState(this));
        this.registerState(StateType.Playing, new PlayingState_1.PlayingState(this));
        this.registerState(StateType.Win, new WinState_1.WinState(this));
        this.registerState(StateType.Loose, new LooseState_1.LooseState(this));
        this.changeState(StateType.Init);
      };
      StateMachine.prototype.injectContainer = function(container) {
        this.serviceContainer = container;
        console.log("ServiceContainer injected");
      };
      StateMachine.prototype.registerState = function(type, state) {
        this.states.set(type, state);
      };
      StateMachine.prototype.changeState = function(type) {
        var _a;
        var newState = this.states.get(type);
        if (!newState) {
          console.error("State " + StateType[type] + " not registered");
          return;
        }
        if (this.currentState === newState) return;
        null === (_a = this.currentState) || void 0 === _a ? void 0 : _a.onExit();
        this.currentState = newState;
        this.currentState.onEnter();
      };
      StateMachine.prototype.update = function(dt) {
        var _a;
        null === (_a = this.currentState) || void 0 === _a ? void 0 : _a.update(dt);
      };
      StateMachine.prototype.goInit = function() {
        this.changeState(StateType.Init);
      };
      StateMachine.prototype.goPlaying = function() {
        this.changeState(StateType.Playing);
      };
      StateMachine.prototype.goWin = function() {
        this.changeState(StateType.Win);
      };
      StateMachine.prototype.goLoose = function() {
        this.changeState(StateType.Loose);
      };
      StateMachine = __decorate([ ccclass("StateMachine") ], StateMachine);
      return StateMachine;
    }(cc.Component);
    exports.StateMachine = StateMachine;
    var StateType;
    (function(StateType) {
      StateType[StateType["Init"] = 0] = "Init";
      StateType[StateType["Playing"] = 1] = "Playing";
      StateType[StateType["Win"] = 2] = "Win";
      StateType[StateType["Loose"] = 3] = "Loose";
      StateType[StateType["Menu"] = 4] = "Menu";
    })(StateType = exports.StateType || (exports.StateType = {}));
    cc._RF.pop();
  }, {
    "./InitState": "InitState",
    "./LooseState": "LooseState",
    "./PlayingState": "PlayingState",
    "./WinState": "WinState"
  } ],
  StringContainer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "15bf9XnqGZKaqDpxk6SIGkG", "StringContainer");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.StringContainer = void 0;
    var ContainerBase_1 = require("./ContainerBase");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var StringContainer = function(_super) {
      __extends(StringContainer, _super);
      function StringContainer(initialValue) {
        void 0 === initialValue && (initialValue = "");
        var _this = _super.call(this) || this;
        _this.setValue(initialValue);
        return _this;
      }
      StringContainer = __decorate([ ccclass ], StringContainer);
      return StringContainer;
    }(ContainerBase_1.ContainerBase);
    exports.StringContainer = StringContainer;
    cc._RF.pop();
  }, {
    "./ContainerBase": "ContainerBase"
  } ],
  TileData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "87d218vh0BNoadBSVPb6Elo", "TileData");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var TileType_1 = require("./TileType");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TileData = function() {
      function TileData() {
        this.type = TileType_1.TileType.Red;
        this.sprite = null;
      }
      __decorate([ property({
        type: TileType_1.TileType
      }) ], TileData.prototype, "type", void 0);
      __decorate([ property(cc.SpriteFrame) ], TileData.prototype, "sprite", void 0);
      TileData = __decorate([ ccclass ], TileData);
      return TileData;
    }();
    exports.default = TileData;
    cc._RF.pop();
  }, {
    "./TileType": "TileType"
  } ],
  TileType: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ac45f5FX81HYqQWmfbsXJov", "TileType");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.TileType = void 0;
    var TileType;
    (function(TileType) {
      TileType[TileType["None"] = 0] = "None";
      TileType[TileType["Red"] = 1] = "Red";
      TileType[TileType["Green"] = 2] = "Green";
      TileType[TileType["Blue"] = 3] = "Blue";
      TileType[TileType["Yellow"] = 4] = "Yellow";
      TileType[TileType["Purple"] = 5] = "Purple";
      TileType[TileType["Booster"] = 6] = "Booster";
    })(TileType = exports.TileType || (exports.TileType = {}));
    cc._RF.pop();
  }, {} ],
  TileViewController: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "095e6QVE5VPiKEcJ+ugkU8R", "TileViewController");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var TileType_1 = require("../Core/TileType");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TileViewController = function(_super) {
      __extends(TileViewController, _super);
      function TileViewController() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.type = TileType_1.TileType.Red;
        _this.isClickable = true;
        _this.label = null;
        _this.row = -1;
        _this.col = -1;
        _this.onClickCallback = null;
        return _this;
      }
      TileViewController.prototype.setPosition = function(row, col, callback) {
        this.row = row;
        this.col = col;
        this.onClickCallback = callback;
      };
      TileViewController.prototype.updateData = function(data) {
        this.label.string = data.type.toString();
        this.type = data.type;
        this.node.getComponent(cc.Sprite).spriteFrame = data.sprite;
      };
      TileViewController.prototype.onLoad = function() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTileClicked.bind(this), this);
        this.label.node.color = cc.Color.WHITE;
      };
      TileViewController.prototype.onDestroy = function() {
        this.node.off(cc.Node.EventType.TOUCH_START, this.onTileClicked.bind(this), this);
      };
      TileViewController.prototype.onTileClicked = function() {
        return __awaiter(this, void 0, void 0, function() {
          var result, err_1;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              if (!this.isClickable) return [ 2 ];
              console.log("onTileClicked enter [" + this.row + "," + this.col + "] at " + Date.now());
              this.isClickable = false;
              this.label.node.color = cc.Color.RED;
              return [ 4, new Promise(function(resolve) {
                return setTimeout(resolve, 100);
              }) ];

             case 1:
              _a.sent();
              this.label.node.color = cc.Color.WHITE;
              if (!(this.onClickCallback && this.row >= 0 && this.col >= 0)) return [ 3, 8 ];
              _a.label = 2;

             case 2:
              _a.trys.push([ 2, 5, 6, 7 ]);
              result = this.onClickCallback(this.row, this.col, this);
              if (!(result instanceof Promise)) return [ 3, 4 ];
              return [ 4, result ];

             case 3:
              _a.sent();
              _a.label = 4;

             case 4:
              return [ 3, 7 ];

             case 5:
              err_1 = _a.sent();
              console.error("Tile click callback error:", err_1);
              return [ 3, 7 ];

             case 6:
              this.isClickable = true;
              console.log("onTileClicked exit [" + this.row + "," + this.col + "] " + this.type + " at " + Date.now());
              return [ 7 ];

             case 7:
              return [ 3, 9 ];

             case 8:
              this.isClickable = true;
              console.log("onTileClicked exit (no callback) [" + this.row + "," + this.col + "] at " + Date.now());
              _a.label = 9;

             case 9:
              return [ 2 ];
            }
          });
        });
      };
      TileViewController.prototype.getRow = function() {
        return this.row;
      };
      TileViewController.prototype.getCol = function() {
        return this.col;
      };
      TileViewController.prototype.BlinkColor = function(color) {
        return __awaiter(this, void 0, Promise, function() {
          var _this = this;
          return __generator(this, function(_a) {
            this.label.node.color = color;
            cc.tween(this.node).to(.1, {
              scale: 1.1
            }).to(.1, {
              scale: 1
            }).start();
            return [ 2, new Promise(function(resolve) {
              return setTimeout(resolve, 1e3);
            }).then(function() {
              _this.node.scale = 1;
              _this.label.node.color = cc.Color.WHITE;
            }) ];
          });
        });
      };
      __decorate([ property({
        type: TileType_1.TileType
      }) ], TileViewController.prototype, "type", void 0);
      __decorate([ property(cc.Label) ], TileViewController.prototype, "label", void 0);
      TileViewController = __decorate([ ccclass ], TileViewController);
      return TileViewController;
    }(cc.Component);
    exports.default = TileViewController;
    cc._RF.pop();
  }, {
    "../Core/TileType": "TileType"
  } ],
  UIManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6cbdfQAs8xGmbEPJkINdapY", "UIManager");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var WinScreenController_1 = require("../View/WinScreenController");
    var ManagerBase_1 = require("./ManagerBase");
    var MainMenuController_1 = require("../View/MainMenuController");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var UIManager = function(_super) {
      __extends(UIManager, _super);
      function UIManager() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.scoreLabel = null;
        _this.movesLabel = null;
        _this.shuffleCountLabel = null;
        _this.boosterCountLabel = null;
        _this.winScreen = null;
        _this.mainMenu = null;
        _this.scoreManager = null;
        _this.gameConfig = null;
        return _this;
      }
      UIManager.prototype.init = function(container) {
        var _this = this;
        _super.prototype.init.call(this, container);
        this.gameConfig = this.container.resolve("GameConfig");
        if (!this.gameConfig) {
          console.error("GameConfig is not assigned in UIManager");
          return;
        }
        try {
          this.scoreManager = this.container.resolve("ScoreManager");
          if (this.scoreManager && this.scoreManager.score) {
            this.scoreManager.score.onValueChanged = function(newScore) {
              _this.updateScore(newScore);
            };
            console.log("UIManager started and subscribed to score changes");
          } else console.warn("ScoreManager or its score property not yet initialized");
          if (this.scoreManager && this.scoreManager.moves) {
            this.scoreManager.moves.onValueChanged = function(newMoves) {
              _this.updateMoves(newMoves);
            };
            console.log("UIManager started and subscribed to moves changes");
          } else console.warn("ScoreManager or its moves property not yet initialized");
        } catch (err) {
          console.warn("Failed to resolve ScoreManager in UIManager.init:", err);
        }
        if (!this.winScreen) {
          console.error("WinScreenController is not assigned in UIManager");
          return;
        }
        try {
          this.container.resolve("GameManager").shuffleCount.onValueChanged = function(newShuffleCount) {
            _this.shuffleCountLabel ? _this.shuffleCountLabel.string = newShuffleCount.toString() : console.error("Shuffle count label is not assigned in UIManager");
          };
          this.container.resolve("GameManager").boosterCount.onValueChanged = function(newBoosterCount) {
            _this.boosterCountLabel ? _this.boosterCountLabel.string = newBoosterCount.toString() : console.error("Booster count label is not assigned in UIManager");
          };
        } catch (err) {
          console.warn("Failed to resolve GameManager or its properties in UIManager.init:", err);
        }
        this.mainMenu.subscribeToShuffleButton(function() {
          _this.container.resolve("BoardManager").BuildUpBoard();
          console.log("Shuffle button clicked, board rebuilt");
          _this.container.resolve("GameManager").MinusShuffle();
        });
        this.mainMenu.subscribeToBoosterButton(function() {
          _this.container.resolve("GameManager").isBoosterMode = true;
          _this.container.resolve("GameManager").MinusBooster();
        });
        this.winScreen.subscribeToRestart(function() {
          _this.container.resolve("StateMachine").goPlaying();
        });
      };
      UIManager.prototype.updateScore = function(score) {
        this.scoreLabel ? this.scoreLabel.string = "\u041e\u0427\u041a\u0418:\n " + score + "/" + this.gameConfig.targetScore : console.error("Score label is not assigned in UIManager");
      };
      UIManager.prototype.updateMoves = function(moves) {
        this.movesLabel ? this.movesLabel.string = moves.toString() : console.error("Moves label is not assigned in UIManager");
      };
      UIManager.prototype.updateShuffleCount = function(count) {
        this.shuffleCountLabel ? this.shuffleCountLabel.string = "" + count : console.error("Shuffle count label is not assigned in UIManager");
      };
      UIManager.prototype.showWinScreen = function() {
        this.winScreen ? this.winScreen.showWinScreen() : console.error("WinScreenController is not assigned in UIManager");
      };
      UIManager.prototype.hideWinScreen = function() {
        this.winScreen ? this.winScreen.hideWinScreen() : console.error("WinScreenController is not assigned in UIManager");
      };
      UIManager.prototype.showLooseScreen = function() {
        console.log("Showing loose screen");
        this.winScreen ? this.winScreen.showLooseScreen() : console.error("WinScreenController is not assigned in UIManager");
      };
      UIManager.prototype.hideLooseScreen = function() {
        console.log("Hiding loose screen");
        this.winScreen ? this.winScreen.hideLooseScreen() : console.error("WinScreenController is not assigned in UIManager");
      };
      __decorate([ property(cc.Label) ], UIManager.prototype, "scoreLabel", void 0);
      __decorate([ property(cc.Label) ], UIManager.prototype, "movesLabel", void 0);
      __decorate([ property(cc.Label) ], UIManager.prototype, "shuffleCountLabel", void 0);
      __decorate([ property(cc.Label) ], UIManager.prototype, "boosterCountLabel", void 0);
      __decorate([ property(WinScreenController_1.default) ], UIManager.prototype, "winScreen", void 0);
      __decorate([ property(MainMenuController_1.default) ], UIManager.prototype, "mainMenu", void 0);
      UIManager = __decorate([ ccclass ], UIManager);
      return UIManager;
    }(ManagerBase_1.default);
    exports.default = UIManager;
    cc._RF.pop();
  }, {
    "../View/MainMenuController": "MainMenuController",
    "../View/WinScreenController": "WinScreenController",
    "./ManagerBase": "ManagerBase"
  } ],
  WinScreenController: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e8c7az/RN1LmosncF1U3YIb", "WinScreenController");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var WinScreenController = function(_super) {
      __extends(WinScreenController, _super);
      function WinScreenController() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.winScreenNode = null;
        _this.restartButton = null;
        _this.background = null;
        _this.text = null;
        return _this;
      }
      WinScreenController.prototype.onLoad = function() {
        this.winScreenNode ? this.winScreenNode.active = false : console.error("WinScreenController requires a reference to the win screen node.");
        this.background || console.error("WinScreenController requires a reference to the background sprite.");
      };
      WinScreenController.prototype.showWinScreen = function() {
        this.text && (this.text.string = "\u041f\u043e\u0431\u0435\u0434\u0430!\n\n\n");
        this.background && (this.background.node.color = cc.Color.GREEN);
        this.winScreenNode && (this.winScreenNode.active = true);
      };
      WinScreenController.prototype.hideWinScreen = function() {
        this.winScreenNode ? this.winScreenNode.active = false : console.error("WinScreenController requires a reference to the win screen node.");
      };
      WinScreenController.prototype.subscribeToRestart = function(callback) {
        this.restartButton ? this.restartButton.node.on("click", callback) : console.error("WinScreenController requires a reference to the restart button.");
      };
      WinScreenController.prototype.showLooseScreen = function() {
        if (this.background) {
          this.showWinScreen();
          this.background.node.color = cc.Color.RED;
          this.text && (this.text.string = "\u041f\u043e\u0440\u0430\u0436\u0435\u043d\u0438\u0435.\n\n\n");
        } else console.error("WinScreenController requires a reference to the background sprite.");
      };
      WinScreenController.prototype.hideLooseScreen = function() {
        if (this.background) {
          this.hideWinScreen();
          this.background.node.color = cc.Color.RED;
        } else console.error("WinScreenController requires a reference to the background sprite.");
      };
      __decorate([ property(cc.Node) ], WinScreenController.prototype, "winScreenNode", void 0);
      __decorate([ property(cc.Button) ], WinScreenController.prototype, "restartButton", void 0);
      __decorate([ property(cc.Sprite) ], WinScreenController.prototype, "background", void 0);
      __decorate([ property(cc.Label) ], WinScreenController.prototype, "text", void 0);
      WinScreenController = __decorate([ ccclass ], WinScreenController);
      return WinScreenController;
    }(cc.Component);
    exports.default = WinScreenController;
    cc._RF.pop();
  }, {} ],
  WinState: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3e046DfGLFPG4j1qBDkI1Gy", "WinState");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.WinState = void 0;
    var StateBase_1 = require("./StateBase");
    var WinState = function(_super) {
      __extends(WinState, _super);
      function WinState() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      WinState.prototype.update = function(dt) {};
      WinState.prototype.onEnter = function() {
        console.log("[WinState] enter");
        this.game.resolve("UIManager").showWinScreen();
      };
      WinState.prototype.onExit = function() {
        console.log("[WinState] exit");
        this.game.resolve("UIManager").hideWinScreen();
        this.game.resolve("ScoreManager").reset();
      };
      return WinState;
    }(StateBase_1.StateBase);
    exports.WinState = WinState;
    cc._RF.pop();
  }, {
    "./StateBase": "StateBase"
  } ]
}, {}, [ "BoolContainer", "ContainerBase", "BoardState", "GameConfig", "TileData", "TileType", "Bootstrapper", "ServiceContainer", "IntContainer", "BoardManager", "GameManager", "ManagerBase", "ScoreManager", "UIManager", "BoardService", "BoosterService", "InitState", "LooseState", "PlayingState", "StateBase", "StateMachine", "WinState", "StringContainer", "BoardViewController", "MainMenuController", "TileViewController", "WinScreenController" ]);