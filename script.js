const menu = document.querySelector("#menu");
const nav = document.querySelector(".links");

menu.onclick = () => {
    menu.classList.toggle('active');
    nav.classList.toggle('active');
}
 
function sendMail(){
    let parms = {
        name:document.getElementById ("name").value,
        email:document.getElementById ("email").value,
        message:document.getElementById ("message").value,
    }

    emailjs.send("service_rqh7bds","template_gcasrss",parms).then(alert("Email Sent!!"))
}