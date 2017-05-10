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

PIXI.loader.add([]);
PIXI.loader.load((loader: PIXI.loaders.Loader, res: {[key: string]: PIXI.loaders.Resource}) => {
});

