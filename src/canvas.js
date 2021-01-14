// ZETA ENGINE:
// Canvas tags management
// module with canvas class

export const canvas = class {
	constructor(id, create=false) {
		if (create) {
			this.element = document.createElement('CANVAS');
			this.element.setAttribute("id", id);
		} else {
			this.element = document.getElementById(id);
		}
	}
	// constructor

	get element() {
		return this.element;
	}
}
