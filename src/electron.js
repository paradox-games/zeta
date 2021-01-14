// ZETA ENGINE:
// electron apps management
// module

const { BrowserWindow } = require('electron')

// create window function
export var CreateWindow = (w, h) => {
	const win = new BrowserWindow({
		width: w,
		height: h,
		webPreferences: {
			nodeIntegration: true
		}
	});

	return win;
}
