const root = document.querySelector("#root")
const hol = document.querySelector("#hol")
const mcr = document.querySelector("#mcr")
const ctm = document.querySelector("#ctm")
const pl = document.querySelector("#pl")
const bth = [
 
    {
        title:"hol",
        nam:"avest",
        img:`https://object.pscloud.io/cms/cms/Photo/img_0_25_457_0_6.png`,
        price:40000
    },
    {
        title:"hol",
        nam:"avest",
        img:`https://kuppersberg.ru/upload/resize_cache/webpfiles/iblock/a87/0q8ec638ok1r6vo5imjrdci6hnt1c67c/1000_1200/211214_LIN_7250.webp`,
        price:67000
    },
    {
        title:"hol",
        nam:"avest",
        img:`https://whirlpool-store.com.ua/7747-tm_large_default/kholodilnik-whirlpool-w7-811i-w.jpg`,
        price:90000
    },
    {
        title:"hol",
        nam:"avest",
        img:`https://whirlpool-store.com.ua/7811-tm_large_default/kholodilnik-whirlpool-w7-911o-ox.jpg`,
        price:140000
    },
    {
        title:"hol",
        nam:"avest",
        img:`https://object.pscloud.io/cms/cms/Photo/img_0_25_504_2.jpg`,
        price:70000
    },
    {
        title:"mcr",
        nam:"rally",
        img:`https://img5.lalafo.com/i/posters/original/2e/d6/e3/ec6cf2cc30df780b465e17a4ed.jpeg`,
        price:13000
    },
    {
        title:"mcr",
        nam:"rally",
        img:`https://ichef.bbci.co.uk/news/640/cpsprodpb/C0D8/production/_113586394_micro1.jpg`,
        price:33000
    },
    {
        title:"mcr",
        nam:"rally",
        img:`https://images.samsung.com/is/image/samsung/ru-microwave-oven-convection-mc28h5013ak-mc28h5013ak-bw-001-front-black?$650_519_PNG$`,
        price:53000
    },
    {
        title:"mcr",
        nam:"rally",
        img:`https://www.tabilga.kg/wp-content/uploads/2021/02/%D0%9C%D0%B8%D0%BA%D1%80%D0%BE%D0%B2%D0%BE%D0%BB%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0-Rally-700-%D0%92%D1%82-1.jpg`,
        price:16000
    },
    {
        title:"mcr",
        nam:"rally",
        img:`https://www.tabilga.kg/wp-content/uploads/2023/02/%D0%9C%D0%B8%D0%BA%D1%80%D0%BE%D0%B2%D0%BE%D0%BB%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0-Hyundai-%D0%BC%D0%BE%D1%89%D0%BD%D0%BE%D1%81%D1%82%D1%8C%D1%8E-700-%D0%92%D1%82-1-1.jpg`,
        price:24000
    },

    {
        title:"str",
        nam:"lg",
        img:`https://www.tabilga.kg/wp-content/uploads/2021/02/%D0%A1%D1%82%D0%B8%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F-%D0%BC%D0%B0%D1%88%D0%B8%D0%BD%D0%B0-Beko-6.5-%D0%BA%D0%B3-2.jpg`,
        price:50000
    },
    {
        title:"str",
        nam:"lg",
        img:`https://object.pscloud.io/cms/cms/Photo/img_0_8_409_0.jpg`,
        price:60909
    },
    {
        title:"str",
        nam:"lg",
        img:`https://www.tabilga.kg/wp-content/uploads/2022/09/%D0%A1%D1%82%D0%B8%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F-%D0%BC%D0%B0%D1%88%D0%B8%D0%BD%D0%B0-Vestel-7-%D0%BA%D0%B3-1.jpg`,
        price:91080
    },
    {
        title:"str",
        nam:"lg",
        img:`https://object.pscloud.io/cms/cms/Photo/img_0_8_633_0.jpg`,
        price:70000
    },
    {
        title:"str",
        nam:"lg",
        img:`https://kupi.kg/cache/files/24080.jpg_w800_h800_resize.jpg`,
        price:30000
    },
    {   title:"pl",
    nam:"Neo",
    img:"https://kupi.kg/cache/files/904.jpg_w800_h800_resize.jpg",
    price:15000
},
{    
    title:"pl",
    nam:"Neo",
    img:"https://object.pscloud.io/cms/cms/Photo/img_0_24_498_0_1.jpg",
    price:522000
},
{    
    title:"pl",
    nam:"Neo",
    img:"https://object.pscloud.io/cms/cms/Photo/img_0_24_325_4_6.png",
    price:1566000
},
{
    title:"pl",
    nam:"Neo",
    img:"https://imperia.kg/image/cache/catalog/dombytsad/promyshlennye-pylesosy/karcher-vc-3-plus/img_0_24_363_0-1000x1000.jpg",
    price:1509900
},
{
    title:"pl",
    nam:"Neo",
    img:"https://www.tabilga.kg/wp-content/uploads/2021/07/%D0%9F%D1%8B%D0%BB%D0%B5%D1%81%D0%BE%D1%81-Midea-%D0%BC%D0%BE%D1%89%D0%BD%D0%BE%D1%81%D1%82%D1%8C%D1%8E-2200-%D0%92%D1%82-1.jpg",
    price:890000
},
{
    title:"pl",
    nam:"Neo",
    img:"https://max.kg/nal/img/6783/b_tov_p11410833_136232_pilesos_artel_vcc_0120_stakan.jpg",
    price:70000
},
{
    title:"pl",
    nam:"Neo",
    img:"https://daewoo-power.ru/upload/iblock/5a0/DAVC_2514_S_1_icon.jpg",
    price:190000
},
{
    title:"pl",
    nam:"Neo",
    img:`https://object.pscloud.io/cms/cms/Photo/img_0_24_899_10_6.png`,
    price:40000
},
]

function nam(ms) {
    for (const item of ms) {
        root.innerHTML += `
        <li class=list-group-item>
        <p>название:${item.nam}</p>
        <p>${item.title}</p>
        <img width=200px src=${item.img} alt="">
        <p>цена:${item.price}</p>
        </li>
        `
    }
}
nam(bth)
hol.onclick=()=>{
    root.innerHTML =``
    hol1(bth)
}
function hol1(bth){
    const hol2= bth.filter(hol3=>{
        return hol3.title ==="hol"
    })
    nam(hol2)
}

mcr.onclick=()=>{
    root.innerHTML =``
    mcr1(bth)
}
function mcr1(bth){
    const mcr2 = bth.filter(mcr3=>{
        return mcr3.title === "mcr"
    })
    nam(mcr2)
}
ctm.onclick = ()=>{
    root.innerHTML =``
    ctm1(bth)
}
function ctm1(bth){
    const ctm2 = bth.filter(ctm3=>{
        return ctm3.title ==="str"
    })
    nam(ctm2)
}

pl.onclick=()=>{
    root.innerHTML=``
    pl1(bth)
}
function  pl1(bth) {
    const pl2 = bth.filter(pl3=>{
        return pl3.title === "pl"
    })
    nam(pl2)
}