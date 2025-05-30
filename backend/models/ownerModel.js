import { getConnectionDB, releaseConnectionDB } from '../db/index.js';


const Owners = {
    findAll: async() =>{
        const connection = await getConnectionDB();
        const [rows] = await connection.query(
            'SELECT * FROM Owners'
        );
        releaseConnectionDB(connection);
        return rows;
    },

    findByLastName: async (last_name) =>{
        const connection = await getConnectionDB();
        const [results] = await connection.query(
        'SELECT * FROM Owners WHERE last_name = ?',
        [last_name]
        );
        releaseConnectionDB(connection);
        return results;
    },

    findById: async (owner_id) => {
     const connection = await getConnectionDB();
     const [results] = await connection.query(
        'SELECT * FROM Owners WHERE owner_id = ?',
        [owner_id]
     );
     releaseConnectionDB(connection);
     return results;
    },

    create: async(owner) => {
        const {first_name, last_name, address, city, telephone} = owner;
        const connection = await getConnectionDB();
        await connection.query(
            'INSERT INTO Owners (first_name, last_name, address, city, telephone) VALUES (?, ?, ?, ?, ?)',
             [first_name, last_name, address, city, telephone]
        );
        releaseConnectionDB(connection);
    },

    update: async (owner_id, owner) => {
       const {first_name, last_name, address, city, telephone} = owner;
       const connection = await getConnectionDB();
      const [result] =  await connection.query(
        `UPDATE Owners 
         SET first_name = ?, last_name = ?, address = ?, city = ?, telephone = ? 
         WHERE owner_id = ?`,
         [first_name, last_name, address, city, telephone, owner_id]
       );
       releaseConnectionDB(connection);
       return result;
    }
};

export default Owners;