async function getPagos() {
    const response = await fetch('http://localhost:3000/create-checkout-session');
}


// const Plus = {
//     currency: "mxn",
//     amount: 99,
//     quantity: 1,
//     productName: "Membresia Plus",
// }

// async function getText() {
//     try {
//         const response = await fetch('http://localhost:3000/create-checkout-session', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(Plus)
//         })
//         const data = await response.json()
        
//         if(data.url) {
//             window.location.href = data.url
//         } else {
//             console.log("No url found")
//         }
//     } catch (error) {
//         console.log("Error: ", error.message || error)
//     }
// }