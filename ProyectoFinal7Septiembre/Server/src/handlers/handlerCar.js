const {allCar} = require("../controllers/getAllCar");
const {createCar} = require("../controllers/createCar");
const {carNameController} = require("../controllers/getCarByName");
const {getCarById} = require("../controllers/getCarById");
const {createCarDb} = require("../controllers/createCarDb");
const {deleteCarController} = require("../controllers/deleteCar");
const {filteredCars} = require("../controllers/filters/filters");
//-----------------------------getAllCar---------------------------------------------------------------
//
const getFiltersHandler = async (req, res) => {
    try{
        const {brand, color, state, location, minPrice, maxPrice, model, name} = req.query;
        // console.log(name);
        const newFiltersCars = await filteredCars(brand, color, state, location, minPrice, maxPrice, model, name);
        // if (newFiltersCars == "Car not found"){
        //     return res.status(404).json({message: "Car not found"});
        // }
        return res.status(200).send(newFiltersCars);
    } catch(error){
        return res.status(500).json(error.message)
    }
}
//-----------------------------deleteCarHandler---------------------------------------------------------------
//
const deleteCarHandler = async (req, res) =>{
    try{
        const {id} = req.params;
        console.log(id);
        const deleteCar = await deleteCarController(id)
        res.status(200).send(deleteCar);
    } catch(error){
        res.status(500).send(error.message);
    }
}
//-----------------------------getAllCar---------------------------------------------------------------
//
const getAllCarHandler = async (req,res) => {
    try{
        const allCars = await allCar();
        if (allCars == "Car not found"){
            res.status(404).json("Car not found");
        }
        res.status(200).send(allCars)
    }
    catch(error){
        res.status(500).send(error.message);
    }
}
//-----------------------------getAllMatches---------------------------------------------------------------
//
const getAllMatchesHandler = async (req, res) => {
    try{
        const { name } = req.query;
        // console.log(name);
        // name.toLowerCase();
        const carMatches = await carNameController(name);
        if (carMatches == "Car not found"){
            return res.status(404).json("Car not found");
            
        }
        res.status(200).send(carMatches);
    } catch(error){
        res.status(500).json({error: error.message});
    }
}


//-----------------------------getDetailCar---------------------------------------------------------------
//
const getDetailCarHandler = async (req, res) => {
    try{
        const { id } = req.params;
        const findCarId = await getCarById(id);
        if (findCarId == "Car not found"){
            return res.status(404).json("Car not found");
        }
        res.status(200).send(findCarId);
    } catch(error){
        res.status(500).send(error.message);
    }
}

//-----------------------------postCar---------------------------------------------------------------
//
const postCarHandler = async (req, res) => {
    try{
        const {name,
            image,
            brand,
            model,
            state,
            price,
            location,
            color,
            description} = req.body;
        if (!name ||
            !image ||
            !brand ||
            !model ||
            !state ||
            !price ||
            !location ||
            !color ) {
                return res.status(404).json({error: "Missing data to post"});
            }

        const createdCar = await createCar(name,
            image,
            brand,
            model,
            state,
            price,
            location,
            color,
            description);
        res.status(200).json(createdCar);
    } catch(error){
        res.status(500).send(error.message);
    }
};

//-----------------------------createCarDb---------------------------------------------------------------
//
const createCarDbHandler = async (req,res) =>{
    try{
         const createdCar = await createCarDb();
        res.status(200).json(createdCar);
    } catch(error){
        res.status(500).send(error.message);
    }
}

module.exports = {
    getAllCarHandler,
    getAllMatchesHandler,
    getDetailCarHandler,
    postCarHandler,
    createCarDbHandler,
    getFiltersHandler,
    deleteCarHandler
};

