
import { db } from "../db.js"; //importando o banco de dados

export const getUsers = (_, res) => {
    const q = "SELECT * FROM usuarios"; 

    db.query(q,(err, data) => {  //criando uma query passando o nosso primeiro parametro esse select
                                   //e junto uma função se tiver erro, se tiver vai fzr essa verificação e retornar um json
    if (err) return res.json(err);

        return res.status(200).json(data); // retonar dizendo que esta ok listando todos os usuarios
    });

};