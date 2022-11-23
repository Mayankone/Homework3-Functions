let party = [
  {
      name: 'Joline',
      hitpoints: 15,
      belongings: ["spear", "bread", "Tums"],
      companion: {
          name: "Tabby",
          type: "cat",
      }
  },
  {
      name: 'Timothy',
      hitpoints: 10,
      belongings: ["sword", "potion", "Tums"],
      companion: {
          name: "Velma",
          type: "Bat",
      }
  },
  {
      name: 'Sarah',
      hitpoints: 20,
      belongings: ["bow", "arrows", "wood"],
      companion: {
          name: "Tony",
          type: "tiger",
      }
  },
]


 /* party.forEach((element) => {
    element.hitpoints = element.hitpoints * 2;
  }) */
  // Doubles hitpoints for everyone in party(1)


 const losePoints = (name, hp) => {
  party.forEach((element) => {
    if(name == element.name){
      element.hitpoints = element.hitpoints - hp;
    }
  })
} 
// losePoints("Timmy", 5)
// Take away points from a member(5 points from Timmy)(2)

  const changeAnimal = (name) => {
  party.forEach((element) => {
    if(name == element.name){
      element.companion.type = "jellyfish";
    }
  })
} 
// changeAnimal("Sarah")(3)

 const removePotion = (name) => {
  party.forEach((element) => {
  if(name == element.name){
  element.hitpoints = element.hitpoints + 20;
  const index = element.belongings.indexOf("potion");
  const remove = element.belongings.splice(index,1);
  }
  })
} 
// Remove potion from Timothy's inventory and adding 20 to hitpoints (4) 
// removePotion("Timothy");

 const breadThief = (name, name1) => {
party.forEach((element) => {
if(name == element.name){
  const index = element.belongings.indexOf("bread");
  const remove = element.belongings.splice(index,1);
}
else if(name1 == element.name){
  element.belongings.push("bread");
}
})
}
// Timothy stole Joline's bread(5)
//breadThief("Joline", "Timothy");

const jolineLeft = (leavingMember) => {
  party.forEach((element) => {
    if(leavingMember == element.name){
      const remove = element.splice[0];
    }
  })
}
// Remove Joline from party completely(6).  
// jolineLeft("Joline");

const joiningMember = (newAdventurer) => {
  const add = party.push(newAdventurer);
  }

joiningMember("name: Jordan, hitpoints: 20,belongings: [sword, gloves, mask]");
// Joining member(7)


const addGold = (amountofGold) => {
party.forEach((element) => {
  element.gold = Math.floor(amountofGold/3);
}) 
}
addGold(200);
// Add gold(8)

const leavingAnimal = (name) => {
  party.forEach((element) => {
    if(name == element.name){
      element.companion.type = "bear";
      element.gold = element.gold - 20;
    }
  })
} 
leavingAnimal("Sarah");
// Sarah loses gold and gets a bear(9)

const changingSwordName = (name) => {
  party.forEach((element) => {
  if(name == element.name){
    const index = element.belongings.indexOf("sword");
    const remove = element.belongings.splice(index,1);
    element.belongings.push("Rusty Sword");
  }
})
}
changingSwordName("Timothy");
// Changing Timmy's sword from "sword" to "rusty sword"(10)

const setLeader = (name) => {
  party.forEach((element) => {
    if(name == element.name){
      element.leader = "true";
    }
    else {
      element.leader = "false";
    }
  })
}

setLeader("Timothy");



console.log(party[0]);
