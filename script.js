

function tryWord(valeur, base) {  // Création de la Fonction tryword avec 2 parametres mots et base 
	// TODO: fix jeu sensible à la casse.
	if (valeur === base) {  // Condition qui verifie si le mot est similiaire à la base
		return {wellPlaced: base.split(''), missplaced: [], notInWord: []   }      // Si vrai retourne vrai
  } else {  // Sinon
  	let wellPlaced = [];  // Création d'un tableau bon placement des lettres
    let notInWord = [];  // Creation d'un tableau non dans le mot 
    let missplaced = [];  // Creation d'un tableau mauvais placement des lettres
    
  	let arrayBase = base.split('');  // Séparation de la base et assignation à la variable arrayBase 
    let arrayWord = valeur.split('');  // Séparation du mot et assignation à la variable arrayWord 
    
		for (let i = 0; i < arrayBase.length; i++) {   // Boucle for pour parcourir le tableau de Base
    	if (arrayBase[i] === arrayWord[i]) {   // Condition qui verifie si l'index d'arrayBase est strictement similiaire à l'index arrayWord
      	wellPlaced.push(arrayWord[i]);      // Si oui ajoute les index arrayWord au tableau wellPlaced
      }	else {
        missplaced.push(arrayWord[i])   // Sinon ajoute les index arrayWord au tableau missplaced
      }
    }
    
    for (const char of arrayWord) {  // Boucle for pour parcourir le tableau arrayWord 
    	if (arrayBase.includes(char) === false) { // Condition qui verifie les caracteres qui composent arrayBase sont fausses 
      	notInWord.push(char)  // Si vrai ajoute les lettres d'arrayBase dans notInWord
      }
    }
    
    return { wellPlaced: base.split(''), missplaced: [], notInWord: [] }; // Retourne l'objet complet
  }
}

function guess() {     // Création de la fonction guess sans parametres 
	let base = 'toto'   // Variable base 
    let word = document.getElementById("word") // Variable word
    let valeur = word.value;
	let result = tryWord(valeur, base)   // Variable result 
    console.log("bonjour")
    word = ''  // Vider la valeur du mot word
document.getElementById("try").innerText = word // Alimente le DOM(ID : TRY) par le mot 
  document.getElementById("well").innerText = "Bien placé:"  + result.wellPlaced.join('') // Alimente le DOM(ID : Well) par le format  Bien placé: '+result.wellPlaced.join(', ')
  document.getElementById("miss").innerText = 'Mal placé: '+ result.missplaced.join(' ') // Alimente le DOM(ID : miss) par le mot  Mal placé: '+result.missplaced.join(', ')
  document.getElementById("not").innerText = 'Pas dans le mot: '+ result.notInWord.join('') // Alimente le DOM(ID : not) par le mot Pas dans le mot: '+result.notInWord.join(', ')
    
  if (result.wellPlaced.length === base.length) {  // Condition qui verifier si le result.wellPlaced.length === base.length est vraie 
    console.log("test")
document.getElementById("win").innerText = 'Vous avez gagné' // Si oui on aliment le DOM (ID : win) 'Vous avez gagné'
} 

}
guess()
