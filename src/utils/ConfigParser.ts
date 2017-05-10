namespace eui {

    // 存放所有皮肤配置
    export const skinDict: any = {

    };


    export interface ComponentConfig {
        states?: string;

        x?: string;
        y?: string;
        visbile?: string;
        width?: string;
        height?: string;
        alpha?: string;
        anchorOffsetX?: string;
        anchorOffsetY?: string;
        skewX?: string;
        skewY?: string;
        scaleX?: string;
        scaleY?: string;
        rotation?: string;
        touchEnable?: string;
        touchChildren?: string;
        enable?: string;

        name?: string;
        id?: string;
        hostComponentKey?: string;
        includeIn?: string;
        includeInLayout?: string;

        top?: string;
        left?: string;
        right?: string;
        bottom?: string;
        verticalCenter?: string;
        horizontalCenter?: string;

        currentState?: string;

        skinName?: string;

        scale9Grid?: string;
    }


    // 即时生效的属性
    export const immediateVarsHandler: any = {
        // 通用
        states: (target: CompatibilityContainer, value: string) => {
            let states: string[] = value.split(',');
            target.states = states;
        },

        x: (target: CompatibilityContainer, value: string) => {
            target.x = parseFloat(value) || target.x;
        },
        y: (target: CompatibilityContainer, value: string) => {
            target.y = parseFloat(value) || target.y;
        },
        visbile: (target: CompatibilityContainer, value: string) => {
            // 暂时不支持visbile, pixi和egret对visible的实现不同
        },
        width: (target: CompatibilityContainer, value: string) => {
            if (value.indexOf('%') !== -1) {
                target.percentWidth = parseInt(value, 10);
            } else {
                target.explicitWidth = +value;
                target.width = target.explicitWidth;
            }
        },
        height: (target: CompatibilityContainer, value: string) => {
            if (value.indexOf('%') !== -1) {
                target.percentHeight = parseInt(value, 10);
            } else {
                target.explicitHeight = +value;
                target.height = target.explicitHeight;
            }
        },
        alpha: (target: CompatibilityContainer, value: string) => {
            target.alpha = parseFloat(value) || target.alpha;
        },
        anchorOffsetX: (target: CompatibilityContainer, value: string) => {
            target.anchorOffsetX = parseFloat(value) || target.anchorOffsetX;
        },
        anchorOffsetY: (target: CompatibilityContainer, value: string) => {
            target.anchorOffsetY = parseFloat(value) || target.anchorOffsetY;
        },
        skewX: (target: CompatibilityContainer, value: string) => {
            target.skewX = parseFloat(value) || target.skewX;
        },
        skewY: (target: CompatibilityContainer, value: string) => {
            target.skewY = parseFloat(value) || target.skewY;
        },
        scaleX: (target: CompatibilityContainer, value: string) => {

        },
        scaleY: (target: CompatibilityContainer, value: string) => {

        },
        rotation: (target: CompatibilityContainer, value: string) => {
            target.rotation = parseFloat(value) || target.rotation;
        },
        touchEnable: (target: CompatibilityContainer, value: string) => {
            target.interactive = getBoolean(value);
        },
        touchChildren: (target: CompatibilityContainer, value: string) => {
            target.interactiveChildren = getBoolean(value);
        },
        name: (target: CompatibilityContainer, value: string) => {
            target.name = value;
        },
        id: (target: CompatibilityContainer, value: string) => {
            target.id = value;
        },
        hostComponentKey: (target: CompatibilityContainer, value: string) => {
            target.hostComponentKey = value;
        },
        includeIn: (target: CompatibilityContainer, value: string, parent?: CompatibilityContainer) => {
            // 用visbile实现状态切换，实际切换状态时对象还在显示列表
            let states: string[] = value.split(',');
            if (parent && parent.currentState != null) {
                let visbile: boolean = false;
                for (let i: number = 0; i < states.length; i ++) {
                    if (states[i] === parent.currentState) {
                        visbile = true;
                        break;
                    }
                }
                target.visible = visbile;
            }
        },
        top: (target: CompatibilityContainer, value: string) => {
            target.top = value;
        },
        left: (target: CompatibilityContainer, value: string) => {
            target.left = value;
        },
        right: (target: CompatibilityContainer, value: string) => {
            target.right = value;
        },
        bottom: (target: CompatibilityContainer, value: string) => {
            target.bottom = value;
        },
        verticalCenter: (target: CompatibilityContainer, value: string) => {
            target.verticalCenter = value;
        },
        horizontalCenter: (target: CompatibilityContainer, value: string) => {
            target.horizontalCenter = value;
        },


        // Component
        enable: (target: Component, value: string) => {
            target.enable = getBoolean(value);
        },
        skinName: (target: Component, value: string) => {
            target.skinName = value;
        },

        // Image
        scale9Grid: (target: Image, value: string) => {
            target.scale9Grid = value;
        },
        source: (target: Image, value: string) => {
            target.source = PIXI.utils.TextureCache[value];
        },
    };
    // 需要按顺序设置的属性
    export const orderVarsHandler: any = {
        // 通用
        currentState: (target: CompatibilityContainer, value: string) => {

        },

        // Component
    };
    // 设置属性的顺序
    export const varsOrder: string[] = [

    ];
    // 禁止使用的属性
    export const prohibitionVarsHandler: any = {

    };


    // 使用配置设置组件属性
    export function setComponentProperties(target: CompatibilityContainer, config: any): void {
        let orderVars: any = {};
        for (let key in config) {
            if (!config.hasOwnProperty(key)) {
                continue;
            }
            // 排除禁止使用的属性
            if (prohibitionVarsHandler[key] != null) {
                continue;
            }
            if (orderVarsHandler[key] != null) {
                // 取出需要按顺序设置的属性
                orderVars[key] = config[key];
            } else if (immediateVarsHandler[key] != null) {
                // 设置即时生效的属性
                immediateVarsHandler[key](target, config[key]);
            }
        }
        // 设置按顺序设置的属性
        for (let i: number = 0; i < varsOrder.length; i ++) {
            let key: string = varsOrder[i];
            if (orderVars[key] != null) {
                orderVarsHandler[key](target, orderVars[key]);
            }
        }
    }


    // 根据配置构建显示对象
    export const createComponentDict: any = {
        Component: (config: any) => {
            let instance: Component = new Component();

            return instance;
        },
        Group: (config: any) => {

        },
    };


    function getBoolean(value: any): boolean {
        if (value === 'true' || value === true) {
            return true;
        } else {
            return false;
        }
    }
}
