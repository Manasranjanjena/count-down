const endDate = "12 DEC 2023 7:00 AM"
document.getElementById("end-date").innerText=endDate;
const inputs=document.querySelectorAll("input")
function clock(){
    const end = new Date(endDate);
    const now = new Date()
    // console.log(end);
    // console.log(now);
    const diff= (end - now) / 1000;

        if(diff<0)
            return;

    // console.log(diff);
      //convert into days
    //   console.log(Math.floor(diff/3600/24));
    inputs[0].value = Math.floor(diff/3600/24);
    // console.log(Math.floor(diff/3600)%24);
    inputs[1].value = Math.floor((diff/3600)%24);
    // console.log(Math.floor(diff/60)%60);
    inputs[2].value =Math.floor((diff/60)%60);
    inputs[3].value =Math.floor((diff)%60);
}
clock();
setInterval(
    ()=>{
        clock()
    },1000
)
