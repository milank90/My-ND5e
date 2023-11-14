function updateModifiers() {
    // convert ability scores into modifiers
  
    var strScore = document.getElementById("strScore").value;
    document.getElementById("strMod").value = Math.floor((strScore - 10) / 2);
    var dexScore = document.getElementById("dexScore").value;
    document.getElementById("dexMod").value = Math.floor((dexScore - 10) / 2);
    var conScore = document.getElementById("conScore").value;
    document.getElementById("conMod").value = Math.floor((conScore - 10) / 2);
    var intScore = document.getElementById("intScore").value;
    document.getElementById("intMod").value = Math.floor((intScore - 10) / 2);
    var wisScore = document.getElementById("wisScore").value;
    document.getElementById("wisMod").value = Math.floor((wisScore - 10) / 2);
    var chaScore = document.getElementById("chaScore").value;
    document.getElementById("chaMod").value = Math.floor((chaScore - 10) / 2);
  }
  
  function updateProfBonus() {
    // update proficiency bonus based on player level
  
    var charLVL = parseInt(document.getElementById("charLVL").value);
  
    if (charLVL >= 19) {
      document.getElementById("profBonus").value = 9;
    } else if (charLVL >= 16) {
      document.getElementById("profBonus").value = 8;
    } else if (charLVL >= 13) {
      document.getElementById("profBonus").value = 7;
    } else if (charLVL >= 10) {
      document.getElementById("profBonus").value = 6;
    } else if (charLVL >= 7) {
      document.getElementById("profBonus").value = 5;
    } else if (charLVL >= 4) {
      document.getElementById("profBonus").value = 4;
    } else {
      document.getElementById("profBonus").value = 3;
    }
  }
  
  function charLVLChange() {
    updateProfBonus();
    updateModifiers();
  }
  