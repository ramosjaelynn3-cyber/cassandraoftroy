export const scenes = {

/* =========================
   INTRO — FIRST CONTACT
========================= */

intro: {
  text:
    "Cassandra.\n\nYou are awake again.\n\nI told you not to speak my name aloud—but you always do, eventually.",
  choices: [
    {
      text: "Who is speaking?",
      next: "apollo_1"
    },
    {
      text: "Go to the Temple of Apollo",
      next: "temple_approach"
    },
    {
      text: "Listen for the future inside your blood",
      next: "vision_1",
      effect: { stats: { sanity: -5 } }
    }
  ]
},

/* =========================
   APOLLO FIRST FULL VOICE
========================= */

apollo_1: {
  text:
    "You know who I am.\n\nYou always pretend you don’t, like it makes the curse softer.\n\nI am Apollo.\nAnd I am the reason your voice survives your throat.",
  choices: [
    {
      text: "Why did you curse me?",
      next: "apollo_2"
    },
    {
      text: "I didn’t ask for prophecy",
      next: "apollo_3"
    },
    {
      text: "Silence him in your mind",
      next: "intro",
      effect: { stats: { sanity: -3 } }
    }
  ]
},

apollo_2: {
  text:
    "Curse?\n\nNo.\nI gave you sight.\nThe curse was letting you stay human while carrying it.",
  choices: [
    {
      text: "Then why won’t anyone believe me?",
      next: "apollo_4"
    },
    {
      text: "You’re lying",
      next: "vision_apollo_lie",
      effect: { stats: { sanity: -4 } }
    }
  ]
},

apollo_3: {
  text:
    "No one does.\n\nThat is the first rule of prophecy.\nIt is never consented to.",
  choices: [
    {
      text: "Then I refuse it",
      next: "apollo_5"
    },
    {
      text: "What happens if I stop speaking?",
      next: "apollo_6"
    }
  ]
},

apollo_4: {
  text:
    "Because belief is not required for truth to function.\n\nDo not confuse ignorance for safety, Cassandra.",
  choices: [
    {
      text: "Go to the temple anyway",
      next: "temple_approach"
    },
    {
      text: "Ask what I will die for",
      next: "apollo_death_hint"
    }
  ]
},

apollo_5: {
  text:
    "You already tried that.\n\nIt didn’t work.\nYou are still here.",
  choices: [
    {
      text: "Then I will stop speaking entirely",
      next: "silence_state"
    },
    {
      text: "Show me the future again",
      next: "vision_1"
    }
  ]
},

apollo_6: {
  text:
    "Then Troy survives a little longer.\n\nAnd you disappear faster.",
  choices: [
    {
      text: "Go to the temple",
      next: "temple_approach"
    },
    {
      text: "Ask what he means",
      next: "apollo_7"
    }
  ]
},

apollo_7: {
  text:
    "I mean:\n\nYou are not the only thing I am speaking through.",
  choices: [
    {
      text: "What else are you speaking through?",
      next: "apollo_8"
    },
    {
      text: "Leave this conversation",
      next: "intro",
      effect: { stats: { sanity: -2 } }
    }
  ]
},

apollo_8: {
  text:
    "Troy.\nThe priests.\nThe silence between your sentences.\n\nAnd sometimes...\n\nyou.",
  choices: [
    {
      text: "Go to the temple immediately",
      next: "temple_approach"
    }
  ]
},

apollo_death_hint: {
  text:
    "You will die for being correct too early.\n\nThat is the only crime I cannot protect you from.",
  choices: [
    {
      text: "That sounds like a threat",
      next: "vision_apollo_lie",
      effect: { stats: { sanity: -3 } }
    },
    {
      text: "I will remember this",
      next: "intro"
    }
  ]
},

/* =========================
   TEMPLE — PERSONAL GOD SPACE
========================= */

temple_approach: {
  text:
    "The Temple of Apollo does not welcome you.\n\nIt recognizes you.",
  choices: [
    {
      text: "Enter",
      next: "temple_inside"
    },
    {
      text: "Touch the threshold",
      next: "temple_touch",
      effect: { stats: { sanity: -3 } }
    }
  ]
},

temple_inside: {
  text:
    "Apollo is already here.\n\nNot as a statue.\nNot as light.\n\nAs attention.",
  choices: [
    {
      text: "Ask why he watches you",
      next: "apollo_watch"
    },
    {
      text: "Approach the altar",
      next: "altar_vision",
      effect: { stats: { sanity: -5 } }
    },
    {
      text: "Take something from the altar",
      next: "oracle_shard",
      effect: { addItem: "oracle_shard" }
    }
  ]
},

apollo_watch: {
  text:
    "Because you are the only thing in this city that keeps answering me back.",
  choices: [
    {
      text: "I don’t answer you",
      next: "apollo_watch_2"
    },
    {
      text: "What do you want from me?",
      next: "apollo_want"
    }
  ]
},

apollo_watch_2: {
  text:
    "You just did.",
  choices: [
    {
      text: "Stay silent",
      next: "silence_state"
    },
    {
      text: "Speak again",
      next: "apollo_1"
    }
  ]
},

apollo_want: {
  text:
    "I want you to stop asking questions you already know the ending to.",
  choices: [
    {
      text: "Then why give me visions?",
      next: "vision_1"
    }
  ]
},

/* =========================
   VISIONS (NOW PERSONALIZED)
========================= */

vision_1: {
  text:
    "Apollo speaks inside the vision.\n\n'You always see correctly,' he says.\n'You just arrive too early.'",
  choices: [
    {
      text: "Try to resist the vision",
      next: "intro",
      effect: { stats: { sanity: -2 } }
    },
    {
      text: "Let it continue",
      next: "vision_loop"
    }
  ]
},

vision_apollo_lie: {
  text:
    "Apollo laughs.\n\nYou have never heard him laugh before.\n\nThat should worry you more than it does.",
  choices: [
    {
      text: "Return to reality",
      next: "intro"
    }
  ]
},

vision_loop: {
  text:
    "You are speaking to Apollo.\n\nHe is speaking back.\n\nNeither of you agrees on when this conversation started.",
  choices: [
    {
      text: "Wake up",
      next: "intro",
      effect: { stats: { sanity: -1 } }
    },
    {
      text: "Stay here",
      next: "vision_loop"
    }
  ]
},

/* =========================
   SILENCE STATE
========================= */

silence_state: {
  text:
    "You stop speaking.\n\nApollo does not leave.\n\nHe waits.",
  choices: [
    {
      text: "Speak again",
      next: "apollo_1"
    },
    {
      text: "Remain silent",
      next: "intro",
      effect: { stats: { sanity: +2 } }
    }
  ]
}

};
