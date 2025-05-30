import PetTypes from "../models/petTypeModel.js"



export const createPetType = async(req, res) => {
  try {
    console.log("Received body:", req.body); 
    await PetTypes.create(req.body);
    res.status(201).json({message: "PetType created successfully"});
  } catch (error) {
    console.error("Error creating petType:", error.message);
    res.status(500).json(({message: "Failed to create petType"}));
  }
};


export const getAllPetType = async (req, res) => {
    try {
        const petType = await PetTypes.getAll();
        res.status(200).json(petType);
    } catch (error) {
        console.error("Error fetching petType:", error.message);
        res.status(500).json({message: "Failed to fetch petTypes"})
    }
}
