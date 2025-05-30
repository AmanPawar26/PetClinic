import Pets from "../models/petModel.js"


// POST Create pet 

export const createPet = async (req, res) => {
    const {owner_id} = req.params
    try {
         console.log("Pet creation request:", req.body); 
        await Pets.create(owner_id, req.body);
        res.status(201).json({message: "Pet created successfully"});
    } catch (error) {
        console.error("Error creating pet:", error.message);
        res.status(500).json({message: "Failed to create pets"})
    }
};

// UPDATE Pet
export const updatePet = async (req, res) => {
    const {owner_id, pet_id} = req.params;
    const {name, birth_date, type_id} = req.body
    try {
        const result = await Pets.update(owner_id, pet_id, {
            name, 
            birth_date,
            type_id
        });
        if (result.affectedRows == 0) {
            return res.status(404).json({message: 'Pet not found or not owned by specified owner'});
        }
        return res.status(200).json({message: 'Pet updated successfully'});
    } catch (error) {
        console.error('Error updating pet:', error.message);
        res.status(500).json({message: 'Failed to update pet'});
    }
};




// //UPDATE owner
// export const updateOwner = async (req, res) => {
//     const {owner_id} = req.params;
//     const {first_name, last_name, address, city, telephone} = req.body;

//     try {
//         const result = await Owners.update(owner_id, {first_name, last_name, address, city, telephone});

//          if (result.affectedRows === 0) {
//       return res.status(404).json({ message: "Owner not found" });
//     }

//     res.status(200).json({ message: "Owner updated successfully" });
//     } catch (error) {
//         console.error("Error updating owner:", err.message);
//     res.status(500).json({ message: "Failed to update owner" });
//     }