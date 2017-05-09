namespace eui {

    export interface UIComponentVariables {
        left?: string;
        right?: string;
        top?: string;
        bottom?: string;
        horizontalCenter?: string;
        verticalCenter?: string;

        includeInLayout?: boolean;
        states?: string[];

        currentState?: string;

        stateConfigDict?: any;
    }

    export class CompatibilityContainer extends PIXI.Container implements UIComponent {

        constructor() {
            super();

            this.on(EVENT_ADDED, this.onAdded, this);
            this.on(EVENT_REMOVED, this.onRemoved, this);

            this.vars.stateConfigDict = {};
        }

        public vars: UIComponentVariables = {};


        public id: string;


        public userData: any;


        protected _type: string;
        public get type(): string {
            return this._type;
        }


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

        // 组件自身具有的状态
        public set states(value: string[]) {
            if (value == null) {
                return;
            }
            this.vars.states = value;
        }
        public get states(): string[] {
            return this.vars.states;
        }
        public hasState(value: string): boolean {
            if (this.vars.states == null) {
                return false;
            }
            let states: string[] = this.vars.states;
            for (let i: number = 0; i < states.length; i ++) {
                if (states[i] === value) {
                    return true;
                }
            }

            return false;
        }
        public set currentState(value: string) {
            let newState: string = this.vars.states[value];
            if (newState == null || newState === this.vars.currentState) {
                return;
            }
            this.vars.currentState = value;
            // TODO 更新子对象显示状态
        }
        public get currentState(): string {
            return this.vars.currentState;
        }




        public addStateConfig(state: string, config: any): void {
            this.vars.stateConfigDict[state] = config;
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
