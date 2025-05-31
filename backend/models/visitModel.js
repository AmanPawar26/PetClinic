import { getConnectionDB, releaseConnectionDB } from "../db/index.js";

const Visits = {
    createVisit: async (pet_id, visit) => {
       const {visit_date, description} = visit;
       const connection = await getConnectionDB();
       await connection.query(
        'INSERT INTO Visit (visit_date, description, pet_id) VALUES (?, ?, ?)',
        [visit_date, description, pet_id]
       );
       releaseConnectionDB(connection);
    },
}

export default Visits