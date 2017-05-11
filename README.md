# pixi-ui-editor-support
#_0

1、禁止使用Egret编辑器时使用scaleX和scaleY属性，这个属性会在pixi中被忽略，Egret这两个属性与width和height不是联动关系，而pixi是。
2、使用Egret Wing时，请使用散图开发不要使用图集，暂时打算不支持图集转换。
3、给组件添加状态时，一定不要起"xx.xx"的状态名字，因为子对象配置规则里占用了"."作为分隔符，实测编辑器可以使用但不生效。
4、pixi提供了Mesh实现的九宫格，但是实测效率比自己写的9个Sprite拼的组件效率低一些，不确定大量使用pixi的九宫格是否有效率问题。