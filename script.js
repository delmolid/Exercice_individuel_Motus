function tryWord(word, base) {
  if (word.toUpperCase() === base.toUpperCase()) {
    return { wellPlaced: base.split(""), missplaced: [], notInWord: [] };
  } else {
    let wellPlaced = [];
    let missplaced = [];
    let notInWord = [];

    let arrayBase = base.split("");
    let arrayWord = word.split("");

    for (let i = 0; i < arrayBase.length; i++) {
      if (arrayBase[i] === arrayWord[i]) {
        wellPlaced.push(arrayWord[i]);
      } else {
        missplaced.push(arrayWord[i]);
      }
    }

    for (const char of arrayWord) {
      if (arrayBase.includes(char) === false) {
        notInWord.push(char);
      }
    }

    return {
      wellPlaced: wellPlaced,
      missplaced: missplaced,
      notInWord: notInWord,
    }; // Retourne l'objet complet
  }
}

function guess() {
  let baliseA = document.getElementById("conteneurB");
  let base = "dictionnaire";
  let word = document.getElementById("word").value;
  let result = tryWord(word, base);

  // Vider l'input et le message de victoire
  document.getElementById("word").value = "";
  document.getElementById("win").innerText = "";

  // Afficher les résultats
  document.getElementById("try").innerText = `Mot testé: ${word}`;
  document.getElementById("well").innerText =
    "Bien placé: " + `${result.wellPlaced.join(",")}`;
  document.getElementById("miss").innerText =
    "Mal placé: " + `${result.missplaced.join(",")}`;
  document.getElementById("not").innerText =
    "Pas dans le mot: " + `${result.notInWord.join(",")}`;

  // Créer un nouveau paragraphe avec le mot testé
  const message = document.createElement("p");
  message.innerText = `Vous avez essayé le mot : ${word}`;
  baliseA.appendChild(message);

  // Gérer les couleurs de fond en fonction du résultat
  if (result.wellPlaced.length === base.length) {
    document.body.classList.add("body-win"); // Ajouter le fond vert
    document.body.classList.remove("body-fail"); // Supprimer le fond rouge
    document.getElementById("win").innerText = "🎉 Vous avez gagné";
  } else {
    document.body.classList.remove("body-win"); // Supprimer le fond vert
    document.body.classList.add("body-fail"); // Ajouter le fond rouge
    document.getElementById("win").innerText = "❌ Continuez à chercher !";
  }
}
