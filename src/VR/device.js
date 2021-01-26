// ZETA ENGINE:
// Virtual reality device
// detection module

export const GetVRDevices = () => {
    let devices = [];
    navigator.getVRDevices().then((devices_) => {
        devices_.forEach(element => {
            devices.push(element);
        });
    });

    if (!devices[0]) {   //that means no VR device is connected
        throw 'Zeta engine VR detection error: no VR device connected';
    }

    return devices;
}