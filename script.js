const synth = window.speechSynthesis;

// Texto da Notícia
const textInput = document.getElementById("noticia")

// Botões
const playButton = document.getElementById("play-button")
const pauseButton = document.getElementById("pause-button")
const stopButton = document.getElementById("stop-button")

 playButton.addEventListener('click', () => {
  play(textInput.value)
 })

 function play(text){

    // Recebe o texto que vai ser lido
    const utterance = new SpeechSynthesisUtterance(text)

    // Configurações
    utterance.rate = 1
    //utterance.pitch = 1

    speechSynthesis.speak(utterance)

 }