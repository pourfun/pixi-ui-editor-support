namespace eui
{

    export class Group extends CompatibilityContainer
    {

        constructor()
        {
            super();
        }

        // 内容宽度
        protected _contentWidth: number;
        // 内容高度
        protected _contentHeight: number;
        // 横向滚动长度
        protected _scrollH: number;
        // 纵向滚动长度
        protected _scrollV: number;
        // 是否允许滚动
        protected _scrollEnabled: boolean;

        protected _layout: BasicLayout;


        public set contentWidth(value: number)
        {
            this._contentWidth = +value;
        }
        public get contentWidth(): number
        {
            return this._contentWidth;
        }


        public set contentHeight(value: number)
        {
            this._contentHeight = +value;
        }
        public get contentHeight(): number
        {
            return this._contentHeight;
        }


        public set scrollH(value: number)
        {
            this._scrollH = +value;
        }
        public get scrollH(): number
        {
            return this._scrollH;
        }


        public set scrollV(value: number)
        {
            this._scrollV = +value;
        }
        public get scrollV(): number
        {
            return this._scrollV;
        }


        public set scrollEnabled(value: boolean)
        {
            this._scrollEnabled = !!value;
        }
        public get scrollEnabled(): boolean
        {
            return this._scrollEnabled;
        }


        public get layout(): BasicLayout {
            return this._layout;
        }
        public set layout(value: BasicLayout) {
            this._layout = value;
            this.setLayout(value);
        }

        protected setLayout(value: BasicLayout): void
        {
            value.updateDisplayList(this, this.explicitWidth, this.explicitHeight);
        }

        protected onAdded(parent: PIXI.Container): void
        {
            if (this._layout == null)
            {
                this._layout = new BasicLayout();
                this.setLayout(this._layout);
            }
        }
    }

}
