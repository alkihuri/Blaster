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
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              return [ 4, this.onTileClickedInternal(row, col) ];

             case 1:
              _a.sent();
              return [ 2 ];
            }
          });
        });
      };
      BoardManager.prototype.onTileClickedInternal = function(row, col) {
        return __awaiter(this, void 0, void 0, function() {
          var oldState, newState, scoreGained;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              if (this.isAnimating) {
                console.log("Animation in progress, click ignored");
                return [ 2 ];
              }
              console.log("Tile clicked at [" + row + ", " + col + "]");
              this.isAnimating = true;
              oldState = this.boardState.clone();
              newState = this.boardService.handleTileClick(row, col);
              if (!newState) return [ 3, 2 ];
              console.log("Board state updated, rendering changes...");
              this.boardState = newState;
              return [ 4, this.boardViewController.updateBoardFromState(oldState, newState) ];

             case 1:
              _a.sent();
              scoreGained = this.boardService.calculateScore(newState);
              this.scoremanager.add(scoreGained);
              return [ 3, 3 ];

             case 2:
              console.log("No matching tiles for this position");
              _a.label = 3;

             case 3:
              this.isAnimating = false;
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
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var TileType_1 = require("../Core/TileType");
    var ccclass = cc._decorator.ccclass;
    var BoardService = function() {
      function BoardService() {
        this.boardState = null;
      }
      BoardService.prototype.initializeBoard = function(boardState) {
        this.boardState = boardState;
      };
      BoardService.prototype.getBoardState = function() {
        return this.boardState;
      };
      BoardService.prototype.handleTileClick = function(row, col) {
        if (!this.boardState) {
          console.error("Board state not initialized");
          return null;
        }
        var tileType = this.boardState.getTileAt(row, col);
        if (tileType === TileType_1.TileType.None) return null;
        var tilesToRemove = this.findMatchingTiles(row, col, tileType);
        if (0 === tilesToRemove.length) {
          console.log("No matching tiles found");
          return null;
        }
        var newState = this.boardState.clone();
        newState.wasRemove = tilesToRemove;
        for (var _i = 0, tilesToRemove_1 = tilesToRemove; _i < tilesToRemove_1.length; _i++) {
          var tile = tilesToRemove_1[_i];
          newState.setTileAt(tile.row, tile.col, TileType_1.TileType.None);
        }
        this.applyGravity(newState);
        this.fillEmptySpaces(newState);
        this.boardState = newState;
        return newState;
      };
      BoardService.prototype.findMatchingTiles = function(startRow, startCol, tileType) {
        var visited = [];
        for (var i = 0; i < this.boardState.rows; i++) visited[i] = [];
        var result = [];
        this.floodFill(startRow, startCol, tileType, visited, result);
        if (result.length >= 3) return result;
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
    "../Core/TileType": "TileType"
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
        return new Promise(function(resolve) {
          cc.Tween.stopAllByTarget(tile.node);
          cc.tween(tile.node).to(_this.animationDuration, {
            x: targetPos.x,
            y: targetPos.y
          }, {
            easing: "quadIn"
          }).call(resolve).start();
        });
      };
      BoardViewController.prototype.animateTileDisappear = function(tile) {
        var _this = this;
        return new Promise(function(resolve) {
          cc.tween(tile.node).to(_this.disappearDuration, {
            scale: 0,
            opacity: 0
          }).call(function() {
            tile.node.active = false;
            tile.node.scale = 1;
            tile.node.opacity = 255;
            resolve();
          }).start();
        });
      };
      BoardViewController.prototype.animateTileAppear = function(tile) {
        var _this = this;
        return new Promise(function(resolve) {
          cc.Tween.stopAllByTarget(tile.node);
          tile.node.active = true;
          tile.node.scale = 0;
          tile.node.opacity = 0;
          cc.tween(tile.node).to(_this.appearDuration, {
            scale: 1,
            opacity: 255
          }).call(resolve).start();
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
          var animationPromises, row, col, oldType, newType, tile, row, col, tileType, tileData, tile, isNewTile, targetPos;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              animationPromises = [];
              for (row = 0; row < oldState.rows; row++) for (col = 0; col < oldState.cols; col++) {
                oldType = oldState.getTileAt(row, col);
                newType = newState.getTileAt(row, col);
                if (0 !== oldType && 0 === newType && this.tileGrid[row] && this.tileGrid[row][col]) {
                  tile = this.tileGrid[row][col];
                  animationPromises.push(this.animateTileDisappear(tile));
                  this.tileGrid[row][col] = null;
                }
              }
              if (!(animationPromises.length > 0)) return [ 3, 2 ];
              return [ 4, Promise.all(animationPromises) ];

             case 1:
              _a.sent();
              animationPromises.length = 0;
              _a.label = 2;

             case 2:
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
                      tile.node.setPosition(targetPos);
                      animationPromises.push(this.animateTileFall(tile, row, col));
                      this.tileGrid[row][col] = tile;
                      isNewTile && animationPromises.push(this.animateTileAppear(tile));
                    }
                  } else this.tileGrid[row][col] = null;
                }
              }
              if (!(animationPromises.length > 0)) return [ 3, 4 ];
              return [ 4, Promise.all(animationPromises) ];

             case 3:
              _a.sent() && this.delay(50);
              _a.label = 4;

             case 4:
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
        _this.gameSteps = 20;
        _this.boardRows = 8;
        _this.boardCols = 8;
        _this.allowedTiles = [];
        return _this;
      }
      __decorate([ property ], GameConfig.prototype, "scorePerTile", void 0);
      __decorate([ property ], GameConfig.prototype, "targetScore", void 0);
      __decorate([ property ], GameConfig.prototype, "gameSteps", void 0);
      __decorate([ property ], GameConfig.prototype, "boardRows", void 0);
      __decorate([ property ], GameConfig.prototype, "boardCols", void 0);
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
    var ManagerBase_1 = require("./ManagerBase");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var GameManager = function(_super) {
      __extends(GameManager, _super);
      function GameManager() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.boardManager = null;
        _this.scoreManager = null;
        return _this;
      }
      GameManager.prototype.init = function(container) {
        _super.prototype.init.call(this, container);
        this.boardManager = this.container.resolve("BoardManager");
        this.boardManager || console.error("BoardManager is not available in GameManager.init");
        this.scoreManager = this.container.resolve("ScoreManager");
        this.scoreManager || console.error("ScoreManager is not available in GameManager.init");
      };
      GameManager.prototype.startGame = function() {
        this.boardManager.BuildUpBoard();
      };
      GameManager.prototype.endGame = function() {
        this.boardManager.ClearBoard();
      };
      GameManager = __decorate([ ccclass ], GameManager);
      return GameManager;
    }(ManagerBase_1.default);
    exports.GameManager = GameManager;
    exports.default = GameManager;
    cc._RF.pop();
  }, {
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
        this.game.resolve("BoardManager").BuildUpBoard();
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
          this.score ? this.score.setValue(0) : console.error("ScoreManager requires an IntContainer component on the same node.");
        }
      };
      ScoreManager.prototype.init = function(container) {
        _super.prototype.init.call(this, container);
        this.score || (this.score = this.node.getComponent(IntContainer_1.IntContainer));
        if (this.score) {
          this.score.setValue(0);
          this.gameConfig = this.container.resolve("GameConfig");
        } else console.error("ScoreManager requires an IntContainer component on the same node.");
      };
      ScoreManager.prototype.add = function(points) {
        points = this.score.getValue() + points * this.gameConfig.scorePerTile;
        this.score.setValue(points);
        if (this.score.getValue() >= this.gameConfig.targetScore) {
          console.log("Target score reached! You win!");
          this.container.resolve("StateMachine").goWin();
        }
        console.log("Score updated: " + this.score.getValue());
      };
      ScoreManager.prototype.reset = function() {
        this.score.setValue(0);
      };
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
      StateMachine = __decorate([ ccclass("StateMachine") ], StateMachine);
      return StateMachine;
    }(cc.Component);
    exports.StateMachine = StateMachine;
    var StateType;
    (function(StateType) {
      StateType[StateType["Init"] = 0] = "Init";
      StateType[StateType["Playing"] = 1] = "Playing";
      StateType[StateType["Win"] = 2] = "Win";
      StateType[StateType["Menu"] = 3] = "Menu";
    })(StateType = exports.StateType || (exports.StateType = {}));
    cc._RF.pop();
  }, {
    "./InitState": "InitState",
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
        _this.Value = initialValue;
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
      TileType[TileType["Bomb"] = 6] = "Bomb";
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
        this.type = data.type;
        this.node.getComponent(cc.Sprite).spriteFrame = data.sprite;
      };
      TileViewController.prototype.onLoad = function() {
        this.node.on(cc.Node.EventType.MOUSE_DOWN, this.onTileClicked, this);
      };
      TileViewController.prototype.onDestroy = function() {
        this.node.off(cc.Node.EventType.MOUSE_DOWN, this.onTileClicked, this);
      };
      TileViewController.prototype.onTileClicked = function() {
        if (!this.isClickable) return;
        if (this.onClickCallback && this.row >= 0 && this.col >= 0) {
          var result = this.onClickCallback(this.row, this.col, this);
          result instanceof Promise && result.catch(function(err) {
            return console.error("Tile click callback error:", err);
          });
        }
      };
      TileViewController.prototype.getRow = function() {
        return this.row;
      };
      TileViewController.prototype.getCol = function() {
        return this.col;
      };
      __decorate([ property({
        type: TileType_1.TileType
      }) ], TileViewController.prototype, "type", void 0);
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
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var UIManager = function(_super) {
      __extends(UIManager, _super);
      function UIManager() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.winScreen = null;
        return _this;
      }
      UIManager.prototype.init = function(container) {
        var _this = this;
        _super.prototype.init.call(this, container);
        try {
          var scoreManager = this.container.resolve("ScoreManager");
          if (scoreManager && scoreManager.score) {
            scoreManager.score.onValueChanged = function(newScore) {
              _this.updateScore(newScore);
            };
            console.log("UIManager started and subscribed to score changes");
          } else console.warn("ScoreManager or its score property not yet initialized");
        } catch (err) {
          console.warn("Failed to resolve ScoreManager in UIManager.init:", err);
        }
        if (!this.winScreen) {
          console.error("WinScreenController is not assigned in UIManager");
          return;
        }
        this.winScreen.subscribeToRestart(function() {
          _this.container.resolve("StateMachine").goPlaying();
        });
      };
      UIManager.prototype.updateScore = function(score) {
        this.label ? this.label.string = "Score: " + score : console.error("Score label is not assigned in UIManager");
      };
      UIManager.prototype.showWinScreen = function() {
        this.winScreen ? this.winScreen.showWinScreen() : console.error("WinScreenController is not assigned in UIManager");
      };
      UIManager.prototype.hideWinScreen = function() {
        this.winScreen ? this.winScreen.hideWinScreen() : console.error("WinScreenController is not assigned in UIManager");
      };
      __decorate([ property(cc.Label) ], UIManager.prototype, "label", void 0);
      __decorate([ property(WinScreenController_1.default) ], UIManager.prototype, "winScreen", void 0);
      UIManager = __decorate([ ccclass ], UIManager);
      return UIManager;
    }(ManagerBase_1.default);
    exports.default = UIManager;
    cc._RF.pop();
  }, {
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
        return _this;
      }
      WinScreenController.prototype.onLoad = function() {
        this.winScreenNode ? this.winScreenNode.active = false : console.error("WinScreenController requires a reference to the win screen node.");
      };
      WinScreenController.prototype.showWinScreen = function() {
        this.winScreenNode && (this.winScreenNode.active = true);
      };
      WinScreenController.prototype.hideWinScreen = function() {
        this.winScreenNode ? this.winScreenNode.active = false : console.error("WinScreenController requires a reference to the win screen node.");
      };
      WinScreenController.prototype.subscribeToRestart = function(callback) {
        this.restartButton ? this.restartButton.node.on("click", callback) : console.error("WinScreenController requires a reference to the restart button.");
      };
      __decorate([ property(cc.Node) ], WinScreenController.prototype, "winScreenNode", void 0);
      __decorate([ property(cc.Button) ], WinScreenController.prototype, "restartButton", void 0);
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
}, {}, [ "BoolContainer", "ContainerBase", "BoardState", "GameConfig", "TileData", "TileType", "Bootstrapper", "ServiceContainer", "IntContainer", "BoardManager", "GameManager", "ManagerBase", "ScoreManager", "UIManager", "BoardService", "InitState", "PlayingState", "StateBase", "StateMachine", "WinState", "StringContainer", "BoardViewController", "TileViewController", "WinScreenController" ]);