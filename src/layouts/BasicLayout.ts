namespace eui
{
    export class BasicLayout extends PIXI.utils.EventEmitter
    {
        constructor()
        {
            super();
        }



        /**
         * 更新显示列表
         * @protected
         * @param {(eui.Group | eui.Component)} target 
         * @param {number} unscaledWidth 
         * @param {number} unscaledHeight 
         * @returns {PIXI.Point} 
         * 
         * @memberof BasicLayout
         */
        public updateDisplayList(target: eui.Group | eui.Component, unscaledWidth: number, unscaledHeight: number): PIXI.Point
        {
            if (!target)
            {
                return;
            }

            let count = target.children.length;

            let maxX = 0;
            let maxY = 0;
            for (let i: number = 0; i < count; i++)
            {
                let layoutElement = target.getChildAt(i) as CompatibilityContainer;
                if (!layoutElement.includeInLayout)
                {
                    continue;
                }
                let bounds = layoutElement.getBounds();

                let hCenter: number = this.formatRelative(layoutElement.horizontalCenter, unscaledWidth * 0.5);
                let vCenter: number = this.formatRelative(layoutElement.verticalCenter, unscaledHeight * 0.5);
                let left: number = this.formatRelative(layoutElement.left, unscaledWidth);
                let right: number = this.formatRelative(layoutElement.right, unscaledWidth);
                let top: number = this.formatRelative(layoutElement.top, unscaledHeight);
                let bottom: number = this.formatRelative(layoutElement.bottom, unscaledHeight);
                let percentWidth: number = layoutElement.percentWidth;
                let percentHeight: number = layoutElement.percentHeight;

                let childWidth: number = NaN;
                let childHeight: number = NaN;

                if (!isNaN(left) && !isNaN(right))
                {
                    childWidth = unscaledWidth - right - left;
                }
                else if (!isNaN(percentWidth))
                {
                    childWidth = Math.round(unscaledWidth * Math.min(percentWidth * 0.01, 1));
                }

                if (!isNaN(top) && !isNaN(bottom))
                {
                    childHeight = unscaledHeight - bottom - top;
                }
                else if (!isNaN(percentHeight))
                {
                    childHeight = Math.round(unscaledHeight * Math.min(percentHeight * 0.01, 1));
                }

                layoutElement.explicitWidth = childWidth;
                layoutElement.explicitHeight = childHeight;
                let elementWidth = bounds.width;
                let elementHeight = bounds.height;


                let childX: number = NaN;
                let childY: number = NaN;

                if (!isNaN(hCenter))
                {
                    childX = Math.round((unscaledWidth - elementWidth) / 2 + hCenter);
                }
                else if (!isNaN(left))
                {
                    childX = left;
                }
                else if (!isNaN(right))
                {
                    childX = unscaledWidth - elementWidth - right;
                }
                else
                {
                    childX = bounds.x;
                }

                if (!isNaN(vCenter))
                {
                    childY = Math.round((unscaledHeight - elementHeight) / 2 + vCenter);
                }
                else if (!isNaN(top))
                {
                    childY = top;
                }
                else if (!isNaN(bottom))
                {
                    childY = unscaledHeight - elementHeight - bottom;
                }
                else
                {
                    childY = bounds.y;
                }

                layoutElement.x = childX;
                layoutElement.y = childY;

                maxX = Math.max(maxX, childX + elementWidth);
                maxY = Math.max(maxY, childY + elementHeight);
            }
        }



        /**
         * 格式化字符串为数值
         * @protected
         * @param {(number | string)} value 要格式化的相对值
         * @param {number} total 在此值方向上的总长度
         * @returns {number} 
         * 
         * @memberof BasicLayout
         */
        protected formatRelative(value: number | string, total: number): number
        {
            if (!value || typeof value === 'number')
            {
                return value as number;
            }
            let str: string = value as string;
            let index: number = str.indexOf('%');
            if (index === -1)
            {
                return +str;
            }
            let percent: number = +str.substring(0, index);

            return percent * 0.01 * total;
        }
    }
}
