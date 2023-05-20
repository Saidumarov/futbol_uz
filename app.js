
// dark liet
let jamo = document.querySelector(".jamo")
const body = document.querySelector("body")






function ok2() {
    body.style.backgroundColor = "#16171B"
    document.querySelector("#ok2").style.zIndex = "-1"
    document.querySelector("#ok1").style.zIndex = "1"
    document.querySelector(".moy").style.backgroundColor = "#ffffff"
    document.querySelector(".jamo1").style.backgroundColor = "rgba(63, 83, 76, 1)"
    document.querySelector("#jamo1").style.backgroundColor = "rgba(63, 83, 76, 1)"
    document.querySelector("body").style.color = "white"
    document.querySelector("#ok1").style.color = "black"
    document.querySelector(".y1").style.backgroundColor = "black"
    document.querySelector("#yy1").style.backgroundColor = "red"
    document.querySelector("select").style.backgroundColor = "#16171B"
    document.querySelector("select").style.color = "white"
    document.querySelector(".maydon1").style.backgroundColor = "#222327"
    document.querySelector("#yan").style.backgroundColor = "#2F3138"
    document.querySelector("#yan1").style.backgroundColor = "#2F3138"
    document.querySelector(".h3").style.color = "white"
    document.querySelector("#h3").style.color = "white"
   const color1 =   document.querySelectorAll(".jad2") ;
   color1.forEach((element) => {
    element.style.backgroundColor = '#16171B';
  });
  
 
// achko
const divElements = document.querySelectorAll('.jj2, .j2')

divElements.forEach((element) => {
  element.style.backgroundColor = '#000000';
});

// achko

const divElement = document.querySelectorAll('#yy1 ,.y1')

divElement.forEach((element) => {
  element.style.backgroundColor = '#222327';
});

const color = document.querySelectorAll('#j1 p')

color.forEach((element) => {
  element.style.color = 'white';
});
// yangilik










}
// dark liet





function ok1() {
    body.style.backgroundColor = "white"
    document.querySelector("#ok2").style.zIndex = "1"
    document.querySelector("#ok1").style.zIndex = "-1"
    document.querySelector(".moy").style.backgroundColor = " #242529"
    document.querySelector("#ok2").style.color = "#ffffff"
    document.querySelector(".jamo1").style.backgroundColor = "#DAE9E0"
    document.querySelector("#jamo1").style.backgroundColor = "#DAE9E0"
    document.querySelector("body").style.color = "black"
    document.querySelector(".y1").style.backgroundColor = ""
    document.querySelector("#yy1").style.backgroundColor = ""
    document.querySelector(".maydon1").style.backgroundColor = ""
    document.querySelector("select").style.backgroundColor = ""
    document.querySelector("select").style.color = ""
    document.querySelector("#yan").style.backgroundColor = "#EAEAEA"
    document.querySelector("#yan1").style.backgroundColor = "#EAEAEA"
    document.querySelector("#h3").style.color = ""
    document.querySelector(".h3").style.color = ""

    const color1 =   document.querySelectorAll(".jad2") ;
    color1.forEach((element) => {
     element.style.backgroundColor = '';
   });
   

// achko
const divElements = document.querySelectorAll('.jj2, .j2')

divElements.forEach((element) => {
  element.style.backgroundColor = '';
});
// achko

// yangilik
const divElement = document.querySelectorAll('#yy1 ,.y1')

divElement.forEach((element) => {
  element.style.backgroundColor = '';
});

const color = document.querySelectorAll('#j1 p')

color.forEach((element) => {
  element.style.color = ' rgba(119, 119, 119, 1)';
});
// yangilik






}

// jamo


let data = [
    {
        id: 1,
        name: "Barcelona",
        img: "./imge/scale_1200.webp",
        achko: 3,
        name1: "Liverpool",
        img1: "./imge/l.png",
        tim: "20.5.2023  00:00",
        img2: "./imge/А.jpg",
        img3: "./imge/А.jpg",
        img4: "./imge/А.jpg",
        img5: "./imge/А.jpg",
        img6: "./imge/А.jpg"



    },
    {
        id: 2,
        name: "Barcelona",
        img: "./imge/scale_1200.webp",
        achko: 3,
        name1: "Liverpool",
        img1: "./imge/l.png",
        tim: "20.5.2023  00:00",
        img2: "./imge/А.jpg",
        img3: "./imge/А.jpg",
        img4: "./imge/А.jpg",
        img5: "./imge/А.jpg",
        img6: "./imge/А.jpg",



    },


]



let ui = "";
data.map(itme => {
    ui = `
    <div class="jamo1">
    <div class="j-itme"  id="j2"><img src="${itme.img2}" alt=""><p>Italiya. Seriya A</p></div>
    <div class="j-itme"  id="j1"><img src="${itme.img3}" alt=""><p>Premier Liga</p></div>
    <div class="j-itme"  id="j1"><img src="${itme.img4}" alt=""><p>LaLiga</p></div>
    <div class="j-itme"  id="j1"><img src="${itme.img5}" alt=""><p>Bundesliga</p></div>
    <div class="j-itme"  id="j1"><img src="${itme.img6}" alt=""><p>Ligue 1</p> </div>

</div>

    <div class="jamo2">
    <div class="j2 id=""><img src="${itme.img}" alt="" class="ii"><p><b>${itme.name}</b> 
        <span style="padding-left: 10px;"><b>${itme.achko}</b></span> <span style="padding-left: 25px;"><b>:</b></span>
    <span style="padding-left: 40px;">${itme.name1}</span></p><img src="${itme.img1}" alt="" class="ll">
    <div class="jj2">${itme.tim}</div></div>

    <div class="j2" ><img src="${itme.img}" alt="" class="ii"><p><b>${itme.name}</b> 
    <span style="padding-left: 10px;"><b>${itme.achko}</b></span> <span style="padding-left: 25px;"><b>:</b></span>
<span style="padding-left: 40px;">${itme.name1}</span></p><img src="${itme.img1}" alt="" class="ll">
<div class="jj2">${itme.tim}</div></div>

<div class="j2"><img src="${itme.img}" alt="" class="ii"><p><b>${itme.name}</b> 
<span style="padding-left: 10px;"><b>${itme.achko}</b></span> <span style="padding-left: 25px;"><b>:</b></span>
<span style="padding-left: 40px;">${itme.name1}</span></p><img src="${itme.img1}" alt="" class="ll">
<div class="jj2">${itme.tim}</div></div>


<div class="j2"><img src="${itme.img}" alt="" class="ii"><p><b>${itme.name}</b> 
<span style="padding-left: 10px;"><b>${itme.achko}</b></span> <span style="padding-left: 25px;"><b>:</b></span>
<span style="padding-left: 40px;">${itme.name1}</span></p><img src="${itme.img1}" alt="" class="ll">
<div class="jj2">${itme.tim}</div></div>

<div class="j2"><img src="${itme.img}" alt="" class="ii"><p><b>${itme.name}</b> 
<span style="padding-left: 10px;"><b>${itme.achko}</b></span> <span style="padding-left: 25px;"><b>:</b></span>
<span style="padding-left: 40px;">${itme.name1}</span></p><img src="${itme.img1}" alt="" class="ll">
<div class="jj2">${itme.tim}</div></div>

<div class="j2"><img src="${itme.img}" alt="" class="ii"><p><b>${itme.name}</b> 
<span style="padding-left: 10px;"><b>${itme.achko}</b></span> <span style="padding-left: 25px;"><b>:</b></span>
<span style="padding-left: 40px;">${itme.name1}</span></p><img src="${itme.img1}" alt="" class="ll">
<div class="jj2">${itme.tim}</div></div>

<div class="j2"><img src="${itme.img}" alt="" class="ii"><p><b>${itme.name}</b> 
<span style="padding-left: 10px;"><b>${itme.achko}</b></span> <span style="padding-left: 25px;"><b>:</b></span>
<span style="padding-left: 40px;">${itme.name1}</span></p><img src="${itme.img1}" alt="" class="ll">
<div class="jj2">${itme.tim}</div></div>

<div class="j2"><img src="${itme.img}" alt="" class="ii"><p><b>${itme.name}</b> 
<span style="padding-left: 10px;"><b>${itme.achko}</b></span> <span style="padding-left: 25px;"><b>:</b></span>
<span style="padding-left: 40px;">${itme.name1}</span></p><img src="${itme.img1}" alt="" class="ll">
<div class="jj2">${itme.tim}</div></div>

    
</div>
<div class="jamo1" id="jamo1">
<div class="j-itme"  id="j1"><img src="${itme.img2}" alt=""><p>Italiya. Seriya A</p></div>
<div class="j-itme"  id="j1"><img src="${itme.img3}" alt=""><p>Premier Liga</p></div>
<div class="j-itme"  id="j1"><img src="${itme.img4}" alt=""><p>LaLiga</p></div>
<div class="j-itme"  id="j2" ><img src="${itme.img5}" alt=""><p>Bundesliga</p></div>
<div class="j-itme"  id="j1"><img src="${itme.img6}" alt=""><p>Ligue 1</p> </div>

</div>
<div class="jamo2">
<div class="j2"><img src="${itme.img}" alt="" class="ii"><p><b>${itme.name}</b> 
    <span style="padding-left: 10px;"><b>${itme.achko}</b></span> <span style="padding-left: 25px;"><b>:</b></span>
<span style="padding-left: 40px;">${itme.name1}</span></p><img src="${itme.img1}" alt="" class="ll">
<div class="jj2">${itme.tim}</div></div>

<div class="j2"><img src="${itme.img}" alt="" class="ii"><p><b>${itme.name}</b> 
<span style="padding-left: 10px;"><b>${itme.achko}</b></span> <span style="padding-left: 25px;"><b>:</b></span>
<span style="padding-left: 40px;">${itme.name1}</span></p><img src="${itme.img1}" alt="" class="ll">
<div class="jj2">${itme.tim}</div></div>

<div class="j2"><img src="${itme.img}" alt="" class="ii"><p><b>${itme.name}</b> 
<span style="padding-left: 10px;"><b>${itme.achko}</b></span> <span style="padding-left: 25px;"><b>:</b></span>
<span style="padding-left: 40px;">${itme.name1}</span></p><img src="${itme.img1}" alt="" class="ll">
<div class="jj2">${itme.tim}</div></div>


<div class="j2"><img src="${itme.img}" alt="" class="ii"><p><b>${itme.name}</b> 
<span style="padding-left: 10px;"><b>${itme.achko}</b></span> <span style="padding-left: 25px;"><b>:</b></span>
<span style="padding-left: 40px;">${itme.name1}</span></p><img src="${itme.img1}" alt="" class="ll">
<div class="jj2">${itme.tim}</div></div>

<div class="j2"><img src="${itme.img}" alt="" class="ii"><p><b>${itme.name}</b> 
<span style="padding-left: 10px;"><b>${itme.achko}</b></span> <span style="padding-left: 25px;"><b>:</b></span>
<span style="padding-left: 40px;">${itme.name1}</span></p><img src="${itme.img1}" alt="" class="ll">
<div class="jj2">${itme.tim}</div></div>

<div class="j2"><img src="${itme.img}" alt="" class="ii"><p><b>${itme.name}</b> 
<span style="padding-left: 10px;"><b>${itme.achko}</b></span> <span style="padding-left: 25px;"><b>:</b></span>
<span style="padding-left: 40px;">${itme.name1}</span></p><img src="${itme.img1}" alt="" class="ll">
<div class="jj2">${itme.tim}</div></div>

<div class="j2"><img src="${itme.img}" alt="" class="ii"><p><b>${itme.name}</b> 
<span style="padding-left: 10px;"><b>${itme.achko}</b></span> <span style="padding-left: 25px;"><b>:</b></span>
<span style="padding-left: 40px;">${itme.name1}</span></p><img src="${itme.img1}" alt="" class="ll">
<div class="jj2">${itme.tim}</div></div>

<div class="j2"><img src="${itme.img}" alt="" class="ii"><p><b>${itme.name}</b> 
<span style="padding-left: 10px;"><b>${itme.achko}</b></span> <span style="padding-left: 25px;"><b>:</b></span>
<span style="padding-left: 40px;">${itme.name1}</span></p><img src="${itme.img1}" alt="" class="ll">
<div class="jj2">${itme.tim}</div></div>


</div>



    `
    jamo.innerHTML = ui
})
let vra = document.querySelector(".vra")

let uii = ""

let maydon = [
    {
        id: 1,
        name: "Faqatgina muvaffaqiyatli qur'a Rossiyani <br>Jahon chempionatiga olib boradi: bo'g'inlar <br> oldidagi barcha maketlar",
        tim: "2 soat oldin"
    }
]

maydon.map(itmem => {
    uii = `
    
    <div class="countenr">
    <div class="vra">
        <div class="maydon">
            <div class="bimg"><p class="bigp";>${itmem.name} </p><span class = "tim";>${itmem.tim}</span></div>
            <div class="botm">
                <div class="bim2" id="bk1"><p class="pp"> Messi Goal.com saytida yilning <br> eng yaxshi futbolchisi deb topildi</p>
                <span class="sp">3 soat oldin</span></div>
                <div class="bim1" id="bk2" > <p class="pp"> Argentina terma jamoasi Braziliya bilan durang o'ynadi</p> <span class="sp">3 soat oldin</span></div>
                <div class="bim1"  id="bk3"> <p class="pp">"MYu" Sulsherni iste'foga chiqarishga qaror qildi</p> <span class="sp">3 soat oldin</span></div>
                <div class="bim2"  id="bk4"> <p class="pp">"MYu" Sulsherni iste'foga chiqarishga qaror qildi</p> <span class="sp">3 soat oldin</span></div>
                <div class="bim1"  id="bk5"> <p class="pp">"MYu" Sulsherni iste'foga chiqarishga qaror qildi</p> <span class="sp">3 soat oldin</span></div>
                <div class="bim1"  id="bk6"> <p class="pp">"MYu" Sulsherni iste'foga chiqarishga qaror qildi</p> <span class="sp">3 soat oldin</span></div>

            </div>


        </div>
        <div class="maydon1">
        <div class="jadval">
        <h2>Jadval</h2>
    </div>
    <select>
        <option value="Italiya. A seriya">Italiya. A seriya</option>
    </select>
    <div class="jad1">
        <p class="p1">№ Команда</p>
    </div>
    <div class="jad   <p class="p2"><b>1</b> <span id="spa">Barcelona</span> <span id="spa1">15</span> <span
                id="spa2">14</span> </p> <img src="./imge/scale_1200.webp" class="iii" alt="">
    </div>
    <div class="jad1"  >
        <p class="p1"><b>1</b> <span id="spa">Barcelona</span> <span id="spa1">15</span> <span
                id="spa2">14</span></p> <img src="./imge/scale_1200.webp" class="iil" alt="">
    </div>
    <div class="jad2" ">
        <p class="p2"><b>1</b> <span id="spa">Barcelona</span> <span id="spa1">15</span> <span
                id="spa2">14</span> </p> <img src="./imge/scale_1200.webp" class="iii" alt="">
    </div>
    <div class="jad1">
        <p class="p1"><b>1</b> <span id="spa">Barcelona</span> <span id="spa1">15</span> <span
                id="spa2">14</span></p> <img src="./imge/scale_1200.webp" class="iil" alt="">
    </div>
    <div class="jad2" ">
        <p class="p2"><b>1</b> <span id="spa">Barcelona</span> <span id="spa1">15</span> <span
                id="spa2">14</span> </p> <img src="./imge/scale_1200.webp" class="iii" alt="">
    </div>
    <div class="jad1">
        <p class="p1"><b>1</b> <span id="spa">Barcelona</span> <span id="spa1">15</span> <span
                id="spa2">14</span></p> <img src="./imge/scale_1200.webp" class="iil" alt="">
    </div>
    <div class="jad2" ">
        <p class="p2"><b>1</b> <span id="spa">Barcelona</span> <span id="spa1">15</span> <span
                id="spa2">14</span> </p> <img src="./imge/scale_1200.webp" class="iii" alt="">
    </div>
    <div class="jad1">
        <p class="p1"><b>1</b> <span id="spa">Barcelona</span> <span id="spa1">15</span> <span
                id="spa2">14</span></p> <img src="./imge/scale_1200.webp" class="iil" alt="">
    </div>
    <div class="jad2" ">
        <p class="p2"><b>1</b> <span id="spa">Barcelona</span> <span id="spa1">15</span> <span
                id="spa2">14</span> </p> <img src="./imge/scale_1200.webp" class="iii" alt="">
    </div>
    <div class="jad1">
        <p class="p1"><b>1</b> <span id="spa">Barcelona</span> <span id="spa1">15</span> <span
                id="spa2">14</span></p> <img src="./imge/scale_1200.webp" class="iil" alt="">
    </div>
    <div class="jad2" ">
        <p class="p2"><b>1</b> <span id="spa">Barcelona</span> <span id="spa1">15</span> <span
                id="spa2">14</span> </p> <img src="./imge/scale_1200.webp" class="iii" alt="">
    </div>
    <div class="jad1">
        <p class="p1"><b>1</b> <span id="spa">Barcelona</span> <span id="spa1">15</span> <span
                id="spa2">14</span></p> <img src="./imge/scale_1200.webp" class="iil" alt="">
    </div>
    <div class="jad2" ">
        <p class="p2"><b>1</b> <span id="spa">Barcelona</span> <span id="spa1">15</span> <span
                id="spa2">14</span> </p> <img src="./imge/scale_1200.webp" class="iii" alt="">
    </div>
    <div class="jad1">
        <p class="p1"><b>1</b> <span id="spa">Barcelona</span> <span id="spa1">15</span> <span
                id="spa2">14</span></p> <img src="./imge/scale_1200.webp" class="iil" alt="">
    </div>
    <div class="jad2" ">
        <p class="p2"><b>1</b> <span id="spa">Barcelona</span> <span id="spa1">15</span> <span
                id="spa2">14</span> </p> <img src="./imge/scale_1200.webp" class="iii" alt="">
    </div>
    <div class="jad1">
        <p class="p1"><b>1</b> <span id="spa">Barcelona</span> <span id="spa1">15</span> <span
                id="spa2">14</span></p> <img src="./imge/scale_1200.webp" class="iil" alt="">
    </div>
        </div>

    </div>

    <!--/ maydon -->

    <!-- /jamolar -->
</div>
    `
    vra.innerHTML = uii
})

let asosiy = document.querySelector(".asosiy")

let aso = "";

let asos = [
    {
        id: 1,
        name: `Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi`,
        title: `Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi `,
        tim: "20.5.2023 00:00",
        img: "./imge/qizil.png",
        color: `style="background-color: #222327;"`

    },
    {
        id: 2,
        name: `Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi`,
        title: `Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi `,
        tim: "20.5.2023 00:00",
        img: "./imge/qizil.png",
        color: `style="background-color: #222327;"`

    },
    {
        id: 3,
        name: `Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi`,
        title: `Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi `,
        tim: "20.5.2023 00:00",
        img: "./imge/kok.png",
        color: `style="background-color: #222327;"`

    },
    {
        id: 4,
        name: `Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi`,
        title: `Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi `,
        tim: "20.5.2023 00:00",
        img: "./imge/kok.png",
        color: `style="background-color: #222327;"`

    },
    {
        id: 5,
        name: `Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi`,
        title: `Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi `,
        tim: "20.5.2023 00:00",
        img: "./imge/oq.png",
        color: `style="background-color: #222327;"`

    },
    {
        id: 6,
        name: `Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi`,
        title: `Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi `,
        tim: "20.5.2023 00:00",
        img: "./imge/oq.png",
        color: `style="background-color: #222327;"`

    },
    {
        id: 7,
        name: `Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi`,
        title: `Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi `,
        tim: "20.5.2023 00:00",
        img: "./imge/neg.png",
        color: `style="background-color: #222327;"`

    },
    {
        id: 8,
        name: `Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi`,
        title: `Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi `,
        tim: "20.5.2023 00:00",
        img: "./imge/neg.png",
        color: `style="background-color: #222327;"`

    },
    {
        id: 9,
        name: `Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi`,
        title: `Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi `,
        tim: "20.5.2023 00:00",
        img: "./imge/real.png",
        color: `style="background-color: #222327;"`

    },
    {
        id: 10,
        name: `Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi`,
        title: `Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi `,
        tim: "20.5.2023 00:00",
        img: "./imge/real.png"
    },
    {
        id: 11,
        name: `Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi`,
        title: `Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi `,
        tim: "20.5.2023 00:00",
        img: "./imge/sar.png",
        color: `style="background-color: #222327;"`

    },
    {
        id: 12,
        name: `Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi`,
        title: `Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi `,
        tim: "20.5.2023 00:00",
        img: "./imge/sar.png"
    },
    {
        id: 13,
        name: `Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi`,
        title: `Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi `,
        tim: "20.5.2023 00:00",
        img: "./imge/o.png",
        color: `style="background-color: #222327;"`

    },
    {
        id: 14,
        name: `Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi`,
        title: `Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi `,
        tim: "20.5.2023 00:00",
        img: "./imge/o.png"
    },
    {
        id: 15,
        name: `Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi`,
        title: `Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi `,
        tim: "20.5.2023 00:00",
        img: "./imge/goo.png",
        color: `style="background-color: #222327;"`

    },
    {
        id: 16,
        name: `Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi`,
        title: `Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi `,
        tim: "20.5.2023 00:00",
        img: "./imge/goo.png",
        color: `style="background-color: #222327;"`

    },
    {
        id: 17,
        name: `Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi`,
        title: `Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi `,
        tim: "20.5.2023 00:00",
        img: "./imge/yu.png",
        color: `style="background-color: #222327;"`

    },
    {
        id: 18,
        name: `Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi`,
        title: `Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi `,
        tim: "20.5.2023 00:00",
        img: "./imge/yu.png",
        color: `style="background-color: #222327;"`

    },
    {
        id: 19,
        name: `Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi`,
        title: `Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi `,
        tim: "20.5.2023 00:00",
        img: "./imge/oo.png",
        color: `style="background-color: #222327;"`

    },
    {
        id: 20,
        name: `Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi`,
        title: `Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi `,
        tim: "20.5.2023 00:00",
        img: "./imge/oo.png",
        color: `style="background-color: #222327;"`
    },


]



asos.map(asi => {
    aso += `
    
    <div class="y1" id = "yy1"><img src="${asi.img}" alt=""><h2 class="zz">${asi.name}</h2>
    <p class="z1">${asi.title}</p> <span class="ztim">${asi.tim}</span></div>

    `
    asosiy.innerHTML = aso
})





let asosiy2 = document.querySelector(".asosiy2")

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
    },
    {
        id: 9,
        name: `Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi`,
        title: `Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi `,
        tim: "20.5.2023 00:00",
        img: "./imge/real.png"
    },
    {
        id: 10,
        name: `Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi`,
        title: `Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi `,
        tim: "20.5.2023 00:00",
        img: "./imge/real.png"
    },
    {
        id: 11,
        name: `Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi`,
        title: `Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi `,
        tim: "20.5.2023 00:00",
        img: "./imge/sar.png"
    },
    {
        id: 12,
        name: `Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi`,
        title: `Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi `,
        tim: "20.5.2023 00:00",
        img: "./imge/sar.png"
    },


]

asos2.map(asi2 => {
    aso2 += `
    
    <div class="y1"><img src="${asi2.img}" alt=""><h2 class="zz">${asi2.name}</h2>
    <p class="z1">${asi2.title}</p> <span class="ztim">${asi2.tim}</span></div>

    `
    asosiy2.innerHTML = aso2
})
