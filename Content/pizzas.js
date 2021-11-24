window.PizzaTypes = {
  normal: "normal",
  spicy: "spicy",
  veggie: "veggie",
  fungi: "fungi",
  chill: "chill",
}

window.Pizzas = {
  "s001": {
    name: "Slice Samurai",
    type: PizzaTypes.spicy,
    src: "/images/characters/pizzas/champs/tile000.png",
    icon: "/images/icons/spicy.png",
    actions: [ "saucyStatus", "clumsyStatus", "damage1" ],
  },
  "v001": {
    name: "Call Me Kale",
    type: PizzaTypes.veggie,
    src: "/images/characters/pizzas/champs/tile024.png",
    icon: "/images/icons/veggie.png",
    actions: [ "damage1" ],
  },
  "f001": {
    name: "Portobello Express",
    type: PizzaTypes.fungi,
    src: "/images/characters/pizzas/tile002.png",
    icon: "/images/icons/fungi.png",
    actions: [ "damage1" ],
  }
}