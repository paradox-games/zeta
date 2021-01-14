// ZETA ENGINE:
// 3d objects shaders module
// with shader class

export const shader = class {
	constructor(content, type) {
		if (type.toLowerCase() == 'file') {
			fetch(content)
			  .then(response => response.text())
			  .then(text => this.content = text);
		} else if (type.toLowerCase() == 'code') {
			this.content = content;
		}
	}
	// constructor
}
