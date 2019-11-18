//=======================================================================
// PAYMENT FETCH
// ======================================================================

window.onload = ()=>{
    console.log("working");
   let order_id = window.localStorage.getItem("order_id")
    fetch(`http://localhost:7000/payment/${window.localStorage.getItem("order_id")}`).then(res => res.json()).then(results=>{
        let {bouquet} = results
        bouquet = JSON.parse(bouquet);
        buildTable(bouquet)
    })
}
function buildTable(obj){
    let orderTable = document.getElementById("order-table");
    for (const key in obj) {
        let tr = document.createElement("tr");
        if (key === "vase") {
            
            let p = document.getElementById("vaseType");
            p.innerText = `Your Blooms will come nested in  a ${obj[key]} vase.`
            orderTable.appendChild(p);
            p.classList = ("vaseOrder");
            
        }else{
            let td1 = document.createElement("td");
            td1.innerText = key;
            let td2 = document.createElement("td");
            td2.innerText = obj[key].color;
            let td3 = document.createElement("td");
            td3.innerText = obj[key].number;
            
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            
        }
        orderTable.appendChild(tr);
    }
}
       function term(e){
       let cardDetail = document.getElementById("cardHidden");
        cardDetail.classList.remove("hidden");
    }
// collecting input fields to send from payments page to database
function submitPayment(e){
    e.preventDefault();   
    let inputs = document.getElementsByClassName("form-control")
    let payload = {
        order_id: window.localStorage.getItem("order_id")
    }
    // payment method
    for (let i = 0; i < inputs.length; i++) {
        let input = inputs[i]
		if (input.type === "radio") {
           
			if (input.checked) {
                payload["payment"] = input.id
			}
		} else {
            if(input.value){
            payload[input.id] = input.value
            }else {
                let message = document.getElementById("message2");
                message.innerText = "please fill in all fields"
            } 
		}
    }
    
    
    fetch('http://localhost:7000/payment/add', {
        method: "POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(payload)
    }).then(res=>res.json()).then(data=>{
     
        if(data.message){
            document.getElementById("message").innerText = data.message
            window.localStorage.removeItem("order_id")
        }
    })
}
