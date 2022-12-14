const client = require('./client')

async function getRoutineActivityById(id){
  try{
    const {rows: [routine_activity]} = await client.query(`
    SELECT *
    FROM routine_activities
    WHERE id=${id};
    ` )
    return routine_activity;
} catch(error) {
  throw error
}
}
async function addActivityToRoutine({
  routineId,
  activityId,
  count,
  duration,
}) {
    try {
      const {rows: [routine_activity]} = await client.query(`
      INSERT INTO routine_activities ("routineId", "activityId", count, duration)
      VALUES($1, $2, $3, $4) 
      RETURNING * ;
      `, [routineId, activityId, count, duration])
      return routine_activity
    }catch(error) {
      console.log("There was an erro adding Activity to Routine")
      throw error
    }
}

async function getRoutineActivitiesByRoutine({id}) {
try {
const {rows: routine_activities} = await client.query(`
SELECT * FROM routine_activities
WHERE "routineId"=${id}
`)
console.log(routine_activities)
return routine_activities
}catch(error) {
  throw error
}
}

async function updateRoutineActivity ({id, ...fields}) {
}

async function destroyRoutineActivity(id) {
}

async function canEditRoutineActivity(routineActivityId, userId) {
}

module.exports = {
  getRoutineActivityById,
  addActivityToRoutine,
  getRoutineActivitiesByRoutine,
  updateRoutineActivity,
  destroyRoutineActivity,
  canEditRoutineActivity,
};
