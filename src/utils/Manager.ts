namespace eui
{

    // 存放所有皮肤配置
    export const skinDict: any = {

    };




    const TYPE_TEXT: string = '#text';

    /***
     * 解析XML
     * @param data
     * @returns {any}
     */
    export function parseXML(data: string): Object
    {
        let xml;
        let tmp;
        if (!data || typeof data !== 'string')
        {
            return null;
        }
        try
        {
            if (window['DOMParser'])
            { // Standard
                tmp = new DOMParser();
                xml = tmp.parseFromString(data, 'text/xml');
            }
            else
            { // IE
                xml = new ActiveXObject('Microsoft.XMLDOM');
                xml.async = 'false';
                xml.loadXML(data);
            }
        }
        catch (e)
        {
            xml = undefined;
        }

        let reg: RegExp = /^\s+$/;

        function docToObj(el: Node): any
        {
            if (el.nodeName === TYPE_TEXT)
            {
                if (reg.test(el.textContent))
                {
                    return;
                }
            }

            let obj: any = {};
            obj.type = el.nodeName;
            let attrib: Attr;
            if (el.attributes != null)
            {
                for (let i: number = 0; i < el.attributes.length; i++)
                {
                    attrib = el.attributes[i];
                    obj[attrib.name] = attrib.value;
                }
            }

            if (el.childNodes.length > 0)
            {
                let list: any[] = [];
                for (let i: number = 0; i < el.childNodes.length; i++)
                {
                    let node = docToObj(el.childNodes[i]);
                    if (node != null)
                    {
                        list.push(node);
                        node.parent = obj;
                    }
                }
                if (list.length > 0)
                {
                    obj.children = list;
                }
            }

            if (el.nodeName === TYPE_TEXT)
            {
                obj.text = el.textContent;
            }

            return obj;
        }

        let object: any = docToObj(xml);
        let result: any = object.children[0];
        delete result.parent;
        if (result.type === 'html')
        {
            return data;
        }
        else
        {
            return result;
        }
    }
}
