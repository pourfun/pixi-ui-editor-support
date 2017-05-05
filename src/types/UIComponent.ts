namespace eui {

    /**
     * UIComponent 类是所有可视组件（可定制皮肤和不可定制皮肤）的基类。
     * 
     * @export
     * @interface UIComponent
     * @extends {PIXI.DisplayObject}
     */
    export interface UIComponent extends PIXI.DisplayObject {

        /**
         * 指定此组件是否包含在父容器的布局中。若为false，则父级容器在测量和布局阶段都忽略此组件。
         * 
         * @type {boolean}
         * @memberof UIComponent
         */
        includeInLayout: boolean;

        /**
         * 距父级容器离左边距离。
         * 
         * @type {*}
         * @memberof UIComponent
         */
        left: any;

        /**
         * 距父级容器右边距离。
         * 
         * @type {*}
         * @memberof UIComponent
         */
        right: any;

        /**
         * 距父级容器顶部距离。
         * 
         * @type {*}
         * @memberof UIComponent
         */
        top: any;

        /**
         * 距父级容器底部距离。
         * 
         * @type {*}
         * @memberof UIComponent
         */
        bottom: any;

        /**
         * 在父级容器中距水平中心位置的距离。
         * 
         * @type {*}
         * @memberof UIComponent
         */
        horizontalCenter: any;

        /**
         * 在父级容器中距竖直中心位置的距离。
         * 
         * @type {*}
         * @memberof UIComponent
         */
        verticalCenter: any;

        /**
         * 相对父级容器宽度的百分比。
         * 
         * @type {number}
         * @memberof UIComponent
         */
        percentWidth: number;

        /**
         * 相对父级容器高度的百分比。
         * 
         * @type {number}
         * @memberof UIComponent
         */
        percentHeight: number;

        /**
         * 外部显式指定的宽度。
         * 
         * @type {number}
         * @memberof UIComponent
         */
        explicitWidth: number;

        /**
         * 外部显式指定的高度。
         * 
         * @type {number}
         * @memberof UIComponent
         */
        explicitHeight: number;

        /**
         * 组件的最小宽度,此属性设置为大于maxWidth的值时无效。同时影响测量和自动布局的尺寸。
         * 
         * @type {number}
         * @memberof UIComponent
         */
        minWidth: number;

        /**
         * 组件的最大高度。同时影响测量和自动布局的尺寸。
         * 
         * @type {number}
         * @memberof UIComponent
         */
        maxWidth: number;

        /**
         * 组件的最小高度,此属性设置为大于maxHeight的值时无效。同时影响测量和自动布局的尺寸。
         * 
         * @type {number}
         * @memberof UIComponent
         */
        minHeight: number;

        /**
         * 组件的最大高度,同时影响测量和自动布局的尺寸。
         * 
         * @type {number}
         * @memberof UIComponent
         */
        maxHeight: number;
    }

}
