namespace eui {

    // 存放所有皮肤配置
    export const skinDict: any = {

    };

    const propertiesConfigVars: string[] = [
        'type',
        'skinName',
        // TODO
        'source',
        'scale9Grid',

        'x',
        'y',
        'visbile',
        'width',
        'height',
        'alpha',
        'anchorOffsetX',
        'anchorOffsetY',
        'skewX',
        'skewY',
        'scaleX',
        'scaleY',
        'rotation',
        'touchEnable',
        'touchChildren',
        'name',
        'id',
        'hostComponentKey',
        'includeIn',
        'includeInLayout',
        'top',
        'left',
        'right',
        'bottom',
        'verticalCenter',
        'horizontalCenter',
    ];
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
        enable?: string;

        scale9Grid?: string;
    }


    // 即时生效的属性
    const variablesHandler: any = {
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

        currentState: (target: CompatibilityContainer, value: string) => {
            let children: PIXI.DisplayObject[] = target.children;
            for (let i: number = 0; i < children.length; i ++) {
                (children[i] as CompatibilityContainer).currentState = value;
            }
        },

        type: (target: CompatibilityContainer, value: any) => {

        },

        children: (target: CompatibilityContainer, value: any) => {
            let children: any[] = value;
            for (let i: number = 0; i < children.length; i ++) {
                let config: any = children[i];
                let type: string = config.type;
                type = type.substr(2, type.length - 1);
                if (createComponentDict[type] != null) {
                    let comp: CompatibilityContainer = createComponentDict[type](config);
                    target.addChild(comp);
                    comp.config = config;
                }
            }
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

    // 禁止使用的属性
    export const prohibitionVariablesHandler: any = {

    };


    // 设置组件属性的顺序

    // 使用配置设置组件属性
    export function setComponentProperties(target: CompatibilityContainer, config: any): void {
        let orderVars: any = {};
        for (let key in config) {
            if (!config.hasOwnProperty(key)) {
                continue;
            }
            // 排除禁止使用的属性
            if (prohibitionVariablesHandler[key] != null) {
                continue;
            }
            for (let i: number = 0; i < propertiesConfigVars.length; i ++) {
            let key: string = config[i];
            if (config[key] != null) {
                variablesHandler[key](target, config[key]);
            }
        }
        }
    }


    // 解析皮肤时属性顺序
    const skinConfigVars: string[] = [
        'hostComponent',
        'states',
        'width',
        'height',
        'children',
        'currentState',
    ];
    // 解析皮肤配置
    export function parseSkinConfig(target: Component, skinName: string): void {
        if (skinDict[skinName] == null) {
            // TODO throw error?
            return;
        }
        let skinConfig: any = skinDict[skinName];
        for (let i: number = 0; i < skinConfigVars.length; i ++) {
            let key: string = skinConfigVars[i];
            if (skinConfig[key] != null) {
                variablesHandler[key](target, skinConfig[key]);
            }
        }
    }


    // 根据传入配置转换成组件可用带状态的配置
    export function convertSkinConfig(skinConfig: any): any {
        let config: any = {};
        let defaultConfig: any = {};
        for (let key in skinConfig) {
            if (!skinConfig.hasOwnProperty(key)) {
                continue;
            }
            let value: string = skinConfig[key];
            // 暂时使用点分隔符判定属性和状态
            let subs: string[] = key.split('.');
            if (subs.length === 1) {
                defaultConfig[key] = value;
            } else if (subs.length === 2) {
                let state: string = subs[1];
                if (config[state] == null) {
                    config[state] = {};
                }
                config[state][subs[0]] = value;
            } else {
                // TODO throw error?
            }
        }

        for (let cfgKey in config) {
            if (!config.hasOwnProperty(cfgKey)) {
                continue;
            }
            let stateConfig = config[cfgKey];
            for (let key in defaultConfig) {
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
    }


    // 根据配置构建显示对象
    export const createComponentDict: any = {
        Component: (config: any) => {
            let instance: Component = new Component();

            return instance;
        },
        Group: (config: any) => {
            let instance: Group = new Group();

            return instance;
        },
        Image: (config: any) => {
            let instance: Image = new Image();

            return instance;
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
