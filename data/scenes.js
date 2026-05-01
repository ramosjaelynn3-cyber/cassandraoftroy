export const scenes = {
  intro: {
    text: "Cassandra of Troy sees the burning future no one believes.",
    choices: [
      {
        text: "Scream the prophecy to the guards",
        next: "guards",
        effect: {
          stats: { influence: +1 }
        }
      },
      {
        text: "Hold your tongue",
        next: "silence",
        effect: {
          stats: { sanity: -5 }
        }
      },
      {
        text: "Touch the sealed oracle relic",
        next: "vision",
        condition: {
          item: "oracle_relic"
        }
      }
    ]
  },

  guards: {
    text: "They laugh. The future does not bend.",
    choices: []
  },

  silence: {
    text: "The vision eats at your mind.",
    choices: []
  },

  vision: {
    text: "The relic opens your sight. Troy burns in golden fire.",
    choices: []
  }
};
