
//Cambiar titulo con mi funcion. Primero usamos un selector para definir que queremos cambiar. Luego le damos el valor.

const miTitulo = document.querySelector('h1');
miTitulo.textContent = 'Fauna Nacional Argentina';

// La linea comentada se pone entre barras asi el programa no reconoce la funcion.

//document.querySelector('html').onclick = function () { alert ('Ouch!! Deja de pincharme');}

// Cuando haga clic en cualquier parte de mi pagina, me salta un cartel que dice Ouch deja de tocarme xD

// Añadir cambiador de imagen. Vamos a cambiar el Condor de la portada.

let miImage = document.querySelector('img')
miImage.onclick = function () {
	let miSrc = miImage.getAttribute ('src');
	if (miSrc === 'images/condor.jpg'){
		miImage.setAttribute ('src','images/tonina.jpg');
	} else {
		miImage.setAttribute('src', 'images/condor.jpg');

	}
}

// Primer uso el selector document.querySelector('img') para asignar el elemento imagen
// y a su vez creo una variable miImage. A esta variable le asigno el evento onclick y a este le asigno una funcion
// Es decir, al hacer click se cumple la funcion.
//Ahora bien, hago que el codigo recupere el valor del atributo src de la imagen. Es lo que quiero que se vaya modificando.
//Luego aplico un condicional if, si hago click y mi valor src es el "condor", me cambia el atributo src al valor de "tonina"
//Si esto no se cumple, es decir si al hacer click mi valor no es "condor" (ahora tonina ya que hice click), 
//ahi si retorna al valor src "condor"
// Aplicar lo anterior a todas las imagenes. No pude hacerlo no se porque.

//////////////////////////////////////EXPLICACION////////////////////////////////////////////////////////////////////////

//Añadir mensaje de bienvenida. Luego de agregar el boton en html, sigo con lo siguiente:

//       let miBoton = document.querySelector ('button')
//       let miTitulo = document.querySelector ('h1')

//       function setUserName () { 
//	     let miNombre = prompt ('Por favor, ingrese su nombre.');
//	     localStorage.setItem('nombre',miNombre);
//	     miTitulo.textContent = 'los animales son geniales,' + miNombre; }

//La funcion setUserName contiene la funcion prompt() que crea un cuadro de dialogo como lo
// hace alert(), solo que esta me pide un dato y almacena ese dato en una variable cuando el boton Aceptar
// es presionado. En este caso le estoy pidiendo al usuario su nombre. Localstorage me permite almacenar datos
// en el navegador , este posee la funcion setItem la cual crea y almacena el dato en un elemento, en este caso
// el elemento es 'nombre' y coloca ese valor en la variable miNombre, que contiene al nombre que el usuario 
// ingreso. Al establecer text.Content del titulo mas el nombre de usuario , quedaria conformado el mensaje de 
// bienvenida.

// Ahora vamos a agregar el bloque if...else

//       if (!localStorage.getItem('nombre')) {
//	     setUserName ();
//       } else {
//       let nombreAlmacenado = localStorage.getItem('nombre');
//       miTitulo.textContent = 'los animales son geniales'+nombreAlmacenado;
//       }

// Esto quiere decir que , al usar el negador ! la linea comprueba si existe el elemento 'nombre'. En caso
// de no existir , la funcion setUserName se inicia para que sea creado. Si ya existe, se recupera el dato
// desde getItem(). 

// Finalmente resta agregar el evento onclick que manipulara el boton, de modo que cuando sea pulsado
// se inicie la funcion setUserName(). 

//      miBoton.onclick = function() {
//      setUserName();
//      } 

// Si en mi cuadro de dialogo le doy cancelar, el mensaje de 'los animales son geniales' va a quedar con NULL
// es decir un dato sin valor. Para evitar eso agregamos un condicionante if :

//function estableceNombreUsuario() {
//  let miNombre = prompt('Introduzca su nombre.');
//  if(!miNombre) {
//    estableceNombreUsuario();
//  } else {
//    localStorage.setItem('nombre', miNombre);
//    miTitulo.innerHTML = 'Mozilla is genial, ' + miNombre;
//  }
//}

//Finalmente quedaria asi mi codigo: IMPORTANTE, ANTES DE EJECUTAR: BLOQUEAR LAS PRIMERAS LINEAS DONDE
// CAMBIABA EL TITULO.

let miBoton = document.querySelector('button');
let miSaludo = document.querySelector('h1');

function setUserName() {
  let miNombre = prompt('Por favor, ingrese su nombre.');
  if (!miNombre) {
     setUserName();
 } else {
 	localStorage.setItem('name', miNombre);
	miSaludo.innerHTML = 'Los animales son geniales, ' + miNombre;
   }
}


 if(!localStorage.getItem('name')) {
 	    setUserName ();
    } else {
       let nombreAlmacenado = localStorage.getItem('name');
       miSaludo.innerHTML = 'Los animales son geniales, '+ nombreAlmacenado;
    }

miBoton.onclick = function() {
	setUserName();
}
 
