namespace eui {

    interface ImageVariables extends UIComponentVariables {
        range: PIXI.Rectangle;
        scale9Grid: string;
        texture: PIXI.Texture;
        scale9Textures: PIXI.Texture[];
        source: string | PIXI.Texture;
    }

    export class Image extends CompatibilityContainer {

        constructor() {
            super();

            this.vars.range = new PIXI.Rectangle();
        }

        protected vars: ImageVariables;


        public set width(value: number) {
            if (this.vars.scale9Grid != null) {
                this.updateLocs();
            } else {
                let width = this.getLocalBounds().width;

                if (width !== 0) {
                    this.scale.x = value / width;
                } else {
                    this.scale.x = 1;
                }

                this['_width'] = value;
            }
        }

        public get width(): number {
            return this.scale.x * this.getLocalBounds().width;
        }


        public set height(value: number) {
            if (this.vars.scale9Grid != null) {
                this.updateLocs();
            } else {
                let height = this.getLocalBounds().height;

                if (height !== 0) {
                    this.scale.y = value / height;
                } else {
                    this.scale.y = 1;
                }

                this['_height'] = value;
            }
        }

        public get height(): number {
            return this.scale.y * this.getLocalBounds().height;
        }


        public set scale9Grid(value: string) {
            if (value != null && value === this.vars.scale9Grid) {
                return;
            }
            this.vars.scale9Grid = value;
            this.updateView();
        }
        public get scale9Grid(): string {
            return this.vars.scale9Grid;
        }


        // TODO clip, repeat, scale
        public set fillMode(value: string) {

        }
        public get fillMode(): string {
            return null;
        }


        public get texture(): PIXI.Texture {
            return this.vars.texture;
        }


        public set source(value: string | PIXI.Texture) {
            if (value == null) {
                this.vars.texture = PIXI.Texture.EMPTY;
                this.vars.source = null;
                this.updateView();
            } else if (value instanceof PIXI.Texture) {
                this.vars.texture = value;
                this.vars.source = value;
                this.updateView();
            } else if (typeof value === 'string') {
                let texture: PIXI.Texture = PIXI.utils.TextureCache[value];
                this.vars.source = value;
                if (texture != null) {
                    this.vars.texture = texture;
                    this.vars.source = value;
                    this.updateView();
                } else {
                    this.vars.texture = PIXI.Texture.fromImage(value as string);
                    this.vars.texture.once('update', () => {
                        if (this.destroyed) {
                            return;
                        }
                        this.updateView();
                    }, this);
                }
            }
        }
        public get source(): string | PIXI.Texture {
            return this.vars.source;
        }


        private updateView(): void {
            if (this.vars.scale9Grid == null) {
                this.vars.range.x = 0;
                this.vars.range.y = 0;
                this.vars.range.width = 0;
                this.vars.range.height = 0;
                this.clearSprites();
                let sprite: PIXI.Sprite = new PIXI.Sprite();
                sprite.texture = this.vars.texture || PIXI.Texture.EMPTY;
                this.addChild(sprite);
                this.width = this.vars.explicitWidth;
                this.height = this.vars.explicitHeight;
            } else {
                let configList: string[] = this.vars.scale9Grid.split(',');
                if (configList.length < 4) {
                    return;
                }
                this.vars.range.x = parseInt(configList[0], 10);
                this.vars.range.y = parseInt(configList[1], 10);
                this.vars.range.width = parseInt(configList[2], 10);
                this.vars.range.height = parseInt(configList[3], 10);
                this.scale.x = 1;
                this.scale.y = 1;
                this.generateSprites();
                this.updateLocs();
            }
        }


        private clearSprites(): void {
            let children: PIXI.Sprite[] = this.children as PIXI.Sprite[];
            for (let i: number = children.length - 1; i >= 0; i--) {
                children[i].destroy();
            }
            if (this.vars.scale9Textures != null && this.vars.scale9Textures.length > 0) {
                for (let i: number = this.vars.scale9Textures.length - 1; i >= 0; i--) {
                    this.vars.scale9Textures[i].destroy();
                }
                this.vars.scale9Textures.length = 0;
            }
        }


        protected generateTextureByRange(texture: PIXI.Texture, range: PIXI.Rectangle): PIXI.Texture {
            let newTexture: PIXI.Texture = texture.clone();
            let frame: PIXI.Rectangle = newTexture.frame.clone();
            frame.x += range.x;
            frame.y += range.y;
            frame.width = range.width;
            frame.height = range.height;
            newTexture.frame = frame;

            return newTexture;
        }


        private generateSprites(): void {
            if (this.vars.texture == null) {
                return;
            }
            let width: number = this.vars.range.width;
            let height: number = this.vars.range.height;
            let left: number = this.vars.range.x;
            let right: number = left + width;
            let top: number = this.vars.range.y;
            let bottom: number = top + height;
            let ranges: PIXI.Rectangle[] = [
                new PIXI.Rectangle(0, 0, left, top),
                new PIXI.Rectangle(left, 0, width, top),
                new PIXI.Rectangle(right, 0, this.vars.texture.width - right, top),
                new PIXI.Rectangle(0, top, left, height),
                new PIXI.Rectangle(left, top, width, height),
                new PIXI.Rectangle(right, top, this.vars.texture.width - right, height),
                new PIXI.Rectangle(0, bottom, left, this.vars.texture.height - bottom),
                new PIXI.Rectangle(left, bottom, width, this.vars.texture.height - bottom),
                new PIXI.Rectangle(right, bottom, this.vars.texture.width - right, this.vars.texture.height - bottom),
            ];

            this.vars.scale9Textures = this.vars.scale9Textures || [];
            this.clearSprites();
            for (let i: number = 0, len: number = ranges.length; i < len; i++) {
                let texture: PIXI.Texture = this.generateTextureByRange(this.vars.texture, ranges[i]);
                let sprite: PIXI.Sprite = new PIXI.Sprite(texture);
                this.vars.scale9Textures.push(texture);
                this.addChild(sprite);
            }
        }

        private updateLocs(): void {
            let children: PIXI.Sprite[] = this.children as PIXI.Sprite[];
            if (children.length !== 9) {
                return;
            }
            let boundX: number = children[0].width + children[2].width;
            let boundY: number = children[0].height + children[6].height;
            let thisWidth: number = this.vars.explicitWidth;
            let thisHeight: number = this.vars.explicitHeight;
            if (thisWidth >= boundX) {
                children[0].scale.x = children[2].scale.x = children[3].scale.x = children[5].scale.x = children[6].scale.x = children[8].scale.x = 1;
                children[1].width = children[4].width = children[7].width = thisWidth - boundX;
            } else {
                children[0].width = children[2].width = children[3].width = children[5].width = children[6].width = children[8].width = thisWidth * 0.5;
                children[1].width = children[4].width = children[7].width = 0;
            }
            if (thisHeight >= boundY) {
                children[0].scale.y = children[1].scale.y = children[2].scale.y = children[6].scale.y = children[7].scale.y = children[8].scale.y = 1;
                children[3].height = children[4].height = children[5].height = thisHeight - boundY;
            } else {
                children[0].height = children[1].height = children[2].height = children[6].height = children[7].height = children[8].height = thisHeight * 0.5;
                children[3].height = children[4].height = children[5].height = 0;
            }
            let w1: number = children[0].width;
            let w2: number = w1 + children[1].width;
            let h1: number = children[0].height;
            let h2: number = h1 + children[3].height;
            for (let i: number = 0; i < 3; i++) {
                children[i * 3].x = 0 - this.anchorOffsetX;
                children[i * 3 + 1].x = w1 - this.anchorOffsetX;
                children[i * 3 + 2].x = w2 - this.anchorOffsetX;
                children[i].y = 0 - this.anchorOffsetY;
                children[i + 3].y = h1 - this.anchorOffsetY;
                children[i + 6].y = h2 - this.anchorOffsetY;
            }
        }


        // override super
        public destroy(options?: PIXI.IDestroyOptions | boolean): void {
            this.clearSprites();
            super.destroy(options);
        }
    }

}
