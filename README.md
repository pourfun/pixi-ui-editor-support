# pixi-ui-editor-support
#_0

1、禁止使用Egret编辑器时使用scaleX和scaleY属性，这个属性会在pixi中被忽略，Egret这两个属性与width和height不是联动关系，而pixi是。
2、使用Egret Wing时，请使用散图开发不要使用图集，暂时打算不支持图集转换。