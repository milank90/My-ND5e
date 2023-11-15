function updateModifiers() {
    // convert ability scores into modifiers
  
    var strScore = document.getElementById("strScore").value;
    document.getElementById("strMod").textContent = Math.floor((strScore - 10) / 2);
    var dexScore = document.getElementById("dexScore").value;
    document.getElementById("dexMod").textContent = Math.floor((dexScore - 10) / 2);
    var conScore = document.getElementById("conScore").value;
    document.getElementById("conMod").textContent = Math.floor((conScore - 10) / 2);
    var intScore = document.getElementById("intScore").value;
    document.getElementById("intMod").textContent = Math.floor((intScore - 10) / 2);
    var wisScore = document.getElementById("wisScore").value;
    document.getElementById("wisMod").textContent = Math.floor((wisScore - 10) / 2);
    var chaScore = document.getElementById("chaScore").value;
    document.getElementById("chaMod").textContent = Math.floor((chaScore - 10) / 2);

    setSkills();
  }
  
  function updateProfBonus() {
    // update proficiency bonus based on player level
  
    var charLVL = parseInt(document.getElementById("charLVL").value);
  
    if (charLVL >= 19) {
      document.getElementById("profBonus").textContent = 9;
    } else if (charLVL >= 16) {
      document.getElementById("profBonus").textContent = 8;
    } else if (charLVL >= 13) {
      document.getElementById("profBonus").textContent = 7;
    } else if (charLVL >= 10) {
      document.getElementById("profBonus").textContent = 6;
    } else if (charLVL >= 7) {
      document.getElementById("profBonus").textContent = 5;
    } else if (charLVL >= 4) {
      document.getElementById("profBonus").textContent = 4;
    } else {
      document.getElementById("profBonus").textContent = 3;
    }
  }

  function setSkills() {
    var profBonus = parseInt(document.getElementById("profBonus").textContent);
    var modifiers = {
      "Str": "strMod",
      "Dex": "dexMod",
      "Con": "conMod",
      "Int": "intMod",
      "Wis": "wisMod",
      "Cha": "chaMod",
    };
  
    var skills = ["acro", "anim", "athl","chacontr" ,"craft", "dec", "illu", "ins", "hist", "intim", "invest", "medic", "nat", "ninsh", "perc", "perf", "pers", "soh", "stealth", "surv", "mart"]; // Add other skills as needed
  
    skills.forEach(function (skill) {
      var dropdownId = skill + "Drpd";
      var checkboxEId = skill + "E";
      var checkboxPId = skill + "P";
      var modId = skill + "Mod";
  
      var modifierType = document.getElementById(dropdownId).value;
      var skillModValue = parseInt(document.getElementById(modifiers[modifierType]).textContent) || 0;
  
      if (document.getElementById(checkboxEId).checked) {
        skillModValue += 2 * profBonus;
      } else if (document.getElementById(checkboxPId).checked) {
        skillModValue += profBonus;
      }
  
      document.getElementById(modId).textContent = skillModValue;
    });
  }
  
  

  
  function charLVLChange() {
    updateProfBonus();
    updateModifiers();
    setSkills();
  }
  