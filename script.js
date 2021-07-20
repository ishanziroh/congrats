function valuecheck(){
    // alert("Hello there!")
    const val = document.getElementById("checkName").value.toLowerCase()
    console.log("value", val)

    if (val === "nemo"){
        return alert("Wohoo Congrats Nemo!")
    }
    else{
        return alert("Ehhh, wrong name! You can do better. ")
    }
}
