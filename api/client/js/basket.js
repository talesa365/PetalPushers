window.onload = ()=>{
    console.log("working");
    
    let order_id = window.localStorage.getItem("order_id")
    fetch(`http://localhost:7000/payment/${window.localStorage.getItem("order_id")}`).then(res => res.json()).then(results=>{
        let {bouquet} = results
        bouquet = JSON.parse(bouquet)
        buildTable(bouquet)
    })
}

function buildTable(obj){
    let orderTable = document.getElementById("order-table")
    for (const key in obj) {
        let tr = document.createElement("tr")
        if (key === "vase") {
            let p = document.createElement("p")
            p.innerText = `You selected a ${obj[key]} vase.`
            orderTable.appendChild(p)
        }else{
            let td1 = document.createElement("td")
            td1.innerText = key
            let td2 = document.createElement("td")
            td2.innerText = obj[key].color
            let td3 = document.createElement("td")
            td3.innerText = obj[key].number
            tr.appendChild(td1)
            tr.appendChild(td2)
            tr.appendChild(td3)
        }
        orderTable.appendChild(tr)
    }
}

function submitPayment(e){
    e.preventDefault();
    let inputs = document.getElementsByClassName("form-control")
    let payload = {
        order_id: window.localStorage.getItem("order_id")
    }
    for (let i = 0; i < inputs.length; i++) {
        console.log(inputs[i])
        payload[inputs[i].id] = inputs[i].value
    }
    fetch('http://localhost:7000/payment/add', {
        method: "POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(payload)
    }).then(res=>res.json()).then(data=>{
        console.log(data)
        if(data.message){
            document.getElementById("message").innerText = data.message
            window.localStorage.removeItem("order_id")
        }
    })
}
// document.readyState = (() => {
//     fetch(`http://localhost:7000/order/${window.localStorage.getItem("order_id")}`).then(res => res.json()).then(data => {
//         let total = 0;
//         let totalFlowers = data.calla_lilly
//         console.log(totalFlowers);
//         // console.log(total + totalFlowers);
        
        
//     })
//     console.log("Loaded!")
// })()