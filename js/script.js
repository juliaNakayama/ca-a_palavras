matriz = new Array;
matriz = 
   //0    1    2    3    4    5    6    7    8    9    10   11   12   13  14     
  [['B', 'E', 'I', 'J', 'I', 'N', 'H', 'O', 'E', 'N', 'Y', 'F', 'U', 'M', 'O'], //0
   ['O', 'D', 'S', 'A', 'D', 'B', 'M', 'G', 'H', 'F', 'L', 'A', 'R', 'F', 'C'], //1
   ['L', 'M', 'Z', 'R', 'C', 'K', 'T', 'E', 'M', 'P', 'O', 'N', 'F', 'W', 'H'], //2
   ['A', 'A', 'A', 'B', 'N', 'G', 'E', 'L', 'E', 'I', 'A', 'K', 'P', 'K', 'O'], //3
   ['C', 'S', 'V', 'R', 'Q', 'F', 'R', 'U', 'T', 'G', 'L', 'Y', 'F', 'P', 'C'], //4
   ['H', 'S', 'F', 'I', 'G', 'P', 'R', 'X', 'W', 'T', 'C', 'M', 'O', 'W', 'O'], //5
   ['A', 'A', 'T', 'G', 'S', 'H', 'I', 'R', 'Q', 'B', 'G', 'T', 'R', 'R', 'L'], //6
   ['F', 'A', 'C', 'A', 'V', 'A', 'C', 'B', 'O', 'L', 'O', 'A', 'C', 'P', 'A'], //7
   ['A', 'J', 'O', 'D', 'H', 'E', 'E', 'N', 'G', 'P', 'A', 'Z', 'A', 'A', 'T'], //8
   ['L', 'H', 'G', 'E', 'F', 'B', 'L', 'Q', 'U', 'I', 'N', 'D', 'I', 'M', 'E'], //9
   ['I', 'M', 'T', 'I', 'N', 'E', 'L', 'C', 'N', 'A', 'I', 'T', 'B', 'O', 'A'], //10
   ['T', 'B', 'C', 'R', 'J', 'G', 'E', 'L', 'A', 'T', 'I', 'N', 'A', 'N', 'S'], //11
   ['A', 'E', 'K', 'O', 'H', 'T', 'L', 'X', 'C', 'Y', 'A', 'P', 'H', 'H', 'A'], //12
   ['S', 'Y', 'N', 'E', 'W', 'T', 'O', 'N', 'M', 'S', 'D', 'E', 'S', 'A', 'B'], //13
   ['G', 'Q', 'I', 'G', 'A', 'F', 'T', 'O', 'R', 'T', 'A', 'O', 'G', 'L', 'K'],]


document.write("<p>Encontre no caça-palavras abaixo nomes de 10 doces!</p>");
document.write("<table>");
for (x = 0; x <= 14; x++) {
    document.write("<tr>");
    for (y = 0; y <= 14; y++ ) {
        if(    y == 0 && x >= 0 && x < 7 /*/BOLACHA*/
            || y == 14 && x > 0 && x < 9  /*BEIJINHO*/
            || y == 3 && x >= 3 && x < 13 /*/BRIGADEIRO*/
            || y == 13 && x >= 7 && x < 14 /*PAMONHA*/
            || x == 0 && y > 0 && y < 8 /*CHOCOLATE*/
            || x == 9 && y > 6 && y < 14 /*QUINDIM*/
            || x == 11 && y > 4 && y < 14 /*GELATINA*/
            || x == 7 && y > 6 && y < 11 /*BOLO*/
            || x == 3 && y > 4 && y < 11 /*GELEIA*/
            || x == 14 && y > 5 && y < 11 /*TORTA*/ ) {
            document.write("<td id='palavras'>" + matriz[x][y] + "</td>");
        }
        else {
            document.write("<td>" + matriz[x][y] + "</td>");
        }
    }
    document.write("</tr>");
};
document.write("</table>");
document.write("<center>BOLACHA - BEIJINHO - BRIGADEIRO - PAMONHA - CHOCOLATE <br> QUINDIM - GELATINA - BOLO - GELEIA - TORTA </center>");