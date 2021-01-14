// ZETA ENGINE:
// Keyboard detection and
// event handler module

// Keyboard events handler
// static class
export const KeyboardEventHandler = class {
    static set init() {
        this.event_list = {};
    }
    // Initializer

    static add(key, event) {
        this.event_list[key] = event;
    }

    static get get(key) {
        return this.event_list[key];
    }
}

// OnKey function returns an object
// with the key pressed as key and its
// code as value
export const OnKey = (k) => {
    for (ev of KeyboardEventHandler.get(k.key)) {
        ev(k.keyCode);
    }
};

export const ListenKeydown = () => {
    document.addEventListener("keydown", OnKey);
};