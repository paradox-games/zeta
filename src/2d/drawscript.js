// ZETA ENGINE:
// Canvas drawing scripting
// language main module

export const DrawScript = (script) => {
    let splitted = script.split(' ');
    let canvas = null;
    let ctx = null;
    let flags = {
        'id': false
    };

    splitted.forEach(word => {
        if (flags.id) {
            canvas = document.getElementById(word);
            ctx = canvas.getContext('2d');
        }
        switch (word) {
        case 'id':
            flags.id = true;
        } 
    });
}