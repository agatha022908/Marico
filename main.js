class TEXT {
    constructor(obj) {
        if (typeof obj.el == 'string') {
            this.el = document.querySelector(obj.el)
        } else if (obj.el instanceof HTMLElement) {
            this.el = obj.el
        };
        console.log(obj);
        this.text = this.el.innerHTML
        this.el.innerHTML = ''
        this.str()
    }
    str(i = 0) {
        this.el.innerHTML += this.text[i];
        i++;
        if (i < this.text.length) {
            setTimeout(() => {
                this.str(i)
            }, 200);
        }
    }
}
const text = new TEXT({
    el: '.create__marico h2',
})
const text2 = new TEXT({
    el: '.create__title1 ',
})
const text3 = new TEXT({
    el: '.create__title2',
})
const text4 = new TEXT({
    el: '.create__title3 ',
})
const text7 = new TEXT({
    el: '.create__text1',
})
const text6 = new TEXT({
    el: '.create__text2',
})
const text8 = new TEXT({
    el: '.create__text3',
})

const text9 = new TEXT({
    el: '.header__context',
})
const text10 = new TEXT({
    el: '.header__content h2',
})

