import { getConnectionDB, releaseConnectionDB } from '../db/index.js';


const Pets = {
    create: async(owner_id, pet) => {
        const {name, birth_date, type_id} = pet;
        const connection = await getConnectionDB();
        await connection.query(
            'INSERT INTO Pets (name, birth_date, type_id, owner_id) VALUES (?, ?, ?, ?)',
            [name, birth_date, type_id, owner_id]
        );
        releaseConnectionDB(connection);
    },

    update: async(owner_id, pet_id, pet) => {
        const {name, birth_date, type_id} = pet;
        const connection = await getConnectionDB();
        const [result] = await connection.query(
            'UPDATE Pets SET name = ?, birth_date = ?, type_id = ? WHERE pet_id = ? AND owner_id = ?',
            [name, birth_date, type_id, pet_id, owner_id]
        );
        releaseConnectionDB(connection);
        return result
    }
};

export default Pets

