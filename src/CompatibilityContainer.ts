namespace eui {

    export interface UIComponentVariables {
        left?: string;
        right?: string;
        top?: string;
        bottom?: string;
        horizontalCenter?: string;
        verticalCenter?: string;
    }

    export class CompatibilityContainer extends PIXI.Container implements UIComponent {

        constructor() {
            super();
        }

        public vars: UIComponentVariables = {};


        public id: string;


        public userData: any;


        protected _type: string;
        public get type(): string {
            return this._type;
        }


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


        protected _states: {[key: string]: {[key: string]: string | number}}[];
        public set states(value: {[key: string]: {[key: string]: string | number}}[]) {
            if (value == null) {
                return;
            }
            if (value.length === 0) {
                return;
            }
            this._states = value;
        }
        public get states(): {[key: string]: {[key: string]: string | number}}[] {
            return this._states;
        }

        protected _currentState: string;
        public set currentState(value: string) {
            let newState: string = this._states[value];
            if (newState == null || newState === this._currentState) {
                return;
            }
            this._currentState = value;
            // TODO
        }
        public get currentState(): string {
            return this._currentState;
        }


        protected _destroyed: boolean;
        public get destroyed(): boolean
        {
            return this._destroyed;
        }
    }

}
