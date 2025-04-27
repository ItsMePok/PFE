var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/@minecraft/math/lib/general/clamp.js
var require_clamp = __commonJS({
  "node_modules/@minecraft/math/lib/general/clamp.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.clampNumber = void 0;
    function clampNumber2(val, min, max) {
      return Math.min(Math.max(val, min), max);
    }
    exports.clampNumber = clampNumber2;
  }
});

// node_modules/@minecraft/math/lib/vector3/coreHelpers.js
var require_coreHelpers = __commonJS({
  "node_modules/@minecraft/math/lib/vector3/coreHelpers.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.VECTOR3_SOUTH = exports.VECTOR3_NORTH = exports.VECTOR3_EAST = exports.VECTOR3_WEST = exports.VECTOR3_ZERO = exports.VECTOR3_ONE = exports.VECTOR3_BACK = exports.VECTOR3_FORWARD = exports.VECTOR3_RIGHT = exports.VECTOR3_LEFT = exports.VECTOR3_DOWN = exports.VECTOR3_UP = exports.Vector2Utils = exports.Vector3Utils = void 0;
    var clamp_1 = require_clamp();
    var Vector3Utils = class _Vector3Utils {
      /**
       * equals
       *
       * Check the equality of two vectors
       */
      static equals(v1, v2) {
        return v1.x === v2.x && v1.y === v2.y && v1.z === v2.z;
      }
      /**
       * add
       *
       * Add two vectors to produce a new vector
       */
      static add(v1, v2) {
        return { x: v1.x + v2.x, y: v1.y + v2.y, z: v1.z + v2.z };
      }
      /**
       * subtract
       *
       * Subtract two vectors to produce a new vector (v1-v2)
       */
      static subtract(v1, v2) {
        return { x: v1.x - v2.x, y: v1.y - v2.y, z: v1.z - v2.z };
      }
      /** scale
       *
       * Multiple all entries in a vector by a single scalar value producing a new vector
       */
      static scale(v1, scale) {
        return { x: v1.x * scale, y: v1.y * scale, z: v1.z * scale };
      }
      /**
       * dot
       *
       * Calculate the dot product of two vectors
       */
      static dot(a, b) {
        return a.x * b.x + a.y * b.y + a.z * b.z;
      }
      /**
       * cross
       *
       * Calculate the cross product of two vectors. Returns a new vector.
       */
      static cross(a, b) {
        return {
          x: a.y * b.z - a.z * b.y,
          y: a.z * b.x - a.x * b.z,
          z: a.x * b.y - a.y * b.x
        };
      }
      /**
       * magnitude
       *
       * The magnitude of a vector
       */
      static magnitude(v) {
        return Math.sqrt(v.x ** 2 + v.y ** 2 + v.z ** 2);
      }
      /**
       * distance
       *
       * Calculate the distance between two vectors
       */
      static distance(a, b) {
        return _Vector3Utils.magnitude(_Vector3Utils.subtract(a, b));
      }
      /**
       * normalize
       *
       * Takes a vector 3 and normalizes it to a unit vector
       */
      static normalize(v) {
        const mag = _Vector3Utils.magnitude(v);
        return { x: v.x / mag, y: v.y / mag, z: v.z / mag };
      }
      /**
       * floor
       *
       * Floor the components of a vector to produce a new vector
       */
      static floor(v) {
        return { x: Math.floor(v.x), y: Math.floor(v.y), z: Math.floor(v.z) };
      }
      /**
       * toString
       *
       * Create a string representation of a vector3
       */
      static toString(v, options) {
        const decimals = options?.decimals ?? 2;
        const str = [v.x.toFixed(decimals), v.y.toFixed(decimals), v.z.toFixed(decimals)];
        return str.join(options?.delimiter ?? ", ");
      }
      /**
       * clamp
       *
       * Clamps the components of a vector to limits to produce a new vector
       */
      static clamp(v, limits) {
        return {
          x: (0, clamp_1.clampNumber)(v.x, limits?.min?.x ?? Number.MIN_SAFE_INTEGER, limits?.max?.x ?? Number.MAX_SAFE_INTEGER),
          y: (0, clamp_1.clampNumber)(v.y, limits?.min?.y ?? Number.MIN_SAFE_INTEGER, limits?.max?.y ?? Number.MAX_SAFE_INTEGER),
          z: (0, clamp_1.clampNumber)(v.z, limits?.min?.z ?? Number.MIN_SAFE_INTEGER, limits?.max?.z ?? Number.MAX_SAFE_INTEGER)
        };
      }
      /**
       * lerp
       *
       * Constructs a new vector using linear interpolation on each component from two vectors.
       */
      static lerp(a, b, t) {
        return {
          x: a.x + (b.x - a.x) * t,
          y: a.y + (b.y - a.y) * t,
          z: a.z + (b.z - a.z) * t
        };
      }
      /**
       * slerp
       *
       * Constructs a new vector using spherical linear interpolation on each component from two vectors.
       */
      static slerp(a, b, t) {
        const theta = Math.acos(_Vector3Utils.dot(a, b));
        const sinTheta = Math.sin(theta);
        const ta = Math.sin((1 - t) * theta) / sinTheta;
        const tb = Math.sin(t * theta) / sinTheta;
        return _Vector3Utils.add(_Vector3Utils.scale(a, ta), _Vector3Utils.scale(b, tb));
      }
      /**
       * multiply
       *
       * Element-wise multiplication of two vectors together.
       * Not to be confused with {@link Vector3Utils.dot} product or {@link Vector3Utils.cross} product
       */
      static multiply(a, b) {
        return {
          x: a.x * b.x,
          y: a.y * b.y,
          z: a.z * b.z
        };
      }
      /**
       * rotateX
       *
       * Rotates the vector around the x axis counterclockwise (left hand rule)
       * @param a - Angle in radians
       */
      static rotateX(v, a) {
        let cos = Math.cos(a);
        let sin = Math.sin(a);
        return {
          x: v.x,
          y: v.y * cos - v.z * sin,
          z: v.z * cos + v.y * sin
        };
      }
      /**
       * rotateY
       *
       * Rotates the vector around the y axis counterclockwise (left hand rule)
       * @param a - Angle in radians
       */
      static rotateY(v, a) {
        let cos = Math.cos(a);
        let sin = Math.sin(a);
        return {
          x: v.x * cos + v.z * sin,
          y: v.y,
          z: v.z * cos - v.x * sin
        };
      }
      /**
       * rotateZ
       *
       * Rotates the vector around the z axis counterclockwise (left hand rule)
       * @param a - Angle in radians
       */
      static rotateZ(v, a) {
        let cos = Math.cos(a);
        let sin = Math.sin(a);
        return {
          x: v.x * cos - v.y * sin,
          y: v.y * cos + v.x * sin,
          z: v.z
        };
      }
    };
    exports.Vector3Utils = Vector3Utils;
    var Vector2Utils = class {
      /**
       * toString
       *
       * Create a string representation of a vector2
       */
      static toString(v, options) {
        const decimals = options?.decimals ?? 2;
        const str = [v.x.toFixed(decimals), v.y.toFixed(decimals)];
        return str.join(options?.delimiter ?? ", ");
      }
    };
    exports.Vector2Utils = Vector2Utils;
    exports.VECTOR3_UP = { x: 0, y: 1, z: 0 };
    exports.VECTOR3_DOWN = { x: 0, y: -1, z: 0 };
    exports.VECTOR3_LEFT = { x: -1, y: 0, z: 0 };
    exports.VECTOR3_RIGHT = { x: 1, y: 0, z: 0 };
    exports.VECTOR3_FORWARD = { x: 0, y: 0, z: 1 };
    exports.VECTOR3_BACK = { x: 0, y: 0, z: -1 };
    exports.VECTOR3_ONE = { x: 1, y: 1, z: 1 };
    exports.VECTOR3_ZERO = { x: 0, y: 0, z: 0 };
    exports.VECTOR3_WEST = { x: -1, y: 0, z: 0 };
    exports.VECTOR3_EAST = { x: 1, y: 0, z: 0 };
    exports.VECTOR3_NORTH = { x: 0, y: 0, z: 1 };
    exports.VECTOR3_SOUTH = { x: 0, y: 0, z: -1 };
  }
});

// node_modules/@minecraft/math/lib/vector3/vectorWrapper.js
var require_vectorWrapper = __commonJS({
  "node_modules/@minecraft/math/lib/vector3/vectorWrapper.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Vector2Builder = exports.Vector3Builder = void 0;
    var coreHelpers_1 = require_coreHelpers();
    var Vector3Builder = class {
      constructor(first, y, z) {
        if (typeof first === "object") {
          this.x = first.x;
          this.y = first.y;
          this.z = first.z;
        } else {
          this.x = first;
          this.y = y ?? 0;
          this.z = z ?? 0;
        }
      }
      /**
       * Assigns the values of the passed in vector to this vector. Returns itself.
       */
      assign(vec) {
        this.x = vec.x;
        this.y = vec.y;
        this.z = vec.z;
        return this;
      }
      /**
       * equals
       *
       * Check the equality of two vectors
       */
      equals(v) {
        return coreHelpers_1.Vector3Utils.equals(this, v);
      }
      /**
       * add
       *
       * Adds the vector v to this, returning itself.
       */
      add(v) {
        return this.assign(coreHelpers_1.Vector3Utils.add(this, v));
      }
      /**
       * subtract
       *
       * Subtracts the vector v from this, returning itself.
       */
      subtract(v) {
        return this.assign(coreHelpers_1.Vector3Utils.subtract(this, v));
      }
      /** scale
       *
       * Scales this by the passed in value, returning itself.
       */
      scale(val) {
        return this.assign(coreHelpers_1.Vector3Utils.scale(this, val));
      }
      /**
       * dot
       *
       * Computes the dot product of this and the passed in vector.
       */
      dot(vec) {
        return coreHelpers_1.Vector3Utils.dot(this, vec);
      }
      /**
       * cross
       *
       * Computes the cross product of this and the passed in vector, returning itself.
       */
      cross(vec) {
        return this.assign(coreHelpers_1.Vector3Utils.cross(this, vec));
      }
      /**
       * magnitude
       *
       * The magnitude of the vector
       */
      magnitude() {
        return coreHelpers_1.Vector3Utils.magnitude(this);
      }
      /**
       * distance
       *
       * Calculate the distance between two vectors
       */
      distance(vec) {
        return coreHelpers_1.Vector3Utils.distance(this, vec);
      }
      /**
       * normalize
       *
       * Normalizes this vector, returning itself.
       */
      normalize() {
        return this.assign(coreHelpers_1.Vector3Utils.normalize(this));
      }
      /**
       * floor
       *
       * Floor the components of a vector to produce a new vector
       */
      floor() {
        return this.assign(coreHelpers_1.Vector3Utils.floor(this));
      }
      /**
       * toString
       *
       * Create a string representation of a vector
       */
      toString(options) {
        return coreHelpers_1.Vector3Utils.toString(this, options);
      }
      /**
       * clamp
       *
       * Clamps the components of a vector to limits to produce a new vector
       */
      clamp(limits) {
        return this.assign(coreHelpers_1.Vector3Utils.clamp(this, limits));
      }
      /**
       * lerp
       *
       * Constructs a new vector using linear interpolation on each component from two vectors.
       */
      lerp(vec, t) {
        return this.assign(coreHelpers_1.Vector3Utils.lerp(this, vec, t));
      }
      /**
       * slerp
       *
       * Constructs a new vector using spherical linear interpolation on each component from two vectors.
       */
      slerp(vec, t) {
        return this.assign(coreHelpers_1.Vector3Utils.slerp(this, vec, t));
      }
      /**
       * multiply
       *
       * Element-wise multiplication of two vectors together.
       * Not to be confused with {@link Vector3Builder.dot} product or {@link Vector3Builder.cross} product
       */
      multiply(vec) {
        return this.assign(coreHelpers_1.Vector3Utils.multiply(this, vec));
      }
      /**
       * rotateX
       *
       * Rotates the vector around the x axis counterclockwise (left hand rule)
       * @param a - Angle in radians
       */
      rotateX(a) {
        return this.assign(coreHelpers_1.Vector3Utils.rotateX(this, a));
      }
      /**
       * rotateY
       *
       * Rotates the vector around the y axis counterclockwise (left hand rule)
       * @param a - Angle in radians
       */
      rotateY(a) {
        return this.assign(coreHelpers_1.Vector3Utils.rotateY(this, a));
      }
      /**
       * rotateZ
       *
       * Rotates the vector around the z axis counterclockwise (left hand rule)
       * @param a - Angle in radians
       */
      rotateZ(a) {
        return this.assign(coreHelpers_1.Vector3Utils.rotateZ(this, a));
      }
    };
    exports.Vector3Builder = Vector3Builder;
    var Vector2Builder = class {
      constructor(first, y) {
        if (typeof first === "object") {
          this.x = first.x;
          this.y = first.y;
        } else {
          this.x = first;
          this.y = y ?? 0;
        }
      }
      toString(options) {
        return coreHelpers_1.Vector2Utils.toString(this, options);
      }
    };
    exports.Vector2Builder = Vector2Builder;
  }
});

// node_modules/@minecraft/math/lib/vector3/index.js
var require_vector3 = __commonJS({
  "node_modules/@minecraft/math/lib/vector3/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_coreHelpers(), exports);
    __exportStar(require_vectorWrapper(), exports);
  }
});

// node_modules/@minecraft/math/lib/general/index.js
var require_general = __commonJS({
  "node_modules/@minecraft/math/lib/general/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_clamp(), exports);
  }
});

// node_modules/@minecraft/math/lib/index.js
var require_lib = __commonJS({
  "node_modules/@minecraft/math/lib/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_vector3(), exports);
    __exportStar(require_general(), exports);
  }
});

// scripts/main.ts
import { system as system4, world as world6, EquipmentSlot as EquipmentSlot5, GameMode as GameMode4, EntityComponentTypes as EntityComponentTypes5, ItemComponentTypes as ItemComponentTypes4, ItemStack as ItemStack6, Direction as Direction2 } from "@minecraft/server";

// node_modules/@minecraft/vanilla-data/lib/index.js
var MinecraftBiomeTypes = ((MinecraftBiomeTypes2) => {
  MinecraftBiomeTypes2["BambooJungle"] = "minecraft:bamboo_jungle";
  MinecraftBiomeTypes2["BambooJungleHills"] = "minecraft:bamboo_jungle_hills";
  MinecraftBiomeTypes2["BasaltDeltas"] = "minecraft:basalt_deltas";
  MinecraftBiomeTypes2["Beach"] = "minecraft:beach";
  MinecraftBiomeTypes2["BirchForest"] = "minecraft:birch_forest";
  MinecraftBiomeTypes2["BirchForestHills"] = "minecraft:birch_forest_hills";
  MinecraftBiomeTypes2["BirchForestHillsMutated"] = "minecraft:birch_forest_hills_mutated";
  MinecraftBiomeTypes2["BirchForestMutated"] = "minecraft:birch_forest_mutated";
  MinecraftBiomeTypes2["CherryGrove"] = "minecraft:cherry_grove";
  MinecraftBiomeTypes2["ColdBeach"] = "minecraft:cold_beach";
  MinecraftBiomeTypes2["ColdOcean"] = "minecraft:cold_ocean";
  MinecraftBiomeTypes2["ColdTaiga"] = "minecraft:cold_taiga";
  MinecraftBiomeTypes2["ColdTaigaHills"] = "minecraft:cold_taiga_hills";
  MinecraftBiomeTypes2["ColdTaigaMutated"] = "minecraft:cold_taiga_mutated";
  MinecraftBiomeTypes2["CrimsonForest"] = "minecraft:crimson_forest";
  MinecraftBiomeTypes2["DeepColdOcean"] = "minecraft:deep_cold_ocean";
  MinecraftBiomeTypes2["DeepDark"] = "minecraft:deep_dark";
  MinecraftBiomeTypes2["DeepFrozenOcean"] = "minecraft:deep_frozen_ocean";
  MinecraftBiomeTypes2["DeepLukewarmOcean"] = "minecraft:deep_lukewarm_ocean";
  MinecraftBiomeTypes2["DeepOcean"] = "minecraft:deep_ocean";
  MinecraftBiomeTypes2["DeepWarmOcean"] = "minecraft:deep_warm_ocean";
  MinecraftBiomeTypes2["Desert"] = "minecraft:desert";
  MinecraftBiomeTypes2["DesertHills"] = "minecraft:desert_hills";
  MinecraftBiomeTypes2["DesertMutated"] = "minecraft:desert_mutated";
  MinecraftBiomeTypes2["DripstoneCaves"] = "minecraft:dripstone_caves";
  MinecraftBiomeTypes2["ExtremeHills"] = "minecraft:extreme_hills";
  MinecraftBiomeTypes2["ExtremeHillsEdge"] = "minecraft:extreme_hills_edge";
  MinecraftBiomeTypes2["ExtremeHillsMutated"] = "minecraft:extreme_hills_mutated";
  MinecraftBiomeTypes2["ExtremeHillsPlusTrees"] = "minecraft:extreme_hills_plus_trees";
  MinecraftBiomeTypes2["ExtremeHillsPlusTreesMutated"] = "minecraft:extreme_hills_plus_trees_mutated";
  MinecraftBiomeTypes2["FlowerForest"] = "minecraft:flower_forest";
  MinecraftBiomeTypes2["Forest"] = "minecraft:forest";
  MinecraftBiomeTypes2["ForestHills"] = "minecraft:forest_hills";
  MinecraftBiomeTypes2["FrozenOcean"] = "minecraft:frozen_ocean";
  MinecraftBiomeTypes2["FrozenPeaks"] = "minecraft:frozen_peaks";
  MinecraftBiomeTypes2["FrozenRiver"] = "minecraft:frozen_river";
  MinecraftBiomeTypes2["Grove"] = "minecraft:grove";
  MinecraftBiomeTypes2["Hell"] = "minecraft:hell";
  MinecraftBiomeTypes2["IceMountains"] = "minecraft:ice_mountains";
  MinecraftBiomeTypes2["IcePlains"] = "minecraft:ice_plains";
  MinecraftBiomeTypes2["IcePlainsSpikes"] = "minecraft:ice_plains_spikes";
  MinecraftBiomeTypes2["JaggedPeaks"] = "minecraft:jagged_peaks";
  MinecraftBiomeTypes2["Jungle"] = "minecraft:jungle";
  MinecraftBiomeTypes2["JungleEdge"] = "minecraft:jungle_edge";
  MinecraftBiomeTypes2["JungleEdgeMutated"] = "minecraft:jungle_edge_mutated";
  MinecraftBiomeTypes2["JungleHills"] = "minecraft:jungle_hills";
  MinecraftBiomeTypes2["JungleMutated"] = "minecraft:jungle_mutated";
  MinecraftBiomeTypes2["LegacyFrozenOcean"] = "minecraft:legacy_frozen_ocean";
  MinecraftBiomeTypes2["LukewarmOcean"] = "minecraft:lukewarm_ocean";
  MinecraftBiomeTypes2["LushCaves"] = "minecraft:lush_caves";
  MinecraftBiomeTypes2["MangroveSwamp"] = "minecraft:mangrove_swamp";
  MinecraftBiomeTypes2["Meadow"] = "minecraft:meadow";
  MinecraftBiomeTypes2["MegaTaiga"] = "minecraft:mega_taiga";
  MinecraftBiomeTypes2["MegaTaigaHills"] = "minecraft:mega_taiga_hills";
  MinecraftBiomeTypes2["Mesa"] = "minecraft:mesa";
  MinecraftBiomeTypes2["MesaBryce"] = "minecraft:mesa_bryce";
  MinecraftBiomeTypes2["MesaPlateau"] = "minecraft:mesa_plateau";
  MinecraftBiomeTypes2["MesaPlateauMutated"] = "minecraft:mesa_plateau_mutated";
  MinecraftBiomeTypes2["MesaPlateauStone"] = "minecraft:mesa_plateau_stone";
  MinecraftBiomeTypes2["MesaPlateauStoneMutated"] = "minecraft:mesa_plateau_stone_mutated";
  MinecraftBiomeTypes2["MushroomIsland"] = "minecraft:mushroom_island";
  MinecraftBiomeTypes2["MushroomIslandShore"] = "minecraft:mushroom_island_shore";
  MinecraftBiomeTypes2["Ocean"] = "minecraft:ocean";
  MinecraftBiomeTypes2["PaleGarden"] = "minecraft:pale_garden";
  MinecraftBiomeTypes2["Plains"] = "minecraft:plains";
  MinecraftBiomeTypes2["RedwoodTaigaHillsMutated"] = "minecraft:redwood_taiga_hills_mutated";
  MinecraftBiomeTypes2["RedwoodTaigaMutated"] = "minecraft:redwood_taiga_mutated";
  MinecraftBiomeTypes2["River"] = "minecraft:river";
  MinecraftBiomeTypes2["RoofedForest"] = "minecraft:roofed_forest";
  MinecraftBiomeTypes2["RoofedForestMutated"] = "minecraft:roofed_forest_mutated";
  MinecraftBiomeTypes2["Savanna"] = "minecraft:savanna";
  MinecraftBiomeTypes2["SavannaMutated"] = "minecraft:savanna_mutated";
  MinecraftBiomeTypes2["SavannaPlateau"] = "minecraft:savanna_plateau";
  MinecraftBiomeTypes2["SavannaPlateauMutated"] = "minecraft:savanna_plateau_mutated";
  MinecraftBiomeTypes2["SnowySlopes"] = "minecraft:snowy_slopes";
  MinecraftBiomeTypes2["SoulsandValley"] = "minecraft:soulsand_valley";
  MinecraftBiomeTypes2["StoneBeach"] = "minecraft:stone_beach";
  MinecraftBiomeTypes2["StonyPeaks"] = "minecraft:stony_peaks";
  MinecraftBiomeTypes2["SunflowerPlains"] = "minecraft:sunflower_plains";
  MinecraftBiomeTypes2["Swampland"] = "minecraft:swampland";
  MinecraftBiomeTypes2["SwamplandMutated"] = "minecraft:swampland_mutated";
  MinecraftBiomeTypes2["Taiga"] = "minecraft:taiga";
  MinecraftBiomeTypes2["TaigaHills"] = "minecraft:taiga_hills";
  MinecraftBiomeTypes2["TaigaMutated"] = "minecraft:taiga_mutated";
  MinecraftBiomeTypes2["TheEnd"] = "minecraft:the_end";
  MinecraftBiomeTypes2["WarmOcean"] = "minecraft:warm_ocean";
  MinecraftBiomeTypes2["WarpedForest"] = "minecraft:warped_forest";
  return MinecraftBiomeTypes2;
})(MinecraftBiomeTypes || {});
var MinecraftBlockTypes = ((MinecraftBlockTypes22) => {
  MinecraftBlockTypes22["AcaciaButton"] = "minecraft:acacia_button";
  MinecraftBlockTypes22["AcaciaDoor"] = "minecraft:acacia_door";
  MinecraftBlockTypes22["AcaciaDoubleSlab"] = "minecraft:acacia_double_slab";
  MinecraftBlockTypes22["AcaciaFence"] = "minecraft:acacia_fence";
  MinecraftBlockTypes22["AcaciaFenceGate"] = "minecraft:acacia_fence_gate";
  MinecraftBlockTypes22["AcaciaHangingSign"] = "minecraft:acacia_hanging_sign";
  MinecraftBlockTypes22["AcaciaLeaves"] = "minecraft:acacia_leaves";
  MinecraftBlockTypes22["AcaciaLog"] = "minecraft:acacia_log";
  MinecraftBlockTypes22["AcaciaPlanks"] = "minecraft:acacia_planks";
  MinecraftBlockTypes22["AcaciaPressurePlate"] = "minecraft:acacia_pressure_plate";
  MinecraftBlockTypes22["AcaciaSapling"] = "minecraft:acacia_sapling";
  MinecraftBlockTypes22["AcaciaSlab"] = "minecraft:acacia_slab";
  MinecraftBlockTypes22["AcaciaStairs"] = "minecraft:acacia_stairs";
  MinecraftBlockTypes22["AcaciaStandingSign"] = "minecraft:acacia_standing_sign";
  MinecraftBlockTypes22["AcaciaTrapdoor"] = "minecraft:acacia_trapdoor";
  MinecraftBlockTypes22["AcaciaWallSign"] = "minecraft:acacia_wall_sign";
  MinecraftBlockTypes22["AcaciaWood"] = "minecraft:acacia_wood";
  MinecraftBlockTypes22["ActivatorRail"] = "minecraft:activator_rail";
  MinecraftBlockTypes22["Air"] = "minecraft:air";
  MinecraftBlockTypes22["Allium"] = "minecraft:allium";
  MinecraftBlockTypes22["Allow"] = "minecraft:allow";
  MinecraftBlockTypes22["AmethystBlock"] = "minecraft:amethyst_block";
  MinecraftBlockTypes22["AmethystCluster"] = "minecraft:amethyst_cluster";
  MinecraftBlockTypes22["AncientDebris"] = "minecraft:ancient_debris";
  MinecraftBlockTypes22["Andesite"] = "minecraft:andesite";
  MinecraftBlockTypes22["AndesiteDoubleSlab"] = "minecraft:andesite_double_slab";
  MinecraftBlockTypes22["AndesiteSlab"] = "minecraft:andesite_slab";
  MinecraftBlockTypes22["AndesiteStairs"] = "minecraft:andesite_stairs";
  MinecraftBlockTypes22["AndesiteWall"] = "minecraft:andesite_wall";
  MinecraftBlockTypes22["Anvil"] = "minecraft:anvil";
  MinecraftBlockTypes22["Azalea"] = "minecraft:azalea";
  MinecraftBlockTypes22["AzaleaLeaves"] = "minecraft:azalea_leaves";
  MinecraftBlockTypes22["AzaleaLeavesFlowered"] = "minecraft:azalea_leaves_flowered";
  MinecraftBlockTypes22["AzureBluet"] = "minecraft:azure_bluet";
  MinecraftBlockTypes22["Bamboo"] = "minecraft:bamboo";
  MinecraftBlockTypes22["BambooBlock"] = "minecraft:bamboo_block";
  MinecraftBlockTypes22["BambooButton"] = "minecraft:bamboo_button";
  MinecraftBlockTypes22["BambooDoor"] = "minecraft:bamboo_door";
  MinecraftBlockTypes22["BambooDoubleSlab"] = "minecraft:bamboo_double_slab";
  MinecraftBlockTypes22["BambooFence"] = "minecraft:bamboo_fence";
  MinecraftBlockTypes22["BambooFenceGate"] = "minecraft:bamboo_fence_gate";
  MinecraftBlockTypes22["BambooHangingSign"] = "minecraft:bamboo_hanging_sign";
  MinecraftBlockTypes22["BambooMosaic"] = "minecraft:bamboo_mosaic";
  MinecraftBlockTypes22["BambooMosaicDoubleSlab"] = "minecraft:bamboo_mosaic_double_slab";
  MinecraftBlockTypes22["BambooMosaicSlab"] = "minecraft:bamboo_mosaic_slab";
  MinecraftBlockTypes22["BambooMosaicStairs"] = "minecraft:bamboo_mosaic_stairs";
  MinecraftBlockTypes22["BambooPlanks"] = "minecraft:bamboo_planks";
  MinecraftBlockTypes22["BambooPressurePlate"] = "minecraft:bamboo_pressure_plate";
  MinecraftBlockTypes22["BambooSapling"] = "minecraft:bamboo_sapling";
  MinecraftBlockTypes22["BambooSlab"] = "minecraft:bamboo_slab";
  MinecraftBlockTypes22["BambooStairs"] = "minecraft:bamboo_stairs";
  MinecraftBlockTypes22["BambooStandingSign"] = "minecraft:bamboo_standing_sign";
  MinecraftBlockTypes22["BambooTrapdoor"] = "minecraft:bamboo_trapdoor";
  MinecraftBlockTypes22["BambooWallSign"] = "minecraft:bamboo_wall_sign";
  MinecraftBlockTypes22["Barrel"] = "minecraft:barrel";
  MinecraftBlockTypes22["Barrier"] = "minecraft:barrier";
  MinecraftBlockTypes22["Basalt"] = "minecraft:basalt";
  MinecraftBlockTypes22["Beacon"] = "minecraft:beacon";
  MinecraftBlockTypes22["Bed"] = "minecraft:bed";
  MinecraftBlockTypes22["Bedrock"] = "minecraft:bedrock";
  MinecraftBlockTypes22["BeeNest"] = "minecraft:bee_nest";
  MinecraftBlockTypes22["Beehive"] = "minecraft:beehive";
  MinecraftBlockTypes22["Beetroot"] = "minecraft:beetroot";
  MinecraftBlockTypes22["Bell"] = "minecraft:bell";
  MinecraftBlockTypes22["BigDripleaf"] = "minecraft:big_dripleaf";
  MinecraftBlockTypes22["BirchButton"] = "minecraft:birch_button";
  MinecraftBlockTypes22["BirchDoor"] = "minecraft:birch_door";
  MinecraftBlockTypes22["BirchDoubleSlab"] = "minecraft:birch_double_slab";
  MinecraftBlockTypes22["BirchFence"] = "minecraft:birch_fence";
  MinecraftBlockTypes22["BirchFenceGate"] = "minecraft:birch_fence_gate";
  MinecraftBlockTypes22["BirchHangingSign"] = "minecraft:birch_hanging_sign";
  MinecraftBlockTypes22["BirchLeaves"] = "minecraft:birch_leaves";
  MinecraftBlockTypes22["BirchLog"] = "minecraft:birch_log";
  MinecraftBlockTypes22["BirchPlanks"] = "minecraft:birch_planks";
  MinecraftBlockTypes22["BirchPressurePlate"] = "minecraft:birch_pressure_plate";
  MinecraftBlockTypes22["BirchSapling"] = "minecraft:birch_sapling";
  MinecraftBlockTypes22["BirchSlab"] = "minecraft:birch_slab";
  MinecraftBlockTypes22["BirchStairs"] = "minecraft:birch_stairs";
  MinecraftBlockTypes22["BirchStandingSign"] = "minecraft:birch_standing_sign";
  MinecraftBlockTypes22["BirchTrapdoor"] = "minecraft:birch_trapdoor";
  MinecraftBlockTypes22["BirchWallSign"] = "minecraft:birch_wall_sign";
  MinecraftBlockTypes22["BirchWood"] = "minecraft:birch_wood";
  MinecraftBlockTypes22["BlackCandle"] = "minecraft:black_candle";
  MinecraftBlockTypes22["BlackCandleCake"] = "minecraft:black_candle_cake";
  MinecraftBlockTypes22["BlackCarpet"] = "minecraft:black_carpet";
  MinecraftBlockTypes22["BlackConcrete"] = "minecraft:black_concrete";
  MinecraftBlockTypes22["BlackConcretePowder"] = "minecraft:black_concrete_powder";
  MinecraftBlockTypes22["BlackGlazedTerracotta"] = "minecraft:black_glazed_terracotta";
  MinecraftBlockTypes22["BlackShulkerBox"] = "minecraft:black_shulker_box";
  MinecraftBlockTypes22["BlackStainedGlass"] = "minecraft:black_stained_glass";
  MinecraftBlockTypes22["BlackStainedGlassPane"] = "minecraft:black_stained_glass_pane";
  MinecraftBlockTypes22["BlackTerracotta"] = "minecraft:black_terracotta";
  MinecraftBlockTypes22["BlackWool"] = "minecraft:black_wool";
  MinecraftBlockTypes22["Blackstone"] = "minecraft:blackstone";
  MinecraftBlockTypes22["BlackstoneDoubleSlab"] = "minecraft:blackstone_double_slab";
  MinecraftBlockTypes22["BlackstoneSlab"] = "minecraft:blackstone_slab";
  MinecraftBlockTypes22["BlackstoneStairs"] = "minecraft:blackstone_stairs";
  MinecraftBlockTypes22["BlackstoneWall"] = "minecraft:blackstone_wall";
  MinecraftBlockTypes22["BlastFurnace"] = "minecraft:blast_furnace";
  MinecraftBlockTypes22["BlueCandle"] = "minecraft:blue_candle";
  MinecraftBlockTypes22["BlueCandleCake"] = "minecraft:blue_candle_cake";
  MinecraftBlockTypes22["BlueCarpet"] = "minecraft:blue_carpet";
  MinecraftBlockTypes22["BlueConcrete"] = "minecraft:blue_concrete";
  MinecraftBlockTypes22["BlueConcretePowder"] = "minecraft:blue_concrete_powder";
  MinecraftBlockTypes22["BlueGlazedTerracotta"] = "minecraft:blue_glazed_terracotta";
  MinecraftBlockTypes22["BlueIce"] = "minecraft:blue_ice";
  MinecraftBlockTypes22["BlueOrchid"] = "minecraft:blue_orchid";
  MinecraftBlockTypes22["BlueShulkerBox"] = "minecraft:blue_shulker_box";
  MinecraftBlockTypes22["BlueStainedGlass"] = "minecraft:blue_stained_glass";
  MinecraftBlockTypes22["BlueStainedGlassPane"] = "minecraft:blue_stained_glass_pane";
  MinecraftBlockTypes22["BlueTerracotta"] = "minecraft:blue_terracotta";
  MinecraftBlockTypes22["BlueWool"] = "minecraft:blue_wool";
  MinecraftBlockTypes22["BoneBlock"] = "minecraft:bone_block";
  MinecraftBlockTypes22["Bookshelf"] = "minecraft:bookshelf";
  MinecraftBlockTypes22["BorderBlock"] = "minecraft:border_block";
  MinecraftBlockTypes22["BrainCoral"] = "minecraft:brain_coral";
  MinecraftBlockTypes22["BrainCoralBlock"] = "minecraft:brain_coral_block";
  MinecraftBlockTypes22["BrainCoralFan"] = "minecraft:brain_coral_fan";
  MinecraftBlockTypes22["BrainCoralWallFan"] = "minecraft:brain_coral_wall_fan";
  MinecraftBlockTypes22["BrewingStand"] = "minecraft:brewing_stand";
  MinecraftBlockTypes22["BrickBlock"] = "minecraft:brick_block";
  MinecraftBlockTypes22["BrickDoubleSlab"] = "minecraft:brick_double_slab";
  MinecraftBlockTypes22["BrickSlab"] = "minecraft:brick_slab";
  MinecraftBlockTypes22["BrickStairs"] = "minecraft:brick_stairs";
  MinecraftBlockTypes22["BrickWall"] = "minecraft:brick_wall";
  MinecraftBlockTypes22["BrownCandle"] = "minecraft:brown_candle";
  MinecraftBlockTypes22["BrownCandleCake"] = "minecraft:brown_candle_cake";
  MinecraftBlockTypes22["BrownCarpet"] = "minecraft:brown_carpet";
  MinecraftBlockTypes22["BrownConcrete"] = "minecraft:brown_concrete";
  MinecraftBlockTypes22["BrownConcretePowder"] = "minecraft:brown_concrete_powder";
  MinecraftBlockTypes22["BrownGlazedTerracotta"] = "minecraft:brown_glazed_terracotta";
  MinecraftBlockTypes22["BrownMushroom"] = "minecraft:brown_mushroom";
  MinecraftBlockTypes22["BrownMushroomBlock"] = "minecraft:brown_mushroom_block";
  MinecraftBlockTypes22["BrownShulkerBox"] = "minecraft:brown_shulker_box";
  MinecraftBlockTypes22["BrownStainedGlass"] = "minecraft:brown_stained_glass";
  MinecraftBlockTypes22["BrownStainedGlassPane"] = "minecraft:brown_stained_glass_pane";
  MinecraftBlockTypes22["BrownTerracotta"] = "minecraft:brown_terracotta";
  MinecraftBlockTypes22["BrownWool"] = "minecraft:brown_wool";
  MinecraftBlockTypes22["BubbleColumn"] = "minecraft:bubble_column";
  MinecraftBlockTypes22["BubbleCoral"] = "minecraft:bubble_coral";
  MinecraftBlockTypes22["BubbleCoralBlock"] = "minecraft:bubble_coral_block";
  MinecraftBlockTypes22["BubbleCoralFan"] = "minecraft:bubble_coral_fan";
  MinecraftBlockTypes22["BubbleCoralWallFan"] = "minecraft:bubble_coral_wall_fan";
  MinecraftBlockTypes22["BuddingAmethyst"] = "minecraft:budding_amethyst";
  MinecraftBlockTypes22["Bush"] = "minecraft:bush";
  MinecraftBlockTypes22["Cactus"] = "minecraft:cactus";
  MinecraftBlockTypes22["CactusFlower"] = "minecraft:cactus_flower";
  MinecraftBlockTypes22["Cake"] = "minecraft:cake";
  MinecraftBlockTypes22["Calcite"] = "minecraft:calcite";
  MinecraftBlockTypes22["CalibratedSculkSensor"] = "minecraft:calibrated_sculk_sensor";
  MinecraftBlockTypes22["Camera"] = "minecraft:camera";
  MinecraftBlockTypes22["Campfire"] = "minecraft:campfire";
  MinecraftBlockTypes22["Candle"] = "minecraft:candle";
  MinecraftBlockTypes22["CandleCake"] = "minecraft:candle_cake";
  MinecraftBlockTypes22["Carrots"] = "minecraft:carrots";
  MinecraftBlockTypes22["CartographyTable"] = "minecraft:cartography_table";
  MinecraftBlockTypes22["CarvedPumpkin"] = "minecraft:carved_pumpkin";
  MinecraftBlockTypes22["Cauldron"] = "minecraft:cauldron";
  MinecraftBlockTypes22["CaveVines"] = "minecraft:cave_vines";
  MinecraftBlockTypes22["CaveVinesBodyWithBerries"] = "minecraft:cave_vines_body_with_berries";
  MinecraftBlockTypes22["CaveVinesHeadWithBerries"] = "minecraft:cave_vines_head_with_berries";
  MinecraftBlockTypes22["Chain"] = "minecraft:chain";
  MinecraftBlockTypes22["ChainCommandBlock"] = "minecraft:chain_command_block";
  MinecraftBlockTypes22["ChemicalHeat"] = "minecraft:chemical_heat";
  MinecraftBlockTypes22["CherryButton"] = "minecraft:cherry_button";
  MinecraftBlockTypes22["CherryDoor"] = "minecraft:cherry_door";
  MinecraftBlockTypes22["CherryDoubleSlab"] = "minecraft:cherry_double_slab";
  MinecraftBlockTypes22["CherryFence"] = "minecraft:cherry_fence";
  MinecraftBlockTypes22["CherryFenceGate"] = "minecraft:cherry_fence_gate";
  MinecraftBlockTypes22["CherryHangingSign"] = "minecraft:cherry_hanging_sign";
  MinecraftBlockTypes22["CherryLeaves"] = "minecraft:cherry_leaves";
  MinecraftBlockTypes22["CherryLog"] = "minecraft:cherry_log";
  MinecraftBlockTypes22["CherryPlanks"] = "minecraft:cherry_planks";
  MinecraftBlockTypes22["CherryPressurePlate"] = "minecraft:cherry_pressure_plate";
  MinecraftBlockTypes22["CherrySapling"] = "minecraft:cherry_sapling";
  MinecraftBlockTypes22["CherrySlab"] = "minecraft:cherry_slab";
  MinecraftBlockTypes22["CherryStairs"] = "minecraft:cherry_stairs";
  MinecraftBlockTypes22["CherryStandingSign"] = "minecraft:cherry_standing_sign";
  MinecraftBlockTypes22["CherryTrapdoor"] = "minecraft:cherry_trapdoor";
  MinecraftBlockTypes22["CherryWallSign"] = "minecraft:cherry_wall_sign";
  MinecraftBlockTypes22["CherryWood"] = "minecraft:cherry_wood";
  MinecraftBlockTypes22["Chest"] = "minecraft:chest";
  MinecraftBlockTypes22["ChippedAnvil"] = "minecraft:chipped_anvil";
  MinecraftBlockTypes22["ChiseledBookshelf"] = "minecraft:chiseled_bookshelf";
  MinecraftBlockTypes22["ChiseledCopper"] = "minecraft:chiseled_copper";
  MinecraftBlockTypes22["ChiseledDeepslate"] = "minecraft:chiseled_deepslate";
  MinecraftBlockTypes22["ChiseledNetherBricks"] = "minecraft:chiseled_nether_bricks";
  MinecraftBlockTypes22["ChiseledPolishedBlackstone"] = "minecraft:chiseled_polished_blackstone";
  MinecraftBlockTypes22["ChiseledQuartzBlock"] = "minecraft:chiseled_quartz_block";
  MinecraftBlockTypes22["ChiseledRedSandstone"] = "minecraft:chiseled_red_sandstone";
  MinecraftBlockTypes22["ChiseledResinBricks"] = "minecraft:chiseled_resin_bricks";
  MinecraftBlockTypes22["ChiseledSandstone"] = "minecraft:chiseled_sandstone";
  MinecraftBlockTypes22["ChiseledStoneBricks"] = "minecraft:chiseled_stone_bricks";
  MinecraftBlockTypes22["ChiseledTuff"] = "minecraft:chiseled_tuff";
  MinecraftBlockTypes22["ChiseledTuffBricks"] = "minecraft:chiseled_tuff_bricks";
  MinecraftBlockTypes22["ChorusFlower"] = "minecraft:chorus_flower";
  MinecraftBlockTypes22["ChorusPlant"] = "minecraft:chorus_plant";
  MinecraftBlockTypes22["Clay"] = "minecraft:clay";
  MinecraftBlockTypes22["ClosedEyeblossom"] = "minecraft:closed_eyeblossom";
  MinecraftBlockTypes22["CoalBlock"] = "minecraft:coal_block";
  MinecraftBlockTypes22["CoalOre"] = "minecraft:coal_ore";
  MinecraftBlockTypes22["CoarseDirt"] = "minecraft:coarse_dirt";
  MinecraftBlockTypes22["CobbledDeepslate"] = "minecraft:cobbled_deepslate";
  MinecraftBlockTypes22["CobbledDeepslateDoubleSlab"] = "minecraft:cobbled_deepslate_double_slab";
  MinecraftBlockTypes22["CobbledDeepslateSlab"] = "minecraft:cobbled_deepslate_slab";
  MinecraftBlockTypes22["CobbledDeepslateStairs"] = "minecraft:cobbled_deepslate_stairs";
  MinecraftBlockTypes22["CobbledDeepslateWall"] = "minecraft:cobbled_deepslate_wall";
  MinecraftBlockTypes22["Cobblestone"] = "minecraft:cobblestone";
  MinecraftBlockTypes22["CobblestoneDoubleSlab"] = "minecraft:cobblestone_double_slab";
  MinecraftBlockTypes22["CobblestoneSlab"] = "minecraft:cobblestone_slab";
  MinecraftBlockTypes22["CobblestoneWall"] = "minecraft:cobblestone_wall";
  MinecraftBlockTypes22["Cocoa"] = "minecraft:cocoa";
  MinecraftBlockTypes22["ColoredTorchBlue"] = "minecraft:colored_torch_blue";
  MinecraftBlockTypes22["ColoredTorchGreen"] = "minecraft:colored_torch_green";
  MinecraftBlockTypes22["ColoredTorchPurple"] = "minecraft:colored_torch_purple";
  MinecraftBlockTypes22["ColoredTorchRed"] = "minecraft:colored_torch_red";
  MinecraftBlockTypes22["CommandBlock"] = "minecraft:command_block";
  MinecraftBlockTypes22["Composter"] = "minecraft:composter";
  MinecraftBlockTypes22["CompoundCreator"] = "minecraft:compound_creator";
  MinecraftBlockTypes22["Conduit"] = "minecraft:conduit";
  MinecraftBlockTypes22["CopperBlock"] = "minecraft:copper_block";
  MinecraftBlockTypes22["CopperBulb"] = "minecraft:copper_bulb";
  MinecraftBlockTypes22["CopperDoor"] = "minecraft:copper_door";
  MinecraftBlockTypes22["CopperGrate"] = "minecraft:copper_grate";
  MinecraftBlockTypes22["CopperOre"] = "minecraft:copper_ore";
  MinecraftBlockTypes22["CopperTrapdoor"] = "minecraft:copper_trapdoor";
  MinecraftBlockTypes22["Cornflower"] = "minecraft:cornflower";
  MinecraftBlockTypes22["CrackedDeepslateBricks"] = "minecraft:cracked_deepslate_bricks";
  MinecraftBlockTypes22["CrackedDeepslateTiles"] = "minecraft:cracked_deepslate_tiles";
  MinecraftBlockTypes22["CrackedNetherBricks"] = "minecraft:cracked_nether_bricks";
  MinecraftBlockTypes22["CrackedPolishedBlackstoneBricks"] = "minecraft:cracked_polished_blackstone_bricks";
  MinecraftBlockTypes22["CrackedStoneBricks"] = "minecraft:cracked_stone_bricks";
  MinecraftBlockTypes22["Crafter"] = "minecraft:crafter";
  MinecraftBlockTypes22["CraftingTable"] = "minecraft:crafting_table";
  MinecraftBlockTypes22["CreakingHeart"] = "minecraft:creaking_heart";
  MinecraftBlockTypes22["CreeperHead"] = "minecraft:creeper_head";
  MinecraftBlockTypes22["CrimsonButton"] = "minecraft:crimson_button";
  MinecraftBlockTypes22["CrimsonDoor"] = "minecraft:crimson_door";
  MinecraftBlockTypes22["CrimsonDoubleSlab"] = "minecraft:crimson_double_slab";
  MinecraftBlockTypes22["CrimsonFence"] = "minecraft:crimson_fence";
  MinecraftBlockTypes22["CrimsonFenceGate"] = "minecraft:crimson_fence_gate";
  MinecraftBlockTypes22["CrimsonFungus"] = "minecraft:crimson_fungus";
  MinecraftBlockTypes22["CrimsonHangingSign"] = "minecraft:crimson_hanging_sign";
  MinecraftBlockTypes22["CrimsonHyphae"] = "minecraft:crimson_hyphae";
  MinecraftBlockTypes22["CrimsonNylium"] = "minecraft:crimson_nylium";
  MinecraftBlockTypes22["CrimsonPlanks"] = "minecraft:crimson_planks";
  MinecraftBlockTypes22["CrimsonPressurePlate"] = "minecraft:crimson_pressure_plate";
  MinecraftBlockTypes22["CrimsonRoots"] = "minecraft:crimson_roots";
  MinecraftBlockTypes22["CrimsonSlab"] = "minecraft:crimson_slab";
  MinecraftBlockTypes22["CrimsonStairs"] = "minecraft:crimson_stairs";
  MinecraftBlockTypes22["CrimsonStandingSign"] = "minecraft:crimson_standing_sign";
  MinecraftBlockTypes22["CrimsonStem"] = "minecraft:crimson_stem";
  MinecraftBlockTypes22["CrimsonTrapdoor"] = "minecraft:crimson_trapdoor";
  MinecraftBlockTypes22["CrimsonWallSign"] = "minecraft:crimson_wall_sign";
  MinecraftBlockTypes22["CryingObsidian"] = "minecraft:crying_obsidian";
  MinecraftBlockTypes22["CutCopper"] = "minecraft:cut_copper";
  MinecraftBlockTypes22["CutCopperSlab"] = "minecraft:cut_copper_slab";
  MinecraftBlockTypes22["CutCopperStairs"] = "minecraft:cut_copper_stairs";
  MinecraftBlockTypes22["CutRedSandstone"] = "minecraft:cut_red_sandstone";
  MinecraftBlockTypes22["CutRedSandstoneDoubleSlab"] = "minecraft:cut_red_sandstone_double_slab";
  MinecraftBlockTypes22["CutRedSandstoneSlab"] = "minecraft:cut_red_sandstone_slab";
  MinecraftBlockTypes22["CutSandstone"] = "minecraft:cut_sandstone";
  MinecraftBlockTypes22["CutSandstoneDoubleSlab"] = "minecraft:cut_sandstone_double_slab";
  MinecraftBlockTypes22["CutSandstoneSlab"] = "minecraft:cut_sandstone_slab";
  MinecraftBlockTypes22["CyanCandle"] = "minecraft:cyan_candle";
  MinecraftBlockTypes22["CyanCandleCake"] = "minecraft:cyan_candle_cake";
  MinecraftBlockTypes22["CyanCarpet"] = "minecraft:cyan_carpet";
  MinecraftBlockTypes22["CyanConcrete"] = "minecraft:cyan_concrete";
  MinecraftBlockTypes22["CyanConcretePowder"] = "minecraft:cyan_concrete_powder";
  MinecraftBlockTypes22["CyanGlazedTerracotta"] = "minecraft:cyan_glazed_terracotta";
  MinecraftBlockTypes22["CyanShulkerBox"] = "minecraft:cyan_shulker_box";
  MinecraftBlockTypes22["CyanStainedGlass"] = "minecraft:cyan_stained_glass";
  MinecraftBlockTypes22["CyanStainedGlassPane"] = "minecraft:cyan_stained_glass_pane";
  MinecraftBlockTypes22["CyanTerracotta"] = "minecraft:cyan_terracotta";
  MinecraftBlockTypes22["CyanWool"] = "minecraft:cyan_wool";
  MinecraftBlockTypes22["DamagedAnvil"] = "minecraft:damaged_anvil";
  MinecraftBlockTypes22["Dandelion"] = "minecraft:dandelion";
  MinecraftBlockTypes22["DarkOakButton"] = "minecraft:dark_oak_button";
  MinecraftBlockTypes22["DarkOakDoor"] = "minecraft:dark_oak_door";
  MinecraftBlockTypes22["DarkOakDoubleSlab"] = "minecraft:dark_oak_double_slab";
  MinecraftBlockTypes22["DarkOakFence"] = "minecraft:dark_oak_fence";
  MinecraftBlockTypes22["DarkOakFenceGate"] = "minecraft:dark_oak_fence_gate";
  MinecraftBlockTypes22["DarkOakHangingSign"] = "minecraft:dark_oak_hanging_sign";
  MinecraftBlockTypes22["DarkOakLeaves"] = "minecraft:dark_oak_leaves";
  MinecraftBlockTypes22["DarkOakLog"] = "minecraft:dark_oak_log";
  MinecraftBlockTypes22["DarkOakPlanks"] = "minecraft:dark_oak_planks";
  MinecraftBlockTypes22["DarkOakPressurePlate"] = "minecraft:dark_oak_pressure_plate";
  MinecraftBlockTypes22["DarkOakSapling"] = "minecraft:dark_oak_sapling";
  MinecraftBlockTypes22["DarkOakSlab"] = "minecraft:dark_oak_slab";
  MinecraftBlockTypes22["DarkOakStairs"] = "minecraft:dark_oak_stairs";
  MinecraftBlockTypes22["DarkOakTrapdoor"] = "minecraft:dark_oak_trapdoor";
  MinecraftBlockTypes22["DarkOakWood"] = "minecraft:dark_oak_wood";
  MinecraftBlockTypes22["DarkPrismarine"] = "minecraft:dark_prismarine";
  MinecraftBlockTypes22["DarkPrismarineDoubleSlab"] = "minecraft:dark_prismarine_double_slab";
  MinecraftBlockTypes22["DarkPrismarineSlab"] = "minecraft:dark_prismarine_slab";
  MinecraftBlockTypes22["DarkPrismarineStairs"] = "minecraft:dark_prismarine_stairs";
  MinecraftBlockTypes22["DarkoakStandingSign"] = "minecraft:darkoak_standing_sign";
  MinecraftBlockTypes22["DarkoakWallSign"] = "minecraft:darkoak_wall_sign";
  MinecraftBlockTypes22["DaylightDetector"] = "minecraft:daylight_detector";
  MinecraftBlockTypes22["DaylightDetectorInverted"] = "minecraft:daylight_detector_inverted";
  MinecraftBlockTypes22["DeadBrainCoral"] = "minecraft:dead_brain_coral";
  MinecraftBlockTypes22["DeadBrainCoralBlock"] = "minecraft:dead_brain_coral_block";
  MinecraftBlockTypes22["DeadBrainCoralFan"] = "minecraft:dead_brain_coral_fan";
  MinecraftBlockTypes22["DeadBrainCoralWallFan"] = "minecraft:dead_brain_coral_wall_fan";
  MinecraftBlockTypes22["DeadBubbleCoral"] = "minecraft:dead_bubble_coral";
  MinecraftBlockTypes22["DeadBubbleCoralBlock"] = "minecraft:dead_bubble_coral_block";
  MinecraftBlockTypes22["DeadBubbleCoralFan"] = "minecraft:dead_bubble_coral_fan";
  MinecraftBlockTypes22["DeadBubbleCoralWallFan"] = "minecraft:dead_bubble_coral_wall_fan";
  MinecraftBlockTypes22["DeadFireCoral"] = "minecraft:dead_fire_coral";
  MinecraftBlockTypes22["DeadFireCoralBlock"] = "minecraft:dead_fire_coral_block";
  MinecraftBlockTypes22["DeadFireCoralFan"] = "minecraft:dead_fire_coral_fan";
  MinecraftBlockTypes22["DeadFireCoralWallFan"] = "minecraft:dead_fire_coral_wall_fan";
  MinecraftBlockTypes22["DeadHornCoral"] = "minecraft:dead_horn_coral";
  MinecraftBlockTypes22["DeadHornCoralBlock"] = "minecraft:dead_horn_coral_block";
  MinecraftBlockTypes22["DeadHornCoralFan"] = "minecraft:dead_horn_coral_fan";
  MinecraftBlockTypes22["DeadHornCoralWallFan"] = "minecraft:dead_horn_coral_wall_fan";
  MinecraftBlockTypes22["DeadTubeCoral"] = "minecraft:dead_tube_coral";
  MinecraftBlockTypes22["DeadTubeCoralBlock"] = "minecraft:dead_tube_coral_block";
  MinecraftBlockTypes22["DeadTubeCoralFan"] = "minecraft:dead_tube_coral_fan";
  MinecraftBlockTypes22["DeadTubeCoralWallFan"] = "minecraft:dead_tube_coral_wall_fan";
  MinecraftBlockTypes22["Deadbush"] = "minecraft:deadbush";
  MinecraftBlockTypes22["DecoratedPot"] = "minecraft:decorated_pot";
  MinecraftBlockTypes22["Deepslate"] = "minecraft:deepslate";
  MinecraftBlockTypes22["DeepslateBrickDoubleSlab"] = "minecraft:deepslate_brick_double_slab";
  MinecraftBlockTypes22["DeepslateBrickSlab"] = "minecraft:deepslate_brick_slab";
  MinecraftBlockTypes22["DeepslateBrickStairs"] = "minecraft:deepslate_brick_stairs";
  MinecraftBlockTypes22["DeepslateBrickWall"] = "minecraft:deepslate_brick_wall";
  MinecraftBlockTypes22["DeepslateBricks"] = "minecraft:deepslate_bricks";
  MinecraftBlockTypes22["DeepslateCoalOre"] = "minecraft:deepslate_coal_ore";
  MinecraftBlockTypes22["DeepslateCopperOre"] = "minecraft:deepslate_copper_ore";
  MinecraftBlockTypes22["DeepslateDiamondOre"] = "minecraft:deepslate_diamond_ore";
  MinecraftBlockTypes22["DeepslateEmeraldOre"] = "minecraft:deepslate_emerald_ore";
  MinecraftBlockTypes22["DeepslateGoldOre"] = "minecraft:deepslate_gold_ore";
  MinecraftBlockTypes22["DeepslateIronOre"] = "minecraft:deepslate_iron_ore";
  MinecraftBlockTypes22["DeepslateLapisOre"] = "minecraft:deepslate_lapis_ore";
  MinecraftBlockTypes22["DeepslateRedstoneOre"] = "minecraft:deepslate_redstone_ore";
  MinecraftBlockTypes22["DeepslateTileDoubleSlab"] = "minecraft:deepslate_tile_double_slab";
  MinecraftBlockTypes22["DeepslateTileSlab"] = "minecraft:deepslate_tile_slab";
  MinecraftBlockTypes22["DeepslateTileStairs"] = "minecraft:deepslate_tile_stairs";
  MinecraftBlockTypes22["DeepslateTileWall"] = "minecraft:deepslate_tile_wall";
  MinecraftBlockTypes22["DeepslateTiles"] = "minecraft:deepslate_tiles";
  MinecraftBlockTypes22["Deny"] = "minecraft:deny";
  MinecraftBlockTypes22["DetectorRail"] = "minecraft:detector_rail";
  MinecraftBlockTypes22["DiamondBlock"] = "minecraft:diamond_block";
  MinecraftBlockTypes22["DiamondOre"] = "minecraft:diamond_ore";
  MinecraftBlockTypes22["Diorite"] = "minecraft:diorite";
  MinecraftBlockTypes22["DioriteDoubleSlab"] = "minecraft:diorite_double_slab";
  MinecraftBlockTypes22["DioriteSlab"] = "minecraft:diorite_slab";
  MinecraftBlockTypes22["DioriteStairs"] = "minecraft:diorite_stairs";
  MinecraftBlockTypes22["DioriteWall"] = "minecraft:diorite_wall";
  MinecraftBlockTypes22["Dirt"] = "minecraft:dirt";
  MinecraftBlockTypes22["DirtWithRoots"] = "minecraft:dirt_with_roots";
  MinecraftBlockTypes22["Dispenser"] = "minecraft:dispenser";
  MinecraftBlockTypes22["DoubleCutCopperSlab"] = "minecraft:double_cut_copper_slab";
  MinecraftBlockTypes22["DragonEgg"] = "minecraft:dragon_egg";
  MinecraftBlockTypes22["DragonHead"] = "minecraft:dragon_head";
  MinecraftBlockTypes22["DriedKelpBlock"] = "minecraft:dried_kelp_block";
  MinecraftBlockTypes22["DripstoneBlock"] = "minecraft:dripstone_block";
  MinecraftBlockTypes22["Dropper"] = "minecraft:dropper";
  MinecraftBlockTypes22["Element0"] = "minecraft:element_0";
  MinecraftBlockTypes22["Element1"] = "minecraft:element_1";
  MinecraftBlockTypes22["Element10"] = "minecraft:element_10";
  MinecraftBlockTypes22["Element100"] = "minecraft:element_100";
  MinecraftBlockTypes22["Element101"] = "minecraft:element_101";
  MinecraftBlockTypes22["Element102"] = "minecraft:element_102";
  MinecraftBlockTypes22["Element103"] = "minecraft:element_103";
  MinecraftBlockTypes22["Element104"] = "minecraft:element_104";
  MinecraftBlockTypes22["Element105"] = "minecraft:element_105";
  MinecraftBlockTypes22["Element106"] = "minecraft:element_106";
  MinecraftBlockTypes22["Element107"] = "minecraft:element_107";
  MinecraftBlockTypes22["Element108"] = "minecraft:element_108";
  MinecraftBlockTypes22["Element109"] = "minecraft:element_109";
  MinecraftBlockTypes22["Element11"] = "minecraft:element_11";
  MinecraftBlockTypes22["Element110"] = "minecraft:element_110";
  MinecraftBlockTypes22["Element111"] = "minecraft:element_111";
  MinecraftBlockTypes22["Element112"] = "minecraft:element_112";
  MinecraftBlockTypes22["Element113"] = "minecraft:element_113";
  MinecraftBlockTypes22["Element114"] = "minecraft:element_114";
  MinecraftBlockTypes22["Element115"] = "minecraft:element_115";
  MinecraftBlockTypes22["Element116"] = "minecraft:element_116";
  MinecraftBlockTypes22["Element117"] = "minecraft:element_117";
  MinecraftBlockTypes22["Element118"] = "minecraft:element_118";
  MinecraftBlockTypes22["Element12"] = "minecraft:element_12";
  MinecraftBlockTypes22["Element13"] = "minecraft:element_13";
  MinecraftBlockTypes22["Element14"] = "minecraft:element_14";
  MinecraftBlockTypes22["Element15"] = "minecraft:element_15";
  MinecraftBlockTypes22["Element16"] = "minecraft:element_16";
  MinecraftBlockTypes22["Element17"] = "minecraft:element_17";
  MinecraftBlockTypes22["Element18"] = "minecraft:element_18";
  MinecraftBlockTypes22["Element19"] = "minecraft:element_19";
  MinecraftBlockTypes22["Element2"] = "minecraft:element_2";
  MinecraftBlockTypes22["Element20"] = "minecraft:element_20";
  MinecraftBlockTypes22["Element21"] = "minecraft:element_21";
  MinecraftBlockTypes22["Element22"] = "minecraft:element_22";
  MinecraftBlockTypes22["Element23"] = "minecraft:element_23";
  MinecraftBlockTypes22["Element24"] = "minecraft:element_24";
  MinecraftBlockTypes22["Element25"] = "minecraft:element_25";
  MinecraftBlockTypes22["Element26"] = "minecraft:element_26";
  MinecraftBlockTypes22["Element27"] = "minecraft:element_27";
  MinecraftBlockTypes22["Element28"] = "minecraft:element_28";
  MinecraftBlockTypes22["Element29"] = "minecraft:element_29";
  MinecraftBlockTypes22["Element3"] = "minecraft:element_3";
  MinecraftBlockTypes22["Element30"] = "minecraft:element_30";
  MinecraftBlockTypes22["Element31"] = "minecraft:element_31";
  MinecraftBlockTypes22["Element32"] = "minecraft:element_32";
  MinecraftBlockTypes22["Element33"] = "minecraft:element_33";
  MinecraftBlockTypes22["Element34"] = "minecraft:element_34";
  MinecraftBlockTypes22["Element35"] = "minecraft:element_35";
  MinecraftBlockTypes22["Element36"] = "minecraft:element_36";
  MinecraftBlockTypes22["Element37"] = "minecraft:element_37";
  MinecraftBlockTypes22["Element38"] = "minecraft:element_38";
  MinecraftBlockTypes22["Element39"] = "minecraft:element_39";
  MinecraftBlockTypes22["Element4"] = "minecraft:element_4";
  MinecraftBlockTypes22["Element40"] = "minecraft:element_40";
  MinecraftBlockTypes22["Element41"] = "minecraft:element_41";
  MinecraftBlockTypes22["Element42"] = "minecraft:element_42";
  MinecraftBlockTypes22["Element43"] = "minecraft:element_43";
  MinecraftBlockTypes22["Element44"] = "minecraft:element_44";
  MinecraftBlockTypes22["Element45"] = "minecraft:element_45";
  MinecraftBlockTypes22["Element46"] = "minecraft:element_46";
  MinecraftBlockTypes22["Element47"] = "minecraft:element_47";
  MinecraftBlockTypes22["Element48"] = "minecraft:element_48";
  MinecraftBlockTypes22["Element49"] = "minecraft:element_49";
  MinecraftBlockTypes22["Element5"] = "minecraft:element_5";
  MinecraftBlockTypes22["Element50"] = "minecraft:element_50";
  MinecraftBlockTypes22["Element51"] = "minecraft:element_51";
  MinecraftBlockTypes22["Element52"] = "minecraft:element_52";
  MinecraftBlockTypes22["Element53"] = "minecraft:element_53";
  MinecraftBlockTypes22["Element54"] = "minecraft:element_54";
  MinecraftBlockTypes22["Element55"] = "minecraft:element_55";
  MinecraftBlockTypes22["Element56"] = "minecraft:element_56";
  MinecraftBlockTypes22["Element57"] = "minecraft:element_57";
  MinecraftBlockTypes22["Element58"] = "minecraft:element_58";
  MinecraftBlockTypes22["Element59"] = "minecraft:element_59";
  MinecraftBlockTypes22["Element6"] = "minecraft:element_6";
  MinecraftBlockTypes22["Element60"] = "minecraft:element_60";
  MinecraftBlockTypes22["Element61"] = "minecraft:element_61";
  MinecraftBlockTypes22["Element62"] = "minecraft:element_62";
  MinecraftBlockTypes22["Element63"] = "minecraft:element_63";
  MinecraftBlockTypes22["Element64"] = "minecraft:element_64";
  MinecraftBlockTypes22["Element65"] = "minecraft:element_65";
  MinecraftBlockTypes22["Element66"] = "minecraft:element_66";
  MinecraftBlockTypes22["Element67"] = "minecraft:element_67";
  MinecraftBlockTypes22["Element68"] = "minecraft:element_68";
  MinecraftBlockTypes22["Element69"] = "minecraft:element_69";
  MinecraftBlockTypes22["Element7"] = "minecraft:element_7";
  MinecraftBlockTypes22["Element70"] = "minecraft:element_70";
  MinecraftBlockTypes22["Element71"] = "minecraft:element_71";
  MinecraftBlockTypes22["Element72"] = "minecraft:element_72";
  MinecraftBlockTypes22["Element73"] = "minecraft:element_73";
  MinecraftBlockTypes22["Element74"] = "minecraft:element_74";
  MinecraftBlockTypes22["Element75"] = "minecraft:element_75";
  MinecraftBlockTypes22["Element76"] = "minecraft:element_76";
  MinecraftBlockTypes22["Element77"] = "minecraft:element_77";
  MinecraftBlockTypes22["Element78"] = "minecraft:element_78";
  MinecraftBlockTypes22["Element79"] = "minecraft:element_79";
  MinecraftBlockTypes22["Element8"] = "minecraft:element_8";
  MinecraftBlockTypes22["Element80"] = "minecraft:element_80";
  MinecraftBlockTypes22["Element81"] = "minecraft:element_81";
  MinecraftBlockTypes22["Element82"] = "minecraft:element_82";
  MinecraftBlockTypes22["Element83"] = "minecraft:element_83";
  MinecraftBlockTypes22["Element84"] = "minecraft:element_84";
  MinecraftBlockTypes22["Element85"] = "minecraft:element_85";
  MinecraftBlockTypes22["Element86"] = "minecraft:element_86";
  MinecraftBlockTypes22["Element87"] = "minecraft:element_87";
  MinecraftBlockTypes22["Element88"] = "minecraft:element_88";
  MinecraftBlockTypes22["Element89"] = "minecraft:element_89";
  MinecraftBlockTypes22["Element9"] = "minecraft:element_9";
  MinecraftBlockTypes22["Element90"] = "minecraft:element_90";
  MinecraftBlockTypes22["Element91"] = "minecraft:element_91";
  MinecraftBlockTypes22["Element92"] = "minecraft:element_92";
  MinecraftBlockTypes22["Element93"] = "minecraft:element_93";
  MinecraftBlockTypes22["Element94"] = "minecraft:element_94";
  MinecraftBlockTypes22["Element95"] = "minecraft:element_95";
  MinecraftBlockTypes22["Element96"] = "minecraft:element_96";
  MinecraftBlockTypes22["Element97"] = "minecraft:element_97";
  MinecraftBlockTypes22["Element98"] = "minecraft:element_98";
  MinecraftBlockTypes22["Element99"] = "minecraft:element_99";
  MinecraftBlockTypes22["ElementConstructor"] = "minecraft:element_constructor";
  MinecraftBlockTypes22["EmeraldBlock"] = "minecraft:emerald_block";
  MinecraftBlockTypes22["EmeraldOre"] = "minecraft:emerald_ore";
  MinecraftBlockTypes22["EnchantingTable"] = "minecraft:enchanting_table";
  MinecraftBlockTypes22["EndBrickStairs"] = "minecraft:end_brick_stairs";
  MinecraftBlockTypes22["EndBricks"] = "minecraft:end_bricks";
  MinecraftBlockTypes22["EndPortal"] = "minecraft:end_portal";
  MinecraftBlockTypes22["EndPortalFrame"] = "minecraft:end_portal_frame";
  MinecraftBlockTypes22["EndRod"] = "minecraft:end_rod";
  MinecraftBlockTypes22["EndStone"] = "minecraft:end_stone";
  MinecraftBlockTypes22["EndStoneBrickDoubleSlab"] = "minecraft:end_stone_brick_double_slab";
  MinecraftBlockTypes22["EndStoneBrickSlab"] = "minecraft:end_stone_brick_slab";
  MinecraftBlockTypes22["EndStoneBrickWall"] = "minecraft:end_stone_brick_wall";
  MinecraftBlockTypes22["EnderChest"] = "minecraft:ender_chest";
  MinecraftBlockTypes22["ExposedChiseledCopper"] = "minecraft:exposed_chiseled_copper";
  MinecraftBlockTypes22["ExposedCopper"] = "minecraft:exposed_copper";
  MinecraftBlockTypes22["ExposedCopperBulb"] = "minecraft:exposed_copper_bulb";
  MinecraftBlockTypes22["ExposedCopperDoor"] = "minecraft:exposed_copper_door";
  MinecraftBlockTypes22["ExposedCopperGrate"] = "minecraft:exposed_copper_grate";
  MinecraftBlockTypes22["ExposedCopperTrapdoor"] = "minecraft:exposed_copper_trapdoor";
  MinecraftBlockTypes22["ExposedCutCopper"] = "minecraft:exposed_cut_copper";
  MinecraftBlockTypes22["ExposedCutCopperSlab"] = "minecraft:exposed_cut_copper_slab";
  MinecraftBlockTypes22["ExposedCutCopperStairs"] = "minecraft:exposed_cut_copper_stairs";
  MinecraftBlockTypes22["ExposedDoubleCutCopperSlab"] = "minecraft:exposed_double_cut_copper_slab";
  MinecraftBlockTypes22["Farmland"] = "minecraft:farmland";
  MinecraftBlockTypes22["FenceGate"] = "minecraft:fence_gate";
  MinecraftBlockTypes22["Fern"] = "minecraft:fern";
  MinecraftBlockTypes22["Fire"] = "minecraft:fire";
  MinecraftBlockTypes22["FireCoral"] = "minecraft:fire_coral";
  MinecraftBlockTypes22["FireCoralBlock"] = "minecraft:fire_coral_block";
  MinecraftBlockTypes22["FireCoralFan"] = "minecraft:fire_coral_fan";
  MinecraftBlockTypes22["FireCoralWallFan"] = "minecraft:fire_coral_wall_fan";
  MinecraftBlockTypes22["FireflyBush"] = "minecraft:firefly_bush";
  MinecraftBlockTypes22["FletchingTable"] = "minecraft:fletching_table";
  MinecraftBlockTypes22["FlowerPot"] = "minecraft:flower_pot";
  MinecraftBlockTypes22["FloweringAzalea"] = "minecraft:flowering_azalea";
  MinecraftBlockTypes22["FlowingLava"] = "minecraft:flowing_lava";
  MinecraftBlockTypes22["FlowingWater"] = "minecraft:flowing_water";
  MinecraftBlockTypes22["Frame"] = "minecraft:frame";
  MinecraftBlockTypes22["FrogSpawn"] = "minecraft:frog_spawn";
  MinecraftBlockTypes22["FrostedIce"] = "minecraft:frosted_ice";
  MinecraftBlockTypes22["Furnace"] = "minecraft:furnace";
  MinecraftBlockTypes22["GildedBlackstone"] = "minecraft:gilded_blackstone";
  MinecraftBlockTypes22["Glass"] = "minecraft:glass";
  MinecraftBlockTypes22["GlassPane"] = "minecraft:glass_pane";
  MinecraftBlockTypes22["GlowFrame"] = "minecraft:glow_frame";
  MinecraftBlockTypes22["GlowLichen"] = "minecraft:glow_lichen";
  MinecraftBlockTypes22["Glowstone"] = "minecraft:glowstone";
  MinecraftBlockTypes22["GoldBlock"] = "minecraft:gold_block";
  MinecraftBlockTypes22["GoldOre"] = "minecraft:gold_ore";
  MinecraftBlockTypes22["GoldenRail"] = "minecraft:golden_rail";
  MinecraftBlockTypes22["Granite"] = "minecraft:granite";
  MinecraftBlockTypes22["GraniteDoubleSlab"] = "minecraft:granite_double_slab";
  MinecraftBlockTypes22["GraniteSlab"] = "minecraft:granite_slab";
  MinecraftBlockTypes22["GraniteStairs"] = "minecraft:granite_stairs";
  MinecraftBlockTypes22["GraniteWall"] = "minecraft:granite_wall";
  MinecraftBlockTypes22["GrassBlock"] = "minecraft:grass_block";
  MinecraftBlockTypes22["GrassPath"] = "minecraft:grass_path";
  MinecraftBlockTypes22["Gravel"] = "minecraft:gravel";
  MinecraftBlockTypes22["GrayCandle"] = "minecraft:gray_candle";
  MinecraftBlockTypes22["GrayCandleCake"] = "minecraft:gray_candle_cake";
  MinecraftBlockTypes22["GrayCarpet"] = "minecraft:gray_carpet";
  MinecraftBlockTypes22["GrayConcrete"] = "minecraft:gray_concrete";
  MinecraftBlockTypes22["GrayConcretePowder"] = "minecraft:gray_concrete_powder";
  MinecraftBlockTypes22["GrayGlazedTerracotta"] = "minecraft:gray_glazed_terracotta";
  MinecraftBlockTypes22["GrayShulkerBox"] = "minecraft:gray_shulker_box";
  MinecraftBlockTypes22["GrayStainedGlass"] = "minecraft:gray_stained_glass";
  MinecraftBlockTypes22["GrayStainedGlassPane"] = "minecraft:gray_stained_glass_pane";
  MinecraftBlockTypes22["GrayTerracotta"] = "minecraft:gray_terracotta";
  MinecraftBlockTypes22["GrayWool"] = "minecraft:gray_wool";
  MinecraftBlockTypes22["GreenCandle"] = "minecraft:green_candle";
  MinecraftBlockTypes22["GreenCandleCake"] = "minecraft:green_candle_cake";
  MinecraftBlockTypes22["GreenCarpet"] = "minecraft:green_carpet";
  MinecraftBlockTypes22["GreenConcrete"] = "minecraft:green_concrete";
  MinecraftBlockTypes22["GreenConcretePowder"] = "minecraft:green_concrete_powder";
  MinecraftBlockTypes22["GreenGlazedTerracotta"] = "minecraft:green_glazed_terracotta";
  MinecraftBlockTypes22["GreenShulkerBox"] = "minecraft:green_shulker_box";
  MinecraftBlockTypes22["GreenStainedGlass"] = "minecraft:green_stained_glass";
  MinecraftBlockTypes22["GreenStainedGlassPane"] = "minecraft:green_stained_glass_pane";
  MinecraftBlockTypes22["GreenTerracotta"] = "minecraft:green_terracotta";
  MinecraftBlockTypes22["GreenWool"] = "minecraft:green_wool";
  MinecraftBlockTypes22["Grindstone"] = "minecraft:grindstone";
  MinecraftBlockTypes22["HangingRoots"] = "minecraft:hanging_roots";
  MinecraftBlockTypes22["HardBlackStainedGlass"] = "minecraft:hard_black_stained_glass";
  MinecraftBlockTypes22["HardBlackStainedGlassPane"] = "minecraft:hard_black_stained_glass_pane";
  MinecraftBlockTypes22["HardBlueStainedGlass"] = "minecraft:hard_blue_stained_glass";
  MinecraftBlockTypes22["HardBlueStainedGlassPane"] = "minecraft:hard_blue_stained_glass_pane";
  MinecraftBlockTypes22["HardBrownStainedGlass"] = "minecraft:hard_brown_stained_glass";
  MinecraftBlockTypes22["HardBrownStainedGlassPane"] = "minecraft:hard_brown_stained_glass_pane";
  MinecraftBlockTypes22["HardCyanStainedGlass"] = "minecraft:hard_cyan_stained_glass";
  MinecraftBlockTypes22["HardCyanStainedGlassPane"] = "minecraft:hard_cyan_stained_glass_pane";
  MinecraftBlockTypes22["HardGlass"] = "minecraft:hard_glass";
  MinecraftBlockTypes22["HardGlassPane"] = "minecraft:hard_glass_pane";
  MinecraftBlockTypes22["HardGrayStainedGlass"] = "minecraft:hard_gray_stained_glass";
  MinecraftBlockTypes22["HardGrayStainedGlassPane"] = "minecraft:hard_gray_stained_glass_pane";
  MinecraftBlockTypes22["HardGreenStainedGlass"] = "minecraft:hard_green_stained_glass";
  MinecraftBlockTypes22["HardGreenStainedGlassPane"] = "minecraft:hard_green_stained_glass_pane";
  MinecraftBlockTypes22["HardLightBlueStainedGlass"] = "minecraft:hard_light_blue_stained_glass";
  MinecraftBlockTypes22["HardLightBlueStainedGlassPane"] = "minecraft:hard_light_blue_stained_glass_pane";
  MinecraftBlockTypes22["HardLightGrayStainedGlass"] = "minecraft:hard_light_gray_stained_glass";
  MinecraftBlockTypes22["HardLightGrayStainedGlassPane"] = "minecraft:hard_light_gray_stained_glass_pane";
  MinecraftBlockTypes22["HardLimeStainedGlass"] = "minecraft:hard_lime_stained_glass";
  MinecraftBlockTypes22["HardLimeStainedGlassPane"] = "minecraft:hard_lime_stained_glass_pane";
  MinecraftBlockTypes22["HardMagentaStainedGlass"] = "minecraft:hard_magenta_stained_glass";
  MinecraftBlockTypes22["HardMagentaStainedGlassPane"] = "minecraft:hard_magenta_stained_glass_pane";
  MinecraftBlockTypes22["HardOrangeStainedGlass"] = "minecraft:hard_orange_stained_glass";
  MinecraftBlockTypes22["HardOrangeStainedGlassPane"] = "minecraft:hard_orange_stained_glass_pane";
  MinecraftBlockTypes22["HardPinkStainedGlass"] = "minecraft:hard_pink_stained_glass";
  MinecraftBlockTypes22["HardPinkStainedGlassPane"] = "minecraft:hard_pink_stained_glass_pane";
  MinecraftBlockTypes22["HardPurpleStainedGlass"] = "minecraft:hard_purple_stained_glass";
  MinecraftBlockTypes22["HardPurpleStainedGlassPane"] = "minecraft:hard_purple_stained_glass_pane";
  MinecraftBlockTypes22["HardRedStainedGlass"] = "minecraft:hard_red_stained_glass";
  MinecraftBlockTypes22["HardRedStainedGlassPane"] = "minecraft:hard_red_stained_glass_pane";
  MinecraftBlockTypes22["HardWhiteStainedGlass"] = "minecraft:hard_white_stained_glass";
  MinecraftBlockTypes22["HardWhiteStainedGlassPane"] = "minecraft:hard_white_stained_glass_pane";
  MinecraftBlockTypes22["HardYellowStainedGlass"] = "minecraft:hard_yellow_stained_glass";
  MinecraftBlockTypes22["HardYellowStainedGlassPane"] = "minecraft:hard_yellow_stained_glass_pane";
  MinecraftBlockTypes22["HardenedClay"] = "minecraft:hardened_clay";
  MinecraftBlockTypes22["HayBlock"] = "minecraft:hay_block";
  MinecraftBlockTypes22["HeavyCore"] = "minecraft:heavy_core";
  MinecraftBlockTypes22["HeavyWeightedPressurePlate"] = "minecraft:heavy_weighted_pressure_plate";
  MinecraftBlockTypes22["HoneyBlock"] = "minecraft:honey_block";
  MinecraftBlockTypes22["HoneycombBlock"] = "minecraft:honeycomb_block";
  MinecraftBlockTypes22["Hopper"] = "minecraft:hopper";
  MinecraftBlockTypes22["HornCoral"] = "minecraft:horn_coral";
  MinecraftBlockTypes22["HornCoralBlock"] = "minecraft:horn_coral_block";
  MinecraftBlockTypes22["HornCoralFan"] = "minecraft:horn_coral_fan";
  MinecraftBlockTypes22["HornCoralWallFan"] = "minecraft:horn_coral_wall_fan";
  MinecraftBlockTypes22["Ice"] = "minecraft:ice";
  MinecraftBlockTypes22["InfestedChiseledStoneBricks"] = "minecraft:infested_chiseled_stone_bricks";
  MinecraftBlockTypes22["InfestedCobblestone"] = "minecraft:infested_cobblestone";
  MinecraftBlockTypes22["InfestedCrackedStoneBricks"] = "minecraft:infested_cracked_stone_bricks";
  MinecraftBlockTypes22["InfestedDeepslate"] = "minecraft:infested_deepslate";
  MinecraftBlockTypes22["InfestedMossyStoneBricks"] = "minecraft:infested_mossy_stone_bricks";
  MinecraftBlockTypes22["InfestedStone"] = "minecraft:infested_stone";
  MinecraftBlockTypes22["InfestedStoneBricks"] = "minecraft:infested_stone_bricks";
  MinecraftBlockTypes22["IronBars"] = "minecraft:iron_bars";
  MinecraftBlockTypes22["IronBlock"] = "minecraft:iron_block";
  MinecraftBlockTypes22["IronDoor"] = "minecraft:iron_door";
  MinecraftBlockTypes22["IronOre"] = "minecraft:iron_ore";
  MinecraftBlockTypes22["IronTrapdoor"] = "minecraft:iron_trapdoor";
  MinecraftBlockTypes22["Jigsaw"] = "minecraft:jigsaw";
  MinecraftBlockTypes22["Jukebox"] = "minecraft:jukebox";
  MinecraftBlockTypes22["JungleButton"] = "minecraft:jungle_button";
  MinecraftBlockTypes22["JungleDoor"] = "minecraft:jungle_door";
  MinecraftBlockTypes22["JungleDoubleSlab"] = "minecraft:jungle_double_slab";
  MinecraftBlockTypes22["JungleFence"] = "minecraft:jungle_fence";
  MinecraftBlockTypes22["JungleFenceGate"] = "minecraft:jungle_fence_gate";
  MinecraftBlockTypes22["JungleHangingSign"] = "minecraft:jungle_hanging_sign";
  MinecraftBlockTypes22["JungleLeaves"] = "minecraft:jungle_leaves";
  MinecraftBlockTypes22["JungleLog"] = "minecraft:jungle_log";
  MinecraftBlockTypes22["JunglePlanks"] = "minecraft:jungle_planks";
  MinecraftBlockTypes22["JunglePressurePlate"] = "minecraft:jungle_pressure_plate";
  MinecraftBlockTypes22["JungleSapling"] = "minecraft:jungle_sapling";
  MinecraftBlockTypes22["JungleSlab"] = "minecraft:jungle_slab";
  MinecraftBlockTypes22["JungleStairs"] = "minecraft:jungle_stairs";
  MinecraftBlockTypes22["JungleStandingSign"] = "minecraft:jungle_standing_sign";
  MinecraftBlockTypes22["JungleTrapdoor"] = "minecraft:jungle_trapdoor";
  MinecraftBlockTypes22["JungleWallSign"] = "minecraft:jungle_wall_sign";
  MinecraftBlockTypes22["JungleWood"] = "minecraft:jungle_wood";
  MinecraftBlockTypes22["Kelp"] = "minecraft:kelp";
  MinecraftBlockTypes22["LabTable"] = "minecraft:lab_table";
  MinecraftBlockTypes22["Ladder"] = "minecraft:ladder";
  MinecraftBlockTypes22["Lantern"] = "minecraft:lantern";
  MinecraftBlockTypes22["LapisBlock"] = "minecraft:lapis_block";
  MinecraftBlockTypes22["LapisOre"] = "minecraft:lapis_ore";
  MinecraftBlockTypes22["LargeAmethystBud"] = "minecraft:large_amethyst_bud";
  MinecraftBlockTypes22["LargeFern"] = "minecraft:large_fern";
  MinecraftBlockTypes22["Lava"] = "minecraft:lava";
  MinecraftBlockTypes22["LeafLitter"] = "minecraft:leaf_litter";
  MinecraftBlockTypes22["Lectern"] = "minecraft:lectern";
  MinecraftBlockTypes22["Lever"] = "minecraft:lever";
  MinecraftBlockTypes22["LightBlock0"] = "minecraft:light_block_0";
  MinecraftBlockTypes22["LightBlock1"] = "minecraft:light_block_1";
  MinecraftBlockTypes22["LightBlock10"] = "minecraft:light_block_10";
  MinecraftBlockTypes22["LightBlock11"] = "minecraft:light_block_11";
  MinecraftBlockTypes22["LightBlock12"] = "minecraft:light_block_12";
  MinecraftBlockTypes22["LightBlock13"] = "minecraft:light_block_13";
  MinecraftBlockTypes22["LightBlock14"] = "minecraft:light_block_14";
  MinecraftBlockTypes22["LightBlock15"] = "minecraft:light_block_15";
  MinecraftBlockTypes22["LightBlock2"] = "minecraft:light_block_2";
  MinecraftBlockTypes22["LightBlock3"] = "minecraft:light_block_3";
  MinecraftBlockTypes22["LightBlock4"] = "minecraft:light_block_4";
  MinecraftBlockTypes22["LightBlock5"] = "minecraft:light_block_5";
  MinecraftBlockTypes22["LightBlock6"] = "minecraft:light_block_6";
  MinecraftBlockTypes22["LightBlock7"] = "minecraft:light_block_7";
  MinecraftBlockTypes22["LightBlock8"] = "minecraft:light_block_8";
  MinecraftBlockTypes22["LightBlock9"] = "minecraft:light_block_9";
  MinecraftBlockTypes22["LightBlueCandle"] = "minecraft:light_blue_candle";
  MinecraftBlockTypes22["LightBlueCandleCake"] = "minecraft:light_blue_candle_cake";
  MinecraftBlockTypes22["LightBlueCarpet"] = "minecraft:light_blue_carpet";
  MinecraftBlockTypes22["LightBlueConcrete"] = "minecraft:light_blue_concrete";
  MinecraftBlockTypes22["LightBlueConcretePowder"] = "minecraft:light_blue_concrete_powder";
  MinecraftBlockTypes22["LightBlueGlazedTerracotta"] = "minecraft:light_blue_glazed_terracotta";
  MinecraftBlockTypes22["LightBlueShulkerBox"] = "minecraft:light_blue_shulker_box";
  MinecraftBlockTypes22["LightBlueStainedGlass"] = "minecraft:light_blue_stained_glass";
  MinecraftBlockTypes22["LightBlueStainedGlassPane"] = "minecraft:light_blue_stained_glass_pane";
  MinecraftBlockTypes22["LightBlueTerracotta"] = "minecraft:light_blue_terracotta";
  MinecraftBlockTypes22["LightBlueWool"] = "minecraft:light_blue_wool";
  MinecraftBlockTypes22["LightGrayCandle"] = "minecraft:light_gray_candle";
  MinecraftBlockTypes22["LightGrayCandleCake"] = "minecraft:light_gray_candle_cake";
  MinecraftBlockTypes22["LightGrayCarpet"] = "minecraft:light_gray_carpet";
  MinecraftBlockTypes22["LightGrayConcrete"] = "minecraft:light_gray_concrete";
  MinecraftBlockTypes22["LightGrayConcretePowder"] = "minecraft:light_gray_concrete_powder";
  MinecraftBlockTypes22["LightGrayShulkerBox"] = "minecraft:light_gray_shulker_box";
  MinecraftBlockTypes22["LightGrayStainedGlass"] = "minecraft:light_gray_stained_glass";
  MinecraftBlockTypes22["LightGrayStainedGlassPane"] = "minecraft:light_gray_stained_glass_pane";
  MinecraftBlockTypes22["LightGrayTerracotta"] = "minecraft:light_gray_terracotta";
  MinecraftBlockTypes22["LightGrayWool"] = "minecraft:light_gray_wool";
  MinecraftBlockTypes22["LightWeightedPressurePlate"] = "minecraft:light_weighted_pressure_plate";
  MinecraftBlockTypes22["LightningRod"] = "minecraft:lightning_rod";
  MinecraftBlockTypes22["Lilac"] = "minecraft:lilac";
  MinecraftBlockTypes22["LilyOfTheValley"] = "minecraft:lily_of_the_valley";
  MinecraftBlockTypes22["LimeCandle"] = "minecraft:lime_candle";
  MinecraftBlockTypes22["LimeCandleCake"] = "minecraft:lime_candle_cake";
  MinecraftBlockTypes22["LimeCarpet"] = "minecraft:lime_carpet";
  MinecraftBlockTypes22["LimeConcrete"] = "minecraft:lime_concrete";
  MinecraftBlockTypes22["LimeConcretePowder"] = "minecraft:lime_concrete_powder";
  MinecraftBlockTypes22["LimeGlazedTerracotta"] = "minecraft:lime_glazed_terracotta";
  MinecraftBlockTypes22["LimeShulkerBox"] = "minecraft:lime_shulker_box";
  MinecraftBlockTypes22["LimeStainedGlass"] = "minecraft:lime_stained_glass";
  MinecraftBlockTypes22["LimeStainedGlassPane"] = "minecraft:lime_stained_glass_pane";
  MinecraftBlockTypes22["LimeTerracotta"] = "minecraft:lime_terracotta";
  MinecraftBlockTypes22["LimeWool"] = "minecraft:lime_wool";
  MinecraftBlockTypes22["LitBlastFurnace"] = "minecraft:lit_blast_furnace";
  MinecraftBlockTypes22["LitDeepslateRedstoneOre"] = "minecraft:lit_deepslate_redstone_ore";
  MinecraftBlockTypes22["LitFurnace"] = "minecraft:lit_furnace";
  MinecraftBlockTypes22["LitPumpkin"] = "minecraft:lit_pumpkin";
  MinecraftBlockTypes22["LitRedstoneLamp"] = "minecraft:lit_redstone_lamp";
  MinecraftBlockTypes22["LitRedstoneOre"] = "minecraft:lit_redstone_ore";
  MinecraftBlockTypes22["LitSmoker"] = "minecraft:lit_smoker";
  MinecraftBlockTypes22["Lodestone"] = "minecraft:lodestone";
  MinecraftBlockTypes22["Loom"] = "minecraft:loom";
  MinecraftBlockTypes22["MagentaCandle"] = "minecraft:magenta_candle";
  MinecraftBlockTypes22["MagentaCandleCake"] = "minecraft:magenta_candle_cake";
  MinecraftBlockTypes22["MagentaCarpet"] = "minecraft:magenta_carpet";
  MinecraftBlockTypes22["MagentaConcrete"] = "minecraft:magenta_concrete";
  MinecraftBlockTypes22["MagentaConcretePowder"] = "minecraft:magenta_concrete_powder";
  MinecraftBlockTypes22["MagentaGlazedTerracotta"] = "minecraft:magenta_glazed_terracotta";
  MinecraftBlockTypes22["MagentaShulkerBox"] = "minecraft:magenta_shulker_box";
  MinecraftBlockTypes22["MagentaStainedGlass"] = "minecraft:magenta_stained_glass";
  MinecraftBlockTypes22["MagentaStainedGlassPane"] = "minecraft:magenta_stained_glass_pane";
  MinecraftBlockTypes22["MagentaTerracotta"] = "minecraft:magenta_terracotta";
  MinecraftBlockTypes22["MagentaWool"] = "minecraft:magenta_wool";
  MinecraftBlockTypes22["Magma"] = "minecraft:magma";
  MinecraftBlockTypes22["MangroveButton"] = "minecraft:mangrove_button";
  MinecraftBlockTypes22["MangroveDoor"] = "minecraft:mangrove_door";
  MinecraftBlockTypes22["MangroveDoubleSlab"] = "minecraft:mangrove_double_slab";
  MinecraftBlockTypes22["MangroveFence"] = "minecraft:mangrove_fence";
  MinecraftBlockTypes22["MangroveFenceGate"] = "minecraft:mangrove_fence_gate";
  MinecraftBlockTypes22["MangroveHangingSign"] = "minecraft:mangrove_hanging_sign";
  MinecraftBlockTypes22["MangroveLeaves"] = "minecraft:mangrove_leaves";
  MinecraftBlockTypes22["MangroveLog"] = "minecraft:mangrove_log";
  MinecraftBlockTypes22["MangrovePlanks"] = "minecraft:mangrove_planks";
  MinecraftBlockTypes22["MangrovePressurePlate"] = "minecraft:mangrove_pressure_plate";
  MinecraftBlockTypes22["MangrovePropagule"] = "minecraft:mangrove_propagule";
  MinecraftBlockTypes22["MangroveRoots"] = "minecraft:mangrove_roots";
  MinecraftBlockTypes22["MangroveSlab"] = "minecraft:mangrove_slab";
  MinecraftBlockTypes22["MangroveStairs"] = "minecraft:mangrove_stairs";
  MinecraftBlockTypes22["MangroveStandingSign"] = "minecraft:mangrove_standing_sign";
  MinecraftBlockTypes22["MangroveTrapdoor"] = "minecraft:mangrove_trapdoor";
  MinecraftBlockTypes22["MangroveWallSign"] = "minecraft:mangrove_wall_sign";
  MinecraftBlockTypes22["MangroveWood"] = "minecraft:mangrove_wood";
  MinecraftBlockTypes22["MaterialReducer"] = "minecraft:material_reducer";
  MinecraftBlockTypes22["MediumAmethystBud"] = "minecraft:medium_amethyst_bud";
  MinecraftBlockTypes22["MelonBlock"] = "minecraft:melon_block";
  MinecraftBlockTypes22["MelonStem"] = "minecraft:melon_stem";
  MinecraftBlockTypes22["MobSpawner"] = "minecraft:mob_spawner";
  MinecraftBlockTypes22["MossBlock"] = "minecraft:moss_block";
  MinecraftBlockTypes22["MossCarpet"] = "minecraft:moss_carpet";
  MinecraftBlockTypes22["MossyCobblestone"] = "minecraft:mossy_cobblestone";
  MinecraftBlockTypes22["MossyCobblestoneDoubleSlab"] = "minecraft:mossy_cobblestone_double_slab";
  MinecraftBlockTypes22["MossyCobblestoneSlab"] = "minecraft:mossy_cobblestone_slab";
  MinecraftBlockTypes22["MossyCobblestoneStairs"] = "minecraft:mossy_cobblestone_stairs";
  MinecraftBlockTypes22["MossyCobblestoneWall"] = "minecraft:mossy_cobblestone_wall";
  MinecraftBlockTypes22["MossyStoneBrickDoubleSlab"] = "minecraft:mossy_stone_brick_double_slab";
  MinecraftBlockTypes22["MossyStoneBrickSlab"] = "minecraft:mossy_stone_brick_slab";
  MinecraftBlockTypes22["MossyStoneBrickStairs"] = "minecraft:mossy_stone_brick_stairs";
  MinecraftBlockTypes22["MossyStoneBrickWall"] = "minecraft:mossy_stone_brick_wall";
  MinecraftBlockTypes22["MossyStoneBricks"] = "minecraft:mossy_stone_bricks";
  MinecraftBlockTypes22["Mud"] = "minecraft:mud";
  MinecraftBlockTypes22["MudBrickDoubleSlab"] = "minecraft:mud_brick_double_slab";
  MinecraftBlockTypes22["MudBrickSlab"] = "minecraft:mud_brick_slab";
  MinecraftBlockTypes22["MudBrickStairs"] = "minecraft:mud_brick_stairs";
  MinecraftBlockTypes22["MudBrickWall"] = "minecraft:mud_brick_wall";
  MinecraftBlockTypes22["MudBricks"] = "minecraft:mud_bricks";
  MinecraftBlockTypes22["MuddyMangroveRoots"] = "minecraft:muddy_mangrove_roots";
  MinecraftBlockTypes22["MushroomStem"] = "minecraft:mushroom_stem";
  MinecraftBlockTypes22["Mycelium"] = "minecraft:mycelium";
  MinecraftBlockTypes22["NetherBrick"] = "minecraft:nether_brick";
  MinecraftBlockTypes22["NetherBrickDoubleSlab"] = "minecraft:nether_brick_double_slab";
  MinecraftBlockTypes22["NetherBrickFence"] = "minecraft:nether_brick_fence";
  MinecraftBlockTypes22["NetherBrickSlab"] = "minecraft:nether_brick_slab";
  MinecraftBlockTypes22["NetherBrickStairs"] = "minecraft:nether_brick_stairs";
  MinecraftBlockTypes22["NetherBrickWall"] = "minecraft:nether_brick_wall";
  MinecraftBlockTypes22["NetherGoldOre"] = "minecraft:nether_gold_ore";
  MinecraftBlockTypes22["NetherSprouts"] = "minecraft:nether_sprouts";
  MinecraftBlockTypes22["NetherWart"] = "minecraft:nether_wart";
  MinecraftBlockTypes22["NetherWartBlock"] = "minecraft:nether_wart_block";
  MinecraftBlockTypes22["NetheriteBlock"] = "minecraft:netherite_block";
  MinecraftBlockTypes22["Netherrack"] = "minecraft:netherrack";
  MinecraftBlockTypes22["NormalStoneDoubleSlab"] = "minecraft:normal_stone_double_slab";
  MinecraftBlockTypes22["NormalStoneSlab"] = "minecraft:normal_stone_slab";
  MinecraftBlockTypes22["NormalStoneStairs"] = "minecraft:normal_stone_stairs";
  MinecraftBlockTypes22["Noteblock"] = "minecraft:noteblock";
  MinecraftBlockTypes22["OakDoubleSlab"] = "minecraft:oak_double_slab";
  MinecraftBlockTypes22["OakFence"] = "minecraft:oak_fence";
  MinecraftBlockTypes22["OakHangingSign"] = "minecraft:oak_hanging_sign";
  MinecraftBlockTypes22["OakLeaves"] = "minecraft:oak_leaves";
  MinecraftBlockTypes22["OakLog"] = "minecraft:oak_log";
  MinecraftBlockTypes22["OakPlanks"] = "minecraft:oak_planks";
  MinecraftBlockTypes22["OakSapling"] = "minecraft:oak_sapling";
  MinecraftBlockTypes22["OakSlab"] = "minecraft:oak_slab";
  MinecraftBlockTypes22["OakStairs"] = "minecraft:oak_stairs";
  MinecraftBlockTypes22["OakWood"] = "minecraft:oak_wood";
  MinecraftBlockTypes22["Observer"] = "minecraft:observer";
  MinecraftBlockTypes22["Obsidian"] = "minecraft:obsidian";
  MinecraftBlockTypes22["OchreFroglight"] = "minecraft:ochre_froglight";
  MinecraftBlockTypes22["OpenEyeblossom"] = "minecraft:open_eyeblossom";
  MinecraftBlockTypes22["OrangeCandle"] = "minecraft:orange_candle";
  MinecraftBlockTypes22["OrangeCandleCake"] = "minecraft:orange_candle_cake";
  MinecraftBlockTypes22["OrangeCarpet"] = "minecraft:orange_carpet";
  MinecraftBlockTypes22["OrangeConcrete"] = "minecraft:orange_concrete";
  MinecraftBlockTypes22["OrangeConcretePowder"] = "minecraft:orange_concrete_powder";
  MinecraftBlockTypes22["OrangeGlazedTerracotta"] = "minecraft:orange_glazed_terracotta";
  MinecraftBlockTypes22["OrangeShulkerBox"] = "minecraft:orange_shulker_box";
  MinecraftBlockTypes22["OrangeStainedGlass"] = "minecraft:orange_stained_glass";
  MinecraftBlockTypes22["OrangeStainedGlassPane"] = "minecraft:orange_stained_glass_pane";
  MinecraftBlockTypes22["OrangeTerracotta"] = "minecraft:orange_terracotta";
  MinecraftBlockTypes22["OrangeTulip"] = "minecraft:orange_tulip";
  MinecraftBlockTypes22["OrangeWool"] = "minecraft:orange_wool";
  MinecraftBlockTypes22["OxeyeDaisy"] = "minecraft:oxeye_daisy";
  MinecraftBlockTypes22["OxidizedChiseledCopper"] = "minecraft:oxidized_chiseled_copper";
  MinecraftBlockTypes22["OxidizedCopper"] = "minecraft:oxidized_copper";
  MinecraftBlockTypes22["OxidizedCopperBulb"] = "minecraft:oxidized_copper_bulb";
  MinecraftBlockTypes22["OxidizedCopperDoor"] = "minecraft:oxidized_copper_door";
  MinecraftBlockTypes22["OxidizedCopperGrate"] = "minecraft:oxidized_copper_grate";
  MinecraftBlockTypes22["OxidizedCopperTrapdoor"] = "minecraft:oxidized_copper_trapdoor";
  MinecraftBlockTypes22["OxidizedCutCopper"] = "minecraft:oxidized_cut_copper";
  MinecraftBlockTypes22["OxidizedCutCopperSlab"] = "minecraft:oxidized_cut_copper_slab";
  MinecraftBlockTypes22["OxidizedCutCopperStairs"] = "minecraft:oxidized_cut_copper_stairs";
  MinecraftBlockTypes22["OxidizedDoubleCutCopperSlab"] = "minecraft:oxidized_double_cut_copper_slab";
  MinecraftBlockTypes22["PackedIce"] = "minecraft:packed_ice";
  MinecraftBlockTypes22["PackedMud"] = "minecraft:packed_mud";
  MinecraftBlockTypes22["PaleHangingMoss"] = "minecraft:pale_hanging_moss";
  MinecraftBlockTypes22["PaleMossBlock"] = "minecraft:pale_moss_block";
  MinecraftBlockTypes22["PaleMossCarpet"] = "minecraft:pale_moss_carpet";
  MinecraftBlockTypes22["PaleOakButton"] = "minecraft:pale_oak_button";
  MinecraftBlockTypes22["PaleOakDoor"] = "minecraft:pale_oak_door";
  MinecraftBlockTypes22["PaleOakDoubleSlab"] = "minecraft:pale_oak_double_slab";
  MinecraftBlockTypes22["PaleOakFence"] = "minecraft:pale_oak_fence";
  MinecraftBlockTypes22["PaleOakFenceGate"] = "minecraft:pale_oak_fence_gate";
  MinecraftBlockTypes22["PaleOakHangingSign"] = "minecraft:pale_oak_hanging_sign";
  MinecraftBlockTypes22["PaleOakLeaves"] = "minecraft:pale_oak_leaves";
  MinecraftBlockTypes22["PaleOakLog"] = "minecraft:pale_oak_log";
  MinecraftBlockTypes22["PaleOakPlanks"] = "minecraft:pale_oak_planks";
  MinecraftBlockTypes22["PaleOakPressurePlate"] = "minecraft:pale_oak_pressure_plate";
  MinecraftBlockTypes22["PaleOakSapling"] = "minecraft:pale_oak_sapling";
  MinecraftBlockTypes22["PaleOakSlab"] = "minecraft:pale_oak_slab";
  MinecraftBlockTypes22["PaleOakStairs"] = "minecraft:pale_oak_stairs";
  MinecraftBlockTypes22["PaleOakStandingSign"] = "minecraft:pale_oak_standing_sign";
  MinecraftBlockTypes22["PaleOakTrapdoor"] = "minecraft:pale_oak_trapdoor";
  MinecraftBlockTypes22["PaleOakWallSign"] = "minecraft:pale_oak_wall_sign";
  MinecraftBlockTypes22["PaleOakWood"] = "minecraft:pale_oak_wood";
  MinecraftBlockTypes22["PearlescentFroglight"] = "minecraft:pearlescent_froglight";
  MinecraftBlockTypes22["Peony"] = "minecraft:peony";
  MinecraftBlockTypes22["PetrifiedOakDoubleSlab"] = "minecraft:petrified_oak_double_slab";
  MinecraftBlockTypes22["PetrifiedOakSlab"] = "minecraft:petrified_oak_slab";
  MinecraftBlockTypes22["PiglinHead"] = "minecraft:piglin_head";
  MinecraftBlockTypes22["PinkCandle"] = "minecraft:pink_candle";
  MinecraftBlockTypes22["PinkCandleCake"] = "minecraft:pink_candle_cake";
  MinecraftBlockTypes22["PinkCarpet"] = "minecraft:pink_carpet";
  MinecraftBlockTypes22["PinkConcrete"] = "minecraft:pink_concrete";
  MinecraftBlockTypes22["PinkConcretePowder"] = "minecraft:pink_concrete_powder";
  MinecraftBlockTypes22["PinkGlazedTerracotta"] = "minecraft:pink_glazed_terracotta";
  MinecraftBlockTypes22["PinkPetals"] = "minecraft:pink_petals";
  MinecraftBlockTypes22["PinkShulkerBox"] = "minecraft:pink_shulker_box";
  MinecraftBlockTypes22["PinkStainedGlass"] = "minecraft:pink_stained_glass";
  MinecraftBlockTypes22["PinkStainedGlassPane"] = "minecraft:pink_stained_glass_pane";
  MinecraftBlockTypes22["PinkTerracotta"] = "minecraft:pink_terracotta";
  MinecraftBlockTypes22["PinkTulip"] = "minecraft:pink_tulip";
  MinecraftBlockTypes22["PinkWool"] = "minecraft:pink_wool";
  MinecraftBlockTypes22["Piston"] = "minecraft:piston";
  MinecraftBlockTypes22["PistonArmCollision"] = "minecraft:piston_arm_collision";
  MinecraftBlockTypes22["PitcherCrop"] = "minecraft:pitcher_crop";
  MinecraftBlockTypes22["PitcherPlant"] = "minecraft:pitcher_plant";
  MinecraftBlockTypes22["PlayerHead"] = "minecraft:player_head";
  MinecraftBlockTypes22["Podzol"] = "minecraft:podzol";
  MinecraftBlockTypes22["PointedDripstone"] = "minecraft:pointed_dripstone";
  MinecraftBlockTypes22["PolishedAndesite"] = "minecraft:polished_andesite";
  MinecraftBlockTypes22["PolishedAndesiteDoubleSlab"] = "minecraft:polished_andesite_double_slab";
  MinecraftBlockTypes22["PolishedAndesiteSlab"] = "minecraft:polished_andesite_slab";
  MinecraftBlockTypes22["PolishedAndesiteStairs"] = "minecraft:polished_andesite_stairs";
  MinecraftBlockTypes22["PolishedBasalt"] = "minecraft:polished_basalt";
  MinecraftBlockTypes22["PolishedBlackstone"] = "minecraft:polished_blackstone";
  MinecraftBlockTypes22["PolishedBlackstoneBrickDoubleSlab"] = "minecraft:polished_blackstone_brick_double_slab";
  MinecraftBlockTypes22["PolishedBlackstoneBrickSlab"] = "minecraft:polished_blackstone_brick_slab";
  MinecraftBlockTypes22["PolishedBlackstoneBrickStairs"] = "minecraft:polished_blackstone_brick_stairs";
  MinecraftBlockTypes22["PolishedBlackstoneBrickWall"] = "minecraft:polished_blackstone_brick_wall";
  MinecraftBlockTypes22["PolishedBlackstoneBricks"] = "minecraft:polished_blackstone_bricks";
  MinecraftBlockTypes22["PolishedBlackstoneButton"] = "minecraft:polished_blackstone_button";
  MinecraftBlockTypes22["PolishedBlackstoneDoubleSlab"] = "minecraft:polished_blackstone_double_slab";
  MinecraftBlockTypes22["PolishedBlackstonePressurePlate"] = "minecraft:polished_blackstone_pressure_plate";
  MinecraftBlockTypes22["PolishedBlackstoneSlab"] = "minecraft:polished_blackstone_slab";
  MinecraftBlockTypes22["PolishedBlackstoneStairs"] = "minecraft:polished_blackstone_stairs";
  MinecraftBlockTypes22["PolishedBlackstoneWall"] = "minecraft:polished_blackstone_wall";
  MinecraftBlockTypes22["PolishedDeepslate"] = "minecraft:polished_deepslate";
  MinecraftBlockTypes22["PolishedDeepslateDoubleSlab"] = "minecraft:polished_deepslate_double_slab";
  MinecraftBlockTypes22["PolishedDeepslateSlab"] = "minecraft:polished_deepslate_slab";
  MinecraftBlockTypes22["PolishedDeepslateStairs"] = "minecraft:polished_deepslate_stairs";
  MinecraftBlockTypes22["PolishedDeepslateWall"] = "minecraft:polished_deepslate_wall";
  MinecraftBlockTypes22["PolishedDiorite"] = "minecraft:polished_diorite";
  MinecraftBlockTypes22["PolishedDioriteDoubleSlab"] = "minecraft:polished_diorite_double_slab";
  MinecraftBlockTypes22["PolishedDioriteSlab"] = "minecraft:polished_diorite_slab";
  MinecraftBlockTypes22["PolishedDioriteStairs"] = "minecraft:polished_diorite_stairs";
  MinecraftBlockTypes22["PolishedGranite"] = "minecraft:polished_granite";
  MinecraftBlockTypes22["PolishedGraniteDoubleSlab"] = "minecraft:polished_granite_double_slab";
  MinecraftBlockTypes22["PolishedGraniteSlab"] = "minecraft:polished_granite_slab";
  MinecraftBlockTypes22["PolishedGraniteStairs"] = "minecraft:polished_granite_stairs";
  MinecraftBlockTypes22["PolishedTuff"] = "minecraft:polished_tuff";
  MinecraftBlockTypes22["PolishedTuffDoubleSlab"] = "minecraft:polished_tuff_double_slab";
  MinecraftBlockTypes22["PolishedTuffSlab"] = "minecraft:polished_tuff_slab";
  MinecraftBlockTypes22["PolishedTuffStairs"] = "minecraft:polished_tuff_stairs";
  MinecraftBlockTypes22["PolishedTuffWall"] = "minecraft:polished_tuff_wall";
  MinecraftBlockTypes22["Poppy"] = "minecraft:poppy";
  MinecraftBlockTypes22["Portal"] = "minecraft:portal";
  MinecraftBlockTypes22["Potatoes"] = "minecraft:potatoes";
  MinecraftBlockTypes22["PowderSnow"] = "minecraft:powder_snow";
  MinecraftBlockTypes22["PoweredComparator"] = "minecraft:powered_comparator";
  MinecraftBlockTypes22["PoweredRepeater"] = "minecraft:powered_repeater";
  MinecraftBlockTypes22["Prismarine"] = "minecraft:prismarine";
  MinecraftBlockTypes22["PrismarineBrickDoubleSlab"] = "minecraft:prismarine_brick_double_slab";
  MinecraftBlockTypes22["PrismarineBrickSlab"] = "minecraft:prismarine_brick_slab";
  MinecraftBlockTypes22["PrismarineBricks"] = "minecraft:prismarine_bricks";
  MinecraftBlockTypes22["PrismarineBricksStairs"] = "minecraft:prismarine_bricks_stairs";
  MinecraftBlockTypes22["PrismarineDoubleSlab"] = "minecraft:prismarine_double_slab";
  MinecraftBlockTypes22["PrismarineSlab"] = "minecraft:prismarine_slab";
  MinecraftBlockTypes22["PrismarineStairs"] = "minecraft:prismarine_stairs";
  MinecraftBlockTypes22["PrismarineWall"] = "minecraft:prismarine_wall";
  MinecraftBlockTypes22["Pumpkin"] = "minecraft:pumpkin";
  MinecraftBlockTypes22["PumpkinStem"] = "minecraft:pumpkin_stem";
  MinecraftBlockTypes22["PurpleCandle"] = "minecraft:purple_candle";
  MinecraftBlockTypes22["PurpleCandleCake"] = "minecraft:purple_candle_cake";
  MinecraftBlockTypes22["PurpleCarpet"] = "minecraft:purple_carpet";
  MinecraftBlockTypes22["PurpleConcrete"] = "minecraft:purple_concrete";
  MinecraftBlockTypes22["PurpleConcretePowder"] = "minecraft:purple_concrete_powder";
  MinecraftBlockTypes22["PurpleGlazedTerracotta"] = "minecraft:purple_glazed_terracotta";
  MinecraftBlockTypes22["PurpleShulkerBox"] = "minecraft:purple_shulker_box";
  MinecraftBlockTypes22["PurpleStainedGlass"] = "minecraft:purple_stained_glass";
  MinecraftBlockTypes22["PurpleStainedGlassPane"] = "minecraft:purple_stained_glass_pane";
  MinecraftBlockTypes22["PurpleTerracotta"] = "minecraft:purple_terracotta";
  MinecraftBlockTypes22["PurpleWool"] = "minecraft:purple_wool";
  MinecraftBlockTypes22["PurpurBlock"] = "minecraft:purpur_block";
  MinecraftBlockTypes22["PurpurDoubleSlab"] = "minecraft:purpur_double_slab";
  MinecraftBlockTypes22["PurpurPillar"] = "minecraft:purpur_pillar";
  MinecraftBlockTypes22["PurpurSlab"] = "minecraft:purpur_slab";
  MinecraftBlockTypes22["PurpurStairs"] = "minecraft:purpur_stairs";
  MinecraftBlockTypes22["QuartzBlock"] = "minecraft:quartz_block";
  MinecraftBlockTypes22["QuartzBricks"] = "minecraft:quartz_bricks";
  MinecraftBlockTypes22["QuartzDoubleSlab"] = "minecraft:quartz_double_slab";
  MinecraftBlockTypes22["QuartzOre"] = "minecraft:quartz_ore";
  MinecraftBlockTypes22["QuartzPillar"] = "minecraft:quartz_pillar";
  MinecraftBlockTypes22["QuartzSlab"] = "minecraft:quartz_slab";
  MinecraftBlockTypes22["QuartzStairs"] = "minecraft:quartz_stairs";
  MinecraftBlockTypes22["Rail"] = "minecraft:rail";
  MinecraftBlockTypes22["RawCopperBlock"] = "minecraft:raw_copper_block";
  MinecraftBlockTypes22["RawGoldBlock"] = "minecraft:raw_gold_block";
  MinecraftBlockTypes22["RawIronBlock"] = "minecraft:raw_iron_block";
  MinecraftBlockTypes22["RedCandle"] = "minecraft:red_candle";
  MinecraftBlockTypes22["RedCandleCake"] = "minecraft:red_candle_cake";
  MinecraftBlockTypes22["RedCarpet"] = "minecraft:red_carpet";
  MinecraftBlockTypes22["RedConcrete"] = "minecraft:red_concrete";
  MinecraftBlockTypes22["RedConcretePowder"] = "minecraft:red_concrete_powder";
  MinecraftBlockTypes22["RedGlazedTerracotta"] = "minecraft:red_glazed_terracotta";
  MinecraftBlockTypes22["RedMushroom"] = "minecraft:red_mushroom";
  MinecraftBlockTypes22["RedMushroomBlock"] = "minecraft:red_mushroom_block";
  MinecraftBlockTypes22["RedNetherBrick"] = "minecraft:red_nether_brick";
  MinecraftBlockTypes22["RedNetherBrickDoubleSlab"] = "minecraft:red_nether_brick_double_slab";
  MinecraftBlockTypes22["RedNetherBrickSlab"] = "minecraft:red_nether_brick_slab";
  MinecraftBlockTypes22["RedNetherBrickStairs"] = "minecraft:red_nether_brick_stairs";
  MinecraftBlockTypes22["RedNetherBrickWall"] = "minecraft:red_nether_brick_wall";
  MinecraftBlockTypes22["RedSand"] = "minecraft:red_sand";
  MinecraftBlockTypes22["RedSandstone"] = "minecraft:red_sandstone";
  MinecraftBlockTypes22["RedSandstoneDoubleSlab"] = "minecraft:red_sandstone_double_slab";
  MinecraftBlockTypes22["RedSandstoneSlab"] = "minecraft:red_sandstone_slab";
  MinecraftBlockTypes22["RedSandstoneStairs"] = "minecraft:red_sandstone_stairs";
  MinecraftBlockTypes22["RedSandstoneWall"] = "minecraft:red_sandstone_wall";
  MinecraftBlockTypes22["RedShulkerBox"] = "minecraft:red_shulker_box";
  MinecraftBlockTypes22["RedStainedGlass"] = "minecraft:red_stained_glass";
  MinecraftBlockTypes22["RedStainedGlassPane"] = "minecraft:red_stained_glass_pane";
  MinecraftBlockTypes22["RedTerracotta"] = "minecraft:red_terracotta";
  MinecraftBlockTypes22["RedTulip"] = "minecraft:red_tulip";
  MinecraftBlockTypes22["RedWool"] = "minecraft:red_wool";
  MinecraftBlockTypes22["RedstoneBlock"] = "minecraft:redstone_block";
  MinecraftBlockTypes22["RedstoneLamp"] = "minecraft:redstone_lamp";
  MinecraftBlockTypes22["RedstoneOre"] = "minecraft:redstone_ore";
  MinecraftBlockTypes22["RedstoneTorch"] = "minecraft:redstone_torch";
  MinecraftBlockTypes22["RedstoneWire"] = "minecraft:redstone_wire";
  MinecraftBlockTypes22["Reeds"] = "minecraft:reeds";
  MinecraftBlockTypes22["ReinforcedDeepslate"] = "minecraft:reinforced_deepslate";
  MinecraftBlockTypes22["RepeatingCommandBlock"] = "minecraft:repeating_command_block";
  MinecraftBlockTypes22["ResinBlock"] = "minecraft:resin_block";
  MinecraftBlockTypes22["ResinBrickDoubleSlab"] = "minecraft:resin_brick_double_slab";
  MinecraftBlockTypes22["ResinBrickSlab"] = "minecraft:resin_brick_slab";
  MinecraftBlockTypes22["ResinBrickStairs"] = "minecraft:resin_brick_stairs";
  MinecraftBlockTypes22["ResinBrickWall"] = "minecraft:resin_brick_wall";
  MinecraftBlockTypes22["ResinBricks"] = "minecraft:resin_bricks";
  MinecraftBlockTypes22["ResinClump"] = "minecraft:resin_clump";
  MinecraftBlockTypes22["RespawnAnchor"] = "minecraft:respawn_anchor";
  MinecraftBlockTypes22["RoseBush"] = "minecraft:rose_bush";
  MinecraftBlockTypes22["Sand"] = "minecraft:sand";
  MinecraftBlockTypes22["Sandstone"] = "minecraft:sandstone";
  MinecraftBlockTypes22["SandstoneDoubleSlab"] = "minecraft:sandstone_double_slab";
  MinecraftBlockTypes22["SandstoneSlab"] = "minecraft:sandstone_slab";
  MinecraftBlockTypes22["SandstoneStairs"] = "minecraft:sandstone_stairs";
  MinecraftBlockTypes22["SandstoneWall"] = "minecraft:sandstone_wall";
  MinecraftBlockTypes22["Scaffolding"] = "minecraft:scaffolding";
  MinecraftBlockTypes22["Sculk"] = "minecraft:sculk";
  MinecraftBlockTypes22["SculkCatalyst"] = "minecraft:sculk_catalyst";
  MinecraftBlockTypes22["SculkSensor"] = "minecraft:sculk_sensor";
  MinecraftBlockTypes22["SculkShrieker"] = "minecraft:sculk_shrieker";
  MinecraftBlockTypes22["SculkVein"] = "minecraft:sculk_vein";
  MinecraftBlockTypes22["SeaLantern"] = "minecraft:sea_lantern";
  MinecraftBlockTypes22["SeaPickle"] = "minecraft:sea_pickle";
  MinecraftBlockTypes22["Seagrass"] = "minecraft:seagrass";
  MinecraftBlockTypes22["ShortDryGrass"] = "minecraft:short_dry_grass";
  MinecraftBlockTypes22["ShortGrass"] = "minecraft:short_grass";
  MinecraftBlockTypes22["Shroomlight"] = "minecraft:shroomlight";
  MinecraftBlockTypes22["SilverGlazedTerracotta"] = "minecraft:silver_glazed_terracotta";
  MinecraftBlockTypes22["SkeletonSkull"] = "minecraft:skeleton_skull";
  MinecraftBlockTypes22["Slime"] = "minecraft:slime";
  MinecraftBlockTypes22["SmallAmethystBud"] = "minecraft:small_amethyst_bud";
  MinecraftBlockTypes22["SmallDripleafBlock"] = "minecraft:small_dripleaf_block";
  MinecraftBlockTypes22["SmithingTable"] = "minecraft:smithing_table";
  MinecraftBlockTypes22["Smoker"] = "minecraft:smoker";
  MinecraftBlockTypes22["SmoothBasalt"] = "minecraft:smooth_basalt";
  MinecraftBlockTypes22["SmoothQuartz"] = "minecraft:smooth_quartz";
  MinecraftBlockTypes22["SmoothQuartzDoubleSlab"] = "minecraft:smooth_quartz_double_slab";
  MinecraftBlockTypes22["SmoothQuartzSlab"] = "minecraft:smooth_quartz_slab";
  MinecraftBlockTypes22["SmoothQuartzStairs"] = "minecraft:smooth_quartz_stairs";
  MinecraftBlockTypes22["SmoothRedSandstone"] = "minecraft:smooth_red_sandstone";
  MinecraftBlockTypes22["SmoothRedSandstoneDoubleSlab"] = "minecraft:smooth_red_sandstone_double_slab";
  MinecraftBlockTypes22["SmoothRedSandstoneSlab"] = "minecraft:smooth_red_sandstone_slab";
  MinecraftBlockTypes22["SmoothRedSandstoneStairs"] = "minecraft:smooth_red_sandstone_stairs";
  MinecraftBlockTypes22["SmoothSandstone"] = "minecraft:smooth_sandstone";
  MinecraftBlockTypes22["SmoothSandstoneDoubleSlab"] = "minecraft:smooth_sandstone_double_slab";
  MinecraftBlockTypes22["SmoothSandstoneSlab"] = "minecraft:smooth_sandstone_slab";
  MinecraftBlockTypes22["SmoothSandstoneStairs"] = "minecraft:smooth_sandstone_stairs";
  MinecraftBlockTypes22["SmoothStone"] = "minecraft:smooth_stone";
  MinecraftBlockTypes22["SmoothStoneDoubleSlab"] = "minecraft:smooth_stone_double_slab";
  MinecraftBlockTypes22["SmoothStoneSlab"] = "minecraft:smooth_stone_slab";
  MinecraftBlockTypes22["SnifferEgg"] = "minecraft:sniffer_egg";
  MinecraftBlockTypes22["Snow"] = "minecraft:snow";
  MinecraftBlockTypes22["SnowLayer"] = "minecraft:snow_layer";
  MinecraftBlockTypes22["SoulCampfire"] = "minecraft:soul_campfire";
  MinecraftBlockTypes22["SoulFire"] = "minecraft:soul_fire";
  MinecraftBlockTypes22["SoulLantern"] = "minecraft:soul_lantern";
  MinecraftBlockTypes22["SoulSand"] = "minecraft:soul_sand";
  MinecraftBlockTypes22["SoulSoil"] = "minecraft:soul_soil";
  MinecraftBlockTypes22["SoulTorch"] = "minecraft:soul_torch";
  MinecraftBlockTypes22["Sponge"] = "minecraft:sponge";
  MinecraftBlockTypes22["SporeBlossom"] = "minecraft:spore_blossom";
  MinecraftBlockTypes22["SpruceButton"] = "minecraft:spruce_button";
  MinecraftBlockTypes22["SpruceDoor"] = "minecraft:spruce_door";
  MinecraftBlockTypes22["SpruceDoubleSlab"] = "minecraft:spruce_double_slab";
  MinecraftBlockTypes22["SpruceFence"] = "minecraft:spruce_fence";
  MinecraftBlockTypes22["SpruceFenceGate"] = "minecraft:spruce_fence_gate";
  MinecraftBlockTypes22["SpruceHangingSign"] = "minecraft:spruce_hanging_sign";
  MinecraftBlockTypes22["SpruceLeaves"] = "minecraft:spruce_leaves";
  MinecraftBlockTypes22["SpruceLog"] = "minecraft:spruce_log";
  MinecraftBlockTypes22["SprucePlanks"] = "minecraft:spruce_planks";
  MinecraftBlockTypes22["SprucePressurePlate"] = "minecraft:spruce_pressure_plate";
  MinecraftBlockTypes22["SpruceSapling"] = "minecraft:spruce_sapling";
  MinecraftBlockTypes22["SpruceSlab"] = "minecraft:spruce_slab";
  MinecraftBlockTypes22["SpruceStairs"] = "minecraft:spruce_stairs";
  MinecraftBlockTypes22["SpruceStandingSign"] = "minecraft:spruce_standing_sign";
  MinecraftBlockTypes22["SpruceTrapdoor"] = "minecraft:spruce_trapdoor";
  MinecraftBlockTypes22["SpruceWallSign"] = "minecraft:spruce_wall_sign";
  MinecraftBlockTypes22["SpruceWood"] = "minecraft:spruce_wood";
  MinecraftBlockTypes22["StandingBanner"] = "minecraft:standing_banner";
  MinecraftBlockTypes22["StandingSign"] = "minecraft:standing_sign";
  MinecraftBlockTypes22["StickyPiston"] = "minecraft:sticky_piston";
  MinecraftBlockTypes22["StickyPistonArmCollision"] = "minecraft:sticky_piston_arm_collision";
  MinecraftBlockTypes22["Stone"] = "minecraft:stone";
  MinecraftBlockTypes22["StoneBrickDoubleSlab"] = "minecraft:stone_brick_double_slab";
  MinecraftBlockTypes22["StoneBrickSlab"] = "minecraft:stone_brick_slab";
  MinecraftBlockTypes22["StoneBrickStairs"] = "minecraft:stone_brick_stairs";
  MinecraftBlockTypes22["StoneBrickWall"] = "minecraft:stone_brick_wall";
  MinecraftBlockTypes22["StoneBricks"] = "minecraft:stone_bricks";
  MinecraftBlockTypes22["StoneButton"] = "minecraft:stone_button";
  MinecraftBlockTypes22["StonePressurePlate"] = "minecraft:stone_pressure_plate";
  MinecraftBlockTypes22["StoneStairs"] = "minecraft:stone_stairs";
  MinecraftBlockTypes22["StonecutterBlock"] = "minecraft:stonecutter_block";
  MinecraftBlockTypes22["StrippedAcaciaLog"] = "minecraft:stripped_acacia_log";
  MinecraftBlockTypes22["StrippedAcaciaWood"] = "minecraft:stripped_acacia_wood";
  MinecraftBlockTypes22["StrippedBambooBlock"] = "minecraft:stripped_bamboo_block";
  MinecraftBlockTypes22["StrippedBirchLog"] = "minecraft:stripped_birch_log";
  MinecraftBlockTypes22["StrippedBirchWood"] = "minecraft:stripped_birch_wood";
  MinecraftBlockTypes22["StrippedCherryLog"] = "minecraft:stripped_cherry_log";
  MinecraftBlockTypes22["StrippedCherryWood"] = "minecraft:stripped_cherry_wood";
  MinecraftBlockTypes22["StrippedCrimsonHyphae"] = "minecraft:stripped_crimson_hyphae";
  MinecraftBlockTypes22["StrippedCrimsonStem"] = "minecraft:stripped_crimson_stem";
  MinecraftBlockTypes22["StrippedDarkOakLog"] = "minecraft:stripped_dark_oak_log";
  MinecraftBlockTypes22["StrippedDarkOakWood"] = "minecraft:stripped_dark_oak_wood";
  MinecraftBlockTypes22["StrippedJungleLog"] = "minecraft:stripped_jungle_log";
  MinecraftBlockTypes22["StrippedJungleWood"] = "minecraft:stripped_jungle_wood";
  MinecraftBlockTypes22["StrippedMangroveLog"] = "minecraft:stripped_mangrove_log";
  MinecraftBlockTypes22["StrippedMangroveWood"] = "minecraft:stripped_mangrove_wood";
  MinecraftBlockTypes22["StrippedOakLog"] = "minecraft:stripped_oak_log";
  MinecraftBlockTypes22["StrippedOakWood"] = "minecraft:stripped_oak_wood";
  MinecraftBlockTypes22["StrippedPaleOakLog"] = "minecraft:stripped_pale_oak_log";
  MinecraftBlockTypes22["StrippedPaleOakWood"] = "minecraft:stripped_pale_oak_wood";
  MinecraftBlockTypes22["StrippedSpruceLog"] = "minecraft:stripped_spruce_log";
  MinecraftBlockTypes22["StrippedSpruceWood"] = "minecraft:stripped_spruce_wood";
  MinecraftBlockTypes22["StrippedWarpedHyphae"] = "minecraft:stripped_warped_hyphae";
  MinecraftBlockTypes22["StrippedWarpedStem"] = "minecraft:stripped_warped_stem";
  MinecraftBlockTypes22["StructureBlock"] = "minecraft:structure_block";
  MinecraftBlockTypes22["StructureVoid"] = "minecraft:structure_void";
  MinecraftBlockTypes22["Sunflower"] = "minecraft:sunflower";
  MinecraftBlockTypes22["SuspiciousGravel"] = "minecraft:suspicious_gravel";
  MinecraftBlockTypes22["SuspiciousSand"] = "minecraft:suspicious_sand";
  MinecraftBlockTypes22["SweetBerryBush"] = "minecraft:sweet_berry_bush";
  MinecraftBlockTypes22["TallDryGrass"] = "minecraft:tall_dry_grass";
  MinecraftBlockTypes22["TallGrass"] = "minecraft:tall_grass";
  MinecraftBlockTypes22["Target"] = "minecraft:target";
  MinecraftBlockTypes22["TintedGlass"] = "minecraft:tinted_glass";
  MinecraftBlockTypes22["Tnt"] = "minecraft:tnt";
  MinecraftBlockTypes22["Torch"] = "minecraft:torch";
  MinecraftBlockTypes22["Torchflower"] = "minecraft:torchflower";
  MinecraftBlockTypes22["TorchflowerCrop"] = "minecraft:torchflower_crop";
  MinecraftBlockTypes22["Trapdoor"] = "minecraft:trapdoor";
  MinecraftBlockTypes22["TrappedChest"] = "minecraft:trapped_chest";
  MinecraftBlockTypes22["TrialSpawner"] = "minecraft:trial_spawner";
  MinecraftBlockTypes22["TripWire"] = "minecraft:trip_wire";
  MinecraftBlockTypes22["TripwireHook"] = "minecraft:tripwire_hook";
  MinecraftBlockTypes22["TubeCoral"] = "minecraft:tube_coral";
  MinecraftBlockTypes22["TubeCoralBlock"] = "minecraft:tube_coral_block";
  MinecraftBlockTypes22["TubeCoralFan"] = "minecraft:tube_coral_fan";
  MinecraftBlockTypes22["TubeCoralWallFan"] = "minecraft:tube_coral_wall_fan";
  MinecraftBlockTypes22["Tuff"] = "minecraft:tuff";
  MinecraftBlockTypes22["TuffBrickDoubleSlab"] = "minecraft:tuff_brick_double_slab";
  MinecraftBlockTypes22["TuffBrickSlab"] = "minecraft:tuff_brick_slab";
  MinecraftBlockTypes22["TuffBrickStairs"] = "minecraft:tuff_brick_stairs";
  MinecraftBlockTypes22["TuffBrickWall"] = "minecraft:tuff_brick_wall";
  MinecraftBlockTypes22["TuffBricks"] = "minecraft:tuff_bricks";
  MinecraftBlockTypes22["TuffDoubleSlab"] = "minecraft:tuff_double_slab";
  MinecraftBlockTypes22["TuffSlab"] = "minecraft:tuff_slab";
  MinecraftBlockTypes22["TuffStairs"] = "minecraft:tuff_stairs";
  MinecraftBlockTypes22["TuffWall"] = "minecraft:tuff_wall";
  MinecraftBlockTypes22["TurtleEgg"] = "minecraft:turtle_egg";
  MinecraftBlockTypes22["TwistingVines"] = "minecraft:twisting_vines";
  MinecraftBlockTypes22["UnderwaterTnt"] = "minecraft:underwater_tnt";
  MinecraftBlockTypes22["UnderwaterTorch"] = "minecraft:underwater_torch";
  MinecraftBlockTypes22["UndyedShulkerBox"] = "minecraft:undyed_shulker_box";
  MinecraftBlockTypes22["Unknown"] = "minecraft:unknown";
  MinecraftBlockTypes22["UnlitRedstoneTorch"] = "minecraft:unlit_redstone_torch";
  MinecraftBlockTypes22["UnpoweredComparator"] = "minecraft:unpowered_comparator";
  MinecraftBlockTypes22["UnpoweredRepeater"] = "minecraft:unpowered_repeater";
  MinecraftBlockTypes22["Vault"] = "minecraft:vault";
  MinecraftBlockTypes22["VerdantFroglight"] = "minecraft:verdant_froglight";
  MinecraftBlockTypes22["Vine"] = "minecraft:vine";
  MinecraftBlockTypes22["WallBanner"] = "minecraft:wall_banner";
  MinecraftBlockTypes22["WallSign"] = "minecraft:wall_sign";
  MinecraftBlockTypes22["WarpedButton"] = "minecraft:warped_button";
  MinecraftBlockTypes22["WarpedDoor"] = "minecraft:warped_door";
  MinecraftBlockTypes22["WarpedDoubleSlab"] = "minecraft:warped_double_slab";
  MinecraftBlockTypes22["WarpedFence"] = "minecraft:warped_fence";
  MinecraftBlockTypes22["WarpedFenceGate"] = "minecraft:warped_fence_gate";
  MinecraftBlockTypes22["WarpedFungus"] = "minecraft:warped_fungus";
  MinecraftBlockTypes22["WarpedHangingSign"] = "minecraft:warped_hanging_sign";
  MinecraftBlockTypes22["WarpedHyphae"] = "minecraft:warped_hyphae";
  MinecraftBlockTypes22["WarpedNylium"] = "minecraft:warped_nylium";
  MinecraftBlockTypes22["WarpedPlanks"] = "minecraft:warped_planks";
  MinecraftBlockTypes22["WarpedPressurePlate"] = "minecraft:warped_pressure_plate";
  MinecraftBlockTypes22["WarpedRoots"] = "minecraft:warped_roots";
  MinecraftBlockTypes22["WarpedSlab"] = "minecraft:warped_slab";
  MinecraftBlockTypes22["WarpedStairs"] = "minecraft:warped_stairs";
  MinecraftBlockTypes22["WarpedStandingSign"] = "minecraft:warped_standing_sign";
  MinecraftBlockTypes22["WarpedStem"] = "minecraft:warped_stem";
  MinecraftBlockTypes22["WarpedTrapdoor"] = "minecraft:warped_trapdoor";
  MinecraftBlockTypes22["WarpedWallSign"] = "minecraft:warped_wall_sign";
  MinecraftBlockTypes22["WarpedWartBlock"] = "minecraft:warped_wart_block";
  MinecraftBlockTypes22["Water"] = "minecraft:water";
  MinecraftBlockTypes22["Waterlily"] = "minecraft:waterlily";
  MinecraftBlockTypes22["WaxedChiseledCopper"] = "minecraft:waxed_chiseled_copper";
  MinecraftBlockTypes22["WaxedCopper"] = "minecraft:waxed_copper";
  MinecraftBlockTypes22["WaxedCopperBulb"] = "minecraft:waxed_copper_bulb";
  MinecraftBlockTypes22["WaxedCopperDoor"] = "minecraft:waxed_copper_door";
  MinecraftBlockTypes22["WaxedCopperGrate"] = "minecraft:waxed_copper_grate";
  MinecraftBlockTypes22["WaxedCopperTrapdoor"] = "minecraft:waxed_copper_trapdoor";
  MinecraftBlockTypes22["WaxedCutCopper"] = "minecraft:waxed_cut_copper";
  MinecraftBlockTypes22["WaxedCutCopperSlab"] = "minecraft:waxed_cut_copper_slab";
  MinecraftBlockTypes22["WaxedCutCopperStairs"] = "minecraft:waxed_cut_copper_stairs";
  MinecraftBlockTypes22["WaxedDoubleCutCopperSlab"] = "minecraft:waxed_double_cut_copper_slab";
  MinecraftBlockTypes22["WaxedExposedChiseledCopper"] = "minecraft:waxed_exposed_chiseled_copper";
  MinecraftBlockTypes22["WaxedExposedCopper"] = "minecraft:waxed_exposed_copper";
  MinecraftBlockTypes22["WaxedExposedCopperBulb"] = "minecraft:waxed_exposed_copper_bulb";
  MinecraftBlockTypes22["WaxedExposedCopperDoor"] = "minecraft:waxed_exposed_copper_door";
  MinecraftBlockTypes22["WaxedExposedCopperGrate"] = "minecraft:waxed_exposed_copper_grate";
  MinecraftBlockTypes22["WaxedExposedCopperTrapdoor"] = "minecraft:waxed_exposed_copper_trapdoor";
  MinecraftBlockTypes22["WaxedExposedCutCopper"] = "minecraft:waxed_exposed_cut_copper";
  MinecraftBlockTypes22["WaxedExposedCutCopperSlab"] = "minecraft:waxed_exposed_cut_copper_slab";
  MinecraftBlockTypes22["WaxedExposedCutCopperStairs"] = "minecraft:waxed_exposed_cut_copper_stairs";
  MinecraftBlockTypes22["WaxedExposedDoubleCutCopperSlab"] = "minecraft:waxed_exposed_double_cut_copper_slab";
  MinecraftBlockTypes22["WaxedOxidizedChiseledCopper"] = "minecraft:waxed_oxidized_chiseled_copper";
  MinecraftBlockTypes22["WaxedOxidizedCopper"] = "minecraft:waxed_oxidized_copper";
  MinecraftBlockTypes22["WaxedOxidizedCopperBulb"] = "minecraft:waxed_oxidized_copper_bulb";
  MinecraftBlockTypes22["WaxedOxidizedCopperDoor"] = "minecraft:waxed_oxidized_copper_door";
  MinecraftBlockTypes22["WaxedOxidizedCopperGrate"] = "minecraft:waxed_oxidized_copper_grate";
  MinecraftBlockTypes22["WaxedOxidizedCopperTrapdoor"] = "minecraft:waxed_oxidized_copper_trapdoor";
  MinecraftBlockTypes22["WaxedOxidizedCutCopper"] = "minecraft:waxed_oxidized_cut_copper";
  MinecraftBlockTypes22["WaxedOxidizedCutCopperSlab"] = "minecraft:waxed_oxidized_cut_copper_slab";
  MinecraftBlockTypes22["WaxedOxidizedCutCopperStairs"] = "minecraft:waxed_oxidized_cut_copper_stairs";
  MinecraftBlockTypes22["WaxedOxidizedDoubleCutCopperSlab"] = "minecraft:waxed_oxidized_double_cut_copper_slab";
  MinecraftBlockTypes22["WaxedWeatheredChiseledCopper"] = "minecraft:waxed_weathered_chiseled_copper";
  MinecraftBlockTypes22["WaxedWeatheredCopper"] = "minecraft:waxed_weathered_copper";
  MinecraftBlockTypes22["WaxedWeatheredCopperBulb"] = "minecraft:waxed_weathered_copper_bulb";
  MinecraftBlockTypes22["WaxedWeatheredCopperDoor"] = "minecraft:waxed_weathered_copper_door";
  MinecraftBlockTypes22["WaxedWeatheredCopperGrate"] = "minecraft:waxed_weathered_copper_grate";
  MinecraftBlockTypes22["WaxedWeatheredCopperTrapdoor"] = "minecraft:waxed_weathered_copper_trapdoor";
  MinecraftBlockTypes22["WaxedWeatheredCutCopper"] = "minecraft:waxed_weathered_cut_copper";
  MinecraftBlockTypes22["WaxedWeatheredCutCopperSlab"] = "minecraft:waxed_weathered_cut_copper_slab";
  MinecraftBlockTypes22["WaxedWeatheredCutCopperStairs"] = "minecraft:waxed_weathered_cut_copper_stairs";
  MinecraftBlockTypes22["WaxedWeatheredDoubleCutCopperSlab"] = "minecraft:waxed_weathered_double_cut_copper_slab";
  MinecraftBlockTypes22["WeatheredChiseledCopper"] = "minecraft:weathered_chiseled_copper";
  MinecraftBlockTypes22["WeatheredCopper"] = "minecraft:weathered_copper";
  MinecraftBlockTypes22["WeatheredCopperBulb"] = "minecraft:weathered_copper_bulb";
  MinecraftBlockTypes22["WeatheredCopperDoor"] = "minecraft:weathered_copper_door";
  MinecraftBlockTypes22["WeatheredCopperGrate"] = "minecraft:weathered_copper_grate";
  MinecraftBlockTypes22["WeatheredCopperTrapdoor"] = "minecraft:weathered_copper_trapdoor";
  MinecraftBlockTypes22["WeatheredCutCopper"] = "minecraft:weathered_cut_copper";
  MinecraftBlockTypes22["WeatheredCutCopperSlab"] = "minecraft:weathered_cut_copper_slab";
  MinecraftBlockTypes22["WeatheredCutCopperStairs"] = "minecraft:weathered_cut_copper_stairs";
  MinecraftBlockTypes22["WeatheredDoubleCutCopperSlab"] = "minecraft:weathered_double_cut_copper_slab";
  MinecraftBlockTypes22["Web"] = "minecraft:web";
  MinecraftBlockTypes22["WeepingVines"] = "minecraft:weeping_vines";
  MinecraftBlockTypes22["WetSponge"] = "minecraft:wet_sponge";
  MinecraftBlockTypes22["Wheat"] = "minecraft:wheat";
  MinecraftBlockTypes22["WhiteCandle"] = "minecraft:white_candle";
  MinecraftBlockTypes22["WhiteCandleCake"] = "minecraft:white_candle_cake";
  MinecraftBlockTypes22["WhiteCarpet"] = "minecraft:white_carpet";
  MinecraftBlockTypes22["WhiteConcrete"] = "minecraft:white_concrete";
  MinecraftBlockTypes22["WhiteConcretePowder"] = "minecraft:white_concrete_powder";
  MinecraftBlockTypes22["WhiteGlazedTerracotta"] = "minecraft:white_glazed_terracotta";
  MinecraftBlockTypes22["WhiteShulkerBox"] = "minecraft:white_shulker_box";
  MinecraftBlockTypes22["WhiteStainedGlass"] = "minecraft:white_stained_glass";
  MinecraftBlockTypes22["WhiteStainedGlassPane"] = "minecraft:white_stained_glass_pane";
  MinecraftBlockTypes22["WhiteTerracotta"] = "minecraft:white_terracotta";
  MinecraftBlockTypes22["WhiteTulip"] = "minecraft:white_tulip";
  MinecraftBlockTypes22["WhiteWool"] = "minecraft:white_wool";
  MinecraftBlockTypes22["Wildflowers"] = "minecraft:wildflowers";
  MinecraftBlockTypes22["WitherRose"] = "minecraft:wither_rose";
  MinecraftBlockTypes22["WitherSkeletonSkull"] = "minecraft:wither_skeleton_skull";
  MinecraftBlockTypes22["WoodenButton"] = "minecraft:wooden_button";
  MinecraftBlockTypes22["WoodenDoor"] = "minecraft:wooden_door";
  MinecraftBlockTypes22["WoodenPressurePlate"] = "minecraft:wooden_pressure_plate";
  MinecraftBlockTypes22["YellowCandle"] = "minecraft:yellow_candle";
  MinecraftBlockTypes22["YellowCandleCake"] = "minecraft:yellow_candle_cake";
  MinecraftBlockTypes22["YellowCarpet"] = "minecraft:yellow_carpet";
  MinecraftBlockTypes22["YellowConcrete"] = "minecraft:yellow_concrete";
  MinecraftBlockTypes22["YellowConcretePowder"] = "minecraft:yellow_concrete_powder";
  MinecraftBlockTypes22["YellowGlazedTerracotta"] = "minecraft:yellow_glazed_terracotta";
  MinecraftBlockTypes22["YellowShulkerBox"] = "minecraft:yellow_shulker_box";
  MinecraftBlockTypes22["YellowStainedGlass"] = "minecraft:yellow_stained_glass";
  MinecraftBlockTypes22["YellowStainedGlassPane"] = "minecraft:yellow_stained_glass_pane";
  MinecraftBlockTypes22["YellowTerracotta"] = "minecraft:yellow_terracotta";
  MinecraftBlockTypes22["YellowWool"] = "minecraft:yellow_wool";
  MinecraftBlockTypes22["ZombieHead"] = "minecraft:zombie_head";
  return MinecraftBlockTypes22;
})(MinecraftBlockTypes || {});
var MinecraftCameraPresetsTypes = ((MinecraftCameraPresetsTypes2) => {
  MinecraftCameraPresetsTypes2["FirstPerson"] = "minecraft:first_person";
  MinecraftCameraPresetsTypes2["FixedBoom"] = "minecraft:fixed_boom";
  MinecraftCameraPresetsTypes2["FollowOrbit"] = "minecraft:follow_orbit";
  MinecraftCameraPresetsTypes2["Free"] = "minecraft:free";
  MinecraftCameraPresetsTypes2["ThirdPerson"] = "minecraft:third_person";
  MinecraftCameraPresetsTypes2["ThirdPersonFront"] = "minecraft:third_person_front";
  return MinecraftCameraPresetsTypes2;
})(MinecraftCameraPresetsTypes || {});
var MinecraftCooldownCategoryTypes = ((MinecraftCooldownCategoryTypes2) => {
  MinecraftCooldownCategoryTypes2["Chorusfruit"] = "minecraft:chorusfruit";
  MinecraftCooldownCategoryTypes2["EnderPearl"] = "minecraft:ender_pearl";
  MinecraftCooldownCategoryTypes2["GoatHorn"] = "minecraft:goat_horn";
  MinecraftCooldownCategoryTypes2["Shield"] = "minecraft:shield";
  MinecraftCooldownCategoryTypes2["WindCharge"] = "minecraft:wind_charge";
  return MinecraftCooldownCategoryTypes2;
})(MinecraftCooldownCategoryTypes || {});
var MinecraftDimensionTypes = ((MinecraftDimensionTypes22) => {
  MinecraftDimensionTypes22["Nether"] = "minecraft:nether";
  MinecraftDimensionTypes22["Overworld"] = "minecraft:overworld";
  MinecraftDimensionTypes22["TheEnd"] = "minecraft:the_end";
  return MinecraftDimensionTypes22;
})(MinecraftDimensionTypes || {});
var MinecraftEffectTypes = ((MinecraftEffectTypes2) => {
  MinecraftEffectTypes2["Absorption"] = "minecraft:absorption";
  MinecraftEffectTypes2["BadOmen"] = "minecraft:bad_omen";
  MinecraftEffectTypes2["Blindness"] = "minecraft:blindness";
  MinecraftEffectTypes2["ConduitPower"] = "minecraft:conduit_power";
  MinecraftEffectTypes2["Darkness"] = "minecraft:darkness";
  MinecraftEffectTypes2["FatalPoison"] = "minecraft:fatal_poison";
  MinecraftEffectTypes2["FireResistance"] = "minecraft:fire_resistance";
  MinecraftEffectTypes2["Haste"] = "minecraft:haste";
  MinecraftEffectTypes2["HealthBoost"] = "minecraft:health_boost";
  MinecraftEffectTypes2["Hunger"] = "minecraft:hunger";
  MinecraftEffectTypes2["Infested"] = "minecraft:infested";
  MinecraftEffectTypes2["InstantDamage"] = "minecraft:instant_damage";
  MinecraftEffectTypes2["InstantHealth"] = "minecraft:instant_health";
  MinecraftEffectTypes2["Invisibility"] = "minecraft:invisibility";
  MinecraftEffectTypes2["JumpBoost"] = "minecraft:jump_boost";
  MinecraftEffectTypes2["Levitation"] = "minecraft:levitation";
  MinecraftEffectTypes2["MiningFatigue"] = "minecraft:mining_fatigue";
  MinecraftEffectTypes2["Nausea"] = "minecraft:nausea";
  MinecraftEffectTypes2["NightVision"] = "minecraft:night_vision";
  MinecraftEffectTypes2["Oozing"] = "minecraft:oozing";
  MinecraftEffectTypes2["Poison"] = "minecraft:poison";
  MinecraftEffectTypes2["RaidOmen"] = "minecraft:raid_omen";
  MinecraftEffectTypes2["Regeneration"] = "minecraft:regeneration";
  MinecraftEffectTypes2["Resistance"] = "minecraft:resistance";
  MinecraftEffectTypes2["Saturation"] = "minecraft:saturation";
  MinecraftEffectTypes2["SlowFalling"] = "minecraft:slow_falling";
  MinecraftEffectTypes2["Slowness"] = "minecraft:slowness";
  MinecraftEffectTypes2["Speed"] = "minecraft:speed";
  MinecraftEffectTypes2["Strength"] = "minecraft:strength";
  MinecraftEffectTypes2["TrialOmen"] = "minecraft:trial_omen";
  MinecraftEffectTypes2["VillageHero"] = "minecraft:village_hero";
  MinecraftEffectTypes2["WaterBreathing"] = "minecraft:water_breathing";
  MinecraftEffectTypes2["Weakness"] = "minecraft:weakness";
  MinecraftEffectTypes2["Weaving"] = "minecraft:weaving";
  MinecraftEffectTypes2["WindCharged"] = "minecraft:wind_charged";
  MinecraftEffectTypes2["Wither"] = "minecraft:wither";
  return MinecraftEffectTypes2;
})(MinecraftEffectTypes || {});
var MinecraftEnchantmentTypes = ((MinecraftEnchantmentTypes2) => {
  MinecraftEnchantmentTypes2["AquaAffinity"] = "minecraft:aqua_affinity";
  MinecraftEnchantmentTypes2["BaneOfArthropods"] = "minecraft:bane_of_arthropods";
  MinecraftEnchantmentTypes2["Binding"] = "minecraft:binding";
  MinecraftEnchantmentTypes2["BlastProtection"] = "minecraft:blast_protection";
  MinecraftEnchantmentTypes2["BowInfinity"] = "minecraft:infinity";
  MinecraftEnchantmentTypes2["Breach"] = "minecraft:breach";
  MinecraftEnchantmentTypes2["Channeling"] = "minecraft:channeling";
  MinecraftEnchantmentTypes2["Density"] = "minecraft:density";
  MinecraftEnchantmentTypes2["DepthStrider"] = "minecraft:depth_strider";
  MinecraftEnchantmentTypes2["Efficiency"] = "minecraft:efficiency";
  MinecraftEnchantmentTypes2["FeatherFalling"] = "minecraft:feather_falling";
  MinecraftEnchantmentTypes2["FireAspect"] = "minecraft:fire_aspect";
  MinecraftEnchantmentTypes2["FireProtection"] = "minecraft:fire_protection";
  MinecraftEnchantmentTypes2["Flame"] = "minecraft:flame";
  MinecraftEnchantmentTypes2["Fortune"] = "minecraft:fortune";
  MinecraftEnchantmentTypes2["FrostWalker"] = "minecraft:frost_walker";
  MinecraftEnchantmentTypes2["Impaling"] = "minecraft:impaling";
  MinecraftEnchantmentTypes2["Knockback"] = "minecraft:knockback";
  MinecraftEnchantmentTypes2["Looting"] = "minecraft:looting";
  MinecraftEnchantmentTypes2["Loyalty"] = "minecraft:loyalty";
  MinecraftEnchantmentTypes2["LuckOfTheSea"] = "minecraft:luck_of_the_sea";
  MinecraftEnchantmentTypes2["Lure"] = "minecraft:lure";
  MinecraftEnchantmentTypes2["Mending"] = "minecraft:mending";
  MinecraftEnchantmentTypes2["Multishot"] = "minecraft:multishot";
  MinecraftEnchantmentTypes2["Piercing"] = "minecraft:piercing";
  MinecraftEnchantmentTypes2["Power"] = "minecraft:power";
  MinecraftEnchantmentTypes2["ProjectileProtection"] = "minecraft:projectile_protection";
  MinecraftEnchantmentTypes2["Protection"] = "minecraft:protection";
  MinecraftEnchantmentTypes2["Punch"] = "minecraft:punch";
  MinecraftEnchantmentTypes2["QuickCharge"] = "minecraft:quick_charge";
  MinecraftEnchantmentTypes2["Respiration"] = "minecraft:respiration";
  MinecraftEnchantmentTypes2["Riptide"] = "minecraft:riptide";
  MinecraftEnchantmentTypes2["Sharpness"] = "minecraft:sharpness";
  MinecraftEnchantmentTypes2["SilkTouch"] = "minecraft:silk_touch";
  MinecraftEnchantmentTypes2["Smite"] = "minecraft:smite";
  MinecraftEnchantmentTypes2["SoulSpeed"] = "minecraft:soul_speed";
  MinecraftEnchantmentTypes2["SwiftSneak"] = "minecraft:swift_sneak";
  MinecraftEnchantmentTypes2["Thorns"] = "minecraft:thorns";
  MinecraftEnchantmentTypes2["Unbreaking"] = "minecraft:unbreaking";
  MinecraftEnchantmentTypes2["Vanishing"] = "minecraft:vanishing";
  MinecraftEnchantmentTypes2["WindBurst"] = "minecraft:wind_burst";
  return MinecraftEnchantmentTypes2;
})(MinecraftEnchantmentTypes || {});
var MinecraftEntityTypes = ((MinecraftEntityTypes2) => {
  MinecraftEntityTypes2["Agent"] = "minecraft:agent";
  MinecraftEntityTypes2["Allay"] = "minecraft:allay";
  MinecraftEntityTypes2["AreaEffectCloud"] = "minecraft:area_effect_cloud";
  MinecraftEntityTypes2["Armadillo"] = "minecraft:armadillo";
  MinecraftEntityTypes2["ArmorStand"] = "minecraft:armor_stand";
  MinecraftEntityTypes2["Arrow"] = "minecraft:arrow";
  MinecraftEntityTypes2["Axolotl"] = "minecraft:axolotl";
  MinecraftEntityTypes2["Bat"] = "minecraft:bat";
  MinecraftEntityTypes2["Bee"] = "minecraft:bee";
  MinecraftEntityTypes2["Blaze"] = "minecraft:blaze";
  MinecraftEntityTypes2["Boat"] = "minecraft:boat";
  MinecraftEntityTypes2["Bogged"] = "minecraft:bogged";
  MinecraftEntityTypes2["Breeze"] = "minecraft:breeze";
  MinecraftEntityTypes2["BreezeWindChargeProjectile"] = "minecraft:breeze_wind_charge_projectile";
  MinecraftEntityTypes2["Camel"] = "minecraft:camel";
  MinecraftEntityTypes2["Cat"] = "minecraft:cat";
  MinecraftEntityTypes2["CaveSpider"] = "minecraft:cave_spider";
  MinecraftEntityTypes2["ChestBoat"] = "minecraft:chest_boat";
  MinecraftEntityTypes2["ChestMinecart"] = "minecraft:chest_minecart";
  MinecraftEntityTypes2["Chicken"] = "minecraft:chicken";
  MinecraftEntityTypes2["Cod"] = "minecraft:cod";
  MinecraftEntityTypes2["CommandBlockMinecart"] = "minecraft:command_block_minecart";
  MinecraftEntityTypes2["Cow"] = "minecraft:cow";
  MinecraftEntityTypes2["Creaking"] = "minecraft:creaking";
  MinecraftEntityTypes2["Creeper"] = "minecraft:creeper";
  MinecraftEntityTypes2["Dolphin"] = "minecraft:dolphin";
  MinecraftEntityTypes2["Donkey"] = "minecraft:donkey";
  MinecraftEntityTypes2["DragonFireball"] = "minecraft:dragon_fireball";
  MinecraftEntityTypes2["Drowned"] = "minecraft:drowned";
  MinecraftEntityTypes2["Egg"] = "minecraft:egg";
  MinecraftEntityTypes2["ElderGuardian"] = "minecraft:elder_guardian";
  MinecraftEntityTypes2["EnderCrystal"] = "minecraft:ender_crystal";
  MinecraftEntityTypes2["EnderDragon"] = "minecraft:ender_dragon";
  MinecraftEntityTypes2["EnderPearl"] = "minecraft:ender_pearl";
  MinecraftEntityTypes2["Enderman"] = "minecraft:enderman";
  MinecraftEntityTypes2["Endermite"] = "minecraft:endermite";
  MinecraftEntityTypes2["EvocationIllager"] = "minecraft:evocation_illager";
  MinecraftEntityTypes2["EyeOfEnderSignal"] = "minecraft:eye_of_ender_signal";
  MinecraftEntityTypes2["Fireball"] = "minecraft:fireball";
  MinecraftEntityTypes2["FireworksRocket"] = "minecraft:fireworks_rocket";
  MinecraftEntityTypes2["FishingHook"] = "minecraft:fishing_hook";
  MinecraftEntityTypes2["Fox"] = "minecraft:fox";
  MinecraftEntityTypes2["Frog"] = "minecraft:frog";
  MinecraftEntityTypes2["Ghast"] = "minecraft:ghast";
  MinecraftEntityTypes2["GlowSquid"] = "minecraft:glow_squid";
  MinecraftEntityTypes2["Goat"] = "minecraft:goat";
  MinecraftEntityTypes2["Guardian"] = "minecraft:guardian";
  MinecraftEntityTypes2["Hoglin"] = "minecraft:hoglin";
  MinecraftEntityTypes2["HopperMinecart"] = "minecraft:hopper_minecart";
  MinecraftEntityTypes2["Horse"] = "minecraft:horse";
  MinecraftEntityTypes2["Husk"] = "minecraft:husk";
  MinecraftEntityTypes2["IronGolem"] = "minecraft:iron_golem";
  MinecraftEntityTypes2["LightningBolt"] = "minecraft:lightning_bolt";
  MinecraftEntityTypes2["LingeringPotion"] = "minecraft:lingering_potion";
  MinecraftEntityTypes2["Llama"] = "minecraft:llama";
  MinecraftEntityTypes2["LlamaSpit"] = "minecraft:llama_spit";
  MinecraftEntityTypes2["MagmaCube"] = "minecraft:magma_cube";
  MinecraftEntityTypes2["Minecart"] = "minecraft:minecart";
  MinecraftEntityTypes2["Mooshroom"] = "minecraft:mooshroom";
  MinecraftEntityTypes2["Mule"] = "minecraft:mule";
  MinecraftEntityTypes2["Npc"] = "minecraft:npc";
  MinecraftEntityTypes2["Ocelot"] = "minecraft:ocelot";
  MinecraftEntityTypes2["OminousItemSpawner"] = "minecraft:ominous_item_spawner";
  MinecraftEntityTypes2["Panda"] = "minecraft:panda";
  MinecraftEntityTypes2["Parrot"] = "minecraft:parrot";
  MinecraftEntityTypes2["Phantom"] = "minecraft:phantom";
  MinecraftEntityTypes2["Pig"] = "minecraft:pig";
  MinecraftEntityTypes2["Piglin"] = "minecraft:piglin";
  MinecraftEntityTypes2["PiglinBrute"] = "minecraft:piglin_brute";
  MinecraftEntityTypes2["Pillager"] = "minecraft:pillager";
  MinecraftEntityTypes2["Player"] = "minecraft:player";
  MinecraftEntityTypes2["PolarBear"] = "minecraft:polar_bear";
  MinecraftEntityTypes2["Pufferfish"] = "minecraft:pufferfish";
  MinecraftEntityTypes2["Rabbit"] = "minecraft:rabbit";
  MinecraftEntityTypes2["Ravager"] = "minecraft:ravager";
  MinecraftEntityTypes2["Salmon"] = "minecraft:salmon";
  MinecraftEntityTypes2["Sheep"] = "minecraft:sheep";
  MinecraftEntityTypes2["Shulker"] = "minecraft:shulker";
  MinecraftEntityTypes2["ShulkerBullet"] = "minecraft:shulker_bullet";
  MinecraftEntityTypes2["Silverfish"] = "minecraft:silverfish";
  MinecraftEntityTypes2["Skeleton"] = "minecraft:skeleton";
  MinecraftEntityTypes2["SkeletonHorse"] = "minecraft:skeleton_horse";
  MinecraftEntityTypes2["Slime"] = "minecraft:slime";
  MinecraftEntityTypes2["SmallFireball"] = "minecraft:small_fireball";
  MinecraftEntityTypes2["Sniffer"] = "minecraft:sniffer";
  MinecraftEntityTypes2["SnowGolem"] = "minecraft:snow_golem";
  MinecraftEntityTypes2["Snowball"] = "minecraft:snowball";
  MinecraftEntityTypes2["Spider"] = "minecraft:spider";
  MinecraftEntityTypes2["SplashPotion"] = "minecraft:splash_potion";
  MinecraftEntityTypes2["Squid"] = "minecraft:squid";
  MinecraftEntityTypes2["Stray"] = "minecraft:stray";
  MinecraftEntityTypes2["Strider"] = "minecraft:strider";
  MinecraftEntityTypes2["Tadpole"] = "minecraft:tadpole";
  MinecraftEntityTypes2["ThrownTrident"] = "minecraft:thrown_trident";
  MinecraftEntityTypes2["Tnt"] = "minecraft:tnt";
  MinecraftEntityTypes2["TntMinecart"] = "minecraft:tnt_minecart";
  MinecraftEntityTypes2["TraderLlama"] = "minecraft:trader_llama";
  MinecraftEntityTypes2["TripodCamera"] = "minecraft:tripod_camera";
  MinecraftEntityTypes2["Tropicalfish"] = "minecraft:tropicalfish";
  MinecraftEntityTypes2["Turtle"] = "minecraft:turtle";
  MinecraftEntityTypes2["Vex"] = "minecraft:vex";
  MinecraftEntityTypes2["Villager"] = "minecraft:villager";
  MinecraftEntityTypes2["VillagerV2"] = "minecraft:villager_v2";
  MinecraftEntityTypes2["Vindicator"] = "minecraft:vindicator";
  MinecraftEntityTypes2["WanderingTrader"] = "minecraft:wandering_trader";
  MinecraftEntityTypes2["Warden"] = "minecraft:warden";
  MinecraftEntityTypes2["WindChargeProjectile"] = "minecraft:wind_charge_projectile";
  MinecraftEntityTypes2["Witch"] = "minecraft:witch";
  MinecraftEntityTypes2["Wither"] = "minecraft:wither";
  MinecraftEntityTypes2["WitherSkeleton"] = "minecraft:wither_skeleton";
  MinecraftEntityTypes2["WitherSkull"] = "minecraft:wither_skull";
  MinecraftEntityTypes2["WitherSkullDangerous"] = "minecraft:wither_skull_dangerous";
  MinecraftEntityTypes2["Wolf"] = "minecraft:wolf";
  MinecraftEntityTypes2["XpBottle"] = "minecraft:xp_bottle";
  MinecraftEntityTypes2["XpOrb"] = "minecraft:xp_orb";
  MinecraftEntityTypes2["Zoglin"] = "minecraft:zoglin";
  MinecraftEntityTypes2["Zombie"] = "minecraft:zombie";
  MinecraftEntityTypes2["ZombieHorse"] = "minecraft:zombie_horse";
  MinecraftEntityTypes2["ZombiePigman"] = "minecraft:zombie_pigman";
  MinecraftEntityTypes2["ZombieVillager"] = "minecraft:zombie_villager";
  MinecraftEntityTypes2["ZombieVillagerV2"] = "minecraft:zombie_villager_v2";
  return MinecraftEntityTypes2;
})(MinecraftEntityTypes || {});
var MinecraftFeatureTypes = ((MinecraftFeatureTypes2) => {
  MinecraftFeatureTypes2["AncientCity"] = "minecraft:ancient_city";
  MinecraftFeatureTypes2["BastionRemnant"] = "minecraft:bastion_remnant";
  MinecraftFeatureTypes2["BuriedTreasure"] = "minecraft:buried_treasure";
  MinecraftFeatureTypes2["EndCity"] = "minecraft:end_city";
  MinecraftFeatureTypes2["Fortress"] = "minecraft:fortress";
  MinecraftFeatureTypes2["Mansion"] = "minecraft:mansion";
  MinecraftFeatureTypes2["Mineshaft"] = "minecraft:mineshaft";
  MinecraftFeatureTypes2["Monument"] = "minecraft:monument";
  MinecraftFeatureTypes2["PillagerOutpost"] = "minecraft:pillager_outpost";
  MinecraftFeatureTypes2["RuinedPortal"] = "minecraft:ruined_portal";
  MinecraftFeatureTypes2["Ruins"] = "minecraft:ruins";
  MinecraftFeatureTypes2["Shipwreck"] = "minecraft:shipwreck";
  MinecraftFeatureTypes2["Stronghold"] = "minecraft:stronghold";
  MinecraftFeatureTypes2["Temple"] = "minecraft:temple";
  MinecraftFeatureTypes2["TrailRuins"] = "minecraft:trail_ruins";
  MinecraftFeatureTypes2["TrialChambers"] = "minecraft:trial_chambers";
  MinecraftFeatureTypes2["Village"] = "minecraft:village";
  return MinecraftFeatureTypes2;
})(MinecraftFeatureTypes || {});
var MinecraftItemTypes = ((MinecraftItemTypes2) => {
  MinecraftItemTypes2["AcaciaBoat"] = "minecraft:acacia_boat";
  MinecraftItemTypes2["AcaciaButton"] = "minecraft:acacia_button";
  MinecraftItemTypes2["AcaciaChestBoat"] = "minecraft:acacia_chest_boat";
  MinecraftItemTypes2["AcaciaDoor"] = "minecraft:acacia_door";
  MinecraftItemTypes2["AcaciaFence"] = "minecraft:acacia_fence";
  MinecraftItemTypes2["AcaciaFenceGate"] = "minecraft:acacia_fence_gate";
  MinecraftItemTypes2["AcaciaHangingSign"] = "minecraft:acacia_hanging_sign";
  MinecraftItemTypes2["AcaciaLeaves"] = "minecraft:acacia_leaves";
  MinecraftItemTypes2["AcaciaLog"] = "minecraft:acacia_log";
  MinecraftItemTypes2["AcaciaPlanks"] = "minecraft:acacia_planks";
  MinecraftItemTypes2["AcaciaPressurePlate"] = "minecraft:acacia_pressure_plate";
  MinecraftItemTypes2["AcaciaSapling"] = "minecraft:acacia_sapling";
  MinecraftItemTypes2["AcaciaSign"] = "minecraft:acacia_sign";
  MinecraftItemTypes2["AcaciaSlab"] = "minecraft:acacia_slab";
  MinecraftItemTypes2["AcaciaStairs"] = "minecraft:acacia_stairs";
  MinecraftItemTypes2["AcaciaTrapdoor"] = "minecraft:acacia_trapdoor";
  MinecraftItemTypes2["AcaciaWood"] = "minecraft:acacia_wood";
  MinecraftItemTypes2["ActivatorRail"] = "minecraft:activator_rail";
  MinecraftItemTypes2["AllaySpawnEgg"] = "minecraft:allay_spawn_egg";
  MinecraftItemTypes2["Allium"] = "minecraft:allium";
  MinecraftItemTypes2["Allow"] = "minecraft:allow";
  MinecraftItemTypes2["AmethystBlock"] = "minecraft:amethyst_block";
  MinecraftItemTypes2["AmethystCluster"] = "minecraft:amethyst_cluster";
  MinecraftItemTypes2["AmethystShard"] = "minecraft:amethyst_shard";
  MinecraftItemTypes2["AncientDebris"] = "minecraft:ancient_debris";
  MinecraftItemTypes2["Andesite"] = "minecraft:andesite";
  MinecraftItemTypes2["AndesiteSlab"] = "minecraft:andesite_slab";
  MinecraftItemTypes2["AndesiteStairs"] = "minecraft:andesite_stairs";
  MinecraftItemTypes2["AndesiteWall"] = "minecraft:andesite_wall";
  MinecraftItemTypes2["AnglerPotterySherd"] = "minecraft:angler_pottery_sherd";
  MinecraftItemTypes2["Anvil"] = "minecraft:anvil";
  MinecraftItemTypes2["Apple"] = "minecraft:apple";
  MinecraftItemTypes2["ArcherPotterySherd"] = "minecraft:archer_pottery_sherd";
  MinecraftItemTypes2["ArmadilloScute"] = "minecraft:armadillo_scute";
  MinecraftItemTypes2["ArmadilloSpawnEgg"] = "minecraft:armadillo_spawn_egg";
  MinecraftItemTypes2["ArmorStand"] = "minecraft:armor_stand";
  MinecraftItemTypes2["ArmsUpPotterySherd"] = "minecraft:arms_up_pottery_sherd";
  MinecraftItemTypes2["Arrow"] = "minecraft:arrow";
  MinecraftItemTypes2["AxolotlBucket"] = "minecraft:axolotl_bucket";
  MinecraftItemTypes2["AxolotlSpawnEgg"] = "minecraft:axolotl_spawn_egg";
  MinecraftItemTypes2["Azalea"] = "minecraft:azalea";
  MinecraftItemTypes2["AzaleaLeaves"] = "minecraft:azalea_leaves";
  MinecraftItemTypes2["AzaleaLeavesFlowered"] = "minecraft:azalea_leaves_flowered";
  MinecraftItemTypes2["AzureBluet"] = "minecraft:azure_bluet";
  MinecraftItemTypes2["BakedPotato"] = "minecraft:baked_potato";
  MinecraftItemTypes2["Bamboo"] = "minecraft:bamboo";
  MinecraftItemTypes2["BambooBlock"] = "minecraft:bamboo_block";
  MinecraftItemTypes2["BambooButton"] = "minecraft:bamboo_button";
  MinecraftItemTypes2["BambooChestRaft"] = "minecraft:bamboo_chest_raft";
  MinecraftItemTypes2["BambooDoor"] = "minecraft:bamboo_door";
  MinecraftItemTypes2["BambooFence"] = "minecraft:bamboo_fence";
  MinecraftItemTypes2["BambooFenceGate"] = "minecraft:bamboo_fence_gate";
  MinecraftItemTypes2["BambooHangingSign"] = "minecraft:bamboo_hanging_sign";
  MinecraftItemTypes2["BambooMosaic"] = "minecraft:bamboo_mosaic";
  MinecraftItemTypes2["BambooMosaicSlab"] = "minecraft:bamboo_mosaic_slab";
  MinecraftItemTypes2["BambooMosaicStairs"] = "minecraft:bamboo_mosaic_stairs";
  MinecraftItemTypes2["BambooPlanks"] = "minecraft:bamboo_planks";
  MinecraftItemTypes2["BambooPressurePlate"] = "minecraft:bamboo_pressure_plate";
  MinecraftItemTypes2["BambooRaft"] = "minecraft:bamboo_raft";
  MinecraftItemTypes2["BambooSign"] = "minecraft:bamboo_sign";
  MinecraftItemTypes2["BambooSlab"] = "minecraft:bamboo_slab";
  MinecraftItemTypes2["BambooStairs"] = "minecraft:bamboo_stairs";
  MinecraftItemTypes2["BambooTrapdoor"] = "minecraft:bamboo_trapdoor";
  MinecraftItemTypes2["Banner"] = "minecraft:banner";
  MinecraftItemTypes2["Barrel"] = "minecraft:barrel";
  MinecraftItemTypes2["Barrier"] = "minecraft:barrier";
  MinecraftItemTypes2["Basalt"] = "minecraft:basalt";
  MinecraftItemTypes2["BatSpawnEgg"] = "minecraft:bat_spawn_egg";
  MinecraftItemTypes2["Beacon"] = "minecraft:beacon";
  MinecraftItemTypes2["Bed"] = "minecraft:bed";
  MinecraftItemTypes2["Bedrock"] = "minecraft:bedrock";
  MinecraftItemTypes2["BeeNest"] = "minecraft:bee_nest";
  MinecraftItemTypes2["BeeSpawnEgg"] = "minecraft:bee_spawn_egg";
  MinecraftItemTypes2["Beef"] = "minecraft:beef";
  MinecraftItemTypes2["Beehive"] = "minecraft:beehive";
  MinecraftItemTypes2["Beetroot"] = "minecraft:beetroot";
  MinecraftItemTypes2["BeetrootSeeds"] = "minecraft:beetroot_seeds";
  MinecraftItemTypes2["BeetrootSoup"] = "minecraft:beetroot_soup";
  MinecraftItemTypes2["Bell"] = "minecraft:bell";
  MinecraftItemTypes2["BigDripleaf"] = "minecraft:big_dripleaf";
  MinecraftItemTypes2["BirchBoat"] = "minecraft:birch_boat";
  MinecraftItemTypes2["BirchButton"] = "minecraft:birch_button";
  MinecraftItemTypes2["BirchChestBoat"] = "minecraft:birch_chest_boat";
  MinecraftItemTypes2["BirchDoor"] = "minecraft:birch_door";
  MinecraftItemTypes2["BirchFence"] = "minecraft:birch_fence";
  MinecraftItemTypes2["BirchFenceGate"] = "minecraft:birch_fence_gate";
  MinecraftItemTypes2["BirchHangingSign"] = "minecraft:birch_hanging_sign";
  MinecraftItemTypes2["BirchLeaves"] = "minecraft:birch_leaves";
  MinecraftItemTypes2["BirchLog"] = "minecraft:birch_log";
  MinecraftItemTypes2["BirchPlanks"] = "minecraft:birch_planks";
  MinecraftItemTypes2["BirchPressurePlate"] = "minecraft:birch_pressure_plate";
  MinecraftItemTypes2["BirchSapling"] = "minecraft:birch_sapling";
  MinecraftItemTypes2["BirchSign"] = "minecraft:birch_sign";
  MinecraftItemTypes2["BirchSlab"] = "minecraft:birch_slab";
  MinecraftItemTypes2["BirchStairs"] = "minecraft:birch_stairs";
  MinecraftItemTypes2["BirchTrapdoor"] = "minecraft:birch_trapdoor";
  MinecraftItemTypes2["BirchWood"] = "minecraft:birch_wood";
  MinecraftItemTypes2["BlackBundle"] = "minecraft:black_bundle";
  MinecraftItemTypes2["BlackCandle"] = "minecraft:black_candle";
  MinecraftItemTypes2["BlackCarpet"] = "minecraft:black_carpet";
  MinecraftItemTypes2["BlackConcrete"] = "minecraft:black_concrete";
  MinecraftItemTypes2["BlackConcretePowder"] = "minecraft:black_concrete_powder";
  MinecraftItemTypes2["BlackDye"] = "minecraft:black_dye";
  MinecraftItemTypes2["BlackGlazedTerracotta"] = "minecraft:black_glazed_terracotta";
  MinecraftItemTypes2["BlackShulkerBox"] = "minecraft:black_shulker_box";
  MinecraftItemTypes2["BlackStainedGlass"] = "minecraft:black_stained_glass";
  MinecraftItemTypes2["BlackStainedGlassPane"] = "minecraft:black_stained_glass_pane";
  MinecraftItemTypes2["BlackTerracotta"] = "minecraft:black_terracotta";
  MinecraftItemTypes2["BlackWool"] = "minecraft:black_wool";
  MinecraftItemTypes2["Blackstone"] = "minecraft:blackstone";
  MinecraftItemTypes2["BlackstoneSlab"] = "minecraft:blackstone_slab";
  MinecraftItemTypes2["BlackstoneStairs"] = "minecraft:blackstone_stairs";
  MinecraftItemTypes2["BlackstoneWall"] = "minecraft:blackstone_wall";
  MinecraftItemTypes2["BladePotterySherd"] = "minecraft:blade_pottery_sherd";
  MinecraftItemTypes2["BlastFurnace"] = "minecraft:blast_furnace";
  MinecraftItemTypes2["BlazePowder"] = "minecraft:blaze_powder";
  MinecraftItemTypes2["BlazeRod"] = "minecraft:blaze_rod";
  MinecraftItemTypes2["BlazeSpawnEgg"] = "minecraft:blaze_spawn_egg";
  MinecraftItemTypes2["BlueBundle"] = "minecraft:blue_bundle";
  MinecraftItemTypes2["BlueCandle"] = "minecraft:blue_candle";
  MinecraftItemTypes2["BlueCarpet"] = "minecraft:blue_carpet";
  MinecraftItemTypes2["BlueConcrete"] = "minecraft:blue_concrete";
  MinecraftItemTypes2["BlueConcretePowder"] = "minecraft:blue_concrete_powder";
  MinecraftItemTypes2["BlueDye"] = "minecraft:blue_dye";
  MinecraftItemTypes2["BlueEgg"] = "minecraft:blue_egg";
  MinecraftItemTypes2["BlueGlazedTerracotta"] = "minecraft:blue_glazed_terracotta";
  MinecraftItemTypes2["BlueIce"] = "minecraft:blue_ice";
  MinecraftItemTypes2["BlueOrchid"] = "minecraft:blue_orchid";
  MinecraftItemTypes2["BlueShulkerBox"] = "minecraft:blue_shulker_box";
  MinecraftItemTypes2["BlueStainedGlass"] = "minecraft:blue_stained_glass";
  MinecraftItemTypes2["BlueStainedGlassPane"] = "minecraft:blue_stained_glass_pane";
  MinecraftItemTypes2["BlueTerracotta"] = "minecraft:blue_terracotta";
  MinecraftItemTypes2["BlueWool"] = "minecraft:blue_wool";
  MinecraftItemTypes2["BoggedSpawnEgg"] = "minecraft:bogged_spawn_egg";
  MinecraftItemTypes2["BoltArmorTrimSmithingTemplate"] = "minecraft:bolt_armor_trim_smithing_template";
  MinecraftItemTypes2["Bone"] = "minecraft:bone";
  MinecraftItemTypes2["BoneBlock"] = "minecraft:bone_block";
  MinecraftItemTypes2["BoneMeal"] = "minecraft:bone_meal";
  MinecraftItemTypes2["Book"] = "minecraft:book";
  MinecraftItemTypes2["Bookshelf"] = "minecraft:bookshelf";
  MinecraftItemTypes2["BorderBlock"] = "minecraft:border_block";
  MinecraftItemTypes2["BordureIndentedBannerPattern"] = "minecraft:bordure_indented_banner_pattern";
  MinecraftItemTypes2["Bow"] = "minecraft:bow";
  MinecraftItemTypes2["Bowl"] = "minecraft:bowl";
  MinecraftItemTypes2["BrainCoral"] = "minecraft:brain_coral";
  MinecraftItemTypes2["BrainCoralBlock"] = "minecraft:brain_coral_block";
  MinecraftItemTypes2["BrainCoralFan"] = "minecraft:brain_coral_fan";
  MinecraftItemTypes2["Bread"] = "minecraft:bread";
  MinecraftItemTypes2["BreezeRod"] = "minecraft:breeze_rod";
  MinecraftItemTypes2["BreezeSpawnEgg"] = "minecraft:breeze_spawn_egg";
  MinecraftItemTypes2["BrewerPotterySherd"] = "minecraft:brewer_pottery_sherd";
  MinecraftItemTypes2["BrewingStand"] = "minecraft:brewing_stand";
  MinecraftItemTypes2["Brick"] = "minecraft:brick";
  MinecraftItemTypes2["BrickBlock"] = "minecraft:brick_block";
  MinecraftItemTypes2["BrickSlab"] = "minecraft:brick_slab";
  MinecraftItemTypes2["BrickStairs"] = "minecraft:brick_stairs";
  MinecraftItemTypes2["BrickWall"] = "minecraft:brick_wall";
  MinecraftItemTypes2["BrownBundle"] = "minecraft:brown_bundle";
  MinecraftItemTypes2["BrownCandle"] = "minecraft:brown_candle";
  MinecraftItemTypes2["BrownCarpet"] = "minecraft:brown_carpet";
  MinecraftItemTypes2["BrownConcrete"] = "minecraft:brown_concrete";
  MinecraftItemTypes2["BrownConcretePowder"] = "minecraft:brown_concrete_powder";
  MinecraftItemTypes2["BrownDye"] = "minecraft:brown_dye";
  MinecraftItemTypes2["BrownEgg"] = "minecraft:brown_egg";
  MinecraftItemTypes2["BrownGlazedTerracotta"] = "minecraft:brown_glazed_terracotta";
  MinecraftItemTypes2["BrownMushroom"] = "minecraft:brown_mushroom";
  MinecraftItemTypes2["BrownMushroomBlock"] = "minecraft:brown_mushroom_block";
  MinecraftItemTypes2["BrownShulkerBox"] = "minecraft:brown_shulker_box";
  MinecraftItemTypes2["BrownStainedGlass"] = "minecraft:brown_stained_glass";
  MinecraftItemTypes2["BrownStainedGlassPane"] = "minecraft:brown_stained_glass_pane";
  MinecraftItemTypes2["BrownTerracotta"] = "minecraft:brown_terracotta";
  MinecraftItemTypes2["BrownWool"] = "minecraft:brown_wool";
  MinecraftItemTypes2["Brush"] = "minecraft:brush";
  MinecraftItemTypes2["BubbleCoral"] = "minecraft:bubble_coral";
  MinecraftItemTypes2["BubbleCoralBlock"] = "minecraft:bubble_coral_block";
  MinecraftItemTypes2["BubbleCoralFan"] = "minecraft:bubble_coral_fan";
  MinecraftItemTypes2["Bucket"] = "minecraft:bucket";
  MinecraftItemTypes2["BuddingAmethyst"] = "minecraft:budding_amethyst";
  MinecraftItemTypes2["Bundle"] = "minecraft:bundle";
  MinecraftItemTypes2["BurnPotterySherd"] = "minecraft:burn_pottery_sherd";
  MinecraftItemTypes2["Bush"] = "minecraft:bush";
  MinecraftItemTypes2["Cactus"] = "minecraft:cactus";
  MinecraftItemTypes2["CactusFlower"] = "minecraft:cactus_flower";
  MinecraftItemTypes2["Cake"] = "minecraft:cake";
  MinecraftItemTypes2["Calcite"] = "minecraft:calcite";
  MinecraftItemTypes2["CalibratedSculkSensor"] = "minecraft:calibrated_sculk_sensor";
  MinecraftItemTypes2["CamelSpawnEgg"] = "minecraft:camel_spawn_egg";
  MinecraftItemTypes2["Campfire"] = "minecraft:campfire";
  MinecraftItemTypes2["Candle"] = "minecraft:candle";
  MinecraftItemTypes2["Carrot"] = "minecraft:carrot";
  MinecraftItemTypes2["CarrotOnAStick"] = "minecraft:carrot_on_a_stick";
  MinecraftItemTypes2["CartographyTable"] = "minecraft:cartography_table";
  MinecraftItemTypes2["CarvedPumpkin"] = "minecraft:carved_pumpkin";
  MinecraftItemTypes2["CatSpawnEgg"] = "minecraft:cat_spawn_egg";
  MinecraftItemTypes2["Cauldron"] = "minecraft:cauldron";
  MinecraftItemTypes2["CaveSpiderSpawnEgg"] = "minecraft:cave_spider_spawn_egg";
  MinecraftItemTypes2["Chain"] = "minecraft:chain";
  MinecraftItemTypes2["ChainCommandBlock"] = "minecraft:chain_command_block";
  MinecraftItemTypes2["ChainmailBoots"] = "minecraft:chainmail_boots";
  MinecraftItemTypes2["ChainmailChestplate"] = "minecraft:chainmail_chestplate";
  MinecraftItemTypes2["ChainmailHelmet"] = "minecraft:chainmail_helmet";
  MinecraftItemTypes2["ChainmailLeggings"] = "minecraft:chainmail_leggings";
  MinecraftItemTypes2["Charcoal"] = "minecraft:charcoal";
  MinecraftItemTypes2["CherryBoat"] = "minecraft:cherry_boat";
  MinecraftItemTypes2["CherryButton"] = "minecraft:cherry_button";
  MinecraftItemTypes2["CherryChestBoat"] = "minecraft:cherry_chest_boat";
  MinecraftItemTypes2["CherryDoor"] = "minecraft:cherry_door";
  MinecraftItemTypes2["CherryFence"] = "minecraft:cherry_fence";
  MinecraftItemTypes2["CherryFenceGate"] = "minecraft:cherry_fence_gate";
  MinecraftItemTypes2["CherryHangingSign"] = "minecraft:cherry_hanging_sign";
  MinecraftItemTypes2["CherryLeaves"] = "minecraft:cherry_leaves";
  MinecraftItemTypes2["CherryLog"] = "minecraft:cherry_log";
  MinecraftItemTypes2["CherryPlanks"] = "minecraft:cherry_planks";
  MinecraftItemTypes2["CherryPressurePlate"] = "minecraft:cherry_pressure_plate";
  MinecraftItemTypes2["CherrySapling"] = "minecraft:cherry_sapling";
  MinecraftItemTypes2["CherrySign"] = "minecraft:cherry_sign";
  MinecraftItemTypes2["CherrySlab"] = "minecraft:cherry_slab";
  MinecraftItemTypes2["CherryStairs"] = "minecraft:cherry_stairs";
  MinecraftItemTypes2["CherryTrapdoor"] = "minecraft:cherry_trapdoor";
  MinecraftItemTypes2["CherryWood"] = "minecraft:cherry_wood";
  MinecraftItemTypes2["Chest"] = "minecraft:chest";
  MinecraftItemTypes2["ChestMinecart"] = "minecraft:chest_minecart";
  MinecraftItemTypes2["Chicken"] = "minecraft:chicken";
  MinecraftItemTypes2["ChickenSpawnEgg"] = "minecraft:chicken_spawn_egg";
  MinecraftItemTypes2["ChippedAnvil"] = "minecraft:chipped_anvil";
  MinecraftItemTypes2["ChiseledBookshelf"] = "minecraft:chiseled_bookshelf";
  MinecraftItemTypes2["ChiseledCopper"] = "minecraft:chiseled_copper";
  MinecraftItemTypes2["ChiseledDeepslate"] = "minecraft:chiseled_deepslate";
  MinecraftItemTypes2["ChiseledNetherBricks"] = "minecraft:chiseled_nether_bricks";
  MinecraftItemTypes2["ChiseledPolishedBlackstone"] = "minecraft:chiseled_polished_blackstone";
  MinecraftItemTypes2["ChiseledQuartzBlock"] = "minecraft:chiseled_quartz_block";
  MinecraftItemTypes2["ChiseledRedSandstone"] = "minecraft:chiseled_red_sandstone";
  MinecraftItemTypes2["ChiseledResinBricks"] = "minecraft:chiseled_resin_bricks";
  MinecraftItemTypes2["ChiseledSandstone"] = "minecraft:chiseled_sandstone";
  MinecraftItemTypes2["ChiseledStoneBricks"] = "minecraft:chiseled_stone_bricks";
  MinecraftItemTypes2["ChiseledTuff"] = "minecraft:chiseled_tuff";
  MinecraftItemTypes2["ChiseledTuffBricks"] = "minecraft:chiseled_tuff_bricks";
  MinecraftItemTypes2["ChorusFlower"] = "minecraft:chorus_flower";
  MinecraftItemTypes2["ChorusFruit"] = "minecraft:chorus_fruit";
  MinecraftItemTypes2["ChorusPlant"] = "minecraft:chorus_plant";
  MinecraftItemTypes2["Clay"] = "minecraft:clay";
  MinecraftItemTypes2["ClayBall"] = "minecraft:clay_ball";
  MinecraftItemTypes2["Clock"] = "minecraft:clock";
  MinecraftItemTypes2["ClosedEyeblossom"] = "minecraft:closed_eyeblossom";
  MinecraftItemTypes2["Coal"] = "minecraft:coal";
  MinecraftItemTypes2["CoalBlock"] = "minecraft:coal_block";
  MinecraftItemTypes2["CoalOre"] = "minecraft:coal_ore";
  MinecraftItemTypes2["CoarseDirt"] = "minecraft:coarse_dirt";
  MinecraftItemTypes2["CoastArmorTrimSmithingTemplate"] = "minecraft:coast_armor_trim_smithing_template";
  MinecraftItemTypes2["CobbledDeepslate"] = "minecraft:cobbled_deepslate";
  MinecraftItemTypes2["CobbledDeepslateSlab"] = "minecraft:cobbled_deepslate_slab";
  MinecraftItemTypes2["CobbledDeepslateStairs"] = "minecraft:cobbled_deepslate_stairs";
  MinecraftItemTypes2["CobbledDeepslateWall"] = "minecraft:cobbled_deepslate_wall";
  MinecraftItemTypes2["Cobblestone"] = "minecraft:cobblestone";
  MinecraftItemTypes2["CobblestoneSlab"] = "minecraft:cobblestone_slab";
  MinecraftItemTypes2["CobblestoneWall"] = "minecraft:cobblestone_wall";
  MinecraftItemTypes2["CocoaBeans"] = "minecraft:cocoa_beans";
  MinecraftItemTypes2["Cod"] = "minecraft:cod";
  MinecraftItemTypes2["CodBucket"] = "minecraft:cod_bucket";
  MinecraftItemTypes2["CodSpawnEgg"] = "minecraft:cod_spawn_egg";
  MinecraftItemTypes2["CommandBlock"] = "minecraft:command_block";
  MinecraftItemTypes2["CommandBlockMinecart"] = "minecraft:command_block_minecart";
  MinecraftItemTypes2["Comparator"] = "minecraft:comparator";
  MinecraftItemTypes2["Compass"] = "minecraft:compass";
  MinecraftItemTypes2["Composter"] = "minecraft:composter";
  MinecraftItemTypes2["Conduit"] = "minecraft:conduit";
  MinecraftItemTypes2["CookedBeef"] = "minecraft:cooked_beef";
  MinecraftItemTypes2["CookedChicken"] = "minecraft:cooked_chicken";
  MinecraftItemTypes2["CookedCod"] = "minecraft:cooked_cod";
  MinecraftItemTypes2["CookedMutton"] = "minecraft:cooked_mutton";
  MinecraftItemTypes2["CookedPorkchop"] = "minecraft:cooked_porkchop";
  MinecraftItemTypes2["CookedRabbit"] = "minecraft:cooked_rabbit";
  MinecraftItemTypes2["CookedSalmon"] = "minecraft:cooked_salmon";
  MinecraftItemTypes2["Cookie"] = "minecraft:cookie";
  MinecraftItemTypes2["CopperBlock"] = "minecraft:copper_block";
  MinecraftItemTypes2["CopperBulb"] = "minecraft:copper_bulb";
  MinecraftItemTypes2["CopperDoor"] = "minecraft:copper_door";
  MinecraftItemTypes2["CopperGrate"] = "minecraft:copper_grate";
  MinecraftItemTypes2["CopperIngot"] = "minecraft:copper_ingot";
  MinecraftItemTypes2["CopperOre"] = "minecraft:copper_ore";
  MinecraftItemTypes2["CopperTrapdoor"] = "minecraft:copper_trapdoor";
  MinecraftItemTypes2["Cornflower"] = "minecraft:cornflower";
  MinecraftItemTypes2["CowSpawnEgg"] = "minecraft:cow_spawn_egg";
  MinecraftItemTypes2["CrackedDeepslateBricks"] = "minecraft:cracked_deepslate_bricks";
  MinecraftItemTypes2["CrackedDeepslateTiles"] = "minecraft:cracked_deepslate_tiles";
  MinecraftItemTypes2["CrackedNetherBricks"] = "minecraft:cracked_nether_bricks";
  MinecraftItemTypes2["CrackedPolishedBlackstoneBricks"] = "minecraft:cracked_polished_blackstone_bricks";
  MinecraftItemTypes2["CrackedStoneBricks"] = "minecraft:cracked_stone_bricks";
  MinecraftItemTypes2["Crafter"] = "minecraft:crafter";
  MinecraftItemTypes2["CraftingTable"] = "minecraft:crafting_table";
  MinecraftItemTypes2["CreakingHeart"] = "minecraft:creaking_heart";
  MinecraftItemTypes2["CreakingSpawnEgg"] = "minecraft:creaking_spawn_egg";
  MinecraftItemTypes2["CreeperBannerPattern"] = "minecraft:creeper_banner_pattern";
  MinecraftItemTypes2["CreeperHead"] = "minecraft:creeper_head";
  MinecraftItemTypes2["CreeperSpawnEgg"] = "minecraft:creeper_spawn_egg";
  MinecraftItemTypes2["CrimsonButton"] = "minecraft:crimson_button";
  MinecraftItemTypes2["CrimsonDoor"] = "minecraft:crimson_door";
  MinecraftItemTypes2["CrimsonFence"] = "minecraft:crimson_fence";
  MinecraftItemTypes2["CrimsonFenceGate"] = "minecraft:crimson_fence_gate";
  MinecraftItemTypes2["CrimsonFungus"] = "minecraft:crimson_fungus";
  MinecraftItemTypes2["CrimsonHangingSign"] = "minecraft:crimson_hanging_sign";
  MinecraftItemTypes2["CrimsonHyphae"] = "minecraft:crimson_hyphae";
  MinecraftItemTypes2["CrimsonNylium"] = "minecraft:crimson_nylium";
  MinecraftItemTypes2["CrimsonPlanks"] = "minecraft:crimson_planks";
  MinecraftItemTypes2["CrimsonPressurePlate"] = "minecraft:crimson_pressure_plate";
  MinecraftItemTypes2["CrimsonRoots"] = "minecraft:crimson_roots";
  MinecraftItemTypes2["CrimsonSign"] = "minecraft:crimson_sign";
  MinecraftItemTypes2["CrimsonSlab"] = "minecraft:crimson_slab";
  MinecraftItemTypes2["CrimsonStairs"] = "minecraft:crimson_stairs";
  MinecraftItemTypes2["CrimsonStem"] = "minecraft:crimson_stem";
  MinecraftItemTypes2["CrimsonTrapdoor"] = "minecraft:crimson_trapdoor";
  MinecraftItemTypes2["Crossbow"] = "minecraft:crossbow";
  MinecraftItemTypes2["CryingObsidian"] = "minecraft:crying_obsidian";
  MinecraftItemTypes2["CutCopper"] = "minecraft:cut_copper";
  MinecraftItemTypes2["CutCopperSlab"] = "minecraft:cut_copper_slab";
  MinecraftItemTypes2["CutCopperStairs"] = "minecraft:cut_copper_stairs";
  MinecraftItemTypes2["CutRedSandstone"] = "minecraft:cut_red_sandstone";
  MinecraftItemTypes2["CutRedSandstoneSlab"] = "minecraft:cut_red_sandstone_slab";
  MinecraftItemTypes2["CutSandstone"] = "minecraft:cut_sandstone";
  MinecraftItemTypes2["CutSandstoneSlab"] = "minecraft:cut_sandstone_slab";
  MinecraftItemTypes2["CyanBundle"] = "minecraft:cyan_bundle";
  MinecraftItemTypes2["CyanCandle"] = "minecraft:cyan_candle";
  MinecraftItemTypes2["CyanCarpet"] = "minecraft:cyan_carpet";
  MinecraftItemTypes2["CyanConcrete"] = "minecraft:cyan_concrete";
  MinecraftItemTypes2["CyanConcretePowder"] = "minecraft:cyan_concrete_powder";
  MinecraftItemTypes2["CyanDye"] = "minecraft:cyan_dye";
  MinecraftItemTypes2["CyanGlazedTerracotta"] = "minecraft:cyan_glazed_terracotta";
  MinecraftItemTypes2["CyanShulkerBox"] = "minecraft:cyan_shulker_box";
  MinecraftItemTypes2["CyanStainedGlass"] = "minecraft:cyan_stained_glass";
  MinecraftItemTypes2["CyanStainedGlassPane"] = "minecraft:cyan_stained_glass_pane";
  MinecraftItemTypes2["CyanTerracotta"] = "minecraft:cyan_terracotta";
  MinecraftItemTypes2["CyanWool"] = "minecraft:cyan_wool";
  MinecraftItemTypes2["DamagedAnvil"] = "minecraft:damaged_anvil";
  MinecraftItemTypes2["Dandelion"] = "minecraft:dandelion";
  MinecraftItemTypes2["DangerPotterySherd"] = "minecraft:danger_pottery_sherd";
  MinecraftItemTypes2["DarkOakBoat"] = "minecraft:dark_oak_boat";
  MinecraftItemTypes2["DarkOakButton"] = "minecraft:dark_oak_button";
  MinecraftItemTypes2["DarkOakChestBoat"] = "minecraft:dark_oak_chest_boat";
  MinecraftItemTypes2["DarkOakDoor"] = "minecraft:dark_oak_door";
  MinecraftItemTypes2["DarkOakFence"] = "minecraft:dark_oak_fence";
  MinecraftItemTypes2["DarkOakFenceGate"] = "minecraft:dark_oak_fence_gate";
  MinecraftItemTypes2["DarkOakHangingSign"] = "minecraft:dark_oak_hanging_sign";
  MinecraftItemTypes2["DarkOakLeaves"] = "minecraft:dark_oak_leaves";
  MinecraftItemTypes2["DarkOakLog"] = "minecraft:dark_oak_log";
  MinecraftItemTypes2["DarkOakPlanks"] = "minecraft:dark_oak_planks";
  MinecraftItemTypes2["DarkOakPressurePlate"] = "minecraft:dark_oak_pressure_plate";
  MinecraftItemTypes2["DarkOakSapling"] = "minecraft:dark_oak_sapling";
  MinecraftItemTypes2["DarkOakSign"] = "minecraft:dark_oak_sign";
  MinecraftItemTypes2["DarkOakSlab"] = "minecraft:dark_oak_slab";
  MinecraftItemTypes2["DarkOakStairs"] = "minecraft:dark_oak_stairs";
  MinecraftItemTypes2["DarkOakTrapdoor"] = "minecraft:dark_oak_trapdoor";
  MinecraftItemTypes2["DarkOakWood"] = "minecraft:dark_oak_wood";
  MinecraftItemTypes2["DarkPrismarine"] = "minecraft:dark_prismarine";
  MinecraftItemTypes2["DarkPrismarineSlab"] = "minecraft:dark_prismarine_slab";
  MinecraftItemTypes2["DarkPrismarineStairs"] = "minecraft:dark_prismarine_stairs";
  MinecraftItemTypes2["DaylightDetector"] = "minecraft:daylight_detector";
  MinecraftItemTypes2["DeadBrainCoral"] = "minecraft:dead_brain_coral";
  MinecraftItemTypes2["DeadBrainCoralBlock"] = "minecraft:dead_brain_coral_block";
  MinecraftItemTypes2["DeadBrainCoralFan"] = "minecraft:dead_brain_coral_fan";
  MinecraftItemTypes2["DeadBubbleCoral"] = "minecraft:dead_bubble_coral";
  MinecraftItemTypes2["DeadBubbleCoralBlock"] = "minecraft:dead_bubble_coral_block";
  MinecraftItemTypes2["DeadBubbleCoralFan"] = "minecraft:dead_bubble_coral_fan";
  MinecraftItemTypes2["DeadFireCoral"] = "minecraft:dead_fire_coral";
  MinecraftItemTypes2["DeadFireCoralBlock"] = "minecraft:dead_fire_coral_block";
  MinecraftItemTypes2["DeadFireCoralFan"] = "minecraft:dead_fire_coral_fan";
  MinecraftItemTypes2["DeadHornCoral"] = "minecraft:dead_horn_coral";
  MinecraftItemTypes2["DeadHornCoralBlock"] = "minecraft:dead_horn_coral_block";
  MinecraftItemTypes2["DeadHornCoralFan"] = "minecraft:dead_horn_coral_fan";
  MinecraftItemTypes2["DeadTubeCoral"] = "minecraft:dead_tube_coral";
  MinecraftItemTypes2["DeadTubeCoralBlock"] = "minecraft:dead_tube_coral_block";
  MinecraftItemTypes2["DeadTubeCoralFan"] = "minecraft:dead_tube_coral_fan";
  MinecraftItemTypes2["Deadbush"] = "minecraft:deadbush";
  MinecraftItemTypes2["DecoratedPot"] = "minecraft:decorated_pot";
  MinecraftItemTypes2["Deepslate"] = "minecraft:deepslate";
  MinecraftItemTypes2["DeepslateBrickSlab"] = "minecraft:deepslate_brick_slab";
  MinecraftItemTypes2["DeepslateBrickStairs"] = "minecraft:deepslate_brick_stairs";
  MinecraftItemTypes2["DeepslateBrickWall"] = "minecraft:deepslate_brick_wall";
  MinecraftItemTypes2["DeepslateBricks"] = "minecraft:deepslate_bricks";
  MinecraftItemTypes2["DeepslateCoalOre"] = "minecraft:deepslate_coal_ore";
  MinecraftItemTypes2["DeepslateCopperOre"] = "minecraft:deepslate_copper_ore";
  MinecraftItemTypes2["DeepslateDiamondOre"] = "minecraft:deepslate_diamond_ore";
  MinecraftItemTypes2["DeepslateEmeraldOre"] = "minecraft:deepslate_emerald_ore";
  MinecraftItemTypes2["DeepslateGoldOre"] = "minecraft:deepslate_gold_ore";
  MinecraftItemTypes2["DeepslateIronOre"] = "minecraft:deepslate_iron_ore";
  MinecraftItemTypes2["DeepslateLapisOre"] = "minecraft:deepslate_lapis_ore";
  MinecraftItemTypes2["DeepslateRedstoneOre"] = "minecraft:deepslate_redstone_ore";
  MinecraftItemTypes2["DeepslateTileSlab"] = "minecraft:deepslate_tile_slab";
  MinecraftItemTypes2["DeepslateTileStairs"] = "minecraft:deepslate_tile_stairs";
  MinecraftItemTypes2["DeepslateTileWall"] = "minecraft:deepslate_tile_wall";
  MinecraftItemTypes2["DeepslateTiles"] = "minecraft:deepslate_tiles";
  MinecraftItemTypes2["Deny"] = "minecraft:deny";
  MinecraftItemTypes2["DetectorRail"] = "minecraft:detector_rail";
  MinecraftItemTypes2["Diamond"] = "minecraft:diamond";
  MinecraftItemTypes2["DiamondAxe"] = "minecraft:diamond_axe";
  MinecraftItemTypes2["DiamondBlock"] = "minecraft:diamond_block";
  MinecraftItemTypes2["DiamondBoots"] = "minecraft:diamond_boots";
  MinecraftItemTypes2["DiamondChestplate"] = "minecraft:diamond_chestplate";
  MinecraftItemTypes2["DiamondHelmet"] = "minecraft:diamond_helmet";
  MinecraftItemTypes2["DiamondHoe"] = "minecraft:diamond_hoe";
  MinecraftItemTypes2["DiamondHorseArmor"] = "minecraft:diamond_horse_armor";
  MinecraftItemTypes2["DiamondLeggings"] = "minecraft:diamond_leggings";
  MinecraftItemTypes2["DiamondOre"] = "minecraft:diamond_ore";
  MinecraftItemTypes2["DiamondPickaxe"] = "minecraft:diamond_pickaxe";
  MinecraftItemTypes2["DiamondShovel"] = "minecraft:diamond_shovel";
  MinecraftItemTypes2["DiamondSword"] = "minecraft:diamond_sword";
  MinecraftItemTypes2["Diorite"] = "minecraft:diorite";
  MinecraftItemTypes2["DioriteSlab"] = "minecraft:diorite_slab";
  MinecraftItemTypes2["DioriteStairs"] = "minecraft:diorite_stairs";
  MinecraftItemTypes2["DioriteWall"] = "minecraft:diorite_wall";
  MinecraftItemTypes2["Dirt"] = "minecraft:dirt";
  MinecraftItemTypes2["DirtWithRoots"] = "minecraft:dirt_with_roots";
  MinecraftItemTypes2["DiscFragment5"] = "minecraft:disc_fragment_5";
  MinecraftItemTypes2["Dispenser"] = "minecraft:dispenser";
  MinecraftItemTypes2["DolphinSpawnEgg"] = "minecraft:dolphin_spawn_egg";
  MinecraftItemTypes2["DonkeySpawnEgg"] = "minecraft:donkey_spawn_egg";
  MinecraftItemTypes2["DragonBreath"] = "minecraft:dragon_breath";
  MinecraftItemTypes2["DragonEgg"] = "minecraft:dragon_egg";
  MinecraftItemTypes2["DragonHead"] = "minecraft:dragon_head";
  MinecraftItemTypes2["DriedKelp"] = "minecraft:dried_kelp";
  MinecraftItemTypes2["DriedKelpBlock"] = "minecraft:dried_kelp_block";
  MinecraftItemTypes2["DripstoneBlock"] = "minecraft:dripstone_block";
  MinecraftItemTypes2["Dropper"] = "minecraft:dropper";
  MinecraftItemTypes2["DrownedSpawnEgg"] = "minecraft:drowned_spawn_egg";
  MinecraftItemTypes2["DuneArmorTrimSmithingTemplate"] = "minecraft:dune_armor_trim_smithing_template";
  MinecraftItemTypes2["EchoShard"] = "minecraft:echo_shard";
  MinecraftItemTypes2["Egg"] = "minecraft:egg";
  MinecraftItemTypes2["ElderGuardianSpawnEgg"] = "minecraft:elder_guardian_spawn_egg";
  MinecraftItemTypes2["Elytra"] = "minecraft:elytra";
  MinecraftItemTypes2["Emerald"] = "minecraft:emerald";
  MinecraftItemTypes2["EmeraldBlock"] = "minecraft:emerald_block";
  MinecraftItemTypes2["EmeraldOre"] = "minecraft:emerald_ore";
  MinecraftItemTypes2["EmptyMap"] = "minecraft:empty_map";
  MinecraftItemTypes2["EnchantedBook"] = "minecraft:enchanted_book";
  MinecraftItemTypes2["EnchantedGoldenApple"] = "minecraft:enchanted_golden_apple";
  MinecraftItemTypes2["EnchantingTable"] = "minecraft:enchanting_table";
  MinecraftItemTypes2["EndBrickStairs"] = "minecraft:end_brick_stairs";
  MinecraftItemTypes2["EndBricks"] = "minecraft:end_bricks";
  MinecraftItemTypes2["EndCrystal"] = "minecraft:end_crystal";
  MinecraftItemTypes2["EndPortalFrame"] = "minecraft:end_portal_frame";
  MinecraftItemTypes2["EndRod"] = "minecraft:end_rod";
  MinecraftItemTypes2["EndStone"] = "minecraft:end_stone";
  MinecraftItemTypes2["EndStoneBrickSlab"] = "minecraft:end_stone_brick_slab";
  MinecraftItemTypes2["EndStoneBrickWall"] = "minecraft:end_stone_brick_wall";
  MinecraftItemTypes2["EnderChest"] = "minecraft:ender_chest";
  MinecraftItemTypes2["EnderDragonSpawnEgg"] = "minecraft:ender_dragon_spawn_egg";
  MinecraftItemTypes2["EnderEye"] = "minecraft:ender_eye";
  MinecraftItemTypes2["EnderPearl"] = "minecraft:ender_pearl";
  MinecraftItemTypes2["EndermanSpawnEgg"] = "minecraft:enderman_spawn_egg";
  MinecraftItemTypes2["EndermiteSpawnEgg"] = "minecraft:endermite_spawn_egg";
  MinecraftItemTypes2["EvokerSpawnEgg"] = "minecraft:evoker_spawn_egg";
  MinecraftItemTypes2["ExperienceBottle"] = "minecraft:experience_bottle";
  MinecraftItemTypes2["ExplorerPotterySherd"] = "minecraft:explorer_pottery_sherd";
  MinecraftItemTypes2["ExposedChiseledCopper"] = "minecraft:exposed_chiseled_copper";
  MinecraftItemTypes2["ExposedCopper"] = "minecraft:exposed_copper";
  MinecraftItemTypes2["ExposedCopperBulb"] = "minecraft:exposed_copper_bulb";
  MinecraftItemTypes2["ExposedCopperDoor"] = "minecraft:exposed_copper_door";
  MinecraftItemTypes2["ExposedCopperGrate"] = "minecraft:exposed_copper_grate";
  MinecraftItemTypes2["ExposedCopperTrapdoor"] = "minecraft:exposed_copper_trapdoor";
  MinecraftItemTypes2["ExposedCutCopper"] = "minecraft:exposed_cut_copper";
  MinecraftItemTypes2["ExposedCutCopperSlab"] = "minecraft:exposed_cut_copper_slab";
  MinecraftItemTypes2["ExposedCutCopperStairs"] = "minecraft:exposed_cut_copper_stairs";
  MinecraftItemTypes2["EyeArmorTrimSmithingTemplate"] = "minecraft:eye_armor_trim_smithing_template";
  MinecraftItemTypes2["Farmland"] = "minecraft:farmland";
  MinecraftItemTypes2["Feather"] = "minecraft:feather";
  MinecraftItemTypes2["FenceGate"] = "minecraft:fence_gate";
  MinecraftItemTypes2["FermentedSpiderEye"] = "minecraft:fermented_spider_eye";
  MinecraftItemTypes2["Fern"] = "minecraft:fern";
  MinecraftItemTypes2["FieldMasonedBannerPattern"] = "minecraft:field_masoned_banner_pattern";
  MinecraftItemTypes2["FilledMap"] = "minecraft:filled_map";
  MinecraftItemTypes2["FireCharge"] = "minecraft:fire_charge";
  MinecraftItemTypes2["FireCoral"] = "minecraft:fire_coral";
  MinecraftItemTypes2["FireCoralBlock"] = "minecraft:fire_coral_block";
  MinecraftItemTypes2["FireCoralFan"] = "minecraft:fire_coral_fan";
  MinecraftItemTypes2["FireflyBush"] = "minecraft:firefly_bush";
  MinecraftItemTypes2["FireworkRocket"] = "minecraft:firework_rocket";
  MinecraftItemTypes2["FireworkStar"] = "minecraft:firework_star";
  MinecraftItemTypes2["FishingRod"] = "minecraft:fishing_rod";
  MinecraftItemTypes2["FletchingTable"] = "minecraft:fletching_table";
  MinecraftItemTypes2["Flint"] = "minecraft:flint";
  MinecraftItemTypes2["FlintAndSteel"] = "minecraft:flint_and_steel";
  MinecraftItemTypes2["FlowArmorTrimSmithingTemplate"] = "minecraft:flow_armor_trim_smithing_template";
  MinecraftItemTypes2["FlowBannerPattern"] = "minecraft:flow_banner_pattern";
  MinecraftItemTypes2["FlowPotterySherd"] = "minecraft:flow_pottery_sherd";
  MinecraftItemTypes2["FlowerBannerPattern"] = "minecraft:flower_banner_pattern";
  MinecraftItemTypes2["FlowerPot"] = "minecraft:flower_pot";
  MinecraftItemTypes2["FloweringAzalea"] = "minecraft:flowering_azalea";
  MinecraftItemTypes2["FoxSpawnEgg"] = "minecraft:fox_spawn_egg";
  MinecraftItemTypes2["Frame"] = "minecraft:frame";
  MinecraftItemTypes2["FriendPotterySherd"] = "minecraft:friend_pottery_sherd";
  MinecraftItemTypes2["FrogSpawn"] = "minecraft:frog_spawn";
  MinecraftItemTypes2["FrogSpawnEgg"] = "minecraft:frog_spawn_egg";
  MinecraftItemTypes2["FrostedIce"] = "minecraft:frosted_ice";
  MinecraftItemTypes2["Furnace"] = "minecraft:furnace";
  MinecraftItemTypes2["GhastSpawnEgg"] = "minecraft:ghast_spawn_egg";
  MinecraftItemTypes2["GhastTear"] = "minecraft:ghast_tear";
  MinecraftItemTypes2["GildedBlackstone"] = "minecraft:gilded_blackstone";
  MinecraftItemTypes2["Glass"] = "minecraft:glass";
  MinecraftItemTypes2["GlassBottle"] = "minecraft:glass_bottle";
  MinecraftItemTypes2["GlassPane"] = "minecraft:glass_pane";
  MinecraftItemTypes2["GlisteringMelonSlice"] = "minecraft:glistering_melon_slice";
  MinecraftItemTypes2["GlobeBannerPattern"] = "minecraft:globe_banner_pattern";
  MinecraftItemTypes2["GlowBerries"] = "minecraft:glow_berries";
  MinecraftItemTypes2["GlowFrame"] = "minecraft:glow_frame";
  MinecraftItemTypes2["GlowInkSac"] = "minecraft:glow_ink_sac";
  MinecraftItemTypes2["GlowLichen"] = "minecraft:glow_lichen";
  MinecraftItemTypes2["GlowSquidSpawnEgg"] = "minecraft:glow_squid_spawn_egg";
  MinecraftItemTypes2["Glowstone"] = "minecraft:glowstone";
  MinecraftItemTypes2["GlowstoneDust"] = "minecraft:glowstone_dust";
  MinecraftItemTypes2["GoatHorn"] = "minecraft:goat_horn";
  MinecraftItemTypes2["GoatSpawnEgg"] = "minecraft:goat_spawn_egg";
  MinecraftItemTypes2["GoldBlock"] = "minecraft:gold_block";
  MinecraftItemTypes2["GoldIngot"] = "minecraft:gold_ingot";
  MinecraftItemTypes2["GoldNugget"] = "minecraft:gold_nugget";
  MinecraftItemTypes2["GoldOre"] = "minecraft:gold_ore";
  MinecraftItemTypes2["GoldenApple"] = "minecraft:golden_apple";
  MinecraftItemTypes2["GoldenAxe"] = "minecraft:golden_axe";
  MinecraftItemTypes2["GoldenBoots"] = "minecraft:golden_boots";
  MinecraftItemTypes2["GoldenCarrot"] = "minecraft:golden_carrot";
  MinecraftItemTypes2["GoldenChestplate"] = "minecraft:golden_chestplate";
  MinecraftItemTypes2["GoldenHelmet"] = "minecraft:golden_helmet";
  MinecraftItemTypes2["GoldenHoe"] = "minecraft:golden_hoe";
  MinecraftItemTypes2["GoldenHorseArmor"] = "minecraft:golden_horse_armor";
  MinecraftItemTypes2["GoldenLeggings"] = "minecraft:golden_leggings";
  MinecraftItemTypes2["GoldenPickaxe"] = "minecraft:golden_pickaxe";
  MinecraftItemTypes2["GoldenRail"] = "minecraft:golden_rail";
  MinecraftItemTypes2["GoldenShovel"] = "minecraft:golden_shovel";
  MinecraftItemTypes2["GoldenSword"] = "minecraft:golden_sword";
  MinecraftItemTypes2["Granite"] = "minecraft:granite";
  MinecraftItemTypes2["GraniteSlab"] = "minecraft:granite_slab";
  MinecraftItemTypes2["GraniteStairs"] = "minecraft:granite_stairs";
  MinecraftItemTypes2["GraniteWall"] = "minecraft:granite_wall";
  MinecraftItemTypes2["GrassBlock"] = "minecraft:grass_block";
  MinecraftItemTypes2["GrassPath"] = "minecraft:grass_path";
  MinecraftItemTypes2["Gravel"] = "minecraft:gravel";
  MinecraftItemTypes2["GrayBundle"] = "minecraft:gray_bundle";
  MinecraftItemTypes2["GrayCandle"] = "minecraft:gray_candle";
  MinecraftItemTypes2["GrayCarpet"] = "minecraft:gray_carpet";
  MinecraftItemTypes2["GrayConcrete"] = "minecraft:gray_concrete";
  MinecraftItemTypes2["GrayConcretePowder"] = "minecraft:gray_concrete_powder";
  MinecraftItemTypes2["GrayDye"] = "minecraft:gray_dye";
  MinecraftItemTypes2["GrayGlazedTerracotta"] = "minecraft:gray_glazed_terracotta";
  MinecraftItemTypes2["GrayShulkerBox"] = "minecraft:gray_shulker_box";
  MinecraftItemTypes2["GrayStainedGlass"] = "minecraft:gray_stained_glass";
  MinecraftItemTypes2["GrayStainedGlassPane"] = "minecraft:gray_stained_glass_pane";
  MinecraftItemTypes2["GrayTerracotta"] = "minecraft:gray_terracotta";
  MinecraftItemTypes2["GrayWool"] = "minecraft:gray_wool";
  MinecraftItemTypes2["GreenBundle"] = "minecraft:green_bundle";
  MinecraftItemTypes2["GreenCandle"] = "minecraft:green_candle";
  MinecraftItemTypes2["GreenCarpet"] = "minecraft:green_carpet";
  MinecraftItemTypes2["GreenConcrete"] = "minecraft:green_concrete";
  MinecraftItemTypes2["GreenConcretePowder"] = "minecraft:green_concrete_powder";
  MinecraftItemTypes2["GreenDye"] = "minecraft:green_dye";
  MinecraftItemTypes2["GreenGlazedTerracotta"] = "minecraft:green_glazed_terracotta";
  MinecraftItemTypes2["GreenShulkerBox"] = "minecraft:green_shulker_box";
  MinecraftItemTypes2["GreenStainedGlass"] = "minecraft:green_stained_glass";
  MinecraftItemTypes2["GreenStainedGlassPane"] = "minecraft:green_stained_glass_pane";
  MinecraftItemTypes2["GreenTerracotta"] = "minecraft:green_terracotta";
  MinecraftItemTypes2["GreenWool"] = "minecraft:green_wool";
  MinecraftItemTypes2["Grindstone"] = "minecraft:grindstone";
  MinecraftItemTypes2["GuardianSpawnEgg"] = "minecraft:guardian_spawn_egg";
  MinecraftItemTypes2["Gunpowder"] = "minecraft:gunpowder";
  MinecraftItemTypes2["GusterBannerPattern"] = "minecraft:guster_banner_pattern";
  MinecraftItemTypes2["GusterPotterySherd"] = "minecraft:guster_pottery_sherd";
  MinecraftItemTypes2["HangingRoots"] = "minecraft:hanging_roots";
  MinecraftItemTypes2["HardenedClay"] = "minecraft:hardened_clay";
  MinecraftItemTypes2["HayBlock"] = "minecraft:hay_block";
  MinecraftItemTypes2["HeartOfTheSea"] = "minecraft:heart_of_the_sea";
  MinecraftItemTypes2["HeartPotterySherd"] = "minecraft:heart_pottery_sherd";
  MinecraftItemTypes2["HeartbreakPotterySherd"] = "minecraft:heartbreak_pottery_sherd";
  MinecraftItemTypes2["HeavyCore"] = "minecraft:heavy_core";
  MinecraftItemTypes2["HeavyWeightedPressurePlate"] = "minecraft:heavy_weighted_pressure_plate";
  MinecraftItemTypes2["HoglinSpawnEgg"] = "minecraft:hoglin_spawn_egg";
  MinecraftItemTypes2["HoneyBlock"] = "minecraft:honey_block";
  MinecraftItemTypes2["HoneyBottle"] = "minecraft:honey_bottle";
  MinecraftItemTypes2["Honeycomb"] = "minecraft:honeycomb";
  MinecraftItemTypes2["HoneycombBlock"] = "minecraft:honeycomb_block";
  MinecraftItemTypes2["Hopper"] = "minecraft:hopper";
  MinecraftItemTypes2["HopperMinecart"] = "minecraft:hopper_minecart";
  MinecraftItemTypes2["HornCoral"] = "minecraft:horn_coral";
  MinecraftItemTypes2["HornCoralBlock"] = "minecraft:horn_coral_block";
  MinecraftItemTypes2["HornCoralFan"] = "minecraft:horn_coral_fan";
  MinecraftItemTypes2["HorseSpawnEgg"] = "minecraft:horse_spawn_egg";
  MinecraftItemTypes2["HostArmorTrimSmithingTemplate"] = "minecraft:host_armor_trim_smithing_template";
  MinecraftItemTypes2["HowlPotterySherd"] = "minecraft:howl_pottery_sherd";
  MinecraftItemTypes2["HuskSpawnEgg"] = "minecraft:husk_spawn_egg";
  MinecraftItemTypes2["Ice"] = "minecraft:ice";
  MinecraftItemTypes2["InfestedChiseledStoneBricks"] = "minecraft:infested_chiseled_stone_bricks";
  MinecraftItemTypes2["InfestedCobblestone"] = "minecraft:infested_cobblestone";
  MinecraftItemTypes2["InfestedCrackedStoneBricks"] = "minecraft:infested_cracked_stone_bricks";
  MinecraftItemTypes2["InfestedDeepslate"] = "minecraft:infested_deepslate";
  MinecraftItemTypes2["InfestedMossyStoneBricks"] = "minecraft:infested_mossy_stone_bricks";
  MinecraftItemTypes2["InfestedStone"] = "minecraft:infested_stone";
  MinecraftItemTypes2["InfestedStoneBricks"] = "minecraft:infested_stone_bricks";
  MinecraftItemTypes2["InkSac"] = "minecraft:ink_sac";
  MinecraftItemTypes2["IronAxe"] = "minecraft:iron_axe";
  MinecraftItemTypes2["IronBars"] = "minecraft:iron_bars";
  MinecraftItemTypes2["IronBlock"] = "minecraft:iron_block";
  MinecraftItemTypes2["IronBoots"] = "minecraft:iron_boots";
  MinecraftItemTypes2["IronChestplate"] = "minecraft:iron_chestplate";
  MinecraftItemTypes2["IronDoor"] = "minecraft:iron_door";
  MinecraftItemTypes2["IronGolemSpawnEgg"] = "minecraft:iron_golem_spawn_egg";
  MinecraftItemTypes2["IronHelmet"] = "minecraft:iron_helmet";
  MinecraftItemTypes2["IronHoe"] = "minecraft:iron_hoe";
  MinecraftItemTypes2["IronHorseArmor"] = "minecraft:iron_horse_armor";
  MinecraftItemTypes2["IronIngot"] = "minecraft:iron_ingot";
  MinecraftItemTypes2["IronLeggings"] = "minecraft:iron_leggings";
  MinecraftItemTypes2["IronNugget"] = "minecraft:iron_nugget";
  MinecraftItemTypes2["IronOre"] = "minecraft:iron_ore";
  MinecraftItemTypes2["IronPickaxe"] = "minecraft:iron_pickaxe";
  MinecraftItemTypes2["IronShovel"] = "minecraft:iron_shovel";
  MinecraftItemTypes2["IronSword"] = "minecraft:iron_sword";
  MinecraftItemTypes2["IronTrapdoor"] = "minecraft:iron_trapdoor";
  MinecraftItemTypes2["Jigsaw"] = "minecraft:jigsaw";
  MinecraftItemTypes2["Jukebox"] = "minecraft:jukebox";
  MinecraftItemTypes2["JungleBoat"] = "minecraft:jungle_boat";
  MinecraftItemTypes2["JungleButton"] = "minecraft:jungle_button";
  MinecraftItemTypes2["JungleChestBoat"] = "minecraft:jungle_chest_boat";
  MinecraftItemTypes2["JungleDoor"] = "minecraft:jungle_door";
  MinecraftItemTypes2["JungleFence"] = "minecraft:jungle_fence";
  MinecraftItemTypes2["JungleFenceGate"] = "minecraft:jungle_fence_gate";
  MinecraftItemTypes2["JungleHangingSign"] = "minecraft:jungle_hanging_sign";
  MinecraftItemTypes2["JungleLeaves"] = "minecraft:jungle_leaves";
  MinecraftItemTypes2["JungleLog"] = "minecraft:jungle_log";
  MinecraftItemTypes2["JunglePlanks"] = "minecraft:jungle_planks";
  MinecraftItemTypes2["JunglePressurePlate"] = "minecraft:jungle_pressure_plate";
  MinecraftItemTypes2["JungleSapling"] = "minecraft:jungle_sapling";
  MinecraftItemTypes2["JungleSign"] = "minecraft:jungle_sign";
  MinecraftItemTypes2["JungleSlab"] = "minecraft:jungle_slab";
  MinecraftItemTypes2["JungleStairs"] = "minecraft:jungle_stairs";
  MinecraftItemTypes2["JungleTrapdoor"] = "minecraft:jungle_trapdoor";
  MinecraftItemTypes2["JungleWood"] = "minecraft:jungle_wood";
  MinecraftItemTypes2["Kelp"] = "minecraft:kelp";
  MinecraftItemTypes2["Ladder"] = "minecraft:ladder";
  MinecraftItemTypes2["Lantern"] = "minecraft:lantern";
  MinecraftItemTypes2["LapisBlock"] = "minecraft:lapis_block";
  MinecraftItemTypes2["LapisLazuli"] = "minecraft:lapis_lazuli";
  MinecraftItemTypes2["LapisOre"] = "minecraft:lapis_ore";
  MinecraftItemTypes2["LargeAmethystBud"] = "minecraft:large_amethyst_bud";
  MinecraftItemTypes2["LargeFern"] = "minecraft:large_fern";
  MinecraftItemTypes2["LavaBucket"] = "minecraft:lava_bucket";
  MinecraftItemTypes2["Lead"] = "minecraft:lead";
  MinecraftItemTypes2["LeafLitter"] = "minecraft:leaf_litter";
  MinecraftItemTypes2["Leather"] = "minecraft:leather";
  MinecraftItemTypes2["LeatherBoots"] = "minecraft:leather_boots";
  MinecraftItemTypes2["LeatherChestplate"] = "minecraft:leather_chestplate";
  MinecraftItemTypes2["LeatherHelmet"] = "minecraft:leather_helmet";
  MinecraftItemTypes2["LeatherHorseArmor"] = "minecraft:leather_horse_armor";
  MinecraftItemTypes2["LeatherLeggings"] = "minecraft:leather_leggings";
  MinecraftItemTypes2["Lectern"] = "minecraft:lectern";
  MinecraftItemTypes2["Lever"] = "minecraft:lever";
  MinecraftItemTypes2["LightBlock0"] = "minecraft:light_block_0";
  MinecraftItemTypes2["LightBlock1"] = "minecraft:light_block_1";
  MinecraftItemTypes2["LightBlock10"] = "minecraft:light_block_10";
  MinecraftItemTypes2["LightBlock11"] = "minecraft:light_block_11";
  MinecraftItemTypes2["LightBlock12"] = "minecraft:light_block_12";
  MinecraftItemTypes2["LightBlock13"] = "minecraft:light_block_13";
  MinecraftItemTypes2["LightBlock14"] = "minecraft:light_block_14";
  MinecraftItemTypes2["LightBlock15"] = "minecraft:light_block_15";
  MinecraftItemTypes2["LightBlock2"] = "minecraft:light_block_2";
  MinecraftItemTypes2["LightBlock3"] = "minecraft:light_block_3";
  MinecraftItemTypes2["LightBlock4"] = "minecraft:light_block_4";
  MinecraftItemTypes2["LightBlock5"] = "minecraft:light_block_5";
  MinecraftItemTypes2["LightBlock6"] = "minecraft:light_block_6";
  MinecraftItemTypes2["LightBlock7"] = "minecraft:light_block_7";
  MinecraftItemTypes2["LightBlock8"] = "minecraft:light_block_8";
  MinecraftItemTypes2["LightBlock9"] = "minecraft:light_block_9";
  MinecraftItemTypes2["LightBlueBundle"] = "minecraft:light_blue_bundle";
  MinecraftItemTypes2["LightBlueCandle"] = "minecraft:light_blue_candle";
  MinecraftItemTypes2["LightBlueCarpet"] = "minecraft:light_blue_carpet";
  MinecraftItemTypes2["LightBlueConcrete"] = "minecraft:light_blue_concrete";
  MinecraftItemTypes2["LightBlueConcretePowder"] = "minecraft:light_blue_concrete_powder";
  MinecraftItemTypes2["LightBlueDye"] = "minecraft:light_blue_dye";
  MinecraftItemTypes2["LightBlueGlazedTerracotta"] = "minecraft:light_blue_glazed_terracotta";
  MinecraftItemTypes2["LightBlueShulkerBox"] = "minecraft:light_blue_shulker_box";
  MinecraftItemTypes2["LightBlueStainedGlass"] = "minecraft:light_blue_stained_glass";
  MinecraftItemTypes2["LightBlueStainedGlassPane"] = "minecraft:light_blue_stained_glass_pane";
  MinecraftItemTypes2["LightBlueTerracotta"] = "minecraft:light_blue_terracotta";
  MinecraftItemTypes2["LightBlueWool"] = "minecraft:light_blue_wool";
  MinecraftItemTypes2["LightGrayBundle"] = "minecraft:light_gray_bundle";
  MinecraftItemTypes2["LightGrayCandle"] = "minecraft:light_gray_candle";
  MinecraftItemTypes2["LightGrayCarpet"] = "minecraft:light_gray_carpet";
  MinecraftItemTypes2["LightGrayConcrete"] = "minecraft:light_gray_concrete";
  MinecraftItemTypes2["LightGrayConcretePowder"] = "minecraft:light_gray_concrete_powder";
  MinecraftItemTypes2["LightGrayDye"] = "minecraft:light_gray_dye";
  MinecraftItemTypes2["LightGrayShulkerBox"] = "minecraft:light_gray_shulker_box";
  MinecraftItemTypes2["LightGrayStainedGlass"] = "minecraft:light_gray_stained_glass";
  MinecraftItemTypes2["LightGrayStainedGlassPane"] = "minecraft:light_gray_stained_glass_pane";
  MinecraftItemTypes2["LightGrayTerracotta"] = "minecraft:light_gray_terracotta";
  MinecraftItemTypes2["LightGrayWool"] = "minecraft:light_gray_wool";
  MinecraftItemTypes2["LightWeightedPressurePlate"] = "minecraft:light_weighted_pressure_plate";
  MinecraftItemTypes2["LightningRod"] = "minecraft:lightning_rod";
  MinecraftItemTypes2["Lilac"] = "minecraft:lilac";
  MinecraftItemTypes2["LilyOfTheValley"] = "minecraft:lily_of_the_valley";
  MinecraftItemTypes2["LimeBundle"] = "minecraft:lime_bundle";
  MinecraftItemTypes2["LimeCandle"] = "minecraft:lime_candle";
  MinecraftItemTypes2["LimeCarpet"] = "minecraft:lime_carpet";
  MinecraftItemTypes2["LimeConcrete"] = "minecraft:lime_concrete";
  MinecraftItemTypes2["LimeConcretePowder"] = "minecraft:lime_concrete_powder";
  MinecraftItemTypes2["LimeDye"] = "minecraft:lime_dye";
  MinecraftItemTypes2["LimeGlazedTerracotta"] = "minecraft:lime_glazed_terracotta";
  MinecraftItemTypes2["LimeShulkerBox"] = "minecraft:lime_shulker_box";
  MinecraftItemTypes2["LimeStainedGlass"] = "minecraft:lime_stained_glass";
  MinecraftItemTypes2["LimeStainedGlassPane"] = "minecraft:lime_stained_glass_pane";
  MinecraftItemTypes2["LimeTerracotta"] = "minecraft:lime_terracotta";
  MinecraftItemTypes2["LimeWool"] = "minecraft:lime_wool";
  MinecraftItemTypes2["LingeringPotion"] = "minecraft:lingering_potion";
  MinecraftItemTypes2["LitPumpkin"] = "minecraft:lit_pumpkin";
  MinecraftItemTypes2["LlamaSpawnEgg"] = "minecraft:llama_spawn_egg";
  MinecraftItemTypes2["Lodestone"] = "minecraft:lodestone";
  MinecraftItemTypes2["LodestoneCompass"] = "minecraft:lodestone_compass";
  MinecraftItemTypes2["Loom"] = "minecraft:loom";
  MinecraftItemTypes2["Mace"] = "minecraft:mace";
  MinecraftItemTypes2["MagentaBundle"] = "minecraft:magenta_bundle";
  MinecraftItemTypes2["MagentaCandle"] = "minecraft:magenta_candle";
  MinecraftItemTypes2["MagentaCarpet"] = "minecraft:magenta_carpet";
  MinecraftItemTypes2["MagentaConcrete"] = "minecraft:magenta_concrete";
  MinecraftItemTypes2["MagentaConcretePowder"] = "minecraft:magenta_concrete_powder";
  MinecraftItemTypes2["MagentaDye"] = "minecraft:magenta_dye";
  MinecraftItemTypes2["MagentaGlazedTerracotta"] = "minecraft:magenta_glazed_terracotta";
  MinecraftItemTypes2["MagentaShulkerBox"] = "minecraft:magenta_shulker_box";
  MinecraftItemTypes2["MagentaStainedGlass"] = "minecraft:magenta_stained_glass";
  MinecraftItemTypes2["MagentaStainedGlassPane"] = "minecraft:magenta_stained_glass_pane";
  MinecraftItemTypes2["MagentaTerracotta"] = "minecraft:magenta_terracotta";
  MinecraftItemTypes2["MagentaWool"] = "minecraft:magenta_wool";
  MinecraftItemTypes2["Magma"] = "minecraft:magma";
  MinecraftItemTypes2["MagmaCream"] = "minecraft:magma_cream";
  MinecraftItemTypes2["MagmaCubeSpawnEgg"] = "minecraft:magma_cube_spawn_egg";
  MinecraftItemTypes2["MangroveBoat"] = "minecraft:mangrove_boat";
  MinecraftItemTypes2["MangroveButton"] = "minecraft:mangrove_button";
  MinecraftItemTypes2["MangroveChestBoat"] = "minecraft:mangrove_chest_boat";
  MinecraftItemTypes2["MangroveDoor"] = "minecraft:mangrove_door";
  MinecraftItemTypes2["MangroveFence"] = "minecraft:mangrove_fence";
  MinecraftItemTypes2["MangroveFenceGate"] = "minecraft:mangrove_fence_gate";
  MinecraftItemTypes2["MangroveHangingSign"] = "minecraft:mangrove_hanging_sign";
  MinecraftItemTypes2["MangroveLeaves"] = "minecraft:mangrove_leaves";
  MinecraftItemTypes2["MangroveLog"] = "minecraft:mangrove_log";
  MinecraftItemTypes2["MangrovePlanks"] = "minecraft:mangrove_planks";
  MinecraftItemTypes2["MangrovePressurePlate"] = "minecraft:mangrove_pressure_plate";
  MinecraftItemTypes2["MangrovePropagule"] = "minecraft:mangrove_propagule";
  MinecraftItemTypes2["MangroveRoots"] = "minecraft:mangrove_roots";
  MinecraftItemTypes2["MangroveSign"] = "minecraft:mangrove_sign";
  MinecraftItemTypes2["MangroveSlab"] = "minecraft:mangrove_slab";
  MinecraftItemTypes2["MangroveStairs"] = "minecraft:mangrove_stairs";
  MinecraftItemTypes2["MangroveTrapdoor"] = "minecraft:mangrove_trapdoor";
  MinecraftItemTypes2["MangroveWood"] = "minecraft:mangrove_wood";
  MinecraftItemTypes2["MediumAmethystBud"] = "minecraft:medium_amethyst_bud";
  MinecraftItemTypes2["MelonBlock"] = "minecraft:melon_block";
  MinecraftItemTypes2["MelonSeeds"] = "minecraft:melon_seeds";
  MinecraftItemTypes2["MelonSlice"] = "minecraft:melon_slice";
  MinecraftItemTypes2["MilkBucket"] = "minecraft:milk_bucket";
  MinecraftItemTypes2["Minecart"] = "minecraft:minecart";
  MinecraftItemTypes2["MinerPotterySherd"] = "minecraft:miner_pottery_sherd";
  MinecraftItemTypes2["MobSpawner"] = "minecraft:mob_spawner";
  MinecraftItemTypes2["MojangBannerPattern"] = "minecraft:mojang_banner_pattern";
  MinecraftItemTypes2["MooshroomSpawnEgg"] = "minecraft:mooshroom_spawn_egg";
  MinecraftItemTypes2["MossBlock"] = "minecraft:moss_block";
  MinecraftItemTypes2["MossCarpet"] = "minecraft:moss_carpet";
  MinecraftItemTypes2["MossyCobblestone"] = "minecraft:mossy_cobblestone";
  MinecraftItemTypes2["MossyCobblestoneSlab"] = "minecraft:mossy_cobblestone_slab";
  MinecraftItemTypes2["MossyCobblestoneStairs"] = "minecraft:mossy_cobblestone_stairs";
  MinecraftItemTypes2["MossyCobblestoneWall"] = "minecraft:mossy_cobblestone_wall";
  MinecraftItemTypes2["MossyStoneBrickSlab"] = "minecraft:mossy_stone_brick_slab";
  MinecraftItemTypes2["MossyStoneBrickStairs"] = "minecraft:mossy_stone_brick_stairs";
  MinecraftItemTypes2["MossyStoneBrickWall"] = "minecraft:mossy_stone_brick_wall";
  MinecraftItemTypes2["MossyStoneBricks"] = "minecraft:mossy_stone_bricks";
  MinecraftItemTypes2["MournerPotterySherd"] = "minecraft:mourner_pottery_sherd";
  MinecraftItemTypes2["Mud"] = "minecraft:mud";
  MinecraftItemTypes2["MudBrickSlab"] = "minecraft:mud_brick_slab";
  MinecraftItemTypes2["MudBrickStairs"] = "minecraft:mud_brick_stairs";
  MinecraftItemTypes2["MudBrickWall"] = "minecraft:mud_brick_wall";
  MinecraftItemTypes2["MudBricks"] = "minecraft:mud_bricks";
  MinecraftItemTypes2["MuddyMangroveRoots"] = "minecraft:muddy_mangrove_roots";
  MinecraftItemTypes2["MuleSpawnEgg"] = "minecraft:mule_spawn_egg";
  MinecraftItemTypes2["MushroomStem"] = "minecraft:mushroom_stem";
  MinecraftItemTypes2["MushroomStew"] = "minecraft:mushroom_stew";
  MinecraftItemTypes2["MusicDisc11"] = "minecraft:music_disc_11";
  MinecraftItemTypes2["MusicDisc13"] = "minecraft:music_disc_13";
  MinecraftItemTypes2["MusicDisc5"] = "minecraft:music_disc_5";
  MinecraftItemTypes2["MusicDiscBlocks"] = "minecraft:music_disc_blocks";
  MinecraftItemTypes2["MusicDiscCat"] = "minecraft:music_disc_cat";
  MinecraftItemTypes2["MusicDiscChirp"] = "minecraft:music_disc_chirp";
  MinecraftItemTypes2["MusicDiscCreator"] = "minecraft:music_disc_creator";
  MinecraftItemTypes2["MusicDiscCreatorMusicBox"] = "minecraft:music_disc_creator_music_box";
  MinecraftItemTypes2["MusicDiscFar"] = "minecraft:music_disc_far";
  MinecraftItemTypes2["MusicDiscMall"] = "minecraft:music_disc_mall";
  MinecraftItemTypes2["MusicDiscMellohi"] = "minecraft:music_disc_mellohi";
  MinecraftItemTypes2["MusicDiscOtherside"] = "minecraft:music_disc_otherside";
  MinecraftItemTypes2["MusicDiscPigstep"] = "minecraft:music_disc_pigstep";
  MinecraftItemTypes2["MusicDiscPrecipice"] = "minecraft:music_disc_precipice";
  MinecraftItemTypes2["MusicDiscRelic"] = "minecraft:music_disc_relic";
  MinecraftItemTypes2["MusicDiscStal"] = "minecraft:music_disc_stal";
  MinecraftItemTypes2["MusicDiscStrad"] = "minecraft:music_disc_strad";
  MinecraftItemTypes2["MusicDiscWait"] = "minecraft:music_disc_wait";
  MinecraftItemTypes2["MusicDiscWard"] = "minecraft:music_disc_ward";
  MinecraftItemTypes2["Mutton"] = "minecraft:mutton";
  MinecraftItemTypes2["Mycelium"] = "minecraft:mycelium";
  MinecraftItemTypes2["NameTag"] = "minecraft:name_tag";
  MinecraftItemTypes2["NautilusShell"] = "minecraft:nautilus_shell";
  MinecraftItemTypes2["NetherBrick"] = "minecraft:nether_brick";
  MinecraftItemTypes2["NetherBrickFence"] = "minecraft:nether_brick_fence";
  MinecraftItemTypes2["NetherBrickSlab"] = "minecraft:nether_brick_slab";
  MinecraftItemTypes2["NetherBrickStairs"] = "minecraft:nether_brick_stairs";
  MinecraftItemTypes2["NetherBrickWall"] = "minecraft:nether_brick_wall";
  MinecraftItemTypes2["NetherGoldOre"] = "minecraft:nether_gold_ore";
  MinecraftItemTypes2["NetherSprouts"] = "minecraft:nether_sprouts";
  MinecraftItemTypes2["NetherStar"] = "minecraft:nether_star";
  MinecraftItemTypes2["NetherWart"] = "minecraft:nether_wart";
  MinecraftItemTypes2["NetherWartBlock"] = "minecraft:nether_wart_block";
  MinecraftItemTypes2["Netherbrick"] = "minecraft:netherbrick";
  MinecraftItemTypes2["NetheriteAxe"] = "minecraft:netherite_axe";
  MinecraftItemTypes2["NetheriteBlock"] = "minecraft:netherite_block";
  MinecraftItemTypes2["NetheriteBoots"] = "minecraft:netherite_boots";
  MinecraftItemTypes2["NetheriteChestplate"] = "minecraft:netherite_chestplate";
  MinecraftItemTypes2["NetheriteHelmet"] = "minecraft:netherite_helmet";
  MinecraftItemTypes2["NetheriteHoe"] = "minecraft:netherite_hoe";
  MinecraftItemTypes2["NetheriteIngot"] = "minecraft:netherite_ingot";
  MinecraftItemTypes2["NetheriteLeggings"] = "minecraft:netherite_leggings";
  MinecraftItemTypes2["NetheritePickaxe"] = "minecraft:netherite_pickaxe";
  MinecraftItemTypes2["NetheriteScrap"] = "minecraft:netherite_scrap";
  MinecraftItemTypes2["NetheriteShovel"] = "minecraft:netherite_shovel";
  MinecraftItemTypes2["NetheriteSword"] = "minecraft:netherite_sword";
  MinecraftItemTypes2["NetheriteUpgradeSmithingTemplate"] = "minecraft:netherite_upgrade_smithing_template";
  MinecraftItemTypes2["Netherrack"] = "minecraft:netherrack";
  MinecraftItemTypes2["NormalStoneSlab"] = "minecraft:normal_stone_slab";
  MinecraftItemTypes2["NormalStoneStairs"] = "minecraft:normal_stone_stairs";
  MinecraftItemTypes2["Noteblock"] = "minecraft:noteblock";
  MinecraftItemTypes2["OakBoat"] = "minecraft:oak_boat";
  MinecraftItemTypes2["OakChestBoat"] = "minecraft:oak_chest_boat";
  MinecraftItemTypes2["OakFence"] = "minecraft:oak_fence";
  MinecraftItemTypes2["OakHangingSign"] = "minecraft:oak_hanging_sign";
  MinecraftItemTypes2["OakLeaves"] = "minecraft:oak_leaves";
  MinecraftItemTypes2["OakLog"] = "minecraft:oak_log";
  MinecraftItemTypes2["OakPlanks"] = "minecraft:oak_planks";
  MinecraftItemTypes2["OakSapling"] = "minecraft:oak_sapling";
  MinecraftItemTypes2["OakSign"] = "minecraft:oak_sign";
  MinecraftItemTypes2["OakSlab"] = "minecraft:oak_slab";
  MinecraftItemTypes2["OakStairs"] = "minecraft:oak_stairs";
  MinecraftItemTypes2["OakWood"] = "minecraft:oak_wood";
  MinecraftItemTypes2["Observer"] = "minecraft:observer";
  MinecraftItemTypes2["Obsidian"] = "minecraft:obsidian";
  MinecraftItemTypes2["OcelotSpawnEgg"] = "minecraft:ocelot_spawn_egg";
  MinecraftItemTypes2["OchreFroglight"] = "minecraft:ochre_froglight";
  MinecraftItemTypes2["OminousBottle"] = "minecraft:ominous_bottle";
  MinecraftItemTypes2["OminousTrialKey"] = "minecraft:ominous_trial_key";
  MinecraftItemTypes2["OpenEyeblossom"] = "minecraft:open_eyeblossom";
  MinecraftItemTypes2["OrangeBundle"] = "minecraft:orange_bundle";
  MinecraftItemTypes2["OrangeCandle"] = "minecraft:orange_candle";
  MinecraftItemTypes2["OrangeCarpet"] = "minecraft:orange_carpet";
  MinecraftItemTypes2["OrangeConcrete"] = "minecraft:orange_concrete";
  MinecraftItemTypes2["OrangeConcretePowder"] = "minecraft:orange_concrete_powder";
  MinecraftItemTypes2["OrangeDye"] = "minecraft:orange_dye";
  MinecraftItemTypes2["OrangeGlazedTerracotta"] = "minecraft:orange_glazed_terracotta";
  MinecraftItemTypes2["OrangeShulkerBox"] = "minecraft:orange_shulker_box";
  MinecraftItemTypes2["OrangeStainedGlass"] = "minecraft:orange_stained_glass";
  MinecraftItemTypes2["OrangeStainedGlassPane"] = "minecraft:orange_stained_glass_pane";
  MinecraftItemTypes2["OrangeTerracotta"] = "minecraft:orange_terracotta";
  MinecraftItemTypes2["OrangeTulip"] = "minecraft:orange_tulip";
  MinecraftItemTypes2["OrangeWool"] = "minecraft:orange_wool";
  MinecraftItemTypes2["OxeyeDaisy"] = "minecraft:oxeye_daisy";
  MinecraftItemTypes2["OxidizedChiseledCopper"] = "minecraft:oxidized_chiseled_copper";
  MinecraftItemTypes2["OxidizedCopper"] = "minecraft:oxidized_copper";
  MinecraftItemTypes2["OxidizedCopperBulb"] = "minecraft:oxidized_copper_bulb";
  MinecraftItemTypes2["OxidizedCopperDoor"] = "minecraft:oxidized_copper_door";
  MinecraftItemTypes2["OxidizedCopperGrate"] = "minecraft:oxidized_copper_grate";
  MinecraftItemTypes2["OxidizedCopperTrapdoor"] = "minecraft:oxidized_copper_trapdoor";
  MinecraftItemTypes2["OxidizedCutCopper"] = "minecraft:oxidized_cut_copper";
  MinecraftItemTypes2["OxidizedCutCopperSlab"] = "minecraft:oxidized_cut_copper_slab";
  MinecraftItemTypes2["OxidizedCutCopperStairs"] = "minecraft:oxidized_cut_copper_stairs";
  MinecraftItemTypes2["PackedIce"] = "minecraft:packed_ice";
  MinecraftItemTypes2["PackedMud"] = "minecraft:packed_mud";
  MinecraftItemTypes2["Painting"] = "minecraft:painting";
  MinecraftItemTypes2["PaleHangingMoss"] = "minecraft:pale_hanging_moss";
  MinecraftItemTypes2["PaleMossBlock"] = "minecraft:pale_moss_block";
  MinecraftItemTypes2["PaleMossCarpet"] = "minecraft:pale_moss_carpet";
  MinecraftItemTypes2["PaleOakBoat"] = "minecraft:pale_oak_boat";
  MinecraftItemTypes2["PaleOakButton"] = "minecraft:pale_oak_button";
  MinecraftItemTypes2["PaleOakChestBoat"] = "minecraft:pale_oak_chest_boat";
  MinecraftItemTypes2["PaleOakDoor"] = "minecraft:pale_oak_door";
  MinecraftItemTypes2["PaleOakFence"] = "minecraft:pale_oak_fence";
  MinecraftItemTypes2["PaleOakFenceGate"] = "minecraft:pale_oak_fence_gate";
  MinecraftItemTypes2["PaleOakHangingSign"] = "minecraft:pale_oak_hanging_sign";
  MinecraftItemTypes2["PaleOakLeaves"] = "minecraft:pale_oak_leaves";
  MinecraftItemTypes2["PaleOakLog"] = "minecraft:pale_oak_log";
  MinecraftItemTypes2["PaleOakPlanks"] = "minecraft:pale_oak_planks";
  MinecraftItemTypes2["PaleOakPressurePlate"] = "minecraft:pale_oak_pressure_plate";
  MinecraftItemTypes2["PaleOakSapling"] = "minecraft:pale_oak_sapling";
  MinecraftItemTypes2["PaleOakSign"] = "minecraft:pale_oak_sign";
  MinecraftItemTypes2["PaleOakSlab"] = "minecraft:pale_oak_slab";
  MinecraftItemTypes2["PaleOakStairs"] = "minecraft:pale_oak_stairs";
  MinecraftItemTypes2["PaleOakTrapdoor"] = "minecraft:pale_oak_trapdoor";
  MinecraftItemTypes2["PaleOakWood"] = "minecraft:pale_oak_wood";
  MinecraftItemTypes2["PandaSpawnEgg"] = "minecraft:panda_spawn_egg";
  MinecraftItemTypes2["Paper"] = "minecraft:paper";
  MinecraftItemTypes2["ParrotSpawnEgg"] = "minecraft:parrot_spawn_egg";
  MinecraftItemTypes2["PearlescentFroglight"] = "minecraft:pearlescent_froglight";
  MinecraftItemTypes2["Peony"] = "minecraft:peony";
  MinecraftItemTypes2["PetrifiedOakSlab"] = "minecraft:petrified_oak_slab";
  MinecraftItemTypes2["PhantomMembrane"] = "minecraft:phantom_membrane";
  MinecraftItemTypes2["PhantomSpawnEgg"] = "minecraft:phantom_spawn_egg";
  MinecraftItemTypes2["PigSpawnEgg"] = "minecraft:pig_spawn_egg";
  MinecraftItemTypes2["PiglinBannerPattern"] = "minecraft:piglin_banner_pattern";
  MinecraftItemTypes2["PiglinBruteSpawnEgg"] = "minecraft:piglin_brute_spawn_egg";
  MinecraftItemTypes2["PiglinHead"] = "minecraft:piglin_head";
  MinecraftItemTypes2["PiglinSpawnEgg"] = "minecraft:piglin_spawn_egg";
  MinecraftItemTypes2["PillagerSpawnEgg"] = "minecraft:pillager_spawn_egg";
  MinecraftItemTypes2["PinkBundle"] = "minecraft:pink_bundle";
  MinecraftItemTypes2["PinkCandle"] = "minecraft:pink_candle";
  MinecraftItemTypes2["PinkCarpet"] = "minecraft:pink_carpet";
  MinecraftItemTypes2["PinkConcrete"] = "minecraft:pink_concrete";
  MinecraftItemTypes2["PinkConcretePowder"] = "minecraft:pink_concrete_powder";
  MinecraftItemTypes2["PinkDye"] = "minecraft:pink_dye";
  MinecraftItemTypes2["PinkGlazedTerracotta"] = "minecraft:pink_glazed_terracotta";
  MinecraftItemTypes2["PinkPetals"] = "minecraft:pink_petals";
  MinecraftItemTypes2["PinkShulkerBox"] = "minecraft:pink_shulker_box";
  MinecraftItemTypes2["PinkStainedGlass"] = "minecraft:pink_stained_glass";
  MinecraftItemTypes2["PinkStainedGlassPane"] = "minecraft:pink_stained_glass_pane";
  MinecraftItemTypes2["PinkTerracotta"] = "minecraft:pink_terracotta";
  MinecraftItemTypes2["PinkTulip"] = "minecraft:pink_tulip";
  MinecraftItemTypes2["PinkWool"] = "minecraft:pink_wool";
  MinecraftItemTypes2["Piston"] = "minecraft:piston";
  MinecraftItemTypes2["PitcherPlant"] = "minecraft:pitcher_plant";
  MinecraftItemTypes2["PitcherPod"] = "minecraft:pitcher_pod";
  MinecraftItemTypes2["PlayerHead"] = "minecraft:player_head";
  MinecraftItemTypes2["PlentyPotterySherd"] = "minecraft:plenty_pottery_sherd";
  MinecraftItemTypes2["Podzol"] = "minecraft:podzol";
  MinecraftItemTypes2["PointedDripstone"] = "minecraft:pointed_dripstone";
  MinecraftItemTypes2["PoisonousPotato"] = "minecraft:poisonous_potato";
  MinecraftItemTypes2["PolarBearSpawnEgg"] = "minecraft:polar_bear_spawn_egg";
  MinecraftItemTypes2["PolishedAndesite"] = "minecraft:polished_andesite";
  MinecraftItemTypes2["PolishedAndesiteSlab"] = "minecraft:polished_andesite_slab";
  MinecraftItemTypes2["PolishedAndesiteStairs"] = "minecraft:polished_andesite_stairs";
  MinecraftItemTypes2["PolishedBasalt"] = "minecraft:polished_basalt";
  MinecraftItemTypes2["PolishedBlackstone"] = "minecraft:polished_blackstone";
  MinecraftItemTypes2["PolishedBlackstoneBrickSlab"] = "minecraft:polished_blackstone_brick_slab";
  MinecraftItemTypes2["PolishedBlackstoneBrickStairs"] = "minecraft:polished_blackstone_brick_stairs";
  MinecraftItemTypes2["PolishedBlackstoneBrickWall"] = "minecraft:polished_blackstone_brick_wall";
  MinecraftItemTypes2["PolishedBlackstoneBricks"] = "minecraft:polished_blackstone_bricks";
  MinecraftItemTypes2["PolishedBlackstoneButton"] = "minecraft:polished_blackstone_button";
  MinecraftItemTypes2["PolishedBlackstonePressurePlate"] = "minecraft:polished_blackstone_pressure_plate";
  MinecraftItemTypes2["PolishedBlackstoneSlab"] = "minecraft:polished_blackstone_slab";
  MinecraftItemTypes2["PolishedBlackstoneStairs"] = "minecraft:polished_blackstone_stairs";
  MinecraftItemTypes2["PolishedBlackstoneWall"] = "minecraft:polished_blackstone_wall";
  MinecraftItemTypes2["PolishedDeepslate"] = "minecraft:polished_deepslate";
  MinecraftItemTypes2["PolishedDeepslateSlab"] = "minecraft:polished_deepslate_slab";
  MinecraftItemTypes2["PolishedDeepslateStairs"] = "minecraft:polished_deepslate_stairs";
  MinecraftItemTypes2["PolishedDeepslateWall"] = "minecraft:polished_deepslate_wall";
  MinecraftItemTypes2["PolishedDiorite"] = "minecraft:polished_diorite";
  MinecraftItemTypes2["PolishedDioriteSlab"] = "minecraft:polished_diorite_slab";
  MinecraftItemTypes2["PolishedDioriteStairs"] = "minecraft:polished_diorite_stairs";
  MinecraftItemTypes2["PolishedGranite"] = "minecraft:polished_granite";
  MinecraftItemTypes2["PolishedGraniteSlab"] = "minecraft:polished_granite_slab";
  MinecraftItemTypes2["PolishedGraniteStairs"] = "minecraft:polished_granite_stairs";
  MinecraftItemTypes2["PolishedTuff"] = "minecraft:polished_tuff";
  MinecraftItemTypes2["PolishedTuffSlab"] = "minecraft:polished_tuff_slab";
  MinecraftItemTypes2["PolishedTuffStairs"] = "minecraft:polished_tuff_stairs";
  MinecraftItemTypes2["PolishedTuffWall"] = "minecraft:polished_tuff_wall";
  MinecraftItemTypes2["PoppedChorusFruit"] = "minecraft:popped_chorus_fruit";
  MinecraftItemTypes2["Poppy"] = "minecraft:poppy";
  MinecraftItemTypes2["Porkchop"] = "minecraft:porkchop";
  MinecraftItemTypes2["Potato"] = "minecraft:potato";
  MinecraftItemTypes2["Potion"] = "minecraft:potion";
  MinecraftItemTypes2["PowderSnowBucket"] = "minecraft:powder_snow_bucket";
  MinecraftItemTypes2["Prismarine"] = "minecraft:prismarine";
  MinecraftItemTypes2["PrismarineBrickSlab"] = "minecraft:prismarine_brick_slab";
  MinecraftItemTypes2["PrismarineBricks"] = "minecraft:prismarine_bricks";
  MinecraftItemTypes2["PrismarineBricksStairs"] = "minecraft:prismarine_bricks_stairs";
  MinecraftItemTypes2["PrismarineCrystals"] = "minecraft:prismarine_crystals";
  MinecraftItemTypes2["PrismarineShard"] = "minecraft:prismarine_shard";
  MinecraftItemTypes2["PrismarineSlab"] = "minecraft:prismarine_slab";
  MinecraftItemTypes2["PrismarineStairs"] = "minecraft:prismarine_stairs";
  MinecraftItemTypes2["PrismarineWall"] = "minecraft:prismarine_wall";
  MinecraftItemTypes2["PrizePotterySherd"] = "minecraft:prize_pottery_sherd";
  MinecraftItemTypes2["Pufferfish"] = "minecraft:pufferfish";
  MinecraftItemTypes2["PufferfishBucket"] = "minecraft:pufferfish_bucket";
  MinecraftItemTypes2["PufferfishSpawnEgg"] = "minecraft:pufferfish_spawn_egg";
  MinecraftItemTypes2["Pumpkin"] = "minecraft:pumpkin";
  MinecraftItemTypes2["PumpkinPie"] = "minecraft:pumpkin_pie";
  MinecraftItemTypes2["PumpkinSeeds"] = "minecraft:pumpkin_seeds";
  MinecraftItemTypes2["PurpleBundle"] = "minecraft:purple_bundle";
  MinecraftItemTypes2["PurpleCandle"] = "minecraft:purple_candle";
  MinecraftItemTypes2["PurpleCarpet"] = "minecraft:purple_carpet";
  MinecraftItemTypes2["PurpleConcrete"] = "minecraft:purple_concrete";
  MinecraftItemTypes2["PurpleConcretePowder"] = "minecraft:purple_concrete_powder";
  MinecraftItemTypes2["PurpleDye"] = "minecraft:purple_dye";
  MinecraftItemTypes2["PurpleGlazedTerracotta"] = "minecraft:purple_glazed_terracotta";
  MinecraftItemTypes2["PurpleShulkerBox"] = "minecraft:purple_shulker_box";
  MinecraftItemTypes2["PurpleStainedGlass"] = "minecraft:purple_stained_glass";
  MinecraftItemTypes2["PurpleStainedGlassPane"] = "minecraft:purple_stained_glass_pane";
  MinecraftItemTypes2["PurpleTerracotta"] = "minecraft:purple_terracotta";
  MinecraftItemTypes2["PurpleWool"] = "minecraft:purple_wool";
  MinecraftItemTypes2["PurpurBlock"] = "minecraft:purpur_block";
  MinecraftItemTypes2["PurpurPillar"] = "minecraft:purpur_pillar";
  MinecraftItemTypes2["PurpurSlab"] = "minecraft:purpur_slab";
  MinecraftItemTypes2["PurpurStairs"] = "minecraft:purpur_stairs";
  MinecraftItemTypes2["Quartz"] = "minecraft:quartz";
  MinecraftItemTypes2["QuartzBlock"] = "minecraft:quartz_block";
  MinecraftItemTypes2["QuartzBricks"] = "minecraft:quartz_bricks";
  MinecraftItemTypes2["QuartzOre"] = "minecraft:quartz_ore";
  MinecraftItemTypes2["QuartzPillar"] = "minecraft:quartz_pillar";
  MinecraftItemTypes2["QuartzSlab"] = "minecraft:quartz_slab";
  MinecraftItemTypes2["QuartzStairs"] = "minecraft:quartz_stairs";
  MinecraftItemTypes2["Rabbit"] = "minecraft:rabbit";
  MinecraftItemTypes2["RabbitFoot"] = "minecraft:rabbit_foot";
  MinecraftItemTypes2["RabbitHide"] = "minecraft:rabbit_hide";
  MinecraftItemTypes2["RabbitSpawnEgg"] = "minecraft:rabbit_spawn_egg";
  MinecraftItemTypes2["RabbitStew"] = "minecraft:rabbit_stew";
  MinecraftItemTypes2["Rail"] = "minecraft:rail";
  MinecraftItemTypes2["RaiserArmorTrimSmithingTemplate"] = "minecraft:raiser_armor_trim_smithing_template";
  MinecraftItemTypes2["RavagerSpawnEgg"] = "minecraft:ravager_spawn_egg";
  MinecraftItemTypes2["RawCopper"] = "minecraft:raw_copper";
  MinecraftItemTypes2["RawCopperBlock"] = "minecraft:raw_copper_block";
  MinecraftItemTypes2["RawGold"] = "minecraft:raw_gold";
  MinecraftItemTypes2["RawGoldBlock"] = "minecraft:raw_gold_block";
  MinecraftItemTypes2["RawIron"] = "minecraft:raw_iron";
  MinecraftItemTypes2["RawIronBlock"] = "minecraft:raw_iron_block";
  MinecraftItemTypes2["RecoveryCompass"] = "minecraft:recovery_compass";
  MinecraftItemTypes2["RedBundle"] = "minecraft:red_bundle";
  MinecraftItemTypes2["RedCandle"] = "minecraft:red_candle";
  MinecraftItemTypes2["RedCarpet"] = "minecraft:red_carpet";
  MinecraftItemTypes2["RedConcrete"] = "minecraft:red_concrete";
  MinecraftItemTypes2["RedConcretePowder"] = "minecraft:red_concrete_powder";
  MinecraftItemTypes2["RedDye"] = "minecraft:red_dye";
  MinecraftItemTypes2["RedGlazedTerracotta"] = "minecraft:red_glazed_terracotta";
  MinecraftItemTypes2["RedMushroom"] = "minecraft:red_mushroom";
  MinecraftItemTypes2["RedMushroomBlock"] = "minecraft:red_mushroom_block";
  MinecraftItemTypes2["RedNetherBrick"] = "minecraft:red_nether_brick";
  MinecraftItemTypes2["RedNetherBrickSlab"] = "minecraft:red_nether_brick_slab";
  MinecraftItemTypes2["RedNetherBrickStairs"] = "minecraft:red_nether_brick_stairs";
  MinecraftItemTypes2["RedNetherBrickWall"] = "minecraft:red_nether_brick_wall";
  MinecraftItemTypes2["RedSand"] = "minecraft:red_sand";
  MinecraftItemTypes2["RedSandstone"] = "minecraft:red_sandstone";
  MinecraftItemTypes2["RedSandstoneSlab"] = "minecraft:red_sandstone_slab";
  MinecraftItemTypes2["RedSandstoneStairs"] = "minecraft:red_sandstone_stairs";
  MinecraftItemTypes2["RedSandstoneWall"] = "minecraft:red_sandstone_wall";
  MinecraftItemTypes2["RedShulkerBox"] = "minecraft:red_shulker_box";
  MinecraftItemTypes2["RedStainedGlass"] = "minecraft:red_stained_glass";
  MinecraftItemTypes2["RedStainedGlassPane"] = "minecraft:red_stained_glass_pane";
  MinecraftItemTypes2["RedTerracotta"] = "minecraft:red_terracotta";
  MinecraftItemTypes2["RedTulip"] = "minecraft:red_tulip";
  MinecraftItemTypes2["RedWool"] = "minecraft:red_wool";
  MinecraftItemTypes2["Redstone"] = "minecraft:redstone";
  MinecraftItemTypes2["RedstoneBlock"] = "minecraft:redstone_block";
  MinecraftItemTypes2["RedstoneLamp"] = "minecraft:redstone_lamp";
  MinecraftItemTypes2["RedstoneOre"] = "minecraft:redstone_ore";
  MinecraftItemTypes2["RedstoneTorch"] = "minecraft:redstone_torch";
  MinecraftItemTypes2["ReinforcedDeepslate"] = "minecraft:reinforced_deepslate";
  MinecraftItemTypes2["Repeater"] = "minecraft:repeater";
  MinecraftItemTypes2["RepeatingCommandBlock"] = "minecraft:repeating_command_block";
  MinecraftItemTypes2["ResinBlock"] = "minecraft:resin_block";
  MinecraftItemTypes2["ResinBrick"] = "minecraft:resin_brick";
  MinecraftItemTypes2["ResinBrickSlab"] = "minecraft:resin_brick_slab";
  MinecraftItemTypes2["ResinBrickStairs"] = "minecraft:resin_brick_stairs";
  MinecraftItemTypes2["ResinBrickWall"] = "minecraft:resin_brick_wall";
  MinecraftItemTypes2["ResinBricks"] = "minecraft:resin_bricks";
  MinecraftItemTypes2["ResinClump"] = "minecraft:resin_clump";
  MinecraftItemTypes2["RespawnAnchor"] = "minecraft:respawn_anchor";
  MinecraftItemTypes2["RibArmorTrimSmithingTemplate"] = "minecraft:rib_armor_trim_smithing_template";
  MinecraftItemTypes2["RoseBush"] = "minecraft:rose_bush";
  MinecraftItemTypes2["RottenFlesh"] = "minecraft:rotten_flesh";
  MinecraftItemTypes2["Saddle"] = "minecraft:saddle";
  MinecraftItemTypes2["Salmon"] = "minecraft:salmon";
  MinecraftItemTypes2["SalmonBucket"] = "minecraft:salmon_bucket";
  MinecraftItemTypes2["SalmonSpawnEgg"] = "minecraft:salmon_spawn_egg";
  MinecraftItemTypes2["Sand"] = "minecraft:sand";
  MinecraftItemTypes2["Sandstone"] = "minecraft:sandstone";
  MinecraftItemTypes2["SandstoneSlab"] = "minecraft:sandstone_slab";
  MinecraftItemTypes2["SandstoneStairs"] = "minecraft:sandstone_stairs";
  MinecraftItemTypes2["SandstoneWall"] = "minecraft:sandstone_wall";
  MinecraftItemTypes2["Scaffolding"] = "minecraft:scaffolding";
  MinecraftItemTypes2["ScrapePotterySherd"] = "minecraft:scrape_pottery_sherd";
  MinecraftItemTypes2["Sculk"] = "minecraft:sculk";
  MinecraftItemTypes2["SculkCatalyst"] = "minecraft:sculk_catalyst";
  MinecraftItemTypes2["SculkSensor"] = "minecraft:sculk_sensor";
  MinecraftItemTypes2["SculkShrieker"] = "minecraft:sculk_shrieker";
  MinecraftItemTypes2["SculkVein"] = "minecraft:sculk_vein";
  MinecraftItemTypes2["SeaLantern"] = "minecraft:sea_lantern";
  MinecraftItemTypes2["SeaPickle"] = "minecraft:sea_pickle";
  MinecraftItemTypes2["Seagrass"] = "minecraft:seagrass";
  MinecraftItemTypes2["SentryArmorTrimSmithingTemplate"] = "minecraft:sentry_armor_trim_smithing_template";
  MinecraftItemTypes2["ShaperArmorTrimSmithingTemplate"] = "minecraft:shaper_armor_trim_smithing_template";
  MinecraftItemTypes2["SheafPotterySherd"] = "minecraft:sheaf_pottery_sherd";
  MinecraftItemTypes2["Shears"] = "minecraft:shears";
  MinecraftItemTypes2["SheepSpawnEgg"] = "minecraft:sheep_spawn_egg";
  MinecraftItemTypes2["ShelterPotterySherd"] = "minecraft:shelter_pottery_sherd";
  MinecraftItemTypes2["Shield"] = "minecraft:shield";
  MinecraftItemTypes2["ShortDryGrass"] = "minecraft:short_dry_grass";
  MinecraftItemTypes2["ShortGrass"] = "minecraft:short_grass";
  MinecraftItemTypes2["Shroomlight"] = "minecraft:shroomlight";
  MinecraftItemTypes2["ShulkerShell"] = "minecraft:shulker_shell";
  MinecraftItemTypes2["ShulkerSpawnEgg"] = "minecraft:shulker_spawn_egg";
  MinecraftItemTypes2["SilenceArmorTrimSmithingTemplate"] = "minecraft:silence_armor_trim_smithing_template";
  MinecraftItemTypes2["SilverGlazedTerracotta"] = "minecraft:silver_glazed_terracotta";
  MinecraftItemTypes2["SilverfishSpawnEgg"] = "minecraft:silverfish_spawn_egg";
  MinecraftItemTypes2["SkeletonHorseSpawnEgg"] = "minecraft:skeleton_horse_spawn_egg";
  MinecraftItemTypes2["SkeletonSkull"] = "minecraft:skeleton_skull";
  MinecraftItemTypes2["SkeletonSpawnEgg"] = "minecraft:skeleton_spawn_egg";
  MinecraftItemTypes2["SkullBannerPattern"] = "minecraft:skull_banner_pattern";
  MinecraftItemTypes2["SkullPotterySherd"] = "minecraft:skull_pottery_sherd";
  MinecraftItemTypes2["Slime"] = "minecraft:slime";
  MinecraftItemTypes2["SlimeBall"] = "minecraft:slime_ball";
  MinecraftItemTypes2["SlimeSpawnEgg"] = "minecraft:slime_spawn_egg";
  MinecraftItemTypes2["SmallAmethystBud"] = "minecraft:small_amethyst_bud";
  MinecraftItemTypes2["SmallDripleafBlock"] = "minecraft:small_dripleaf_block";
  MinecraftItemTypes2["SmithingTable"] = "minecraft:smithing_table";
  MinecraftItemTypes2["Smoker"] = "minecraft:smoker";
  MinecraftItemTypes2["SmoothBasalt"] = "minecraft:smooth_basalt";
  MinecraftItemTypes2["SmoothQuartz"] = "minecraft:smooth_quartz";
  MinecraftItemTypes2["SmoothQuartzSlab"] = "minecraft:smooth_quartz_slab";
  MinecraftItemTypes2["SmoothQuartzStairs"] = "minecraft:smooth_quartz_stairs";
  MinecraftItemTypes2["SmoothRedSandstone"] = "minecraft:smooth_red_sandstone";
  MinecraftItemTypes2["SmoothRedSandstoneSlab"] = "minecraft:smooth_red_sandstone_slab";
  MinecraftItemTypes2["SmoothRedSandstoneStairs"] = "minecraft:smooth_red_sandstone_stairs";
  MinecraftItemTypes2["SmoothSandstone"] = "minecraft:smooth_sandstone";
  MinecraftItemTypes2["SmoothSandstoneSlab"] = "minecraft:smooth_sandstone_slab";
  MinecraftItemTypes2["SmoothSandstoneStairs"] = "minecraft:smooth_sandstone_stairs";
  MinecraftItemTypes2["SmoothStone"] = "minecraft:smooth_stone";
  MinecraftItemTypes2["SmoothStoneSlab"] = "minecraft:smooth_stone_slab";
  MinecraftItemTypes2["SnifferEgg"] = "minecraft:sniffer_egg";
  MinecraftItemTypes2["SnifferSpawnEgg"] = "minecraft:sniffer_spawn_egg";
  MinecraftItemTypes2["SnortPotterySherd"] = "minecraft:snort_pottery_sherd";
  MinecraftItemTypes2["SnoutArmorTrimSmithingTemplate"] = "minecraft:snout_armor_trim_smithing_template";
  MinecraftItemTypes2["Snow"] = "minecraft:snow";
  MinecraftItemTypes2["SnowGolemSpawnEgg"] = "minecraft:snow_golem_spawn_egg";
  MinecraftItemTypes2["SnowLayer"] = "minecraft:snow_layer";
  MinecraftItemTypes2["Snowball"] = "minecraft:snowball";
  MinecraftItemTypes2["SoulCampfire"] = "minecraft:soul_campfire";
  MinecraftItemTypes2["SoulLantern"] = "minecraft:soul_lantern";
  MinecraftItemTypes2["SoulSand"] = "minecraft:soul_sand";
  MinecraftItemTypes2["SoulSoil"] = "minecraft:soul_soil";
  MinecraftItemTypes2["SoulTorch"] = "minecraft:soul_torch";
  MinecraftItemTypes2["SpiderEye"] = "minecraft:spider_eye";
  MinecraftItemTypes2["SpiderSpawnEgg"] = "minecraft:spider_spawn_egg";
  MinecraftItemTypes2["SpireArmorTrimSmithingTemplate"] = "minecraft:spire_armor_trim_smithing_template";
  MinecraftItemTypes2["SplashPotion"] = "minecraft:splash_potion";
  MinecraftItemTypes2["Sponge"] = "minecraft:sponge";
  MinecraftItemTypes2["SporeBlossom"] = "minecraft:spore_blossom";
  MinecraftItemTypes2["SpruceBoat"] = "minecraft:spruce_boat";
  MinecraftItemTypes2["SpruceButton"] = "minecraft:spruce_button";
  MinecraftItemTypes2["SpruceChestBoat"] = "minecraft:spruce_chest_boat";
  MinecraftItemTypes2["SpruceDoor"] = "minecraft:spruce_door";
  MinecraftItemTypes2["SpruceFence"] = "minecraft:spruce_fence";
  MinecraftItemTypes2["SpruceFenceGate"] = "minecraft:spruce_fence_gate";
  MinecraftItemTypes2["SpruceHangingSign"] = "minecraft:spruce_hanging_sign";
  MinecraftItemTypes2["SpruceLeaves"] = "minecraft:spruce_leaves";
  MinecraftItemTypes2["SpruceLog"] = "minecraft:spruce_log";
  MinecraftItemTypes2["SprucePlanks"] = "minecraft:spruce_planks";
  MinecraftItemTypes2["SprucePressurePlate"] = "minecraft:spruce_pressure_plate";
  MinecraftItemTypes2["SpruceSapling"] = "minecraft:spruce_sapling";
  MinecraftItemTypes2["SpruceSign"] = "minecraft:spruce_sign";
  MinecraftItemTypes2["SpruceSlab"] = "minecraft:spruce_slab";
  MinecraftItemTypes2["SpruceStairs"] = "minecraft:spruce_stairs";
  MinecraftItemTypes2["SpruceTrapdoor"] = "minecraft:spruce_trapdoor";
  MinecraftItemTypes2["SpruceWood"] = "minecraft:spruce_wood";
  MinecraftItemTypes2["Spyglass"] = "minecraft:spyglass";
  MinecraftItemTypes2["SquidSpawnEgg"] = "minecraft:squid_spawn_egg";
  MinecraftItemTypes2["Stick"] = "minecraft:stick";
  MinecraftItemTypes2["StickyPiston"] = "minecraft:sticky_piston";
  MinecraftItemTypes2["Stone"] = "minecraft:stone";
  MinecraftItemTypes2["StoneAxe"] = "minecraft:stone_axe";
  MinecraftItemTypes2["StoneBrickSlab"] = "minecraft:stone_brick_slab";
  MinecraftItemTypes2["StoneBrickStairs"] = "minecraft:stone_brick_stairs";
  MinecraftItemTypes2["StoneBrickWall"] = "minecraft:stone_brick_wall";
  MinecraftItemTypes2["StoneBricks"] = "minecraft:stone_bricks";
  MinecraftItemTypes2["StoneButton"] = "minecraft:stone_button";
  MinecraftItemTypes2["StoneHoe"] = "minecraft:stone_hoe";
  MinecraftItemTypes2["StonePickaxe"] = "minecraft:stone_pickaxe";
  MinecraftItemTypes2["StonePressurePlate"] = "minecraft:stone_pressure_plate";
  MinecraftItemTypes2["StoneShovel"] = "minecraft:stone_shovel";
  MinecraftItemTypes2["StoneStairs"] = "minecraft:stone_stairs";
  MinecraftItemTypes2["StoneSword"] = "minecraft:stone_sword";
  MinecraftItemTypes2["StonecutterBlock"] = "minecraft:stonecutter_block";
  MinecraftItemTypes2["StraySpawnEgg"] = "minecraft:stray_spawn_egg";
  MinecraftItemTypes2["StriderSpawnEgg"] = "minecraft:strider_spawn_egg";
  MinecraftItemTypes2["String"] = "minecraft:string";
  MinecraftItemTypes2["StrippedAcaciaLog"] = "minecraft:stripped_acacia_log";
  MinecraftItemTypes2["StrippedAcaciaWood"] = "minecraft:stripped_acacia_wood";
  MinecraftItemTypes2["StrippedBambooBlock"] = "minecraft:stripped_bamboo_block";
  MinecraftItemTypes2["StrippedBirchLog"] = "minecraft:stripped_birch_log";
  MinecraftItemTypes2["StrippedBirchWood"] = "minecraft:stripped_birch_wood";
  MinecraftItemTypes2["StrippedCherryLog"] = "minecraft:stripped_cherry_log";
  MinecraftItemTypes2["StrippedCherryWood"] = "minecraft:stripped_cherry_wood";
  MinecraftItemTypes2["StrippedCrimsonHyphae"] = "minecraft:stripped_crimson_hyphae";
  MinecraftItemTypes2["StrippedCrimsonStem"] = "minecraft:stripped_crimson_stem";
  MinecraftItemTypes2["StrippedDarkOakLog"] = "minecraft:stripped_dark_oak_log";
  MinecraftItemTypes2["StrippedDarkOakWood"] = "minecraft:stripped_dark_oak_wood";
  MinecraftItemTypes2["StrippedJungleLog"] = "minecraft:stripped_jungle_log";
  MinecraftItemTypes2["StrippedJungleWood"] = "minecraft:stripped_jungle_wood";
  MinecraftItemTypes2["StrippedMangroveLog"] = "minecraft:stripped_mangrove_log";
  MinecraftItemTypes2["StrippedMangroveWood"] = "minecraft:stripped_mangrove_wood";
  MinecraftItemTypes2["StrippedOakLog"] = "minecraft:stripped_oak_log";
  MinecraftItemTypes2["StrippedOakWood"] = "minecraft:stripped_oak_wood";
  MinecraftItemTypes2["StrippedPaleOakLog"] = "minecraft:stripped_pale_oak_log";
  MinecraftItemTypes2["StrippedPaleOakWood"] = "minecraft:stripped_pale_oak_wood";
  MinecraftItemTypes2["StrippedSpruceLog"] = "minecraft:stripped_spruce_log";
  MinecraftItemTypes2["StrippedSpruceWood"] = "minecraft:stripped_spruce_wood";
  MinecraftItemTypes2["StrippedWarpedHyphae"] = "minecraft:stripped_warped_hyphae";
  MinecraftItemTypes2["StrippedWarpedStem"] = "minecraft:stripped_warped_stem";
  MinecraftItemTypes2["StructureBlock"] = "minecraft:structure_block";
  MinecraftItemTypes2["StructureVoid"] = "minecraft:structure_void";
  MinecraftItemTypes2["Sugar"] = "minecraft:sugar";
  MinecraftItemTypes2["SugarCane"] = "minecraft:sugar_cane";
  MinecraftItemTypes2["Sunflower"] = "minecraft:sunflower";
  MinecraftItemTypes2["SuspiciousGravel"] = "minecraft:suspicious_gravel";
  MinecraftItemTypes2["SuspiciousSand"] = "minecraft:suspicious_sand";
  MinecraftItemTypes2["SuspiciousStew"] = "minecraft:suspicious_stew";
  MinecraftItemTypes2["SweetBerries"] = "minecraft:sweet_berries";
  MinecraftItemTypes2["TadpoleBucket"] = "minecraft:tadpole_bucket";
  MinecraftItemTypes2["TadpoleSpawnEgg"] = "minecraft:tadpole_spawn_egg";
  MinecraftItemTypes2["TallDryGrass"] = "minecraft:tall_dry_grass";
  MinecraftItemTypes2["TallGrass"] = "minecraft:tall_grass";
  MinecraftItemTypes2["Target"] = "minecraft:target";
  MinecraftItemTypes2["TideArmorTrimSmithingTemplate"] = "minecraft:tide_armor_trim_smithing_template";
  MinecraftItemTypes2["TintedGlass"] = "minecraft:tinted_glass";
  MinecraftItemTypes2["Tnt"] = "minecraft:tnt";
  MinecraftItemTypes2["TntMinecart"] = "minecraft:tnt_minecart";
  MinecraftItemTypes2["Torch"] = "minecraft:torch";
  MinecraftItemTypes2["Torchflower"] = "minecraft:torchflower";
  MinecraftItemTypes2["TorchflowerSeeds"] = "minecraft:torchflower_seeds";
  MinecraftItemTypes2["TotemOfUndying"] = "minecraft:totem_of_undying";
  MinecraftItemTypes2["TraderLlamaSpawnEgg"] = "minecraft:trader_llama_spawn_egg";
  MinecraftItemTypes2["Trapdoor"] = "minecraft:trapdoor";
  MinecraftItemTypes2["TrappedChest"] = "minecraft:trapped_chest";
  MinecraftItemTypes2["TrialKey"] = "minecraft:trial_key";
  MinecraftItemTypes2["TrialSpawner"] = "minecraft:trial_spawner";
  MinecraftItemTypes2["Trident"] = "minecraft:trident";
  MinecraftItemTypes2["TripwireHook"] = "minecraft:tripwire_hook";
  MinecraftItemTypes2["TropicalFish"] = "minecraft:tropical_fish";
  MinecraftItemTypes2["TropicalFishBucket"] = "minecraft:tropical_fish_bucket";
  MinecraftItemTypes2["TropicalFishSpawnEgg"] = "minecraft:tropical_fish_spawn_egg";
  MinecraftItemTypes2["TubeCoral"] = "minecraft:tube_coral";
  MinecraftItemTypes2["TubeCoralBlock"] = "minecraft:tube_coral_block";
  MinecraftItemTypes2["TubeCoralFan"] = "minecraft:tube_coral_fan";
  MinecraftItemTypes2["Tuff"] = "minecraft:tuff";
  MinecraftItemTypes2["TuffBrickSlab"] = "minecraft:tuff_brick_slab";
  MinecraftItemTypes2["TuffBrickStairs"] = "minecraft:tuff_brick_stairs";
  MinecraftItemTypes2["TuffBrickWall"] = "minecraft:tuff_brick_wall";
  MinecraftItemTypes2["TuffBricks"] = "minecraft:tuff_bricks";
  MinecraftItemTypes2["TuffSlab"] = "minecraft:tuff_slab";
  MinecraftItemTypes2["TuffStairs"] = "minecraft:tuff_stairs";
  MinecraftItemTypes2["TuffWall"] = "minecraft:tuff_wall";
  MinecraftItemTypes2["TurtleEgg"] = "minecraft:turtle_egg";
  MinecraftItemTypes2["TurtleHelmet"] = "minecraft:turtle_helmet";
  MinecraftItemTypes2["TurtleScute"] = "minecraft:turtle_scute";
  MinecraftItemTypes2["TurtleSpawnEgg"] = "minecraft:turtle_spawn_egg";
  MinecraftItemTypes2["TwistingVines"] = "minecraft:twisting_vines";
  MinecraftItemTypes2["UndyedShulkerBox"] = "minecraft:undyed_shulker_box";
  MinecraftItemTypes2["Vault"] = "minecraft:vault";
  MinecraftItemTypes2["VerdantFroglight"] = "minecraft:verdant_froglight";
  MinecraftItemTypes2["VexArmorTrimSmithingTemplate"] = "minecraft:vex_armor_trim_smithing_template";
  MinecraftItemTypes2["VexSpawnEgg"] = "minecraft:vex_spawn_egg";
  MinecraftItemTypes2["VillagerSpawnEgg"] = "minecraft:villager_spawn_egg";
  MinecraftItemTypes2["VindicatorSpawnEgg"] = "minecraft:vindicator_spawn_egg";
  MinecraftItemTypes2["Vine"] = "minecraft:vine";
  MinecraftItemTypes2["WanderingTraderSpawnEgg"] = "minecraft:wandering_trader_spawn_egg";
  MinecraftItemTypes2["WardArmorTrimSmithingTemplate"] = "minecraft:ward_armor_trim_smithing_template";
  MinecraftItemTypes2["WardenSpawnEgg"] = "minecraft:warden_spawn_egg";
  MinecraftItemTypes2["WarpedButton"] = "minecraft:warped_button";
  MinecraftItemTypes2["WarpedDoor"] = "minecraft:warped_door";
  MinecraftItemTypes2["WarpedFence"] = "minecraft:warped_fence";
  MinecraftItemTypes2["WarpedFenceGate"] = "minecraft:warped_fence_gate";
  MinecraftItemTypes2["WarpedFungus"] = "minecraft:warped_fungus";
  MinecraftItemTypes2["WarpedFungusOnAStick"] = "minecraft:warped_fungus_on_a_stick";
  MinecraftItemTypes2["WarpedHangingSign"] = "minecraft:warped_hanging_sign";
  MinecraftItemTypes2["WarpedHyphae"] = "minecraft:warped_hyphae";
  MinecraftItemTypes2["WarpedNylium"] = "minecraft:warped_nylium";
  MinecraftItemTypes2["WarpedPlanks"] = "minecraft:warped_planks";
  MinecraftItemTypes2["WarpedPressurePlate"] = "minecraft:warped_pressure_plate";
  MinecraftItemTypes2["WarpedRoots"] = "minecraft:warped_roots";
  MinecraftItemTypes2["WarpedSign"] = "minecraft:warped_sign";
  MinecraftItemTypes2["WarpedSlab"] = "minecraft:warped_slab";
  MinecraftItemTypes2["WarpedStairs"] = "minecraft:warped_stairs";
  MinecraftItemTypes2["WarpedStem"] = "minecraft:warped_stem";
  MinecraftItemTypes2["WarpedTrapdoor"] = "minecraft:warped_trapdoor";
  MinecraftItemTypes2["WarpedWartBlock"] = "minecraft:warped_wart_block";
  MinecraftItemTypes2["WaterBucket"] = "minecraft:water_bucket";
  MinecraftItemTypes2["Waterlily"] = "minecraft:waterlily";
  MinecraftItemTypes2["WaxedChiseledCopper"] = "minecraft:waxed_chiseled_copper";
  MinecraftItemTypes2["WaxedCopper"] = "minecraft:waxed_copper";
  MinecraftItemTypes2["WaxedCopperBulb"] = "minecraft:waxed_copper_bulb";
  MinecraftItemTypes2["WaxedCopperDoor"] = "minecraft:waxed_copper_door";
  MinecraftItemTypes2["WaxedCopperGrate"] = "minecraft:waxed_copper_grate";
  MinecraftItemTypes2["WaxedCopperTrapdoor"] = "minecraft:waxed_copper_trapdoor";
  MinecraftItemTypes2["WaxedCutCopper"] = "minecraft:waxed_cut_copper";
  MinecraftItemTypes2["WaxedCutCopperSlab"] = "minecraft:waxed_cut_copper_slab";
  MinecraftItemTypes2["WaxedCutCopperStairs"] = "minecraft:waxed_cut_copper_stairs";
  MinecraftItemTypes2["WaxedExposedChiseledCopper"] = "minecraft:waxed_exposed_chiseled_copper";
  MinecraftItemTypes2["WaxedExposedCopper"] = "minecraft:waxed_exposed_copper";
  MinecraftItemTypes2["WaxedExposedCopperBulb"] = "minecraft:waxed_exposed_copper_bulb";
  MinecraftItemTypes2["WaxedExposedCopperDoor"] = "minecraft:waxed_exposed_copper_door";
  MinecraftItemTypes2["WaxedExposedCopperGrate"] = "minecraft:waxed_exposed_copper_grate";
  MinecraftItemTypes2["WaxedExposedCopperTrapdoor"] = "minecraft:waxed_exposed_copper_trapdoor";
  MinecraftItemTypes2["WaxedExposedCutCopper"] = "minecraft:waxed_exposed_cut_copper";
  MinecraftItemTypes2["WaxedExposedCutCopperSlab"] = "minecraft:waxed_exposed_cut_copper_slab";
  MinecraftItemTypes2["WaxedExposedCutCopperStairs"] = "minecraft:waxed_exposed_cut_copper_stairs";
  MinecraftItemTypes2["WaxedOxidizedChiseledCopper"] = "minecraft:waxed_oxidized_chiseled_copper";
  MinecraftItemTypes2["WaxedOxidizedCopper"] = "minecraft:waxed_oxidized_copper";
  MinecraftItemTypes2["WaxedOxidizedCopperBulb"] = "minecraft:waxed_oxidized_copper_bulb";
  MinecraftItemTypes2["WaxedOxidizedCopperDoor"] = "minecraft:waxed_oxidized_copper_door";
  MinecraftItemTypes2["WaxedOxidizedCopperGrate"] = "minecraft:waxed_oxidized_copper_grate";
  MinecraftItemTypes2["WaxedOxidizedCopperTrapdoor"] = "minecraft:waxed_oxidized_copper_trapdoor";
  MinecraftItemTypes2["WaxedOxidizedCutCopper"] = "minecraft:waxed_oxidized_cut_copper";
  MinecraftItemTypes2["WaxedOxidizedCutCopperSlab"] = "minecraft:waxed_oxidized_cut_copper_slab";
  MinecraftItemTypes2["WaxedOxidizedCutCopperStairs"] = "minecraft:waxed_oxidized_cut_copper_stairs";
  MinecraftItemTypes2["WaxedWeatheredChiseledCopper"] = "minecraft:waxed_weathered_chiseled_copper";
  MinecraftItemTypes2["WaxedWeatheredCopper"] = "minecraft:waxed_weathered_copper";
  MinecraftItemTypes2["WaxedWeatheredCopperBulb"] = "minecraft:waxed_weathered_copper_bulb";
  MinecraftItemTypes2["WaxedWeatheredCopperDoor"] = "minecraft:waxed_weathered_copper_door";
  MinecraftItemTypes2["WaxedWeatheredCopperGrate"] = "minecraft:waxed_weathered_copper_grate";
  MinecraftItemTypes2["WaxedWeatheredCopperTrapdoor"] = "minecraft:waxed_weathered_copper_trapdoor";
  MinecraftItemTypes2["WaxedWeatheredCutCopper"] = "minecraft:waxed_weathered_cut_copper";
  MinecraftItemTypes2["WaxedWeatheredCutCopperSlab"] = "minecraft:waxed_weathered_cut_copper_slab";
  MinecraftItemTypes2["WaxedWeatheredCutCopperStairs"] = "minecraft:waxed_weathered_cut_copper_stairs";
  MinecraftItemTypes2["WayfinderArmorTrimSmithingTemplate"] = "minecraft:wayfinder_armor_trim_smithing_template";
  MinecraftItemTypes2["WeatheredChiseledCopper"] = "minecraft:weathered_chiseled_copper";
  MinecraftItemTypes2["WeatheredCopper"] = "minecraft:weathered_copper";
  MinecraftItemTypes2["WeatheredCopperBulb"] = "minecraft:weathered_copper_bulb";
  MinecraftItemTypes2["WeatheredCopperDoor"] = "minecraft:weathered_copper_door";
  MinecraftItemTypes2["WeatheredCopperGrate"] = "minecraft:weathered_copper_grate";
  MinecraftItemTypes2["WeatheredCopperTrapdoor"] = "minecraft:weathered_copper_trapdoor";
  MinecraftItemTypes2["WeatheredCutCopper"] = "minecraft:weathered_cut_copper";
  MinecraftItemTypes2["WeatheredCutCopperSlab"] = "minecraft:weathered_cut_copper_slab";
  MinecraftItemTypes2["WeatheredCutCopperStairs"] = "minecraft:weathered_cut_copper_stairs";
  MinecraftItemTypes2["Web"] = "minecraft:web";
  MinecraftItemTypes2["WeepingVines"] = "minecraft:weeping_vines";
  MinecraftItemTypes2["WetSponge"] = "minecraft:wet_sponge";
  MinecraftItemTypes2["Wheat"] = "minecraft:wheat";
  MinecraftItemTypes2["WheatSeeds"] = "minecraft:wheat_seeds";
  MinecraftItemTypes2["WhiteBundle"] = "minecraft:white_bundle";
  MinecraftItemTypes2["WhiteCandle"] = "minecraft:white_candle";
  MinecraftItemTypes2["WhiteCarpet"] = "minecraft:white_carpet";
  MinecraftItemTypes2["WhiteConcrete"] = "minecraft:white_concrete";
  MinecraftItemTypes2["WhiteConcretePowder"] = "minecraft:white_concrete_powder";
  MinecraftItemTypes2["WhiteDye"] = "minecraft:white_dye";
  MinecraftItemTypes2["WhiteGlazedTerracotta"] = "minecraft:white_glazed_terracotta";
  MinecraftItemTypes2["WhiteShulkerBox"] = "minecraft:white_shulker_box";
  MinecraftItemTypes2["WhiteStainedGlass"] = "minecraft:white_stained_glass";
  MinecraftItemTypes2["WhiteStainedGlassPane"] = "minecraft:white_stained_glass_pane";
  MinecraftItemTypes2["WhiteTerracotta"] = "minecraft:white_terracotta";
  MinecraftItemTypes2["WhiteTulip"] = "minecraft:white_tulip";
  MinecraftItemTypes2["WhiteWool"] = "minecraft:white_wool";
  MinecraftItemTypes2["WildArmorTrimSmithingTemplate"] = "minecraft:wild_armor_trim_smithing_template";
  MinecraftItemTypes2["Wildflowers"] = "minecraft:wildflowers";
  MinecraftItemTypes2["WindCharge"] = "minecraft:wind_charge";
  MinecraftItemTypes2["WitchSpawnEgg"] = "minecraft:witch_spawn_egg";
  MinecraftItemTypes2["WitherRose"] = "minecraft:wither_rose";
  MinecraftItemTypes2["WitherSkeletonSkull"] = "minecraft:wither_skeleton_skull";
  MinecraftItemTypes2["WitherSkeletonSpawnEgg"] = "minecraft:wither_skeleton_spawn_egg";
  MinecraftItemTypes2["WitherSpawnEgg"] = "minecraft:wither_spawn_egg";
  MinecraftItemTypes2["WolfArmor"] = "minecraft:wolf_armor";
  MinecraftItemTypes2["WolfSpawnEgg"] = "minecraft:wolf_spawn_egg";
  MinecraftItemTypes2["WoodenAxe"] = "minecraft:wooden_axe";
  MinecraftItemTypes2["WoodenButton"] = "minecraft:wooden_button";
  MinecraftItemTypes2["WoodenDoor"] = "minecraft:wooden_door";
  MinecraftItemTypes2["WoodenHoe"] = "minecraft:wooden_hoe";
  MinecraftItemTypes2["WoodenPickaxe"] = "minecraft:wooden_pickaxe";
  MinecraftItemTypes2["WoodenPressurePlate"] = "minecraft:wooden_pressure_plate";
  MinecraftItemTypes2["WoodenShovel"] = "minecraft:wooden_shovel";
  MinecraftItemTypes2["WoodenSword"] = "minecraft:wooden_sword";
  MinecraftItemTypes2["WritableBook"] = "minecraft:writable_book";
  MinecraftItemTypes2["YellowBundle"] = "minecraft:yellow_bundle";
  MinecraftItemTypes2["YellowCandle"] = "minecraft:yellow_candle";
  MinecraftItemTypes2["YellowCarpet"] = "minecraft:yellow_carpet";
  MinecraftItemTypes2["YellowConcrete"] = "minecraft:yellow_concrete";
  MinecraftItemTypes2["YellowConcretePowder"] = "minecraft:yellow_concrete_powder";
  MinecraftItemTypes2["YellowDye"] = "minecraft:yellow_dye";
  MinecraftItemTypes2["YellowGlazedTerracotta"] = "minecraft:yellow_glazed_terracotta";
  MinecraftItemTypes2["YellowShulkerBox"] = "minecraft:yellow_shulker_box";
  MinecraftItemTypes2["YellowStainedGlass"] = "minecraft:yellow_stained_glass";
  MinecraftItemTypes2["YellowStainedGlassPane"] = "minecraft:yellow_stained_glass_pane";
  MinecraftItemTypes2["YellowTerracotta"] = "minecraft:yellow_terracotta";
  MinecraftItemTypes2["YellowWool"] = "minecraft:yellow_wool";
  MinecraftItemTypes2["ZoglinSpawnEgg"] = "minecraft:zoglin_spawn_egg";
  MinecraftItemTypes2["ZombieHead"] = "minecraft:zombie_head";
  MinecraftItemTypes2["ZombieHorseSpawnEgg"] = "minecraft:zombie_horse_spawn_egg";
  MinecraftItemTypes2["ZombiePigmanSpawnEgg"] = "minecraft:zombie_pigman_spawn_egg";
  MinecraftItemTypes2["ZombieSpawnEgg"] = "minecraft:zombie_spawn_egg";
  MinecraftItemTypes2["ZombieVillagerSpawnEgg"] = "minecraft:zombie_villager_spawn_egg";
  return MinecraftItemTypes2;
})(MinecraftItemTypes || {});
var MinecraftPotionEffectTypes = ((MinecraftPotionEffectTypes2) => {
  MinecraftPotionEffectTypes2["FireResistance"] = "FireResistance";
  MinecraftPotionEffectTypes2["Harming"] = "Harming";
  MinecraftPotionEffectTypes2["Healing"] = "Healing";
  MinecraftPotionEffectTypes2["Infested"] = "Infested";
  MinecraftPotionEffectTypes2["Invisibility"] = "Invisibility";
  MinecraftPotionEffectTypes2["Leaping"] = "Leaping";
  MinecraftPotionEffectTypes2["NightVision"] = "NightVision";
  MinecraftPotionEffectTypes2["None"] = "None";
  MinecraftPotionEffectTypes2["Oozing"] = "Oozing";
  MinecraftPotionEffectTypes2["Poison"] = "Poison";
  MinecraftPotionEffectTypes2["SlowFalling"] = "SlowFalling";
  MinecraftPotionEffectTypes2["Slowing"] = "Slowing";
  MinecraftPotionEffectTypes2["Strength"] = "Strength";
  MinecraftPotionEffectTypes2["Swiftness"] = "Swiftness";
  MinecraftPotionEffectTypes2["TurtleMaster"] = "TurtleMaster";
  MinecraftPotionEffectTypes2["WaterBreath"] = "WaterBreath";
  MinecraftPotionEffectTypes2["Weakness"] = "Weakness";
  MinecraftPotionEffectTypes2["Weaving"] = "Weaving";
  MinecraftPotionEffectTypes2["WindCharged"] = "WindCharged";
  MinecraftPotionEffectTypes2["Wither"] = "Wither";
  return MinecraftPotionEffectTypes2;
})(MinecraftPotionEffectTypes || {});
var MinecraftPotionLiquidTypes = ((MinecraftPotionLiquidTypes2) => {
  MinecraftPotionLiquidTypes2["Lingering"] = "Lingering";
  MinecraftPotionLiquidTypes2["Regular"] = "Regular";
  MinecraftPotionLiquidTypes2["Splash"] = "Splash";
  return MinecraftPotionLiquidTypes2;
})(MinecraftPotionLiquidTypes || {});
var MinecraftPotionModifierTypes = ((MinecraftPotionModifierTypes2) => {
  MinecraftPotionModifierTypes2["Long"] = "Long";
  MinecraftPotionModifierTypes2["Normal"] = "Normal";
  MinecraftPotionModifierTypes2["Strong"] = "Strong";
  return MinecraftPotionModifierTypes2;
})(MinecraftPotionModifierTypes || {});

// scripts/bossEvents.ts
import { system as system2, world as world2 } from "@minecraft/server";
import { ActionFormData, ModalFormData } from "@minecraft/server-ui";

// scripts/addonCompatibility/jigarbov.ts
import { world, system } from "@minecraft/server";
var ComputersCompat = class {
  static {
    //set your namespace
    this.addonNameSpace = "poke_pfe";
  }
  static {
    //leave the rest!
    this.computersScoreboardID = "jig_computer.addon_stats";
  }
  static {
    this.addonStatScoreboardID = `${this.addonNameSpace}:${this.computersScoreboardID}`;
  }
  /**
   * Initializes the scoreboard's required for Jigs Computers Add-On to have stats for this add-on
   * @static
   */
  static init() {
    if (!world.scoreboard.getObjective(this.addonStatScoreboardID)) {
      world.scoreboard.addObjective(this.addonStatScoreboardID, "dummy");
    }
    this.addonStatObjective = world.scoreboard.getObjective(this.addonStatScoreboardID);
  }
  /**
   * Adds to a statistic tracked by Jigs Computers Add-On.
   *
   * @param statID - The identifier of the statistic to add, defined in {@link StatIDs}.
   * @param amount - The amount to add to the statistic.
   */
  static addStat(statID, amount) {
    this.addonStatObjective?.addScore(`${this.addonNameSpace}:${statID}`, amount);
  }
};
var initExampleStickers = () => {
  const entities = {
    "poke:bone_bear": [{ itemId: "poke_pfe:bone_bear_sticker" }],
    "poke:brown_sporefish": [{ itemId: "poke_pfe:brown_sporefish_sticker" }],
    "poke_pfe:cassette_trader": [{ itemId: "poke_pfe:cassette_trader_sticker" }],
    "poke:cobalt_golem": [{ itemId: "poke_pfe:_sticker" }],
    "poke:cosmetic_trader": [{ itemId: "poke_pfe:_sticker" }],
    "poke:crimson_sporeshroom": [{ itemId: "poke_pfe:crimson_sporeshroom_sticker" }],
    "poke:demonic_allay": [{ itemId: "poke_pfe:demonic_allay_sticker" }],
    "poke:duck": [{ itemId: "poke_pfe:duck_sticker" }],
    "poke:ender_phantom": [{ itemId: "poke_pfe:ender_phantom_sticker" }],
    "poke:robo_golem": [{ itemId: "poke_pfe:furnace_golem_sticker" }],
    "poke:gilded_allay": [{ itemId: "poke_pfe:_sticker" }],
    "poke:grizzly_bear": [{ itemId: "poke_pfe:grizzly_bear_sticker" }],
    "poke:knightling": [{ itemId: "poke_pfe:knightling_sticker" }],
    "poke:listener": [{ itemId: "poke_pfe:listener_sticker" }],
    "poke:logger": [{ itemId: "poke_pfe:logger_sticker" }],
    "poke:mini_demonic_allay": [{ itemId: "poke_pfe:mini_demonic_allay_sticker" }],
    "poke:money_man": [{ itemId: "poke_pfe:money_man_sticker" }],
    "poke:mushroom_buddy": [{ itemId: "poke_pfe:mushroom_buddy_sticker" }],
    "poke:nebula_bug": [{ itemId: "poke_pfe:nebula_bug_sticker" }],
    "poke:necromancer": [{ itemId: "poke_pfe:necromancer_sticker" }],
    "poke:orange_squid": [{ itemId: "poke_pfe:orange_squid_sticker" }],
    "poke:pale_ocelot": [{ itemId: "poke_pfe:pale_ocelot_sticker" }],
    "poke:pink_squid": [{ itemId: "poke_pfe:pink_squid_sticker" }],
    "poke:piranha": [{ itemId: "poke_pfe:piranha_sticker" }],
    "poke:quest_trader": [{ itemId: "poke_pfe:quest_trader_sticker" }],
    "poke:raccoon": [{ itemId: "poke_pfe:raccoon_sticker" }],
    "poke:rat": [{ itemId: "poke_pfe:rat_sticker" }],
    "poke:red_panda": [{ itemId: "poke_pfe:red_panda_sticker" }],
    "poke:red_sporefish": [{ itemId: "poke_pfe:red_sporefish_sticker" }],
    "poke:retro_llama": [{ itemId: "poke_pfe:retro_llama_sticker" }],
    "poke:scrapper": [{ itemId: "poke_pfe:scrapper_sticker" }],
    "poke:sculk_enderman": [{ itemId: "poke_pfe:sculk_enderman_sticker" }],
    "poke:shallow_cod": [{ itemId: "poke_pfe:shallow_cod_sticker" }],
    "poke:shopkeeper": [{ itemId: "poke_pfe:shopkeeper_sticker" }],
    "poke:shroomfin": [{ itemId: "poke_pfe:shroomfin_sticker" }],
    "poke:snowman": [{ itemId: "poke_pfe:snowman_sticker" }],
    "poke:soul_blaze": [{ itemId: "poke_pfe:soul_blaze_sticker" }],
    "poke:dragon": [{ itemId: "poke_pfe:sparky_sticker" }],
    "poke:sporefish": [{ itemId: "poke_pfe:sporefish_sticker" }],
    "poke:striker": [{ itemId: "poke_pfe:striker_sticker" }],
    "poke:super_striker": [{ itemId: "poke_pfe:super_striker_sticker" }],
    "poke:token_trader": [{ itemId: "poke_pfe:token_trader_sticker" }],
    "poke:warped_sporecat": [{ itemId: "poke_pfe:warped_sporecat_sticker" }],
    "poke:warped_sporeshroom": [{ itemId: "poke_pfe:warped_sporeshroom_sticker" }],
    "poke:windswept_bear": [{ itemId: "poke_pfe:windswept_bear_sticker" }],
    "poke:woodspike_guardian": [{ itemId: "poke_pfe:woodspike_guardian_sticker" }],
    "poke:yak": [{ itemId: "poke_pfe:_sticker" }],
    "poke:zombken": [{ itemId: "poke_pfe:zombken_sticker" }]
    /*'your_namespace:example_complex_mob': [
    {itemId: 'your_namespace:normal_sticker_1',specialItemId: 'your_namespace:rare_sticker_1',conditions: [{component: 'minecraft:variant',componentValue: 0}]},
    {itemId: 'your_namespace:normal_sticker_2',specialItemId: 'your_namespace:rare_sticker_2',conditions: [{component: 'minecraft:variant',componentValue: 1}]}	],*/
  };
  const chunkObject = (obj, chunkSize) => {
    const keys = Object.keys(obj);
    const chunks = [];
    for (let i = 0; i < keys.length; i += chunkSize) {
      const chunk = {};
      keys.slice(i, i + chunkSize).forEach((key) => {
        chunk[key] = obj[key];
      });
      chunks.push(chunk);
    }
    return chunks;
  };
  const entityChunks = chunkObject(entities, 4);
  entityChunks.forEach((entityChunk, index) => {
    const m = {
      id: Math.random().toString(16),
      type: "request",
      endpoint: "addStickers",
      params: [1, entityChunk],
      // Use only a chunk of entities
      callback: void 0
    };
    const delay = 10 + index;
    system.runTimeout(
      () => void world.getDimension("overworld").runCommandAsync(`scriptevent mineapi:jig_pcs ${JSON.stringify(m)}`),
      delay
    );
  });
};

// scripts/bossEvents.ts
var PFEBossEventConfigName = `pfe:bossEventConfig`;
var PFEBossEventBosses = [
  `poke:zombken`,
  `poke:super_striker`,
  `poke:knightling`,
  `poke:mini_demonic_allay`,
  `poke:necromancer`,
  `poke:snowman`,
  `poke:robo_golem`,
  `poke:dragon`,
  `poke:the_logger`,
  `poke:listener`
];
var TotalBosses = PFEBossEventBosses.length;
var PFEDefaultBossEventSettings = {
  "zombken": { "e": true, "%": 75 },
  "superStriker": { "e": true, "%": 75 },
  "knightling": { "e": true, "%": 5 },
  "miniDemonicAllay": { "e": true, "%": 5 },
  "necromancer": { "e": true, "%": 1 },
  "snowman": { "e": true, "%": 5 },
  "furnaceGolem": { "e": false, "%": 0 },
  "sparky": { "e": false, "%": 0 },
  "theLogger": { "e": false, "%": 0 },
  "listener": { "e": false, "%": 0 },
  "ticks": 108e3
};
function PFEBossEventUIMainMenu(player) {
  let settings = JSON.parse(world2.getDynamicProperty(PFEBossEventConfigName).toString());
  let EnabledBosses = 0;
  if (settings.zombken.e)
    EnabledBosses++;
  if (settings.superStriker.e)
    EnabledBosses++;
  if (settings.knightling.e)
    EnabledBosses++;
  if (settings.miniDemonicAllay.e)
    EnabledBosses++;
  if (settings.necromancer.e)
    EnabledBosses++;
  if (settings.snowman.e)
    EnabledBosses++;
  if (settings.furnaceGolem.e)
    EnabledBosses++;
  if (settings.sparky.e)
    EnabledBosses++;
  if (settings.theLogger.e)
    EnabledBosses++;
  if (settings.listener.e)
    EnabledBosses++;
  new ActionFormData().title({ translate: `translation.poke:bossEventMainMenuTitle` }).button({ translate: `translation.poke:bossEventMainMenuEnableBosses`, with: [`${EnabledBosses}`, `${TotalBosses}`] }, "textures/poke/common/spawn_enabled").button({ translate: `translation.poke:bossEventMainMenuBossChances` }, "textures/poke/common/spawn_weight").button({ translate: `translation.poke:bossEventSettings` }, "textures/poke/common/more_options").button({ translate: `translation.poke:bossEventClose` }, "textures/poke/common/close").show(player).then((ui) => {
    if (ui.canceled || ui.selection == 3) {
      return;
    }
    ;
    if (ui.selection == 0) {
      PFEBossEventUIEnabledBosses(player);
      return;
    }
    ;
    if (ui.selection == 1) {
      PFEBossEventUIBossChances(player);
      return;
    }
    ;
    if (ui.selection == 2) {
      PFEBossEventUISettings(player);
      return;
    }
    ;
  });
}
function PFEBossEventUISettings(player) {
  let settings = JSON.parse(world2.getDynamicProperty(PFEBossEventConfigName).toString());
  new ActionFormData().title({ translate: `translation.poke:bossEventMainMenuTitle` }).button({ translate: `translation.poke:bossEventManual` }, "textures/poke/pfe/bounty").button({ translate: `translation.poke:bossEventTiming` }, "textures/poke/common/spawn_time").button({ translate: `translation.poke:bossEventSettingsReset` }, "textures/ui/refresh_light").button({ translate: `translation.poke:bossEventGoBack` }, "textures/poke/common/left_arrow").show(player).then((ui) => {
    if (ui.canceled || ui.selection == 3) {
      PFEBossEventUIMainMenu(player);
      return;
    }
    ;
    if (ui.selection == 0) {
      PFEStartBossEvent();
    }
    if (ui.selection == 1) {
      PFEBossEventTiming(player);
      return;
    }
    ;
    if (ui.selection == 2) {
      world2.setDynamicProperty(PFEBossEventConfigName, JSON.stringify(PFEDefaultBossEventSettings));
      return;
    }
    ;
  });
}
function PFEBossEventUIEnabledBosses(player) {
  let settings = JSON.parse(world2.getDynamicProperty(PFEBossEventConfigName).toString());
  new ModalFormData().title({ translate: `translation.poke:bossEventMainMenuTitle` }).toggle({ translate: `entity.poke:zombken.name` }, settings.zombken.e).toggle({ translate: `entity.poke:super_striker.name` }, settings.superStriker.e).toggle({ translate: `entity.poke:knightling.name` }, settings.knightling.e).toggle({ translate: `entity.poke:mini_demonic_allay.name` }, settings.miniDemonicAllay.e).toggle({ translate: `entity.poke:necromancer.name` }, settings.necromancer.e).toggle({ translate: `entity.poke:snowman.name` }, settings.snowman.e).toggle({ translate: `entity.poke:robo_golem.name` }, settings.furnaceGolem.e).toggle({ translate: `entity.poke:dragon.name` }, settings.sparky.e).toggle({ translate: `entity.poke:the_logger.name` }, settings.theLogger.e).toggle({ translate: `entity.poke:listener.name` }, settings.listener.e).submitButton(`translation.poke:BossEventUISubmit`).show(player).then((ui) => {
    if (!ui.canceled) {
      settings.zombken.e = Boolean(ui.formValues.at(0));
      settings.superStriker.e = Boolean(ui.formValues.at(1));
      settings.knightling.e = Boolean(ui.formValues.at(2));
      settings.miniDemonicAllay.e = Boolean(ui.formValues.at(3));
      settings.necromancer.e = Boolean(ui.formValues.at(4));
      settings.snowman.e = Boolean(ui.formValues.at(5));
      settings.furnaceGolem.e = Boolean(ui.formValues.at(6));
      settings.sparky.e = Boolean(ui.formValues.at(7));
      settings.theLogger.e = Boolean(ui.formValues.at(8));
      settings.listener.e = Boolean(ui.formValues.at(9));
      world2.setDynamicProperty(PFEBossEventConfigName, JSON.stringify(settings));
    }
    PFEBossEventUIMainMenu(player);
    return;
  });
}
function PFEBossEventTiming(player) {
  let settings = JSON.parse(world2.getDynamicProperty(PFEBossEventConfigName).toString());
  new ModalFormData().title({ translate: `translation.poke:bossEventMainMenuTitle` }).textField({ translate: `translation.poke:BossEventTimeDesc` }, { translate: `translation.poke:BossEventTimePlaceholder` }, `${settings.ticks}`).submitButton(`translation.poke:BossEventUISubmit`).show(player).then((ui) => {
    if (!ui.canceled) {
      let newTicks = Number(ui.formValues.at(0));
      if (Number(isNaN(newTicks))) {
        return;
      } else {
        settings.ticks = Number(ui.formValues.at(0));
        world2.setDynamicProperty(PFEBossEventConfigName, JSON.stringify(settings));
      }
    }
    PFEBossEventUIMainMenu(player);
    return;
  });
}
function PFEBossEventUIBossChances(player) {
  let settings = JSON.parse(world2.getDynamicProperty(PFEBossEventConfigName).toString());
  new ModalFormData().title({ translate: `translation.poke:bossEventMainMenuTitle` }).slider({ translate: `entity.poke:zombken.name` }, 0, 100, 1, settings.zombken["%"]).slider({ translate: `entity.poke:super_striker.name` }, 0, 100, 1, settings.superStriker["%"]).slider({ translate: `entity.poke:knightling.name` }, 0, 100, 1, settings.knightling["%"]).slider({ translate: `entity.poke:mini_demonic_allay.name` }, 0, 100, 1, settings.miniDemonicAllay["%"]).slider({ translate: `entity.poke:necromancer.name` }, 0, 100, 1, settings.necromancer["%"]).slider({ translate: `entity.poke:snowman.name` }, 0, 100, 1, settings.snowman["%"]).slider({ translate: `entity.poke:robo_golem.name` }, 0, 100, 1, settings.furnaceGolem["%"]).slider({ translate: `entity.poke:dragon.name` }, 0, 100, 1, settings.sparky["%"]).slider({ translate: `entity.poke:the_logger.name` }, 0, 100, 1, settings.theLogger["%"]).slider({ translate: `entity.poke:listener.name` }, 0, 100, 1, settings.listener["%"]).submitButton(`translation.poke:BossEventUISubmit`).show(player).then((ui) => {
    if (!ui.canceled) {
      settings.zombken["%"] = Number(ui.formValues.at(0));
      settings.superStriker["%"] = Number(ui.formValues.at(1));
      settings.knightling["%"] = Number(ui.formValues.at(2));
      settings.miniDemonicAllay["%"] = Number(ui.formValues.at(3));
      settings.necromancer["%"] = Number(ui.formValues.at(4));
      settings.snowman["%"] = Number(ui.formValues.at(5));
      settings.furnaceGolem["%"] = Number(ui.formValues.at(6));
      settings.sparky["%"] = Number(ui.formValues.at(7));
      settings.theLogger["%"] = Number(ui.formValues.at(8));
      settings.listener["%"] = Number(ui.formValues.at(9));
      world2.setDynamicProperty(PFEBossEventConfigName, JSON.stringify(settings));
    }
    PFEBossEventUIMainMenu(player);
    return;
  });
}
function PFEBossEventTicks() {
  let settings = PFEDefaultBossEventSettings;
  if (typeof world2.getDynamicProperty(PFEBossEventConfigName) != "string") {
    return PFEDefaultBossEventSettings.ticks;
  } else
    settings = JSON.parse(world2.getDynamicProperty(PFEBossEventConfigName).toString());
  return settings.ticks;
}
function PFEStartBossEvent() {
  let settings = JSON.parse(world2.getDynamicProperty(PFEBossEventConfigName).toString());
  let allPlayers = world2.getAllPlayers();
  let randomPlayer = allPlayers.at(Math.abs(Math.round(Math.random() * (allPlayers.length - 1))));
  if (!settings.zombken.e)
    settings.zombken["%"] = 0;
  if (!settings.superStriker.e)
    settings.superStriker["%"] = 0;
  if (!settings.knightling.e)
    settings.knightling["%"] = 0;
  if (!settings.miniDemonicAllay.e)
    settings.miniDemonicAllay["%"] = 0;
  if (!settings.necromancer.e)
    settings.necromancer["%"] = 0;
  if (!settings.snowman.e)
    settings.snowman["%"] = 0;
  if (!settings.furnaceGolem.e)
    settings.furnaceGolem["%"] = 0;
  if (!settings.sparky.e)
    settings.sparky["%"] = 0;
  if (!settings.theLogger.e)
    settings.theLogger["%"] = 0;
  if (!settings.listener.e)
    settings.listener["%"] = 0;
  let zombkenWeight = settings.zombken["%"];
  let superStrikerWeight = settings.superStriker["%"];
  let knightlingWeight = settings.knightling["%"];
  let miniDemonicAllayWeight = settings.miniDemonicAllay["%"];
  let necromancerWeight = settings.necromancer["%"];
  let snowmanWeight = settings.snowman["%"];
  let furnaceGolemWeight = settings.furnaceGolem["%"];
  let sparkyWeight = settings.sparky["%"];
  let theLoggerWeight = settings.theLogger["%"];
  let listenerWeight = settings.listener["%"];
  let weights = [zombkenWeight, superStrikerWeight, knightlingWeight, miniDemonicAllayWeight, necromancerWeight, snowmanWeight, furnaceGolemWeight, sparkyWeight, theLoggerWeight, listenerWeight];
  if (zombkenWeight + superStrikerWeight + knightlingWeight + miniDemonicAllayWeight + necromancerWeight + snowmanWeight + furnaceGolemWeight + sparkyWeight + theLoggerWeight + listenerWeight == 0)
    return 0;
  const weightedRandom = (array, weights2) => {
    const totalWeight = weights2.reduce((a, b) => a + b, 0);
    let random = Math.random() * totalWeight;
    return array.find((_, i) => (random -= weights2[i]) <= 0);
  };
  let selectedBoss = weightedRandom(PFEBossEventBosses, weights);
  randomPlayer?.dimension.spawnEntity(selectedBoss, randomPlayer.location).runCommand(`spreadplayers ~ ~ 30 40 @s ~10`);
  world2.sendMessage({ rawtext: [{ translate: `translation.${selectedBoss}_boss_event_near` }, { text: `: ${randomPlayer?.name}` }] });
  ComputersCompat.addStat(`boss_events_triggered`, 1);
}
system2.runInterval(() => {
  PFEStartBossEvent();
}, PFEBossEventTicks());

// scripts/haxelMining.ts
import { EntityComponentTypes as EntityComponentTypes2, EquipmentSlot as EquipmentSlot2, ItemComponentTypes as ItemComponentTypes2, ItemStack as ItemStack2, system as system3 } from "@minecraft/server";
import { ActionFormData as ActionFormData3, ModalFormData as ModalFormData2 } from "@minecraft/server-ui";

// scripts/commonFunctions.ts
import { Direction, EntityComponentTypes, EquipmentSlot, GameMode, ItemComponentTypes } from "@minecraft/server";
import { ActionFormData as ActionFormData2 } from "@minecraft/server-ui";
function PokeDamageItemUB(item, multiplier, entity, slot) {
  if (!item.hasComponent(ItemComponentTypes.Durability)) {
    PokeSaveProperty(`poke:holdFix`, item, Math.round(Math.random() * 100), entity, slot);
    return { tookDurability: false, failed: true, broke: false };
  }
  if (!entity.hasComponent(EntityComponentTypes.Equippable)) {
    return { tookDurability: false, failed: true, broke: false };
  }
  let equippableComponent = entity.getComponent(EntityComponentTypes.Equippable);
  const durabilityComponent = item.getComponent(ItemComponentTypes.Durability);
  var unbreakingL = 0;
  if (!slot) {
    slot = EquipmentSlot.Mainhand;
  }
  if (entity.typeId == MinecraftEntityTypes.Player) {
    if (entity.getGameMode() == GameMode.creative) {
      PokeSaveProperty(`poke:holdFix`, item, Math.round(Math.random() * 100), entity, slot);
      return { tookDurability: false, failed: false, broke: false, gmc: true };
    }
  }
  if (item.hasComponent(ItemComponentTypes.Enchantable)) {
    if (item.getComponent(ItemComponentTypes.Enchantable).hasEnchantment(MinecraftEnchantmentTypes.Unbreaking)) {
      unbreakingL = item.getComponent(ItemComponentTypes.Enchantable).getEnchantment(MinecraftEnchantmentTypes.Unbreaking).level;
    }
  }
  let damage = Number(Math.round(Math.random() * 100) <= durabilityComponent.getDamageChance(unbreakingL));
  if (typeof multiplier == "number") {
    damage *= multiplier;
  }
  if (durabilityComponent.damage + damage >= durabilityComponent.maxDurability)
    durabilityComponent.damage = durabilityComponent.maxDurability;
  else
    durabilityComponent.damage += damage;
  if (durabilityComponent.damage >= durabilityComponent.maxDurability) {
    if (equippableComponent.getEquipment(slot)?.typeId == item.typeId) {
      equippableComponent.setEquipment(slot, void 0);
      entity.dimension.playSound(`random.break`, entity.location, { pitch: Math.max(Math.max(Math.random() * 1.05, 0.95)) });
    }
    return;
  }
  PokeSaveProperty(`poke:holdFix`, item, Math.round(Math.random() * 100), entity, slot);
  return;
}
function PokeDecrementStack(item, amount) {
  if (item.amount <= 1)
    return void 0;
  else {
    if (amount) {
      item.amount += amount;
      if (item.amount > item.maxAmount)
        item.amount = item.maxAmount;
    } else
      item.amount += -1;
    return item;
  }
}
function PokeErrorScreen(player, error, backTo) {
  let UI = new ActionFormData2();
  if (!error) {
    error = { translate: `translation.poke:errorGeneric` };
  }
  UI.title({ translate: `translation.poke:errorGeneric` });
  UI.body(error);
  UI.button({ translate: `translation.poke:goBack` }, `textures/poke/common/left_arrow`);
  UI.button({ translate: `translation.poke:bossEventClose` }, `textures/poke/common/close`);
  UI.show(player).then((response) => {
    if (response.canceled || response.selection == 1) {
      backTo;
      return;
    }
    if (response.selection == 2) {
      return;
    }
  });
}
function PokeGetItemFromInventory(entity, slot, itemId) {
  let inventoryComponent = entity.getComponent(EntityComponentTypes.Inventory);
  if (inventoryComponent) {
    let returningItems = [];
    if (slot) {
      let slottedItem = inventoryComponent.container?.getItem(slot);
      if (!slottedItem)
        return slottedItem;
      if (itemId) {
        if (slottedItem.typeId == itemId)
          return [slottedItem];
        else
          return void 0;
      } else
        return [slottedItem];
    }
    for (let i = inventoryComponent.inventorySize - 1; i > -1; i--) {
      let slottedItem = inventoryComponent.container?.getItem(i);
      if (!slottedItem)
        continue;
      if (!itemId) {
        returningItems = returningItems.concat([slottedItem]);
        continue;
      } else {
        if (slottedItem.typeId == itemId) {
          returningItems = returningItems.concat([slottedItem]);
          continue;
        }
      }
    }
    if (returningItems.length == 0) {
      return void 0;
    }
    return returningItems;
  }
}
function PokeGetObjectById(array, id) {
  for (let i = array.length - 1; i > -1; i--) {
    if (array.at(i).id == id)
      return {
        value: array.at(i),
        position: i
      };
  }
  return void 0;
}
function PokeSaveProperty(propertyId, item, save, entity, slot) {
  item.setDynamicProperty(propertyId, save);
  if (!slot)
    slot = EquipmentSlot.Mainhand;
  let equippableComponent = entity.getComponent(EntityComponentTypes.Equippable);
  if (equippableComponent.getEquipmentSlot(slot).typeId == item.typeId) {
    equippableComponent.setEquipment(slot, item);
    return true;
  } else {
    return false;
  }
}
function PokeSpawnLootTable(lootTable, position, dimension, amount) {
  if (amount) {
    for (let i = amount - 1; i > -1; i--) {
      dimension.runCommand(`loot spawn ${position.x} ${position.y} ${position.z} loot "${lootTable}"`);
    }
    return;
  } else
    dimension.runCommand(`loot spawn ${position.x} ${position.y} ${position.z} loot "${lootTable}"`);
}
function PokeClosestCardinal(vector, directions) {
  let returnProperty = {
    direction: Direction.Up,
    vector
  };
  if (directions == "upDown") {
    if (vector.y >= 0) {
      returnProperty.direction = Direction.Up, returnProperty.vector = { x: 0, y: 1, z: 0 };
    } else if (vector.y < 0) {
      returnProperty.direction = Direction.Down, returnProperty.vector = { x: 0, y: -1, z: 0 };
    }
    return returnProperty;
  } else
    switch (true) {
      case vector.y < -0.7: {
        returnProperty.direction = Direction.Down, returnProperty.vector = { x: 0, y: -1, z: 0 };
        break;
      }
      case vector.y > 0.7: {
        returnProperty.direction = Direction.Up, returnProperty.vector = { x: 0, y: 1, z: 0 };
        break;
      }
      case vector.x > 0.7: {
        returnProperty.direction = Direction.East, returnProperty.vector = { x: 1, y: 0, z: 0 };
        break;
      }
      case vector.x < -0.7: {
        returnProperty.direction = Direction.West, returnProperty.vector = { x: -1, y: 0, z: 0 };
        break;
      }
      case vector.z > 0.7: {
        returnProperty.direction = Direction.South, returnProperty.vector = { x: 0, y: 0, z: 1 };
        break;
      }
      case vector.z < -0.7: {
        returnProperty.direction = Direction.North, returnProperty.vector = { x: 0, y: 0, z: -1 };
        break;
      }
    }
  return returnProperty;
}

// scripts/haxelMining.ts
var PFEHaxelVersion = 2;
var PFEHaxelInfoProperty = `pfe:haxelInfo`;
var PFEHaxelConfigDefault = {
  "blacklist": [
    MinecraftBlockTypes.Chest,
    MinecraftBlockTypes.Barrel,
    MinecraftBlockTypes.BuddingAmethyst,
    MinecraftBlockTypes.MobSpawner,
    MinecraftBlockTypes.TrialSpawner,
    MinecraftBlockTypes.Vault,
    MinecraftBlockTypes.Bed
  ],
  "v": PFEHaxelVersion
};
var PFEHaxelMining = class {
  onUse(data) {
    if (!data.itemStack)
      return;
    let dynamicProperty = data.itemStack.getDynamicProperty("pfe:haxelInfo");
    if (dynamicProperty == void 0) {
      data.itemStack.setDynamicProperty("pfe:haxelInfo", JSON.stringify(PFEHaxelConfigDefault));
      data.source.getComponent(EntityComponentTypes2.Equippable).setEquipment(EquipmentSlot2.Mainhand, data.itemStack);
      dynamicProperty = PFEHaxelConfigDefault;
    } else
      dynamicProperty = JSON.parse(dynamicProperty);
    if (!dynamicProperty.v) {
      if (!(dynamicProperty.blacklist.length < 1)) {
        let newBlacklist = [];
        for (let i = dynamicProperty.blacklist.length - 1; i > -1; i--) {
          let blacklistedBlock = dynamicProperty.blacklist.at(i);
          if (!blacklistedBlock)
            continue;
          let newBlacklistedBlock = blacklistedBlock.replace(blacklistedBlock, blacklistedBlock.toLowerCase());
          newBlacklist.concat([newBlacklistedBlock]);
        }
        let newProperty = {
          "blacklist": newBlacklist,
          "v": PFEHaxelVersion
        };
        PokeSaveProperty(PFEHaxelInfoProperty, data.itemStack, JSON.stringify(newProperty), data.source, EquipmentSlot2.Mainhand);
        dynamicProperty = newProperty;
      }
    }
    const ItemTags = data.itemStack.getTags().toString();
    let ComponentInfo = JSON.parse(ItemTags.substring(ItemTags.indexOf("pfe:HaxelMining:"), ItemTags.indexOf(":pfeHaxelMiningEnd")).substring(16));
    if (data.source.isSneaking) {
      PFEHaxelConfigMenu(data, ComponentInfo);
      return;
    }
    let localBlacklist = [];
    localBlacklist = dynamicProperty.blacklist;
    let BannedBlocks = [MinecraftBlockTypes.Air, MinecraftBlockTypes.LightBlock0, MinecraftBlockTypes.LightBlock1, MinecraftBlockTypes.LightBlock2, MinecraftBlockTypes.LightBlock3, MinecraftBlockTypes.LightBlock4, MinecraftBlockTypes.LightBlock5, MinecraftBlockTypes.LightBlock6, MinecraftBlockTypes.LightBlock7, MinecraftBlockTypes.LightBlock8, MinecraftBlockTypes.LightBlock9, MinecraftBlockTypes.LightBlock10, MinecraftBlockTypes.LightBlock11, MinecraftBlockTypes.LightBlock12, MinecraftBlockTypes.LightBlock13, MinecraftBlockTypes.LightBlock14, MinecraftBlockTypes.LightBlock15, MinecraftBlockTypes.Barrier, MinecraftBlockTypes.Jigsaw, MinecraftBlockTypes.StructureBlock, MinecraftBlockTypes.CommandBlock, MinecraftBlockTypes.ChainCommandBlock, MinecraftBlockTypes.RepeatingCommandBlock, MinecraftBlockTypes.BorderBlock, MinecraftBlockTypes.Allow, MinecraftBlockTypes.Deny];
    let location = { x: Math.round(data.source.location.x - ComponentInfo.radius.x / 2), y: Math.round(data.source.location.y - 0.01), z: Math.round(data.source.location.z - ComponentInfo.radius.z / 2) };
    system3.runJob(PFEMine(BannedBlocks.concat(localBlacklist), ComponentInfo, location, data.source, data.source.dimension, data.itemStack.getComponent(ItemComponentTypes2.Enchantable).hasEnchantment(MinecraftEnchantmentTypes.SilkTouch), data.itemStack));
  }
};
function* PFEMine(BannedBlocks, data, location, player, dim, silkTouch, item) {
  let DurabilityAmount = 0;
  for (let x = location.x; x < location.x + data.radius.x; x++) {
    for (let y = location.y; y < location.y + data.radius.y; y++) {
      for (let z = location.z; z < location.z + data.radius.z; z++) {
        const block = dim.getBlock({ x, y, z });
        if (block) {
          if (BannedBlocks.includes(block.typeId) || block.typeId == MinecraftBlockTypes.Bedrock && !data.canBreakBedrock || block.isLiquid && !data.canBreakLiquids) {
          } else {
            DurabilityAmount = DurabilityAmount + 1;
            if (silkTouch) {
              let blockItemStack = block.getItemStack(1, false);
              if (block.typeId.includes(`shulker_box`)) {
                blockItemStack = block.getItemStack(1, true);
              }
              if (!blockItemStack)
                blockItemStack = new ItemStack2(block.typeId);
              block.dimension.spawnItem(blockItemStack, player.location);
              block.setType(MinecraftBlockTypes.Air);
            } else {
              let blockLocation = `${block.location.x} ${block.location.y} ${block.location.z}`;
              block.dimension.runCommand(`setblock ${blockLocation} air destroy`);
            }
          }
        }
        yield;
      }
    }
  }
  if (DurabilityAmount != 0 && silkTouch) {
    player.dimension.playSound("dig.stone", player.location);
  }
  PokeDamageItemUB(item, DurabilityAmount, player, EquipmentSlot2.Mainhand);
  ComputersCompat.addStat("haxel_block_breaks", DurabilityAmount);
  if (!silkTouch) {
    player.runCommand(`tp @e[type=item,r=${Math.max(data.radius.x, data.radius.y) + 1}] @s`);
  }
}
function PFEHaxelConfigMenu(data, ComponentInfo) {
  let dynamicProperty = data.itemStack?.getDynamicProperty("pfe:haxelInfo");
  dynamicProperty = JSON.parse(dynamicProperty);
  let Ui = new ActionFormData3().title({ translate: `translation.poke:haxelConfig.mainMenu.title`, with: { rawtext: [{ translate: data.itemStack?.nameTag ?? `poke_pfe.${data.itemStack?.typeId}`.replace(`poke:haxel`, `onyx_haxel`).replace(`poke:`, ``) }] } }).button({ translate: `translation.poke:haxelConfig.mainMenu.blacklistAdd` }, `textures/poke/common/blacklist_add`);
  if (dynamicProperty.blacklist.length >= 1) {
    Ui.button({ translate: `translation.poke:haxelConfig.mainMenu.blacklistRemove` }, `textures/poke/common/blacklist_remove`);
  }
  Ui.show(data.source).then((response) => {
    if (response.canceled)
      return;
    if (response.selection == 0) {
      PFEHaxelConfigBlackListAdd(data, dynamicProperty);
      return;
    }
    if (response.selection == 1) {
      PFEHaxelConfigBlackListRemove(data, dynamicProperty);
      return;
    }
  });
}
function PFEHaxelConfigBlackListAdd(data, dynamicProperty) {
  let Ui = new ModalFormData2().title({ translate: `translation.poke:haxelConfig.mainMenu.title`, with: { rawtext: [{ translate: data.itemStack?.nameTag ?? `poke_pfe.${data.itemStack?.typeId}`.replace(`poke:haxel`, `onyx_haxel`).replace(`poke:`, ``) }] } }).textField({ translate: `translation.poke:haxelConfig.blacklistAdd.textLabel` }, "", "").submitButton({ translate: `translation.poke:haxelConfig.blacklistAdd.submit` });
  Ui.show(data.source).then((response) => {
    if (response.canceled)
      return;
    let block = response.formValues?.at(0);
    if (block == "")
      return;
    if (typeof block == "string") {
      if (!block.includes(":")) {
        block = `minecraft:${block}`;
      }
      block = block.toLowerCase();
      let newProperty = {
        "blacklist": dynamicProperty.blacklist.concat([block]),
        "v": dynamicProperty.v
      };
      if (data.itemStack == void 0)
        return;
      PokeSaveProperty(PFEHaxelInfoProperty, data.itemStack, JSON.stringify(newProperty), data.source, EquipmentSlot2.Mainhand);
    }
  });
}
function PFEHaxelConfigBlackListRemove(data, dynamicProperty) {
  let Ui = new ActionFormData3().title({ translate: `translation.poke:haxelConfig.mainMenu.blacklistRemove` });
  dynamicProperty.blacklist.forEach((block) => {
    Ui.button({ translate: `tile.${block.replace(`minecraft:`, ``)}.name` });
  });
  Ui.show(data.source).then((response) => {
    if (response.canceled)
      return;
    for (let i = dynamicProperty.blacklist.length; i >= -1; i--) {
      if (response.selection == i) {
        dynamicProperty.blacklist.splice(i, 1);
        if (data.itemStack == void 0)
          return;
        PokeSaveProperty(PFEHaxelInfoProperty, data.itemStack, JSON.stringify(dynamicProperty), data.source, EquipmentSlot2.Mainhand);
      }
    }
  });
}

// scripts/time.ts
import { GameMode as GameMode2, world as world4 } from "@minecraft/server";
import { ActionFormData as ActionFormData4, ModalFormData as ModalFormData3 } from "@minecraft/server-ui";
var PokeCalendarVersion = 1;
var PokeCustomEventId = `poke:customEvents`;
var PFEDefaultHolidays = [
  {
    name: { text: `New Years Day` },
    id: "poke-pfe:NewYear",
    dates: [{ month: 0, days: [1] }],
    repeat: true,
    gift: `give @s poke:red_present 8`,
    icon: "textures/poke/common/new_year",
    greeting: { translate: `translation.poke:timeNewYearGreet` },
    fixedTime: false,
    nonModifiable: true,
    v: PokeCalendarVersion
  },
  /*{
    name:{text:`Martin Luther King Jr. Day`},
    id:"poke-pfe:MLKJr",
    dates:[{month:0,days:[15,16,17,18,19,20,21],weekday:1}],//Monday between Jan 15 - 21
    repeat:true,
    gift: undefined,
    icon:"textures/poke/common/mlk",
    greeting:"generic",
    fixedTime:false,
    nonModifiable:true,
    v:PokeCalendarVersion
  },*/
  {
    name: { text: `Valentine's Day` },
    id: "poke-pfe:ValentinesDay",
    dates: [{ month: 1, days: [14] }],
    repeat: true,
    gift: `give @s poke:red_present 8`,
    icon: "textures/poke/common/valentine",
    greeting: "generic",
    fixedTime: false,
    nonModifiable: true,
    v: PokeCalendarVersion
  },
  {
    name: { text: `St. Patrick's Day` },
    id: "poke-pfe:StPatrickDay",
    dates: [{ month: 2, days: [17] }],
    repeat: true,
    gift: `give @s poke:red_present 8`,
    icon: "textures/poke/common/st_patrick",
    greeting: "generic",
    fixedTime: false,
    nonModifiable: true,
    v: PokeCalendarVersion
  },
  {
    name: { text: `April Fools` },
    id: "poke-pfe:AprilFools",
    dates: [{ month: 3, days: [1] }],
    repeat: true,
    gift: `give @s poke:splash_death_potion`,
    icon: "textures/poke/common/april_fools",
    greeting: "generic",
    fixedTime: false,
    nonModifiable: true,
    v: PokeCalendarVersion
  },
  /*{
    name:{text:`Cinco de Mayo`},
    id:"poke-pfe:CincoDeMayo",
    dates:[{month:4,days:[5]}],
    repeat:true,
    gift: undefined,
    icon:"textures/poke/common/cinco_de_mayo",
    greeting:"generic",
    fixedTime:false,
    nonModifiable:true,
    v:PokeCalendarVersion
  },*/
  /*{
    name:{text:`Memorial Day`},
    id:"poke-pfe:MemorialDay",
    dates:[{month:4,days:[25,26,27,28,29,30,31],weekday:1}],
    repeat:true,
    gift: undefined,
    icon:"textures/poke/common/cinco_de_mayo",
    greeting:"generic",
    fixedTime:false,
    nonModifiable:true,
    v:PokeCalendarVersion
  },*/
  /*{
    name:{text:`Juneteenth`},
    id:"poke-pfe:Juneteenth",
    dates:[{month:5,days:[19]}],
    repeat:true,
    gift: undefined,
    icon:"textures/poke/common/juneteenth",
    greeting:"generic",
    fixedTime:false,
    nonModifiable:true,
    v:PokeCalendarVersion
  },*/
  {
    name: { text: `Independence Day` },
    id: "poke-pfe:IndependenceDay",
    dates: [{ month: 6, days: [4] }],
    repeat: true,
    gift: `structure load poke:4JulyGift ~~~`,
    icon: "textures/poke/common/july_4th",
    greeting: "generic",
    fixedTime: false,
    nonModifiable: true,
    v: PokeCalendarVersion
  },
  /*{
    name:{text:`Labor Day`},
    id:"poke-pfe:LaborDay",
    dates:[{month:8,days:[1,2,3,4,5,6,7],weekday:1}],//First Monday of September
    repeat:true,
    gift: undefined,
    icon:"textures/poke/common/labor_day",
    greeting:"generic",
    fixedTime:false,
    nonModifiable:true,
    v:PokeCalendarVersion
  },*/
  {
    name: { text: `Halloween` },
    id: "poke-pfe:Halloween",
    dates: [{ month: 9, days: [31] }],
    repeat: true,
    gift: `give @s poke:charred_poppy 16`,
    icon: "textures/poke/common/halloween",
    greeting: { translate: `translation.poke:timeHalloweenGreet` },
    fixedTime: false,
    nonModifiable: true,
    v: PokeCalendarVersion
  },
  {
    name: { text: `Thanksgiving` },
    id: "poke-pfe:thanksgiving",
    dates: [{ month: 10, days: [23, 24, 25, 26, 27, 28], weekday: 4 }],
    //This will only trigger on Thursday even though other days are listed
    repeat: true,
    gift: `give @s poke:red_present 8`,
    icon: "textures/poke/common/thanksgiving",
    greeting: "generic",
    fixedTime: false,
    nonModifiable: true,
    v: PokeCalendarVersion
  },
  {
    name: { text: `Easter` },
    id: "just:Easter",
    dates: [{ month: 11, days: [24, 25] }],
    repeat: true,
    gift: `give @s poke:red_present 16`,
    icon: "textures/poke/common/xmas",
    greeting: { translate: `translation.poke:timeHolidayGreet` },
    fixedTime: false,
    nonModifiable: true,
    v: PokeCalendarVersion
  }
];
function PokeTimeCheck(event, player, claimCheck) {
  if (event == null || event.dates == void 0) {
    PokeErrorScreen(player, void 0, world4.setDynamicProperty(PokeCustomEventId, JSON.stringify([])));
    return;
  }
  let currentTime = new Date(Date.now() + PokeTimeZoneOffset(player));
  if (event.fixedTime === true)
    currentTime = new Date(Date.now());
  for (let i = event.dates.length; i > -1; i--) {
    let date = event.dates.at(i);
    if (!date)
      continue;
    if (!date.days?.includes(currentTime.getUTCDate()))
      continue;
    if (!(date.month == currentTime.getUTCMonth()))
      continue;
    if (date.weekday) {
      if (date.weekday == currentTime.getDay())
        continue;
    }
    if (date.timeStart) {
      if (!(date.timeStart.hour <= currentTime.getUTCHours() && (date.timeStart.minute == void 0 || date.timeStart.minute <= currentTime.getUTCMinutes())))
        continue;
    }
    if (date.timeEnd) {
      if (!(date.timeEnd.hour >= currentTime.getUTCHours() && (date.timeEnd.minute == void 0 || date.timeEnd.minute >= currentTime.getUTCMinutes())))
        continue;
    }
    if (event.repeat === false && !date.years?.includes(currentTime.getUTCFullYear()))
      continue;
    if (claimCheck) {
      if (!event.gift)
        continue;
      if (player.hasTag(`poke:${currentTime.getFullYear()}E-${event.id}`))
        continue;
    }
    return true;
  }
  return false;
}
function PokeTimeDebug(player) {
  let UI = new ActionFormData4();
  UI.button(`Delete Custom Events`);
  UI.button(`Create 10 Events`);
  UI.button(`Reset Birthday`);
  UI.button(`Add 10 Fake Birthdays`);
  UI.show(player).then((response) => {
    if (response.canceled) {
      PokeTimeConfigUIMainMenu(player);
      return;
    }
    let selection = 0;
    if (response.selection == selection) {
      world4.setDynamicProperty(PokeCustomEventId, JSON.stringify([]));
      return;
    } else
      selection++;
    if (response.selection == selection) {
      let newEvents = [
        { id: `custom:1`, dates: [{ month: 0, days: [1, 2, 3, 4, 5] }, { month: 1, days: [6, 7, 8, 9, 10] }], greeting: "generic", name: { text: `Custom Event 1` }, icon: `textures/poke/common/event_default`, repeat: true, gift: void 0, fixedTime: false, v: PokeCalendarVersion },
        { id: `custom:2`, dates: [{ month: 0, days: [1, 2, 3, 4, 5] }, { month: 1, days: [6, 7, 8, 9, 10] }], greeting: "generic", name: { text: `Custom Event 2` }, icon: `textures/poke/common/event_default`, repeat: true, gift: void 0, fixedTime: false, v: PokeCalendarVersion },
        { id: `custom:3`, dates: [{ month: 0, days: [1, 2, 3, 4, 5] }, { month: 1, days: [6, 7, 8, 9, 10] }], greeting: "generic", name: { text: `Custom Event 3` }, icon: `textures/poke/common/event_default`, repeat: true, gift: void 0, fixedTime: false, v: PokeCalendarVersion },
        { id: `custom:4`, dates: [{ month: 0, days: [1, 2, 3, 4, 5] }, { month: 1, days: [6, 7, 8, 9, 10] }], greeting: "generic", name: { text: `Custom Event 4` }, icon: `textures/poke/common/event_default`, repeat: true, gift: void 0, fixedTime: false, v: PokeCalendarVersion },
        { id: `custom:5`, dates: [{ month: 0, days: [1, 2, 3, 4, 5] }, { month: 1, days: [6, 7, 8, 9, 10] }], greeting: "generic", name: { text: `Custom Event 5` }, icon: `textures/poke/common/event_default`, repeat: true, gift: void 0, fixedTime: false, v: PokeCalendarVersion },
        { id: `custom:6`, dates: [{ month: 0, days: [1, 2, 3, 4, 5] }, { month: 1, days: [6, 7, 8, 9, 10] }], greeting: "generic", name: { text: `Custom Event 6` }, icon: `textures/poke/common/event_default`, repeat: true, gift: void 0, fixedTime: false, v: PokeCalendarVersion },
        { id: `custom:7`, dates: [{ month: 0, days: [1, 2, 3, 4, 5] }, { month: 1, days: [6, 7, 8, 9, 10] }], greeting: "generic", name: { text: `Custom Event 7` }, icon: `textures/poke/common/event_default`, repeat: true, gift: void 0, fixedTime: false, v: PokeCalendarVersion },
        { id: `custom:8`, dates: [{ month: 0, days: [1, 2, 3, 4, 5] }, { month: 1, days: [6, 7, 8, 9, 10] }], greeting: "generic", name: { text: `Custom Event 8` }, icon: `textures/poke/common/event_default`, repeat: true, gift: void 0, fixedTime: false, v: PokeCalendarVersion },
        { id: `custom:9`, dates: [{ month: 0, days: [1, 2, 3, 4, 5] }, { month: 1, days: [6, 7, 8, 9, 10] }], greeting: "generic", name: { text: `Custom Event 9` }, icon: `textures/poke/common/event_default`, repeat: true, gift: void 0, fixedTime: false, v: PokeCalendarVersion },
        { id: `custom:10`, dates: [{ month: 0, days: [1, 2, 3, 4, 5] }, { month: 1, days: [6, 7, 8, 9, 10] }], greeting: "generic", name: { text: `Custom Event 10` }, icon: `textures/poke/common/event_default`, repeat: true, gift: void 0, fixedTime: false, v: PokeCalendarVersion }
      ];
      let customEvents = world4.getDynamicProperty(PokeCustomEventId);
      if (!customEvents) {
        world4.setDynamicProperty(PokeCustomEventId, JSON.stringify(newEvents));
        return;
      }
      customEvents = JSON.parse(customEvents).concat(newEvents);
      world4.setDynamicProperty(PokeCustomEventId, JSON.stringify(customEvents));
      return;
    } else
      selection++;
    if (response.selection == selection) {
      player.setDynamicProperty(`poke:birthday`, JSON.stringify({ day: 1, month: 0, id: player.id, announce: false, name: player.name, style: "normal", year: void 0 }));
      return;
    } else
      selection++;
    if (response.selection == selection) {
      let time = new Date(Date.now());
      let newBirthdays = [
        { id: `10`, day: time.getDate(), announce: true, month: time.getMonth(), style: "normal", name: `Custom 1` },
        { id: `2`, day: time.getDate(), announce: true, month: time.getMonth(), style: "dev", name: `Custom 2` },
        { id: `3`, day: time.getDate(), announce: false, month: time.getMonth(), style: "normal", name: `Custom 3` },
        { id: `4`, day: time.getDate(), announce: false, month: time.getMonth(), style: "dev", name: `Custom 4` },
        { id: `5`, day: time.getDate() + 1, announce: true, month: time.getMonth(), style: "normal", name: `Custom 5` },
        { id: `6`, day: time.getDate() + 1, announce: true, month: time.getMonth(), style: "dev", name: `Custom 6` },
        { id: `7`, day: time.getDate() + 1, announce: false, month: time.getMonth(), style: "normal", name: `Custom 7` },
        { id: `8`, day: time.getDate() + 1, announce: false, month: time.getMonth(), style: "dev", name: `Custom 8` },
        { id: `9`, day: time.getDate() - 1, announce: true, month: time.getMonth(), style: "normal", name: `Custom 9` },
        { id: `10`, day: time.getDate() - 1, announce: true, month: time.getMonth(), style: "dev", name: `Custom 10` }
      ];
      let birthdays = world4.getDynamicProperty(PokeCustomEventId);
      if (!birthdays) {
        world4.setDynamicProperty(PokeCustomEventId, JSON.stringify(newBirthdays));
        return;
      }
      birthdays = JSON.parse(birthdays).concat(newBirthdays);
      world4.setDynamicProperty(`poke:birthdays`, JSON.stringify(birthdays));
      return;
    } else
      selection++;
  });
}
function PokeTimeConfigUIMainMenu(player) {
  let currentTime = new Date(Date.now() + PokeTimeZoneOffset(player));
  let UI = new ActionFormData4().body({ translate: `translation.poke:timeUiMainMenuBody`, with: { rawtext: [PokeTimeGreeting(currentTime, player), { text: player.name }, { text: `${currentTime.toDateString()}, ${currentTime.toLocaleTimeString()}` }] } });
  if (player.hasTag(`debug`)) {
    UI.button(`Debug Menu`);
  }
  if (!player.getDynamicProperty(`poke:timezone`)) {
    UI.button({ translate: `translation.poke:timeSetTimezone` }, PokeTimeIcon(currentTime));
  }
  if (!player.getDynamicProperty(`poke:birthday`)) {
    UI.button({ translate: `translation.poke:timeSetBirthday` }, `textures/poke/common/birthday_cake`);
  }
  UI.button({ translate: `translation.poke:timeUpcomingEvents` }, `textures/poke/common/upcoming_events`);
  UI.button({ translate: `translation.poke:additionalOptions` }, `textures/poke/common/more_options`);
  let events = PokeTimeGetAllEvents();
  let gifts = [];
  for (let i = events.length - 1; i > -1; i--) {
    let event = events.at(i);
    if (!event)
      continue;
    if (PokeTimeCheck(event, player, true)) {
      UI.button({ translate: `translation.poke:claimGift`, with: { rawtext: [event.name] } }, `textures/poke/common/gift`);
      gifts = gifts.concat(event);
    }
  }
  UI.show(player).then((response) => {
    if (response.canceled) {
      return;
    }
    let selection = 0;
    if (player.hasTag(`debug`)) {
      if (response.selection == selection) {
        PokeTimeDebug(player);
        return;
      } else
        selection++;
    }
    if (!player.getDynamicProperty(`poke:timezone`)) {
      if (response.selection == selection) {
        PokeSetTimeZone(player);
        return;
      } else
        selection++;
    }
    if (!player.getDynamicProperty(`poke:birthday`)) {
      if (response.selection == selection) {
        PokeSetBirthday(player);
        return;
      } else
        selection++;
    }
    if (response.selection == selection) {
      PokeTimeUpcomingEventList(player, 0);
      return;
    } else
      selection++;
    if (response.selection == selection) {
      PokeTimeAdditionalOptions(player);
      return;
    } else
      selection++;
    for (let i = gifts.length - 1; i > -1; i--) {
      if (response.selection == selection) {
        let claimingGift = gifts.reverse().at(i)?.gift;
        if (!claimingGift) {
          console.warn(`No gift found`);
        }
        console.warn(`Claiming: ${claimingGift}`);
        player.runCommand(`${claimingGift}`);
        player.addTag(`poke:${currentTime.getFullYear()}E-${gifts.at(i)?.id}`);
        return;
      } else
        selection++;
    }
  });
}
function PokeSetBirthday(player) {
  let UI = new ModalFormData3();
  let currentBirthday = { day: 1, month: 0, id: player.id, announce: false, name: player.name, style: "normal", year: void 0 };
  if (player.getDynamicProperty(`poke:birthday`)) {
    UI.title({ translate: `translation.poke:timeChangeBirthday` });
    currentBirthday = JSON.parse(player.getDynamicProperty(`poke:birthday`).toString());
  } else {
    UI.title({ translate: `translation.poke:timeSetBirthday` });
  }
  UI.dropdown({ translate: `translation.poke:setBirthdayDay` }, [`1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12`, `13`, `14`, `15`, `16`, `17`, `18`, `19`, `20`, `21`, `22`, `23`, `24`, `25`, `26`, `27`, `28`, `29`, `30`, `31`], currentBirthday.day - 1);
  UI.dropdown({ translate: `translation.poke:setBirthdayMonth` }, [{ translate: `translation.poke:setBirthdayJan` }, { translate: `translation.poke:setBirthdayFeb` }, { translate: `translation.poke:setBirthdayMar` }, { translate: `translation.poke:setBirthdayApr` }, { translate: `translation.poke:setBirthdayMay` }, { translate: `translation.poke:setBirthdayJun` }, { translate: `translation.poke:setBirthdayJul` }, { translate: `translation.poke:setBirthdayAug` }, { translate: `translation.poke:setBirthdaySep` }, { translate: `translation.poke:setBirthdayOct` }, { translate: `translation.poke:setBirthdayNov` }, { translate: `translation.poke:setBirthdayDec` }], currentBirthday.month);
  UI.toggle({ translate: `translation.poke:setBirthdayGlobalMessage` }, currentBirthday.announce);
  UI.show(player).then((response) => {
    if (response.canceled) {
      if (player.getDynamicProperty(`poke:birthday`)) {
        PokeTimeAdditionalOptions(player);
      } else {
        PokeTimeConfigUIMainMenu(player);
      }
      return;
    }
    let newBirthday = {
      day: Number(response.formValues?.at(0)) + 1,
      month: Number(response.formValues?.at(1)),
      announce: Boolean(response.formValues?.at(2)),
      name: player.name,
      style: "normal",
      year: void 0,
      id: player.id
    };
    if (response.formValues?.at(2)) {
      let birthdays = JSON.parse(world4.getDynamicProperty(`poke:birthdays`).toString());
      for (let i = birthdays.length - 1; i > -1; i--) {
        let birthday = birthdays.at(i);
        if (birthday && (birthday.id == player.id || !birthday.id && birthday.name == player.name)) {
          birthday.day = Number(response.formValues?.at(0)) + 1;
          birthday.month = Number(response.formValues?.at(1));
          birthday.announce = Boolean(response.formValues?.at(2));
        }
        continue;
      }
      world4.setDynamicProperty(`poke:birthdays`, JSON.stringify(birthdays));
      player.setDynamicProperty(`poke:birthday`, JSON.stringify(newBirthday));
    } else {
      let birthdays = JSON.parse(world4.getDynamicProperty(`poke:birthdays`).toString());
      let replaceBirthday = PokeGetObjectById(birthdays, player.id);
      if (replaceBirthday) {
        birthdays = birthdays.slice(replaceBirthday.position, replaceBirthday.position);
        world4.setDynamicProperty(`poke:birthdays`, JSON.stringify(birthdays));
      }
      player.setDynamicProperty(`poke:birthday`, JSON.stringify(newBirthday));
    }
  });
}
function PokeTimeIcon(currentTime) {
  switch (currentTime.getHours()) {
    case 0: {
      return `textures/poke/common/12am`;
      break;
    }
    case 1: {
      return `textures/poke/common/1am`;
      break;
    }
    case 2: {
      return `textures/poke/common/2am`;
      break;
    }
    case 3: {
      return `textures/poke/common/3am`;
      break;
    }
    case 4: {
      return `textures/poke/common/4am`;
      break;
    }
    case 5: {
      return `textures/poke/common/5am`;
      break;
    }
    case 6: {
      return `textures/poke/common/6am`;
      break;
    }
    case 7: {
      return `textures/poke/common/7am`;
      break;
    }
    case 8: {
      return `textures/poke/common/8am`;
      break;
    }
    case 9: {
      return `textures/poke/common/9am`;
      break;
    }
    case 10: {
      return `textures/poke/common/10am`;
      break;
    }
    case 11: {
      return `textures/poke/common/11am`;
      break;
    }
    case 12: {
      return `textures/poke/common/12pm`;
      break;
    }
    case 13: {
      return `textures/poke/common/1pm`;
      break;
    }
    case 14: {
      return `textures/poke/common/2pm`;
      break;
    }
    case 15: {
      return `textures/poke/common/3pm`;
      break;
    }
    case 16: {
      return `textures/poke/common/4pm`;
      break;
    }
    case 17: {
      return `textures/poke/common/5pm`;
      break;
    }
    case 18: {
      return `textures/poke/common/6pm`;
      break;
    }
    case 19: {
      return `textures/poke/common/7pm`;
      break;
    }
    case 20: {
      return `textures/poke/common/8pm`;
      break;
    }
    case 21: {
      return `textures/poke/common/9pm`;
      break;
    }
    case 22: {
      return `textures/poke/common/10pm`;
      break;
    }
    case 23: {
      return `textures/poke/common/11pm`;
      break;
    }
  }
}
function PokeTimeZoneOffset(player) {
  let timezone = void 0;
  if (player?.getDynamicProperty(`poke:timezone`)) {
    timezone = Number(player.getDynamicProperty(`poke:timezone`));
    return timezone;
  }
  return 0;
}
function PokeSetTimeZone(player) {
  let Ui = new ActionFormData4();
  let Timezones = [
    {
      "name": "\xA7uUTC \xA7a+\xA7u14:00\xA7r:\nLINT",
      "offset": 504e5
    },
    {
      "name": "\xA7uUTC \xA7a+\xA7u13:45\xA7r:\nCHADT",
      "offset": 495e5
    },
    {
      "name": "\xA7uUTC \xA7a+\xA7u13:00\xA7r:\nNZDT/PHOT/TKT/TOT",
      "offset": 468e5
    },
    {
      "name": "\xA7uUTC \xA7a+\xA7u12:45\xA7r:\nCHAST",
      "offset": 459e5
    },
    {
      "name": "\xA7uUTC \xA7a+\xA7u12:00\xA7r:\nANAT/FJT/GILT/MAGT/MHT/NZST/PETT/TVT/WAKT",
      "offset": 432e5
    },
    {
      "name": "\xA7uUTC \xA7a+\xA7u11:00\xA7r:\nAEDT/BST/KOST/LHST/MIST/NCT/NFT/PONT/SKAT/SBT/SRET/VUT",
      "offset": 396e5
    },
    {
      "name": "\xA7uUTC \xA7a+\xA7u10:00\xA7r:\nACDT/LHST",
      "offset": 378e5
    },
    {
      "name": "\xA7uUTC \xA7a+\xA7u10:00\xA7r:\nAEST/CHST/CHUT/DDUT/PGT/VLAT",
      "offset": 36e6
    },
    {
      "name": "\xA7uUTC \xA7a+\xA7u09:30\xA7r:\nACST",
      "offset": 342e5
    },
    {
      "name": "\xA7uUTC \xA7a+\xA7u09:00\xA7r:\nCHOST/JST/KST/PWT/TLT/ULAST/WIT/YAKT",
      "offset": 324e5
    },
    {
      "name": "\xA7uUTC \xA7a+\xA7u08:45\xA7r:\nACWST",
      "offset": 315e5
    },
    {
      "name": "\xA7uUTC \xA7a+\xA7u08:00\xA7r:\nAWST/BNT/CHOT/CST/HKT/HOVST/IRKT/MYT/PHT/SGT/TST/ULAT/WITA/WST/ACT",
      "offset": 288e5
    },
    {
      "name": "\xA7uUTC \xA7a+\xA7u07:00\xA7r:\nTHA/WIB/CXT/DAVT/HOVT/ICT/KRAT/NOVT",
      "offset": 252e5
    },
    {
      "name": "\xA7uUTC \xA7a+\xA7u06:30\xA7r:\nCCT/MMT",
      "offset": 234e5
    },
    {
      "name": "\xA7uUTC \xA7a+\xA7u06:00\xA7r:\nBIOT/BST/BTT/IOT/KGT/OMST/VOST/ALMT",
      "offset": 216e5
    },
    {
      "name": "\xA7uUTC \xA7a+\xA7u05:45\xA7r:\nNPT",
      "offset": 207e5
    },
    {
      "name": "\xA7uUTC \xA7a+\xA7u05:30\xA7r:\nIST/SLST",
      "offset": 198e5
    },
    {
      "name": "\xA7uUTC \xA7a+\xA7u05:00\xA7r:\nAQTT/HMT/MAWT/MVT/ORAT/PKT/TFT/TJT/TMT/UZT/YEKT",
      "offset": 18e6
    },
    {
      "name": "\xA7uUTC \xA7a+\xA7u04:30\xA7r:\nAFT/IRDT",
      "offset": 162e5
    },
    {
      "name": "\xA7uUTC \xA7a+\xA7u04:00\xA7r:\nAMT/AZT/GET/GST/MUT/RET/SAMT/SCT",
      "offset": 144e5
    },
    {
      "name": "\xA7uUTC \xA7a+\xA7u03:30\xA7r:\nIRST",
      "offset": 126e5
    },
    {
      "name": "\xA7uUTC \xA7a+\xA7u03:00\xA7r:\nAST/EAT/EEST/FET/IDT/MSK/SYOT/TRT/VOLT",
      "offset": 108e5
    },
    {
      "name": "\xA7uUTC \xA7a+\xA7u02:00\xA7r:\nEET/CAT/SAST/CEST/HAEC/IST/KALT/MEST/WAST",
      "offset": 72e5
    },
    {
      "name": "\xA7uUTC \xA7a+\xA7u01:00\xA7r:\nCET/BST/DFT/IST/MET/WAT",
      "offset": 36e5
    },
    {
      "name": "\xA7uUTC \xA7a+\xA7u00:00\xA7r:\nGMT/UTC/AZOST/EGST/WET",
      "offset": 0
    },
    {
      "name": "\xA7uUTC \xA7c-\xA7u01:00\xA7r:\nAZOT/CVT/EGT",
      "offset": -36e5
    },
    {
      "name": "\xA7uUTC \xA7c-\xA7u02:00\xA7r:\nBRST/FNT/GST/PMDT/UYST/WGST",
      "offset": -72e5
    },
    {
      "name": "\xA7uUTC \xA7c-\xA7u02:30\xA7r:\nNDT",
      "offset": -9e6
    },
    {
      "name": "\xA7uUTC \xA7c-\xA7u03:00\xA7r:\nADT/AMST/ART/BRT/CLST/FKST/GFT/PMST/PYST/ROTT/SRT/UYT",
      "offset": -108e5
    },
    {
      "name": "\xA7uUTC \xA7c-\xA7u03:30\xA7r:\nNST",
      "offset": -126e5
    },
    {
      "name": "\xA7uUTC \xA7c-\xA7u04:00\xA7r:\nAMT/AST/EDT/BOT/CDT/COST/ECT/FKT/GYT/PYT/VET",
      "offset": -144e5
    },
    {
      "name": "\xA7uUTC \xA7c-\xA7u05:00\xA7r:\nEST/CDT/ACT/COT/CST/EASST/ECT/PET",
      "offset": -18e6
    },
    {
      "name": "\xA7uUTC \xA7c-\xA7u06:00\xA7r:\nCST/MDT/EAST/GALT",
      "offset": -216e5
    },
    {
      "name": "\xA7uUTC \xA7c-\xA7u07:00\xA7r:\nMST/PDT",
      "offset": -252e5
    },
    {
      "name": "\xA7uUTC \xA7c-\xA7u08:00\xA7r:\nPST/AKDT/CIST",
      "offset": -288e5
    },
    {
      "name": "\xA7uUTC \xA7c-\xA7u09:00\xA7r:\nAKST/GAMT/GIT/HDT",
      "offset": -324e5
    },
    {
      "name": "\xA7uUTC \xA7c-\xA7u09:30\xA7r:\nMART/MIT",
      "offset": -342e5
    },
    {
      "name": "\xA7uUTC \xA7c-\xA7u10:00\xA7r:\nHST/SDT/TAHT",
      "offset": -36e6
    },
    {
      "name": "\xA7uUTC \xA7c-\xA7u11:00\xA7r:\nNUT/SST",
      "offset": -396e5
    },
    {
      "name": "\xA7uUTC \xA7c-\xA7u12:00\xA7r:\nBIT/IDLW",
      "offset": -432e5
    }
  ];
  Timezones.forEach((timezone) => {
    Ui.button(timezone.name, PokeTimeIcon(new Date(Date.now() + timezone.offset)));
  });
  Ui.show(player).then((response) => {
    if (response.canceled) {
      return;
    }
    player.setDynamicProperty(`poke:timezone`, Timezones.at(Number(response.selection)).offset);
  });
}
function PokeTimeGreeting(date, player, event, generic) {
  if (!generic) {
    if (event) {
      if (!event.greeting || event.greeting == "generic") {
      } else
        return event.greeting;
    } else {
      let activeEventGreetings = [];
      let allEvents = PokeTimeGetAllEvents();
      for (let i = allEvents.length - 1; i > -1; i--) {
        let event2 = allEvents.at(i);
        if (!event2)
          continue;
        if (PokeTimeCheck(event2, player, false)) {
          if (event2.greeting && event2.greeting != "generic") {
            activeEventGreetings = activeEventGreetings.concat(event2.greeting);
          }
        }
      }
      if (activeEventGreetings.length > 0) {
        let returnGreeting = activeEventGreetings.at(Math.max(Math.round(Math.random() * activeEventGreetings.length) - 1, 0));
        if (returnGreeting)
          return returnGreeting;
      }
    }
  }
  let hour = date.getHours();
  let morningGreeting = { translate: `translation.poke:timeMorningGreet` };
  let noonGreeting = { translate: `translation.poke:timeNoonGreet` };
  let nightGreeting = { translate: `translation.poke:timeNightGreet` };
  switch (hour) {
    case 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11: {
      return morningGreeting;
      break;
    }
    case 12 | 13 | 14 | 15 | 16: {
      return noonGreeting;
      break;
    }
    case 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24: {
      return nightGreeting;
      break;
    }
  }
  return morningGreeting;
}
function PokeTimeEventInfoMenu(event, player) {
  let timeLeft = ``;
  let UI = new ActionFormData4();
  let giftString = { translate: `translation.poke:timeEventGift` };
  if (!event.gift) {
    giftString = { text: `` };
  }
  UI.body(
    { rawtext: [{ translate: `translation.poke:timeEventName` }, event.name, { text: `

` }, { translate: `translation.poke:timeEventDates` }].concat(PokeTimeDateString(event).concat([{ text: `
` }, giftString])) }
  );
  if (!event.nonModifiable && (player.getGameMode() == GameMode2.creative || player.hasTag(`poke-event_manager`))) {
    UI.button({ translate: `translation.poke:timeEditEvent` }, `textures/poke/common/edit`);
  }
  UI.button({ translate: `translation.poke:goBack` }, `textures/poke/common/left_arrow`);
  UI.show(player).then((response) => {
    let selection = 0;
    if (!event.nonModifiable && (player.getGameMode() == GameMode2.creative || player.hasTag(`poke-event_manager`))) {
      if (response.selection == selection) {
        PokeEventOptions(player, event);
        return;
      } else
        selection++;
    }
    if (response.canceled || response.selection == selection) {
      PokeTimeUpcomingEventList(player, 0);
      return;
    }
  });
}
function PokeTimeUpcomingEventList(player, page) {
  let UI = new ActionFormData4();
  let events = PokeTimeGetAllEvents();
  let maxPerPage = 10;
  let startPage = page * maxPerPage;
  let buttonCount = 0;
  let totalEvents = events.length;
  for (let i = startPage + maxPerPage - 1; i > startPage - 1; i--) {
    if (buttonCount + 1 > maxPerPage || i < startPage) {
      break;
    }
    if (events.at(i)) {
      let event = events.at(i);
      UI.button(event.name, event?.icon);
      buttonCount += 1;
    } else {
      continue;
    }
  }
  let nextPage = false;
  if (totalEvents > startPage + maxPerPage) {
    UI.button({ translate: `translation.poke:timeNextPage` }, `textures/poke/common/right_arrow`);
    nextPage = true;
  }
  let prevPage = false;
  if (page > 0) {
    UI.button({ translate: `translation.poke:timePrevPage` }, `textures/poke/common/left_arrow`);
    prevPage = true;
  } else
    UI.button({ translate: "translation.poke:goBack" }, `textures/poke/common/left_arrow`);
  UI.show(player).then((response) => {
    let selection = 0;
    for (let i = buttonCount - 1; i > -1; i--) {
      if (events.at(i)) {
        if (response.selection == selection) {
          PokeTimeEventInfoMenu(events.at(i + startPage), player);
          return;
        } else
          selection++;
      }
    }
    if (nextPage) {
      if (response.selection == selection) {
        PokeTimeUpcomingEventList(player, page + 1);
        return;
      } else
        selection++;
    }
    if (prevPage) {
      if (response.selection == selection) {
        PokeTimeUpcomingEventList(player, page - 1);
        return;
      } else
        selection++;
    }
    if (response.canceled || response.selection == selection) {
      PokeTimeConfigUIMainMenu(player);
      return;
    }
  });
}
function PokeTimeAdditionalOptions(player) {
  let currentTime = new Date(Date.now() + PokeTimeZoneOffset(player));
  let UI = new ActionFormData4();
  if (player.getDynamicProperty(`poke:timezone`)) {
    UI.button({ translate: `translation.poke:timeChangeTimezone` }, PokeTimeIcon(currentTime));
  }
  if (player.getDynamicProperty(`poke:birthday`)) {
    UI.button({ translate: `translation.poke:timeChangeBirthday` }, `textures/poke/common/birthday_cake`);
  }
  if (player.getGameMode() == GameMode2.creative || player.hasTag(`poke-event_manager`)) {
    UI.button({ translate: `translation.poke:timeCreateEvent` }, `textures/poke/common/create_event`);
  }
  UI.button({ translate: "translation.poke:goBack" }, `textures/poke/common/left_arrow`);
  UI.show(player).then((response) => {
    let selection = 0;
    if (player.getDynamicProperty(`poke:timezone`)) {
      if (response.selection == selection) {
        PokeSetTimeZone(player);
        return;
      } else
        selection++;
    }
    if (player.getDynamicProperty(`poke:birthday`)) {
      if (response.selection == selection) {
        PokeSetBirthday(player);
        return;
      } else
        selection++;
    }
    if (player.getGameMode() == GameMode2.creative || player.hasTag(`poke-event_manager`)) {
      if (response.selection == selection) {
        PokeTimeCreateEvent(player);
        return;
      } else
        selection++;
    }
    if (response.canceled || response.selection == selection) {
      PokeTimeConfigUIMainMenu(player);
      return;
    }
  });
}
function PokeTimeGetAllEvents() {
  return PFEDefaultHolidays.concat(JSON.parse(world4.getDynamicProperty(PokeCustomEventId).toString()));
}
function PokeTimeDateString(event, player) {
  let returnString = [];
  let monthStrings = [
    { translate: `translation.poke:setBirthdayJan` },
    { translate: `translation.poke:setBirthdayFeb` },
    { translate: `translation.poke:setBirthdayMar` },
    { translate: `translation.poke:setBirthdayApr` },
    { translate: `translation.poke:setBirthdayMay` },
    { translate: `translation.poke:setBirthdayJun` },
    { translate: `translation.poke:setBirthdayJul` },
    { translate: `translation.poke:setBirthdayAug` },
    { translate: `translation.poke:setBirthdaySep` },
    { translate: `translation.poke:setBirthdayOct` },
    { translate: `translation.poke:setBirthdayNov` },
    { translate: `translation.poke:setBirthdayDec` }
  ];
  for (let i = event.dates.length - 1; i > -1; i--) {
    let date = event.dates.at(i);
    returnString = returnString.concat([{ text: ` - ` }, monthStrings.at(date.month), { text: ` ${JSON.stringify(date?.days).replace(`[`, ``).replace(`]`, ``).replace(/,/g, ", ")}` }, { text: `
` }]);
  }
  return returnString;
}
function PokeTimeCreateEvent(player, event) {
  let UI = new ModalFormData3();
  let eventName = ``;
  let providedEvent = false;
  if (!event) {
    event = {
      id: ``,
      name: { text: `` },
      dates: [{ month: 0, days: [1] }],
      repeat: true,
      icon: `textures/poke/common/event_default`,
      fixedTime: false,
      gift: void 0,
      greeting: "generic",
      v: PokeCalendarVersion
    };
    UI.title({ translate: `translation.poke:timeCreateEventTitle` });
  } else {
    providedEvent = true;
    UI.title({ translate: `translation.poke:timeEditEventTitle` });
    if (event.name.text) {
      eventName = event.name.text;
    } else {
      eventName = `%${event.name.translate}`;
    }
  }
  UI.textField({ translate: `translation.poke:timeEventId`, with: [``] }, ``, event.id);
  UI.textField({ translate: `translation.poke:timeEventName`, with: [``] }, ``, eventName);
  UI.dropdown({ translate: `translation.poke:setBirthdayDay` }, [`1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12`, `13`, `14`, `15`, `16`, `17`, `18`, `19`, `20`, `21`, `22`, `23`, `24`, `25`, `26`, `27`, `28`, `29`, `30`, `31`], Number(event.dates.at(0)?.days?.at(0)) - 1);
  UI.dropdown({ translate: `translation.poke:setBirthdayMonth` }, [{ translate: `translation.poke:setBirthdayJan` }, { translate: `translation.poke:setBirthdayFeb` }, { translate: `translation.poke:setBirthdayMar` }, { translate: `translation.poke:setBirthdayApr` }, { translate: `translation.poke:setBirthdayMay` }, { translate: `translation.poke:setBirthdayJun` }, { translate: `translation.poke:setBirthdayJul` }, { translate: `translation.poke:setBirthdayAug` }, { translate: `translation.poke:setBirthdaySep` }, { translate: `translation.poke:setBirthdayOct` }, { translate: `translation.poke:setBirthdayNov` }, { translate: `translation.poke:setBirthdayDec` }], event.dates.at(0)?.month);
  UI.toggle({ translate: `translation.poke:timeLoopEvent` }, event.repeat);
  UI.show(player).then((response) => {
    if (response.canceled && event.id == ``) {
      PokeTimeAdditionalOptions(player);
      return;
    } else if (response.canceled) {
      PokeTimeEventInfoMenu(event, player);
      return;
    } else {
      if (!providedEvent) {
        let id = response.formValues?.at(0)?.toString().replace(`custom:`, "").replace(" ", "");
        let name = { text: response.formValues?.at(1)?.toString() };
        if (response.formValues?.at(0)?.toString().startsWith(`%`)) {
          name = { translate: response.formValues.at(1)?.toString().substring(1) };
        }
        let newEventList = world4.getDynamicProperty(PokeCustomEventId);
        let replaceEvent = void 0;
        if (typeof newEventList == "string") {
          newEventList = JSON.parse(newEventList);
          replaceEvent = PokeGetObjectById(newEventList, `custom:${id}`);
        } else {
          newEventList = [{ id: `placeholder`, dates: [{ month: 0, days: [0] }], greeting: "generic", name: { text: `placeholder` }, icon: void 0, v: PokeCalendarVersion }];
        }
        if (!newEventList || typeof newEventList == "string") {
          return;
        }
        if (world4.getDynamicProperty(PokeCustomEventId) != void 0 || world4.getDynamicProperty(PokeCustomEventId) != `[]`) {
        }
        let event2 = replaceEvent?.value;
        if (replaceEvent) {
          let newEvent = {
            id: event2.id,
            name,
            dates: event2.dates,
            fixedTime: event2.fixedTime,
            gift: event2.gift,
            icon: event2.icon,
            repeat: event2.repeat,
            greeting: event2.greeting,
            v: PokeCalendarVersion
          };
          let otherEvents = newEventList.splice(replaceEvent.value, 1, newEvent);
          newEventList = otherEvents;
        } else {
          event2 = {
            id: `custom:${id}`,
            name,
            dates: [{
              days: [Number(response.formValues?.at(2)?.valueOf()) + 1],
              month: Number(response.formValues?.at(3)?.valueOf())
            }],
            gift: void 0,
            icon: `textures/poke/common/event_default`,
            repeat: Boolean(response.formValues?.at(4)),
            greeting: "generic",
            fixedTime: false,
            v: PokeCalendarVersion
          };
          newEventList = newEventList.concat([event2]);
        }
        if (newEventList?.at(0))
          world4.setDynamicProperty(PokeCustomEventId, JSON.stringify(newEventList));
      } else {
        let id = response.formValues?.at(0)?.toString().replace(`custom:`, "").replace(" ", "");
        if (!id) {
          id = event.id;
        } else {
          id = `custom:${id}`;
        }
        let name = { text: response.formValues?.at(1)?.toString() };
        if (response.formValues?.at(0)?.toString().startsWith(`%`)) {
          name = { translate: response.formValues.at(1)?.toString().substring(1) };
        }
        let newEvent = {
          id,
          name,
          dates: event.dates,
          fixedTime: event.fixedTime,
          gift: event.gift,
          icon: event.icon,
          repeat: event.repeat,
          greeting: event.greeting,
          v: PokeCalendarVersion
        };
        let customEvents = world4.getDynamicProperty(PokeCustomEventId)?.toString().replace(JSON.stringify(event), JSON.stringify(newEvent));
        world4.setDynamicProperty(PokeCustomEventId, customEvents);
      }
      PokeEventOptions(player, event);
      return;
    }
  });
}
function PokeEventOptions(player, event) {
  let UI = new ActionFormData4();
  UI.title({ translate: `translation.poke:timeEventOptionsTitle` });
  if (event.gift) {
    UI.button({ translate: `translation.poke:timeEditEventGift` }, "textures/poke/common/edit_gift");
  } else {
    UI.button({ translate: `translation.poke:timeAddEventGift` }, "textures/poke/common/add_gift");
  }
  if (event.greeting) {
    UI.button({ translate: `translation.poke:timeEditGreeting` }, "textures/poke/common/edit_greeting");
  } else {
    UI.button({ translate: `translation.poke:timeAddGreeting` }, "textures/poke/common/add_greeting");
  }
  UI.button({ translate: `translation.poke:timeEventOptionsEditTime` }, `textures/poke/common/edit`);
  UI.button({ translate: `translation.poke:timeDeleteEvent` }, `textures/poke/common/trash`);
  UI.button({ translate: `translation.poke:goBack` }, `textures/poke/common/left_arrow`);
  UI.show(player).then((response) => {
    let selection = 0;
    if (response.selection == selection) {
      PokeTimeEditGift(player, event);
      return;
    } else
      selection++;
    if (response.selection == selection) {
      PokeTimeEditGreeting(player, event);
      return;
    } else
      selection++;
    if (response.selection == selection) {
      PokeTimeCreateEvent(player, event);
      return;
    } else
      selection++;
    if (response.selection == selection) {
      PokeTimeDeleteEvent(player, event);
      return;
    } else
      selection++;
    if (response.canceled || response.selection == selection) {
      PokeTimeUpcomingEventList(player, 0);
      return;
    }
  });
}
function PokeTimeEditGift(player, event) {
  let UI = new ModalFormData3();
  UI.title({ translate: `translation.poke:timeEditGiftTitle` });
  let currentGift = event.gift;
  if (!currentGift)
    currentGift = ``;
  UI.textField({ translate: `translation.poke:timeEditGiftTextFieldLabel` }, ``, currentGift);
  UI.show(player).then((response) => {
    if (response.canceled) {
      PokeEventOptions(player, event);
      return;
    }
    let textField = response.formValues?.at(0);
    let newGift = textField;
    if (!textField || textField == `/` || textField == ` ` || textField == `` || typeof newGift != "string") {
      newGift = void 0;
    }
    if (newGift?.startsWith(`/`)) {
      newGift = newGift.substring(1);
      console.warn(newGift);
    }
    let newEvent = {
      id: event.id,
      name: event.name,
      dates: event.dates,
      fixedTime: event.fixedTime,
      gift: newGift,
      icon: event.icon,
      repeat: event.repeat,
      greeting: event.greeting,
      nonModifiable: event.nonModifiable,
      v: PokeCalendarVersion
    };
    let customEvents = world4.getDynamicProperty(PokeCustomEventId)?.toString().replace(JSON.stringify(event), JSON.stringify(newEvent));
    world4.setDynamicProperty(PokeCustomEventId, customEvents);
    PokeEventOptions(player, newEvent);
  });
}
function PokeTimeEditGreeting(player, event) {
  let UI = new ModalFormData3();
  UI.title({ translate: `translation.poke:timeEditGreetingTitle` });
  let greeting = `generic`;
  if (typeof event.greeting != "string" && typeof event.greeting != "undefined") {
    if (event.greeting.text) {
      greeting = event.greeting.text;
    } else {
      greeting = `%${event.greeting.translate}`;
    }
  }
  UI.textField({ translate: `translation.poke:timeEditGreetingTextFieldLabel` }, ``, greeting);
  UI.show(player).then((response) => {
    if (response.canceled) {
      PokeEventOptions(player, event);
      return;
    }
    let newGreeting = response.formValues?.at(0);
    if (typeof newGreeting != "string" || newGreeting == "" || newGreeting == " " || newGreeting == "generic") {
      newGreeting = "generic";
    } else if (newGreeting.startsWith(`%`)) {
      newGreeting = { translate: newGreeting.replace(`%`, ``) };
    } else {
      newGreeting = { text: newGreeting };
    }
    let newEvent = {
      id: event.id,
      name: event.name,
      dates: event.dates,
      fixedTime: event.fixedTime,
      gift: event.gift,
      icon: event.icon,
      repeat: event.repeat,
      //@ts-ignore // String will only be "generic" otherwise its RawMessage
      greeting: newGreeting,
      nonModifiable: event.nonModifiable,
      v: PokeCalendarVersion
    };
    let customEvents = world4.getDynamicProperty(PokeCustomEventId)?.toString().replace(JSON.stringify(event), JSON.stringify(newEvent));
    world4.setDynamicProperty(PokeCustomEventId, customEvents);
    PokeEventOptions(player, newEvent);
    return;
  });
}
function PokeTimeDeleteEvent(player, event) {
  let UI = new ModalFormData3();
  UI.title({ translate: `translation.poke:timeDeleteEventTitle`, with: [event.id] });
  UI.textField({ translate: `translation.poke:timeDeleteEventConfirmField` }, ``);
  UI.show(player).then((response) => {
    if (response.canceled) {
      PokeEventOptions(player, event);
      return;
    } else {
      if (response.formValues?.at(0)?.toString().toLowerCase() != event.id.toLowerCase()) {
        PokeErrorScreen(player, { translate: `translation.poke:timeErrorIncorrectDeleteId` }, PokeEventOptions(player, event));
        return;
      }
      let customEvents = JSON.parse(world4.getDynamicProperty(PokeCustomEventId));
      let replacedEvent = PokeGetObjectById(customEvents, event.id);
      if (!replacedEvent) {
        return;
      }
      let newEvents = JSON.stringify(customEvents);
      newEvents = newEvents.replace(JSON.stringify(replacedEvent.value), ``).replace(`,,`, `,`).replace(`,]`, `]`).replace(`[,`, `[`);
      world4.setDynamicProperty(PokeCustomEventId, newEvents);
    }
  });
}

// scripts/boltbow.ts
import { EntityComponentTypes as EntityComponentTypes3, EquipmentSlot as EquipmentSlot3, GameMode as GameMode3, ItemComponentTypes as ItemComponentTypes3 } from "@minecraft/server";
import { ActionFormData as ActionFormData5 } from "@minecraft/server-ui";
var PFEAmmoProperty = `poke:ammo`;
var PFEAmmoStorageVersion = 2;
var PFEAmmoStorageDefault = [
  {
    v: PFEAmmoStorageVersion,
    max: 32,
    amount: 16,
    entityId: MinecraftEntityTypes.Arrow,
    id: MinecraftItemTypes.Arrow,
    upgrades: [
      {
        id: "pfe:capacity",
        level: 1,
        maxLevel: void 0
      },
      {
        id: "pfe:flaming",
        level: 0,
        maxLevel: 1
      }
    ]
  }
];
var PFEBoltBowsComponent = class {
  onUse(data) {
    if (data.itemStack == void 0)
      return;
    if (data.source.isSneaking) {
      PFEAmmoManagementMainMenuUI(data.itemStack, data.source);
      return;
    } else if (typeof data.itemStack.getDynamicProperty(PFEAmmoProperty) != "string") {
      PokeSaveProperty(PFEAmmoProperty, data.itemStack, JSON.stringify(PFEAmmoStorageDefault), data.source);
    }
    let ammoComponent = JSON.parse(data.itemStack.getDynamicProperty(PFEAmmoProperty).toString()).at(0);
    const cPlayers = data.source.dimension.getPlayers({ excludeNames: ["" + data.source.name] });
    for (var i = cPlayers.length; i > 0; i--) {
      data.source.playAnimation("animation.poke_pfe.humanoid.boltbow_hold_3p", { blendOutTime: 0.5, stopExpression: `!q.is_item_name_any('slot.weapon.mainhand','${data.itemStack.typeId}')`, players: [cPlayers[i - 1].name] });
    }
    const cooldownComponent = data.itemStack.getComponent(ItemComponentTypes3.Cooldown);
    if (cooldownComponent) {
      const ticks = cooldownComponent.cooldownTicks;
      if (cooldownComponent.getCooldownTicksRemaining(data.source) != ticks - 1)
        return;
    }
    let delay = 1;
    if (ammoComponent.amount >= 1) {
      data.source.playAnimation(`animation.poke_pfe.boltbow.use`);
      let equippableComponent = data.source.getComponent(EntityComponentTypes3.Equippable);
      if (equippableComponent.getEquipmentSlot(EquipmentSlot3.Mainhand).getItem()?.typeId != data.itemStack?.typeId || equippableComponent.getEquipmentSlot(EquipmentSlot3.Mainhand).getDynamicProperty(PFEAmmoProperty) != JSON.stringify([ammoComponent]))
        return;
      PokeShoot(data.source, ammoComponent, data.itemStack, delay);
      data.source.setDynamicProperty(`poke:isUsingItem`, true);
    } else {
      data.source.dimension.playSound(`poke.boltbow.noAmmo`, data.source.location);
    }
    return;
    return;
  }
};
function PokeShoot(player, ammoComponent, item, delay) {
  if (!item)
    return;
  if (player.getGameMode() != GameMode3.creative) {
    ammoComponent.amount = ammoComponent.amount - 1;
  }
  item.setDynamicProperty(PFEAmmoProperty, JSON.stringify([ammoComponent]));
  const headLocate = player.getHeadLocation();
  const angle = player.getViewDirection();
  const projEntity = player.dimension.spawnEntity(ammoComponent.entityId, { x: headLocate.x + angle.x * 2, y: headLocate.y - 0.25 + angle.y * 2, z: headLocate.z + angle.z * 2 });
  const projComp = projEntity.getComponent(EntityComponentTypes3.Projectile);
  if (ammoComponent.amount > 3) {
    player.playSound(`random.bow`);
  } else if (ammoComponent.amount == 3) {
    player.playSound(`random.bow`, { pitch: 1.05 });
  } else if (ammoComponent.amount == 2) {
    player.playSound(`random.bow`, { pitch: 1.15 });
  } else if (ammoComponent.amount == 1) {
    player.playSound(`random.bow`, { pitch: 1.25 });
  }
  projComp.catchFireOnHurt = PokeGetObjectById(ammoComponent.upgrades, `pfe:flaming`)?.value.level > 0;
  projComp.owner = player;
  projComp.shoot(angle, { uncertainty: 1e-3 });
  if (PokeDamageItemUB(item, void 0, player, EquipmentSlot3.Mainhand)?.broke) {
    player.runCommand(`give @s ${ammoComponent.id} ${ammoComponent.amount} 0`);
  }
}
function PFEAmmoManagementMainMenuUI(item, player) {
  let UI = new ActionFormData5();
  UI.title({ translate: `translation.poke:ammoUIMainMenuTitle`, with: { rawtext: [{ translate: `poke_pfe.${item.typeId.substring(5)}` }] } });
  if (typeof item.getDynamicProperty(PFEAmmoProperty) != "string") {
    PokeSaveProperty(PFEAmmoProperty, item, JSON.stringify(PFEAmmoStorageDefault), player);
  }
  let ammoComponent = JSON.parse(item.getDynamicProperty(PFEAmmoProperty).toString()).at(0);
  UI.button({ translate: `translation.poke:ammoUIQuickReload`, with: { rawtext: [{ text: `${ammoComponent.amount}` }, { text: `${ammoComponent.max}` }] } }, `textures/poke/common/ammoQuickReload`);
  UI.button({ translate: `translation.poke:ammoUIAddAmmo` }, `textures/poke/common/ammoReload`);
  UI.button({ translate: `translation.poke:ammoUIUpgrade` }, `textures/poke/common/upgrade`);
  UI.button({ translate: `translation.poke:bossEventClose` }, `textures/poke/common/close`);
  UI.show(player).then((response) => {
    let selection = 0;
    if (response.selection == selection) {
      PFEQuickReload(ammoComponent, item, player);
      return;
    } else
      selection++;
    if (response.selection == selection) {
      PFEAmmoManagementAddAmmoUI(item, player);
      return;
    } else
      selection++;
    if (response.selection == selection) {
      PFEAmmoUpgrade(player, item);
      return;
    } else
      selection++;
    if (response.canceled || selection) {
      return;
    }
  });
}
function PFEAmmoManagementAddAmmoUI(item, player) {
  let UI = new ActionFormData5();
  let allowedAmmo = [`minecraft:arrow`, `poke:galaxy_arrow`, `poke:holy_arrow`, `poke:hellish_arrow`, `poke:void_arrow`, `poke:volt_arrow`];
  UI.title({ translate: `translation.poke:ammoUIMainMenuTitle` });
  let ammoComponent = JSON.parse(item.getDynamicProperty(PFEAmmoProperty).toString()).at(0);
  let buttonTotal = 0;
  let allItems = [];
  for (let i = allowedAmmo.length - 1; i > -1; i--) {
    let items = PokeGetItemFromInventory(player, void 0, allowedAmmo.at(i));
    if (!items) {
      continue;
    }
    allItems = allItems.concat(items);
    for (let i2 = items.length; i2 > -1; i2--) {
      let foundItem = items.at(i2);
      if (!foundItem)
        continue;
      if (foundItem.typeId == MinecraftItemTypes.Arrow) {
        UI.button({ rawtext: [{ translate: `item.arrow.name` }, { text: ` x${foundItem.amount}` }] }, PFEArrowIcon(foundItem.typeId));
      } else {
        UI.button({ rawtext: [{ translate: `item.${foundItem.typeId}` }, { text: ` x${foundItem.amount}` }] }, PFEArrowIcon(foundItem.typeId));
      }
      buttonTotal = buttonTotal + 1;
    }
  }
  UI.button({ translate: `translation.poke:bossEventClose` }, `textures/poke/common/close`);
  UI.show(player).then((response) => {
    let selection = 0;
    if (response.canceled || response.selection == selection + buttonTotal) {
      return;
    }
    for (buttonTotal - 1; buttonTotal > -1; buttonTotal--) {
      if (response.selection == selection) {
        let selectedItem = allItems.reverse().at(buttonTotal - 1);
        if (!selectedItem) {
          PokeErrorScreen(player, void 0, PFEAmmoManagementAddAmmoUI(item, player));
          return;
        }
        if (ammoComponent.id != selectedItem.typeId) {
          let newProperty = [{
            v: PFEAmmoStorageVersion,
            amount: selectedItem.amount,
            max: ammoComponent.max,
            entityId: selectedItem.typeId,
            id: selectedItem.typeId,
            upgrades: ammoComponent.upgrades
          }];
          if (!PokeSaveProperty(PFEAmmoProperty, item, JSON.stringify(newProperty), player)) {
            PokeErrorScreen(player, { text: `Unable to save new ammo type` }, PFEAmmoManagementAddAmmoUI(item, player));
            return;
          }
          player.runCommand(`give @s ${ammoComponent.id} ${ammoComponent.amount}`);
          player.runCommand(`clear @s ${selectedItem.typeId} -1 ${selectedItem.amount}`);
        } else {
          if (!ammoComponent.max) {
            let newProperty2 = [{
              v: PFEAmmoStorageVersion,
              amount: ammoComponent.amount + selectedItem.amount,
              max: ammoComponent.max,
              entityId: ammoComponent.entityId,
              id: ammoComponent.id,
              upgrades: ammoComponent.upgrades
            }];
            if (!PokeSaveProperty(PFEAmmoProperty, item, JSON.stringify(newProperty2), player)) {
              PokeErrorScreen(player, { text: `Unable to save new ammo amount` }, PFEAmmoManagementAddAmmoUI(item, player));
              return;
            }
            player.runCommand(`clear @s ${selectedItem.typeId} -1 ${selectedItem.amount}`);
            return;
          }
          let maxRemaining = ammoComponent.max - ammoComponent.amount;
          let takeAmount = selectedItem.amount;
          if (maxRemaining < selectedItem.amount) {
            takeAmount = maxRemaining;
          }
          let newProperty = [{
            v: PFEAmmoStorageVersion,
            amount: ammoComponent.amount + takeAmount,
            max: ammoComponent.max,
            entityId: ammoComponent.entityId,
            id: ammoComponent.id,
            upgrades: ammoComponent.upgrades
          }];
          if (!PokeSaveProperty(PFEAmmoProperty, item, JSON.stringify(newProperty), player)) {
            PokeErrorScreen(player, { text: `Unable to save new ammo amount` }, PFEAmmoManagementAddAmmoUI(item, player));
            return;
          }
          player.runCommand(`clear @s ${selectedItem.typeId} -1 ${takeAmount}`);
        }
        return;
      } else
        selection++;
    }
  });
}
function PFEArrowIcon(itemId) {
  switch (itemId) {
    case MinecraftItemTypes.Arrow: {
      return `textures/items/arrow`;
      break;
    }
    case `poke:galaxy_arrow`: {
      return `textures/poke/pfe/galaxy_arrow_item`;
      break;
    }
    case `poke:void_arrow`: {
      return `textures/poke/pfe/void_arrow_item`;
      break;
    }
    case `poke:hellish_arrow`: {
      return `textures/poke/pfe/hellish_arrow_item`;
      break;
    }
    case `poke:holy_arrow`: {
      return `textures/poke/pfe/holy_arrow_item`;
      break;
    }
    case `poke:volt_arrow`: {
      return `textures/poke/pfe/volt_arrow_item`;
      break;
    }
  }
}
function PFEQuickReload(ammoComponent, item, player) {
  let reloadingAmmo = PokeGetItemFromInventory(player, void 0, ammoComponent.id);
  if (!reloadingAmmo) {
    PokeErrorScreen(player, { text: `Failed to reload ammo` });
    return;
  }
  let totalAmount = 0;
  for (let i = reloadingAmmo.length - 1; i > -1; i--) {
    if (!reloadingAmmo.at(i))
      continue;
    totalAmount = totalAmount + reloadingAmmo.at(i).amount;
  }
  if (!ammoComponent.max) {
    let newProperty2 = [{
      v: PFEAmmoStorageVersion,
      amount: ammoComponent.amount + totalAmount,
      max: ammoComponent.max,
      entityId: ammoComponent.entityId,
      id: ammoComponent.id,
      upgrades: ammoComponent.upgrades
    }];
    if (!PokeSaveProperty(PFEAmmoProperty, item, JSON.stringify(newProperty2), player)) {
      PokeErrorScreen(player, void 0, PFEAmmoManagementMainMenuUI(item, player));
      return;
    }
    player.runCommand(`clear @s ${ammoComponent.id} -1 ${totalAmount}`);
    return;
  }
  let maxRemaining = ammoComponent.max - ammoComponent.amount;
  let takeAmount = totalAmount;
  if (maxRemaining < takeAmount) {
    takeAmount = maxRemaining;
  }
  let newProperty = [{
    v: PFEAmmoStorageVersion,
    amount: ammoComponent.amount + takeAmount,
    max: ammoComponent.max,
    entityId: ammoComponent.entityId,
    id: ammoComponent.id,
    upgrades: ammoComponent.upgrades
  }];
  if (!PokeSaveProperty(PFEAmmoProperty, item, JSON.stringify(newProperty), player)) {
    PokeErrorScreen(player, void 0, PFEAmmoManagementMainMenuUI(item, player));
    return;
  }
  player.runCommand(`clear @s ${ammoComponent.id} -1 ${takeAmount}`);
  return;
}
function PFEAmmoUpgrade(player, item) {
  let UI = new ActionFormData5();
  let ammoComponent = JSON.parse(item.getDynamicProperty(PFEAmmoProperty).toString()).at(0);
  UI.title({ translate: `translation.poke:ammoUIUpgradeTitle`, with: { rawtext: [{ translate: `poke_pfe.${item.typeId.substring(5)}` }] } });
  let capacityUpgrade = PokeGetObjectById(ammoComponent.upgrades, `pfe:capacity`);
  let flamingUpgrade = PokeGetObjectById(ammoComponent.upgrades, `pfe:flaming`);
  console.warn(JSON.stringify(ammoComponent));
  if (!capacityUpgrade) {
    PokeErrorScreen(player, { text: `Cannot find upgrade data for the Capacity Upgrade` }, PFEAmmoManagementMainMenuUI(item, player));
    return;
  }
  if (!flamingUpgrade) {
    let newProperty = [{
      v: PFEAmmoStorageVersion,
      amount: ammoComponent.amount,
      max: ammoComponent.max,
      entityId: ammoComponent.entityId,
      id: ammoComponent.id,
      upgrades: ammoComponent.upgrades.concat([PokeGetObjectById(PFEAmmoStorageDefault.at(0).upgrades, `pfe:flaming`)?.value])
    }];
    console.warn(JSON.stringify(newProperty));
    PokeSaveProperty(PFEAmmoProperty, item, JSON.stringify(newProperty), player);
    ammoComponent = newProperty.at(0);
    flamingUpgrade = PokeGetObjectById(PFEAmmoStorageDefault.at(0).upgrades, `pfe:flaming`);
    if (!flamingUpgrade) {
      PokeErrorScreen(player, { text: `Cannot find upgrade data for the Flaming Upgrade` }, PFEAmmoManagementMainMenuUI(item, player));
      return;
    }
  }
  let canUpgradeCapacity = false;
  if (player.getGameMode() == GameMode3.creative || PokeGetItemFromInventory(player, void 0, `poke:capacity_core`)) {
    UI.button({ translate: `translation.poke:ammoUpgrade`, with: { rawtext: [{ translate: `translation.poke_pfe.capacity` }, { text: `${capacityUpgrade.value.level}` }, { text: `${capacityUpgrade.value.level}` }, { translate: `item.poke:capacity_core` }] } }, `textures/poke/pfe/capacity_core`);
    canUpgradeCapacity = true;
  } else {
    UI.button({ translate: `translation.poke:ammoUpgrade`, with: { rawtext: [{ translate: `translation.poke_pfe.capacity` }, { text: `${capacityUpgrade.value.level}` }, { text: `${capacityUpgrade.value.level}` }, { translate: `item.poke:capacity_core` }] } }, `textures/poke/pfe/capacity_core_gs`);
  }
  let canUpgradeFlaming = false;
  if ((player.getGameMode() == GameMode3.creative || PokeGetItemFromInventory(player, void 0, `poke_pfe:flaming_core`)) && flamingUpgrade.value.level < 1) {
    UI.button({ translate: `translation.poke:ammoUpgrade`, with: { rawtext: [{ translate: `translation.poke_pfe.flaming` }, { text: `${flamingUpgrade.value.level}` }, { text: `${flamingUpgrade.value.level}` }, { translate: `poke_pfe.flaming_core` }] } }, `textures/poke/pfe/flaming_core`);
    canUpgradeFlaming = true;
  } else {
    UI.button({ translate: `translation.poke:ammoUpgrade`, with: { rawtext: [{ translate: `translation.poke_pfe.flaming` }, { text: `${flamingUpgrade.value.level}` }, { text: `${flamingUpgrade.value.level}` }, { translate: `poke_pfe.flaming_core` }] } }, `textures/poke/pfe/flaming_core_gs`);
  }
  UI.button({ translate: `translation.poke:goBack` }, `textures/poke/common/left_arrow`);
  UI.show(player).then((response) => {
    let selection = 0;
    if (response.selection == selection) {
      if (!canUpgradeCapacity) {
        PokeErrorScreen(player, { text: `Unable to upgrade Capacity` }, PFEAmmoManagementMainMenuUI(item, player));
        return;
      }
      let newCapacity = {
        id: capacityUpgrade.value.id,
        level: capacityUpgrade.value.level + 1,
        maxLevel: capacityUpgrade.value.maxLevel
      };
      let newProperty = [{
        v: PFEAmmoStorageVersion,
        amount: ammoComponent.amount,
        max: Number(ammoComponent.max) + 16,
        entityId: ammoComponent.entityId,
        id: ammoComponent.id,
        upgrades: ammoComponent.upgrades.filter((upgrade) => upgrade.id != `pfe:capacity`).concat(newCapacity)
      }];
      if (!PokeSaveProperty(PFEAmmoProperty, item, JSON.stringify(newProperty), player)) {
        PokeErrorScreen(player, { text: `Unable to save capacity upgrade` }, PFEAmmoManagementAddAmmoUI(item, player));
        return;
      }
      player.runCommand(`clear @s poke:capacity_core -1 ${capacityUpgrade.value.level}`);
      return;
    } else
      selection++;
    if (response.selection == selection) {
      if (!canUpgradeFlaming) {
        PokeErrorScreen(player, { text: `Unable to upgrade flaming` }, PFEAmmoManagementMainMenuUI(item, player));
        return;
      }
      let newFlaming = {
        id: flamingUpgrade.value.id,
        level: flamingUpgrade.value.level + 1,
        maxLevel: flamingUpgrade.value.maxLevel
      };
      console.warn(JSON.stringify(ammoComponent.upgrades.filter((upgrade) => upgrade.id != `pfe:flaming`)));
      let newProperty = [{
        v: PFEAmmoStorageVersion,
        amount: ammoComponent.amount,
        max: ammoComponent.max,
        entityId: ammoComponent.entityId,
        id: ammoComponent.id,
        upgrades: ammoComponent.upgrades.filter((upgrade) => upgrade.id != `pfe:flaming`).concat(newFlaming)
      }];
      console.warn(JSON.stringify(newProperty));
      if (!PokeSaveProperty(PFEAmmoProperty, item, JSON.stringify(newProperty), player)) {
        PokeErrorScreen(player, { text: `Unable to save flaming upgrade` }, PFEAmmoManagementAddAmmoUI(item, player));
        return;
      }
      player.runCommand(`clear @s poke_pfe:flaming_core -1 1`);
      return;
    } else
      selection++;
    if (response.canceled || response.selection == selection) {
      PFEAmmoManagementMainMenuUI(item, player);
      return;
    }
  });
}

// scripts/disableConfig.ts
import { world as world5 } from "@minecraft/server";
import { ActionFormData as ActionFormData6 } from "@minecraft/server-ui";
var PFEDisableConfigName = "poke_pfe:disable_config";
var PFEDisableConfigVersion = 1;
var PFEDisabledOnUseItems = ["poke:sundial", "poke:quantum_teleporter", "poke:kapow_ring"];
var PFEDisableConfigDefault = {
  "v": PFEDisableConfigVersion,
  "bounty": true,
  "cactusArmorRadius": true,
  "deathArmorRadius": true,
  "kapowRing": true,
  "nukeRing": true,
  "quantumTeleporter": true,
  "sundial": true,
  "witherSpawner": true
};
function PFEDisableConfigMainMenu(data) {
  let player = data.source;
  let UI = new ActionFormData6();
  let options = JSON.parse(world5.getDynamicProperty(PFEDisableConfigName).toString());
  if (options.quantumTeleporter) {
    UI.button({ rawtext: [{ translate: `poke_pfe.quantum_teleporter` }, { text: ":\xA7a\n" }, { translate: `translation.poke_pfe.enabled` }] }, `textures/poke/pfe/quantum_teleporter`);
  } else {
    UI.button({ rawtext: [{ translate: `poke_pfe.quantum_teleporter` }, { text: ":\xA7c\n" }, { translate: `translation.poke_pfe.disabled` }] }, `textures/poke/pfe/quantum_teleporter`);
  }
  if (options.kapowRing) {
    UI.button({ rawtext: [{ translate: `poke_pfe.kapow_ring` }, { text: ":\xA7a\n" }, { translate: `translation.poke_pfe.enabled` }] }, `textures/poke/pfe/kapow_ring`);
  } else {
    UI.button({ rawtext: [{ translate: `poke_pfe.kapow_ring` }, { text: ":\xA7c\n" }, { translate: `translation.poke_pfe.disabled` }] }, `textures/poke/pfe/kapow_ring`);
  }
  if (options.nukeRing) {
    UI.button({ rawtext: [{ translate: `poke_pfe.nuke_ring` }, { text: ":\xA7a\n" }, { translate: `translation.poke_pfe.enabled` }] }, `textures/poke/pfe/nuke_ring`);
  } else {
    UI.button({ rawtext: [{ translate: `poke_pfe.nuke_ring` }, { text: ":\xA7c\n" }, { translate: `translation.poke_pfe.disabled` }] }, `textures/poke/pfe/nuke_ring`);
  }
  if (options.sundial) {
    UI.button({ rawtext: [{ translate: `poke_pfe.sundial` }, { text: ":\xA7a\n" }, { translate: `translation.poke_pfe.enabled` }] }, `textures/poke/pfe/sundial_1`);
  } else {
    UI.button({ rawtext: [{ translate: `poke_pfe.sundial` }, { text: ":\xA7c\n" }, { translate: `translation.poke_pfe.disabled` }] }, `textures/poke/pfe/sundial_1`);
  }
  if (options.witherSpawner) {
    UI.button({ rawtext: [{ translate: `poke_pfe.wither_spawner` }, { text: ":\xA7a\n" }, { translate: `translation.poke_pfe.enabled` }] }, `textures/poke/pfe/wither_spawner`);
  } else {
    UI.button({ rawtext: [{ translate: `poke_pfe.wither_spawner` }, { text: ":\xA7c\n" }, { translate: `translation.poke_pfe.disabled` }] }, `textures/poke/pfe/wither_spawner`);
  }
  if (options.bounty) {
    UI.button({ rawtext: [{ translate: `poke_pfe.bounty` }, { text: ":\xA7a\n" }, { translate: `translation.poke_pfe.enabled` }] }, `textures/poke/pfe/bounty`);
  } else {
    UI.button({ rawtext: [{ translate: `poke_pfe.bounty` }, { text: ":\xA7c\n" }, { translate: `translation.poke_pfe.disabled` }] }, `textures/poke/pfe/bounty`);
  }
  UI.show(player).then((response) => {
    let selection = 0;
    let newProperty = options;
    if (response.selection == selection) {
      if (newProperty.quantumTeleporter) {
        newProperty.quantumTeleporter = false;
        console.warn(`Disabled Qunantum Teleporter`);
      } else
        newProperty.quantumTeleporter = true;
      world5.setDynamicProperty(PFEDisableConfigName, JSON.stringify(newProperty));
      PFEDisableConfigMainMenu(data);
      return;
    } else
      selection++;
    if (response.selection == selection) {
      if (newProperty.kapowRing) {
        newProperty.kapowRing = false;
        console.warn(`Disabled Kapow Ring`);
      } else
        newProperty.kapowRing = true;
      world5.setDynamicProperty(PFEDisableConfigName, JSON.stringify(newProperty));
      PFEDisableConfigMainMenu(data);
      return;
    } else
      selection++;
    if (response.selection == selection) {
      if (newProperty.nukeRing) {
        newProperty.nukeRing = false;
        console.warn(`Disabled Nuke Ring`);
      } else
        newProperty.nukeRing = true;
      world5.setDynamicProperty(PFEDisableConfigName, JSON.stringify(newProperty));
      PFEDisableConfigMainMenu(data);
      return;
    } else
      selection++;
    if (response.selection == selection) {
      if (newProperty.sundial) {
        newProperty.sundial = false;
        console.warn(`Disabled Sundial`);
      } else
        newProperty.sundial = true;
      world5.setDynamicProperty(PFEDisableConfigName, JSON.stringify(newProperty));
      PFEDisableConfigMainMenu(data);
      return;
    } else
      selection++;
    if (response.selection == selection) {
      if (newProperty.witherSpawner) {
        newProperty.witherSpawner = false;
        console.warn(`Disabled Wither Spawner`);
      } else
        newProperty.witherSpawner = true;
      world5.setDynamicProperty(PFEDisableConfigName, JSON.stringify(newProperty));
      PFEDisableConfigMainMenu(data);
      return;
    } else
      selection++;
    if (response.selection == selection) {
      if (newProperty.bounty) {
        newProperty.bounty = false;
        console.warn(`Disabled Bounty`);
      } else
        newProperty.bounty = true;
      world5.setDynamicProperty(PFEDisableConfigName, JSON.stringify(newProperty));
      PFEDisableConfigMainMenu(data);
      return;
    } else
      selection++;
    if (response.canceled || response.selection == selection) {
      return;
    }
  });
}

// scripts/main.ts
import { ActionFormData as ActionFormData7 } from "@minecraft/server-ui";

// scripts/armorEffects.ts
var import_math = __toESM(require_lib());
import { EntityComponentTypes as EntityComponentTypes4, EquipmentSlot as EquipmentSlot4, ItemStack as ItemStack4 } from "@minecraft/server";
var ArmorEffectDuration = 500;
var PFEArmorEffectData = {
  hellish: {
    effects: [
      {
        effect: MinecraftEffectTypes.FireResistance,
        maxAmp: 0
      },
      {
        effect: MinecraftEffectTypes.Regeneration,
        maxAmp: 2
      },
      {
        effect: MinecraftEffectTypes.Resistance,
        maxAmp: 1
      }
    ],
    tag: `poke_pfe:hellish_armor_effects`
  },
  amethyst: {
    effects: [
      {
        effect: MinecraftEffectTypes.Regeneration,
        maxAmp: 1
      },
      {
        effect: MinecraftEffectTypes.Haste,
        maxAmp: 1
      }
    ],
    tag: `poke_pfe:amethyst_armor_effects`
  },
  astral: {
    effects: [
      {
        effect: MinecraftEffectTypes.Regeneration,
        maxAmp: 3
      },
      {
        effect: MinecraftEffectTypes.Resistance,
        maxAmp: 3
      },
      {
        effect: MinecraftEffectTypes.Speed,
        maxAmp: 3
      },
      {
        effect: MinecraftEffectTypes.WaterBreathing,
        maxAmp: 0
      },
      {
        effect: MinecraftEffectTypes.Haste,
        maxAmp: 3
      },
      {
        effect: MinecraftEffectTypes.HealthBoost,
        maxAmp: 2
      }
    ],
    tag: `poke_pfe:astral_armor_effects`
  },
  banished: {
    effects: [
      {
        effect: MinecraftEffectTypes.Regeneration,
        maxAmp: 2
      },
      {
        effect: MinecraftEffectTypes.Resistance,
        maxAmp: 3
      },
      {
        effect: MinecraftEffectTypes.Slowness,
        maxAmp: 1
      },
      {
        effect: MinecraftEffectTypes.Haste,
        maxAmp: 3
      }
    ],
    tag: `poke_pfe:banished_armor_effects`
  },
  cactus: {
    effects: [],
    radiusEffect: {
      type: "damage",
      amountStep: 1,
      maxAmount: 4,
      maxRadius: 4,
      radiusStep: 1
    },
    tag: `poke_pfe:cactus_armor_effects`
  },
  cobaltRobe: {
    effects: [
      {
        effect: MinecraftEffectTypes.Strength,
        maxAmp: 1
      },
      {
        effect: MinecraftEffectTypes.ConduitPower,
        maxAmp: 0
      }
    ],
    tag: `poke_pfe:cobalt_robe_effects`
  },
  death: {
    effects: [
      {
        effect: MinecraftEffectTypes.HealthBoost,
        maxAmp: 3
      },
      {
        effect: MinecraftEffectTypes.Resistance,
        maxAmp: 2
      },
      {
        effect: MinecraftEffectTypes.Regeneration,
        maxAmp: 2
      },
      {
        effect: MinecraftEffectTypes.FireResistance,
        maxAmp: 0
      }
    ],
    radiusEffect: {
      type: "damage",
      maxRadius: 10,
      maxAmount: 15,
      amountStep: 4,
      radiusStep: 3
    },
    tag: `poke_pfe:death_armor_effects`
  },
  demonic: {
    effects: [
      {
        effect: MinecraftEffectTypes.Strength,
        maxAmp: 1
      },
      {
        effect: MinecraftEffectTypes.Regeneration,
        maxAmp: 2
      },
      {
        effect: MinecraftEffectTypes.Resistance,
        maxAmp: 1
      },
      {
        effect: MinecraftEffectTypes.FireResistance,
        maxAmp: 0
      }
    ],
    tag: `poke_pfe:demonic_armor_effects`
  },
  emberRobe: {
    effects: [
      {
        effect: MinecraftEffectTypes.Strength,
        maxAmp: 1
      },
      {
        effect: MinecraftEffectTypes.FireResistance,
        maxAmp: 0
      }
    ],
    tag: `poke_pfe:ember_robe_effects`
  },
  featherRobe: {
    effects: [
      {
        effect: MinecraftEffectTypes.Strength,
        maxAmp: 1
      },
      {
        effect: MinecraftEffectTypes.SlowFalling,
        maxAmp: 0
      }
    ],
    tag: `poke_pfe:feather_robe_effects`
  },
  galaxy: {
    effects: [
      {
        effect: MinecraftEffectTypes.Regeneration,
        maxAmp: 3
      },
      {
        effect: MinecraftEffectTypes.Resistance,
        maxAmp: 2
      },
      {
        effect: MinecraftEffectTypes.Speed,
        maxAmp: 2
      },
      {
        effect: MinecraftEffectTypes.Haste,
        maxAmp: 2
      },
      {
        effect: MinecraftEffectTypes.HealthBoost,
        maxAmp: 0
      }
    ],
    tag: `poke_pfe:galaxy_armor_effects`
  },
  gluttonyRobe: {
    effects: [
      {
        effect: MinecraftEffectTypes.Strength,
        maxAmp: 1
      },
      {
        effect: MinecraftEffectTypes.Saturation,
        maxAmp: 1
      }
    ],
    tag: `poke_pfe:gluttony_robe_effects`
  },
  godly: {
    effects: [
      {
        effect: MinecraftEffectTypes.Strength,
        maxAmp: 1
      },
      {
        effect: MinecraftEffectTypes.Regeneration,
        maxAmp: 2
      },
      {
        effect: MinecraftEffectTypes.Resistance,
        maxAmp: 1
      },
      {
        effect: MinecraftEffectTypes.Speed,
        maxAmp: 1
      },
      {
        effect: MinecraftEffectTypes.SlowFalling,
        maxAmp: 0
      }
    ],
    tag: `poke_pfe:godly_armor_effects`
  },
  hastedRobe: {
    effects: [
      {
        effect: MinecraftEffectTypes.Strength,
        maxAmp: 1
      },
      {
        effect: MinecraftEffectTypes.Haste,
        maxAmp: 1
      }
    ],
    tag: `poke_pfe:hasted_robe_effects`
  },
  heroicRobe: {
    effects: [
      {
        effect: MinecraftEffectTypes.Strength,
        maxAmp: 1
      },
      {
        effect: MinecraftEffectTypes.VillageHero,
        maxAmp: 1
      }
    ],
    tag: `poke_pfe:heroic_robe_effects`
  },
  holy: {
    effects: [
      {
        effect: MinecraftEffectTypes.Regeneration,
        maxAmp: 2
      },
      {
        effect: MinecraftEffectTypes.Resistance,
        maxAmp: 1
      },
      {
        effect: MinecraftEffectTypes.Speed,
        maxAmp: 1
      }
    ],
    tag: `poke_pfe:holy_armor_effects`
  },
  medic: {
    effects: [
      {
        effect: MinecraftEffectTypes.HealthBoost,
        maxAmp: 3
      },
      {
        effect: MinecraftEffectTypes.Resistance,
        maxAmp: 1
      },
      {
        effect: MinecraftEffectTypes.Speed,
        maxAmp: 1
      }
    ],
    radiusEffect: {
      type: "heal",
      maxAmount: 5,
      maxRadius: 10,
      amountStep: 2,
      radiusStep: 3
    },
    tag: `poke_pfe:medic_armor_effects`
  },
  molten: {
    effects: [
      {
        effect: MinecraftEffectTypes.Strength,
        maxAmp: 1
      },
      {
        effect: MinecraftEffectTypes.Regeneration,
        maxAmp: 2
      },
      {
        effect: MinecraftEffectTypes.Resistance,
        maxAmp: 2
      },
      {
        effect: MinecraftEffectTypes.FireResistance,
        maxAmp: 0
      }
    ],
    tag: `poke_pfe:molten_armor_effects`
  },
  nebula: {
    effects: [
      {
        effect: MinecraftEffectTypes.Speed,
        maxAmp: 3
      },
      {
        effect: MinecraftEffectTypes.Regeneration,
        maxAmp: 3
      },
      {
        effect: MinecraftEffectTypes.Resistance,
        maxAmp: 3
      },
      {
        effect: MinecraftEffectTypes.Haste,
        maxAmp: 3
      },
      {
        effect: MinecraftEffectTypes.VillageHero,
        maxAmp: 2
      },
      {
        effect: MinecraftEffectTypes.FireResistance,
        maxAmp: 0
      },
      {
        effect: MinecraftEffectTypes.Strength,
        maxAmp: 1
      },
      {
        effect: MinecraftEffectTypes.WaterBreathing,
        maxAmp: 0
      },
      {
        effect: MinecraftEffectTypes.HealthBoost,
        maxAmp: 3
      }
    ],
    tag: `poke_pfe:nebula_armor_effects`
  },
  nightVision: {
    effects: [
      {
        effect: MinecraftEffectTypes.NightVision,
        maxAmp: 0
      }
    ],
    tag: `poke_pfe:night_vision_effects`
  },
  onyx: {
    effects: [
      {
        effect: MinecraftEffectTypes.Resistance,
        maxAmp: 0
      },
      {
        effect: MinecraftEffectTypes.Regeneration,
        maxAmp: 1
      }
    ],
    tag: `poke_pfe:onyx_armor_effects`
  },
  radium: {
    effects: [
      {
        effect: MinecraftEffectTypes.Strength,
        maxAmp: 2
      },
      {
        effect: MinecraftEffectTypes.Regeneration,
        maxAmp: 3
      },
      {
        effect: MinecraftEffectTypes.Resistance,
        maxAmp: 2
      },
      {
        effect: MinecraftEffectTypes.Speed,
        maxAmp: 2
      }
    ],
    tag: `poke_pfe:radium_armor_effects`
  },
  shade: {
    effects: [
      {
        effect: MinecraftEffectTypes.Strength,
        maxAmp: 2
      },
      {
        effect: MinecraftEffectTypes.Regeneration,
        maxAmp: 2
      },
      {
        effect: MinecraftEffectTypes.Resistance,
        maxAmp: 2
      },
      {
        effect: MinecraftEffectTypes.Slowness,
        maxAmp: 2
      }
    ],
    tag: `poke_pfe:shade_armor_effects`
  },
  shadowRobe: {
    effects: [
      {
        effect: MinecraftEffectTypes.Strength,
        maxAmp: 2
        // Could get here with help from other sets
      },
      {
        effect: MinecraftEffectTypes.NightVision,
        maxAmp: 0
      }
    ],
    tag: `poke_pfe:shadow_robe_effects`
  },
  speedBoots: {
    effects: [
      {
        effect: MinecraftEffectTypes.Speed,
        maxAmp: 3
        // Could get here with help from other sets
      }
    ],
    tag: `poke_pfe:speed_boots_effects`
  },
  springyRobe: {
    effects: [
      {
        effect: MinecraftEffectTypes.Strength,
        maxAmp: 1
      },
      {
        effect: MinecraftEffectTypes.JumpBoost,
        maxAmp: 1
      }
    ],
    tag: `poke_pfe:springy_robe_effects`
  },
  swiftRobe: {
    effects: [
      {
        effect: MinecraftEffectTypes.Strength,
        maxAmp: 1
      },
      {
        effect: MinecraftEffectTypes.Speed,
        maxAmp: 3
        // Could get here with help from other sets
      }
    ],
    tag: `poke_pfe:swift_robe_effects`
  },
  void: {
    effects: [
      {
        effect: MinecraftEffectTypes.Speed,
        maxAmp: 1
      },
      {
        effect: MinecraftEffectTypes.Resistance,
        maxAmp: 1
      },
      {
        effect: MinecraftEffectTypes.Regeneration,
        maxAmp: 1
      },
      {
        effect: MinecraftEffectTypes.FireResistance,
        maxAmp: 0
      }
    ],
    tag: `poke_pfe:void_armor_effects`
  }
};
function CheckEffects(player, ArmorData, additionalOptions) {
  const Helmet = player.getComponent(EntityComponentTypes4.Equippable)?.getEquipment(EquipmentSlot4.Head) ?? false;
  const Chestplate = player.getComponent(EntityComponentTypes4.Equippable)?.getEquipment(EquipmentSlot4.Chest) ?? false;
  const Leggings = player.getComponent(EntityComponentTypes4.Equippable)?.getEquipment(EquipmentSlot4.Legs) ?? false;
  const Boots = player.getComponent(EntityComponentTypes4.Equippable)?.getEquipment(EquipmentSlot4.Feet) ?? false;
  const Offhand = player.getComponent(EntityComponentTypes4.Equippable)?.getEquipment(EquipmentSlot4.Offhand) ?? false;
  let totalPieces = -1;
  let effects = [];
  let totalStrength = 0;
  let totalSpeed = 0;
  let totalResistance = 0;
  let totalRegeneration = 0;
  let totalJumpBoost = 0;
  let totalSlowness = 0;
  let totalHealthBoost = 0;
  let totalVillageHero = 0;
  let totalSaturation = 0;
  let totalHaste = 0;
  let radiusEffects = false;
  if (additionalOptions) {
    const NoveltyTags = player.getTags().filter((tag) => tag.includes(`novelty:poke`));
    for (let i = NoveltyTags.length; i > -1; i--) {
      const tag = NoveltyTags.at(i);
      if (!tag)
        continue;
      const item = new ItemStack4(tag.substring(8), 1);
      totalPieces += 1;
      switch (true) {
        case item.hasTag(ArmorData.amethyst.tag): {
          effects = effects.concat(ArmorData.amethyst.effects);
          totalRegeneration += 1;
          totalHaste += 1;
          break;
        }
        case item.hasTag(ArmorData.shade.tag): {
          effects = effects.concat(ArmorData.shade.effects);
          totalStrength += 1;
          totalRegeneration += 1;
          totalResistance += 1;
          totalSlowness += 1;
          break;
        }
        case item.hasTag(ArmorData.radium.tag): {
          effects = effects.concat(ArmorData.radium.effects);
          totalStrength += 1;
          totalRegeneration += 1;
          totalResistance += 1;
          totalSpeed += 1;
          break;
        }
        case item.hasTag(ArmorData.banished.tag): {
          effects = effects.concat(ArmorData.banished.effects);
          totalRegeneration += 1;
          totalResistance += 1;
          totalSlowness += 1;
          totalHaste += 1;
          break;
        }
        case item.hasTag(ArmorData.onyx.tag): {
          effects = effects.concat(ArmorData.onyx.effects);
          totalRegeneration += 1;
          break;
        }
        case item.hasTag(ArmorData.holy.tag): {
          effects = effects.concat(ArmorData.holy.effects);
          totalRegeneration += 1;
          totalResistance += 1;
          totalSpeed += 1;
          break;
        }
        case item.hasTag(ArmorData.hellish.tag): {
          effects = effects.concat(ArmorData.hellish.effects);
          totalRegeneration += 1;
          totalResistance += 1;
          break;
        }
        case item.hasTag(ArmorData.godly.tag): {
          effects = effects.concat(ArmorData.godly.effects);
          totalStrength += 1;
          totalRegeneration += 1;
          totalResistance += 1;
          totalSpeed += 1;
          break;
        }
        case item.hasTag(ArmorData.demonic.tag): {
          effects = effects.concat(ArmorData.demonic.effects);
          totalStrength += 1;
          totalRegeneration += 1;
          totalResistance += 1;
          break;
        }
        case item.hasTag(ArmorData.medic.tag): {
          effects = effects.concat(ArmorData.medic.effects);
          totalHealthBoost += 1;
          totalResistance += 1;
          totalSpeed += 1;
          break;
        }
        case item.hasTag(ArmorData.molten.tag): {
          effects = effects.concat(ArmorData.molten.effects);
          totalStrength += 1;
          totalRegeneration += 1;
          totalResistance += 1;
          break;
        }
        case item.hasTag(ArmorData.galaxy.tag): {
          effects = effects.concat(ArmorData.galaxy.effects);
          totalRegeneration += 1;
          totalResistance += 1;
          totalSpeed += 1;
          totalHaste += 1;
          break;
        }
        case item.hasTag(ArmorData.void.tag): {
          effects = effects.concat(ArmorData.void.effects);
          totalSpeed += 1;
          totalResistance += 1;
          totalRegeneration += 1;
          break;
        }
        case item.hasTag(ArmorData.astral.tag): {
          effects = effects.concat(ArmorData.astral.effects);
          totalRegeneration += 1;
          totalResistance += 1;
          totalSpeed += 1;
          totalHaste += 1;
          totalHealthBoost += 1;
          break;
        }
        case item.hasTag(ArmorData.death.tag): {
          effects = effects.concat(ArmorData.death.effects);
          totalHealthBoost += 1;
          totalResistance += 1;
          totalRegeneration += 1;
          break;
        }
        case item.hasTag(ArmorData.nebula.tag): {
          effects = effects.concat(ArmorData.nebula.effects);
          totalSpeed += 1;
          totalRegeneration += 1;
          totalResistance += 1;
          totalHaste += 1;
          totalVillageHero += 1;
          totalStrength += 1;
          totalHealthBoost += 1;
          break;
        }
        case item.hasTag(ArmorData.cactus.tag): {
          effects = effects.concat(ArmorData.cactus.effects);
          break;
        }
        case item.hasTag(ArmorData.emberRobe.tag): {
          effects = effects.concat(ArmorData.emberRobe.effects);
          totalStrength += 1;
          break;
        }
        case item.hasTag(ArmorData.hastedRobe.tag): {
          effects = effects.concat(ArmorData.hastedRobe.effects);
          totalStrength += 1;
          totalHaste += 1;
          break;
        }
        case item.hasTag(ArmorData.springyRobe.tag): {
          effects = effects.concat(ArmorData.springyRobe.effects);
          totalStrength += 1;
          totalJumpBoost += 1;
          break;
        }
        case item.hasTag(ArmorData.heroicRobe.tag): {
          effects = effects.concat(ArmorData.heroicRobe.effects);
          totalStrength += 1;
          totalVillageHero += 1;
          break;
        }
        case item.hasTag(ArmorData.cobaltRobe.tag): {
          effects = effects.concat(ArmorData.cobaltRobe.effects);
          totalStrength += 1;
          break;
        }
        case item.hasTag(ArmorData.swiftRobe.tag): {
          effects = effects.concat(ArmorData.swiftRobe.effects);
          totalStrength += 1;
          totalSpeed += 1;
          break;
        }
        case item.hasTag(ArmorData.gluttonyRobe.tag): {
          effects = effects.concat(ArmorData.gluttonyRobe.effects);
          totalStrength += 1;
          totalSaturation += 1;
          break;
        }
        case item.hasTag(ArmorData.featherRobe.tag): {
          effects = effects.concat(ArmorData.featherRobe.effects);
          totalStrength += 1;
          break;
        }
        case item.hasTag(ArmorData.shadowRobe.tag): {
          effects = effects.concat(ArmorData.shadowRobe.effects);
          totalStrength += 1;
          break;
        }
        case item.hasTag(ArmorData.nightVision.tag): {
          effects = effects.concat(ArmorData.nightVision.effects);
          break;
        }
        case item.hasTag(ArmorData.speedBoots.tag): {
          effects = effects.concat(ArmorData.speedBoots.effects);
          totalSpeed += 1;
          break;
        }
        default:
          totalPieces -= 1;
      }
      ;
      continue;
    }
  }
  if (Offhand) {
    totalPieces += 1;
    switch (true) {
      case Offhand.hasTag(ArmorData.nightVision.tag): {
        effects = effects.concat(ArmorData.nightVision.effects);
        break;
      }
      default: {
        totalPieces -= 1;
        break;
      }
    }
  }
  if (Helmet) {
    totalPieces += 1;
    switch (true) {
      case Helmet.hasTag(ArmorData.amethyst.tag): {
        effects = effects.concat(ArmorData.amethyst.effects);
        totalRegeneration += 1;
        totalHaste += 1;
        break;
      }
      case Helmet.hasTag(ArmorData.shade.tag): {
        effects = effects.concat(ArmorData.shade.effects);
        totalStrength += 1;
        totalRegeneration += 1;
        totalResistance += 1;
        totalSlowness += 1;
        break;
      }
      case Helmet.hasTag(ArmorData.radium.tag): {
        effects = effects.concat(ArmorData.radium.effects);
        totalStrength += 1;
        totalRegeneration += 1;
        totalResistance += 1;
        totalSpeed += 1;
        break;
      }
      case Helmet.hasTag(ArmorData.banished.tag): {
        effects = effects.concat(ArmorData.banished.effects);
        totalRegeneration += 1;
        totalResistance += 1;
        totalSlowness += 1;
        totalHaste += 1;
        break;
      }
      case Helmet.hasTag(ArmorData.onyx.tag): {
        effects = effects.concat(ArmorData.onyx.effects);
        totalRegeneration += 1;
        break;
      }
      case Helmet.hasTag(ArmorData.holy.tag): {
        effects = effects.concat(ArmorData.holy.effects);
        totalRegeneration += 1;
        totalResistance += 1;
        totalSpeed += 1;
        break;
      }
      case Helmet.hasTag(ArmorData.hellish.tag): {
        effects = effects.concat(ArmorData.hellish.effects);
        totalRegeneration += 1;
        totalResistance += 1;
        break;
      }
      case Helmet.hasTag(ArmorData.godly.tag): {
        effects = effects.concat(ArmorData.godly.effects);
        totalStrength += 1;
        totalRegeneration += 1;
        totalResistance += 1;
        totalSpeed += 1;
        break;
      }
      case Helmet.hasTag(ArmorData.demonic.tag): {
        effects = effects.concat(ArmorData.demonic.effects);
        totalStrength += 1;
        totalRegeneration += 1;
        totalResistance += 1;
        break;
      }
      case Helmet.hasTag(ArmorData.medic.tag): {
        effects = effects.concat(ArmorData.medic.effects);
        totalHealthBoost += 1;
        totalResistance += 1;
        totalSpeed += 1;
        break;
      }
      case Helmet.hasTag(ArmorData.molten.tag): {
        effects = effects.concat(ArmorData.molten.effects);
        totalStrength += 1;
        totalRegeneration += 1;
        totalResistance += 1;
        break;
      }
      case Helmet.hasTag(ArmorData.galaxy.tag): {
        effects = effects.concat(ArmorData.galaxy.effects);
        totalRegeneration += 1;
        totalResistance += 1;
        totalSpeed += 1;
        totalHaste += 1;
        break;
      }
      case Helmet.hasTag(ArmorData.void.tag): {
        effects = effects.concat(ArmorData.void.effects);
        totalSpeed += 1;
        totalResistance += 1;
        totalRegeneration += 1;
        break;
      }
      case Helmet.hasTag(ArmorData.astral.tag): {
        effects = effects.concat(ArmorData.astral.effects);
        totalRegeneration += 1;
        totalResistance += 1;
        totalSpeed += 1;
        totalHaste += 1;
        totalHealthBoost += 1;
        break;
      }
      case Helmet.hasTag(ArmorData.death.tag): {
        effects = effects.concat(ArmorData.death.effects);
        totalHealthBoost += 1;
        totalResistance += 1;
        totalRegeneration += 1;
        break;
      }
      case Helmet.hasTag(ArmorData.nebula.tag): {
        effects = effects.concat(ArmorData.nebula.effects);
        totalSpeed += 1;
        totalRegeneration += 1;
        totalResistance += 1;
        totalHaste += 1;
        totalVillageHero += 1;
        totalStrength += 1;
        totalHealthBoost += 1;
        break;
      }
      case Helmet.hasTag(ArmorData.cactus.tag): {
        effects = effects.concat(ArmorData.cactus.effects);
        break;
      }
      case Helmet.hasTag(ArmorData.emberRobe.tag): {
        effects = effects.concat(ArmorData.emberRobe.effects);
        totalStrength += 1;
        break;
      }
      case Helmet.hasTag(ArmorData.hastedRobe.tag): {
        effects = effects.concat(ArmorData.hastedRobe.effects);
        totalStrength += 1;
        totalHaste += 1;
        break;
      }
      case Helmet.hasTag(ArmorData.springyRobe.tag): {
        effects = effects.concat(ArmorData.springyRobe.effects);
        totalStrength += 1;
        totalJumpBoost += 1;
        break;
      }
      case Helmet.hasTag(ArmorData.heroicRobe.tag): {
        effects = effects.concat(ArmorData.heroicRobe.effects);
        totalStrength += 1;
        totalVillageHero += 1;
        break;
      }
      case Helmet.hasTag(ArmorData.cobaltRobe.tag): {
        effects = effects.concat(ArmorData.cobaltRobe.effects);
        totalStrength += 1;
        break;
      }
      case Helmet.hasTag(ArmorData.swiftRobe.tag): {
        effects = effects.concat(ArmorData.swiftRobe.effects);
        totalStrength += 1;
        totalSpeed += 1;
        break;
      }
      case Helmet.hasTag(ArmorData.gluttonyRobe.tag): {
        effects = effects.concat(ArmorData.gluttonyRobe.effects);
        totalStrength += 1;
        totalSaturation += 1;
        break;
      }
      case Helmet.hasTag(ArmorData.featherRobe.tag): {
        effects = effects.concat(ArmorData.featherRobe.effects);
        totalStrength += 1;
        break;
      }
      case Helmet.hasTag(ArmorData.shadowRobe.tag): {
        effects = effects.concat(ArmorData.shadowRobe.effects);
        totalStrength += 1;
        break;
      }
      case Helmet.hasTag(ArmorData.nightVision.tag): {
        effects = effects.concat(ArmorData.nightVision.effects);
        break;
      }
      default:
        totalPieces -= 1;
    }
  }
  if (Chestplate) {
    totalPieces += 1;
    switch (true) {
      case Chestplate.hasTag(ArmorData.amethyst.tag): {
        effects = effects.concat(ArmorData.amethyst.effects);
        totalRegeneration += 1;
        totalHaste += 1;
        break;
      }
      case Chestplate.hasTag(ArmorData.shade.tag): {
        effects = effects.concat(ArmorData.shade.effects);
        totalStrength += 1;
        totalRegeneration += 1;
        totalResistance += 1;
        totalSlowness += 1;
        break;
      }
      case Chestplate.hasTag(ArmorData.radium.tag): {
        effects = effects.concat(ArmorData.radium.effects);
        totalStrength += 1;
        totalRegeneration += 1;
        totalResistance += 1;
        totalSpeed += 1;
        break;
      }
      case Chestplate.hasTag(ArmorData.banished.tag): {
        effects = effects.concat(ArmorData.banished.effects);
        totalRegeneration += 1;
        totalResistance += 1;
        totalSlowness += 1;
        totalHaste += 1;
        break;
      }
      case Chestplate.hasTag(ArmorData.onyx.tag): {
        effects = effects.concat(ArmorData.onyx.effects);
        totalRegeneration += 1;
        break;
      }
      case Chestplate.hasTag(ArmorData.holy.tag): {
        effects = effects.concat(ArmorData.holy.effects);
        totalRegeneration += 1;
        totalResistance += 1;
        totalSpeed += 1;
        break;
      }
      case Chestplate.hasTag(ArmorData.hellish.tag): {
        effects = effects.concat(ArmorData.hellish.effects);
        totalRegeneration += 1;
        totalResistance += 1;
        break;
      }
      case Chestplate.hasTag(ArmorData.godly.tag): {
        effects = effects.concat(ArmorData.godly.effects);
        totalStrength += 1;
        totalRegeneration += 1;
        totalResistance += 1;
        totalSpeed += 1;
        break;
      }
      case Chestplate.hasTag(ArmorData.demonic.tag): {
        effects = effects.concat(ArmorData.demonic.effects);
        totalStrength += 1;
        totalRegeneration += 1;
        totalResistance += 1;
        break;
      }
      case Chestplate.hasTag(ArmorData.medic.tag): {
        effects = effects.concat(ArmorData.medic.effects);
        totalHealthBoost += 1;
        totalResistance += 1;
        totalSpeed += 1;
        break;
      }
      case Chestplate.hasTag(ArmorData.molten.tag): {
        effects = effects.concat(ArmorData.molten.effects);
        totalStrength += 1;
        totalRegeneration += 1;
        totalResistance += 1;
        break;
      }
      case Chestplate.hasTag(ArmorData.galaxy.tag): {
        effects = effects.concat(ArmorData.galaxy.effects);
        totalRegeneration += 1;
        totalResistance += 1;
        totalSpeed += 1;
        totalHaste += 1;
        break;
      }
      case Chestplate.hasTag(ArmorData.void.tag): {
        effects = effects.concat(ArmorData.void.effects);
        totalSpeed += 1;
        totalResistance += 1;
        totalRegeneration += 1;
        break;
      }
      case Chestplate.hasTag(ArmorData.astral.tag): {
        effects = effects.concat(ArmorData.astral.effects);
        totalRegeneration += 1;
        totalResistance += 1;
        totalSpeed += 1;
        totalHaste += 1;
        totalHealthBoost += 1;
        break;
      }
      case Chestplate.hasTag(ArmorData.death.tag): {
        effects = effects.concat(ArmorData.death.effects);
        totalHealthBoost += 1;
        totalResistance += 1;
        totalRegeneration += 1;
        break;
      }
      case Chestplate.hasTag(ArmorData.nebula.tag): {
        effects = effects.concat(ArmorData.nebula.effects);
        totalSpeed += 1;
        totalRegeneration += 1;
        totalResistance += 1;
        totalHaste += 1;
        totalVillageHero += 1;
        totalStrength += 1;
        totalHealthBoost += 1;
        break;
      }
      case Chestplate.hasTag(ArmorData.cactus.tag): {
        effects = effects.concat(ArmorData.cactus.effects);
        break;
      }
      case Chestplate.hasTag(ArmorData.emberRobe.tag): {
        effects = effects.concat(ArmorData.emberRobe.effects);
        totalStrength += 1;
        break;
      }
      case Chestplate.hasTag(ArmorData.hastedRobe.tag): {
        effects = effects.concat(ArmorData.hastedRobe.effects);
        totalStrength += 1;
        totalHaste += 1;
        break;
      }
      case Chestplate.hasTag(ArmorData.springyRobe.tag): {
        effects = effects.concat(ArmorData.springyRobe.effects);
        totalStrength += 1;
        totalJumpBoost += 1;
        break;
      }
      case Chestplate.hasTag(ArmorData.heroicRobe.tag): {
        effects = effects.concat(ArmorData.heroicRobe.effects);
        totalStrength += 1;
        totalVillageHero += 1;
        break;
      }
      case Chestplate.hasTag(ArmorData.cobaltRobe.tag): {
        effects = effects.concat(ArmorData.cobaltRobe.effects);
        totalStrength += 1;
        break;
      }
      case Chestplate.hasTag(ArmorData.swiftRobe.tag): {
        effects = effects.concat(ArmorData.swiftRobe.effects);
        totalStrength += 1;
        totalSpeed += 1;
        break;
      }
      case Chestplate.hasTag(ArmorData.gluttonyRobe.tag): {
        effects = effects.concat(ArmorData.gluttonyRobe.effects);
        totalStrength += 1;
        totalSaturation += 1;
        break;
      }
      case Chestplate.hasTag(ArmorData.featherRobe.tag): {
        effects = effects.concat(ArmorData.featherRobe.effects);
        totalStrength += 1;
        break;
      }
      case Chestplate.hasTag(ArmorData.shadowRobe.tag): {
        effects = effects.concat(ArmorData.shadowRobe.effects);
        totalStrength += 1;
        break;
      }
      default:
        totalPieces -= 1;
    }
  }
  if (Leggings) {
    totalPieces += 1;
    switch (true) {
      case Leggings.hasTag(ArmorData.amethyst.tag): {
        effects = effects.concat(ArmorData.amethyst.effects);
        totalRegeneration += 1;
        totalHaste += 1;
        break;
      }
      case Leggings.hasTag(ArmorData.shade.tag): {
        effects = effects.concat(ArmorData.shade.effects);
        totalStrength += 1;
        totalRegeneration += 1;
        totalResistance += 1;
        totalSlowness += 1;
        break;
      }
      case Leggings.hasTag(ArmorData.radium.tag): {
        effects = effects.concat(ArmorData.radium.effects);
        totalStrength += 1;
        totalRegeneration += 1;
        totalResistance += 1;
        totalSpeed += 1;
        break;
      }
      case Leggings.hasTag(ArmorData.banished.tag): {
        effects = effects.concat(ArmorData.banished.effects);
        totalRegeneration += 1;
        totalResistance += 1;
        totalSlowness += 1;
        totalHaste += 1;
        break;
      }
      case Leggings.hasTag(ArmorData.onyx.tag): {
        effects = effects.concat(ArmorData.onyx.effects);
        totalRegeneration += 1;
        break;
      }
      case Leggings.hasTag(ArmorData.holy.tag): {
        effects = effects.concat(ArmorData.holy.effects);
        totalRegeneration += 1;
        totalResistance += 1;
        totalSpeed += 1;
        break;
      }
      case Leggings.hasTag(ArmorData.hellish.tag): {
        effects = effects.concat(ArmorData.hellish.effects);
        totalRegeneration += 1;
        totalResistance += 1;
        break;
      }
      case Leggings.hasTag(ArmorData.godly.tag): {
        effects = effects.concat(ArmorData.godly.effects);
        totalStrength += 1;
        totalRegeneration += 1;
        totalResistance += 1;
        totalSpeed += 1;
        break;
      }
      case Leggings.hasTag(ArmorData.demonic.tag): {
        effects = effects.concat(ArmorData.demonic.effects);
        totalStrength += 1;
        totalRegeneration += 1;
        totalResistance += 1;
        break;
      }
      case Leggings.hasTag(ArmorData.medic.tag): {
        effects = effects.concat(ArmorData.medic.effects);
        totalHealthBoost += 1;
        totalResistance += 1;
        totalSpeed += 1;
        break;
      }
      case Leggings.hasTag(ArmorData.molten.tag): {
        effects = effects.concat(ArmorData.molten.effects);
        totalStrength += 1;
        totalRegeneration += 1;
        totalResistance += 1;
        break;
      }
      case Leggings.hasTag(ArmorData.galaxy.tag): {
        effects = effects.concat(ArmorData.galaxy.effects);
        totalRegeneration += 1;
        totalResistance += 1;
        totalSpeed += 1;
        totalHaste += 1;
        break;
      }
      case Leggings.hasTag(ArmorData.void.tag): {
        effects = effects.concat(ArmorData.void.effects);
        totalSpeed += 1;
        totalResistance += 1;
        totalRegeneration += 1;
        break;
      }
      case Leggings.hasTag(ArmorData.astral.tag): {
        effects = effects.concat(ArmorData.astral.effects);
        totalRegeneration += 1;
        totalResistance += 1;
        totalSpeed += 1;
        totalHaste += 1;
        totalHealthBoost += 1;
        break;
      }
      case Leggings.hasTag(ArmorData.death.tag): {
        effects = effects.concat(ArmorData.death.effects);
        totalHealthBoost += 1;
        totalResistance += 1;
        totalRegeneration += 1;
        break;
      }
      case Leggings.hasTag(ArmorData.nebula.tag): {
        effects = effects.concat(ArmorData.nebula.effects);
        totalSpeed += 1;
        totalRegeneration += 1;
        totalResistance += 1;
        totalHaste += 1;
        totalVillageHero += 1;
        totalStrength += 1;
        totalHealthBoost += 1;
        break;
      }
      case Leggings.hasTag(ArmorData.cactus.tag): {
        effects = effects.concat(ArmorData.cactus.effects);
        break;
      }
      default:
        totalPieces -= 1;
    }
  }
  if (Boots) {
    totalPieces += 1;
    switch (true) {
      case Boots.hasTag(ArmorData.amethyst.tag): {
        effects = effects.concat(ArmorData.amethyst.effects);
        totalRegeneration += 1;
        totalHaste += 1;
        break;
      }
      case Boots.hasTag(ArmorData.shade.tag): {
        effects = effects.concat(ArmorData.shade.effects);
        totalStrength += 1;
        totalRegeneration += 1;
        totalResistance += 1;
        totalSlowness += 1;
        break;
      }
      case Boots.hasTag(ArmorData.radium.tag): {
        effects = effects.concat(ArmorData.radium.effects);
        totalStrength += 1;
        totalRegeneration += 1;
        totalResistance += 1;
        totalSpeed += 1;
        break;
      }
      case Boots.hasTag(ArmorData.banished.tag): {
        effects = effects.concat(ArmorData.banished.effects);
        totalRegeneration += 1;
        totalResistance += 1;
        totalSlowness += 1;
        totalHaste += 1;
        break;
      }
      case Boots.hasTag(ArmorData.onyx.tag): {
        effects = effects.concat(ArmorData.onyx.effects);
        totalRegeneration += 1;
        break;
      }
      case Boots.hasTag(ArmorData.holy.tag): {
        effects = effects.concat(ArmorData.holy.effects);
        totalRegeneration += 1;
        totalResistance += 1;
        totalSpeed += 1;
        break;
      }
      case Boots.hasTag(ArmorData.hellish.tag): {
        effects = effects.concat(ArmorData.hellish.effects);
        totalRegeneration += 1;
        totalResistance += 1;
        break;
      }
      case Boots.hasTag(ArmorData.godly.tag): {
        effects = effects.concat(ArmorData.godly.effects);
        totalStrength += 1;
        totalRegeneration += 1;
        totalResistance += 1;
        totalSpeed += 1;
        break;
      }
      case Boots.hasTag(ArmorData.demonic.tag): {
        effects = effects.concat(ArmorData.demonic.effects);
        totalStrength += 1;
        totalRegeneration += 1;
        totalResistance += 1;
        break;
      }
      case Boots.hasTag(ArmorData.medic.tag): {
        effects = effects.concat(ArmorData.medic.effects);
        totalHealthBoost += 1;
        totalResistance += 1;
        totalSpeed += 1;
        break;
      }
      case Boots.hasTag(ArmorData.molten.tag): {
        effects = effects.concat(ArmorData.molten.effects);
        totalStrength += 1;
        totalRegeneration += 1;
        totalResistance += 1;
        break;
      }
      case Boots.hasTag(ArmorData.galaxy.tag): {
        effects = effects.concat(ArmorData.galaxy.effects);
        totalRegeneration += 1;
        totalResistance += 1;
        totalSpeed += 1;
        totalHaste += 1;
        break;
      }
      case Boots.hasTag(ArmorData.void.tag): {
        effects = effects.concat(ArmorData.void.effects);
        totalSpeed += 1;
        totalResistance += 1;
        totalRegeneration += 1;
        break;
      }
      case Boots.hasTag(ArmorData.astral.tag): {
        effects = effects.concat(ArmorData.astral.effects);
        totalRegeneration += 1;
        totalResistance += 1;
        totalSpeed += 1;
        totalHaste += 1;
        totalHealthBoost += 1;
        break;
      }
      case Boots.hasTag(ArmorData.death.tag): {
        effects = effects.concat(ArmorData.death.effects);
        totalHealthBoost += 1;
        totalResistance += 1;
        totalRegeneration += 1;
        break;
      }
      case Boots.hasTag(ArmorData.nebula.tag): {
        effects = effects.concat(ArmorData.nebula.effects);
        totalSpeed += 1;
        totalRegeneration += 1;
        totalResistance += 1;
        totalHaste += 1;
        totalVillageHero += 1;
        totalStrength += 1;
        totalHealthBoost += 1;
        break;
      }
      case Boots.hasTag(ArmorData.cactus.tag): {
        effects = effects.concat(ArmorData.cactus.effects);
        break;
      }
      case Boots.hasTag(ArmorData.speedBoots.tag): {
        effects = effects.concat(ArmorData.speedBoots.effects);
        totalSpeed += 1;
        break;
      }
      default:
        totalPieces -= 1;
    }
  }
  for (let effect of effects) {
    let ActiveEffects = player.getEffect(effect.effect) ?? false;
    if (!ActiveEffects) {
      player.addEffect(effect.effect, ArmorEffectDuration, { showParticles: false, amplifier: 0 });
    } else {
      let CurrentEffect = 0;
      switch (false) {
        case effect.effect != MinecraftEffectTypes.Strength: {
          CurrentEffect = totalStrength;
          break;
        }
        case effect.effect != MinecraftEffectTypes.Speed: {
          CurrentEffect = totalSpeed;
          break;
        }
        case effect.effect != MinecraftEffectTypes.Resistance: {
          CurrentEffect = totalResistance;
          break;
        }
        case effect.effect != MinecraftEffectTypes.Regeneration: {
          CurrentEffect = totalRegeneration;
          break;
        }
        case effect.effect != MinecraftEffectTypes.JumpBoost: {
          CurrentEffect = totalJumpBoost;
          break;
        }
        case effect.effect != MinecraftEffectTypes.Slowness: {
          CurrentEffect = totalSlowness;
          break;
        }
        case effect.effect != MinecraftEffectTypes.HealthBoost: {
          CurrentEffect = totalHealthBoost;
          break;
        }
        case effect.effect != MinecraftEffectTypes.VillageHero: {
          CurrentEffect = totalVillageHero;
          break;
        }
        case effect.effect != MinecraftEffectTypes.Saturation: {
          CurrentEffect = totalSaturation;
          break;
        }
        case effect.effect != MinecraftEffectTypes.Haste: {
          CurrentEffect = totalHaste;
          break;
        }
      }
      player.addEffect(effect.effect, ArmorEffectDuration, { showParticles: false, amplifier: Math.min(ActiveEffects.amplifier + 1, totalPieces, effect.maxAmp, (0, import_math.clampNumber)(CurrentEffect - 1, 0, 255)) });
    }
  }
}

// scripts/quests.ts
import { ItemStack as ItemStack5 } from "@minecraft/server";
var PFEQuestPropertyID = `poke_pfe:quests`;
var PFEMineQuests = [
  { requiredItem: { item: MinecraftItemTypes.RawCopper, amount: 4, translationString: `item.raw_copper.name` }, reward: { tokenAmount: 2 } },
  { requiredItem: { item: MinecraftItemTypes.Coal, amount: 4, translationString: `item.coal.name` }, reward: { tokenAmount: 2 } },
  { requiredItem: { item: MinecraftItemTypes.RawIron, amount: 4, translationString: `item.raw_iron.name` }, reward: { tokenAmount: 2 } },
  { requiredItem: { item: MinecraftItemTypes.RawGold, amount: 4, translationString: `item.raw_gold.name` }, reward: { tokenAmount: 3 } },
  { requiredItem: { item: MinecraftItemTypes.Diamond, amount: 2, translationString: `item.diamond.name` }, reward: { tokenAmount: 4 } },
  { requiredItem: { item: MinecraftItemTypes.Stone, amount: 8, translationString: `tile.stone.name` }, reward: { tokenAmount: 1 } },
  { requiredItem: { item: MinecraftItemTypes.CobbledDeepslate, amount: 16, translationString: `tile.cobbled_deepslate.name` }, reward: { tokenAmount: 1 } },
  { requiredItem: { item: MinecraftItemTypes.Cobblestone, amount: 16, translationString: `tile.cobblestone.name` }, reward: { tokenAmount: 1 } },
  { requiredItem: { item: `poke:raw_cobalt`, amount: 8, translationString: `poke_pfe.raw_cobalt (%poke_pfe.tag)` }, reward: { tokenAmount: 2 } },
  { requiredItem: { item: `poke:cobbled_limestone`, amount: 8, translationString: `poke_pfe.cobbled_limestone (%poke_pfe.tag)` }, reward: { tokenAmount: 2 } }
];
var PFEKillQuests = [
  { requiredItem: { item: MinecraftItemTypes.RottenFlesh, amount: 4, translationString: `item.rotten_flesh.name` }, reward: { tokenAmount: 2 } },
  { requiredItem: { item: MinecraftItemTypes.Bone, amount: 4, translationString: `item.bone.name` }, reward: { tokenAmount: 2 } },
  { requiredItem: { item: MinecraftItemTypes.String, amount: 4, translationString: `item.string.name` }, reward: { tokenAmount: 2 } },
  { requiredItem: { item: MinecraftItemTypes.Leather, amount: 4, translationString: `item.leather.name` }, reward: { tokenAmount: 2 } },
  { requiredItem: { item: MinecraftItemTypes.Feather, amount: 4, translationString: `item.feather.name` }, reward: { tokenAmount: 2 } },
  { requiredItem: { item: MinecraftItemTypes.RabbitHide, amount: 4, translationString: `item.rabbit_hide.name` }, reward: { tokenAmount: 4 } },
  { requiredItem: { item: MinecraftItemTypes.RabbitFoot, amount: 1, translationString: `item.rabbit_foot.name` }, reward: { tokenAmount: 12 } },
  { requiredItem: { item: MinecraftItemTypes.BlazeRod, amount: 16, translationString: `item.blaze_rod.name` }, reward: { tokenAmount: 32 } }
];
var PFECraftQuests = [
  { requiredItem: { item: MinecraftItemTypes.Compass, amount: 1, translationString: `item.compass.name` }, reward: { tokenAmount: 6 } },
  { requiredItem: { item: MinecraftItemTypes.Clock, amount: 1, translationString: `item.clock.name` }, reward: { tokenAmount: 6 } },
  { requiredItem: { item: MinecraftItemTypes.TurtleHelmet, amount: 1, translationString: `item.turtle_helmet.name` }, reward: { tokenAmount: 64 } },
  { requiredItem: { item: MinecraftItemTypes.WolfArmor, amount: 1, translationString: `item.wolf_armor.name` }, reward: { tokenAmount: 12 } },
  { requiredItem: { item: MinecraftItemTypes.Spyglass, amount: 1, translationString: `item.spyglass.name` }, reward: { tokenAmount: 4 } },
  { requiredItem: { item: MinecraftItemTypes.DaylightDetector, amount: 1, translationString: `tile.daylight_detector.name` }, reward: { tokenAmount: 6 } },
  { requiredItem: { item: MinecraftItemTypes.EnderEye, amount: 2, translationString: `item.ender_eye.name` }, reward: { tokenAmount: 8 } }
];
var PFEFarmQuests = [
  { requiredItem: { item: MinecraftItemTypes.Wheat, amount: 4, translationString: `item.wheat.name` }, reward: { tokenAmount: 2 } },
  { requiredItem: { item: MinecraftItemTypes.Carrot, amount: 4, translationString: `item.carrot.name` }, reward: { tokenAmount: 2 } },
  { requiredItem: { item: MinecraftItemTypes.Potato, amount: 4, translationString: `item.potato.name` }, reward: { tokenAmount: 2 } },
  { requiredItem: { item: MinecraftItemTypes.Beetroot, amount: 4, translationString: `item.beetroot.name` }, reward: { tokenAmount: 3 } },
  { requiredItem: { item: MinecraftItemTypes.BeetrootSoup, amount: 1, translationString: `item.beetroot_soup.name` }, reward: { tokenAmount: 5 } },
  { requiredItem: { item: MinecraftItemTypes.MelonSlice, amount: 8, translationString: `item.melon.name` }, reward: { tokenAmount: 4 } },
  { requiredItem: { item: MinecraftItemTypes.Pumpkin, amount: 4, translationString: `tile.pumpkin.name` }, reward: { tokenAmount: 3 } },
  { requiredItem: { item: MinecraftItemTypes.Torchflower, amount: 1, translationString: `tile.torchflower.name` }, reward: { tokenAmount: 6 } },
  { requiredItem: { item: MinecraftItemTypes.PitcherPlant, amount: 1, translationString: `tile.pitcher_plant.name` }, reward: { tokenAmount: 6 } }
];
function PFERollQuest(item, player, questType) {
  let AddingQuest = questType.at(Math.round(Math.random() * questType.length)) ?? questType.at(0) ?? { requiredItem: new ItemStack5(MinecraftItemTypes.Dirt, 1), reward: { tokenAmount: 0, item: new ItemStack5(MinecraftItemTypes.Dirt, 1) } };
  item.keepOnDeath = true;
  PokeSaveProperty(PFEQuestPropertyID, item, JSON.stringify(AddingQuest), player, void 0);
}

// scripts/main.ts
system4.runInterval(() => {
  for (let player of world6.getAllPlayers()) {
    if (!player)
      continue;
    CheckEffects(player, PFEArmorEffectData, JSON.stringify(player.getTags()).includes(`novelty:poke`));
  }
}, 20);
world6.afterEvents.playerJoin.subscribe((data) => {
  let birthdays = JSON.parse(world6.getDynamicProperty(`poke:birthdays`).toString());
  system4.runTimeout(() => {
    world6.getAllPlayers().forEach((player) => {
      if (player.id == data.playerId) {
        let currentTime = new Date(Date.now() + PokeTimeZoneOffset(player));
        birthdays.forEach((birthday) => {
          if (birthday.day == currentTime.getDate() && birthday.month == currentTime.getMonth()) {
            let name = { text: birthday.name };
            if (birthday.style == "dev") {
              name.translate = `translation.poke:birthdayDev`;
            }
            if (birthday.name == player.name) {
              name.translate = `translation.poke:birthdayOwn`;
            } else if (birthday.name?.endsWith(`s`)) {
              name.text = `${birthday.name}'`;
            } else {
              name.text = `${birthday.name}'s`;
            }
            player.sendMessage({ translate: `translation.poke:birthdayAnnounce`, with: { rawtext: [PokeTimeGreeting(currentTime, player, void 0, true), { text: player.name }, name] } });
          }
        });
      }
    });
  }, 600);
});
function PFEHourTimeDownEvents() {
  let currentTime = new Date(Date.now());
  let allPlayers = world6.getAllPlayers();
  let randomPlayer = allPlayers.at(Math.abs(Math.round(Math.random() * (allPlayers.length - 1))));
  randomPlayer?.dimension.spawnEntity("poke:cassette_trader", randomPlayer.location).runCommand(`spreadplayers ~ ~ 30 40 @s ~10`);
}
function PFETimeValidation() {
  let currentTime = new Date(Date.now());
  if (currentTime.getMinutes() == 0) {
    PFEHourTimeDownEvents();
  } else {
    system4.runTimeout(() => {
      PFETimeValidation();
    }, Math.abs(60 - new Date(Date.now()).getSeconds()) * 20);
  }
}
function Post(data, up, down) {
  let Permutation = data.permutation;
  let Post2 = false;
  let PostCheckNorth = false;
  let PostCheckSouth = false;
  let PostCheckEast = false;
  let PostCheckWest = false;
  if (data.permutation.getState("poke:post_bit") == void 0)
    return;
  if (Permutation.getState("pfe:wall_n") == true) {
    PostCheckNorth = true;
  }
  if (Permutation.getState("pfe:wall_s") == true) {
    PostCheckSouth = true;
  }
  if (Permutation.getState("pfe:wall_e") == true) {
    PostCheckEast = true;
  }
  if (Permutation.getState("pfe:wall_w") == true) {
    PostCheckWest = true;
  }
  if (PostCheckNorth == false && PostCheckSouth == false && PostCheckEast == false && PostCheckWest == false)
    Post2 = true;
  if (PostCheckNorth == true && PostCheckSouth == false && PostCheckEast == false && PostCheckWest == false)
    Post2 = true;
  if (PostCheckNorth == false && PostCheckSouth == true && PostCheckEast == false && PostCheckWest == false)
    Post2 = true;
  if (PostCheckNorth == false && PostCheckSouth == false && PostCheckEast == true && PostCheckWest == false)
    Post2 = true;
  if (PostCheckNorth == false && PostCheckSouth == false && PostCheckEast == false && PostCheckWest == true)
    Post2 = true;
  if (PostCheckNorth && PostCheckEast || PostCheckNorth && PostCheckWest || PostCheckSouth && PostCheckEast || PostCheckSouth && PostCheckWest)
    Post2 = true;
  if (Post2) {
    if (Permutation.getState("poke:post_bit") === void 0)
      return;
    UpdatePost(data, true);
  } else {
    if (Permutation.getState("poke:post_bit") === void 0)
      return;
    UpdatePost(data, false);
  }
}
function UpdatePost(block, value, up) {
  if (!value) {
    let Post2 = false;
    let PostCheckNorth = false;
    let PostCheckSouth = false;
    let PostCheckEast = false;
    let PostCheckWest = false;
    if (block.permutation.getState("pfe:wall_n") == true) {
      PostCheckNorth = true;
    }
    if (block.permutation.getState("pfe:wall_s") == true) {
      PostCheckSouth = true;
    }
    if (block.permutation.getState("pfe:wall_e") == true) {
      PostCheckEast = true;
    }
    if (block.permutation.getState("pfe:wall_w") == true) {
      PostCheckWest = true;
    }
    if (!PostCheckNorth && !PostCheckSouth && !PostCheckEast && !PostCheckWest)
      Post2 = true;
    if (PostCheckNorth && !PostCheckSouth && PostCheckEast == false && !PostCheckWest)
      Post2 = true;
    if (!PostCheckNorth && PostCheckSouth && PostCheckEast == false && !PostCheckWest)
      Post2 = true;
    if (!PostCheckNorth && !PostCheckSouth && PostCheckEast && !PostCheckWest)
      Post2 = true;
    if (!PostCheckNorth && !PostCheckSouth && !PostCheckEast && PostCheckWest)
      Post2 = true;
    if (PostCheckNorth && PostCheckEast || PostCheckNorth && PostCheckWest || PostCheckSouth && PostCheckEast || PostCheckSouth && PostCheckWest)
      Post2 = true;
    if (Post2) {
      if (up) {
        if (block.above()?.hasTag(`pfe_wall`)) {
          UpdatePost(block.above(), true, true);
        }
      } else if (up === false) {
        if (block.below()?.hasTag(`pfe_wall`)) {
          UpdatePost(block.below(), true, false);
        }
      } else {
        if (block.above()?.hasTag(`pfe_wall`)) {
          UpdatePost(block.above(), true, true);
        }
        if (block.below()?.hasTag(`pfe_wall`)) {
          UpdatePost(block.below(), true, false);
        }
      }
      block.setPermutation(block.permutation.withState("poke:post_bit", true));
      return;
    }
  }
  if (up) {
    if (block.above()?.hasTag(`pfe_wall`)) {
      UpdatePost(block.above(), value, true);
    }
  } else if (up === false) {
    if (block.below()?.hasTag(`pfe_wall`)) {
      UpdatePost(block.below(), value, false);
    }
  } else {
    if (block.above()?.hasTag(`pfe_wall`)) {
      UpdatePost(block.above(), value, true);
    }
    if (block.below()?.hasTag(`pfe_wall`)) {
      UpdatePost(block.below(), value, false);
    }
  }
  block.setPermutation(block.permutation.withState("poke:post_bit", value));
}
world6.beforeEvents.worldInitialize.subscribe((data) => {
  world6.setDynamicProperty(`poke_pfe:existed`, true);
  system4.runTimeout(() => {
    PFETimeValidation();
    ComputersCompat.init();
  }, Math.abs(60 - new Date(Date.now()).getSeconds()) * 20);
  if (typeof world6.getDynamicProperty(PFEDisableConfigName) != "string") {
    world6.setDynamicProperty(PFEDisableConfigName, JSON.stringify(PFEDisableConfigDefault));
  }
  let birthdayProperty = world6.getDynamicProperty(`poke:birthdays`);
  if (typeof birthdayProperty != "string")
    world6.setDynamicProperty(`poke:birthdays`, `[]`);
  if (typeof world6.getDynamicProperty(`poke:customEvents`) != "string") {
    world6.setDynamicProperty(`poke:customEvents`, "[]");
  } else {
    try {
      JSON.parse(world6.getDynamicProperty(`poke:customEvents`)?.toString());
    } catch {
      world6.setDynamicProperty(`poke:customEvents`, "[]");
    }
  }
  data.itemComponentRegistry.registerCustomComponent(
    "poke:timeConfig",
    {
      onUse(data2) {
        PokeTimeConfigUIMainMenu(data2.source);
      }
    }
  );
  if (typeof world6.getDynamicProperty(PFEBossEventConfigName) == "string") {
    let settings = JSON.parse(world6.getDynamicProperty(PFEBossEventConfigName));
    if (typeof settings.ticks != "number" || typeof settings.furnaceGolem != "object" || typeof settings.knightling != "object" || typeof settings.listener != "object" || typeof settings.zombken != "object" || typeof settings.miniDemonicAllay != "object" || typeof settings.necromancer != "object" || typeof settings.snowman != "object" || typeof settings.sparky != "object" || typeof settings.superStriker != "object" || typeof settings.theLogger != "object") {
      world6.setDynamicProperty(PFEBossEventConfigName, JSON.stringify(PFEDefaultBossEventSettings));
    }
    ;
  } else {
    world6.setDynamicProperty(PFEBossEventConfigName, JSON.stringify(PFEDefaultBossEventSettings));
  }
  data.itemComponentRegistry.registerCustomComponent(
    `poke-pfe:identifier`,
    {
      onUseOn(data2) {
        if (data2.source.typeId == MinecraftEntityTypes.Player) {
          data2.source.sendMessage({ translate: `translation.poke-pfe:identifierMessage`, with: [data2.block.typeId] });
        }
      }
    }
  );
  data.itemComponentRegistry.registerCustomComponent(
    `poke:boltbow`,
    new PFEBoltBowsComponent()
  );
  data.itemComponentRegistry.registerCustomComponent(
    "poke:boss_event",
    {
      onUse(data2) {
        let options = JSON.parse(world6.getDynamicProperty(PFEDisableConfigName).toString());
        if (!options.bounty)
          return;
        if (PFEStartBossEvent() == 0) {
          data2.source.sendMessage({ translate: `translation.poke:bossEventNoSpawnError` });
          data2.source.playSound(`note.didgeridoo`, { pitch: 0.825 });
          return;
        }
        ;
        if (data2.source.getGameMode() == GameMode4.creative)
          return;
        data2.source.getComponent(EntityComponentTypes5.Equippable).setEquipment(EquipmentSlot5.Mainhand, PokeDecrementStack(data2.itemStack));
      }
    }
  );
  data.itemComponentRegistry.registerCustomComponent(
    "poke_pfe:quest",
    {
      onUse(data2) {
        if (!data2.itemStack)
          return;
        if (!data2.itemStack.getDynamicProperty(PFEQuestPropertyID)) {
          let questType = [];
          switch (data2.itemStack.typeId) {
            case `poke:mine_quest`: {
              questType = PFEMineQuests;
              break;
            }
            case `poke:kill_quest`: {
              questType = PFEKillQuests;
              break;
            }
            case `poke:farm_quest`: {
              questType = PFEFarmQuests;
              break;
            }
            case `poke:craft_quest`: {
              questType = PFECraftQuests;
              break;
            }
            default: {
            }
          }
          PFERollQuest(data2.itemStack, data2.source, questType);
        } else {
          let UI = new ActionFormData7();
          let quest = JSON.parse(data2.itemStack.getDynamicProperty(PFEQuestPropertyID).toString()) ?? console.warn(`Quest not found or failed to parse || poke_pfe:quest`);
          let validRequiredItems = PokeGetItemFromInventory(data2.source, void 0, quest.requiredItem.item) ?? false;
          let totalItems = 0;
          let canComplete = false;
          UI.title({ translate: `translation.poke_pfe.quest_info` });
          UI.body({
            rawtext: [
              { translate: `%translation.poke_pfe.items_needed:
- \xA7c${quest.requiredItem.amount}\xA7rx ` },
              { translate: quest.requiredItem.translationString },
              { translate: `
%translation.poke_pfe.quest_reward:
- \xA7c${quest.reward.tokenAmount}\xA7rx %poke_pfe.copper_token (%poke_pfe.tag)` }
            ]
          });
          if (validRequiredItems) {
            for (let item of validRequiredItems) {
              if (!item)
                continue;
              totalItems += item.amount;
              continue;
            }
          }
          if (validRequiredItems && quest.requiredItem.amount <= totalItems) {
            UI.button({ translate: `translation.poke_pfe.completeQuest` }, `textures/poke/common/confirm`);
            canComplete = true;
          } else
            UI.button({ translate: `translation.poke_pfe.missing_items` }, `textures/poke/common/chest_question`);
          UI.button({ translate: `translation.poke:bossEventClose` }, "textures/poke/common/close");
          UI.show(data2.source).then((response) => {
            let selection = 0;
            if (response.selection == selection && canComplete) {
              data2.source.runCommand(`clear @s ${quest.requiredItem.item} 0 ${quest.requiredItem.amount}`);
              if (quest.reward.item) {
                data2.source.dimension.spawnItem(quest.reward.item, data2.source.location);
              }
              data2.source.dimension.spawnItem(new ItemStack6(`poke:copper_token`, quest.reward.tokenAmount), data2.source.location);
            } else
              selection++;
            if (response.canceled || response.selection == selection) {
              return;
            }
          });
        }
      }
    }
  );
  data.itemComponentRegistry.registerCustomComponent(
    "poke:veinMiner",
    {
      onMineBlock(data2) {
        if (!data2.minedBlockPermutation.hasTag("minecraft:is_axe_item_destructible"))
          return;
        let dimension = data2.block.dimension;
        let location = data2.block.location;
        let toBreak = [
          { x: location.x + 1, y: location.y, z: location.z },
          { x: location.x - 1, y: location.y, z: location.z },
          { x: location.x, y: location.y + 1, z: location.z },
          { x: location.x, y: location.y - 1, z: location.z },
          { x: location.x, y: location.y, z: location.z + 1 },
          { x: location.x, y: location.y, z: location.z - 1 },
          { x: location.x, y: location.y + 1, z: location.z + 1 },
          { x: location.x, y: location.y + 1, z: location.z - 1 },
          { x: location.x + 1, y: location.y + 1, z: location.z },
          { x: location.x - 1, y: location.y + 1, z: location.z },
          { x: location.x + 1, y: location.y, z: location.z + 1 },
          { x: location.x + 1, y: location.y, z: location.z - 1 },
          { x: location.x - 1, y: location.y, z: location.z + 1 },
          { x: location.x - 1, y: location.y, z: location.z - 1 },
          { x: location.x + 1, y: location.y + 1, z: location.z + 1 },
          { x: location.x + 1, y: location.y + 1, z: location.z - 1 },
          { x: location.x - 1, y: location.y + 1, z: location.z + 1 },
          { x: location.x - 1, y: location.y + 1, z: location.z - 1 },
          { x: location.x + 1, y: location.y - 1, z: location.z + 1 },
          { x: location.x + 1, y: location.y - 1, z: location.z - 1 },
          { x: location.x - 1, y: location.y - 1, z: location.z + 1 },
          { x: location.x - 1, y: location.y - 1, z: location.z - 1 },
          { x: location.x, y: location.y - 1, z: location.z + 1 },
          { x: location.x, y: location.y - 1, z: location.z - 1 },
          { x: location.x + 1, y: location.y - 1, z: location.z },
          { x: location.x - 1, y: location.y - 1, z: location.z }
        ];
        let checked = /* @__PURE__ */ new Set();
        let max = 0;
        while (max < 256 && toBreak.length > 0) {
          location = toBreak.shift();
          let key = `${location.x},${location.y},${location.z}`;
          if (checked.has(key)) {
            continue;
          }
          ;
          checked.add(key);
          let currentBlock = void 0;
          try {
            currentBlock = dimension.getBlock(location);
          } catch (error) {
            continue;
          }
          if (data2.minedBlockPermutation.matches(currentBlock.typeId)) {
            dimension.runCommand(`setblock ${location.x} ${location.y} ${location.z} air destroy`);
            max = max + 1;
            let adjacent = [
              { x: location.x + 1, y: location.y, z: location.z },
              { x: location.x - 1, y: location.y, z: location.z },
              { x: location.x, y: location.y + 1, z: location.z },
              { x: location.x, y: location.y - 1, z: location.z },
              { x: location.x, y: location.y, z: location.z + 1 },
              { x: location.x, y: location.y, z: location.z - 1 },
              { x: location.x, y: location.y + 1, z: location.z + 1 },
              { x: location.x, y: location.y + 1, z: location.z - 1 },
              { x: location.x + 1, y: location.y + 1, z: location.z },
              { x: location.x - 1, y: location.y + 1, z: location.z },
              { x: location.x + 1, y: location.y, z: location.z + 1 },
              { x: location.x + 1, y: location.y, z: location.z - 1 },
              { x: location.x - 1, y: location.y, z: location.z + 1 },
              { x: location.x - 1, y: location.y, z: location.z - 1 },
              { x: location.x + 1, y: location.y + 1, z: location.z + 1 },
              { x: location.x + 1, y: location.y + 1, z: location.z - 1 },
              { x: location.x - 1, y: location.y + 1, z: location.z + 1 },
              { x: location.x - 1, y: location.y + 1, z: location.z - 1 },
              { x: location.x + 1, y: location.y - 1, z: location.z + 1 },
              { x: location.x + 1, y: location.y - 1, z: location.z - 1 },
              { x: location.x - 1, y: location.y - 1, z: location.z + 1 },
              { x: location.x - 1, y: location.y - 1, z: location.z - 1 },
              { x: location.x, y: location.y - 1, z: location.z + 1 },
              { x: location.x, y: location.y - 1, z: location.z - 1 },
              { x: location.x + 1, y: location.y - 1, z: location.z },
              { x: location.x - 1, y: location.y - 1, z: location.z }
            ];
            for (let loc of adjacent) {
              toBreak.push(loc);
            }
          }
        }
      }
    }
  );
  data.itemComponentRegistry.registerCustomComponent(
    "poke:normalMining",
    {
      onMineBlock(data2) {
        PokeDamageItemUB(data2.itemStack, void 0, data2.source, EquipmentSlot5.Mainhand);
        return;
      }
    }
  );
  data.itemComponentRegistry.registerCustomComponent(
    "poke:shootProjectile",
    {
      onUse(data2) {
        if (data2.itemStack == void 0)
          return;
        if (data2.itemStack.typeId == "poke:nuke_ring") {
          let options = JSON.parse(world6.getDynamicProperty(PFEDisableConfigName).toString());
          if (!options.nukeRing)
            return;
        }
        const headLocate = data2.source.getHeadLocation();
        const pTag = data2.itemStack.getTags();
        const angle = data2.source.getViewDirection();
        const projEntity = data2.source.dimension.spawnEntity("" + pTag, headLocate);
        const projComp = projEntity.getComponent("projectile");
        data2.source.playSound("random.bow");
        projComp.owner = data2.source;
        projComp.shoot(angle);
        PokeDamageItemUB(data2.itemStack, void 0, data2.source, EquipmentSlot5.Mainhand);
        return;
      }
    }
  );
  data.itemComponentRegistry.registerCustomComponent(
    "poke:hitEffects",
    {
      onHitEntity(data2) {
        switch (data2.itemStack?.typeId) {
          case "poke:demonic_sword": {
            data2.hitEntity.addEffect("slowness", 100, { amplifier: 3 });
            return;
          }
          case "poke:hellish_blade": {
            data2.hitEntity.addEffect("slowness", 40, { amplifier: 3 });
            return;
          }
          case "poke:godly_sword": {
            data2.attackingEntity.addEffect("strength", 100, { amplifier: 2 });
            return;
          }
          case "poke:holy_sword": {
            data2.attackingEntity.addEffect("strength", 40, { amplifier: 1 });
            return;
          }
          case "poke:astral_sword": {
            data2.attackingEntity.addEffect("strength", 100, { amplifier: 2 });
            return;
          }
          case "poke:shade_sword": {
            data2.hitEntity.addEffect("slowness", 40, { amplifier: 2 });
            data2.hitEntity.addEffect("wither", 60, { amplifier: 1 });
            return;
          }
          case "poke:radium_sword": {
            data2.hitEntity.addEffect("slowness", 220, { amplifier: 3 });
            data2.hitEntity.addEffect("wither", 240, { amplifier: 4 });
            return;
          }
          case "poke:amethyst_scythe": {
            data2.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 100, { amplifier: 4 });
            data2.hitEntity.addEffect("blindness", 20);
            return;
          }
          case "poke:demonic_slasher": {
            data2.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 100, { amplifier: 7 });
            data2.hitEntity.addEffect("wither", 80, { amplifier: 1 });
            return;
          }
          case "poke:gold_scythe": {
            data2.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 100, { amplifier: 2 });
            data2.attackingEntity.addEffect("haste", 600, { amplifier: 2 });
            return;
          }
          case "poke:emerald_scythe": {
            data2.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 100, { amplifier: 2 });
            data2.attackingEntity.addEffect("village_hero", 2400, { amplifier: 1 });
            return;
          }
          case "poke:iron_scythe": {
            data2.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 100, { amplifier: 2 });
            return;
          }
          case "poke:onyx_scythe": {
            data2.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 200, { amplifier: 5 });
            data2.attackingEntity.addEffect("jump_boost", 100, { amplifier: 2 });
            data2.hitEntity.addEffect("weakness", 120, { amplifier: 2 });
            return;
          }
          case "poke:godly_scythe": {
            data2.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 200, { amplifier: 6 });
            data2.attackingEntity.addEffect("slow_falling", 2400);
            data2.attackingEntity.addEffect("jump_boost", 1200, { amplifier: 3 });
            return;
          }
          case "poke:hellish_scythe": {
            data2.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 100, { amplifier: 7 });
            data2.attackingEntity.addEffect(MinecraftEffectTypes.FireResistance, 2400);
            data2.hitEntity.addEffect("mining_fatigue", 400, { amplifier: 1 });
            return;
          }
          case "poke:holy_scythe": {
            data2.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 200, { amplifier: 6 });
            data2.attackingEntity.addEffect("slow_falling", 2400, { amplifier: 1 });
            data2.hitEntity.addEffect("darkness", 400);
            return;
          }
          case "poke:shade_scythe": {
            data2.attackingEntity.addEffect("absorption", 600, { amplifier: 1 });
            data2.attackingEntity.addEffect("strength", 100, { amplifier: 1 });
            data2.hitEntity.addEffect("slowness", 160, { amplifier: 2 });
            return;
          }
          case "poke:diamond_scythe": {
            data2.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 160, { amplifier: 3 });
            data2.hitEntity.addEffect("weakness", 100, { amplifier: 1 });
            data2.hitEntity.addEffect("blindness", 80);
            return;
          }
          case "poke:netherite_scythe": {
            data2.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 160, { amplifier: 3 });
            data2.hitEntity.addEffect("hunger", 120, { amplifier: 1 });
            data2.hitEntity.addEffect("slowness", 80, { amplifier: 2 });
            return;
          }
          case "poke:radium_scythe": {
            data2.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 100, { amplifier: 5 });
            data2.hitEntity.addEffect("nausea", 80, { amplifier: 1 });
            data2.hitEntity.addEffect("fatal_poison", 160, { amplifier: 2 });
            return;
          }
          case "poke:medic_scythe": {
            data2.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 100, { amplifier: 6 });
            data2.attackingEntity.addEffect("health_boost", 2400, { amplifier: 2 });
            return;
          }
          case "poke:galactic_scythe": {
            data2.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 100, { amplifier: 9 });
            data2.attackingEntity.addEffect(MinecraftEffectTypes.FireResistance, 300);
            data2.hitEntity.addEffect("wither", 80, { amplifier: 2 });
            data2.hitEntity.addEffect("weakness", 80, { amplifier: 2 });
            return;
          }
          case "poke:astral_scythe": {
            data2.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 120, { amplifier: 9 });
            data2.attackingEntity.addEffect(MinecraftEffectTypes.FireResistance, 300);
            data2.hitEntity.addEffect("wither", 120, { amplifier: 2 });
            data2.hitEntity.addEffect("weakness", 120, { amplifier: 3 });
            return;
          }
          case "poke:ember_scythe": {
            data2.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 100, { amplifier: 6 });
            data2.hitEntity.addEffect("nausea", 80, { amplifier: 1 });
            data2.hitEntity.addEffect("blindness", 80);
            return;
          }
          case "poke:void_scythe": {
            data2.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 200, { amplifier: 6 });
            data2.hitEntity.runCommand("function poke/pfe/void_scythe");
            return;
          }
          case "poke:death_scythe": {
            data2.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 200, { amplifier: 6 });
            data2.hitEntity.runCommand("function poke/pfe/death_scythe");
            return;
          }
          case "poke:nebula_scythe": {
            data2.attackingEntity.runCommand("function poke/pfe/nebula_scythe");
            data2.hitEntity.addEffect("wither", 80, { amplifier: 3 });
            return;
          }
          case "poke:cobalt_scythe": {
            data2.attackingEntity.addEffect(MinecraftEffectTypes.Speed, 100, { amplifier: 6 });
            data2.hitEntity.addEffect("wither", 40, { amplifier: 1 });
            return;
          }
          case "poke:nebula_sword": {
            data2.attackingEntity.addEffect("strength", 40, { amplifier: 4 });
            data2.hitEntity.addEffect("weakness", 20, { amplifier: 2 });
            return;
          }
          case "poke:ban_hammer": {
            data2.attackingEntity.addEffect("strength", 40, { amplifier: 1 });
            return;
          }
          case "poke:circuit_sword": {
            data2.attackingEntity.runCommand("function poke/pfe/circuit_sword");
            data2.hitEntity.addEffect("blindness", 100);
            return;
          }
        }
        return;
      }
    }
  );
  data.itemComponentRegistry.registerCustomComponent(
    "poke:consumeEffects",
    {
      onConsume(data2) {
        switch (data2.itemStack.typeId) {
          case "poke:xp_vial":
            {
              data2.source.runCommandAsync("xp 160 @s");
              return;
            }
            ;
          case "poke:cobalt_potion": {
            data2.source.addEffect(MinecraftEffectTypes.NightVision, 3600);
            data2.source.addEffect(MinecraftEffectTypes.Regeneration, 2400);
          }
          case "poke:cobalt_soup":
            {
              data2.source.addEffect(MinecraftEffectTypes.NightVision, 2400, { showParticles: false });
              return;
            }
            ;
          case "poke:root_beer":
            {
              data2.source.addEffect(MinecraftEffectTypes.Speed, 600, { amplifier: 4 });
              return;
            }
            ;
          case "poke:pumpkin_spice":
            {
              data2.source.addEffect(MinecraftEffectTypes.Invisibility, 600);
              data2.source.addEffect(MinecraftEffectTypes.Speed, 600, { amplifier: 4 });
              return;
            }
            ;
          case "poke:crimson_sporeshroom_stew":
            {
              data2.source.addEffect(MinecraftEffectTypes.FireResistance, 1200);
              return;
            }
            ;
          case "poke:warped_sporeshroom_stew":
            {
              data2.source.addEffect(MinecraftEffectTypes.FireResistance, 1200);
              return;
            }
            ;
          case "poke:hellish_soup":
            {
              data2.source.addEffect(MinecraftEffectTypes.FireResistance, 1200);
              return;
            }
            ;
          case "poke:nebula_noodles":
            {
              data2.source.addEffect(MinecraftEffectTypes.Strength, 600, { amplifier: 7 });
              return;
            }
            ;
          case "poke:milk_bottle":
            {
              data2.source.runCommandAsync("effect @s clear");
              return;
            }
            ;
          case "poke:demonic_potion":
            {
              data2.source.runCommandAsync("function poke/pfe/demonic_potion");
              return;
            }
            ;
          case "poke:hellish_potion":
            {
              data2.source.runCommandAsync("function poke/pfe/hellish_potion");
              return;
            }
            ;
          case "poke:nebula_potion":
            {
              data2.source.runCommandAsync("function poke/pfe/nebula_potion");
              return;
            }
            ;
          case "poke:void_potion":
            {
              data2.source.runCommandAsync("function poke/pfe/void_potion");
              return;
            }
            ;
          case "poke:death_potion":
            {
              data2.source.kill();
              return;
            }
            ;
          case "poke:rotten_chicken":
            {
              data2.source.addEffect(MinecraftEffectTypes.Nausea, 400);
              return;
            }
            ;
          case "poke:golden_chicken":
            {
              data2.source.addEffect(MinecraftEffectTypes.VillageHero, 400, { amplifier: 1 });
              return;
            }
            ;
          case "poke:banished_star_x10":
            {
              data2.source.runCommandAsync("damage @a[r=100] 32767000 entity_attack entity @s");
              return;
            }
            ;
          case "poke:banished_star_x9":
            {
              data2.source.runCommandAsync("damage @s 32767000 entity_attack");
              return;
            }
            ;
        }
        return;
      }
    }
  );
  data.itemComponentRegistry.registerCustomComponent(
    "poke_pfe:config",
    {
      onUse(data2) {
        if (data2.source.getGameMode() == GameMode4.creative || data2.source.hasTag(`poke:config`)) {
          let UI = new ActionFormData7();
          UI.button({ translate: `translation.poke_pfe.bossEventConfig` }, `textures/poke/common/spawn_enabled`);
          UI.button({ translate: `translation.poke_pfe.disableConfig` }, `textures/poke/common/blacklist_add`);
          UI.show(data2.source).then((response) => {
            let selection = 0;
            if (response.selection == selection) {
              if (world6.getDynamicProperty(PFEBossEventConfigName) == void 0) {
                world6.setDynamicProperty(PFEBossEventConfigName, JSON.stringify(PFEDefaultBossEventSettings));
              }
              PFEBossEventUIMainMenu(data2.source);
              return;
            } else
              selection++;
            if (response.selection == selection) {
              PFEDisableConfigMainMenu(data2);
            } else
              selection++;
            if (response.selection == selection || response.canceled) {
              return;
            }
          });
        } else {
          let UI = new ActionFormData7();
          UI.title({ translate: `translation.poke_pfe.insufficientPerms` });
          UI.body({ rawtext: [{ translate: `translation.poke_pfe.insufficientPerms.desc` }, { text: `poke:config

` }, { translate: `translation.poke_pfe.insufficientPerms.desc2` }, { text: `
/tag @s add poke:config` }] });
          UI.button({ translate: `translation.poke:bossEventClose` }, `textures/poke/common/close`);
          UI.show(data2.source).then((response) => {
            return;
          });
          return;
        }
      }
    }
  );
  data.itemComponentRegistry.registerCustomComponent(
    "poke:haxelMining",
    new PFEHaxelMining()
  );
  data.itemComponentRegistry.registerCustomComponent(
    "poke:cc_dodge",
    {
      onUse(data2) {
        if (data2.itemStack === void 0)
          return;
        const cooldownComponent = data2.itemStack.getComponent("minecraft:cooldown");
        const equippableComponent = data2.source.getComponent(EntityComponentTypes5.Equippable);
        const moveDir = data2.source.getVelocity();
        var amount = data2.itemStack.amount;
        data2.source.spawnParticle("minecraft:wind_explosion_emitter", data2.source.location);
        data2.source.applyKnockback(moveDir.x, moveDir.z, 5, moveDir.y + 0.5);
        data2.source.playSound("component.jump_to_block");
        if (data2.source.getGameMode() == GameMode4.creative)
          return;
        cooldownComponent.startCooldown(data2.source);
        if (amount <= 1) {
          equippableComponent.setEquipment(EquipmentSlot5.Mainhand, new ItemStack6("minecraft:air", 1));
          return;
        }
        equippableComponent.setEquipment(EquipmentSlot5.Mainhand, new ItemStack6(data2.itemStack.typeId, amount - 1));
        return;
      }
    }
  );
  data.itemComponentRegistry.registerCustomComponent(
    "poke:cc_bowAim",
    {
      onUse(data2) {
        const cPlayers = data2.source.dimension.getPlayers({ excludeNames: ["" + data2.source.name] });
        var cPlayersLength = cPlayers.length;
        for (var i = cPlayersLength; i > 0; i--) {
        }
        return;
      }
    }
  );
  data.itemComponentRegistry.registerCustomComponent(
    "poke:cc_crossbowAim",
    {
      onUse(data2) {
        const cPlayers = data2.source.dimension.getPlayers({ excludeNames: ["" + data2.source.name] });
        var cPlayersLength = cPlayers.length;
        data2.source.playAnimation("animation.player.first_person.crossbow_equipped", { stopExpression: "!q.is_using_item", players: [data2.source.name + ""] });
        for (var i = cPlayersLength; i > 0; i--) {
          data2.source.playAnimation("third_person_crossbow_equipped", { stopExpression: "!q.is_using_item", players: [cPlayers[i - 1].name] });
        }
        return;
      }
    }
  );
  data.itemComponentRegistry.registerCustomComponent(
    "poke:cc_spawnEgg",
    {
      onUseOn(data2) {
        if (data2.itemStack.typeId == "poke:wither_spawner") {
          let options = JSON.parse(world6.getDynamicProperty(PFEDisableConfigName).toString());
          if (!options.witherSpawner)
            return;
        }
        const player = data2.source;
        const faceLoc = data2.faceLocation;
        const blockFace = data2.blockFace;
        let faceLocX = --faceLoc.x;
        let faceLocY = --faceLoc.y;
        let faceLocZ = --faceLoc.z;
        var amount = data2.itemStack.amount;
        const equippableComponent = data2.source.getComponent(EntityComponentTypes5.Equippable);
        switch (blockFace) {
          case Direction2.North: {
            faceLocZ += 1.5;
            break;
          }
          case Direction2.South: {
            faceLocZ += -1.5;
            break;
          }
          case Direction2.East: {
            faceLocX += -1.5;
            break;
          }
          case Direction2.West: {
            faceLocX += 1.5;
            break;
          }
          case Direction2.Up: {
            faceLocY += -1.5;
            break;
          }
          case Direction2.Down: {
            faceLocY += 2;
            break;
          }
        }
        const vec3 = { x: -faceLocX, y: -faceLocY, z: -faceLocZ };
        const mobId = data2.itemStack.getTags();
        player.dimension.spawnEntity("" + mobId, vec3);
        if (player.getGameMode() == "creative")
          return;
        if (amount <= 1) {
          equippableComponent.setEquipment(EquipmentSlot5.Mainhand, new ItemStack6("minecraft:air", 1));
          return;
        }
        equippableComponent.setEquipment(EquipmentSlot5.Mainhand, new ItemStack6(data2.itemStack.typeId, amount - 1));
        return;
      }
    }
  );
  data.itemComponentRegistry.registerCustomComponent(
    "poke:cas",
    {
      onUse(data2) {
        const id = data2.itemStack.typeId;
        const trackId = id.substring(id.lastIndexOf("_")).substring(1);
        if (data2.source.isSneaking) {
          data2.source.queueMusic(`poke.record.${trackId}`);
          data2.source.playSound("poke.cassette_activate");
          data2.source.sendMessage({ translate: `translation.poke:trackQueued` });
          return;
        } else {
          data2.source.playMusic(`poke.record.${trackId}`, { fade: 2.5 });
          data2.source.playSound("poke.cassette_activate");
        }
        return;
      }
    }
  );
  data.itemComponentRegistry.registerCustomComponent(
    "poke:cc_on_use",
    {
      onUse(data2) {
        if (data2.itemStack === void 0)
          return;
        if (PFEDisabledOnUseItems.includes(data2.itemStack.typeId)) {
          let options = JSON.parse(world6.getDynamicProperty(PFEDisableConfigName).toString());
          switch (true) {
            case (data2.itemStack.typeId == "poke:quantum_teleporter" && !options.quantumTeleporter):
              return;
            case (data2.itemStack.typeId == "poke:sundial" && !options.sundial):
              return;
            case (data2.itemStack.typeId == "poke:kapow_ring" && !options.kapowRing):
              return;
          }
        }
        const ItemTags = data2.itemStack.getTags().toString();
        let Command = ItemTags.substring(ItemTags.indexOf("pfe:Command:"), ItemTags.indexOf(":pfeCommandEnd")).substring(12);
        data2.source.runCommand(`${Command}`);
        const cooldownComp = data2.itemStack.getComponent("minecraft:cooldown");
        if (cooldownComp != void 0)
          cooldownComp.startCooldown(data2.source);
        if (data2.itemStack.isStackable) {
          return;
        }
        PokeDamageItemUB(data2.itemStack, void 0, data2.source, EquipmentSlot5.Mainhand);
        return;
      }
    }
  );
  data.itemComponentRegistry.registerCustomComponent(
    "poke:cc_zooka",
    {
      onUse(data2) {
        if (data2.itemStack === void 0)
          return;
        const vierDirection = data2.source.getViewDirection();
        const location = data2.source.getHeadLocation();
        const id = data2.itemStack.getTags();
        const cooldownComp = data2.itemStack.getComponent("minecraft:cooldown");
        if (data2.itemStack.typeId == "poke:windzooka") {
          data2.source.applyKnockback(vierDirection.x, vierDirection.z, -7, -vierDirection.y * 4);
          data2.source.playSound("wind_charge.burst");
          data2.source.spawnParticle("minecraft:wind_explosion_emitter", location);
        } else {
          if (vierDirection.y > 0.99)
            data2.source.applyKnockback(vierDirection.x, vierDirection.z, 7, -vierDirection.y * -4);
          else
            data2.source.applyKnockback(vierDirection.x, vierDirection.z, 7, -vierDirection.y * -4);
          data2.source.playSound("wind_charge.burst");
          data2.source.spawnParticle("minecraft:wind_explosion_emitter", location);
          data2.source.spawnParticle("poke:blazooka_flame", location);
        }
        data2.source.runCommand("" + id);
        cooldownComp.startCooldown(data2.source);
        PokeDamageItemUB(data2.itemStack, void 0, data2.source, EquipmentSlot5.Mainhand);
        return;
      }
    }
  );
  data.itemComponentRegistry.registerCustomComponent(
    "poke-pfe:upgrader",
    {
      onUseOn(data2) {
        let tagData = data2.itemStack.getTags().toString();
        let componentInfo = JSON.parse(tagData.substring(tagData.indexOf(`poke-pfe:UpgraderInfo:`), tagData.lastIndexOf(`:poke-pfe:UpgraderInfoEnd`)).substring(22));
        let multi = 1;
        if (componentInfo.canUpgrade.includes(data2.block.typeId)) {
          const block_location = `${data2.block.x} ${data2.block.y} ${data2.block.z}`;
          const itemIds = data2.itemStack.typeId;
          const itemId = itemIds.substring(5);
          data2.source.runCommandAsync(`execute positioned ${block_location} run function poke/pfe/${itemId}`);
        } else {
          multi = 0;
        }
        PokeDamageItemUB(data2.itemStack, multi, data2.source, EquipmentSlot5.Mainhand);
        return;
      }
    }
  );
  data.blockComponentRegistry.registerCustomComponent(
    "poke:trapdoor_event",
    {
      onPlayerInteract(data2) {
        const blockLocation = `${data2.block.location.x} ${data2.block.location.y} ${data2.block.location.z}`;
        if (data2.block.permutation.hasTag("pfe_trapdoor_open") == true) {
          data2.block.setPermutation(data2.block.permutation.withState("poke:trapdoor_open", "no"));
          data2.block.dimension.playSound(`open.iron_trapdoor`, data2.block.center());
          return;
        } else {
          data2.block.setPermutation(data2.block.permutation.withState("poke:trapdoor_open", "yes"));
          data2.block.dimension.playSound(`close.iron_trapdoor`, data2.block.center());
          return;
        }
      }
    }
  );
  data.blockComponentRegistry.registerCustomComponent(
    "poke:fortune",
    {
      onPlayerDestroy(data2) {
        const equippableComponent = data2.player?.getComponent(EntityComponentTypes5.Equippable);
        if (equippableComponent === void 0)
          return;
        if (!equippableComponent.getEquipment(EquipmentSlot5.Mainhand)?.hasComponent(ItemComponentTypes4.Enchantable))
          return;
        const enchantableComponent = equippableComponent.getEquipment(EquipmentSlot5.Mainhand)?.getComponent(ItemComponentTypes4.Enchantable);
        if (!enchantableComponent.hasEnchantment(MinecraftEnchantmentTypes.Fortune))
          return;
        let fortuneLevel = enchantableComponent.getEnchantment(MinecraftEnchantmentTypes.Fortune).level;
        let rng = Math.round(Math.random());
        const blockLocation = `${data2.block.x} ${data2.block.y} ${data2.block.z}`;
        const blockId = data2.destroyedBlockPermutation.type.id.substring(5);
        if (data2.player?.getGameMode() == GameMode4.survival) {
          if (fortuneLevel == 3) {
            data2.block.dimension.runCommandAsync(`execute positioned ${blockLocation} run loot spawn ~~~ loot "poke/pfe/${blockId}.loot"`);
            data2.block.dimension.runCommandAsync(`execute positioned ${blockLocation} run loot spawn ~~~ loot "poke/pfe/${blockId}.loot"`);
            if (rng == 0)
              return;
            data2.block.dimension.runCommandAsync(`execute positioned ${blockLocation} run loot spawn ~~~ loot "poke/pfe/${blockId}.loot"`);
            return;
          }
          if (fortuneLevel == 2) {
            data2.block.dimension.runCommandAsync(`execute positioned ${blockLocation} run loot spawn ~~~ loot "poke/pfe/${blockId}.loot"`);
            if (rng == 0)
              return;
            data2.block.dimension.runCommandAsync(`execute positioned ${blockLocation} run loot spawn ~~~ loot "poke/pfe/${blockId}.loot"`);
            return;
          }
          if (fortuneLevel == 1) {
            if (rng == 0)
              return;
            data2.block.dimension.runCommandAsync(`execute positioned ${blockLocation} run loot spawn ~~~ loot "poke/pfe/${blockId}.loot"`);
            return;
          }
          return;
        }
        return;
      }
    }
  );
  data.blockComponentRegistry.registerCustomComponent(
    "poke:slabs",
    {
      onPlayerInteract(data2) {
        if (data2.block.permutation.getState("poke:double") == true)
          return;
        const blockLocation = `${data2.block.location.x} ${data2.block.location.y} ${data2.block.location.z}`;
        const slabId = data2.block.typeId;
        const equippableComponent = data2.player.getComponent(EntityComponentTypes5.Equippable);
        const mainhand = equippableComponent.getEquipment(EquipmentSlot5.Mainhand);
        if (mainhand != void 0) {
          if (mainhand.typeId == slabId && (data2.block.permutation.getState("minecraft:vertical_half") == "bottom" && data2.face == Direction2.Up || data2.block.permutation.getState("minecraft:vertical_half") == "top" && data2.face == Direction2.Down) && data2.block.permutation.getState("poke:double") == false) {
            var itemStackAmount = mainhand.amount - 1;
            data2.block.setPermutation(data2.block.permutation.withState("poke:double", true));
            data2.block.dimension.playSound(`use.stone`, data2.block.center());
            if (data2.player?.getGameMode() == "creative")
              return;
            if (itemStackAmount <= 0) {
              equippableComponent.setEquipment(EquipmentSlot5.Mainhand, new ItemStack6("minecraft:air", 1));
              return;
            }
            equippableComponent.setEquipment(EquipmentSlot5.Mainhand, new ItemStack6(slabId, itemStackAmount));
            return;
          } else
            return;
        }
        return;
      }
    }
  );
  data.blockComponentRegistry.registerCustomComponent(
    "poke:cc_bulbs",
    {
      onPlayerInteract(data2) {
        const block_location = `${data2.block.x} ${data2.block.y} ${data2.block.z}`;
        let light_color = data2.block.permutation.getState("pfe:color");
        let sound_pitch = 1 + light_color / 10;
        if (data2.block.permutation.getState("pfe:color") == 15) {
          data2.block.setPermutation(data2.block.permutation.withState("pfe:color", 0));
          data2.block.dimension.runCommandAsync(`playsound block.copper_bulb.turn_on @a  ${block_location} 1 ${sound_pitch}`);
          ComputersCompat.addStat(`bulb_color_changes`, 1);
          return;
        } else {
          data2.block.setPermutation(
            data2.block.permutation.withState("pfe:color", light_color + 1)
          );
          data2.block.dimension.runCommandAsync(`playsound block.copper_bulb.turn_on @a ${block_location} 1 ${sound_pitch}`);
          ComputersCompat.addStat(`bulb_color_changes`, 1);
          return;
        }
      }
    }
  );
  data.blockComponentRegistry.registerCustomComponent(
    "poke:cc_phantomic_conduit",
    {
      onTick(data2) {
        var block_location_x = data2.block.x;
        var block_location_y = data2.block.y;
        var block_location_z = data2.block.z;
        if (data2.block.getRedstonePower() != 0 && data2.block.getRedstonePower() !== void 0) {
          data2.block.setPermutation(data2.block.permutation.withState("pfe:active", 1));
          data2.dimension.runCommand("execute positioned " + block_location_x + " " + block_location_y + " " + block_location_z + " as @e[r=50,family=phantom] run damage @s 20");
          return;
        }
        if (data2.block.getRedstonePower() == 0 && data2.block.getRedstonePower() !== void 0) {
          data2.block.setPermutation(data2.block.permutation.withState("pfe:active", 0));
          return;
        }
        return;
      }
    }
  );
  data.blockComponentRegistry.registerCustomComponent(
    "poke:cc_da_conduit",
    {
      onTick(data2) {
        const block_location = `${data2.block.x} ${data2.block.y} ${data2.block.z}`;
        if (data2.block.getRedstonePower() != 0 && data2.block.getRedstonePower() !== void 0) {
          data2.block.setPermutation(data2.block.permutation.withState("pfe:active", 1));
          data2.dimension.runCommand("execute positioned " + block_location + " as @e[r=50,family=pfe:demonic_allay] run damage @s 20");
          return;
        }
        if (data2.block.getRedstonePower() == 0 && data2.block.getRedstonePower() !== void 0) {
          data2.block.setPermutation(data2.block.permutation.withState("pfe:active", 0));
          return;
        }
        return;
      }
    }
  );
  data.blockComponentRegistry.registerCustomComponent(
    "poke:cc_cobble_gen",
    {
      onTick(data2) {
        if (data2.block.getRedstonePower() != 0 && data2.block.getRedstonePower() !== void 0) {
          data2.block.setPermutation(data2.block.permutation.withState("pfe:active", 1));
          if (data2.block.above()?.typeId != "minecraft:air")
            return;
          data2.block.above()?.setType("minecraft:cobblestone");
          return;
        }
        if (data2.block.getRedstonePower() == 0 && data2.block.getRedstonePower() !== void 0) {
          data2.block.setPermutation(data2.block.permutation.withState("pfe:active", 0));
          return;
        }
        return;
      }
    }
  );
  data.blockComponentRegistry.registerCustomComponent(
    "poke:cc_cobbler",
    {
      onTick(data2) {
        const block_location = `${data2.block.x} ${data2.block.y} ${data2.block.z}`;
        if (data2.block.getRedstonePower() != 0 && data2.block.getRedstonePower() !== void 0) {
          data2.block.setPermutation(data2.block.permutation.withState("pfe:active", 1));
          data2.dimension.runCommand(`execute positioned ${block_location} run structure load poke:cobblestone_item ~ ~-1 ~`);
          return;
        }
        if (data2.block.getRedstonePower() == 0 && data2.block.getRedstonePower() !== void 0) {
          data2.block.setPermutation(data2.block.permutation.withState("pfe:active", 0));
          return;
        }
        return;
      }
    }
  );
  data.blockComponentRegistry.registerCustomComponent(
    "poke:cc_block_breaker",
    {
      onTick(data2) {
        const block_location = `${data2.block.x} ${data2.block.y} ${data2.block.z}`;
        if (data2.block.getRedstonePower() != 0 && data2.block.getRedstonePower() !== void 0) {
          data2.block.setPermutation(data2.block.permutation.withState("pfe:active", 1));
          data2.dimension.runCommand(`execute positioned ${block_location} unless block ~ ~-1 ~ bedrock run setblock ~ ~-1 ~ air destroy`);
          return;
        }
        if (data2.block.getRedstonePower() == 0 && data2.block.getRedstonePower() !== void 0) {
          data2.block.setPermutation(data2.block.permutation.withState("pfe:active", 0));
          return;
        }
        return;
      }
    }
  );
  data.blockComponentRegistry.registerCustomComponent(
    "poke:cc_dirter",
    {
      onTick(data2) {
        if (data2.block.getRedstonePower() != 0 && data2.block.getRedstonePower() !== void 0) {
          data2.block.setPermutation(data2.block.permutation.withState("pfe:active", 1));
          switch (data2.block.typeId) {
            case "poke:dirter_east": {
              if (data2.block.east()?.typeId == "minecraft:cobblestone") {
                data2.block.east()?.setType("minecraft:dirt");
                break;
              }
            }
            case "poke:dirter_west": {
              if (data2.block.west()?.typeId == "minecraft:cobblestone") {
                data2.block.west()?.setType("minecraft:dirt");
                break;
              }
            }
            case "poke:dirter_south": {
              if (data2.block.south()?.typeId == "minecraft:cobblestone") {
                data2.block.south()?.setType("minecraft:dirt");
                break;
              }
            }
            case "poke:dirter_north": {
              if (data2.block.north()?.typeId == "minecraft:cobblestone") {
                data2.block.north()?.setType("minecraft:dirt");
                break;
              }
            }
            case "poke:dirter_up": {
              if (data2.block.above()?.typeId == "minecraft:cobblestone") {
                data2.block.above()?.setType("minecraft:dirt");
                break;
              }
            }
            case "poke:dirter_down": {
              if (data2.block.below()?.typeId == "minecraft:cobblestone") {
                data2.block.below()?.setType("minecraft:dirt");
                break;
              }
            }
            case "poke:dirter": {
              if (data2.block.below()?.typeId == "minecraft:cobblestone") {
                data2.block.below()?.setType("minecraft:dirt");
                return;
              }
            }
          }
          return;
        }
        if (data2.block.getRedstonePower() == 0 && data2.block.getRedstonePower() !== void 0) {
          data2.block.setPermutation(data2.block.permutation.withState("pfe:active", 0));
          return;
        }
        return;
      }
    }
  );
  data.blockComponentRegistry.registerCustomComponent(
    "poke:cc_duster",
    {
      onTick(data2) {
        if (data2.block.getRedstonePower() != 0 && data2.block.getRedstonePower() !== void 0) {
          data2.block.setPermutation(data2.block.permutation.withState("pfe:active", 1));
          switch (data2.block.typeId) {
            case "poke:duster_east": {
              if (data2.block.east()?.typeId == "minecraft:dirt") {
                data2.block.east()?.setType("minecraft:sand");
                break;
              }
              if (data2.block.east()?.typeId == "minecraft:cobblestone") {
                data2.block.east()?.setType("minecraft:gravel");
                break;
              }
            }
            case "poke:duster_west": {
              if (data2.block.west()?.typeId == "minecraft:dirt") {
                data2.block.west()?.setType("minecraft:sand");
                break;
              }
              if (data2.block.west()?.typeId == "minecraft:cobblestone") {
                data2.block.west()?.setType("minecraft:gravel");
                break;
              }
            }
            case "poke:duster_south": {
              if (data2.block.south()?.typeId == "minecraft:dirt") {
                data2.block.south()?.setType("minecraft:sand");
                break;
              }
              if (data2.block.south()?.typeId == "minecraft:cobblestone") {
                data2.block.south()?.setType("minecraft:gravel");
                break;
              }
            }
            case "poke:duster_north": {
              if (data2.block.north()?.typeId == "minecraft:dirt") {
                data2.block.north()?.setType("minecraft:sand");
                break;
              }
              if (data2.block.north()?.typeId == "minecraft:cobblestone") {
                data2.block.north()?.setType("minecraft:gravel");
                break;
              }
            }
            case "poke:duster_up": {
              if (data2.block.above()?.typeId == "minecraft:dirt") {
                data2.block.above()?.setType("minecraft:sand");
                break;
              }
              if (data2.block.above()?.typeId == "minecraft:cobblestone") {
                data2.block.above()?.setType("minecraft:gravel");
                break;
              }
            }
            case "poke:duster_down": {
              if (data2.block.below()?.typeId == "minecraft:dirt") {
                data2.block.below()?.setType("minecraft:sand");
                break;
              }
              if (data2.block.below()?.typeId == "minecraft:cobblestone") {
                data2.block.below()?.setType("minecraft:gravel");
                break;
              }
            }
            case "poke:duster": {
              if (data2.block.below()?.typeId == "minecraft:dirt") {
                data2.block.below()?.setType("minecraft:sand");
                break;
              }
              if (data2.block.below()?.typeId == "minecraft:cobblestone") {
                data2.block.below()?.setType("minecraft:gravel");
                break;
              }
            }
          }
          return;
        }
        if (data2.block.getRedstonePower() == 0 && data2.block.getRedstonePower() !== void 0) {
          data2.block.setPermutation(data2.block.permutation.withState("pfe:active", 0));
          return;
        }
        return;
      }
    }
  );
  data.blockComponentRegistry.registerCustomComponent(
    "poke_pfe:magnet_block",
    {
      onTick(data2) {
        let blockY = data2.block.permutation.getState(`minecraft:vertical_half`) == `top` ? data2.block.center().y - 0.5 : data2.block.center().y + 0.5;
        const block_location = `${data2.block.x} ${blockY} ${data2.block.z}`;
        if (data2.block.getRedstonePower() != 0 && data2.block.getRedstonePower() !== void 0) {
          data2.block.setPermutation(data2.block.permutation.withState("pfe:active", 1));
          data2.dimension.runCommand(`execute positioned ${block_location} as @e[type=item,r=10] run tp @s ${block_location}`);
          return;
        }
        if (data2.block.getRedstonePower() == 0 && data2.block.getRedstonePower() !== void 0) {
          data2.block.setPermutation(data2.block.permutation.withState("pfe:active", 0));
          return;
        }
        return;
      }
    }
  );
  data.blockComponentRegistry.registerCustomComponent(
    "poke:cc_calibrate",
    {
      onPlayerInteract(data2) {
        const OldId = ["poke:duster", "poke:dirter"];
        const bId = data2.block.typeId;
        const newBlock = `${bId.substring(0, bId.lastIndexOf("_"))}_${data2.face.toLowerCase()}`;
        if (newBlock == bId)
          return;
        if (OldId.includes(bId)) {
          data2.block.setType(bId + "_up");
          return;
        }
        data2.block.setType(newBlock);
        data2.dimension.playSound("poke.calibrate", data2.block.center());
        ComputersCompat.addStat(`blocks_calibrated`, 1);
        return;
      }
    }
  );
  data.blockComponentRegistry.registerCustomComponent(
    "poke:cc_CaliBlockBreaker",
    {
      onTick(data2) {
        const block_location = `${data2.block.x} ${data2.block.y} ${data2.block.z}`;
        if (data2.block.getRedstonePower() != 0 && data2.block.getRedstonePower() !== void 0) {
          data2.block.setPermutation(data2.block.permutation.withState("pfe:active", 1));
          if (data2.block.typeId == "poke:block_breaker_east") {
            data2.dimension.runCommand("execute positioned " + block_location + " unless block ~1 ~ ~ bedrock run setblock ~1 ~ ~ air destroy");
            return;
          }
          if (data2.block.typeId == "poke:block_breaker_west") {
            data2.dimension.runCommand("execute positioned " + block_location + " unless block ~-1 ~ ~ bedrock run setblock ~-1 ~ ~ air destroy");
            return;
          }
          if (data2.block.typeId == "poke:block_breaker_south") {
            data2.dimension.runCommand("execute positioned " + block_location + " unless block ~ ~ ~1 bedrock run setblock ~ ~ ~1 air destroy");
            return;
          }
          if (data2.block.typeId == "poke:block_breaker_north") {
            data2.dimension.runCommand("execute positioned " + block_location + " unless block ~ ~ ~-1 bedrock run setblock ~ ~ ~-1 air destroy");
            return;
          }
          if (data2.block.typeId == "poke:block_breaker_up") {
            data2.dimension.runCommand("execute positioned " + block_location + " unless block ~ ~1 ~ bedrock run setblock ~ ~1 ~ air destroy");
            return;
          }
          if (data2.block.typeId == "poke:block_breaker_down") {
            data2.dimension.runCommand("execute positioned " + block_location + " unless block ~ ~-1 ~ bedrock run setblock ~ ~-1 ~ air destroy");
            return;
          }
          return;
        }
        ;
        if (data2.block.getRedstonePower() == 0 && data2.block.getRedstonePower() !== void 0) {
          data2.block.setPermutation(data2.block.permutation.withState("pfe:active", 0));
          return;
        }
        return;
      }
    }
  );
  data.blockComponentRegistry.registerCustomComponent(
    "poke:cc_CaliCobbleGen",
    {
      onTick(data2) {
        if (data2.block.getRedstonePower() != 0 && data2.block.getRedstonePower() !== void 0) {
          data2.block.setPermutation(data2.block.permutation.withState("pfe:active", 1));
          if (data2.block.typeId == "poke:calibrated_cobblestone_generator_east") {
            if (data2.block.east()?.typeId != "minecraft:air")
              return;
            data2.block.east()?.setType("minecraft:cobblestone");
            return;
          }
          if (data2.block.typeId == "poke:calibrated_cobblestone_generator_west") {
            if (data2.block.west()?.typeId != "minecraft:air")
              return;
            data2.block.west()?.setType("minecraft:cobblestone");
            return;
          }
          if (data2.block.typeId == "poke:calibrated_cobblestone_generator_south") {
            if (data2.block.south()?.typeId != "minecraft:air")
              return;
            data2.block.south()?.setType("minecraft:cobblestone");
            return;
          }
          if (data2.block.typeId == "poke:calibrated_cobblestone_generator_north") {
            if (data2.block.north()?.typeId != "minecraft:air")
              return;
            data2.block.north()?.setType("minecraft:cobblestone");
            return;
          }
          if (data2.block.typeId == "poke:calibrated_cobblestone_generator_up") {
            if (data2.block.above()?.typeId != "minecraft:air")
              return;
            data2.block.above()?.setType("minecraft:cobblestone");
            return;
          }
          if (data2.block.typeId == "poke:calibrated_cobblestone_generator_down") {
            if (data2.block.below()?.typeId != "minecraft:air")
              return;
            data2.block.below()?.setType("minecraft:cobblestone");
            return;
          }
          return;
        }
        if (data2.block.getRedstonePower() == 0 && data2.block.getRedstonePower() !== void 0) {
          data2.block.setPermutation(data2.block.permutation.withState("pfe:active", 0));
          return;
        }
        return;
      }
    }
  );
  data.blockComponentRegistry.registerCustomComponent(
    "poke:crops",
    {
      onRandomTick(data2) {
        var growth_state = data2.block.permutation.getState("poke:growth_stage");
        var growth_stage = growth_state + 1;
        if (growth_state != void 0 || 6) {
          data2.block.setPermutation(data2.block.permutation.withState("poke:growth_stage", growth_stage));
          return;
        }
        return;
      },
      onPlayerInteract(data2) {
        const equippableComponent = data2.player?.getComponent(EntityComponentTypes5.Equippable);
        const mainhandItem = equippableComponent.getEquipment(EquipmentSlot5.Mainhand);
        if (mainhandItem === void 0)
          return;
        const block_location = `${data2.block.x} ${data2.block.y} ${data2.block.z}`;
        let growth_state = data2.block.permutation.getState("poke:growth_stage");
        let growth_stage = growth_state + Math.round(Math.random() * 3);
        var itemAfterUse = mainhandItem.amount;
        var itemAfterUse1 = itemAfterUse - 1;
        if (growth_stage > 6) {
          growth_stage = 6;
        }
        if (mainhandItem.typeId == MinecraftItemTypes.BoneMeal && growth_state != 6) {
          data2.block.setPermutation(data2.block.permutation.withState("poke:growth_stage", growth_stage));
          data2.dimension.runCommand("playsound item.bone_meal.use @a " + block_location);
          data2.dimension.runCommand("particle minecraft:crop_growth_emitter " + block_location);
          if (data2.player?.getGameMode() != GameMode4.creative) {
            if (itemAfterUse1 == 0) {
              data2.player?.runCommand("clear @s bone_meal 0 1");
              return;
            }
            equippableComponent.setEquipment(EquipmentSlot5.Mainhand, new ItemStack6(mainhandItem.typeId, itemAfterUse1));
            return;
          }
          return;
        }
        return;
      }
    }
  );
  data.blockComponentRegistry.registerCustomComponent(
    "poke:cc_barometer",
    {
      onTick(data2) {
        var weather = data2.block.permutation.getState("pfe:weather");
        if (data2.block.getRedstonePower() != 0 && data2.block.getRedstonePower() !== void 0) {
          if (data2.dimension.getWeather() == "Clear" && weather != 0) {
            data2.block.setPermutation(data2.block.permutation.withState("pfe:weather", 0));
            return;
          }
          if (data2.dimension.getWeather() != "Thunder" && data2.dimension.getWeather() == "Rain" && weather != 1) {
            data2.block.setPermutation(data2.block.permutation.withState("pfe:weather", 1));
            return;
          }
          if (data2.dimension.getWeather() == "Thunder" && weather != 2) {
            data2.block.setPermutation(data2.block.permutation.withState("pfe:weather", 2));
            return;
          }
          return;
        }
      }
    }
  );
  data.blockComponentRegistry.registerCustomComponent(
    "poke:cc_lava_sponge",
    {
      onPlace(data2) {
        switch (MinecraftBlockTypes.Lava || MinecraftBlockTypes.FlowingLava) {
          case data2.block.north()?.typeId:
            break;
          case data2.block.south()?.typeId:
            break;
          case data2.block.east()?.typeId:
            break;
          case data2.block.west()?.typeId:
            break;
          case data2.block.below()?.typeId:
            break;
          case data2.block.above()?.typeId:
            break;
          default:
            return;
        }
        data2.dimension.runCommand(`execute positioned ${data2.block.x} ${data2.block.y} ${data2.block.z} run function poke/pfe/lava_sponge_to_molten`);
        ComputersCompat.addStat("lava_sponged", 1);
        return;
      },
      onTick(data2) {
        switch (MinecraftBlockTypes.Lava || MinecraftBlockTypes.FlowingLava) {
          case data2.block.north()?.typeId:
            break;
          case data2.block.south()?.typeId:
            break;
          case data2.block.east()?.typeId:
            break;
          case data2.block.west()?.typeId:
            break;
          case data2.block.below()?.typeId:
            break;
          case data2.block.above()?.typeId:
            break;
          default:
            return;
        }
        data2.dimension.runCommand(`execute positioned ${data2.block.x} ${data2.block.y} ${data2.block.z} run function poke/pfe/lava_sponge_to_molten`);
        ComputersCompat.addStat("lava_sponged", 1);
        return;
      }
    }
  );
  data.blockComponentRegistry.registerCustomComponent(
    "poke_pfe:molten_lava_sponge",
    {
      onRandomTick(data2) {
        switch (MinecraftBlockTypes.Water || MinecraftBlockTypes.FlowingWater) {
          case data2.block.north()?.typeId:
            break;
          case data2.block.south()?.typeId:
            break;
          case data2.block.east()?.typeId:
            break;
          case data2.block.west()?.typeId:
            break;
          case data2.block.below()?.typeId:
            break;
          case data2.block.above()?.typeId:
            break;
          default:
            return;
        }
        ;
        data2.block.setType(`poke:lava_sponge`);
        data2.dimension.playSound(`random.fizz`, data2.block.center());
        data2.dimension.spawnParticle(`minecraft:cauldron_explosion_emitter`, data2.block.center());
        return;
      }
    }
  );
  data.blockComponentRegistry.registerCustomComponent(
    "poke:cc_block_seat",
    {
      onPlayerInteract(data2) {
        const slabId = data2.block.typeId;
        const mainhand = data2.player.getComponent(EntityComponentTypes5.Equippable).getEquipment("Mainhand");
        const options = {
          type: "poke:seat",
          location: data2.block.center(),
          maxDistance: 0.24
        };
        if (mainhand?.typeId != slabId && !data2.player?.isSneaking) {
          if (data2.block.permutation.getState("minecraft:vertical_half") == "bottom" && data2.block.permutation.getState("poke:double") == false) {
            if (data2.dimension.getEntities(options).length > 0) {
              return;
            } else {
              data2.dimension.spawnEntity("poke:seat", data2.block.center()).getComponent("minecraft:rideable").addRider(data2.player);
              ComputersCompat.addStat("slabs_sat_on", 1);
              return;
            }
          }
        }
        return;
      }
    }
  );
  data.blockComponentRegistry.registerCustomComponent(
    "poke:cc_slab_loot",
    {
      onPlayerDestroy(data2) {
        const block_location = data2.block.location;
        const gm = data2.player?.getGameMode();
        const blockId = data2.destroyedBlockPermutation.type.id;
        const blockState = data2.destroyedBlockPermutation.getState("poke:double");
        if (gm == "survival") {
          if (blockState == true) {
            data2.dimension.spawnItem(new ItemStack6(blockId, 1), block_location);
            return;
          }
          return;
        }
        return;
      }
    }
  );
  data.blockComponentRegistry.registerCustomComponent(
    "poke:cc_block_interact",
    {
      onPlayerInteract(data2) {
        switch (data2.block.typeId) {
          case "poke:listener_trophy": {
            data2.player?.playMusic("record.listen", { fade: 5 });
            return;
          }
          case "poke:furnace_golem_trophy": {
            data2.player?.playMusic("poke.record.pigstep", { fade: 5 });
            return;
          }
          case "poke:cobalt_golem_block":
            {
              data2.dimension.spawnEntity("poke:cobalt_golem", data2.block.location);
              data2.block.setType("minecraft:air");
              return;
            }
            return;
        }
      }
    }
  );
  data.blockComponentRegistry.registerCustomComponent(
    "poke:cc_8ball",
    {
      onPlayerInteract(data2) {
        var RNG = Math.floor(Math.random() * 19);
        data2.player?.sendMessage({ rawtext: [{ translate: `translation.poke:8ball${RNG}` }] });
        return;
      }
    }
  );
  data.blockComponentRegistry.registerCustomComponent(
    "poke:cc_wall",
    {
      onPlace(data2) {
        const NorthBlock = data2.block.north();
        const SouthBlock = data2.block.south();
        const EastBlock = data2.block.east();
        const WestBlock = data2.block.west();
        const AboveBlock = data2.block.above();
        const BelowBlock = data2.block.below();
        if (!NorthBlock || !SouthBlock || !EastBlock || !WestBlock)
          return;
        if (!NorthBlock.isAir && !NorthBlock.isLiquid) {
          data2.block.setPermutation(data2.block.permutation.withState("pfe:wall_n", true));
          if (NorthBlock.permutation.getState("pfe:wall_s") != void 0) {
            NorthBlock.setPermutation(NorthBlock.permutation.withState("pfe:wall_s", true));
            Post(NorthBlock, true, true);
          }
        } else {
          data2.block.setPermutation(data2.block.permutation.withState("pfe:wall_n", false));
        }
        ;
        if (!SouthBlock.isAir && !SouthBlock.isLiquid) {
          data2.block.setPermutation(data2.block.permutation.withState("pfe:wall_s", true));
          if (SouthBlock.permutation.getState("pfe:wall_n") != void 0) {
            SouthBlock.setPermutation(SouthBlock.permutation.withState("pfe:wall_n", true));
            Post(SouthBlock, true, true);
          }
        } else {
          data2.block.setPermutation(data2.block.permutation.withState("pfe:wall_s", false));
        }
        ;
        if (!EastBlock.isAir && !EastBlock.isLiquid) {
          data2.block.setPermutation(data2.block.permutation.withState("pfe:wall_e", true));
          if (EastBlock.permutation.getState("pfe:wall_w") != void 0) {
            EastBlock.setPermutation(EastBlock.permutation.withState("pfe:wall_w", true));
            Post(EastBlock, true, true);
          }
        } else {
          data2.block.setPermutation(data2.block.permutation.withState("pfe:wall_e", false));
        }
        ;
        if (!WestBlock.isAir && !WestBlock.isLiquid) {
          data2.block.setPermutation(data2.block.permutation.withState("pfe:wall_w", true));
          if (WestBlock.permutation.getState("pfe:wall_e") != void 0) {
            WestBlock.setPermutation(WestBlock.permutation.withState("pfe:wall_e", true));
            Post(WestBlock, true, true);
          }
        } else {
          data2.block.setPermutation(data2.block.permutation.withState("pfe:wall_w", false));
        }
        ;
        if (BelowBlock) {
          if (!BelowBlock.isAir && !BelowBlock.isLiquid) {
            data2.block.setPermutation(data2.block.permutation.withState("poke:connected_below", true));
            if (BelowBlock.permutation.getState("poke:connected_above") != void 0) {
              BelowBlock.setPermutation(BelowBlock.permutation.withState("poke:connected_above", true));
            }
          } else {
            data2.block.setPermutation(data2.block.permutation.withState("poke:connected_below", false));
          }
          ;
        }
        if (AboveBlock) {
          if (AboveBlock && !AboveBlock.isAir && !AboveBlock.isLiquid) {
            data2.block.setPermutation(data2.block.permutation.withState("poke:connected_above", true));
            if (AboveBlock.permutation.getState("poke:connected_below") != void 0) {
              AboveBlock.setPermutation(AboveBlock.permutation.withState("poke:connected_below", true));
            }
          } else {
            data2.block.setPermutation(data2.block.permutation.withState("poke:connected_above", false));
          }
          ;
        }
        Post(data2.block, true, true);
        return;
      },
      onPlayerDestroy(data2) {
        const NorthBlock = data2.block.north();
        const SouthBlock = data2.block.south();
        const EastBlock = data2.block.east();
        const WestBlock = data2.block.west();
        const AboveBlock = data2.block.above();
        const BelowBlock = data2.block.below();
        if (!NorthBlock || !SouthBlock || !EastBlock || !WestBlock || !AboveBlock || !BelowBlock)
          return;
        if (NorthBlock.permutation.getState("pfe:wall_s") != void 0) {
          NorthBlock.setPermutation(NorthBlock.permutation.withState("pfe:wall_s", false));
          Post(NorthBlock, true, true);
        }
        if (SouthBlock.permutation.getState("pfe:wall_n") != void 0) {
          SouthBlock.setPermutation(SouthBlock.permutation.withState("pfe:wall_n", false));
          Post(SouthBlock, true, true);
        }
        if (EastBlock.permutation.getState("pfe:wall_w") != void 0) {
          EastBlock.setPermutation(EastBlock.permutation.withState("pfe:wall_w", false));
          Post(EastBlock, true, true);
        }
        if (WestBlock.permutation.getState("pfe:wall_e") != void 0) {
          WestBlock.setPermutation(WestBlock.permutation.withState("pfe:wall_e", false));
          Post(WestBlock, true, true);
        }
        if (AboveBlock.permutation.getState("poke:connected_above") != void 0) {
          AboveBlock.setPermutation(AboveBlock.permutation.withState("poke:connected_below", false));
          Post(AboveBlock, true, false);
        }
        if (BelowBlock.permutation.getState("poke:connected_below") != void 0) {
          BelowBlock.setPermutation(BelowBlock.permutation.withState("poke:connected_above", false));
          Post(BelowBlock, false, true);
        }
        return;
      }
    }
  );
  const PFEFisherComponentInfo = {
    baitBlockState: "poke_pfe:bait",
    baitStates: [4, 3, 2, 1, 0]
  };
  data.blockComponentRegistry.registerCustomComponent(
    "poke_pfe:fisher",
    {
      onRandomTick(data2) {
        if (data2.block.isWaterlogged && data2.block.permutation.getState(PFEFisherComponentInfo.baitBlockState) != 0) {
          data2.block.setPermutation(data2.block.permutation.withState(PFEFisherComponentInfo.baitBlockState, Math.max(Number(data2.block.permutation.getState(PFEFisherComponentInfo.baitBlockState)) - 1, 0)));
          data2.block.dimension.playSound(`poke_pfe.fisher.catch`, data2.block.center());
          ComputersCompat.addStat("fisher_catches", 1);
        }
      },
      onPlayerInteract(data2) {
        let baitState = data2.block.permutation.getState(PFEFisherComponentInfo.baitBlockState);
        let lootTable = "poke/pfe/fisher_block.loot";
        let spawnLocation = data2.block.center();
        spawnLocation.y += 1;
        switch (baitState) {
          case 4:
            {
              data2.block.dimension.playSound(`poke_pfe.fisher.noLoot`, data2.block.center());
              return;
              break;
            }
            ;
          case 3: {
            PokeSpawnLootTable(lootTable, spawnLocation, data2.block.dimension, 1);
            break;
          }
          case 2: {
            PokeSpawnLootTable(lootTable, spawnLocation, data2.block.dimension, 2);
            break;
          }
          case 1: {
            PokeSpawnLootTable(lootTable, spawnLocation, data2.block.dimension, 3);
            break;
          }
          case 0: {
            PokeSpawnLootTable(lootTable, spawnLocation, data2.block.dimension, 4);
            break;
          }
        }
        data2.block.setPermutation(data2.block.permutation.withState(PFEFisherComponentInfo.baitBlockState, 4));
      },
      onPlayerDestroy(data2) {
        let baitState = data2.destroyedBlockPermutation.getState(PFEFisherComponentInfo.baitBlockState);
        let lootTable = "poke/pfe/fisher_block.loot";
        let spawnLocation = data2.block.center();
        spawnLocation.y += 1;
        switch (baitState) {
          case 4:
            break;
          case 3: {
            PokeSpawnLootTable(lootTable, spawnLocation, data2.block.dimension, 1);
            break;
          }
          case 2: {
            PokeSpawnLootTable(lootTable, spawnLocation, data2.block.dimension, 2);
            break;
          }
          case 1: {
            PokeSpawnLootTable(lootTable, spawnLocation, data2.block.dimension, 3);
            break;
          }
          case 0: {
            PokeSpawnLootTable(lootTable, spawnLocation, data2.block.dimension, 4);
            break;
          }
        }
      }
    }
  );
  data.blockComponentRegistry.registerCustomComponent(
    "poke_pfe:elevator",
    {
      onStepOff(data2) {
        if (!data2.entity)
          return;
        let player = data2.entity;
        if (player.typeId == MinecraftEntityTypes.Player) {
          let maxSearch = 64;
          if (player.isJumping) {
            let viewDirection = player.getViewDirection();
            let cardinalDirection = PokeClosestCardinal(viewDirection, "upDown");
            switch (cardinalDirection.direction) {
              case Direction2.Up: {
                for (let i = data2.block.y + 1; i <= Math.min(data2.block.y + maxSearch, data2.dimension.heightRange.max); Math.min(i++, data2.dimension.heightRange.max)) {
                  if (data2.block.above(i - data2.block.y)?.hasTag(`poke_pfe:elevator`) && !Boolean(data2.block.above(i - data2.block.y)?.getRedstonePower())) {
                    player.teleport({ x: data2.block.center().x, y: i + 1, z: data2.block.center().z });
                    player.playSound(`mob.endermen.portal`, { location: { x: data2.block.x, y: i + 1, z: data2.block.z } });
                    return;
                  }
                }
                ;
                break;
              }
              case Direction2.Down: {
                for (let i = data2.block.y - 1; i >= Math.max(data2.block.y - maxSearch, data2.dimension.heightRange.min); Math.min(i--, data2.dimension.heightRange.min)) {
                  if (data2.block.below(Math.abs(i - data2.block.y))?.hasTag(`poke_pfe:elevator`) && !Boolean(data2.block.below(Math.abs(i - data2.block.y))?.getRedstonePower())) {
                    player.teleport({ x: data2.block.center().x, y: i + 1, z: data2.block.center().z });
                    player.playSound(`mob.endermen.portal`, { location: { x: data2.block.x, y: i + 1, z: data2.block.z } });
                    return;
                  }
                }
                ;
                break;
              }
            }
          }
        }
      }
    }
  );
  data.blockComponentRegistry.registerCustomComponent(
    "poke_pfe:omnivator",
    {
      onStepOff(data2) {
        if (!data2.entity)
          return;
        let player = data2.entity;
        if (player.typeId == MinecraftEntityTypes.Player) {
          let maxSearch = 64;
          if (player.isJumping) {
            let viewDirection = player.getViewDirection();
            let cardinalDirection = PokeClosestCardinal(viewDirection);
            switch (cardinalDirection.direction) {
              case Direction2.Up: {
                for (let i = data2.block.y + 1; i <= Math.min(data2.block.y + maxSearch, data2.dimension.heightRange.max); Math.min(i++, data2.dimension.heightRange.max)) {
                  if (data2.block.above(i - data2.block.y)?.hasTag(`poke_pfe:elevator`) && !Boolean(data2.block.above(i - data2.block.y)?.getRedstonePower())) {
                    player.teleport({ x: data2.block.center().x, y: i + 1, z: data2.block.center().z });
                    player.playSound(`mob.endermen.portal`, { location: { x: data2.block.x, y: i + 1, z: data2.block.z } });
                    return;
                  }
                }
                ;
                break;
              }
              case Direction2.Down: {
                for (let i = data2.block.y - 1; i >= Math.max(data2.block.y - maxSearch, data2.dimension.heightRange.min); Math.min(i--, data2.dimension.heightRange.min)) {
                  if (data2.block.below(Math.abs(i - data2.block.y))?.hasTag(`poke_pfe:elevator`) && !Boolean(data2.block.below(Math.abs(i - data2.block.y))?.getRedstonePower())) {
                    player.teleport({ x: data2.block.center().x, y: i + 1, z: data2.block.center().z });
                    player.playSound(`mob.endermen.portal`, { location: { x: data2.block.x, y: i + 1, z: data2.block.z } });
                    return;
                  }
                }
                ;
                break;
              }
              case Direction2.North: {
                for (let i = data2.block.z - 1; i >= data2.block.z - maxSearch; i--) {
                  if (data2.block.north(Math.abs(i - data2.block.z))?.hasTag(`poke_pfe:elevator`) && !Boolean(data2.block.north(Math.abs(i - data2.block.z))?.getRedstonePower())) {
                    let newBlock = data2.block.north(Math.abs(i - data2.block.z));
                    player.teleport({ x: newBlock.center().x, y: newBlock.y + 1, z: newBlock.center().z });
                    player.playSound(`mob.endermen.portal`, { location: newBlock.center() });
                    return;
                  }
                }
                ;
                break;
              }
              case Direction2.South: {
                for (let i = data2.block.z + 1; i <= data2.block.z + maxSearch; i++) {
                  if (data2.block.south(i - data2.block.z)?.hasTag(`poke_pfe:elevator`) && !Boolean(data2.block.south(i - data2.block.z)?.getRedstonePower())) {
                    let newBlock = data2.block.south(i - data2.block.z);
                    player.teleport({ x: newBlock.center().x, y: newBlock.y + 1, z: newBlock.center().z });
                    player.playSound(`mob.endermen.portal`, { location: newBlock.center() });
                    return;
                  }
                }
                ;
                break;
              }
              case Direction2.West: {
                for (let i = data2.block.x - 1; i >= data2.block.x - maxSearch; i--) {
                  if (data2.block.west(Math.abs(i - data2.block.x))?.hasTag(`poke_pfe:elevator`) && !Boolean(data2.block.west(Math.abs(i - data2.block.x))?.getRedstonePower())) {
                    let newBlock = data2.block.west(Math.abs(i - data2.block.x));
                    player.teleport({ x: newBlock.center().x, y: newBlock.y + 1, z: newBlock.center().z });
                    player.playSound(`mob.endermen.portal`, { location: newBlock.center() });
                    return;
                  }
                }
                ;
                break;
              }
              case Direction2.East: {
                for (let i = data2.block.x + 1; i <= data2.block.x + maxSearch; i++) {
                  if (data2.block.east(i - data2.block.x)?.hasTag(`poke_pfe:elevator`) && !Boolean(data2.block.east(i - data2.block.x)?.getRedstonePower())) {
                    let newBlock = data2.block.east(i - data2.block.x);
                    player.teleport({ x: newBlock.center().x, y: newBlock.y + 1, z: newBlock.center().z });
                    player.playSound(`mob.endermen.portal`, { location: newBlock.center() });
                    return;
                  }
                }
                ;
                break;
              }
            }
          }
        }
      }
    }
  );
  initExampleStickers();
  return;
});

//# sourceMappingURL=../debug/main.js.map
