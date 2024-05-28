
export class UserMainModel {
  constructor(data) {
    this.id = data.id
    this.firstName = data.userInfos.firstName
    this.todayScore = data.todayScore || data.score
    this.score = data.score
    this.keyData = data.keyData
  }
}

export class UserActivityModel {
  constructor(data) {
    this.userId = data.userId
    this.sessions = data.sessions.map((session, day) => ({
      kilogram: session.kilogram,
      calories: session.calories,
      day: new Date(session.day).getDate(),
    }))
  }
  newDay() {
    const day = new Date(this.sessions.day)
    return day.getDate()
  }
}

export class UserPerformanceModel {
  constructor(data, kind) {
    this.userId = data.userId
    this.kind = this.kindPerformance(kind)
    this.data = data.data.map((value, kind) => ({
      kind: this.kind[kind],
      value: value.value,
    }))
    this.performData = this.data.reverse()
  }
  kindPerformance() {
    const formatPerform = [
      "Cardio",
      "Energie",
      "Endurance",
      "Force",
      "Vitesse",
      "Intensité",
    ]
    return formatPerform
  }
}

export class UserSessionModel {
  constructor(data) {
    this.userId = data.userId
    this.sessionsOfDay = this.Day(data.sessions.day)
    this.sessions = data.sessions.map((session, index) => ({
      sessionLength: session.sessionLength,
      day: this.sessionsOfDay[index],
    }))
  }

  Day() {
    const formatOfDay = ["L", "M", "M", "J", "V", "S", "D"]
    return formatOfDay
  }
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

// export function formatActivityData(session) {
//   return {
//     day: session.day,
//     Poids: session.kilogram,
//     Calories: session.calories,
//   };
// }

// // Fonction pour formater les données de sessions moyennes de manière standard
// export function formatUserAverageSessions(averageSessionsData) {
//   return averageSessionsData.map((averageSessions) => ({
//     userId: averageSessions.userId,
//     sessions: averageSessions.sessions.map((session) => ({
//       day: session.day,
//       sessionLength: session.sessionLength,
//     })),
//   }));
// }

// // Fonction pour formater les données de performances de manière standard
// export function formatUserPerformance(performanceData) {
//   return performanceData.map((performance) => ({
//     userId: performance.userId,
//     performanceData: performance.data.map((data) => ({
//       kind: performance.kind[data.kind],
//       value: data.value,
//     })),
//   }));
// }
