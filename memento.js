/*!
 * Mememto (vivo) text-editor, depends on jQuery
 * http://mememto.cognitic.com/
 * Copyright 2011, Jean-Charles Labas
 *
 * Ecrivez et retrouvez simplement toutes vos notes dans un document unique. 
 * En ajoutant des titres balisés comme sur Wikipedia (== titre ==), vous organisez facilement des zones de texte 
 * qui retrouve automatiquement dans le menu présenté à gauche.
 *
 * Date: Sat Mars 5  2011
 */

(function(){
function Mememto() {
	var _b, _t, _m, _l, _s, _f, _o, _p, _alias, _password, _mapRowsCount = 0, _titleReg = /^(\s*)==(.+)==(\s*)$/m;
	scrollToRow = function(event) {
		event.preventDefault();
		//console.log("scrollto " + this.value);
		if (this.value != _p){
			_p = this.value;
			var h = _offSet + parseInt(this.value) * _t.height() / _mapRowsCount;
		    _b.animate({scrollTop: h}, Math.abs(h - $(window).scrollTop()));
		}
	},
	updateMap = function(e) {
		//if ctrl + arrow we move
		
		var rows = _t.val().split("\n");
		if (_mapRowsCount != rows.length) {
			
			_mapRowsCount = rows.length;
			_t.attr('rows', _mapRowsCount);
			var map = []
			for (var i = 0; i < _mapRowsCount; i++)
			{
				var label = rows[i].replace("== ","==");
				if (_titleReg.test(label)){
					label = rows[i].replace("==","");
					if (label.length > 22) {
						label = label.substring(0, 21);
					}
					var row = i.toString();
					//console.log("title l." + row + " "+ label);
					map.push("<input type='radio' name='menu' value='" + row + "'><span> " + label + "</span>");
				}
			}
			
			if (map.length > 0) {
				//console.log(map.join("<br />"));
				_m.html(map.join("<br />"));
				$("#m input").each(function (i) {
					$(this).click(scrollToRow);
			    });
			}else{
				_m.innerHtml = "<p>Pour ajouter une section au menu, entrez son titre entouré des symboles ==</p>";
			}
		 updateMenu();
		}
	}
	updateMenu = function() {
		var r = Math.round(($(window).scrollTop()  - _offSet) / (_t.height() / _mapRowsCount));
		//console.log(r);
		
		$("#m span").each(function (i) {
			this.style.color = "#224";
		});
		
		var radios = $("#m input");
		var l = radios.last()[0];
		if (r >= l.value){
			l.checked = true;
			l.nextSibling.style.color = "#3FD9FF";
			_p = l.value;
		}else{
			radios.each(function (i) {
		       if ((i > 0) && (r < this.value)) {
					//console.log("selected menu l." + r + " " + this.value);
					var n = radios[i-1];
					n.checked = true;
					n.nextSibling.style.color = "#3FD9FF";
					_p = n.value;
					return false;
		       }
		    });
		}
	}
	load = function(a,p) {
		if (!a && !p){
			//ajax call
		}
	}
	save = function() {
		if (!a && !p){
			//ajax call
		}
	}
	ini = function(s,o) {
		_b = $('html,body'), _t = $('#t'),_m = $('#m'),_l = $('#l');_s = $('#s'),_f = $('#f'), _offSet = o, _p = 0;
		if (!s) {
			_t.val(Array(65).join("\r\n"));
		}else{	
			_t.val(s);
		}
		_l.click(function() {
		  //load
		});
		_s.click(function() {
		  //save
		});
		_t.keyup(updateMap);
		$(window).scroll(updateMenu);
		updateMap();
		if ($("#m input").length > 0){
			$("#m input")[0].checked = true;
			$("#m input")[0].style.color = "#3FD9FF";
		}
	};
	this.start = function(s,o) {
		ini(s,o);
	};
}

var demoText = "== Exemple de section 1 == \r\n\r\n Bla bla " + Array(25).join("\r\n") + 
			"== Exemple de section 2 == \r\n\r\n Bla bla " + Array(25).join("\r\n") + 
			"== Exemple de section 3 == \r\n\r\n Bla bla " + Array(35).join("\r\n");
$(document).ready(function () {new Mememto().start(demoText,20);});
})();