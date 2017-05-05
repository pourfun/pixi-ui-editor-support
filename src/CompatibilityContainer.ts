namespace eui {

    export class CompatibilityContainer extends PIXI.Container {

        constructor() {
            super();
        }



        public set skewX(value: number) {
            this.skew.x = value;
        }
        public get skewX(): number {
            return this.skew.x;
        }


        public set skewY(value: number) {
            this.skew.y = value;
        }
        public get skewY(): number {
            return this.skew.y;
        }


        public set scaleX(value: number) {
            this.scale.x = value;
        }
        public get scaleX(): number {
            return this.scale.x;
        }


        public set scaleY(value: number) {
            this.scale.y = value;
        }
        public get scaleY(): number {
            return this.scale.y;
        }


        public set anchorOffsetX(value: number) {
            this.pivot.x = value;
        }
        public get anchorOffsetX(): number {
            return this.pivot.x;
        }


        public set anchorOffsetY(value: number) {
            this.pivot.y = value;
        }
        public get anchorOffsetY(): number {
            return this.pivot.y;
        }


        public id: string;

        public includeInLayout: boolean;


        public left: any;


        public right: any;


        public top: any;


        public bottom: any;


        public horizontalCenter: any;


        public verticalCenter: any;


        public percentWidth: number;


        public percentHeight: number;


        public explicitWidth: number;


        public explicitHeight: number;


        public minWidth: number;


        public maxWidth: number;


        public minHeight: number;


        public maxHeight: number;


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
    }

}
