// ZETA ENGINE:
// 2d scenes module
// with scene2d class

export const Scene2d = class {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.element().getContext("2d");
        this.objects = [];
    }
    // constructor

    AddObject(obj) {
        this.objects.push(obj);
    }

    draw() {
        this.objects.forEach(element => {
            element.draw();
        });
    }
}