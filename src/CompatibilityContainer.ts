namespace eui {

    export interface UIComponentVariables {
        left: string;
        right: string;
        top: string;
        bottom: string;
        horizontalCenter: string;
        verticalCenter: string;
        percentWidth: number;
        percentHeight: number;
        explicitWidth: number;
        explicitHeight: number;
        width: number;
        height: number;
        oldX: number;
        oldY: number;
        oldWidth: number;
        oldHeight: number;
    }

    export class CompatibilityContainer extends PIXI.Container implements UIComponent {

        constructor() {
            super();

            this.vars = {
                left: null,
                right: null,
                top: null,
                bottom: null,
                horizontalCenter: null,
                verticalCenter: null,
                percentWidth: NaN,
                percentHeight: NaN,
                explicitWidth: NaN,
                explicitHeight: NaN,
                width: 0,
                height: 0,
                oldX: 0,
                oldY: 0,
                oldWidth: 0,
                oldHeight: 0,
            };
        }

        public vars: UIComponentVariables;


        public id: string;


        public userData: any;


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


        // TODO
        private _scaleX: number = 1;
        public set scaleX(value: number) {
            if (value == null) {
                return;
            }
            let trueWidth: number = this.width / this._scaleX;
            this._scaleX = +value;
            this.width = this._scaleX * trueWidth;
        }
        public get scaleX(): number {
            return this._scaleX;
        }


        // TODO
        private _scaleY: number = 1;
        public set scaleY(value: number) {
            if (value == null) {
                return;
            }
            let trueHeight: number = this.height / this._scaleY;
            this._scaleY = +value;
            this.height = this._scaleY * trueHeight;
        }
        public get scaleY(): number {
            return this._scaleY;
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


        public percentWidth: number;


        public percentHeight: number;


        public explicitWidth: number;


        public explicitHeight: number;


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
