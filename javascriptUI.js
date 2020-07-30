class Button {
    constructor(txt)
    {
        this.title = txt;
        this.UI = null;
        this.func = function(){};
    }
    render()
    {
        var btn = document.createElement("button");
        btn.textContent = this.title;
        var parent = this;
        btn.addEventListener("click", function () {
            parent.func()
        });
        btn.addEventListener("click", function () {
            parent.UI.show()
        });
        return btn;
    }
    action(fn)
    {
        this.func = fn;
        return this;
    }
}
class Input
{
    constructor(txt)
    {
        this.text = txt
        this.styles = "";
        this.UI = null;
    }
    static value(theId){
        let el = document.getElementById(theId)
        if (el == null)
            return ""
        else 
            return el.value;
    }
    style(st)
    {
        this.styles = " " + st;
        return this;
    }
    render()
    {
        var span = document.createElement("input");
        span.className += this.styles;
        span.id = this.text;
        return span;
    }
}
class Span
{
    constructor(txt)
    {
        this.text = txt
        this.backColorVal = "";
        this.foreColorVal = "";
        this.fontSizeVal = "initial";
        this.styles = "";
        this.UI = null;
    }
    style(st)
    {
        this.styles = " " + st;
        return this;
    }
    backColor(c)
    {
        this.backColorVal = c;
        return this;
    }
    foreColor(c)
    {
        this.foreColorVal = c;
        return this;
    }
    fontSize(sz)
    {
        this.fontSizeVal = sz;
        return this;
    }
    render()
    {
        var span = document.createElement("span");
        span.style.backgroundColor = this.backColorVal;
        span.style.color = this.foreColorVal;
        span.style.fontSize = this.fontSizeVal;
        span.className += this.styles;
        span.textContent = this.text;
        return span;
    }
}
class VStack 
{
    constructor()
    {
        this.children = [];
        this.styles = "";
        this.UI = null;
    }
    render()
    {
        var container = document.createElement("div");
        container.className += this.styles;
        for(let subView of this.children)
        {
            subView.UI = this.UI;
            var row = document.createElement("div");
            row.appendChild(subView.render());
            container.appendChild(row);
        }
        return container;
    }
    style(st)
    {
        this.styles = " " + st;
        return this;
    }
    add(subView) 
    {
        this.children.push(subView);
        return this;
    }
}
class List 
{
    constructor(array, closure)
    {
        this.items = array;
        this.codeBlock = closure;
        this.UI = null;
    }
    render()
    {
        var container = document.createElement("div");
        for(let [index, subItem] of this.items.entries())
        {
            var row = document.createElement("div");
            var subView = this.codeBlock(subItem, index);
            subView.UI = this.UI;
            row.appendChild(subView.render());
            container.appendChild(row);
        }
        return container;
    }
}
class HStack 
{
    constructor()
    {
        this.children = [];
        this.paddingVal = "0px";
        this.UI = null;
    }
    padding(pad)
    {
        this.paddingVal = pad;
        return this;
    }
    render()
    {
        var container = document.createElement("div");
        for(let subView of this.children)
        {
            subView.UI = this.UI;
            var col = document.createElement("div");
            col.style.padding = this.paddingVal;
            col.style.display = "inline-block";
            col.appendChild(subView.render());
            container.appendChild(col);
        }
        return container;
    }
    add(subView) 
    {
        this.children.push(subView);
        return this;
    }
}
class UI 
{
    constructor() 
    {
        this.children = [];
    }
    render()
    {
        var container = document.createElement("div");
        for(let subView of this.children)
        {
            container.appendChild(subView.render());
        }
        return container;
    }
    add(subView)
    {
        subView.UI = this;
        this.children.push(subView);
        return this;
    }
    show()
    {
        document.body.innerHTML = "";
        document.body.appendChild(this.render());
    }
}