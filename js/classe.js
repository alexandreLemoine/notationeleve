/* CLASSE ELEVE 
*
*   définit un eleve et génère une liste de matiere
*   @nom : string
*   @prenom : string
*   @age : int
*   @matieres : []Matiere
*
**/

class Eleve{

    nom;
    prenom;
    age;
    matieres;

    //Constructeur
    constructor(nom,prenom,age){

        this.nom = nom;
        this.prenom = prenom;
        this.age = age;    
        this.matieres = [];    

        this.generateMatiere();
    }

    /* Génère autant de matière que celles contenues dans
        dans la variable static situé dans Matiere
    */
    generateMatiere(){
                
        for(let i = 0;i < Matiere.labelMatieres.length;i++){
            
            //Création d'un objet Matiere 
            let matiere = new Matiere(Matiere.labelMatieres[i]);
            this.matieres.push(matiere);
            
        }
    }

    get identite(){
        return this.nom+' '+this.prenom;
    }
}

/* CLASSE MATIERE 
*
*   définit une matière et génère une liste de note aléatoire
*    @nom : string
*   @notes : float[]
*
**/
class Matiere{

    static labelMatieres = ['Français','Maths','Histoire'];

    nom;
    notes;

    constructor(nom){
        this.nom = nom;
        this.notes = [];
        this.generateNotes();
    }

    // genere de manière aléatoire entre 0 et 19 quatre notes
    generateNotes(){
        for(let i = 0;i < 4; i++){
            this.notes.push(Math.random().toPrecision(2) * 20);
        }
    }
}
