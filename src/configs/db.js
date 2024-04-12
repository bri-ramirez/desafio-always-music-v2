import pg from "pg";
const { Pool } = pg;

const config = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: 5432,
  ssl: false,
};

const pool = new Pool(config);
export default pool;