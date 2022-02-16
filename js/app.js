const buttonPlay = document.getElementById('buttonPlay')
const controlsOption = document.getElementById('mode')


// salviamo il click nella variabile startgame
const startGame = () => {
    console.log('inizia il gioco');

    // impostare la modalità di gioco
    // leggere value select con modalità selezionata da utente
    const mode = parseInt(controlsOption.value);
    let rows;
    let columns;

    // determinare numero righe e colonne
    switch (mode) {
        case 1:
            rows = 10;
            columns = 10;
            break;

        case 2:
            rows = 9;
            columns = 9;
            break;

        case 3:
            rows = 7;
            columns = 7;
            break;

        default:
            rows = 10;
            columns = 10;
            break;
    }

    // determinare numero totale di celle da generare
    const cellNumber = rows * columns;
    console.log(cellNumber);
    // genero la griglia


    // faccio un ciclo da 1 a tot celle = righe * colonne
    // genero una cella
    // aggiungo il contenuto
    // aggiungo la classe cell
    // appendere cella dentro griglia
}

buttonPlay.addEventListener('click', startGame)