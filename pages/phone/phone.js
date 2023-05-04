const root = document.querySelector("#root")
const apple = document.querySelector("#apple")
const samsung = document.querySelector("#Samsung")
const xiomi = document.querySelector("#Xiomi")
const phones = [

    {
        nam:"Apple6",
        title:"apple",
        img:"https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP705/SP705-iphone_6-mul.png",
        price:8000
    },

    {
        nam:"Apple14",
        title:"apple",
        img:"https://myphone.kg/files/media/17/17192.webp",
        price:1700000
    },
    {
        nam:"Apple12",
        title:"apple",
        img:"https://softech.kg/image/cache/c1796237e6ecd63237df70953b6c98ef.png",
        price:80000
    },
    {
        nam:"Apple7",
        title:"apple",
        img:"https://telefon.kg/image/cache/catalog/Products/Phones/Apple/IPhone%207%20Plus/black/1-500x500.jpg",
        price:30000
    },
    {
        nam:"Apple13",
        title:"apple",
        img:"https://www.myphone.kg/files/media/13/13485.jpg",
        price:150000
    },
    {
        nam:"z-world",
        title:"samsung",
        img:"https://qvc.scene7.com/is/image/QVC/e/71/e241171.001?$aempdlarge$",
        price:150000
    },
    {
        nam:"samsung-2",
        title:"samsung",
        img:"https://www.sammobile.com/wp-content/uploads/2021/12/Galaxy-A03s_1.jpg",
        price:23000
    },
    {
        nam:"22-ultra",
        title:"samsung",
        img:"https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2020/05/S22_Ultra_Banner_3000x2000-scaled.jpg?ssl=1&quality=80&w=f",
        price:80000
    },
    {
        nam:"A-23",
        title:"samsung",
        img:"https://m.media-amazon.com/images/I/91W42b8YW+L._SX679_.jpg",
        price:60000
    },
    {
        nam:"samsung-5",
        title:"samsung",
        img:"https://st1.bgr.in/wp-content/uploads/2020/03/samsung-galazy-z-flip-review-bgr-1.jpg",
        price:50000
    },
    {
        nam:"xiomi-1",
        title:"xiomi",
        img:"https://login.kg/image/cache/catalog/new/Phones/Xiaomi/Mi%2011T/xiaomi-11t-1-500x500.jpg",
        price:90900
    },
    {
        nam:"xiomi-2",
        title:"xiomi",
        img:"https://mistore.kg/wp-content/uploads/2023/01/3-500x500-2.jpg",
        price:34000
    },
    {
        nam:"xiomi-3",
        title:"xiomi",
        img:"https://cdn.dxomark.com/wp-content/uploads/medias/post-139298/Xiaomi-13-featured-image-packshot-review-Recovered.jpg",
        price:13000
    },
    {
        nam:"xiomi-4",
        title:"xiomi",
        img:"https://softech.kg/image/cache/e130fd903dd1aa5b038489451c9bc378.jpg",
        price:900000
    },
    {
        nam:"xiomi-5",
        title:"xiomi",
        img:"https://xiaomi.kg/media/products/1678783690-719015-gray-11.jpg",
        price:89000
    },
]

function nam(phones) {
    for (const item of phones) {
        root.innerHTML += `
        <li class= "list-group-item">
        <i>${item.title}</i>
        <p>название:${item.nam}</p>
        <img width = 200px src=${item.img} />
        <p>цена:${item.price}</p>
        </li>
        `
    }
}
nam(phones)

apple.onclick=()=>{
 root.innerHTML =``
 applePhones(phones)
}

function applePhones(phones) {
     const app = phones.filter(ap=>{
        return ap.title === "apple"
     })
     nam(app)
}




samsung.onclick=()=>{
    root.innerHTML =``
    samsun(phones)
}

function samsun(phones) {
     const sam = phones.filter(pho=>{
        return pho.title === "samsung"
     })
     nam(sam)
}


xiomi.onclick=()=>{
    root.innerHTML =``
    xiomi1(phones)
}
function xiomi1(phones) {
   const xiomi2 = phones.filter(xiomi3=>{
    return xiomi3.title === "xiomi"
   })
   nam(xiomi2)
}

