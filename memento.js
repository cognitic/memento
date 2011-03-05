/*!
 * Mememto (vivo), KISS text-editor, depends on jQuery
 * http://mememto.cognitic.com/
 * Copyright 2011, Jean-Charles Labas
 *
 * Ecrivez et retrouvez simplement toutes vos notes dans un document unique. 
 * En ajoutant des titres balisés comme sur Wikipedia, vous organisez facilement des zones de texte 
 * qui apparraissent automatiquement dans le plan présenté à gauche.
 *
 * Date: Sat Mars 5  2011
 */


(function(){
	
function Mememto(defaultText,docID) {
	var t = defaultText, id = docID;
	var check = function() {
		//map if needed
	};
	var map = function() {

	};
	this.start = function() {
		//build ui
		//listen keys for checking
	};
}

//exemple: 
var demoText = "== Ce matin ==\n\r\n\rRéservation \n\r\n\r Photocopie passeport \n\r\n\r\n\r" + 
					" == Ce soir ==\n\r Courses\n\r\n\r Vidange\n\r\n\r" + 
					"== N tel ==\n\r Joe 09 08 07 05 06\n\rCarlos 09 08 07 05 06\n\r\n\r\n\r\n\r"
var memo = new Mememto(demoText,0);
memo.start();

})();