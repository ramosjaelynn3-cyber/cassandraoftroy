export const scenes = {

/* =========================
   INTRO — PROPHECY AWAKENS
========================= */

intro: {
  text: "You are Cassandra of Troy. The gods once kissed your tongue—and cursed it. You speak truth, but no one believes you.",
  choices: [
    { text: "Walk toward the Temple of Apollo", next: "temple_entrance" },
    { text: "Go to the palace courtyard", next: "courtyard_1" },
    { text: "Listen for prophecy in silence", next: "vision_1", effect: { stats: { sanity: -5 } } }
  ]
},

/* =========================
   TEMPLE HUB
========================= */

temple_entrance: {
  text: "The Temple of Apollo breathes like a living thing. The air tastes like burnt honey and forgotten prayers.",
  choices: [
    { text: "Enter the temple", next: "temple_inside" },
    { text: "Circle the temple exterior", next: "temple_outside" },
    { text: "Touch the stone threshold", next: "temple_touch", effect: { stats: { sanity: -3 } } }
  ]
},

temple_inside: {
  text: "Inside, the altar flickers between states—clean stone, blood-stained marble, ash-covered ruin.",
  choices: [
    { text: "Approach the altar", next: "altar_vision", effect: { stats: { sanity: -5 } } },
    { text: "Pray to Apollo", next: "apollo_silence" },
    { text: "Take a relic shard", next: "oracle_shard", effect: { addItem: "oracle_shard" } }
  ]
},

temple_outside: {
  text: "The walls whisper your name in languages you do not remember learning.",
  choices: [
    { text: "Follow the whispers", next: "whisper_path" },
    { text: "Ignore them", next: "intro" }
  ]
},

temple_touch: {
  text: "The stone flashes hot. A future version of you screams without sound.",
  choices: [
    { text: "Pull away", next: "temple_entrance", effect: { stats: { sanity: -2 } } },
    { text: "Do not move", next: "vision_altar" }
  ]
},

/* =========================
   COURTYARD HUB
========================= */

courtyard_1: {
  text: "The courtyard is full of life that does not notice you. You are present, but not believed into existence.",
  choices: [
    { text: "Approach the guards", next: "guards_1" },
    { text: "Watch the nobles", next: "nobles_1" },
    { text: "Warn of future war", next: "warning_1", effect: { stats: { influence: +1 } } }
  ]
},

guards_1: {
  text: "The guards laugh when you speak. One calls you ‘Apollo’s broken toy.’",
  choices: [
    { text: "Insist anyway", next: "guards_2", effect: { stats: { influence: +1 } } },
    { text: "Leave silently", next: "courtyard_1" },
    { text: "Predict their death", next: "vision_guards", effect: { stats: { sanity: -4 } } }
  ]
},

guards_2: {
  text: "They stop laughing—but only to pity you.",
  choices: [
    { text: "Return to courtyard", next: "courtyard_1" },
    { text: "Collapse into vision", next: "vision_2" }
  ]
},

nobles_1: {
  text: "Nobles pass like polished statues. One looks directly through you.",
  choices: [
    { text: "Speak prophecy aloud", next: "nobles_2" },
    { text: "Follow unseen noble", next: "shadow_noble" }
  ]
},

nobles_2: {
  text: "Your words land like dust. No one reacts.",
  choices: [
    { text: "Try again louder", next: "courtyard_1", effect: { stats: { influence: +1 } } },
    { text: "Stop speaking", next: "silence_1" }
  ]
},

warning_1: {
  text: "You speak of burning ships. A child laughs. A priest makes a sign against you.",
  choices: [
    { text: "Continue warning", next: "warning_2", effect: { stats: { influence: +2 } } },
    { text: "Retreat", next: "intro" },
    { text: "See the burning ships again", next: "vision_fire" }
  ]
},

/* =========================
   PROPHECY / VISION HUB
========================= */

vision_1: {
  text: "You see Troy burning—but it has not yet been built in flame.",
  choices: [
    { text: "Try to interpret it", next: "vision_interpret" },
    { text: "Scream", next: "courtyard_1", effect: { stats: { sanity: -3 } } }
  ]
},

vision_2: {
  text: "Time folds. You are standing in the courtyard, but also in its ruin.",
  choices: [
    { text: "Anchor yourself", next: "intro" },
    { text: "Let it continue", next: "vision_loop" }
  ]
},

vision_fire: {
  text: "Ships burn on black water. A wooden horse watches.",
  choices: [
    { text: "Remember this", next: "intro", effect: { addItem: "prophecy_fragment" } },
    { text: "Forget it", next: "courtyard_1", effect: { stats: { sanity: +2 } } }
  ]
},

/* =========================
   KEY TEMPLE VISIONS
========================= */

altar_vision: {
  text: "Apollo speaks—but only in future tense.",
  choices: [
    { text: "Ask for clarity", next: "apollo_silence" },
    { text: "Accept vision", next: "vision_altar" },
    { text: "Reject god", next: "temple_inside", effect: { stats: { influence: +1 } } }
  ]
},

vision_altar: {
  text: "You see yourself speaking truth. No one listening. Again. And again.",
  choices: [
    { text: "Step back", next: "temple_inside" },
    { text: "Stay", next: "vision_loop" }
  ]
},

apollo_silence: {
  text: "The god does not answer. Only echoes respond.",
  choices: [
    { text: "Break silence", next: "temple_inside", effect: { stats: { influence: +1 } } },
    { text: "Listen longer", next: "vision_1" }
  ]
},

/* =========================
   SECRET PATHS
========================= */

whisper_path: {
  text: "The whispers form a path that does not exist on any map.",
  choices: [
    { text: "Follow deeper", next: "oracle_shard_room" },
    { text: "Turn back", next: "temple_entrance" }
  ]
},

oracle_shard_room: {
  text: "A fractured relic pulses with light that feels like memory.",
  choices: [
    { text: "Take it", next: "oracle_shard", effect: { addItem: "oracle_shard" } },
    { text: "Leave it", next: "temple_inside" }
  ]
},

oracle_shard: {
  text: "The shard burns in your hand. You now remember things that have not happened yet.",
  choices: [
    { text: "Return to temple", next: "temple_inside" },
    { text: "Listen to it", next: "vision_2" }
  ]
},

/* =========================
   SILENCE / ENDING OF ACT I
========================= */

silence_1: {
  text: "When you stop speaking, the world briefly makes sense again.",
  choices: [
    { text: "Stay silent", next: "intro", effect: { stats: { sanity: +2 } } },
    { text: "Speak again", next: "courtyard_1" }
  ]
},

vision_loop: {
  text: "Time repeats incorrectly. You remember this moment from before you lived it.",
  choices: [
    { text: "Wake up", next: "intro", effect: { stats: { sanity: -1 } } },
    { text: "Continue looping", next: "vision_loop" }
  ]
}

};
