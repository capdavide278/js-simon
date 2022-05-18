/* Ciao ragazzi,
Esercizio di oggi: Simon Says
nome repo: js-simon
Descrizione:
Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi.
Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.*/


let array_Casuale = [];
let numRandom;
let numeri = document.getElementById("numeri");
let numeroGiocatore;



//inserire numeri random in pagina
for (let i = 0; i < 5; i++) {

    numRandom = (Math.floor(Math.random() * 10)  +1);
    array_Casuale.push(numRandom);

};
console.log(array_Casuale);

numeri.innerHTML = array_Casuale;

//timer per memorizzare i numeri
const Elemento_tempo = document.getElementById("tempo_memorizzazione");
let secondi = 5;

const counting = setInterval(
    function () {
        let score = 0;
        Elemento_tempo.innerHTML = secondi;
        if (secondi === 0) {

            //cosi i numeri generati random scompaiono 
            numeri.style.display = 'none';
            clearInterval(counting);

            //i 5 secondi per memorizzare scompaiono
            tempo_memorizzazione.style.display = 'none';

            const divAttesa = document.getElementById("tempo_attesa");
            
            //imposto il tempo prima di riscirvere i numeri
            let tempo = 3;
            const counting2 = setInterval(
            function () {
                divAttesa.innerHTML = tempo;
                if (tempo === 0) {

                    //faccio scomparire i numeri e i 30 secondi
                    numeri.style.display = 'none';
                    tempo_attesa.style.display = 'none';
                    clearInterval(counting2);

                    for (let i = 0; i < 5; i++) {

                        //chiedo i numeri inseriti
                        numeroGiocatore = parseInt(prompt("inserisci uno dei numeri visti precedentemente"));
                        
                        let presenza = array_Casuale.includes(numeroGiocatore);
                        console.log(presenza);
                        if (presenza == true) {
                            console.log("Bravo " + numeroGiocatore + " è presente nei numeri visti.");
                            score ++;
                        } else {
                            console.log("hai sbagliato " + numeroGiocatore + " non presente nei numeri visti.");
                        }
                    }
                    console.log("il tuo punteggio è: "+score);
                } else {
                    tempo--;
                }
    }
    , 1000);
        } else {
            secondi--;
        }

    }
    , 1000);
