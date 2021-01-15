// ZETA ENGINE:
// 3d scenes module with
// scene class

import { webgl_ctx } from './webgl'

// scene class
export const scene = class {
	constructor(color=[0.0, 0.0, 0.0, 1.0], shader, clear=1.0, depth_func=webgl_ctx.LEQUAL, field_of_view, near, far, depth_test=false) {
		this.shader = shader;
		this.field_of_view = field_of_view;
		this.projection_matrix = mat4.create();
		this.model_view_matrix = mat4.create();
		this.znear = near;
		this.zfar = far;
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
