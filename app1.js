const data = [
    {
        id:1,
        name:"20.5.2023 00:00",
        title:"sdfghjkl"
    },
    {
        id:2,
        name:"20.5.2023 00:00",
        title:"sdfghjkl"
    },
 
]
let res = document.querySelector(".asos")
let ui = ""
data.map(itme =>{
    ui +=`
  
    <h2 class="asosh2">Asosiy</h2>
   
    <div class="messi">
        <h2 >Messi Goal.com saytida yilning eng yaxshi futbolchisi deb topildi</h2>
        <p> ${itme.name}</p>
            </div>
            <div class="linya"></div>
            <div class="messi">
            <h2 >Messi Goal.com saytida yilning eng yaxshi futbolchisi deb topildi</h2>
            <p> ${itme.name}</p>
        </div>
        <div class="linya"></div>
        <div class="messi">
        <h2 >Messi Goal.com saytida yilning eng yaxshi futbolchisi deb topildi</h2>
        <p> ${itme.name}</p>
        </div>
        <div class="linya"></div>

        <div class="messi" id="mess">
        <h2 >Messi Goal.com saytida yilning eng yaxshi futbolchisi deb topildi</h2>
        <p> ${itme.name}</p>
        </div>
       
 
    
    `
    res.innerHTML = ui
})
