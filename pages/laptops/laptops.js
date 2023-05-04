
const root = document.querySelector("#root")
const btnApple = document.querySelector("#btnApple")
const  btnLenovo = document.querySelector("#btnLenovo")
const btnAcer = document.querySelector("#btnAcer")
const btnHp = document.querySelector("#btnHp")
const btnDell = document.querySelector("#btnDell")
const  laptops = [

    {    title:"Apple",
        img:`https://login.kg/image/cache/catalog/new/Notebook/Apple/MacBook%20Air%202020%20M1/1-500x500.jpeg`,
        nam:"macbook",
        price:150000
        
    },
    {   title:"Apple",
        img:`https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_14-16-inch_10182021_big.jpg.slideshow-xlarge_2x.jpg`,
        nam:"macbook",
        price:20000
        
    },
    {   title:"Apple",
        img:`https://cdn.thewirecutter.com/wp-content/media/2022/08/macbook-2048px-9765.jpg`,
        nam:"macbook",
        price:450000
        
    },
    {      title:"Apple",
        img:`https://m.media-amazon.com/images/I/61bX2AoGj2L._SL1500_.jpg`,
        nam:"macbook",
        price:70000
        
    },
    {   title:"Apple",
        img:`https://www.digitaltrends.com/wp-content/uploads/2022/08/macbook-air-m2-1.jpg?resize=625%2C417&p=1`,
        nam:"macbook",
        price:90000
        
    },
    {    title:"Apple",
        img:`https://login.kg/image/cache/catalog/new/Notebook/Apple/MacBook%20Pro%2014%202021/1-500x500.jpg`,
        nam:"macbook",
        price:140000
        
    },
    {    title:"Apple",
        img:`https://www.zdnet.com/a/img/2020/11/16/37e33024-2892-4bb7-9d21-6ac6f7544def/apple-macbook-pro-m1-2020-5.jpg`,
        nam:"macbook",
        price:24000
        
    },
    {    title:"Apple",
        img:`https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1664472289661`,
        nam:"macbook",
        price:54000
        
    },
    {   title:"ACER",
        img:`https://softech.kg/image/cache/8a7c19189ebe9e7677b52c471760dae5.jpg`,
        nam:"macbook",
        price:54000
        
    },
    {   title:"lenovo",
        img:`https://systema.kg/337504-medium_default/lenovo-ip-v15-g2-itl-intel-core-i3-1115g4-17-41ghz-4gb-1tb-156-fhd-82kb000eru.jpg`,
        nam:"lenovo-1",
        price:534000
        
    },
    {   title:"lenovo",
        img:`https://enter.kg/images/stories/virtuemart/product/2_1867.jpg`,
        nam:"lenovo-2",
        price:154000
        
    },
    {   title:"lenovo",
        img:`https://softech.kg/image/cache/fb8eaded1d540c55e39897b6337c9a35.jpg`,
        nam:"lenovo-3",
        price:300000,
        
    },
    {   title:"lenovo",
        img:`https://static.lenovo.com/ww/img/new-homepage/default/lenovo-pcs-tablets-hover.jpg`,
        nam:"lenovo-4",
        price:134500,
        
    },
   
    {   title:"acer",
        img:`https://images.acer.com/is/image/acer/ENDURO-Urban-N3-EUN314-51W-Bl1-01a-1?$Product-Cards-XL$`,
        nam:"acer-1",
        price:120030,
        
    },
    {   title:"acer",
        img:`https://www.kivano.kg/images/product/97825/163170221042013_full.jpg`,
        nam:"acer-2",
        price:90000,
        
    },
    {   title:"acer",
        img:`https://www.kivano.kg/images/product/115603/full/1672252637_05115700.jpg`,
        nam:"acer-3",
        price:120023,
        
    },
    {   title:"acer",
        img:`https://softech.kg/image/cache/5faccf3e82df879a5b57d95e4275f01d.jpg`,
        nam:"acer-4",
        price:98779,
        
    },
    {   title:"hp",
        img:`https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c07971951.png`,
        nam:"hp-1",
        price:910779,
        
    },
    {   title:"hp",
        img:`https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c07958952.png`,
        nam:"hp-2",
        price:9898779,
        
    },
    {   title:"hp",
        img:`https://www.hp.com/ca-en/shop/Html/Merch/Images/c08000160_1750x1285.jpg`,
        nam:"hp-3",
        price:10779,
        
    },
    {   title:"hp",
        img:`https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c06745496.png`,
        nam:"hp-4",
        price:987079,
        
    },
    {   title:"dell",
        img:`https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/page/category/dv7620nt-categorypage-lf-800x620.png?fmt=png-alpha&wid=800&hei=620`,
        nam:"dell-1",
        price:10000,
        
    },
    {   title:"dell",
        img:`https://m.media-amazon.com/images/I/61+kRBoZjlL._SY450_.jpg`,
        nam:"dell-2",
        price:90000,
        
    },
    {   title:"dell",
        img:`https://www.digitaltrends.com/wp-content/uploads/2022/08/dell-inspiron-plus-01.jpg?p=1`,
        nam:"dell-3",
        price:70000,
        
    },
    {   title:"dell",
        img:`https://i.dell.com/sites/csimages/Video_Imagery/all/product-thumb-1280x720.jpg`,
        nam:"dell-4",
        price:20000,
        
    },
    {   title:"dell",
        img:`https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/13-5330/media-gallery/notebook-latitude-13-5330-gray-gallery-3.psd?fmt=pjpg&pscan=auto&scl=1&wid=3997&hei=2783&qlt=100,1&resMode=sharp2&size=3997,2783&chrss=full&imwidth=5000`,
        nam:"dell-5",
        price:70000,
        
    },
   
]

function nam(nout) {
    for (const not of nout) {
         root.innerHTML+=`
         <li class="list-group-item">
    <h2>название:${not.nam}</h2>
    <br>
    <p>${not.title}</p>
    </h2><img width=200px src=${not.img} />
    <h2>цена:${not.price}
    
    </li>
    `
    }
   
}
nam(laptops)

btnApple.onclick=()=>{
  root.innerHTML = ``
  appleLap(laptops)
}

function  appleLap(laptops) {
     const lap = laptops.filter(la=>{
        return la.title === 'Apple'
     })
     console.log(lap);
     nam(lap)
}

btnLenovo.onclick=()=>{
    root.innerHTML=``
    lenovoLap(laptops)

}


function lenovoLap(laptops) {
    const leLap = laptops.filter(lap=>{
        return lap.title === "lenovo"
    })
    nam(leLap)
}

btnAcer.onclick=()=>{
    root.innerHTML =``
    acer(laptops)
}

function acer(laptops) {
    const ace = laptops.filter(ac=>{
        return ac.title === "acer"
    })
    nam(ace)
}


btnHp.onclick=()=>{
    root.innerHTML =``
    hpLap(laptops)
}
function hpLap(laptops) {
    const hp = laptops.filter(hp=>{
        return hp.title === "hp"
    })
    nam(hp)
}

btnDell.onclick=()=>{
    root.innerHTML=``
    dell(laptops)
}

function dell(laptops) {
    const del = laptops.filter(ledd=>{
        return ledd.title === "dell"
    })
    nam(del)
}