const legoCreation = {
    id: 1,
    creator: "Per Sun",
    color: "Black",
    shape: "Animal",
    creation: "Black Cow"
}
// Some starter code
document.querySelector(".btn").addEventListener("click", event => {
    const creator = document.querySelector("#lego__creator").value
    const color = document.querySelector("#lego-color").value

    // Once you have collected all the values, build your data structure
    const legoToSave = {
        
        creator: creator,
        color: color
    }
    
    fetch("http://localhost:8088/lego",{ 
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(legoToSave)
})

})
