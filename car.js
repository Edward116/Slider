var car1 = {
    name: 'Reno',
    isTurnOn: false,
    speed: 0,
    engine: {
        v: 1.6,
        hoursesPower: 120
    },
    start: function() {
        this.isTurnOn = true;
        this.speed = 10;
    }
};
//window.alert(car1.isTurnOn);