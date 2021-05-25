
function calcImc() {
    const poid = document.getElementById("poid").value;
    const taille = document.getElementById("taille").value;
    const imc = poid / (taille * taille);
    document.getElementById("result").innerText = "Votre IMC = " + imc.toFixed(2);
    const plage = document.getElementById("plage");
    if (imc < 16.5) plage.innerText = "dénutrition ou anorexie";
    else if (imc < 18.5) plage.innerText = "maigreur";
    else if (imc < 25) plage.innerText = "poids normal";
    else if (imc < 30) plage.innerText = "surpoids";
    else if (imc < 35) plage.innerText = "obésité modérée";
    else if (imc < 40) plage.innerText = "obésité sévère";
    else plage.innerText = "obésité morbide ou massive";

}
