namespace eui {

    interface ComponentVariables extends UIComponentVariables {
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
            if (value == null || value === this.vars.skinName) {
                return;
            }
            this.vars.skinName = value;
            this.clearChildren();
            parseSkinConfig(this, value);
        }
        public get skinName(): string {
            return this.vars.skinName;
        }

        protected clearChildren(): void {
            let children: PIXI.DisplayObject[] = this.children;
            for (let i: number = children.length - 1; i >= 0 ; i --) {
                children[i].destroy();
            }
        }
    }

}
