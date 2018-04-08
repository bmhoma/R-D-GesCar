module.exports = server => {
    const Car = server.models.Car;

    return (req, res, next) => {
        Car.findById(req.params.id)
            .then(car => res.send(car))
            .catch(error => res.status(500).send(error))
    }
};


