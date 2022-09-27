const chatWidget = document.querySelector(".chat-widget")
console.log(chatWidget)
chatWidget.addEventListener("click",()=>{
    chatWidget.classList.add("chat-widget_active")
})
const messages = document.querySelector( '.chat-widget__messages' );
// console.log(new Date().get())
function spendMsgClient(content,time)  {
    messages.innerHTML += `
  <div class="message message_client">
    <div class="message__time">${time}</div>
    <div class="message__text">
      ${content}
    </div>
  </div>
`;

}
listReply_ = ["ПРИВЕТ","ЧТО НАДО","ТЫ кто ТАКОЙ","АХХААА","МНЕ ВСЕ РАВНО","ИДИ покури"]
function responseBot(listReply,time){
  let anyNumder = (Math.random()*listReply_.length).toFixed(0)
  messages.innerHTML +=`
  <div class="message">
  <div class="message__time">${time}</div>
  <div class="message__text">
    ${listReply[anyNumder]}
  </div>
</div>
  `
  
}

function onKey(e) {
    if (e.key == "Enter"){
       
        const msg = document.getElementById("chat-widget__input").value
        // console.log(msg.trim().length)
        if (msg.trim().length >=1){
            console.log(msg)
            const hour = new Date().getHours()
            const minut = new Date().getMinutes()
            
            spendMsgClient (msg,`${hour}:${minut}`)
            document.getElementById("chat-widget__input").value = ""
            responseBot(listReply_,`${hour}:${minut}`)

        }
        else{
            console.log("ПУСТО")
        }
    } 
}

chatWidget.addEventListener('keydown',onKey)
// chatWidget.addEventListener('keyup',(e)=>{
//   document.getElementById("chat-widget__input").value = ""
// })



