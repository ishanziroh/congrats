function valuecheck(){
    // alert("Hello there!")
    const val = document.getElementById("checkName").value.trim().toLowerCase()
    console.log("value", val)

    if (val === "nemo"){
        return alert("yo Congrats Nemo !")
    }
    else{
        return alert("Ehhh, wrong name! You can do better. ")
    }
}
