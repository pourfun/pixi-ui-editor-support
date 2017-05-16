namespace eui.ConfigParser
{
    // 根据配置构建显示对象
    const createComponentDict: any = {
        Component: (config: any) => new Component(),
        Group: (config: any) => new Group(),
        Image: (config: any) => new Image(),
        Button: (config: any) => new Button(),

        // 布局要做特殊处理
        layout: (config: any, parent: Group) =>
        {
            if (!(parent instanceof Group))
            {
                log('布局laytou，父级不是Group实例', LOG_LEVEL_WARNING);

                return;
            }
            if (config.children != null)
            {
                let type: string = config.type;
                // TODO 配置里带了 e: 以后可能去掉
                type = type.substr(2, type.length - 1);

                parent.layout = type;
            }
        },
    };

    // 属性赋值处理方法
    const variablesHandler: any = {
        // 通用
        states: (target: CompatibilityContainer, value: string) =>
        {
            let states: string[] = value.split(',');
            target.states = states;
        },

        x: (target: CompatibilityContainer, value: string) =>
        {
            target.x = parseFloat(value) || target.x;
        },
        y: (target: CompatibilityContainer, value: string) =>
        {
            target.y = parseFloat(value) || target.y;
        },
        visbile: (target: CompatibilityContainer, value: string) =>
        {
            // 暂时不支持visbile, pixi和egret对visible的实现不同
        },
        width: (target: CompatibilityContainer, value: string) =>
        {
            if (value.indexOf('%') !== -1)
            {
                target.percentWidth = parseInt(value, 10);
            }
            else
            {
                target.explicitWidth = +value;
            }
        },
        height: (target: CompatibilityContainer, value: string) =>
        {
            if (value.indexOf('%') !== -1)
            {
                target.percentHeight = parseInt(value, 10);
            }
            else
            {
                target.explicitHeight = +value;
            }
        },
        alpha: (target: CompatibilityContainer, value: string) =>
        {
            target.alpha = parseFloat(value) || target.alpha;
        },
        anchorOffsetX: (target: CompatibilityContainer, value: string) =>
        {
            target.anchorOffsetX = parseFloat(value) || target.anchorOffsetX;
        },
        anchorOffsetY: (target: CompatibilityContainer, value: string) =>
        {
            target.anchorOffsetY = parseFloat(value) || target.anchorOffsetY;
        },
        skewX: (target: CompatibilityContainer, value: string) =>
        {
            target.skewX = parseFloat(value) || target.skewX;
        },
        skewY: (target: CompatibilityContainer, value: string) =>
        {
            target.skewY = parseFloat(value) || target.skewY;
        },
        scaleX: (target: CompatibilityContainer, value: string) =>
        {

        },
        scaleY: (target: CompatibilityContainer, value: string) =>
        {

        },
        rotation: (target: CompatibilityContainer, value: string) =>
        {
            target.rotation = parseFloat(value) || target.rotation;
        },
        touchEnable: (target: CompatibilityContainer, value: string) =>
        {
            target.interactive = getBoolean(value);
        },
        touchChildren: (target: CompatibilityContainer, value: string) =>
        {
            target.interactiveChildren = getBoolean(value);
        },
        name: (target: CompatibilityContainer, value: string) =>
        {
            target.name = value;
        },
        id: (target: CompatibilityContainer, value: string) =>
        {
            target.id = value;
        },
        hostComponentKey: (target: CompatibilityContainer, value: string) =>
        {
            target.hostComponentKey = value;
        },
        includeIn: (target: CompatibilityContainer, value: string, parent?: CompatibilityContainer) =>
        {
            // 用visbile实现状态切换，实际切换状态时对象还在显示列表
            let states: string[] = value.split(',');
            if (parent && parent.currentState != null)
            {
                let visbile: boolean = false;
                for (let i: number = 0; i < states.length; i++)
                {
                    if (states[i] === parent.currentState)
                    {
                        visbile = true;
                        break;
                    }
                }
                target.visible = visbile;
            }
        },
        top: (target: CompatibilityContainer, value: string) =>
        {
            target.top = value;
        },
        left: (target: CompatibilityContainer, value: string) =>
        {
            target.left = value;
        },
        right: (target: CompatibilityContainer, value: string) =>
        {
            target.right = value;
        },
        bottom: (target: CompatibilityContainer, value: string) =>
        {
            target.bottom = value;
        },
        verticalCenter: (target: CompatibilityContainer, value: string) =>
        {
            target.verticalCenter = value;
        },
        horizontalCenter: (target: CompatibilityContainer, value: string) =>
        {
            target.horizontalCenter = value;
        },

        currentState: (target: CompatibilityContainer, value: string) =>
        {
            let children: PIXI.DisplayObject[] = target.children;
            for (let i: number = 0; i < children.length; i++)
            {
                (children[i] as CompatibilityContainer).currentState = value;
            }
        },

        children: (target: CompatibilityContainer, value: any) =>
        {
            let children: any[] = value;
            for (let i: number = 0; i < children.length; i++)
            {
                let config: any = children[i];
                let type: string = config.type;
                // TODO 配置里带了 e: 以后可能去掉
                type = type.substr(2, type.length - 1);
                if (createComponentDict[type] != null)
                {
                    let comp: any = createComponentDict[type](config, target);
                    if (comp instanceof CompatibilityContainer)
                    {
                        target.addChild(comp);
                        comp.config = config;
                    }
                }
            }
            Layout.BasicLayout(target, target.explicitWidth, target.explicitHeight);
        },


        // Component
        enable: (target: Component, value: string) =>
        {
            target.enable = getBoolean(value);
        },
        skinName: (target: Component, value: string) =>
        {
            target.skinName = value;
        },

        // Image
        scale9Grid: (target: Image, value: string) =>
        {
            target.scale9Grid = value;
        },
        source: (target: Image, value: string) =>
        {
            target.source = getTexture(value);
        },

        // Button
        icon: (target: Button, value: string) =>
        {
            target.icon = value;
        },
    };

    // 非法属性
    const invalidAttributes: any = {

    };

    // 需要在组件创建后立即按顺序赋值的属性
    const orderAttributes: any = {
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

    // 使用配置设置组件属性
    export function setComponentAttributes(target: CompatibilityContainer, config: any): void
    {
        let type: string = config.type;
        // TODO 配置里带了 e: 以后可能去掉
        type = type.substr(2, type.length - 1);
        let dict: any;
        if (orderAttributes[type] != null)
        {
            let list: string[] = orderAttributes[type].list;
            dict = orderAttributes[type].dict;
            for (let i: number = 0; i < list.length; i++)
            {
                let key: string = list[i];
                if (config[key] != null)
                {
                    variablesHandler[key](target, config[key]);
                }
            }
        }

        for (let key in config)
        {
            if (!config.hasOwnProperty(key))
            {
                continue;
            }
            // 排除非法属性
            if (invalidAttributes[key] != null)
            {
                continue;
            }
            // 已经赋值过的不再赋值
            if (dict != null && dict[key] != null)
            {
                continue;
            }
            // 处理方法里没有的不进行赋值
            if (variablesHandler[key] == null)
            {
                continue;
            }
            variablesHandler[key](target, config[key]);
        }
    }


    // 解析皮肤时属性顺序
    const skinAttributeOrder: string[] = ['states', 'width', 'height', 'children', 'currentState'];
    // 解析皮肤配置
    export function parseSkinConfig(target: Component, skinName: string): void
    {
        if (skinDict[skinName] == null)
        {
            log('解析皮肤配置没找到皮肤：' + skinName, LOG_LEVEL_WARNING);

            return;
        }
        let skinConfig: any = skinDict[skinName];
        if (typeof skinConfig === 'string')
        {
            skinConfig = parseXML(skinConfig);
        }
        for (let i: number = 0; i < skinAttributeOrder.length; i++)
        {
            let key: string = skinAttributeOrder[i];
            if (skinConfig[key] != null)
            {
                variablesHandler[key](target, skinConfig[key]);
            }
        }
    }


    // 根据传入配置转换成组件可用带状态的配置
    export function convertSkinConfig(skinConfig: any): any
    {
        let config: any = {};
        let defaultConfig: any = {};
        for (let key in skinConfig)
        {
            if (!skinConfig.hasOwnProperty(key))
            {
                continue;
            }
            let value: string = skinConfig[key];
            // 暂时使用点分隔符判定属性和状态
            let subs: string[] = key.split('.');
            if (subs.length === 1)
            {
                defaultConfig[key] = value;
            }
            else if (subs.length === 2)
            {
                let state: string = subs[1];
                if (config[state] == null)
                {
                    config[state] = {};
                }
                config[state][subs[0]] = value;
            }
            else
            {
                // TODO throw error?
                log('配置组件状态属性出现超过一个"."作为分隔符的非法配置', LOG_LEVEL_WARNING);
            }
        }

        for (let cfgKey in config)
        {
            if (!config.hasOwnProperty(cfgKey))
            {
                continue;
            }
            let stateConfig = config[cfgKey];
            for (let key in defaultConfig)
            {
                if (!defaultConfig.hasOwnProperty(key))
                {
                    continue;
                }
                if (stateConfig[key] != null)
                {
                    continue;
                }
                stateConfig[key] = defaultConfig[key];
            }
        }

        config[STATE_DEFAULT] = defaultConfig;

        return config;
    }


    function getBoolean(value: any): boolean
    {
        if (value === 'true' || value === true)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}
