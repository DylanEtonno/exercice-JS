var a=3
var b="chaine de caractere"
document.writeln(a);
document.writeln(b);
document.writeln(b+""+a+"");

var nbre_lignes = prompt("saisir le nombre de lignes du tableau") ;
	if (nbre_lignes >50 ) {ventier =50;}
	document.write("<table>");
	for (i=0;i<=nbre_lignes; i++)
	{
		document.write("<tr>");
		document.write("<td>colonne 1</td>");
		document.write("<td>colonne 2 </td>");
		document.write("<td>colonne 3 </td>");
		document.write("</tr>");
	}
	document.write("</table>");