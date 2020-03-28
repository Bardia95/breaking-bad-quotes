["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/async/freelist.js"],"~:js","goog.provide(\"goog.async.FreeList\");\n/**\n * @struct\n * @constructor\n * @param {function():ITEM} create\n * @param {function(ITEM):void} reset\n * @param {number} limit\n * @template ITEM\n */\ngoog.async.FreeList = function(create, reset, limit) {\n  /** @private @const @type {number} */ this.limit_ = limit;\n  /** @private @const @type {function()} */ this.create_ = create;\n  /** @private @const @type {function(ITEM):void} */ this.reset_ = reset;\n  /** @private @type {number} */ this.occupants_ = 0;\n  /** @private @type {ITEM} */ this.head_ = null;\n};\n/**\n * @return {ITEM}\n */\ngoog.async.FreeList.prototype.get = function() {\n  var item;\n  if (this.occupants_ > 0) {\n    this.occupants_--;\n    item = this.head_;\n    this.head_ = item.next;\n    item.next = null;\n  } else {\n    item = this.create_();\n  }\n  return item;\n};\n/**\n * @param {ITEM} item\n */\ngoog.async.FreeList.prototype.put = function(item) {\n  this.reset_(item);\n  if (this.occupants_ < this.limit_) {\n    this.occupants_++;\n    item.next = this.head_;\n    this.head_ = item;\n  }\n};\n/**\n * @package\n * @return {number}\n */\ngoog.async.FreeList.prototype.occupants = function() {\n  return this.occupants_;\n};\n","~:source","// Copyright 2015 The Closure Library Authors. All Rights Reserved.\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS-IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\n/**\n * @fileoverview Simple freelist.\n *\n * An anterative to goog.structs.SimplePool, it imposes the requirement that the\n * objects in the list contain a \"next\" property that can be used to maintain\n * the pool.\n */\n\ngoog.provide('goog.async.FreeList');\n\n\n/**\n * @template ITEM\n */\ngoog.async.FreeList = class {\n  /**\n   * @param {function():ITEM} create\n   * @param {function(ITEM):void} reset\n   * @param {number} limit\n   */\n  constructor(create, reset, limit) {\n    /** @private @const {number} */\n    this.limit_ = limit;\n    /** @private @const {function()} */\n    this.create_ = create;\n    /** @private @const {function(ITEM):void} */\n    this.reset_ = reset;\n\n    /** @private {number} */\n    this.occupants_ = 0;\n    /** @private {ITEM} */\n    this.head_ = null;\n  }\n\n  /**\n   * @return {ITEM}\n   */\n  get() {\n    let item;\n    if (this.occupants_ > 0) {\n      this.occupants_--;\n      item = this.head_;\n      this.head_ = item.next;\n      item.next = null;\n    } else {\n      item = this.create_();\n    }\n    return item;\n  }\n\n  /**\n   * @param {ITEM} item An item available for possible future reuse.\n   */\n  put(item) {\n    this.reset_(item);\n    if (this.occupants_ < this.limit_) {\n      this.occupants_++;\n      item.next = this.head_;\n      this.head_ = item;\n    }\n  }\n\n  /**\n   * Visible for testing.\n   * @package\n   * @return {number}\n   */\n  occupants() {\n    return this.occupants_;\n  }\n};\n","~:compiled-at",1585432822008,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.async.freelist.js\",\n\"lineCount\":50,\n\"mappings\":\"AAsBAA,IAAAC,QAAA,CAAa,qBAAb,CAAA;AAMA;;;;;;;;AAAAD,IAAAE,MAAAC,SAAA,GAMEC,QAAW,CAACC,MAAD,EAASC,KAAT,EAAgBC,KAAhB,CAAuB;AAEhC,wCAAA,IAAAC,OAAA,GAAcD,KAAd;AAEA,4CAAA,IAAAE,QAAA,GAAeJ,MAAf;AAEA,qDAAA,IAAAK,OAAA,GAAcJ,KAAd;AAGA,iCAAA,IAAAK,WAAA,GAAkB,CAAlB;AAEA,+BAAA,IAAAC,MAAA,GAAa,IAAb;AAXgC,CANpC;AAuBEC;;;AAAA,IAAA,MAAA,SAAA,UAAA,IAAAA,GAAAA,QAAG,EAAG;AACJ,MAAIC,IAAJ;AACA,MAAI,IAAAH,WAAJ,GAAsB,CAAtB,CAAyB;AACvB,QAAAA,WAAA,EAAA;AACAG,QAAA,GAAO,IAAAF,MAAP;AACA,QAAAA,MAAA,GAAaE,IAAAC,KAAb;AACAD,QAAAC,KAAA,GAAY,IAAZ;AAJuB,GAAzB;AAMED,QAAA,GAAO,IAAAL,QAAA,EAAP;AANF;AAQA,SAAOK,IAAP;AAVI,CAAND;AAgBAG;;;AAAA,IAAA,MAAA,SAAA,UAAA,IAAAA,GAAAA,QAAG,CAACF,IAAD,CAAO;AACR,MAAAJ,OAAA,CAAYI,IAAZ,CAAA;AACA,MAAI,IAAAH,WAAJ,GAAsB,IAAAH,OAAtB,CAAmC;AACjC,QAAAG,WAAA,EAAA;AACAG,QAAAC,KAAA,GAAY,IAAAH,MAAZ;AACA,QAAAA,MAAA,GAAaE,IAAb;AAHiC;AAF3B,CAAVE;AAcAC;;;;AAAA,IAAA,MAAA,SAAA,UAAA,UAAAA,GAAAA,QAAS,EAAG;AACV,SAAO,IAAAN,WAAP;AADU,CAAZM;;\",\n\"sources\":[\"goog/async/freelist.js\"],\n\"sourcesContent\":[\"// Copyright 2015 The Closure Library Authors. All Rights Reserved.\\n//\\n// Licensed under the Apache License, Version 2.0 (the \\\"License\\\");\\n// you may not use this file except in compliance with the License.\\n// You may obtain a copy of the License at\\n//\\n//      http://www.apache.org/licenses/LICENSE-2.0\\n//\\n// Unless required by applicable law or agreed to in writing, software\\n// distributed under the License is distributed on an \\\"AS-IS\\\" BASIS,\\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\\n// See the License for the specific language governing permissions and\\n// limitations under the License.\\n\\n/**\\n * @fileoverview Simple freelist.\\n *\\n * An anterative to goog.structs.SimplePool, it imposes the requirement that the\\n * objects in the list contain a \\\"next\\\" property that can be used to maintain\\n * the pool.\\n */\\n\\ngoog.provide('goog.async.FreeList');\\n\\n\\n/**\\n * @template ITEM\\n */\\ngoog.async.FreeList = class {\\n  /**\\n   * @param {function():ITEM} create\\n   * @param {function(ITEM):void} reset\\n   * @param {number} limit\\n   */\\n  constructor(create, reset, limit) {\\n    /** @private @const {number} */\\n    this.limit_ = limit;\\n    /** @private @const {function()} */\\n    this.create_ = create;\\n    /** @private @const {function(ITEM):void} */\\n    this.reset_ = reset;\\n\\n    /** @private {number} */\\n    this.occupants_ = 0;\\n    /** @private {ITEM} */\\n    this.head_ = null;\\n  }\\n\\n  /**\\n   * @return {ITEM}\\n   */\\n  get() {\\n    let item;\\n    if (this.occupants_ > 0) {\\n      this.occupants_--;\\n      item = this.head_;\\n      this.head_ = item.next;\\n      item.next = null;\\n    } else {\\n      item = this.create_();\\n    }\\n    return item;\\n  }\\n\\n  /**\\n   * @param {ITEM} item An item available for possible future reuse.\\n   */\\n  put(item) {\\n    this.reset_(item);\\n    if (this.occupants_ < this.limit_) {\\n      this.occupants_++;\\n      item.next = this.head_;\\n      this.head_ = item;\\n    }\\n  }\\n\\n  /**\\n   * Visible for testing.\\n   * @package\\n   * @return {number}\\n   */\\n  occupants() {\\n    return this.occupants_;\\n  }\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"async\",\"FreeList\",\"constructor\",\"create\",\"reset\",\"limit\",\"limit_\",\"create_\",\"reset_\",\"occupants_\",\"head_\",\"get\",\"item\",\"next\",\"put\",\"occupants\"]\n}\n"]