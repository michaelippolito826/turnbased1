window.Actions = {
  poison_trail: {
    name: "Poison Trail",
    description: "Does minor damage and causes poison (20 + Poison)!",
    success: [
      { type: "textMessage", text: "{CASTER} uses {ACTION}!" },
      { type: "animation", animation: "glob", color: "#4db560" },
      // { type: "stateChange", status: null },
      { type: "stateChange", status: { type: "poison", expiresIn: 3 } },
      { type: "stateChange", damage: 20 },
    ],
  },
  fling: {
    name: "Fling",
    description: "Does major normal damage (50)!",
    success: [
      { type: "textMessage", text: "{CASTER} uses {ACTION}!" },
      { type: "animation", animation: "spin" },
      { type: "stateChange", damage: 50 },
    ],
  },
  insanity_potion: {
    name: "Insanity Potion",
    targetType: "friendly",
    description: "Recover HP for 3 turns and ",
    success: [
      { type: "textMessage", text: "{CASTER} uses {ACTION}!" },
      { type: "stateChange", recover: 50 },
      { type: "textMessage", text: "{CASTER} recovers HP!" },
    ],
  },

  saucyStatus: {
    name: "Tomato Squeeze",
    description: "Applies the Saucy status",
    targetType: "friendly",
    success: [
      { type: "textMessage", text: "{CASTER} uses {ACTION}!" },
      { type: "stateChange", status: { type: "saucy", expiresIn: 3 } },
    ],
  },
  clumsyStatus: {
    name: "Olive Oil",
    description: "Slippery mess of deliciousness",
    success: [
      { type: "textMessage", text: "{CASTER} uses {ACTION}!" },
      { type: "animation", animation: "glob", color: "#dafd2a" },
      { type: "stateChange", status: { type: "clumsy", expiresIn: 3 } },
      { type: "textMessage", text: "{TARGET} is slipping all around!" },
    ],
  },
  //Items
  item_recoverStatus: {
    name: "Heating Lamp",
    description: "Feeling fresh and warm",
    targetType: "friendly",
    success: [
      { type: "textMessage", text: "{CASTER} uses a {ACTION}!" },
      { type: "stateChange", status: null },
      { type: "textMessage", text: "Feeling fresh!" },
    ],
  },
  item_recoverHp: {
    name: "Parmesan",
    targetType: "friendly",
    success: [
      { type: "textMessage", text: "{CASTER} sprinkles on some {ACTION}!" },
      { type: "stateChange", recover: 10 },
      { type: "textMessage", text: "{CASTER} recovers HP!" },
    ],
  },
};
