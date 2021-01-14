// ZETA ENGINE:
// 3d objects shaders module
// with shader class

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
