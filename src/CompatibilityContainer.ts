namespace eui {

    export interface UIComponentVariables {
        left?: string;
        right?: string;
        top?: string;
        bottom?: string;
        horizontalCenter?: string;
        verticalCenter?: string;
        percentWidth?: number;
        percentHeight?: number;
        explicitWidth?: number;
        explicitHeight?: number;

        includeInLayout?: boolean;
        states?: string[];
        currentState?: string;

        // 皮肤传过来的配置
        config?: any;
        // 存放每个状态的配置信息
        stateConfigDict?: any;
    }

    export class CompatibilityContainer extends PIXI.Container implements UIComponent {

        constructor() {
            super();
            this.vars = {};
            this.on(EVENT_ADDED, this.onAdded, this);
            this.on(EVENT_REMOVED, this.onRemoved, this);
        }

        protected vars: UIComponentVariables;


        public id: string;


        public userData: any;


        public hostComponentKey: string;


        public set skewX(value: number) {
            this.skew.x = +value;
        }
        public get skewX(): number {
            return this.skew.x;
        }


        public set skewY(value: number) {
            this.skew.y = +value;
        }
        public get skewY(): number {
            return this.skew.y;
        }


        public set scaleX(value: number) {
            this.scale.x = +value;
        }
        public get scaleX(): number {
            return this.scale.x;
        }


        public set scaleY(value: number) {
            this.scale.y = +value;
        }
        public get scaleY(): number {
            return this.scale.y;
        }


        public set anchorOffsetX(value: number) {
            this.pivot.x = +value;
        }
        public get anchorOffsetX(): number {
            return this.pivot.x;
        }


        public set anchorOffsetY(value: number) {
            this.pivot.y = +value;
        }
        public get anchorOffsetY(): number {
            return this.pivot.y;
        }


        public set includeInLayout(value: boolean) {
            this.vars.includeInLayout = !!value;
        }
        public get includeInLayout(): boolean {
            return this.vars.includeInLayout;
        }


        public set left(value: string) {
            this.vars.left = value.toString();
        }
        public get left(): string {
            return this.vars.left;
        }


        public set right(value: string) {
            this.vars.right = value.toString();
        }
        public get right(): string {
            return this.vars.right;
        }


        public set top(value: string) {
            this.vars.top = value.toString();
        }
        public get top(): string {
            return this.vars.top;
        }


        public set bottom(value: string) {
            this.vars.bottom = value.toString();
        }
        public get bottom(): string {
            return this.vars.bottom;
        }


        public set horizontalCenter(value: string) {
            this.vars.horizontalCenter = value.toString();
        }
        public get horizontalCenter(): string {
            return this.vars.horizontalCenter;
        }


        public set verticalCenter(value: string) {
            this.vars.verticalCenter = value.toString();
        }
        public get verticalCenter(): string {
            return this.vars.verticalCenter;
        }


        public set percentWidth(value: number) {
            this.vars.percentWidth = +value;
        }
        public get percentWidth(): number {
            return this.vars.percentWidth;
        }


        public set percentHeight(value: number) {
            this.vars.percentHeight = +value;
        }
        public get percentHeight(): number {
            return this.vars.percentHeight;
        }


        public set explicitWidth(value: number) {
            this.vars.explicitWidth = +value;
        }
        public get explicitWidth(): number {
            return this.vars.explicitWidth;
        }


        public set explicitHeight(value: number) {
            this.vars.explicitHeight = +value;
        }
        public get explicitHeight(): number {
            return this.vars.explicitHeight;
        }


        public set states(value: string[]) {
            this.vars.states = value;
        }
        public get states(): string[] {
            return this.vars.states;
        }


        public set currentState(value: string) {
            if (this.vars.stateConfigDict == null) {
                return;
            }
            let config: any = this.vars.stateConfigDict[value];
            if (config == null) {
                return;
            }
            this.vars.currentState = value;
            this.updateConfigDisplay(config);
        }
        public get currentState(): string {
            return this.vars.currentState;
        }
        protected updateConfigDisplay(config: any): void {
            setComponentProperties(this, config);
        }


        public set config(value: any) {
            this.vars.config = value;
            this.vars.stateConfigDict = this.parseConfig(value);
        }
        public get config(): any {
            return this.vars.config;
        }
        protected parseConfig(skinConfig: any): any {
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


        protected onAdded(parent: PIXI.Container): void {

        }


        protected onRemoved(parent: PIXI.Container): void {

        }


        protected _destroyed: boolean;
        public get destroyed(): boolean
        {
            return this._destroyed;
        }
    }

}
