
// code for opt generate

const btn = document.querySelector(".otp");
const inputopt = document.querySelector(".input");
const otpcheck = document.querySelector("#otp-check");
const checkotp = document.querySelector("#check-otp");
const p = document.querySelector("#value")
let toastbody = document.querySelector(".toast-body")

var main = document.querySelector("main")
var box = document.querySelector("#try")

main.addEventListener("mouseover",(dets)=>{
  gsap.to(box,{
    x:dets.x,
    y:dets.y,
    backgroundColor:"black",
    scale:0.5
  })
})


// btn disabled by default

btn.disabled = true



// if the num input is blank the otp btn is disabled
// and if input is not blank is accessable 

inputopt.addEventListener("click",()=>{
  if (inputopt.value === "" ) {
    btn.disabled = false
  } 
})


btn.addEventListener("click", () => {
  function otp(length) {
     num = "";
    for (let i = 0; i < length; i++) {
      num += Math.floor(Math.random() * 10);
    }
    toastbody.innerHTML = "Your OTP Is "+ num;
    
  }
  otp(4);

  // code for check otp 


  otpcheck.addEventListener("click",(e)=>{
    e.preventDefault()
    if (checkotp.value == num) {
        p.innerText="Confirm OTP"
    } else {
        p.innerText="Wrong OTP"
    }
    
})
  
});

 

// code for alert msg of otp generate

var toastTrigger = document.getElementById('liveToastBtn')
var toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}




