// let Input = document.getElementsByTagName('input');
// let formulaire = document.getElementsByTagName('form')[0];
// console.log(formulaire)
// document.getElementById('submit-button').addEventListener('click', ($event) => {
//     //default behavior : refresh la page
// } )

//6 troncs

for (let i = 1; i <= 6; i++) {
    document.querySelectorAll('input[type=checkbox]')[i].addEventListener('change', ($event) => {
        if ($event.target.checked)
        somme += i;
    else
        somme -= i;
    if(somme == 21)
    {
        alert("citron");
    }
})}

//apparition du form
// let truc = document.querySelectorAll("#a2, #a3, #a4, #a5, #a6, #a7, #a8, #a9, #a10, #a11, #a12");
// console.log(truc);
// for(let i = 2; i <= 12; i++){
//     console.log(truc[i]);
//     truc[i].style.display = "none";
// }