// ZETA ENGINE:
// 2d object module with
// Obj2d class

export const Obj2d = class {
    constructor(x, y, properties, canvas, imgtype, color) {
        this.properties = properties;
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
            this.ctx.rect(this.x, this.y, this.properties["width"], this.properties["height"]);
            this.ctx.fillStyle = this.color;
            this.ctx.fill();
            this.ctx.closePath();
            break;
        case 'circle':
        case 'arc':
            this.ctx.beginPath();
            this.ctx.arc(this.x, this.y, this.properties["radius"], this.properties["start_angle"], this.properties["end_angle"]);
            this.ctx.fillStyle = this.color;
            this.ctx.fill();
            this.ctx.closePath();
            break;
        }
    }
}