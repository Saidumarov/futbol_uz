const data = [
    {
        id:1,
        name:"20.5.2023 00:00",
        title:"Messi Goal.com saytida yilning eng yaxshi futbolchisi deb topildi"

    },
    {
        id:2,
        name:"20.5.2023 00:00",
        title:"Messi Goal.com saytida yilning eng yaxshi futbolchisi deb topildi"
    },
 
]
let res = document.querySelector(".asos")
let ui = ""
data.map(itme =>{
    ui +=`
  
    <h2 class="asosh2">Asosiy</h2>
   
    <div class="messi">
        <h2  class="rang">${itme.title}</h2>
        <p class="rang"> ${itme.name}</p>
            </div>
            <div class="linya"></div>
            <div class="messi">
            <h2  class="rang">${itme.title}</h2>
            <p class="rang"> ${itme.name}</p>
        </div>
        <div class="linya"></div>
        <div class="messi">
        <h2  class="rang">${itme.title}</h2>
        <p class="rang"> ${itme.name}</p>
        </div>
        <div class="linya"></div>

        <div class="messi" id="mess">
       <h2 class="rang" >${itme.title}</h2>
        <p class="rang"> ${itme.name}</p>
        </div>
       
 
    
    `
    res.innerHTML = ui
})


let menyu = [
    {
        id: "1",
        name: "Main",
        text: "Mach center",
        text1: "Football",
        text2: "Cybersport",
        title: "© 2023 Footboll. All rights reserved"
    }
]

let asosiy2 = document.querySelector(".asosiy12")

let aso2 = "";

let asos2 = [
    {
        id: 1,
        name: `Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi`,
        title: `Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi `,
        tim: "20.5.2023 00:00",
        img: "./imge/qizil.png"
    },
    {
        id: 2,
        name: `Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi`,
        title: `Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi `,
        tim: "20.5.2023 00:00",
        img: "./imge/qizil.png"
    },
    {
        id: 3,
        name: `Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi`,
        title: `Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi `,
        tim: "20.5.2023 00:00",
        img: "./imge/kok.png"
    },
    {
        id: 4,
        name: `Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi`,
        title: `Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi `,
        tim: "20.5.2023 00:00",
        img: "./imge/kok.png"
    },
    {
        id: 5,
        name: `Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi`,
        title: `Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi `,
        tim: "20.5.2023 00:00",
        img: "./imge/oq.png"
    },
    {
        id: 6,
        name: `Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi`,
        title: `Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi `,
        tim: "20.5.2023 00:00",
        img: "./imge/oq.png"
    },
    {
        id: 7,
        name: `Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi`,
        title: `Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi `,
        tim: "20.5.2023 00:00",
        img: "./imge/neg.png"
    },
    {
        id: 8,
        name: `Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi`,
        title: `Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi `,
        tim: "20.5.2023 00:00",
        img: "./imge/neg.png"
    }


]

asos2.map(asi2 => {
    aso2 += `
    
    <div class="y1"><img src="${asi2.img}" alt=""><h2 class="zz">${asi2.name}</h2>
    <p class="z1">${asi2.title}</p> <span class="ztim">${asi2.tim}</span></div>

    `
    asosiy2.innerHTML = aso2
})




let minyu = document.querySelector(".menyu")
let result = ""
menyu.map(men => {
    result = `
    <div class="countenr">
    <div class="men1">
        <div class="men">
            <div class="m1"> <img src="./imge/photo_2023-05-18_17-15-44-removebg-preview.png" alt="">
            </div>
            <div class="m1">
                <p>${men.name}</p>
                <p>${men.text}</p>
                <p>${men.text1}</p>
                <p>${men.text2}</p>
            </div>
            <div class="m1">
                <p>${men.name}</p>
                <p>${men.text}</p>
                <p>${men.text1}</p>
                <p>${men.text2}</p>
            </div>
            <div class="m1">
                <p>${men.name}</p>
                <p>${men.text}</p>
                <p>${men.text1}</p>
                <p>${men.text2}</p>
            </div>

            <div class="m2">
                <div class="menimg">
                    <div class="mimg1"> <img src="./imge/vk-removebg-preview.png" alt="" width="100%"
                            height="100%"></div>
                    <div class="mimg2"><img src="./imge/y3-removebg-preview1.png" alt="" width="100%"
                            height="100%"></div>
                    <div class="mimg3"> <img src="./imge/tt.png" alt="" width="100%" height="100%"></div>
                    

                </div>

                <div class="menimg1">
                    <div class="mimg4"> <img src="./imge/tell-removebg-preview.png" alt="" width="60px"
                            height="100%"></div>
                    <div class="mimg5"> <img src="./imge/fass.png" alt="" width="60px" height="60px"></div>
                    <div class="mimg6"> <img src="./imge/inst-removebg-preview.png" alt="" width="100%"
                            height="100%"></div>
                    <div class="mimg7"> <img src="./imge/sss.webp" alt="" width="100%" height="100%"></div>



                </div>

            </div>
            <div class="linya"></div>


        </div>
    </div>
    <div class="linya1">
        <div class="p5">
            <p>${men.title}</p>
        </div>
    </div>

</div>

    `
    minyu.innerHTML = result
})




// dark liet
let jamo = document.querySelector(".jamo")
const body = document.querySelector("body")

function ok2() {
    body.style.backgroundColor = "#16171B"
    body.style.color = "white"
    document.querySelector(".bas1").style.backgroundColor = "#222327" 
    document.querySelector(".bas2").style.backgroundColor = "#222327" 
    document.querySelector("#ok1").style.color = "black"
    document.querySelector(".texp").style.color = "white"
    document.querySelector(".mbat").style.color = "white"
    document.querySelector("#ok2").style.zIndex = "-1"
    document.querySelector("#ok1").style.zIndex = "1"
    document.querySelector(".moy").style.backgroundColor = "#ffffff"
   


    const divElement = document.querySelectorAll('#yy1 ,.y1')

    divElement.forEach((element) => {
        element.style.backgroundColor = '#222327';
    });
    const divh2 =  document.querySelectorall("#color1,.color1")
    divh2.forEach((div) => {
     div.style.Volor = "white"
 });

    // yangilik
}

function ok1() {
    body.style.backgroundColor = "white"
    body.style.color = ""
    document.querySelector(".bas1").style.backgroundColor = "" 
    document.querySelector(".bas2").style.backgroundColor = "" 
    document.querySelector(".texp").style.color = ""
    document.querySelector(".mbat").style.color = ""
    document.querySelector("#ok2").style.zIndex = "1"
    document.querySelector("#ok1").style.zIndex = "-1"
    document.querySelector(".moy").style.backgroundColor = " #242529"
    
    // yangilik
    const divElement = document.querySelectorAll('#yy1 ,.y1')

    divElement.forEach((element) => {
        element.style.backgroundColor = '';
    });

    const divh2 =  document.querySelectorall("#color1,.color1")
    divh2.forEach((div) => {
     div.style.Color = "white"
 });
 
}

// dark liet
