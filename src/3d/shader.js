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
}
