window.Typing = {
  poison: "poison",
  water: "water",
  fighting: "fighting",
  ice: "ice",
};

window.Champs = {
  zac: {
    name: "Zac",
    type: Typing.poison,
    src: "/images/characters/pizzas/champs2/singed.png",
    icon: "/images/icons/poison.png",
    actions: ["poison_trail", "saucyStatus", "clumsyStatus"],
  },
  ashe: {
    name: "Ashe",
    type: Typing.ice,
    src: "/images/characters/pizzas/champs/tile021.png",
    icon: "/images/icons/ice.png",
    actions: ["zacq", "saucyStatus", "clumsyStatus"],
  },
  fizz: {
    name: "Fizz",
    type: Typing.water,
    src: "/images/characters/pizzas/champs/tile001.png",
    icon: "/images/icons/water.png",
    actions: ["poison_trail"],
  },
  vi: {
    name: "Vi",
    type: Typing.fighting,
    src: "/images/characters/pizzas/champs2/vi.png",
    icon: "/images/icons/fungi.png",
    actions: ["zacq"],
  },
};
