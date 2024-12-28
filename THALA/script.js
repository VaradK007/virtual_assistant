let btn=document.querySelector("#btn") 
let content=document.querySelector("#content")

function speak(text) {
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="eng-GB"
    window.speechSynthesis.speak(text_speak)

}   

function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    if(hours> 0 && hours<12){
        speak("Good Morning Sir")
    }else if(hours>=12 &&  hours <18){
        speak("Good Afternoon Sir")
    }else{
        speak("Good Evening Sir")
    }
}
window.addEventListener('load',()=>{
    wishMe()
})



let speechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new speechRecognition()
recognition.onresult=(event) => {
    let currentIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    // content.innerText=transcript
    takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click",()=>{
    recognition.start()
})

function takeCommand(message){
    if(message.includes("hello")||message.includes("hey")||message.includes("hii")){
        speak("hello sir, how can i help you?")
    }
    else if(message.includes("who are you")||message.includes("tell me about yourself")){
        speak("I'm Thala, the Virtual Assistant by Varad K.")
    }
    else if (message.includes("time")){
        let time=new date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
        speak(time)
    }
    else{
        let finalText="this is what i found on internet regarding" + message.replace("thala","") || message.replace("tala","")
        speak(finalText)
        window.open(`https://www.google.com/search?q=${message.replace("thala","")}`,"_blank")
    }

}
       
    