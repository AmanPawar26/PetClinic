import { getConnectionDB, releaseConnectionDB } from '../db/index.js';

const Vets = {
  findAllWithSpecialities: async () => {
    const connection = await getConnectionDB();

    const [rows] = await connection.query(`
      SELECT 
        v.vet_id,
        CONCAT(v.first_name, ' ', v.last_name) AS full_name,
        s.name AS speciality
      FROM Veterinarian v
      LEFT JOIN Vet_Specialities vs ON v.vet_id = vs.vet_id
      LEFT JOIN Speciality s ON vs.speciality_id = s.speciality_id
    `);

    releaseConnectionDB(connection);
    return rows;
  }
};

export default Vets;
