namespace eui {

    export interface GroupVariables extends UIComponentVariables {
        contentWidth?: number;
        contentHeight?: number;
        scrollH?: number;
        scrollV?: number;
        scrollEnabled?: boolean;
    }

    export class Group extends CompatibilityContainer {

        constructor() {
            super();

            this._type = TYPE_GROUP;
        }


        public vars: GroupVariables = {};


        public set contentWidth(value: number) {
            this.vars.contentWidth = +value;
        }
        public get contentWidth(): number {
            return this.vars.contentWidth;
        }


        public set contentHeight(value: number) {
            this.vars.contentHeight = +value;
        }
        public get contentHeight(): number {
            return this.vars.contentHeight;
        }


        public set scrollH(value: number) {
            this.vars.scrollH = +value;
        }
        public get scrollH(): number {
            return this.vars.scrollH;
        }


        public set scrollV(value: number) {
            this.vars.scrollV = +value;
        }
        public get scrollV(): number {
            return this.vars.scrollV;
        }


        public set scrollEnabled(value: boolean) {
            this.vars.scrollEnabled = !!value;
        }
        public get scrollEnabled(): boolean {
            return this.vars.scrollEnabled;
        }
    }

}
