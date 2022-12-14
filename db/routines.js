const client = require('./client');

async function getRoutineById(id){
 try {
const {rows: [routine]} = await client.query(`
SELECT * FROM routines
WHERE id=${id}
`)
console.log('Routine by id', routine)
return routine
 } catch(error) {
  console.log("There was an error getting the rouine by the id")
  throw error
 }
}

async function getRoutinesWithoutActivities(){
  //Kelan
}

async function getAllRoutines() {
  //Rae
}

async function getAllRoutinesByUser({username}) {
  //Marty
}

async function getPublicRoutinesByUser({username}) {
  //Kelan
}

async function getAllPublicRoutines() {
  //Marty
}

async function getPublicRoutinesByActivity({id}) {
  //Rae
}

async function createRoutine({creatorId, isPublic, name, goal}) {
try {
const {rows: [routine]} = await client.query(`
INSERT INTO routines (name, goal, "creatorId", "isPublic")
VALUES ($1, $2, $3, $4)
RETURNING *;
`, [name, goal, creatorId, isPublic])
return routine
}catch(error) {
  console.log("There was an error creating a routine")
  throw error
}
}

async function updateRoutine({id, ...fields}) {
}

async function destroyRoutine(id) {
}

module.exports = {
  getRoutineById,
  getRoutinesWithoutActivities,
  getAllRoutines,
  getAllPublicRoutines,
  getAllRoutinesByUser,
  getPublicRoutinesByUser,
  getPublicRoutinesByActivity,
  createRoutine,
  updateRoutine,
  destroyRoutine,
}