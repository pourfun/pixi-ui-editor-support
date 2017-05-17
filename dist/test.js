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
    eui.STATE_DEFAULT = 'default';
})(eui || (eui = {}));
var eui;
(function (eui) {
    eui.EVENT_ADDED = 'added';
    eui.EVENT_REMOVED = 'removed';
    eui.EVENT_POINTER_CANCEL = 'pointercancel';
    eui.EVENT_POINTER_DOWN = 'pointerdown';
    eui.EVENT_POINTER_MOVE = 'pointermove';
    eui.EVENT_POINTER_OUT = 'pointerout';
    eui.EVENT_POINTER_OVER = 'pointerover';
    eui.EVENT_POINTER_TAP = 'pointertap';
    eui.EVENT_POINTER_UP = 'pointerup';
    eui.EVENT_POINTER_OUTSIDE = 'pointerupoutside';
})(eui || (eui = {}));
var eui;
(function (eui) {
    var CompatibilityContainer = (function (_super) {
        __extends(CompatibilityContainer, _super);
        function CompatibilityContainer() {
            var _this = _super.call(this) || this;
            _this._includeInLayout = true;
            _this.addListeners();
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
                return this._includeInLayout;
            },
            set: function (value) {
                this._includeInLayout = !!value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CompatibilityContainer.prototype, "left", {
            get: function () {
                return this._left;
            },
            set: function (value) {
                this._left = value.toString();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CompatibilityContainer.prototype, "right", {
            get: function () {
                return this._right;
            },
            set: function (value) {
                this._right = value.toString();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CompatibilityContainer.prototype, "top", {
            get: function () {
                return this._top;
            },
            set: function (value) {
                this._top = value.toString();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CompatibilityContainer.prototype, "bottom", {
            get: function () {
                return this._bottom;
            },
            set: function (value) {
                this._bottom = value.toString();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CompatibilityContainer.prototype, "horizontalCenter", {
            get: function () {
                return this._horizontalCenter;
            },
            set: function (value) {
                this._horizontalCenter = value.toString();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CompatibilityContainer.prototype, "verticalCenter", {
            get: function () {
                return this._verticalCenter;
            },
            set: function (value) {
                this._verticalCenter = value.toString();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CompatibilityContainer.prototype, "percentWidth", {
            get: function () {
                return this._percentWidth;
            },
            set: function (value) {
                this._percentWidth = +value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CompatibilityContainer.prototype, "percentHeight", {
            get: function () {
                return this._percentHeight;
            },
            set: function (value) {
                this._percentHeight = +value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CompatibilityContainer.prototype, "explicitWidth", {
            get: function () {
                return this._explicitWidth;
            },
            set: function (value) {
                this._explicitWidth = +value;
                eui.Layout.BasicLayout(this, this._explicitWidth, this._explicitHeight);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CompatibilityContainer.prototype, "explicitHeight", {
            get: function () {
                return this._explicitHeight;
            },
            set: function (value) {
                this._explicitHeight = +value;
                eui.Layout.BasicLayout(this, this._explicitWidth, this._explicitHeight);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CompatibilityContainer.prototype, "states", {
            get: function () {
                return this._states;
            },
            set: function (value) {
                this._states = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CompatibilityContainer.prototype, "currentState", {
            get: function () {
                return this._currentState;
            },
            set: function (value) {
                if (this._stateConfigDict == null) {
                    return;
                }
                var config = this._stateConfigDict[value];
                if (config == null) {
                    return;
                }
                this._currentState = value;
                eui.ConfigParser.setComponentAttributes(this, config);
                this.childrenState = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CompatibilityContainer.prototype, "childrenState", {
            set: function (value) {
                var children = this.children;
                for (var i = 0; i < children.length; i++) {
                    children[i].currentState = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CompatibilityContainer.prototype, "config", {
            set: function (value) {
                this._config = value;
                this._stateConfigDict = eui.ConfigParser.convertSkinConfig(value);
                if (this.currentState == null) {
                    this.currentState = eui.STATE_DEFAULT;
                }
            },
            enumerable: true,
            configurable: true
        });
        CompatibilityContainer.prototype.addListeners = function () {
            this.on(eui.EVENT_ADDED, this.onAdded, this);
            this.on(eui.EVENT_REMOVED, this.onRemoved, this);
            this.on(eui.EVENT_POINTER_CANCEL, this.onPointerCancel, this);
            this.on(eui.EVENT_POINTER_DOWN, this.onPointerDown, this);
            this.on(eui.EVENT_POINTER_MOVE, this.onPointerMove, this);
            this.on(eui.EVENT_POINTER_OUT, this.onPointerOut, this);
            this.on(eui.EVENT_POINTER_OVER, this.onPointerOver, this);
            this.on(eui.EVENT_POINTER_TAP, this.onPointerTap, this);
            this.on(eui.EVENT_POINTER_UP, this.onPointerUp, this);
            this.on(eui.EVENT_POINTER_OUTSIDE, this.onPointerOutside, this);
        };
        CompatibilityContainer.prototype.removeListeners = function () {
            this.off(eui.EVENT_ADDED, this.onAdded, this);
            this.off(eui.EVENT_REMOVED, this.onRemoved, this);
            this.off(eui.EVENT_POINTER_CANCEL, this.onPointerCancel, this);
            this.off(eui.EVENT_POINTER_DOWN, this.onPointerDown, this);
            this.off(eui.EVENT_POINTER_MOVE, this.onPointerMove, this);
            this.off(eui.EVENT_POINTER_OUT, this.onPointerOut, this);
            this.off(eui.EVENT_POINTER_OVER, this.onPointerOver, this);
            this.off(eui.EVENT_POINTER_TAP, this.onPointerTap, this);
            this.off(eui.EVENT_POINTER_UP, this.onPointerUp, this);
            this.off(eui.EVENT_POINTER_OUTSIDE, this.onPointerOutside, this);
        };
        CompatibilityContainer.prototype.onAdded = function (parent) {
        };
        CompatibilityContainer.prototype.onRemoved = function (parent) {
        };
        CompatibilityContainer.prototype.onPointerCancel = function (evt) {
        };
        CompatibilityContainer.prototype.onPointerDown = function (evt) {
        };
        CompatibilityContainer.prototype.onPointerMove = function (evt) {
        };
        CompatibilityContainer.prototype.onPointerOut = function (evt) {
        };
        CompatibilityContainer.prototype.onPointerOver = function (evt) {
        };
        CompatibilityContainer.prototype.onPointerTap = function (evt) {
        };
        CompatibilityContainer.prototype.onPointerUp = function (evt) {
        };
        CompatibilityContainer.prototype.onPointerOutside = function (evt) {
        };
        CompatibilityContainer.prototype.getReference = function (id) {
            if (id == null) {
                return null;
            }
            function bind(container, value) {
                var children = container.children;
                for (var i = 0, lenI = children.length; i < lenI; i++) {
                    var child = children[i];
                    if (child.id != null && child.id !== '') {
                        this._referenceDict[child.id] = value + i.toString() + ',';
                    }
                    if (child instanceof PIXI.Container) {
                        bind.call(this, child, value + i.toString() + ',');
                    }
                }
            }
            if (this._referenceDict == null) {
                this._referenceDict = {};
                bind.call(this, this, '');
            }
            if (this._referenceDict[id] == null) {
                return null;
            }
            var value = this._referenceDict[id];
            var list = value.split(',');
            if (list[list.length - 1] === '') {
                list.pop();
            }
            var container = this;
            for (var i = 0; i < list.length; i++) {
                var child = container.children[parseInt(list[i], 10)];
                if (child == null) {
                    break;
                }
                container = child;
                if (i === list.length - 1) {
                    if (child.id === id) {
                        return child;
                    }
                }
            }
            this._referenceDict = {};
            return this.getReference(name);
        };
        CompatibilityContainer.prototype.destroy = function (options) {
            this.removeAllListeners();
            this._destroyed = true;
            _super.prototype.destroy.call(this, options);
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
    var Component = (function (_super) {
        __extends(Component, _super);
        function Component() {
            return _super.call(this) || this;
        }
        Object.defineProperty(Component.prototype, "enable", {
            get: function () {
                return this._enable;
            },
            set: function (value) {
                this._enable = !!value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Component.prototype, "skinName", {
            get: function () {
                return this._skinName;
            },
            set: function (value) {
                if (value == null || value === this._skinName) {
                    return;
                }
                this._skinName = value;
                this.clearChildren();
                eui.ConfigParser.parseSkinConfig(this, value);
            },
            enumerable: true,
            configurable: true
        });
        Component.prototype.clearChildren = function () {
            var children = this.children;
            for (var i = children.length - 1; i >= 0; i--) {
                children[i].destroy();
            }
        };
        return Component;
    }(eui.CompatibilityContainer));
    eui.Component = Component;
})(eui || (eui = {}));
var eui;
(function (eui) {
    var Group = (function (_super) {
        __extends(Group, _super);
        function Group() {
            return _super.call(this) || this;
        }
        Object.defineProperty(Group.prototype, "contentWidth", {
            get: function () {
                return this._contentWidth;
            },
            set: function (value) {
                this._contentWidth = +value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Group.prototype, "contentHeight", {
            get: function () {
                return this._contentHeight;
            },
            set: function (value) {
                this._contentHeight = +value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Group.prototype, "scrollH", {
            get: function () {
                return this._scrollH;
            },
            set: function (value) {
                this._scrollH = +value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Group.prototype, "scrollV", {
            get: function () {
                return this._scrollV;
            },
            set: function (value) {
                this._scrollV = +value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Group.prototype, "scrollEnabled", {
            get: function () {
                return this._scrollEnabled;
            },
            set: function (value) {
                this._scrollEnabled = !!value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Group.prototype, "layout", {
            get: function () {
                return this._layout;
            },
            set: function (value) {
                this._layout = value;
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
    var Button = (function (_super) {
        __extends(Button, _super);
        function Button() {
            var _this = _super.call(this) || this;
            _this._label = '';
            _this._icon = null;
            _this.interactive = true;
            return _this;
        }
        Object.defineProperty(Button.prototype, "label", {
            get: function () {
                return this._label;
            },
            set: function (value) {
                this._label = value;
                var labelDisplay = this.getReference('labelDisplay');
                if (labelDisplay) {
                    labelDisplay.text = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Button.prototype, "icon", {
            get: function () {
                return this._icon;
            },
            set: function (value) {
                this._icon = value;
                var iconDisplay = this.getReference('iconDisplay');
                if (iconDisplay) {
                    iconDisplay.source = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        Button.prototype.onPointerDown = function (evt) {
            this._downPoint = evt.data.global.clone();
            this.childrenState = 'down';
        };
        Button.prototype.onPointerMove = function (evt) {
            if (this._downPoint == null) {
                return;
            }
            var pt = evt.data.global;
            if (Math.abs(pt.x - this._downPoint.x) > 10 || Math.abs(pt.y - this._downPoint.y) > 10) {
                this._downPoint = null;
                this.childrenState = 'up';
            }
        };
        Button.prototype.onPointerOut = function (evt) {
            this.onCancel(evt);
        };
        Button.prototype.onPointerUp = function (evt) {
            this.onCancel(evt);
        };
        Button.prototype.onPointerOutside = function (evt) {
            this.onCancel(evt);
        };
        Button.prototype.onPointerTap = function (evt) {
            this.childrenState = 'up';
        };
        Button.prototype.onCancel = function (evt) {
            if (this._downPoint == null) {
                evt.stopPropagation();
            }
            this._downPoint = null;
        };
        return Button;
    }(eui.Component));
    eui.Button = Button;
})(eui || (eui = {}));
var eui;
(function (eui) {
    var Image = (function (_super) {
        __extends(Image, _super);
        function Image() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
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
                    var texture = eui.getTexture(value);
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
                else {
                    eui.log('没有找到贴图：' + value, eui.LOG_LEVEL_WARNING);
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
                this.width = this._explicitWidth || sprite.texture.frame.width;
                this.height = this._explicitHeight || sprite.texture.frame.height;
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
                this.width = this._explicitWidth || this.texture.frame.width;
                this.height = this._explicitHeight || this.texture.frame.height;
                this.generateSprites();
                this.updateLocs();
            }
        };
        Image.prototype.clearSprites = function () {
            var children = this.children;
            for (var i = children.length - 1; i >= 0; i--) {
                children[i].destroy();
            }
            if (this._scale9Textures != null && this._scale9Textures.length > 0) {
                for (var i = this._scale9Textures.length - 1; i >= 0; i--) {
                    this._scale9Textures[i].destroy();
                }
                this._scale9Textures.length = 0;
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
            this._scale9Textures = this._scale9Textures || [];
            this.clearSprites();
            for (var i = 0, len = ranges.length; i < len; i++) {
                var texture = this.generateTextureByRange(this._texture, ranges[i]);
                var sprite = new PIXI.Sprite(texture);
                this._scale9Textures.push(texture);
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
            var thisWidth = this._explicitWidth || this.texture.frame.width;
            var thisHeight = this._explicitHeight || this.texture.frame.height;
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
            _super.prototype.destroy.call(this, options);
        };
        return Image;
    }(eui.CompatibilityContainer));
    eui.Image = Image;
})(eui || (eui = {}));
var eui;
(function (eui) {
    var BasicLayout = (function (_super) {
        __extends(BasicLayout, _super);
        function BasicLayout() {
            return _super.call(this) || this;
        }
        return BasicLayout;
    }(PIXI.utils.EventEmitter));
    eui.BasicLayout = BasicLayout;
})(eui || (eui = {}));
var eui;
(function (eui) {
    var VerticalLayout = (function (_super) {
        __extends(VerticalLayout, _super);
        function VerticalLayout() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return VerticalLayout;
    }(PIXI.utils.EventEmitter));
    eui.VerticalLayout = VerticalLayout;
})(eui || (eui = {}));
var eui;
(function (eui) {
    var ConfigParser;
    (function (ConfigParser) {
        var createComponentDict = {
            Component: function (config) { return new eui.Component(); },
            Group: function (config) { return new eui.Group(); },
            Image: function (config) { return new eui.Image(); },
            Button: function (config) { return new eui.Button(); },
            layout: function (config, parent) {
                if (!(parent instanceof eui.Group)) {
                    eui.log('布局laytou，父级不是Group实例', eui.LOG_LEVEL_WARNING);
                    return;
                }
                if (config.children != null) {
                    var type = config.type;
                    type = type.substr(2, type.length - 1);
                    parent.layout = type;
                }
            },
        };
        var variablesHandler = {
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
                }
            },
            height: function (target, value) {
                if (value.indexOf('%') !== -1) {
                    target.percentHeight = parseInt(value, 10);
                }
                else {
                    target.explicitHeight = +value;
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
            currentState: function (target, value) {
                var children = target.children;
                for (var i = 0; i < children.length; i++) {
                    children[i].currentState = value;
                }
            },
            children: function (target, value) {
                var children = value;
                for (var i = 0; i < children.length; i++) {
                    var config = children[i];
                    var type = config.type;
                    type = type.substr(2, type.length - 1);
                    if (createComponentDict[type] != null) {
                        var comp = createComponentDict[type](config, target);
                        if (comp instanceof eui.CompatibilityContainer) {
                            target.addChild(comp);
                            comp.config = config;
                        }
                    }
                }
                eui.Layout.BasicLayout(target, target.explicitWidth, target.explicitHeight);
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
                target.source = eui.getTexture(value);
            },
            icon: function (target, value) {
                target.icon = value;
            },
        };
        var invalidAttributes = {};
        var orderAttributes = {
            Component: {
                list: ['skinName'],
                dict: {
                    skinName: '',
                },
            },
            Image: {
                list: ['source', 'scale9Grid'],
                dict: {
                    skinName: '',
                    scale9Grid: '',
                },
            },
        };
        function setComponentAttributes(target, config) {
            var type = config.type;
            type = type.substr(2, type.length - 1);
            var dict;
            if (orderAttributes[type] != null) {
                var list = orderAttributes[type].list;
                dict = orderAttributes[type].dict;
                for (var i = 0; i < list.length; i++) {
                    var key = list[i];
                    if (config[key] != null) {
                        variablesHandler[key](target, config[key]);
                    }
                }
            }
            for (var key in config) {
                if (!config.hasOwnProperty(key)) {
                    continue;
                }
                if (invalidAttributes[key] != null) {
                    continue;
                }
                if (dict != null && dict[key] != null) {
                    continue;
                }
                if (variablesHandler[key] == null) {
                    continue;
                }
                variablesHandler[key](target, config[key]);
            }
        }
        ConfigParser.setComponentAttributes = setComponentAttributes;
        var skinAttributeOrder = ['states', 'width', 'height', 'children', 'currentState'];
        function parseSkinConfig(target, skinName) {
            if (eui.skinDict[skinName] == null) {
                eui.log('解析皮肤配置没找到皮肤：' + skinName, eui.LOG_LEVEL_WARNING);
                return;
            }
            var skinConfig = eui.skinDict[skinName];
            if (typeof skinConfig === 'string') {
                skinConfig = eui.parseXML(skinConfig);
            }
            for (var i = 0; i < skinAttributeOrder.length; i++) {
                var key = skinAttributeOrder[i];
                if (skinConfig[key] != null) {
                    variablesHandler[key](target, skinConfig[key]);
                }
            }
        }
        ConfigParser.parseSkinConfig = parseSkinConfig;
        function convertSkinConfig(skinConfig) {
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
                    eui.log('配置组件状态属性出现超过一个"."作为分隔符的非法配置', eui.LOG_LEVEL_WARNING);
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
            config[eui.STATE_DEFAULT] = defaultConfig;
            return config;
        }
        ConfigParser.convertSkinConfig = convertSkinConfig;
        function getBoolean(value) {
            if (value === 'true' || value === true) {
                return true;
            }
            else {
                return false;
            }
        }
    })(ConfigParser = eui.ConfigParser || (eui.ConfigParser = {}));
})(eui || (eui = {}));
var eui;
(function (eui) {
    eui.skinDict = {};
    function getTexture(value) {
        return PIXI.utils.TextureCache[value];
    }
    eui.getTexture = getTexture;
    var TYPE_TEXT = '#text';
    function parseXML(data) {
        var xml;
        var tmp;
        if (!data || typeof data !== 'string') {
            return null;
        }
        try {
            if (window['DOMParser']) {
                tmp = new DOMParser();
                xml = tmp.parseFromString(data, 'text/xml');
            }
            else {
                xml = new ActiveXObject('Microsoft.XMLDOM');
                xml.async = 'false';
                xml.loadXML(data);
            }
        }
        catch (e) {
            xml = undefined;
        }
        var reg = /^\s+$/;
        function docToObj(el) {
            if (el.nodeName === TYPE_TEXT) {
                if (reg.test(el.textContent)) {
                    return;
                }
            }
            var obj = {};
            obj.type = el.nodeName;
            var attrib;
            if (el.attributes != null) {
                for (var i = 0; i < el.attributes.length; i++) {
                    attrib = el.attributes[i];
                    obj[attrib.name] = attrib.value;
                }
            }
            if (el.childNodes.length > 0) {
                var list = [];
                for (var i = 0; i < el.childNodes.length; i++) {
                    var node = docToObj(el.childNodes[i]);
                    if (node != null) {
                        list.push(node);
                        node.parent = obj;
                    }
                }
                if (list.length > 0) {
                    obj.children = list;
                }
            }
            if (el.nodeName === TYPE_TEXT) {
                obj.text = el.textContent;
            }
            return obj;
        }
        var object = docToObj(xml);
        var result = object.children[0];
        delete result.parent;
        if (result.type === 'html') {
            return data;
        }
        else {
            return result;
        }
    }
    eui.parseXML = parseXML;
})(eui || (eui = {}));
var eui;
(function (eui) {
    eui.LOG_LEVEL_PRINT = 0;
    eui.LOG_LEVEL_WARNING = 1;
    eui.LOG_LEVEL_ERROR = 2;
    function log(content, level) {
        if (level === void 0) { level = eui.LOG_LEVEL_PRINT; }
        switch (level) {
            case 0:
                console.log('[log]' + content);
                break;
            case 1:
                console.warn('[warning]' + content);
                break;
            case 2:
                console.error('[error]' + content);
                break;
        }
    }
    eui.log = log;
})(eui || (eui = {}));
var eui;
(function (eui) {
    var Layout;
    (function (Layout) {
        function BasicLayout(target, unscaledWidth, unscaledHeight) {
            if (!target) {
                return;
            }
            var count = target.children.length;
            var maxX = 0;
            var maxY = 0;
            for (var i = 0; i < count; i++) {
                var layoutElement = target.getChildAt(i);
                if (!layoutElement.includeInLayout) {
                    continue;
                }
                var bounds = layoutElement.getBounds();
                var hCenter = formatRelative(layoutElement.horizontalCenter, unscaledWidth * 0.5);
                var vCenter = formatRelative(layoutElement.verticalCenter, unscaledHeight * 0.5);
                var left = formatRelative(layoutElement.left, unscaledWidth);
                var right = formatRelative(layoutElement.right, unscaledWidth);
                var top_1 = formatRelative(layoutElement.top, unscaledHeight);
                var bottom = formatRelative(layoutElement.bottom, unscaledHeight);
                var percentWidth = layoutElement.percentWidth;
                var percentHeight = layoutElement.percentHeight;
                var childWidth = NaN;
                var childHeight = NaN;
                if (!isNaN(left) && !isNaN(right)) {
                    childWidth = unscaledWidth - right - left;
                }
                else if (!isNaN(percentWidth)) {
                    childWidth = Math.round(unscaledWidth * Math.min(percentWidth * 0.01, 1));
                }
                if (!isNaN(top_1) && !isNaN(bottom)) {
                    childHeight = unscaledHeight - bottom - top_1;
                }
                else if (!isNaN(percentHeight)) {
                    childHeight = Math.round(unscaledHeight * Math.min(percentHeight * 0.01, 1));
                }
                layoutElement.explicitWidth = childWidth;
                layoutElement.explicitHeight = childHeight;
                var elementWidth = bounds.width;
                var elementHeight = bounds.height;
                var childX = NaN;
                var childY = NaN;
                if (!isNaN(hCenter)) {
                    childX = Math.round((unscaledWidth - elementWidth) / 2 + hCenter);
                }
                else if (!isNaN(left)) {
                    childX = left;
                }
                else if (!isNaN(right)) {
                    childX = unscaledWidth - elementWidth - right;
                }
                else {
                    childX = bounds.x;
                }
                if (!isNaN(vCenter)) {
                    childY = Math.round((unscaledHeight - elementHeight) / 2 + vCenter);
                }
                else if (!isNaN(top_1)) {
                    childY = top_1;
                }
                else if (!isNaN(bottom)) {
                    childY = unscaledHeight - elementHeight - bottom;
                }
                else {
                    childY = bounds.y;
                }
                layoutElement.x = childX;
                layoutElement.y = childY;
                maxX = Math.max(maxX, childX + elementWidth);
                maxY = Math.max(maxY, childY + elementHeight);
            }
        }
        Layout.BasicLayout = BasicLayout;
        function formatRelative(value, total) {
            if (!value || typeof value === 'number') {
                return value;
            }
            var str = value;
            var index = str.indexOf('%');
            if (index === -1) {
                return +str;
            }
            var percent = +str.substring(0, index);
            return percent * 0.01 * total;
        }
    })(Layout = eui.Layout || (eui.Layout = {}));
})(eui || (eui = {}));
var stats = new Stats();
stats.showPanel(0);
document.body.appendChild(stats.dom);
stats.setMargin(2);
var stageWidth = 1024;
var stageHeight = 768;
var frameID = 0;
var canvas = document.getElementById('canvas');
var app = new PIXI.CanvasRenderer(stageWidth, stageHeight, { backgroundColor: 0xf0f0f0 });
canvas.appendChild(app.view);
var stage = new PIXI.Container();
function render() {
    frameID = requestAnimationFrame(render);
    stats.begin();
    app.render(stage);
    stats.end();
}
render();
PIXI.loader.add(['assets/ccc/loding_icon.png', 'assets/scene_bg3.png', 'assets/bbb/fst_1_1.png', 'assets/bbb/fst_1_2.png']);
PIXI.loader.load(function (loader, res) {
    eui.skinDict['Test'] = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n    <e:Skin class=\"Test\" width=\"500\" height=\"250\" xmlns:e=\"http://ns.egret.com/eui\" xmlns:w=\"http://ns.egret.com/wing\" xmlns:ns1=\"*\" >\n        <e:Image anchorOffsetX=\"0\" anchorOffsetY=\"0\" rotation=\"0\" skewX=\"0\" skewY=\"0\" scaleX=\"1\" scaleY=\"1\" width=\"300%\" height=\"300%\" horizontalCenter=\"0\" verticalCenter=\"0\" source=\"assets/scene_bg3.png\"/>\n        <e:Image minWidth=\"40\" minHeight=\"40\" scale9Grid=\"37,37,226,226\" left=\"20\" right=\"20\" top=\"20\" bottom=\"20\" source=\"assets/ccc/loding_icon.png\"/>\n        <e:Button label=\"Button\" skinName=\"ButtonSkin\" right=\"0\" bottom=\"0\" icon=\"assets/bbb/fst_1_2.png\"/>\n    </e:Skin>";
    eui.skinDict['ButtonSkin'] = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<e:Skin class=\"ButtonSkin\" currentState=\"up\" xmlns:e=\"http://ns.egret.com/eui\" xmlns:w=\"http://ns.egret.com/wing\" states=\"up,down,disable\" >\n\t<e:Image id=\"iconDisplay\" anchorOffsetX=\"0\" anchorOffsetY=\"0\" scaleX.disable=\"1\" scaleY.disable=\"1\" x.disable=\"0\" y.disable=\"0\" left.down=\"20\" right.down=\"20\" top.down=\"20\" bottom.down=\"20\" width.down=\"230\" height.down=\"230\" name.up=\"1\" name.down=\"2\" source=\"assets/bbb/fst_1_2.png\" source.disable=\"assets/bbb/fst_1_3.png\" left.up=\"0\" right.up=\"0\" top.up=\"0\" bottom.up=\"0\" source.down=\"assets/bbb/fst_1_1.png\"/>\n\t<e:Label text=\"disable\" includeIn=\"disable\" x=\"14\" y=\"89.39\"/>\n\t<e:Label text=\"up\" includeIn=\"up,down\" x.disable=\"16\" y.disable=\"24\" text.down=\"down\" y.up=\"31\" left.down=\"0\" top.down=\"165\" x.up=\"28\"/>\n</e:Skin>";
    eui.skinDict['Scene'] = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n    <e:Skin class=\"Scene\" width=\"3024\" height=\"768\" xmlns:e=\"http://ns.egret.com/eui\" hostComponent=\"fuck\"    >\n        <e:Component skinName=\"Test\" anchorOffsetX=\"0\" anchorOffsetY=\"0\" width=\"300%\" height=\"80%\" x=\"0\" verticalCenter=\"0\"/>\n        <e:Group height=\"200\" y=\"22\" left=\"0\" right=\"0\">\n            <e:layout>\n                <e:BasicLayout/>\n            </e:layout>\n            <e:Image width=\"20%\" height=\"300%\" x=\"203\" y=\"0\" source=\"assets/bbb/fst_1_2.png\" anchorOffsetX=\"0\" anchorOffsetY=\"0\"/>\n            <e:Image source=\"assets/bbb/fst_1_2.png\" left=\"300\" right=\"300\" top=\"0\" bottom=\"0\"/>\n        </e:Group>\n    </e:Skin>";
    var component = new eui.Component();
    eui.ConfigParser.parseSkinConfig(component, 'Scene');
    var a = new PIXI.Sprite(PIXI.utils.TextureCache['assets/bbb/fst_1_2.png']);
    stage.addChild(a);
    var b = new PIXI.Sprite(PIXI.utils.TextureCache['assets/bbb/fst_1_1.png']);
    stage.addChild(b);
    b.x = 200;
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    var texture = PIXI.utils.TextureCache['assets/scene_bg3.png'];
    canvas.width = 1024;
    canvas.height = 768;
    ctx.drawImage(texture.baseTexture.source, 0, 0);
    var tt = new PIXI.Texture(new PIXI.BaseTexture(canvas));
    var sp = new PIXI.Sprite(tt);
    stage.addChild(sp);
    sp.interactive = true;
    var start;
    sp.on('pointerdown', function (evt) {
        start = evt.data.global.clone();
        clear(start.x, start.y, start.x, start.y);
    }, sp);
    sp.on('pointermove', function (evt) {
        if (start == null) {
            return;
        }
        var end = evt.data.global;
        clear(start.x, start.y, end.x, end.y);
        start = end.clone();
    }, sp);
    sp.on('pointerup', function (evt) {
        start = null;
    }, sp);
    sp.on('pointerout', function (evt) {
        start = null;
    }, sp);
    sp.on('pointerupoutside', function (evt) {
        start = null;
    }, sp);
    function clear(x1, y1, x2, y2) {
        var r = 30;
        ctx.save();
        ctx.beginPath();
        ctx.arc(x1, y1, r, 0, 2 * Math.PI);
        ctx.clip();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.restore();
        var rad = Math.atan((y2 - y1) / (x2 - x1));
        var a = r * Math.sin(rad);
        var b = r * Math.cos(rad);
        var x3 = x1 + a;
        var y3 = y1 - b;
        var x4 = x1 - a;
        var y4 = y1 + b;
        var x5 = x2 + a;
        var y5 = y2 - b;
        var x6 = x2 - a;
        var y6 = y2 + b;
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(x3, y3);
        ctx.lineTo(x5, y5);
        ctx.lineTo(x6, y6);
        ctx.lineTo(x4, y4);
        ctx.closePath();
        ctx.clip();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.restore();
        ctx.save();
        ctx.beginPath();
        ctx.arc(x2, y2, r, 0, 2 * Math.PI);
        ctx.clip();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.restore();
    }
});
//# sourceMappingURL=test.js.map