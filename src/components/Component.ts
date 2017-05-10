namespace eui {

    export interface ComponentVariables extends UIComponentVariables {
        skinName?: string;
        enable?: boolean;
    }


    export class Component extends CompatibilityContainer {

        constructor() {
            super();
        }

        protected vars: ComponentVariables;


        public set enable(value: boolean) {
            this.vars.enable = !!value;
        }
        public get enable(): boolean {
            return this.vars.enable;
        }


        public set skinName(value: string) {
            this.vars.skinName = value;
        }
        public get skinName(): string {
            return this.vars.skinName;
        }
    }

}
