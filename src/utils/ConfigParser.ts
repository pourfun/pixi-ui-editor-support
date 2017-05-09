namespace eui {

    // 存放所有皮肤配置
    export const skinDict: any = {

    };

    skinDict.Scene = JSON.parse(`{
        "children": [
            {
                "anchorOffsetX": "0",
                "anchorOffsetY": "0",
                "hasChild": false,
                "height": "607.33",
                "skinName": "Test",
                "type": "e:Component",
                "width": "878",
                "x": "81",
                "x.aaa": "106",
                "y": "88",
                "y.aaa": "12"
            },
            {
                "anchorOffsetX": "0",
                "anchorOffsetY": "0",
                "enabled": "true",
                "hasChild": false,
                "height": "213",
                "type": "e:Component",
                "width": "204",
                "x": "43",
                "y": "52"
            }
        ],
        "class": "Scene",
        "hasChild": true,
        "height": "768",
        "hostComponent": "aaa",
        "states": "aaa",
        "type": "e:Skin",
        "width": "1024"
    }

    `);

    skinDict.Test = JSON.parse(`{
        "children": [
            {
                "hasChild": false,
                "id": "15bec211e0b",
                "type": "w:Config"
            },
            {
                "anchorOffsetX": "0",
                "anchorOffsetY": "0",
                "hasChild": false,
                "height": "100%",
                "horizontalCenter": "0",
                "rotation": "0",
                "scaleX": "1",
                "scaleY": "1",
                "skewX": "0",
                "skewY": "0",
                "source": "assets/scene_bg3.png",
                "type": "e:Image",
                "verticalCenter": "0",
                "width": "100%"
            },
            {
                "bottom": "20",
                "hasChild": false,
                "left": "20",
                "minHeight": "40",
                "minWidth": "40",
                "right": "20",
                "source": "assets/ccc/loding_icon.png",
                "top": "20",
                "type": "e:Image"
            },
            {
                "hasChild": false,
                "icon": "fst_1_1_png",
                "label": "Button",
                "skinName": "ButtonSkin",
                "type": "e:Button",
                "x": "300",
                "y": "50"
            }
        ],
        "class": "Test",
        "hasChild": true,
        "height": "250",
        "type": "e:Skin",
        "width": "500",
        "xmlns:e": "http://ns.egret.com/eui",
        "xmlns:ns1": "*",
        "xmlns:w": "http://ns.egret.com/wing"
    }`);

    skinDict.ButtonSkin = JSON.parse(`{
        "children": [
            {
                "anchorOffsetX": "0",
                "anchorOffsetY": "0",
                "bottom.down": "20",
                "hasChild": false,
                "height.down": "210",
                "id": "iconDisplay",
                "left.down": "20",
                "right.down": "20",
                "scaleX.disable": "1",
                "scaleY.disable": "1",
                "source": "assets/bbb/fst_1_1.png",
                "source.disable": "assets/aaa/default_boy_mc.png",
                "top.down": "20",
                "type": "e:Image",
                "width.down": "210",
                "x.disable": "62.52",
                "x.up": "0",
                "y.disable": "39.39",
                "y.up": "0"
            },
            {
                "hasChild": false,
                "includeIn": "disable",
                "text": "disable",
                "type": "e:Label",
                "x": "154",
                "y": "9.39"
            },
            {
                "hasChild": false,
                "includeIn": "up,down",
                "text": "up",
                "text.down": "down",
                "type": "e:Label",
                "x.disable": "16",
                "x.down": "0",
                "y": "24",
                "y.down": "165",
                "y.up": "20"
            }
        ],
        "class": "ButtonSkin",
        "currentState": "up",
        "hasChild": true,
        "states": "up,down,disable",
        "type": "e:Skin",
        "xmlns:e": "http://ns.egret.com/eui",
        "xmlns:w": "http://ns.egret.com/wing"
    }`);

    export interface ComponentConfig {
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
        states?: string;

        scale9Grid?: string;

        skin?: string;
        skinName?: string;
    }

    export const varsDict: ComponentConfig = {};

    const assignmentOrder: any = {
        Component: [],

    };

    const varsHandler: any = {
        states: (target: CompatibilityContainer, value: string) => {
            let states: string[] = value.split(',');
            target.states = states;
            if (states.length > 0 && target.currentState == null) {
                target.currentState = states[0];
            }
        },

        x: (target: CompatibilityContainer, value: string) => {
            target.x = parseFloat(value) || target.x;
        },
        y: (target: CompatibilityContainer, value: string) => {
            target.y = parseFloat(value) || target.y;
        },
        visbile: (target: CompatibilityContainer, value: string) => {
            // 暂时不支持visbile, pixi和egret对visible的实现不同
            // target.visible = getBoolean(value);
        },
        width: (target: CompatibilityContainer, value: string) => {

        },
        height: (target: CompatibilityContainer, value: string) => {

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
        enable: (target: Component, value: string) => {
            target.enable = getBoolean(value);
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
        // 用visbile实现状态切换，实际切换状态时对象还在显示列表
        includeIn: (target: CompatibilityContainer, value: string, parent?: CompatibilityContainer) => {
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
    };


    // 根据配置构建显示对象
    export const createComponentDict: any = {
        Component: (config: any) => {
            let instance: Component = new Component();

            return instance;
        },
        Group: (config: any) => {

        },
    };


    export function parseSkin(config: any, component?: Component): Component {
        if (config == null) {
            return null;
        }
        let type: string = config.type;
        type = type.substr(2, type.length - 2);
        let instance;
        if (component == null) {
            instance = new Component();
        } else {

        }
        let handler = createComponentDict[type];
        if (handler != null) {
            instance = handler(config);
        }

        return instance;
    }



    function getBoolean(value: any): boolean {
        if (value === 'true' || value === true) {
            return true;
        } else {
            return false;
        }
    }
}
