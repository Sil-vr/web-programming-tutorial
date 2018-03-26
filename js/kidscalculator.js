var q1 = "[■____ _____] "; var q0 ='[_____ _____] '; var q2 ='[■■___ _____] '; var q3 ='[■■■__ _____]';
var q4='[■■■■_ _____] '; var q5='[■■■■■ _____] '; var q6='[■■■■■ ■____] '; var q7='[■■■■■ ■■___] ';
var q8='[■■■■■ ■■■__] '; var q9 ='[■■■■■ ■■■■_] '; var q ='[■■■■■ ■■■■■] ';
var Q=[q0,q1,q2,q3,q4,q5,q6,q7,q8,q9,q];

function count(n) {
        for (var i=1;i <= n;i++) {
            console.info(Q[i]);
        }
    }

    count(2);

function addnumber(a,b) {
    console.info('primul numar: '+a);
    console.info('al doilea numar: '+b);
    if (a>=b){var suma=a; var deget=b;} else {var suma=b; var deget=a;}
    for(;deget>=1;) {deget--;suma++;console.info(suma+' e numarul, au mai ramas '+deget);}

    console.info('iar suma: '+a)
}

addnumber(10,7);
//
