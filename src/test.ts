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

PIXI.loader.add(['assets/ccc/loding_icon.png', 'assets/scene_bg3.png']);
PIXI.loader.load((loader: PIXI.loaders.Loader, res: {[key: string]: PIXI.loaders.Resource}) => {

    let cfg: any = JSON.parse(`{
        "children": [
            {
                "hasChild": false,
                "id": "15bec211e0b",
                "type": "w:Config"
            },
            {
                "anchorOffsetX": "0",
                "anchorOffsetY": "0",
                "hasChild": false,
                "height": "100%",
                "horizontalCenter": "0",
                "rotation": "0",
                "scaleX": "1",
                "scaleY": "1",
                "skewX": "0",
                "skewY": "0",
                "source": "assets/scene_bg3.png",
                "type": "e:Image",
                "verticalCenter": "0",
                "width": "100%"
            },
            {
                "bottom": "20",
                "hasChild": false,
                "left": "20",
                "minHeight": "40",
                "minWidth": "40",
                "right": "20",
                "source": "assets/ccc/loding_icon.png",
                "top": "20",
                "type": "e:Image",
                "width": "500",
                "height": "500",
                "scale9Grid": "114,114,75,71"
            },
            {
                "hasChild": false,
                "icon": "fst_1_1_png",
                "label": "Button",
                "skinName": "ButtonSkin",
                "type": "e:Button",
                "x": "300",
                "y": "50"
            }
        ],
        "class": "Test",
        "hasChild": true,
        "height": "250",
        "type": "e:Skin",
        "width": "500",
        "xmlns:e": "http://ns.egret.com/eui",
        "xmlns:ns1": "*",
        "xmlns:w": "http://ns.egret.com/wing"
    }`);
    eui.skinDict['Test'] = cfg;

    let component: eui.Component = new eui.Component();
    eui.ConfigParser.parseSkinConfig(component, 'Test');
    stage.addChild(component);

    // let img: PIXI.Sprite = new PIXI.Sprite();
    // img.texture =  PIXI.utils.TextureCache[ 'assets/scene_bg3.png'];
    // let img: eui.Image = new eui.Image();
    // img.source = 'assets/ccc/loding_icon.png';
    // stage.addChild(img);
});

