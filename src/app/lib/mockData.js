export const mockProgram = {
  name: "Barbarian  Powerbuilding", //----> we haven't included this in our database but i think it will look more professional
  level: "Intermediate", //--------> also not included but we could...
  currentWeek: 1,
  totalWeeks: 8, // --------> could make this 4 for ease ... 
  weeklyXpGoal: 5000,
  weeklyXpEarned: 3250,
  workoutsCompleted: 3,
  workoutsTotal: 5,
  currentStreak: 7,
  
  weeks: [
    {
      weekNumber: 1,
      days: [
        {
          id: 1,
          dayName: "1",
          workoutName: "Heavy Squat Day",
          subtitle: "Lower Body • Power",
          status: "completed", //--------------------- "completed", "rest", "today", "upcoming", "locked"...ect ect
          exercises: [
            {
              name: "Squat",
              sets: 5,
              reps: 5,
              weight: 315,
              unit: "lbs",
              xp: 450,
              icon: "🦵"
            },
            {
              name: "Romanian Deadlift",
              sets: 3,
              reps: 8,
              weight: 225,
              unit: "lbs",
              xp: 320,
              icon: "🦵"
            },
            {
              name: "Leg Extention",
              sets: 3,
              reps: 12,
              weight: 450,
              unit: "lbs",
              xp: 280,
              icon: "🦵"
            }
          ],
          totalXp: 1250
        },
        {
          id: 2,
          dayName: "2",
          workoutName: "Rest & Recovery",
          subtitle: "Active Recovery Day",
          status: "rest",
          exercises: [],
          totalXp: 0,
          restMessage: "Light stretching, walking, or yoga recommended"
        },
        // ... more days
      ]
    },
    {
      weekNumber: 2,
      days: [
        // Current week data
      ]
    }
  ]
};

// ----------------------------------------------------------------------Helper function to get current week*********
export function getCurrentWeek(programData) {
  return programData.weeks.find(week => week.weekNumber === programData.currentWeek);
}
// Helper function to get a specific week by number
export function getWeek(programData, weekNumber) {
  return programData.weeks.find(week => week.weekNumber === weekNumber);
}

// ------------------------------------------------------------Helper to get day status
export function getDayStatus(day, currentDate) {
  // sudo logic... real logic needed 
  return day.status;
}