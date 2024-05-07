// Fonction pour formater les données utilisateur de manière standard
export function formatUserData(userData) {
  return userData.map((user) => ({
    id: user.id,
    firstName: user.userInfos.firstName,
    lastName: user.userInfos.lastName,
    age: user.userInfos.age,
    score: user.score || user.todayScore,
    keyData: user.keyData,
  }));
}

// Fonction pour formater les données d'activité de manière standard
// export function formatUserActivity(activityData) {
//   return activityData.map((activity) => ({
//     userId: activity.userId,
//     sessions: activity.sessions.map((session) => ({
//       day: session.day,
//       kilogram: session.kilogram,
//       calories: session.calories,
//     })),
//   }));
// }

export function formatActivityData(session) {
  return {
    day: session.day,
    Poids: session.kilogram,
    Calories: session.calories,
  };
}

// Fonction pour formater les données de sessions moyennes de manière standard
export function formatUserAverageSessions(averageSessionsData) {
  return averageSessionsData.map((averageSessions) => ({
    userId: averageSessions.userId,
    sessions: averageSessions.sessions.map((session) => ({
      day: session.day,
      sessionLength: session.sessionLength,
    })),
  }));
}

// Fonction pour formater les données de performances de manière standard
export function formatUserPerformance(performanceData) {
  return performanceData.map((performance) => ({
    userId: performance.userId,
    performanceData: performance.data.map((data) => ({
      kind: performance.kind[data.kind],
      value: data.value,
    })),
  }));
}
