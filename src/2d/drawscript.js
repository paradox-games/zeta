// ZETA ENGINE:
// Canvas drawing scripting
// language main module

export const DrawScript = (script) => {
    let splitted = script.split(' ');
    let canvas = null;
    let ctx = null;
    let flags = {
        'id': false,
        'rect': 0
    };

    let shapes = {
        'rect': [0, 0, 0, 0]
    }

    splitted.forEach(word => {
        if (flags.id) {
            canvas = document.getElementById(word);
            ctx = canvas.getContext('2d');
            flags.id = false;
        } else if (flags.rect) {
            switch (flags.rect) {
            case 4:
                shapes.rect[0] = Number(word);
                flags.rect--;
                break;
            case 3:
                shapes.rect[1] = Number(word);
                flags.rect--;
                break;
            case 2:
                shapes.rect[2] = Number(word);
                flags.rect--;
                break;
            case 1:
                shapes.rect[3] = Number(word);
                ctx.beginPath();
                ctx.rect(shapes.rect[0], shapes.rect[1], shapes.rect[2], shapes.rect[3]);
                ctx.stroke();
                flags.rect--;
                break;
            }
        }
        switch (word) {
        case 'id':
            flags.id = true;
        case 'rect':
            flags.rect = 4;
        } 
    });
}