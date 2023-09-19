import pg from "pg";

const { Pool } = pg;

const connection = new Pool({
    host: "mahmud.db.elephantsql.com",
    port: 5432,
    user: "dyjnkion",
    password: "qubY9LSv75VLup16dVOKvU5B9ojvW7kF",
    database: "dyjnkion"
});


type User ={
    id: number;
    name: string;
    cpf: string;
    phone: string;
    email: string;
    password: string;
    created_at: string;
}
async function find() {
    const users = await connection.query(
        `SELECT * FROM users
        `);
    return users.rows
}

(async () => {
    const users = await find()
    console.log(users)
})()