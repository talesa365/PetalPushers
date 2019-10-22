document.readyState = (() => {
    fetch(`http://localhost:7000/order/${window.localStorage.getItem("order_id")}`).then(res => res.json()).then(data => {
        let total = 0;
        let totalFlowers = data.calla_lilly
        console.log(totalFlowers);
        // console.log(total + totalFlowers);
        
        
    })
    console.log("Loaded!")
})()