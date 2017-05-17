/// <reference path='../libs/stats.d.ts'/>
/// <reference path='./index.ts'/>

// test
let stats = new Stats();
stats.showPanel(0);
document.body.appendChild(stats.dom);
stats.setMargin(2);

let stageWidth: number = 1024;
let stageHeight: number = 768;
let frameID: number = 0;
let canvas: HTMLCanvasElement = document.getElementById('canvas') as HTMLCanvasElement;
// let app: PIXI.Application = new PIXI.Application(stageWidth, stageHeight, {
//     resolution: 1,
//     backgroundColor: 0xf0f0f0,
// }, false);
// let stage: PIXI.Container = app.stage;
// canvas.appendChild(app.view);
// let app = PIXI.autoDetectRenderer(stageWidth, stageHeight, {backgroundColor: 0xf0f0f0});
let app = new PIXI.CanvasRenderer(stageWidth, stageHeight, {backgroundColor: 0xf0f0f0});
// let app = new PIXI.WebGLRenderer(stageWidth, stageHeight, {backgroundColor: 0xf0f0f0});
canvas.appendChild(app.view);
let stage = new PIXI.Container();
function render() {
    frameID = requestAnimationFrame(render);
    stats.begin();
    // app.render();
    app.render(stage);
    stats.end();
}
render();

PIXI.loader.add(['assets/ccc/loding_icon.png', 'assets/scene_bg3.png', 'assets/bbb/fst_1_1.png', 'assets/bbb/fst_1_2.png']);
PIXI.loader.load((loader: PIXI.loaders.Loader, res: {[key: string]: PIXI.loaders.Resource}) => {

    eui.skinDict['Test'] = `<?xml version="1.0" encoding="utf-8"?>
    <e:Skin class="Test" width="500" height="250" xmlns:e="http://ns.egret.com/eui" xmlns:w="http://ns.egret.com/wing" xmlns:ns1="*" >
        <e:Image anchorOffsetX="0" anchorOffsetY="0" rotation="0" skewX="0" skewY="0" scaleX="1" scaleY="1" width="300%" height="300%" horizontalCenter="0" verticalCenter="0" source="assets/scene_bg3.png"/>
        <e:Image minWidth="40" minHeight="40" scale9Grid="37,37,226,226" left="20" right="20" top="20" bottom="20" source="assets/ccc/loding_icon.png"/>
        <e:Button label="Button" skinName="ButtonSkin" right="0" bottom="0" icon="assets/bbb/fst_1_2.png"/>
    </e:Skin>`;
    eui.skinDict['ButtonSkin'] = `<?xml version="1.0" encoding="utf-8"?>
<e:Skin class="ButtonSkin" currentState="up" xmlns:e="http://ns.egret.com/eui" xmlns:w="http://ns.egret.com/wing" states="up,down,disable" >
	<e:Image id="iconDisplay" anchorOffsetX="0" anchorOffsetY="0" scaleX.disable="1" scaleY.disable="1" x.disable="0" y.disable="0" left.down="20" right.down="20" top.down="20" bottom.down="20" width.down="230" height.down="230" name.up="1" name.down="2" source="assets/bbb/fst_1_2.png" source.disable="assets/bbb/fst_1_3.png" left.up="0" right.up="0" top.up="0" bottom.up="0" source.down="assets/bbb/fst_1_1.png"/>
	<e:Label text="disable" includeIn="disable" x="14" y="89.39"/>
	<e:Label text="up" includeIn="up,down" x.disable="16" y.disable="24" text.down="down" y.up="31" left.down="0" top.down="165" x.up="28"/>
</e:Skin>`;
    eui.skinDict['Scene'] = `<?xml version="1.0" encoding="utf-8"?>
    <e:Skin class="Scene" width="3024" height="768" xmlns:e="http://ns.egret.com/eui" hostComponent="fuck"    >
        <e:Component skinName="Test" anchorOffsetX="0" anchorOffsetY="0" width="300%" height="80%" x="0" verticalCenter="0"/>
        <e:Group height="200" y="22" left="0" right="0">
            <e:layout>
                <e:BasicLayout/>
            </e:layout>
            <e:Image width="20%" height="300%" x="203" y="0" source="assets/bbb/fst_1_2.png" anchorOffsetX="0" anchorOffsetY="0"/>
            <e:Image source="assets/bbb/fst_1_2.png" left="300" right="300" top="0" bottom="0"/>
        </e:Group>
    </e:Skin>`;

    let component: eui.Component = new eui.Component();
    eui.ConfigParser.parseSkinConfig(component, 'Scene');
    // stage.addChild(component);

    let a: PIXI.Sprite = new PIXI.Sprite(PIXI.utils.TextureCache['assets/bbb/fst_1_2.png']);
    stage.addChild(a);
    let b: PIXI.Sprite = new PIXI.Sprite(PIXI.utils.TextureCache['assets/bbb/fst_1_1.png']);
    stage.addChild(b);
    b.x = 200;

    let canvas: HTMLCanvasElement = document.createElement('canvas');
    let ctx: CanvasRenderingContext2D = canvas.getContext('2d');
    let texture: PIXI.Texture = PIXI.utils.TextureCache['assets/scene_bg3.png'];
    canvas.width = 1024;
    canvas.height = 768;
    ctx.drawImage(texture.baseTexture.source, 0, 0);


    let tt: PIXI.Texture = new PIXI.Texture(new PIXI.BaseTexture(canvas));
    let sp: PIXI.Sprite = new PIXI.Sprite(tt);
    stage.addChild(sp);
    sp.interactive = true;

    let start: PIXI.Point;
    sp.on('pointerdown', (evt: PIXI.interaction.InteractionEvent) => {
        start = evt.data.global.clone();
        clear(start.x, start.y, start.x, start.y);
    }, sp);
    sp.on('pointermove', (evt: PIXI.interaction.InteractionEvent) => {
        if (start == null)
        {
            return;
        }
        let end: PIXI.Point = evt.data.global;
        clear(start.x, start.y, end.x, end.y);
        start = end.clone();
    }, sp);
    sp.on('pointerup', (evt: PIXI.interaction.InteractionEvent) => {
        start = null;
    }, sp);
    sp.on('pointerout', (evt: PIXI.interaction.InteractionEvent) => {
        start = null;
    }, sp);
    sp.on('pointerupoutside', (evt: PIXI.interaction.InteractionEvent) => {
        start = null;
    }, sp);

    function clear(x1: number, y1: number, x2: number, y2: number): void
    {
        const r: number = 30;
        ctx.save();
        ctx.beginPath();
        ctx.arc(x1, y1, r, 0, 2 * Math.PI);
        ctx.clip();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.restore();

        let rad: number = Math.atan((y2 - y1) / (x2 - x1));
        let a: number = r * Math.sin(rad);
        let b: number = r * Math.cos(rad);
        let x3 = x1 + a;
        let y3 = y1 - b;
        let x4 = x1 - a;
        let y4 = y1 + b;
        let x5 = x2 + a;
        let y5 = y2 - b;
        let x6 = x2 - a;
        let y6 = y2 + b;

        ctx.save();
        ctx.beginPath();
        ctx.moveTo(x3, y3);
        ctx.lineTo(x5, y5);
        ctx.lineTo(x6, y6);
        ctx.lineTo(x4, y4);
        ctx.closePath();
        ctx.clip();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.restore();

        ctx.save();
        ctx.beginPath();
        ctx.arc(x2, y2, r, 0, 2 * Math.PI);
        ctx.clip();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.restore();
    }

});

