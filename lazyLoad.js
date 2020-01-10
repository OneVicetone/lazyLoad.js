class LazyLoad {
    constructor(args) {
        this.args = args
        const { threshold,root,rootMargin } = args
        this.options = { threshold,root,rootMargin }
        this.observer = new IntersectionObserver(this.effectCallback,this.options)
        this.bindNode()
    }



    bindNode() {
        console.log(this.observer)
        !this.args.el && console.error("未绑定元素")
        if (typeof (this.args.el) === "string") {
            this.args.el.indexOf(".") == 0 || (this.args.el = '.' + item)
            const childrenList = document.querySelectorAll(this.args.el)[0].children
            for (let item of childrenList) {
                item.style.cssText = `transition: opacity ${this.args.aniTime ? this.args.aniTime : 5}s;opacity: 0;`
                this.toObserve(item)
            }
        } else if (Array.isArray(this.args.el)) {
            for (let item of this.args.el) {
                item.indexOf(".") == 0 || (item = '.' + item)
                this.toObserve(document.querySelectorAll(item)[0])
            }
        }
    }

    toObserve(node) {
        this.observer.observe(node)
    }


    effectCallback(entries) {
        for (let item of entries) {
            if (!item.isIntersecting) return
            item.target.setAttribute("src", item.target.attributes['data-src'].nodeValue)
            item.target.style.opacity = 1
            this.unobserve(item.target)
        }
    }
}