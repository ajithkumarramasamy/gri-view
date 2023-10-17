let mainEl = document.getElementById("total-container");
let searchEl = document.getElementById("inputSearch");
let gridViewBtn = document.getElementById('grid-active-btn');
let detailsViewBtn = document.getElementById('details-active-btn');
let con = document.getElementById("card-container1");

fetch('https://mocki.io/v1/0934df88-6bf7-41fd-9e59-4fb7b8758093').then((data) => {
    return data.json();
}).then((completedata) =>{
    let data1 = "";
    completedata.data.map((values) => {
        data1 += `<div class = "card-container" id = "card-container1">
        <img src = ${values.product_image} alt = "cap" class = "image">
        <div class = "card-new">
           <p>${values.product_badge}</p>
        </div>
        <div class = "card-info">
            <h4 class = "info-heading">${values.product_title}</h4>
            <p class = "info-para">${values.product_variants[0].v1}</p>
            <p class = "info-para">${values.product_variants[1].v2}</p>
            <p class = "info-para">${values.product_variants[2].v3}</p>
        </div>
     </div>`
    });
    mainEl.innerHTML = data1;
}).catch((err) => {
    console.log(err)
});

searchEl.addEventListener("input", search);

function fetchSearchedData() {
    let inputEl = searchEl.value
    if (inputEl === "") {
        fetch('https://mocki.io/v1/0934df88-6bf7-41fd-9e59-4fb7b8758093').then((data) => {
    return data.json();
}).then((completedata) =>{
    let data1 = "";
    completedata.data.map((values) => {
        data1 += `<div class = "card-container" id = "card-container1">
        <img src = ${values.product_image} alt = "cap" class = "image">
        <div class = "card-new">
           <p>${values.product_badge}</p>
        </div>
        <div class = "card-info">
            <h4 class = "info-heading">${values.product_title}</h4>
            <p class = "info-para">${values.product_variants[0].v1}</p>
            <p class = "info-para">${values.product_variants[1].v2}</p>
            <p class = "info-para">${values.product_variants[2].v3}</p>
        </div>
     </div>`
    });
    mainEl.innerHTML = data1;
}).catch((err) => {
    console.log(err)
});
    }
    else{
    fetch('https://mocki.io/v1/0934df88-6bf7-41fd-9e59-4fb7b8758093').then((data) => {
    return data.json();
}).then((completedata) =>{
    let data1 = "";
    completedata.data.map((values) => {
        let class1 = ""
        if (values.product_variants[0].v1.toLowerCase().includes(inputEl.toLowerCase())) {
            class1 = "searched"
        }
        let class2 = ""
        if (values.product_variants[1].v2.toLowerCase().includes(inputEl.toLowerCase())) {
            class2 = "searched"
        }
        let class3 = ""
        if (values.product_variants[2].v3.toLowerCase().includes(inputEl.toLowerCase())) {
            class3 = "searched"
        }
        data1 += `<div class = "card-container" id = "card-container1">
        <img src = ${values.product_image} alt = "cap" class = "image">
        <div class = "card-new">
           <p>${values.product_badge}</p>
        </div>
        <div class = "card-info">
            <h4 class = "info-heading">${values.product_title}</h4>
            <p class = "info-para ${class1}">${values.product_variants[0].v1}</p>
            <p class = "info-para ${class2}">${values.product_variants[1].v2}</p>
            <p class = "info-para ${class3}">${values.product_variants[2].v3}</p>
        </div>
     </div>`
    });
    mainEl.innerHTML = data1;
}).catch((err) => {
    console.log(err)
});
}
}

function search() {
    fetchSearchedData();
}

gridViewBtn.addEventListener("click", () => {
    mainEl.classList.add('grid-total-container');
    mainEl.classList.remove('list-total-container');
    fetch('https://mocki.io/v1/0934df88-6bf7-41fd-9e59-4fb7b8758093').then((data) => {
    return data.json();
}).then((completedata) =>{
    let data1 = "";
    completedata.data.map((values) => {
        data1 += `<div class = "grid-card-container">
        <img src = ${values.product_image} alt = "cap" class = "grid-image">
        <div class = "card-new">
           <p>${values.product_badge}</p>
        </div>
        <div class = "card-info">
            <h4 class = "info-heading">${values.product_title}</h4>
            <p class = "info-para">${values.product_variants[0].v1}</p>
            <p class = "info-para">${values.product_variants[1].v2}</p>
            <p class = "info-para">${values.product_variants[2].v3}</p>
        </div>
     </div>`
    });
    mainEl.innerHTML = data1;
}).catch((err) => {
    console.log(err)
});

});

detailsViewBtn.addEventListener("click", () => {
    mainEl.classList.add('list-total-container');
    mainEl.classList.remove('grid-total-container');
    fetch('https://mocki.io/v1/0934df88-6bf7-41fd-9e59-4fb7b8758093').then((data) => {
    return data.json();
}).then((completedata) =>{
    let data1 = "";
    completedata.data.map((values) => {
        data1 += `<div class = "card-container">
        <img src = ${values.product_image} alt = "cap" class = "image">
        <div class = "card-new">
           <p>${values.product_badge}</p>
        </div>
        <div class = "card-info">
            <h4 class = "info-heading">${values.product_title}</h4>
            <p class = "info-para">${values.product_variants[0].v1}</p>
            <p class = "info-para">${values.product_variants[1].v2}</p>
            <p class = "info-para">${values.product_variants[2].v3}</p>
        </div>
     </div>`
    });
    mainEl.innerHTML = data1;
}).catch((err) => {
    console.log(err)
});
});

