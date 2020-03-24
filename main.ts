namespace spiTemplate {

    let chipSelect = DigitalPin.P12
    pins.digitalWritePin(chipSelect, 1)

    pins.spiPins(DigitalPin.P15, DigitalPin.P14, DigitalPin.P13)
    pins.spiFormat(8, 3)
    pins.spiFrequency(250000)
]
    function initialize() {
        // nothing to do
    }

    initialize()

    function writeSpi(transmit Buffer): Buffer {
        let receive = pins.createBuffer(transmit.length);

        pins.digitalWritePin(chipSelect, 0);
        // send actual data
        for (let i = 0; i < transmit.length; i++) {
            receive[i] = pins.spiWrite(transmit[i]);
        }
        pins.digitalWritePin(chipSelect, 1)

        return receive
    }
 }