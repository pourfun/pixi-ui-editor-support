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
let app: PIXI.Application = new PIXI.Application(stageWidth, stageHeight, {
    resolution: 1,
    backgroundColor: 0xf0f0f0,
}, false);
let stage: PIXI.Container = app.stage;
canvas.appendChild(app.view);
function render() {
    frameID = requestAnimationFrame(render);
    stats.begin();
    app.render();
    stats.end();
}
render();

