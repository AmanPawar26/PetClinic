import Vets from '../models/vetModel.js';

export const getAllVets = async (req, res) => {
  try {
    const flatRows = await Vets.findAllWithSpecialities();

    const grouped = {};

    for (const row of flatRows) {
      const { vet_id, full_name, speciality } = row;

      if (!grouped[vet_id]) {
        grouped[vet_id] = {
          vet_id,
          full_name,
          specialities: []
        };
      }

      if (speciality) {
        grouped[vet_id].specialities.push(speciality);
      }
    }

    res.status(200).json(Object.values(grouped));
  } catch (error) {
    console.error('Error fetching vets with specialities:', error.message);
    res.status(500).json({ message: 'Failed to fetch veterinarians' });
  }
};
