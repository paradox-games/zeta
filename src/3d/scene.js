// ZETA ENGINE:
// 3d scenes module with
// scene class

import { webgl_ctx } from './webgl'

// scene class
export const scene = class {
	constructor(color, shader, clear, depth_func, depth_test=false) {
		this.shader = shader;
		webgl_ctx.clearColor(color[0], color[1], color[2], color[3]);
		webgl_ctx.clearDepth(clear);
		webgl_ctx.depthFunc(depth_func);

		if (depth_test) {
			webgl_ctx.enable(gl.DEPTH_TEST);
		}

		webgl_ctx.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
	}
	// constructor
}
