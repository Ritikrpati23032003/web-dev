document.getElementById("btn").onclick = (e) => {
    console.log("Event type:", e.type);
    console.log("Target element:", e.target);
};
 document.getElementById("myinput").onclick=(e)=>{
    console.log(e.target.value)
 }