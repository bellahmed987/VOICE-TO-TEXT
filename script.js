
const voice = new ( window.webkitSpeechRecognition);
function record(){
    voice.start();
    voice.onresult=(event)=>{
        document.getElementById("text").textContent=event.results[0][0].transcript;
    }

}