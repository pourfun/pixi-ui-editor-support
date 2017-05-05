namespace eui {

    export class Group extends CompatibilityContainer {

        constructor() {
            super();
        }


        private _contentWidth: number;
        public set contentWidth(value: number) {
            this._contentWidth = value;
        }
        public get contentWidth(): number {
            return this._contentWidth;
        }


        private _contentHeight: number;
        public set contentHeight(value: number) {
            this._contentHeight = value;
        }
        public get contentHeight(): number {
            return this._contentHeight;
        }


        private _scrollH: number;
        public set scrollH(value: number) {
            this._scrollH = value;
        }
        public get scrollH(): number {
            return this._scrollH;
        }


        private _scrollV: number;
        public set scrollV(value: number) {
            this._scrollV = value;
        }
        public get scrollV(): number {
            return this._scrollV;
        }


        private _scrollEnabled: boolean;
        public set scrollEnabled(value: boolean) {
            this._scrollEnabled = value;
        }
        public get scrollEnabled(): boolean {
            return this._scrollEnabled;
        }
    }

}
