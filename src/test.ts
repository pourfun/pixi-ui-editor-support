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
let app = new PIXI.WebGLRenderer(stageWidth, stageHeight);
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

PIXI.loader.add(['../assets/1.png', '../assets/2.png']);
PIXI.loader.load((loader: PIXI.loaders.Loader, res: {[key: string]: PIXI.loaders.Resource}) => {
    let t1: PIXI.Texture = PIXI.utils.TextureCache['../assets/1.png'];
    let t2: PIXI.Texture = PIXI.utils.TextureCache['../assets/2.png'];
    let img: eui.Image = new eui.Image();
    img.source = t1;
    stage.addChild(img);
    img.scale9Grid = '10,10,20,20';
    img.width = 500;
    img.height = 500;
    img.source = null;
    img.source = t2;
});

