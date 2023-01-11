
const age1 = document.getElementById("age1")
const age2 = document.getElementById("age2")


function calc() {
    const endAge = age1.value - age2.value
    console.log(endAge)

    differenz.innerHTML = endAge
}