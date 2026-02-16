import sqlite3 from 'sqlite3';

const sql3 = sqlite3.verbose();

const complainDB = new sql3.Database('./complaints.db', sql3.OPEN_READWRITE | sql3.OPEN_CREATE, (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to the Complaint SQLite database.');
  }
});

complainDB.run('PRAGMA foreign_keys = ON');

export default complainDB;
