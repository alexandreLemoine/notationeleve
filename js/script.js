//Création des eleves
var listeEleve = [];

listeEleve.push(new Eleve("alexandre","lemoine","31"));
listeEleve.push(new Eleve("Jean","Dupont","27"));
listeEleve.push(new Eleve("Napoléon","Bonaparte","18"));
listeEleve.push(new Eleve("Winston","Churchill","44")); 

// Injection des élèves dans la liste déroulante
var displayListeEleve = document.getElementById("listeEleve");

listeEleve.forEach(function(eleve,index){

    let option = document.createElement("option");
    option.text = eleve.identite;
    option.value = index;
    displayListeEleve.add(option);
    
});

function displayNotesEleve(){
  
    document.getElementById('nomEleve').innerHTML = listeEleve[displayListeEleve.value].nom;
    document.getElementById('prenomEleve').innerHTML = listeEleve[displayListeEleve.value].prenom;
    document.getElementById('ageEleve').innerHTML = listeEleve[displayListeEleve.value].age;
    
}