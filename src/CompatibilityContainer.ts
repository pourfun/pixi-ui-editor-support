namespace eui {

    export class CompatibilityContainer extends PIXI.Container implements UIComponent {

        constructor() {
            super();
            this.on(EVENT_ADDED, this.onAdded, this);
            this.on(EVENT_REMOVED, this.onRemoved, this);
        }

        // 布局相关属性
        protected _left: string;
        protected _right: string;
        protected _top: string;
        protected _bottom: string;
        protected _horizontalCenter: string;
        protected _verticalCenter: string;

        // 宽度比例数值
        protected _percentWidth: number;
        // 高度比例数值
        protected _percentHeight: number;
        // 指定的宽度
        protected _explicitWidth: number;
        // 指定的高度
        protected _explicitHeight: number;

        // 是否应用父级的布局
        protected _includeInLayout: boolean;
        // 状态
        protected _states: string[];
        // 当前状态
        protected _currentState: string;

        // 皮肤传过来的配置
        protected _config: any;
        // 存放每个状态的配置信息
        protected _stateConfigDict: any;

        // ID
        public id: string;

        // 携带数据
        public userData: any;

        // 组件唯一的KEY
        public hostComponentKey: string;


        public set skewX(value: number) {
            this.skew.x = +value;
        }
        public get skewX(): number {
            return this.skew.x;
        }


        public set skewY(value: number) {
            this.skew.y = +value;
        }
        public get skewY(): number {
            return this.skew.y;
        }


        public set scaleX(value: number) {
            this.scale.x = +value;
        }
        public get scaleX(): number {
            return this.scale.x;
        }


        public set scaleY(value: number) {
            this.scale.y = +value;
        }
        public get scaleY(): number {
            return this.scale.y;
        }


        public set anchorOffsetX(value: number) {
            this.pivot.x = +value;
        }
        public get anchorOffsetX(): number {
            return this.pivot.x;
        }


        public set anchorOffsetY(value: number) {
            this.pivot.y = +value;
        }
        public get anchorOffsetY(): number {
            return this.pivot.y;
        }


        public set includeInLayout(value: boolean) {
            this._includeInLayout = !!value;
        }
        public get includeInLayout(): boolean {
            return this._includeInLayout;
        }


        public set left(value: string) {
            this._left = value.toString();
        }
        public get left(): string {
            return this._left;
        }


        public set right(value: string) {
            this._right = value.toString();
        }
        public get right(): string {
            return this._right;
        }


        public set top(value: string) {
            this._top = value.toString();
        }
        public get top(): string {
            return this._top;
        }


        public set bottom(value: string) {
            this._bottom = value.toString();
        }
        public get bottom(): string {
            return this._bottom;
        }


        public set horizontalCenter(value: string) {
            this._horizontalCenter = value.toString();
        }
        public get horizontalCenter(): string {
            return this._horizontalCenter;
        }


        public set verticalCenter(value: string) {
            this._verticalCenter = value.toString();
        }
        public get verticalCenter(): string {
            return this._verticalCenter;
        }


        public set percentWidth(value: number) {
            this._percentWidth = +value;
        }
        public get percentWidth(): number {
            return this._percentWidth;
        }


        public set percentHeight(value: number) {
            this._percentHeight = +value;
        }
        public get percentHeight(): number {
            return this._percentHeight;
        }


        public set explicitWidth(value: number) {
            this._explicitWidth = +value;
        }
        public get explicitWidth(): number {
            return this._explicitWidth;
        }


        public set explicitHeight(value: number) {
            this._explicitHeight = +value;
        }
        public get explicitHeight(): number {
            return this._explicitHeight;
        }


        public set states(value: string[]) {
            this._states = value;
        }
        public get states(): string[] {
            return this._states;
        }


        public set currentState(value: string) {
            if (this._stateConfigDict == null) {
                return;
            }
            let config: any = this._stateConfigDict[value];
            if (config == null) {
                return;
            }
            this._currentState = value;
            this.updateConfigDisplay(config);
        }
        public get currentState(): string {
            return this._currentState;
        }
        protected updateConfigDisplay(config: any): void {
            ConfigParser.setComponentAttributes(this, config);
        }


        public set config(value: any) {
            this._config = value;
            this._stateConfigDict = ConfigParser.convertSkinConfig(value);
            if (this.currentState == null) {
                this.currentState = STATE_DEFAULT;
            }
        }


        protected onAdded(parent: PIXI.Container): void {

        }


        protected onRemoved(parent: PIXI.Container): void {

        }


        // override super
        public destroy(options?: PIXI.IDestroyOptions | boolean): void {
            this._destroyed = true;
            super.destroy(options);
        }

        protected _destroyed: boolean;
        public get destroyed(): boolean
        {
            return this._destroyed;
        }
    }

}
