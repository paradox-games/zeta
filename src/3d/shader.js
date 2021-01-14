// ZETA ENGINE:
// 3d objects shaders module
// with shader class

// shader loader function
export const LoadShader = (gl, type, src, err_callback) => {
	const shader = gl.createShader(type);
	gl.shaderSource(shader, src);
	gl.compileShader(shader);

	if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
		err_callback('An error occurred while compiling shader');
		gl.deleteShader(shader);
		return null;
	}

	return shader;
}

// shader class
export const shader = class {
	constructor(content, shtype, type) {
		if (type.toLowerCase() == 'file') {
			fetch(content)
			  .then(response => response.text())
			  .then(text => { 
			  if (shtype.toLowerCase() == 'vertex') {
			  	this.vertexsh = text;
			  } else if (shtype.toLowerCase() == 'fragment') {
			  	this.fragsh = text
			  }});
		} else if (type.toLowerCase() == 'code') {
			if (shtype.toLowerCase() == 'vertex') {
				this.vertexsh = content;
			} else if (shtype.toLowerCase() == 'fragment') {
				this.fragsh = content;
			}
		}
	}
	// constructor

	init(gl, err_callback) {
		const vxshader = LoadShader(gl, gl.VERTEX_SHADER, this.vertexsh);
		const fgshader = LoadShader(gl, gl.FRAGMENT_SHADER, this.fragsh);

		const program = gl.createProgram();
		gl.attachShader(program, vxshader);
		gl.attachShader(program, fgshader);
		gl.linkProgram(program);

		if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
			err_callback(gl.getProgramInfoLog(program));
			return null;
		}

		this.program = program;
		return program;
	}
}
