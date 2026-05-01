export const scenes = {
  intro: {
    text: "You are Cassandra of Troy. The gods whisper, but no one believes you.",
    choices: [
      {
        text: "Warn the palace guards",
        next: "guards"
      },
      {
        text: "Stay silent",
        next: "silence"
      }
    ]
  },

  guards: {
    text: "The guards laugh. One of them calls you cursed.",
    choices: [
      {
        text: "Leave the courtyard",
        next: "silence"
      }
    ]
  },

  silence: {
    text: "Troy sleeps. Fate sharpens its blade.",
    choices: []
  }
};
