// ZETA ENGINE:
// 3d scenes module with
// scene class

import { shader } from './shader';

// scene class
export const scene = class {
	constructor(color, shader, clear, depth_func, depth_test=false) {
		this.shader = shader;
		gl.clearColor(color[0], color[1], color[2], color[3]);
		gl.clearDepth(clear);
		gl.depthFunc(depth_func);

		if (depth_test) {
			gl.enable(gl.DEPTH_TEST);
		}
	}
	// constructor
}
