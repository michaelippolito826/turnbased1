class Battle {
  constructor() {
    this.combatants = {
      "player1": new Combatant({
        ...Champs.zac,
        team: "player",
        hp: 30,
        maxHp: 50,
        xp: 75,
        maxXp: 100,
        level: 1,
        // status: { type: "saucy" },
        status: null,
        isPlayerControlled: true
      }, this),
      "player2": new Combatant({
        ...Champs.ashe,
        team: "player",
        hp: 30,
        maxHp: 50,
        xp: 75,
        maxXp: 100,
        level: 1,
        status: null,
        isPlayerControlled: true
      }, this),
      "enemy1": new Combatant({
        ...Champs.fizz,
        team: "enemy",
        hp: 20,
        maxHp: 50,
        xp: 20,
        maxXp: 100,
        level: 1,
      }, this),
      "enemy2": new Combatant({
        ...Champs.vi,
        team: "enemy",
        hp: 25,
        maxHp: 50,
        xp: 30,
        maxXp: 100,
        level: 1,
      }, this)
    }
    this.activeCombatants = {
      player: "player1",
      enemy: "enemy1",
    }
    this.items = [
      { actionId: "item_recoverStatus", instanceId: "p1", team: "player" },
      { actionId: "item_recoverStatus", instanceId: "p2", team: "player" },
      { actionId: "item_recoverStatus", instanceId: "p3", team: "enemy" },

      { actionId: "item_recoverHp", instanceId: "p4", team: "player" },
    ]

  }

  createElement() {
    this.element = document.createElement("div");
    this.element.classList.add("Battle");
    this.element.innerHTML = (`
    <div class="Battle_hero">
      <img src="${'/images/characters/people/hero.png'}" alt="Hero" />
    </div>
    <div class="Battle_enemy">
      <img src=${'/images/characters/people/npc32.png'} alt="Enemy" />
    </div>
    `)
  }

  init(container) {
    this.createElement();
    container.appendChild(this.element);

    Object.keys(this.combatants).forEach(key => {
      let combatant = this.combatants[key];
      combatant.id = key;
      combatant.init(this.element)
    })

    this.turnCycle = new TurnCycle({
      battle: this,
      onNewEvent: event => {
        return new Promise(resolve => {
          const battleEvent = new BattleEvent(event, this)
          battleEvent.init(resolve);
        })
      }
    })
    this.turnCycle.init();


  }

}