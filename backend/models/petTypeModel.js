import { getConnectionDB, releaseConnectionDB } from '../db/index.js';

const PetTypes = {
    create: async(petType) =>{
       const {name} = petType;
       const connection = await getConnectionDB();
       await connection.query(
        'INSERT INTO Pet_Type (name) VALUES (?)',
        [name]
       );
       releaseConnectionDB(connection);
    },
    
    getAll: async () => {
        const connection = await getConnectionDB();
        const [rows] = await connection.query(
            'SELECT * FROM Pet_Type'
        );
        releaseConnectionDB(connection);
        return rows;
    }
}

export default PetTypes;

