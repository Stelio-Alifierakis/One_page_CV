/*
	Les variables globales
*/
var valeursCanvas=new Array();
var tabQual=new Array();
var tabMot=new Array();

var canvHTMLAccept=false;
var canvCSSAccept=false;
var canvJSAccept=false;
var canvCAccept=false;
var canvCSharpAccept=false;
var canvPythonAccept=false;
var canvJavaAccept=false;
var canvUMLAccept=false;
var canvCPTAccept=false;
var canvVMAccept=false;

var qual1Accept=false;
var qual2Accept=false;
var qual3Accept=false;
var qual4Accept=false;
var qual5Accept=false;

//Fonction d'initialisation

function init(){
	
	//On met les qualités dans un tableau
	tabQual=["Perseverance", "Respect", "Sincerite", "Creativite", "Logique"];
	tabMot=["", "", "", "", ""];
	//On initialise un autre tableau qu'on remplit de lettre 'A'
	for(var i=0 ; i<5 ; i++){
		for(var j=0 ; j<tabQual[i].length ; j++){
			tabMot[i]=tabMot[i]+ "A";
		}
		document.getElementById("qual" + (i+1)).textContent=tabMot[i]
	}
	
	//On initialise un autre tableau avec les valeurs pour les barres de progression
	for(var i=0 ; i<10 ; i++){
		valeursCanvas[i]= new Array();
		
		switch(i){
			case 0:
				valeursCanvas[i][0]=95;
				break;
			case 1:
				valeursCanvas[i][0]=90;
				break;
			case 2:
				valeursCanvas[i][0]=70;
				break;
			case 3:
				valeursCanvas[i][0]=80;
				break;
			case 4:
				valeursCanvas[i][0]=85;
				break;
			case 5:
				valeursCanvas[i][0]=45;
				break;
			case 6:
				valeursCanvas[i][0]=86;
				break;
			case 7:
				valeursCanvas[i][0]=75;
				break;
			case 8:
				valeursCanvas[i][0]=81;
				break;
			case 9:
				valeursCanvas[i][0]=84;
				break;
		}
		
		valeursCanvas[i][1]=0;
		valeursCanvas[i][2]=0;
		
		valeursCanvas[i][3]=0;
		valeursCanvas[i][4]=0;
		valeursCanvas[i][5]=90;
		
		valeursCanvas[i][6]=0;
	}
}

//fonction qui va défiler automatiquement
function scrolling(x){
	$('html,body').animate({scrollTop: $(x).offset().top},2000);
}

//Fonction qui détecte si des éléments sont dans l'écran
$(function(){
	$(window).scroll(function(){
		
		var x1=$(window).scrollTop();
		var x2=x1+$(window).height();
		
		var canvHTML=$("#canvHTML").offset().top;
		var canvCSS=$("#canvCSS").offset().top;
		var canvJS=$("#canvJS").offset().top;
		var canvC=$("#canvC").offset().top;
		var canvCSharp=$("#canvCSharp").offset().top;
		var canvPython=$("#canvPython").offset().top;
		var canvJava=$("#canvJava").offset().top;
		var canvUML=$("#canvUML").offset().top;
		var canvCPT=$("#canvCPT").offset().top;
		var canvVM=$("#canvVM").offset().top;
		
		var motQual1=$("#qual1").offset().top;
		var motQual2=$("#qual2").offset().top;
		var motQual3=$("#qual3").offset().top;
		var motQual4=$("#qual4").offset().top;
		var motQual5=$("#qual5").offset().top;
		
		if(canvHTML>x1 && canvHTML<x2){
			canvHTMLAccept=true;
		}
		
		if(canvCSS>x1 && canvCSS<x2){
			canvCSSAccept=true;
		}
		
		if(canvJS>x1 && canvJS<x2){
			canvJSAccept=true;
		}
		
		if(canvC>x1 && canvC<x2){
			canvCAccept=true;
		}
		
		if(canvCSharp>x1 && canvCSharp<x2){
			canvCSharpAccept=true;
		}
		
		if(canvPython>x1 && canvPython<x2){
			canvPythonAccept=true;
		}
		
		if(canvJava>x1 && canvJava<x2){
			canvJavaAccept=true;
		}
		
		if(canvUML>x1 && canvUML<x2){
			canvUMLAccept=true;
		}
		
		if(canvCPT>x1 && canvCPT<x2){
			canvCPTAccept=true;
		}
		
		if(canvVM>x1 && canvVM<x2){
			canvVMAccept=true;
		}
		
		
		if(motQual1>x1 && motQual1<x2){
			if(tabMot[0]!=tabQual[0]){
				qual1Accept=true;
			}
			
		}
		
		if(motQual2>x1 && motQual2<x2){
			if(tabMot[1]!=tabQual[1]){
				qual2Accept=true;
			}
			
		}
		
		if(motQual3>x1 && motQual3<x2){
			if(tabMot[2]!=tabQual[2]){
				qual3Accept=true;
			}
			
		}
		
		if(motQual4>x1 && motQual4<x2){
			if(tabMot[3]!=tabQual[3]){
				qual4Accept=true;
			}
			
		}
		
		if(motQual5>x1 && motQual5<x2){
			if(tabMot[4]!=tabQual[4]){
				qual5Accept=true;
			}
			
		}
	});
});

//Fonction horloge
function animeDessin(){
		timer=setInterval(horloge,1000/30);
}

//fonction appelée par l'horloge. Appelle les fonction d'animations
function horloge(){
	dessine();
	tourDeMot();
}

//Fonction qui va appeler le dessin des barres de progression selon l'élément visible
function dessine(){
	if(canvHTMLAccept){
		var canv1=document.getElementById("canvHTML");
		valeursCanvas[0]=barreRempl(canv1,valeursCanvas[0][1],valeursCanvas[0][2],valeursCanvas[0][0],valeursCanvas[0][3],valeursCanvas[0][4],valeursCanvas[0][5],valeursCanvas[0][6]);
		
	}
	
	if(canvCSSAccept){
		var canv2=document.getElementById("canvCSS");
		valeursCanvas[1]=barreRempl(canv2,valeursCanvas[1][1],valeursCanvas[1][2],valeursCanvas[1][0],valeursCanvas[1][3],valeursCanvas[1][4],valeursCanvas[1][5],valeursCanvas[1][6]);
	}
	
	if(canvJSAccept){
		var canv3=document.getElementById("canvJS");
		valeursCanvas[2]=barreRempl(canv3,valeursCanvas[2][1],valeursCanvas[2][2],valeursCanvas[2][0],valeursCanvas[2][3],valeursCanvas[2][4],valeursCanvas[2][5],valeursCanvas[2][6]);
	}
	
	if(canvCAccept){
		var canv4=document.getElementById("canvC");
		valeursCanvas[3]=barreRempl(canv4,valeursCanvas[3][1],valeursCanvas[3][2],valeursCanvas[3][0],valeursCanvas[3][3],valeursCanvas[3][4],valeursCanvas[3][5],valeursCanvas[3][6]);
	}
	
	if(canvCSharpAccept){
		var canv5=document.getElementById("canvCSharp");
		valeursCanvas[4]=barreRempl(canv5,valeursCanvas[4][1],valeursCanvas[4][2],valeursCanvas[4][0],valeursCanvas[4][3],valeursCanvas[4][4],valeursCanvas[4][5],valeursCanvas[4][6]);
	}
	
	if(canvPythonAccept){
		var canv6=document.getElementById("canvPython");
		valeursCanvas[5]=barreRempl(canv6,valeursCanvas[5][1],valeursCanvas[5][2],valeursCanvas[5][0],valeursCanvas[5][3],valeursCanvas[5][4],valeursCanvas[5][5],valeursCanvas[5][6]);
	}
	
	if(canvJavaAccept){
		var canv7=document.getElementById("canvJava");
		valeursCanvas[6]=barreRempl(canv7,valeursCanvas[6][1],valeursCanvas[6][2],valeursCanvas[6][0],valeursCanvas[6][3],valeursCanvas[6][4],valeursCanvas[6][5],valeursCanvas[6][6]);
	}
	
	if(canvUMLAccept){
		var canv8=document.getElementById("canvUML");
		valeursCanvas[7]=barreRempl(canv8,valeursCanvas[7][1],valeursCanvas[7][2],valeursCanvas[7][0],valeursCanvas[7][3],valeursCanvas[7][4],valeursCanvas[7][5],valeursCanvas[7][6]);
	}
	
	if(canvCPTAccept){
		var canv9=document.getElementById("canvCPT");
		valeursCanvas[8]=barreRempl(canv9,valeursCanvas[8][1],valeursCanvas[8][2],valeursCanvas[8][0],valeursCanvas[8][3],valeursCanvas[8][4],valeursCanvas[8][5],valeursCanvas[8][6]);
	}
	
	if(canvVMAccept){
		var canv10=document.getElementById("canvVM");
		valeursCanvas[9]=barreRempl(canv10,valeursCanvas[9][1],valeursCanvas[9][2],valeursCanvas[9][0],valeursCanvas[9][3],valeursCanvas[9][4],valeursCanvas[9][5],valeursCanvas[9][6]);
	}
}

//Fonction qui va dessiner les barres de progression
function barreRempl(canvEnCours,valMin,valAccu,valMax, rouge, vert, bleu,tourDeJeu){
	
	var aDessine=canvEnCours.getContext("2d");
	var tabTemp=new Array();
	
	var couleur="";
	var etape=1;
	
	//on initialise les étapes de la barre de progression
	if(tourDeJeu>=25 && tourDeJeu<50){
		etape=2;
	}
	else if(tourDeJeu>=50 && tourDeJeu<75){
		etape=3;
	}
	else if(tourDeJeu>=75 && tourDeJeu<125){
		etape=4;
	}
	else if(tourDeJeu>=125 && tourDeJeu<=145){
		etape=5;
	}
	else if(tourDeJeu<145){
	etape=6;	
	}
	
	//on ajoute ou retire les valeurs de couleur
	switch(etape){
		case 1:
			if(bleu>=0){
				bleu-=2;
			}
			break;
		case 2:
			if(bleu>=0){
				bleu-=2;
			}
			if(vert<=90){
				vert+=2
			}
			
			break;
		case 3:
			if(vert<=90){
				vert+=2
			}
			break;
		case 4:
			if(vert>=0){
				vert-=2
			}
			if(rouge<=90){
				rouge+=2
			}
			break;
		case 5:
			if(rouge<=90){
				rouge+=2
			}
			break;
		case 6:
			
			break;
	}
	
	//progression des barres
	if((tourDeJeu<=valMax+50)){
		valAccu=valMin+1;
		if(rouge<10){
			couleur="#0"+rouge;
		}
		else{
			couleur="#"+rouge;
		}
		
		if(vert<10){
			couleur+="0"+vert;
		}
		else{
			couleur+=vert;
		}
		if(bleu<10){
			couleur+="0"+bleu;
		}
		else{
			couleur+=bleu;
		}
		
		aDessine.fillStyle=couleur;
		aDessine.fillRect(valMin,0,valAccu,canvEnCours.height);
	}
	else{
		desactiveBarre(valMax);
	}
		valMin=valAccu;
		tourDeJeu++;
		//on stocke les nouvelles valeurs
		tabTemp[0]=valMax;
		tabTemp[1]=valMin;
		tabTemp[2]=valAccu;
		tabTemp[3]=rouge;
		tabTemp[4]=vert;
		tabTemp[5]=bleu;
		tabTemp[6]=tourDeJeu;
		return tabTemp;
}

//fonction qui désactive les barres quand elle ont atteint leurs max
function desactiveBarre(xc){
	switch(xc){
			case 95:
				canvHTMLAccept=false;
				break;
			case 90:
				canvCSSAccept=false;
				break;
			case 70:
				canvJSAccept=false;
				break;
			case 80:
				canvCAccept=false;
				break;
			case 85:
				canvCSharpAccept=false;
				break;
			case 45:
				canvPythonAccept=false;
				break;
			case 86:
				canvJavaAccept=false;
				break;
			case 75:
				canvUMLAccept=false;
				break;
			case 81:
				canvCPTAccept=false;
				break;
			case 84:
				canvVMAccept=false;
				break;
		}
}

//fonction qui va appeler le roulement de lettre selon le mot
function tourDeMot(){
	if(qual1Accept){
		tourDeLettres(document.getElementById('qual1'),0);
	}
	if(qual2Accept){
		tourDeLettres(document.getElementById('qual2'),1);
	}
	if(qual3Accept){
		tourDeLettres(document.getElementById('qual3'),2);
	}
	if(qual4Accept){
		tourDeLettres(document.getElementById('qual4'),3);
	}
	if(qual5Accept){
		tourDeLettres(document.getElementById('qual5'),4);
	}
}

//fonction de roulement de lettre qui va faire apparaître le mot/qualité petit à petit
function tourDeLettres(x,numTab){

	var k=0;
	var texteTemp="";
	var tempLettre="";
	if(tabMot[numTab]!=tabQual[numTab]){
		while((tabMot[numTab].charAt(k)==tabQual[numTab].charAt(k)) && (k<=tabQual[numTab].length)){ //on cherche les lettres qui sont déjà les mêmes des côtés
			texteTemp=texteTemp + tabMot[numTab].charAt(k); 
			k++;
		}
			
		while(k<tabQual[numTab].length){ //on in
			if((k==0) && (tabMot[numTab].charAt(k))!='z' && (tabMot[numTab].charAt(k))!='Z'){
				texteTemp=String.fromCharCode(tabMot[numTab].charCodeAt(k) + 1);
			}
			else if((k==0) && (tabMot[numTab].charAt(k))=='Z'){
				texteTemp='a';
			}
			else if((k==0) && (tabMot[numTab].charAt(k))=='z'){
				texteTemp='A';
			}
			else if((k!=0) && (tabMot[numTab].charAt(k))=='z'){
				texteTemp=texteTemp +'A';
			}
			else if((k!=0) && (tabMot[numTab].charAt(k))=='Z'){
				texteTemp=texteTemp +'a';
			}
			else{
				texteTemp=texteTemp + String.fromCharCode(tabMot[numTab].charCodeAt((k)) + 1);
			}
			k++;
		}
		tabMot[numTab]=texteTemp;
	}
	else{
		arretLettre(tabQual[numTab]);
	}
	
	document.getElementById('qual' + (numTab+1)).textContent=tabMot[numTab];
	
}

function arretLettre(motTest){
	switch(motTest){
		case "Perseverance":
			qual1Accept=false;
			break;
		case "Respect":
			qual2Accept=false;
			break;
		case "Sincerite":
			qual3Accept=false;
			break;
		case "Creativite":
			qual4Accept=false;
			break;
		case "Logique":
			qual5Accept=false;
			break;
	}
}

function apparition(x,y){
	
	$(y).fadeOut('slow');
	
	$(x).fadeIn('slow');
}

function apparitions(x){
	
	$(x).fadeIn('slow');
}

