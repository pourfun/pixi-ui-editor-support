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
    var CompatibilityContainer = (function (_super) {
        __extends(CompatibilityContainer, _super);
        function CompatibilityContainer() {
            return _super.call(this) || this;
        }
        Object.defineProperty(CompatibilityContainer.prototype, "skewX", {
            get: function () {
                return this.skew.x;
            },
            set: function (value) {
                this.skew.x = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CompatibilityContainer.prototype, "skewY", {
            get: function () {
                return this.skew.y;
            },
            set: function (value) {
                this.skew.y = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CompatibilityContainer.prototype, "scaleX", {
            get: function () {
                return this.scale.x;
            },
            set: function (value) {
                this.scale.x = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CompatibilityContainer.prototype, "scaleY", {
            get: function () {
                return this.scale.y;
            },
            set: function (value) {
                this.scale.y = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CompatibilityContainer.prototype, "anchorOffsetX", {
            get: function () {
                return this.pivot.x;
            },
            set: function (value) {
                this.pivot.x = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CompatibilityContainer.prototype, "anchorOffsetY", {
            get: function () {
                return this.pivot.y;
            },
            set: function (value) {
                this.pivot.y = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CompatibilityContainer.prototype, "states", {
            get: function () {
                return this._states;
            },
            set: function (value) {
                if (value == null) {
                    return;
                }
                if (value.length === 0) {
                    return;
                }
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
                var newState = this._states[value];
                if (newState == null || newState === this._currentState) {
                    return;
                }
                this._currentState = value;
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
                return null;
            },
            set: function (value) {
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Component.prototype, "skin", {
            get: function () {
                return null;
            },
            set: function (value) {
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
            return _super.call(this) || this;
        }
        Object.defineProperty(Group.prototype, "contentWidth", {
            get: function () {
                return this._contentWidth;
            },
            set: function (value) {
                this._contentWidth = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Group.prototype, "contentHeight", {
            get: function () {
                return this._contentHeight;
            },
            set: function (value) {
                this._contentHeight = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Group.prototype, "scrollH", {
            get: function () {
                return this._scrollH;
            },
            set: function (value) {
                this._scrollH = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Group.prototype, "scrollV", {
            get: function () {
                return this._scrollV;
            },
            set: function (value) {
                this._scrollV = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Group.prototype, "scrollEnabled", {
            get: function () {
                return this._scrollEnabled;
            },
            set: function (value) {
                this._scrollEnabled = value;
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
            return _super.call(this) || this;
        }
        Object.defineProperty(Image.prototype, "scale9Grid", {
            get: function () {
                return this._scale9Grid;
            },
            set: function (value) {
                this._scale9Grid = value;
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
        Object.defineProperty(Image.prototype, "source", {
            get: function () {
                return null;
            },
            set: function (value) {
            },
            enumerable: true,
            configurable: true
        });
        return Image;
    }(eui.CompatibilityContainer));
    eui.Image = Image;
})(eui || (eui = {}));
var stats = new Stats();
stats.showPanel(0);
document.body.appendChild(stats.dom);
stats.setMargin(2);
var stageWidth = 1024;
var stageHeight = 768;
var frameID = 0;
var canvas = document.getElementById('canvas');
var app = new PIXI.Application(stageWidth, stageHeight, {
    resolution: 1,
    backgroundColor: 0xf0f0f0,
}, false);
var stage = app.stage;
canvas.appendChild(app.view);
function render() {
    frameID = requestAnimationFrame(render);
    stats.begin();
    app.render();
    stats.end();
}
render();
//# sourceMappingURL=test.js.map