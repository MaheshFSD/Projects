// console.log("hello")
// const ele=document.querySelector(".days")
// console.log(ele)

// h.textContent='hello'
let newDate=new Date('1 jan 2022')
const countDays=()=>{
    const presentDate=new Date()
    const remainingTime=newDate-presentDate 
    // console.log(remainingTime/1000)
    const count=Math.floor(remainingTime/1000)
    const days=Math.floor((count/(60*60*24)))
    const dd=document.getElementById('ds')
    dd.innerText=days
    // day.textContent=days
    const hrs=Math.floor((count%(60*60*24))/(60*60))
    let hr= document.getElementById('hs')
    hr.innerText=hrs
    const min=Math.floor((count%(60*60))/60)
    let mn= document.getElementById('ms')
    mn.innerText=min
    const seco=Math.floor((count%60))
    let sec= document.getElementById('ss')
    sec.innerText=seco
    // console.log(dd.innerText,hr,mn,sec)
    // console.log(days,hrs,min,seco)

}
// countDays()
setInterval(countDays, 1000);
// clearInterval(s)