const Plane = require('./Plane');

class experimentalPlane   extends Plane {
    constructor(model, maxSpeed, maxFlightDistance, maxLoadCapacity, type, classificationLevel)  {
        super(model, maxSpeed, maxFlightDistance, maxLoadCapacity);
        this._model = model;
        this._maxSpeed = maxSpeed;
        this._maxFlightDistance = maxFlightDistance;
        this._maxLoadCapacity = maxLoadCapacity;
        this._type = type;
        this._classificationLevel = classificationLevel;

    }

    get model()
    {
        return this._model;
    }

    set model(model) {
        this._model = model;
    }

    get maxSpeed() {
        return this._maxSpeed;
    }

    set maxSpeed(maxSpeed) {
        this._maxSpeed = maxSpeed;
    }

    get maxFlightDistance() {
        return this._maxFlightDistance;
    }

    set maxFlightDistance(maxFlightDistance) {
        this._maxFlightDistance = maxFlightDistance;
    }

    get maxLoadCapacity() {
        return this._maxLoadCapacity;
    }

    set maxLoadCapacity(maxLoadCapacity) {
        this._maxLoadCapacity = maxLoadCapacity;
    }

    get type() {
        return this._type;
    }

    set type(type) {
        this._type = type;
    }

    get classificationLevel() {
        return this._classificationLevel;
    }

    set classificationLevel(classificationLevel) {
        this._classificationLevel = classificationLevel;
    }
}

module.exports = experimentalPlane