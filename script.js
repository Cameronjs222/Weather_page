function change(){
    let C = document.getElementsByClassName("Celcius");
    let F = document.getElementsByClassName("Fahrenheit");
    let val = document.querySelector(`#temp`).value
    if (val === "Fahrenheit") {
        for (let i = 0; i < C.length; i++) {
            C[i].style.display = "none";
        }
        for (let i = 0; i < F.length; i++) {
            F[i].style.display = "block"
        }
    }
    else if (val === "Celcius") {
        for (let i = 0; i < F.length; i++) {
            F[i].style.display = "none"
        }
        for (let i = 0; i < C.length; i++) {
            C[i].style.display = "block";
        }
    }
    console.log(val)
}