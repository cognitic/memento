(function(){function b(){var k,m,f,g,o,i,e,d,j,n,l=0,h=/^(\s*)==(.+)==(\s*)$/m;scrollToRow=function(r){r.preventDefault();if(this.value!=d){d=this.value;var q=_offSet+parseInt(this.value)*m.height()/l;k.animate({scrollTop:q},Math.abs(q-$(window).scrollTop()))}},updateMap=function(u){var s=m.val().split("\n");if(l!=s.length){l=s.length;m.attr("rows",l);var t=[];for(var r=0;r<l;r++){if(h.test(s[r].replace("== ","=="))){var q=s[r].replace("==","");if(q.length>22){q=q.substring(0,21)}var v=r.toString();t.push("<input type='radio' name='menu' value='"+v+"'><span> "+q+"</span>")}}if(t.length>0){f.html(t.join("<br />"));$("#m input").each(function(w){$(this).click(scrollToRow)})}else{f.innerHtml="<p>Pour ajouter une section au menu, entrez son titre entouré des symboles ==</p>"}updateMenu()}};updateMenu=function(){var s=Math.round(($(window).scrollTop()-_offSet)/(m.height()/l));$("#m span").each(function(r){this.style.color="#224"});var t=$("#m input");var q=t.last()[0];if(s>=q.value){q.checked=true;q.nextSibling.style.color="#3FD9FF";d=q.value}else{t.each(function(r){if((r>0)&&(s<this.value)){var u=t[r-1];u.checked=true;u.nextSibling.style.color="#3FD9FF";d=u.value;return false}})}};load=function(q,r){if(!q&&!r){}};save=function(){if(!a&&!p){}};ini=function(q,r){k=$("html,body"),m=$("#t"),f=$("#m"),g=$("#l");o=$("#s"),i=$("#f"),_offSet=r,d=0;if(!q){m.val(Array(65).join("\r\n"))}else{m.val(q)}g.click(function(){});o.click(function(){});m.keyup(updateMap);$(window).scroll(updateMenu);updateMap();if($("#m input").length>0){$("#m input")[0].checked=true;$("#m input")[0].style.color="#3FD9FF"}};this.start=function(q,r){ini(q,r)}}var c="== Exemple de section 1 == \r\n\r\n Bla bla "+Array(25).join("\r\n")+"== Exemple de section 2 == \r\n\r\n Bla bla "+Array(25).join("\r\n")+"== Exemple de section 3 == \r\n\r\n Bla bla "+Array(35).join("\r\n");$(document).ready(function(){new b().start(c,20)})})();