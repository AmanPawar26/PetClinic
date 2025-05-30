import Owners from '../models/ownerModel.js';  // note the .js extension for ES modules


// GET all owners
export const getAllOwners = async (req, res) => {
    try {
        const owners = await Owners.findAll();
        res.status(200).json(owners);
    } catch (error) {
        console.error("Error fetching owners:", error.message);
        res.status(500).json({message: "Failed to fetch owners"});
    }
};

// GET owners by last name

export const getOwnerByLastName = async (req, res) => {
    const {last_name} = req.query;
    try {
        const owner = await Owners.findByLastName(last_name);
        if(!owner.length){
            return res.status(404).json({message: "Owner not found"});
        }
        res.status(200).json(owner)
    } catch (error) {
        console.error("Error fetching owner:", error.message);
        res.status(500).json({message: "Failed to fetch owner"});
    }
};


// GET owners by Id

export const getOwnerById = async (req, res) => {
    const {owner_id} = req.params;
    try {
        const owner = await Owners.findById(owner_id);
        if(!owner.length){
            return res.status(404).json({message: "Owner not found"});
        }
        res.status(200).json(owner)
    } catch (error) {
        console.error("Error fetching owner:", error.message);
        res.status(500).json({message: "Failed to fetch owner"})
    }
}

// POST create Owner
export const createOwner = async (req, res) => {
    try {
        await Owners.create(req.body);
        res.status(201).json({message : "Owner created successfully"});
    } catch (error) {
        console.error("Error creating owner:", error.message);
        res.status(500).json({message: "Failed to create owner"});
    }
};


//UPDATE owner
export const updateOwner = async (req, res) => {
    const {owner_id} = req.params;
    const {first_name, last_name, address, city, telephone} = req.body;

    try {
        const result = await Owners.update(owner_id, {first_name, last_name, address, city, telephone});

         if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Owner not found" });
    }

    res.status(200).json({ message: "Owner updated successfully" });
    } catch (error) {
        console.error("Error updating owner:", err.message);
    res.status(500).json({ message: "Failed to update owner" });
    }
}


