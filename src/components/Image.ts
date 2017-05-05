namespace eui {

    export class Image extends CompatibilityContainer {

        constructor() {
            super();
        }


        private _scale9Grid: PIXI.Rectangle;
        public set scale9Grid(value: PIXI.Rectangle) {
            this._scale9Grid = value;
        }
        public get scale9Grid(): PIXI.Rectangle {
            return this._scale9Grid;
        }


        // TODO clip, repeat, scale
        public set fillMode(value: string) {

        }
        public get fillMode(): string {
            return null;
        }


        private _source: string | PIXI.Texture;
        public set source(value: string | PIXI.Texture) {

        }
        public get source(): string | PIXI.Texture {
            return null;
        }
    }

}
