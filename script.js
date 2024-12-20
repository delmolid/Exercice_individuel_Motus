
function tryWord(word, base) {
	if (word.toUpperCase() === base.toUpperCase()) {
		return { wellPlaced: base.split(''), missplaced: [], notInWord: [] };

  } else {
  	let wellPlaced = [];
    
    let notInWord = [];
    console.log(wellPlaced);
    let missplaced = [];
    console.log(wellPlaced);
    
  	let arrayBase = base.split('');
    let arrayWord = word.split('');
    
		for (let i = 0; i < arrayBase.length; i++) {
    	if (arrayBase[i] === arrayWord[i]) {
      	wellPlaced.push(arrayWord[i]);
      }	else {
        missplaced.push(arrayWord[i])
      }
    }
    for (const char of arrayWord) {
    	if (arrayBase.includes(char) === false) {
      	notInWord.push(char)
      }
    }
    
    return { wellPlaced: wellPlaced, missplaced: missplaced, notInWord: notInWord } // Retourne l'objet complet
  }
}

function guess() {
	let base = 'dictionnaire'
	let word = document.getElementById("word").value
	let result = tryWord(word, base)
  console.log(result)
  document.getElementById("word").value = ''
  document.getElementById("win").innerText = ''
 	document.getElementById("try").innerText = word
  document.getElementById("well").innerText = 'Bien placé: ' + `${result.wellPlaced.join(',')}`
  document.getElementById("miss").innerText = 'Mal placé: '+ `${result.missplaced.join(',')}`
  document.getElementById("not").innerText = 'Pas dans le mot: '+ `${result.notInWord.join(',')}`

  if (result.wellPlaced.length === base.length) {
     document.getElementById("win").innerText = 'Vous avez gagné'
  }

}