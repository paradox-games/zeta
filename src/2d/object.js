// ZETA ENGINE:
// 2d object module with
// Obj2d class

export const Obj2d = class {
    constructor(x, y, width, height, canvas, imgtype, color) {
        this.width = width;
        this.height = height;
        this.x = x; this.y = y;
        this.canvas = canvas;
        this.ctx = this.canvas.element().getContext("2d");
        this.imgtype = imgtype;
        this.color = color;
    }
    // constructor

    draw() {
        switch (this.imgtype) {
        case 'rectangle':
            this.ctx.beginPath();
            this.ctx.rect(this.x, this.y, this.width, this.height);
            this.ctx.fillStyle = this.color;
            this.ctx.fill();
            this.ctx.closePath();
            break;
        }
    }
}