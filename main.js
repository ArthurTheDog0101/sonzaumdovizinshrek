function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        
        console.log('Não ta funfano meu brother');
    }

}


const listaDeTeclas = document.querySelectorAll('.tecla')

