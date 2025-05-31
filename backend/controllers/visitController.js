import Visits from "../models/visitModel.js"

// POST create a new vist
export const createNewVisit = async (req, res) => {
    const {pet_id} = req.params
    try {
        console.log("Visit creation Request:", req.body);
        await Visits.createVisit(pet_id, req.body);
        res.status(201).json({message: "Visit created suceessfully"});
    } catch (error) {
        console.error("Error creating visit:", error.message);
        res.status(500).json({message: "Failed to create visit"})
    }
}