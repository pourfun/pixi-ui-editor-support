var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var eui;
(function (eui) {
    eui.TYPE_COMPONENT = 'Component';
    eui.TYPE_GROUP = 'Group';
})(eui || (eui = {}));
var eui;
(function (eui) {
    eui.EVENT_ADDED = 'added';
    eui.EVENT_REMOVED = 'removed';
})(eui || (eui = {}));
var eui;
(function (eui) {
    var CompatibilityContainer = (function (_super) {
        __extends(CompatibilityContainer, _super);
        function CompatibilityContainer() {
            var _this = _super.call(this) || this;
            _this.vars = {};
            _this.on(eui.EVENT_ADDED, _this.onAdded, _this);
            _this.on(eui.EVENT_REMOVED, _this.onRemoved, _this);
            return _this;
        }
        Object.defineProperty(CompatibilityContainer.prototype, "skewX", {
            get: function () {
                return this.skew.x;
            },
            set: function (value) {
                this.skew.x = +value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CompatibilityContainer.prototype, "skewY", {
            get: function () {
                return this.skew.y;
            },
            set: function (value) {
                this.skew.y = +value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CompatibilityContainer.prototype, "scaleX", {
            get: function () {
                return this.scale.x;
            },
            set: function (value) {
                this.scale.x = +value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CompatibilityContainer.prototype, "scaleY", {
            get: function () {
                return this.scale.y;
            },
            set: function (value) {
                this.scale.y = +value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CompatibilityContainer.prototype, "anchorOffsetX", {
            get: function () {
                return this.pivot.x;
            },
            set: function (value) {
                this.pivot.x = +value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CompatibilityContainer.prototype, "anchorOffsetY", {
            get: function () {
                return this.pivot.y;
            },
            set: function (value) {
                this.pivot.y = +value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CompatibilityContainer.prototype, "includeInLayout", {
            get: function () {
                return this.vars.includeInLayout;
            },
            set: function (value) {
                this.vars.includeInLayout = !!value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CompatibilityContainer.prototype, "left", {
            get: function () {
                return this.vars.left;
            },
            set: function (value) {
                this.vars.left = value.toString();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CompatibilityContainer.prototype, "right", {
            get: function () {
                return this.vars.right;
            },
            set: function (value) {
                this.vars.right = value.toString();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CompatibilityContainer.prototype, "top", {
            get: function () {
                return this.vars.top;
            },
            set: function (value) {
                this.vars.top = value.toString();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CompatibilityContainer.prototype, "bottom", {
            get: function () {
                return this.vars.bottom;
            },
            set: function (value) {
                this.vars.bottom = value.toString();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CompatibilityContainer.prototype, "horizontalCenter", {
            get: function () {
                return this.vars.horizontalCenter;
            },
            set: function (value) {
                this.vars.horizontalCenter = value.toString();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CompatibilityContainer.prototype, "verticalCenter", {
            get: function () {
                return this.vars.verticalCenter;
            },
            set: function (value) {
                this.vars.verticalCenter = value.toString();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CompatibilityContainer.prototype, "percentWidth", {
            get: function () {
                return this.vars.percentWidth;
            },
            set: function (value) {
                this.vars.percentWidth = +value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CompatibilityContainer.prototype, "percentHeight", {
            get: function () {
                return this.vars.percentHeight;
            },
            set: function (value) {
                this.vars.percentHeight = +value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CompatibilityContainer.prototype, "explicitWidth", {
            get: function () {
                return this.vars.explicitWidth;
            },
            set: function (value) {
                this.vars.explicitWidth = +value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CompatibilityContainer.prototype, "explicitHeight", {
            get: function () {
                return this.vars.explicitHeight;
            },
            set: function (value) {
                this.vars.explicitHeight = +value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CompatibilityContainer.prototype, "states", {
            get: function () {
                return this.vars.states;
            },
            set: function (value) {
                this.vars.states = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CompatibilityContainer.prototype, "currentState", {
            get: function () {
                return this.vars.currentState;
            },
            set: function (value) {
                if (this.vars.stateConfigDict == null) {
                    return;
                }
                var config = this.vars.stateConfigDict[value];
                if (config == null) {
                    return;
                }
                this.vars.currentState = value;
                this.updateConfigDisplay(config);
            },
            enumerable: true,
            configurable: true
        });
        CompatibilityContainer.prototype.updateConfigDisplay = function (config) {
            eui.setComponentProperties(this, config);
        };
        Object.defineProperty(CompatibilityContainer.prototype, "config", {
            get: function () {
                return this.vars.config;
            },
            set: function (value) {
                this.vars.config = value;
                this.vars.stateConfigDict = this.parseConfig(value);
            },
            enumerable: true,
            configurable: true
        });
        CompatibilityContainer.prototype.parseConfig = function (skinConfig) {
            var config = {};
            var defaultConfig = {};
            for (var key in skinConfig) {
                if (!skinConfig.hasOwnProperty(key)) {
                    continue;
                }
                var value = skinConfig[key];
                var subs = key.split('.');
                if (subs.length === 1) {
                    defaultConfig[key] = value;
                }
                else if (subs.length === 2) {
                    var state = subs[1];
                    if (config[state] == null) {
                        config[state] = {};
                    }
                    config[state][subs[0]] = value;
                }
                else {
                }
            }
            for (var cfgKey in config) {
                if (!config.hasOwnProperty(cfgKey)) {
                    continue;
                }
                var stateConfig = config[cfgKey];
                for (var key in defaultConfig) {
                    if (!defaultConfig.hasOwnProperty(key)) {
                        continue;
                    }
                    if (stateConfig[key] != null) {
                        continue;
                    }
                    stateConfig[key] = defaultConfig[key];
                }
            }
            return config;
        };
        CompatibilityContainer.prototype.onAdded = function (parent) {
        };
        CompatibilityContainer.prototype.onRemoved = function (parent) {
        };
        Object.defineProperty(CompatibilityContainer.prototype, "destroyed", {
            get: function () {
                return this._destroyed;
            },
            enumerable: true,
            configurable: true
        });
        return CompatibilityContainer;
    }(PIXI.Container));
    eui.CompatibilityContainer = CompatibilityContainer;
})(eui || (eui = {}));
var eui;
(function (eui) {
    var Skin = (function (_super) {
        __extends(Skin, _super);
        function Skin() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Skin;
    }(PIXI.utils.EventEmitter));
    eui.Skin = Skin;
})(eui || (eui = {}));
var eui;
(function (eui) {
    var Component = (function (_super) {
        __extends(Component, _super);
        function Component() {
            return _super.call(this) || this;
        }
        Object.defineProperty(Component.prototype, "enable", {
            get: function () {
                return this.vars.enable;
            },
            set: function (value) {
                this.vars.enable = !!value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Component.prototype, "skinName", {
            get: function () {
                return this.vars.skinName;
            },
            set: function (value) {
                this.vars.skinName = value;
            },
            enumerable: true,
            configurable: true
        });
        return Component;
    }(eui.CompatibilityContainer));
    eui.Component = Component;
})(eui || (eui = {}));
var eui;
(function (eui) {
    var Group = (function (_super) {
        __extends(Group, _super);
        function Group() {
            var _this = _super.call(this) || this;
            _this.vars = {};
            _this._type = eui.TYPE_GROUP;
            return _this;
        }
        Object.defineProperty(Group.prototype, "contentWidth", {
            get: function () {
                return this.vars.contentWidth;
            },
            set: function (value) {
                this.vars.contentWidth = +value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Group.prototype, "contentHeight", {
            get: function () {
                return this.vars.contentHeight;
            },
            set: function (value) {
                this.vars.contentHeight = +value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Group.prototype, "scrollH", {
            get: function () {
                return this.vars.scrollH;
            },
            set: function (value) {
                this.vars.scrollH = +value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Group.prototype, "scrollV", {
            get: function () {
                return this.vars.scrollV;
            },
            set: function (value) {
                this.vars.scrollV = +value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Group.prototype, "scrollEnabled", {
            get: function () {
                return this.vars.scrollEnabled;
            },
            set: function (value) {
                this.vars.scrollEnabled = !!value;
            },
            enumerable: true,
            configurable: true
        });
        return Group;
    }(eui.CompatibilityContainer));
    eui.Group = Group;
})(eui || (eui = {}));
var eui;
(function (eui) {
    var Image = (function (_super) {
        __extends(Image, _super);
        function Image() {
            var _this = _super.call(this) || this;
            _this._range = new PIXI.Rectangle();
            return _this;
        }
        Object.defineProperty(Image.prototype, "width", {
            get: function () {
                return this.scale.x * this.getLocalBounds().width;
            },
            set: function (value) {
                if (this._scale9Grid != null) {
                    this.updateLocs();
                }
                else {
                    var width = this.getLocalBounds().width;
                    if (width !== 0) {
                        this.scale.x = value / width;
                    }
                    else {
                        this.scale.x = 1;
                    }
                    this['_width'] = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Image.prototype, "height", {
            get: function () {
                return this.scale.y * this.getLocalBounds().height;
            },
            set: function (value) {
                if (this._scale9Grid != null) {
                    this.updateLocs();
                }
                else {
                    var height = this.getLocalBounds().height;
                    if (height !== 0) {
                        this.scale.y = value / height;
                    }
                    else {
                        this.scale.y = 1;
                    }
                    this['_height'] = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Image.prototype, "scale9Grid", {
            get: function () {
                return this._scale9Grid;
            },
            set: function (value) {
                if (value != null && value === this._scale9Grid) {
                    return;
                }
                this._scale9Grid = value;
                this.updateView();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Image.prototype, "fillMode", {
            get: function () {
                return null;
            },
            set: function (value) {
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Image.prototype, "texture", {
            get: function () {
                return this._texture;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Image.prototype, "source", {
            get: function () {
                return this._source;
            },
            set: function (value) {
                var _this = this;
                if (value == null) {
                    this._texture = PIXI.Texture.EMPTY;
                    this._source = null;
                    this.updateView();
                }
                else if (value instanceof PIXI.Texture) {
                    this._texture = value;
                    this._source = value;
                    this.updateView();
                }
                else if (typeof value === 'string') {
                    var texture = PIXI.utils.TextureCache[value];
                    this._source = value;
                    if (texture != null) {
                        this._texture = texture;
                        this._source = value;
                        this.updateView();
                    }
                    else {
                        this._texture = PIXI.Texture.fromImage(value);
                        this._texture.once('update', function () {
                            if (_this.destroyed) {
                                return;
                            }
                            _this.updateView();
                        }, this);
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        Image.prototype.updateView = function () {
            if (this._scale9Grid == null) {
                this._range.x = 0;
                this._range.y = 0;
                this._range.width = 0;
                this._range.height = 0;
                this.clearSprites();
                var sprite = new PIXI.Sprite();
                sprite.texture = this._texture || PIXI.Texture.EMPTY;
                this.addChild(sprite);
                this.width = this.vars.explicitWidth;
                this.height = this.vars.explicitHeight;
            }
            else {
                var configList = this._scale9Grid.split(',');
                if (configList.length < 4) {
                    return;
                }
                this._range.x = parseInt(configList[0], 10);
                this._range.y = parseInt(configList[1], 10);
                this._range.width = parseInt(configList[2], 10);
                this._range.height = parseInt(configList[3], 10);
                this.scale.x = 1;
                this.scale.y = 1;
                this.generateSprites();
                this.updateLocs();
            }
        };
        Image.prototype.clearSprites = function () {
            var children = this.children;
            for (var i = children.length - 1; i >= 0; i--) {
                children[i].destroy();
            }
            if (this._textures != null && this._textures.length > 0) {
                for (var i = this._textures.length - 1; i >= 0; i--) {
                    this._textures[i].destroy();
                }
                this._textures.length = 0;
            }
        };
        Image.prototype.generateTextureByRange = function (texture, range) {
            var newTexture = texture.clone();
            var frame = newTexture.frame.clone();
            frame.x += range.x;
            frame.y += range.y;
            frame.width = range.width;
            frame.height = range.height;
            newTexture.frame = frame;
            return newTexture;
        };
        Image.prototype.generateSprites = function () {
            if (this._texture == null) {
                return;
            }
            var width = this._range.width;
            var height = this._range.height;
            var left = this._range.x;
            var right = left + width;
            var top = this._range.y;
            var bottom = top + height;
            var ranges = [
                new PIXI.Rectangle(0, 0, left, top),
                new PIXI.Rectangle(left, 0, width, top),
                new PIXI.Rectangle(right, 0, this._texture.width - right, top),
                new PIXI.Rectangle(0, top, left, height),
                new PIXI.Rectangle(left, top, width, height),
                new PIXI.Rectangle(right, top, this._texture.width - right, height),
                new PIXI.Rectangle(0, bottom, left, this._texture.height - bottom),
                new PIXI.Rectangle(left, bottom, width, this._texture.height - bottom),
                new PIXI.Rectangle(right, bottom, this._texture.width - right, this._texture.height - bottom),
            ];
            this._textures = this._textures || [];
            this.clearSprites();
            for (var i = 0, len = ranges.length; i < len; i++) {
                var texture = this.generateTextureByRange(this._texture, ranges[i]);
                var sprite = new PIXI.Sprite(texture);
                this._textures.push(texture);
                this.addChild(sprite);
            }
        };
        Image.prototype.updateLocs = function () {
            var children = this.children;
            if (children.length !== 9) {
                return;
            }
            var boundX = children[0].width + children[2].width;
            var boundY = children[0].height + children[6].height;
            var thisWidth = this.vars.explicitWidth;
            var thisHeight = this.vars.explicitHeight;
            if (thisWidth >= boundX) {
                children[0].scale.x = children[2].scale.x = children[3].scale.x = children[5].scale.x = children[6].scale.x = children[8].scale.x = 1;
                children[1].width = children[4].width = children[7].width = thisWidth - boundX;
            }
            else {
                children[0].width = children[2].width = children[3].width = children[5].width = children[6].width = children[8].width = thisWidth * 0.5;
                children[1].width = children[4].width = children[7].width = 0;
            }
            if (thisHeight >= boundY) {
                children[0].scale.y = children[1].scale.y = children[2].scale.y = children[6].scale.y = children[7].scale.y = children[8].scale.y = 1;
                children[3].height = children[4].height = children[5].height = thisHeight - boundY;
            }
            else {
                children[0].height = children[1].height = children[2].height = children[6].height = children[7].height = children[8].height = thisHeight * 0.5;
                children[3].height = children[4].height = children[5].height = 0;
            }
            var w1 = children[0].width;
            var w2 = w1 + children[1].width;
            var h1 = children[0].height;
            var h2 = h1 + children[3].height;
            for (var i = 0; i < 3; i++) {
                children[i * 3].x = 0 - this.anchorOffsetX;
                children[i * 3 + 1].x = w1 - this.anchorOffsetX;
                children[i * 3 + 2].x = w2 - this.anchorOffsetX;
                children[i].y = 0 - this.anchorOffsetY;
                children[i + 3].y = h1 - this.anchorOffsetY;
                children[i + 6].y = h2 - this.anchorOffsetY;
            }
        };
        Image.prototype.destroy = function (options) {
            this.clearSprites();
            this._destroyed = true;
            _super.prototype.destroy.call(this, options);
        };
        return Image;
    }(eui.CompatibilityContainer));
    eui.Image = Image;
})(eui || (eui = {}));
var eui;
(function (eui) {
    eui.skinDict = {};
    eui.immediateVarsHandler = {
        states: function (target, value) {
            var states = value.split(',');
            target.states = states;
        },
        x: function (target, value) {
            target.x = parseFloat(value) || target.x;
        },
        y: function (target, value) {
            target.y = parseFloat(value) || target.y;
        },
        visbile: function (target, value) {
        },
        width: function (target, value) {
            if (value.indexOf('%') !== -1) {
                target.percentWidth = parseInt(value, 10);
            }
            else {
                target.explicitWidth = +value;
                target.width = target.explicitWidth;
            }
        },
        height: function (target, value) {
            if (value.indexOf('%') !== -1) {
                target.percentHeight = parseInt(value, 10);
            }
            else {
                target.explicitHeight = +value;
                target.height = target.explicitHeight;
            }
        },
        alpha: function (target, value) {
            target.alpha = parseFloat(value) || target.alpha;
        },
        anchorOffsetX: function (target, value) {
            target.anchorOffsetX = parseFloat(value) || target.anchorOffsetX;
        },
        anchorOffsetY: function (target, value) {
            target.anchorOffsetY = parseFloat(value) || target.anchorOffsetY;
        },
        skewX: function (target, value) {
            target.skewX = parseFloat(value) || target.skewX;
        },
        skewY: function (target, value) {
            target.skewY = parseFloat(value) || target.skewY;
        },
        scaleX: function (target, value) {
        },
        scaleY: function (target, value) {
        },
        rotation: function (target, value) {
            target.rotation = parseFloat(value) || target.rotation;
        },
        touchEnable: function (target, value) {
            target.interactive = getBoolean(value);
        },
        touchChildren: function (target, value) {
            target.interactiveChildren = getBoolean(value);
        },
        name: function (target, value) {
            target.name = value;
        },
        id: function (target, value) {
            target.id = value;
        },
        hostComponentKey: function (target, value) {
            target.hostComponentKey = value;
        },
        includeIn: function (target, value, parent) {
            var states = value.split(',');
            if (parent && parent.currentState != null) {
                var visbile = false;
                for (var i = 0; i < states.length; i++) {
                    if (states[i] === parent.currentState) {
                        visbile = true;
                        break;
                    }
                }
                target.visible = visbile;
            }
        },
        top: function (target, value) {
            target.top = value;
        },
        left: function (target, value) {
            target.left = value;
        },
        right: function (target, value) {
            target.right = value;
        },
        bottom: function (target, value) {
            target.bottom = value;
        },
        verticalCenter: function (target, value) {
            target.verticalCenter = value;
        },
        horizontalCenter: function (target, value) {
            target.horizontalCenter = value;
        },
        enable: function (target, value) {
            target.enable = getBoolean(value);
        },
        skinName: function (target, value) {
            target.skinName = value;
        },
        scale9Grid: function (target, value) {
            target.scale9Grid = value;
        },
        source: function (target, value) {
            target.source = PIXI.utils.TextureCache[value];
        },
    };
    eui.orderVarsHandler = {
        currentState: function (target, value) {
        },
    };
    eui.varsOrder = [];
    eui.prohibitionVarsHandler = {};
    function setComponentProperties(target, config) {
        var orderVars = {};
        for (var key in config) {
            if (!config.hasOwnProperty(key)) {
                continue;
            }
            if (eui.prohibitionVarsHandler[key] != null) {
                continue;
            }
            if (eui.orderVarsHandler[key] != null) {
                orderVars[key] = config[key];
            }
            else if (eui.immediateVarsHandler[key] != null) {
                eui.immediateVarsHandler[key](target, config[key]);
            }
        }
        for (var i = 0; i < eui.varsOrder.length; i++) {
            var key = eui.varsOrder[i];
            if (orderVars[key] != null) {
                eui.orderVarsHandler[key](target, orderVars[key]);
            }
        }
    }
    eui.setComponentProperties = setComponentProperties;
    eui.createComponentDict = {
        Component: function (config) {
            var instance = new eui.Component();
            return instance;
        },
        Group: function (config) {
        },
    };
    function getBoolean(value) {
        if (value === 'true' || value === true) {
            return true;
        }
        else {
            return false;
        }
    }
})(eui || (eui = {}));
var stats = new Stats();
stats.showPanel(0);
document.body.appendChild(stats.dom);
stats.setMargin(2);
var stageWidth = 1024;
var stageHeight = 768;
var frameID = 0;
var canvas = document.getElementById('canvas');
var app = PIXI.autoDetectRenderer(stageWidth, stageHeight, { backgroundColor: 0xf0f0f0 });
canvas.appendChild(app.view);
var stage = new PIXI.Container();
function render() {
    frameID = requestAnimationFrame(render);
    stats.begin();
    app.render(stage);
    stats.end();
}
render();
PIXI.loader.add([]);
PIXI.loader.load(function (loader, res) {
});
//# sourceMappingURL=test.js.map