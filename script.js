let body = document.querySelector('body');
let questions = [
    {
        id : 1,
        question : "C’est dangereux de faire un bisous sur la bouche, le VIH se transmet par la salive !", 
        answer : 1, 
        answers : [
            "Oui, il faut se protéger", 
            "Non, il n’y a aucun risque"
        ],
        def : "Il n’y a aucun risque de transmission par le biais de la salive."
    },
    {
        id : 2,
        question : "C’est risqué d’avoir un rapport sexuelles avec une personne qui a le VIH ?", 
        answer : 1,
        answers : [
            "Oui, il faut éviter à tout prix", 
            "Non, il existe des solutions"
        ],
        def : "C’est sans danger si sa charge virale est rendue indétectable par son traitement. Il est toujours possible d’utiliser des préservatifs !"
    },
    {
        id : 3,
        question : "Il n’y a aucun risque de transimission du VIH avec un rapport anal", 
        answer : 1,
        answers : [
            "Vrai", 
            "Faux"
        ],
        def : "La transmission lors d’un rapport anal est 10 fois plus élevé que lors d’un rapport vaginal."
    },
    {   
        id : 4,
        question : "Le VIH se transmet aussi par le sang.", 
        answer : 1,
        answers : [
            "C’est impossible, sauf si les groupes sanguins  sont les mêmes", 
            "C’est possible en cas de coupure ou de réutilisation de seringues."
        ],
        def : ""
    },
    {
        id : 5,
        question : "VIH, SIDA, c’est la même chose, non?", 
        answer : 1,
        answers : [
            "Oui, d’ailleurs, on peut aussi dire LIGMA.", 
            "Non, le VIH est un virus qui, en l’absence de traitement, peut être responsable du SIDA."
        ],
        def : ""
    },
    {
        id : 6,
        question : "VIH ça veut dire quoi ?", 
        answer : 0,
        answers : [
            "Virus de l’Immunodéficience Humaine", 
            "Vend Iguane Hypersensible"
        ],
        def : "Le VIH est le virus de l’immunodéficience humaine. C’est une IST, c’est-à-dire une infection qui peut se transmettre lors de relations sexuelles comme par exemple, l’herpès génital, la chlamydia et la syphilis."
    },
    {
        id : 7,
        question : "SIDA, ça veut dire quoi?", 
        answer : 0,
        answers : [
            "Syndrome d'ImmunoDéficience Acquise", 
            "Son Iguane Dort Actuellement"
        ],
        def : ""
    },
    {
        id : 8,
        question : "Etre séropositif ça veut dire quoi ?", 
        answer : 1,
        answers : [
            "Être défini(e) sur N*", 
            "Être infecté(e) par le VIH"
        ],
        def : "Une personne est séropositive lorsqu’elle a été infectée par le VIH, c’est-à-dire que le VIH est entré dans son organisme et a commencé à se multiplier."
    },
    {
        id : 9,
        question : "Après un risque d’exposition, je peux faire un test de dépistage par prise de sang immédiatement ?", 
        answer : 1,
        answers : [
            "Oui et le plus tôt est le mieux !", 
            "Non, il faut attendre au moins six semaines"
        ],
        def : "Les anticorps n’apparaissent pas directement dans le sang lorsque l’on est infecté·e par le VIH. En effet, il faut un certain laps de temps et c’est pour cela qu’il faut attendre plusieurs semaines (6 pour la prise de sang ou 12 pour un test rapide VIH/autotest en fonction du type de dépistage) pour faire le test après une prise de risque."
    },
    {
        id : 10,
        question : "Si j’ai contracté le VIH, je ne deviens infectieux(se) que 6 semaines après, quand les anticorps sont apparus ?", 
        answer : 0,
        answers : [
            "Non, je suis infectieux tout de suite", 
            "Oui, je deviens même infectieux 12 semaines plus tard si je choisis l’autotest"
        ],
        def : "Dans l’attente de ce délai pour réaliser votre test, il est recommandé d’utiliser un préservatif lors de tout rapport sexuel, car en cas d’infection par le VIH, la personne peut déjà contaminer son.sa partenaire dans les jours suivant l’infection."
    },
    {
        id : 11,
        question : "Après une “prise de risque” j’ai une semaine pour prendre le Traitement Post-Exposition (TPE) ?", 
        answer : 0,
        answers : [
            "Non, je n’ai que 48h", 
            "Non, ça dépend de mon groupe sanguin"
        ],
        def : ""
    },
    {
        id : 12,
        question : "Après 2 ans de traitement je ne suis plus séropositif ?", 
        answer : 1,
        answers : [
            "Vrai, mais il faut que je respecte à la lettre le traitement", 
            "Faux, je dois continuer le traitement à vie"
        ],
        def : "Une fois qu’une personne est séropositive, elle le reste à vie, même sous traitement."
    },
    {
        id : 13,
        question : "En quoi consiste le Traitement Post-Exposition (TPE) ?", 
        answer : 0,
        answers : [
            "Il s’agit d’un traitement qui doit être pris durant 4 semaines avec un suivi médical et des prises de sang réparties sur une période de 3 mois.", 
            "Une cure de mélatonine et d’huiles essentielles de Jasmin et d’Argousier, après ça vous pétez le feu !!!"
        ],
        def : "Le TPE doit être pris au plus vite après le risque. Après 72 heures,  il ne sera plus efficace."
    },
    {
        id : 14,
        question : "Comment s’appelle le traitement préventif qui protège du VIH?", 
        answer : 1,
        answers : [
            "Le TPE.", 
            "La PrEP"
        ],
        def : "La Prep est une stratégie innovante de prévention du VIH. C’est l’acronyme de l’anglais pre-exposure prophylaxis (prophylaxie pré-exposition). Prophylaxie = éviter une infection. Pré-exposition = le traitement doit démarrer avant (et se poursuivre après) un éventuel contact avec le VIH."
    },
    {
        id : 15,
        question : "Que faire si on se rend compte qu’on a eu un comportement à risque ?", 
        answer : 1,
        answers : [
            "C’est trop tard, il faut amputer.", 
            "Aller aux urgences pour se procurer un traitement."
        ],
        def : ""
    },
    {
        id : 16,
        question : "Ok, mais je m’en suis rendu(e) compte le lendemain…", 
        answer : 1,
        answers : [
            "C’est trop tard, il faut amputer", 
            "T’inquiètes j’ai 48h (même si c’est mieux d’y aller avant)"
        ],
        def : ""
    },
    {
        id : 17,
        question : "C’est quoi la trithérapie ?", 
        answer : 1,
        answers : [
            "C’est un dinosaure à trois cornes (la femelle du tricératops)", 
            "Un traitement contre le VIH qui associe trois molécules. "
        ],
        def : "Traitement Post-Exposition (TPE) ou Prophylaxie Post-Exposition (PPE - PEP en anglais). Il peut être prescrit dans les cas d'AES soit lors d'un accident d'exposition sexuelle ou d'exposition sanguine. Il doit être commencé le plus tôt possible, de préférence moins de 4 heures et au plus tard dans les 48 heures, après un risque de transmission du VIH. Ce traitement dure 28 jours. Il est très efficace dès lors qu'il est pris correctement pendant toute sa durée."
    },
    {
        id : 18,
        question : "Plus lourd que l'humour de Jean Marie Bigard", 
        answer : 1,
        answers : [
            "citron", 
            "6 troncs"
        ],
        def : "et encore on est pas sûr"
    },
    {
        id : 19,
        question : "Meilleur goût de Pim's", 
        answer : 0,
        answers : [
            "citron", 
            "6 troncs"
        ],
        def : "haha tu l'avais celle là"
    },
    {
        id : 20,
        question : "Elément de base d'un meuble Ikea", 
        answer : 1,
        answers : [
            "citron", 
            "6 troncs"
        ],
        def : "I I I I I I K E A (très technique)"
    },
    {
        id : 21,
        question : "Peut nourrir une famille de castor", 
        answer : 0,
        answers : [
            "citrons", 
            "6 troncs"
        ],
        def : "Bah non ! Les castors ne mangent pas d'arbre !"
    },
    {
        id : 22,
        question : "Joue mieux au foot que Neymar", 
        answer : 0,
        answers : [
            "citron", 
            "6 troncs"
        ],
        def : "On voulait mettre un parpaing mais on a pas trouvé de photo"
    },
    {
        id : 23,
        question : "Est un multiple de 3", 
        answer : 1,
        answers : [
            "citron", 
            "6 troncs"
        ],
        def : "2 * 3 = 6 bien joué"
    },
    {
        id : 24,
        question : "Peut faire un goût de sirop", 
        answer : 1,
        answers : [
            "citron", 
            "6 troncs"
        ],
        def : "Bah on parlait du sirop d'érable"
    },
    {
        id : 25,
        question : "Quel est le nom de notre équipe ?", 
        answer : 1,
        answers : [
            "6 troncs", 
            "Les Citrons"
        ],
        def : "Et pas les 6 troncs !"
    },
    {
        id : 26,
        question : "Veux-tu recommencer ?", 
        answer : 1,
        answers : [
            "Non", 
            "Oui"
        ],
        def : ""
    },
];

let newQuestions = questions;
let rightAnswer = 0;
let wrongAnswer = 0;
let questionsLength = questions.length;
let largeur = window.innerWidth;
let hauteur = window.innerHeight;
let click = false;
let game = true;


function refreshQuestion(){
    if(questions.length == 0){
        reSize();
        game = false;
        return body.getElementsByClassName('incard')[0].innerHTML = 'Fin du jeu';
    };
    question = questions[0];
    questions.splice(0, 1);
    setTimeout(function(){
        body.getElementsByClassName('incard')[0].innerHTML = question.question;
        body.getElementsByClassName('case')[0].querySelector('p').innerHTML = question.answers[0];
        body.getElementsByClassName('case')[1].querySelector('p').innerHTML = question.answers[1];
    }, 1500);
    reSize();
};

function firstQuestion(){
    question = questions[0];
    questions.splice(0, 1);
    body.getElementsByClassName('incard')[0].innerHTML = question.question;
    body.getElementsByClassName('case')[0].querySelector('p').innerHTML = question.answers[0];
    body.getElementsByClassName('case')[1].querySelector('p').innerHTML = question.answers[1];
    reSize();
};

function score(){
    body.getElementsByClassName('question')[0].innerHTML = 'Question : ' + question.id + ' / ' + questionsLength;
    body.getElementsByClassName('score')[0].innerHTML = 'Score : ✓ ' + rightAnswer + ' / ⛌ ' + wrongAnswer;
}

function restart(){
    location.reload();
}

function answerTrue() {
    if(question.answer == 1 && questions.length == 0) return restart();
    else if (question.answer == 1) {
        rightAnswer++;
        body.getElementsByClassName('case')[1].style.boxShadow = 'rgba(0, 255, 26, 0.25) 0px 30px 60px -12px inset, rgba(9, 255, 0, 0.3) 0px 18px 36px -18px inset';
    }
    else {
        wrongAnswer++;
        body.getElementsByClassName('case')[1].style.boxShadow = 'rgba(255, 0, 0, 0.25) 0px 30px 60px -12px inset, rgba(255, 0, 0, 0.3) 0px 18px 36px -18px inset';
    }
    body.getElementsByClassName('card')[0].style.transition = '2s';
    body.getElementsByClassName('reponse')[0].querySelector('p').innerHTML = question.def;
    setTimeout(function(){
        body.getElementsByClassName('case')[1].removeAttribute('style');
    }, 2000);
    refreshQuestion();
    score();
};

function answerFalse() {
    if (question.answer == 0) {
        rightAnswer++;
        body.getElementsByClassName('case')[0].style.boxShadow = 'rgba(0, 255, 26, 0.25) 0px 30px 60px -12px inset, rgba(9, 255, 0, 0.3) 0px 18px 36px -18px inset';
    }
    else {
        wrongAnswer++;
        body.getElementsByClassName('case')[0].style.boxShadow = 'rgba(255, 0, 0, 0.25) 0px 30px 60px -12px inset, rgba(255, 0, 0, 0.3) 0px 18px 36px -18px inset';
    }
    body.getElementsByClassName('reponse')[0].querySelector('p').innerHTML = question.def;
    body.getElementsByClassName('card')[0].style.transition = '2s';
    setTimeout(function(){
        body.getElementsByClassName('case')[0].removeAttribute('style');
    }, 2000);
    refreshQuestion();
    score();
};

function getPos(e){
    var x = e.clientX;
    var y = e.clientY;
    return {x, y};
}

function elementPosition (a) {
    var b = a.getBoundingClientRect();
    return {
      clientX: a.offsetLeft+b.width/2,
      clientY: a.offsetTop,
      viewportX: (b.x || b.left),
      viewportY: (b.y || b.top)
    }
}

body.getElementsByClassName('card')[0].onmousedown = function(){
    click = true;
    body.onmousemove = function(e){
        body.getElementsByClassName('card')[0].style.transition = '0s';
        var pos = getPos(e);
        if(game == true && click == true){
            body.getElementsByClassName('card')[0].style.left = pos.x - body.getElementsByClassName('card')[0].offsetWidth/2 + 'px';
            body.getElementsByClassName('card')[0].style.top = pos.y - body.getElementsByClassName('card')[0].offsetHeight/2+ 'px';
            body.getElementsByClassName('case')[1].style.transition = '0.5s';
            body.getElementsByClassName('case')[0].style.transition = '0.5s';
            if(pos.x > largeur - 250) {
                body.getElementsByClassName('card')[0].style.transition = '0.5s';
                body.getElementsByClassName('case')[1].style.backgroundColor = 'rgba(100,100,100 ,0.1)';
                body.getElementsByClassName('card')[0].style.transform = 'rotate('+15+'deg)';
            }
            else if(pos.x < 250) {
                body.getElementsByClassName('card')[0].style.transition = '0.5s';
                body.getElementsByClassName('case')[0].style.backgroundColor = 'rgba(100,100,100, 0.1)';
                body.getElementsByClassName('card')[0].style.transform = 'rotate('+-15+'deg)';
            }
            else if(body.getElementsByClassName('card')[0].style.transform == 'rotate('+15+'deg)' || body.getElementsByClassName('card')[0].style.transform == 'rotate('+-15+'deg)'){
                body.getElementsByClassName('card')[0].style.transition = '0.5s';
                body.getElementsByClassName('card')[0].style.transform = 'rotate('+0+'deg)';
            }
            else {
                body.getElementsByClassName('case')[0].style.backgroundColor = null;
                body.getElementsByClassName('case')[1].style.backgroundColor = null;
            }
        }
    }
}

body.getElementsByClassName('card')[0].onmouseup = function(){
    body.getElementsByClassName('card')[0].style.transform = null;
    click = false;
    body.getElementsByClassName('card')[0].style.transition = '2s';
    let pos = elementPosition(body.getElementsByClassName('card')[0]);
    console.log(pos.clientX);
    if(pos.clientX > largeur - 250) {
        click = false;
        return answerTrue();
    }
    else if(pos.clientX < 250) {
        click = false;
        return answerFalse();
    }
    reSize();
}

function reSize(){
    largeur = window.innerWidth;
    hauteur = window.innerHeight;
    body.getElementsByClassName('card')[0].style.left = (largeur - body.getElementsByClassName('card')[0].offsetWidth)/ 2 + 'px';
    body.getElementsByClassName('card')[0].style.top = (hauteur - body.getElementsByClassName('card')[0].offsetHeight)/2+ 'px';
}

onresize = function(){
    reSize();
}

firstQuestion();
score();