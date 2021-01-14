// ZETA ENGINE:
// WebGL management module
// with WebGL context
// and initializer

// global WebGL context
export var webgl_ctx;

let init = (canvas, err_callback) => {
    webgl_ctx = null;

    // try to initialize WebGL
    try {
        webgl_ctx = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    } catch(e) {
        err_callback(e);
    }

    // if context is still null, call error callback
    if (!webgl_ctx) {
        err_callback('WebGL not supported in your browser');
    }
}