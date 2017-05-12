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
let app = PIXI.autoDetectRenderer(stageWidth, stageHeight, {backgroundColor: 0xf0f0f0});
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

PIXI.loader.add(['assets/ccc/loding_icon.png', 'assets/scene_bg3.png', 'assets/bbb/fst_1_1.png']);
PIXI.loader.load((loader: PIXI.loaders.Loader, res: {[key: string]: PIXI.loaders.Resource}) => {

    let cfg: any = `<e:Skin class="Test" width="500" height="250" xmlns:e="http://ns.egret.com/eui" xmlns:w="http://ns.egret.com/wing" xmlns:ns1="*" >
        <e:Image id="test" anchorOffsetX="0" anchorOffsetY="0" source="assets/scene_bg3.png" rotation="0" skewX="0" skewY="0" scaleX="1" scaleY="1" width="100%" height="100%" horizontalCenter="0" verticalCenter="0"/>
        <e:Image id="test2" source="assets/ccc/loding_icon.png" minWidth="40" minHeight="40" scale9Grid="37,37,226,226" left="20" right="20" top="20" bottom="20"/>
        <e:Button id="test3" label="Button" icon="assets/bbb/fst_1_1.png" skinName="ButtonSkin" x="300" y="50"/>
    </e:Skin>`;
    eui.skinDict['Test'] = cfg;
    eui.skinDict['ButtonSkin'] = `<e:Skin class="ButtonSkin" currentState="up" xmlns:e="http://ns.egret.com/eui" xmlns:w="http://ns.egret.com/wing" states="up,down,disable" >
        <e:Image id="iconDisplay" anchorOffsetX="0" anchorOffsetY="0" source="assets/bbb/fst_1_1.png" source.disable="default_boy_mc_png" scaleX.disable="1" scaleY.disable="1" x.disable="62.52" y.disable="39.39" x.up="0" y.up="0" left.down="20" right.down="20" top.down="20" bottom.down="20" width.down="210" height.down="210" name.up="1" name.down="2"/>
        <e:Label id="test4" text="disable" includeIn="disable" x="154" y="9.39"/>
        <e:Label id="test5" text="up" includeIn="up,down" x.disable="16" y.disable="24" text.down="down" y.up="20" left.down="0" top.down="165"/>
    </e:Skin>`;

    let component: eui.Component = new eui.Component();
    eui.ConfigParser.parseSkinConfig(component, 'Test');
    stage.addChild(component);
});

