const btnNav = document.querySelectorAll(".tab-categoria");
const btnHeader = document.querySelectorAll(".iconos-link");
const btnResultados = document.querySelectorAll("#resultado ul li");
const resultados = document.getElementById("resultado");
const buscador = document.getElementById("buscador");

const redes = document.querySelectorAll(".fa-brands");

let recetas = [
  "Albóndigas en salsa de tomate","Bifes de higado con cebolla y tomate","Chop suey de carne de res","Costillas de cerdo a la miel y mostaza",
  "Lomo de cerdo a la cerveza y miel","Matambre de carne arrollado","Milanesa a la napolitana","Mollejas de cordero al ajillo","Osobuco de ternera a la milanesa",
  "Salteado de cerdo con verduras","Caldo casero","Crema de acelgas","Crema de frijoles","Ensalada César con pollo empanado",
  "Ensalada de garbanzos con tomate y huevo","Ensalada de macarrones con atún","Ensalada verde con escarola y olivas",
  "Ensalada verde con frutos rojos","Sopa de espinacas y avena","Sopa de ramen","Canelones de ricota y acelga",
  "Espaguetis con brócoli","Fusilli con pollo y champiñones","Macarrones con carne picada y tomate natural","Ñoquis de remolacha",
  "Pasta con pollo, verduras y soja","Pasta con verduras y crema","Sorrentinos de calabaza y queso","Sorrentinos de jamón y queso",
  "Spaghetti carbonara con nata","Bacalao con tomate y pimientos","Camarones al ajillo con crema de coco","Cazuela de mariscos y verduras",
  "Ceviche de calamar con coco y jengibre","Consomé de langostinos en salsa","Corvina al horno con verduras",
  "Lenguado a la naranja","Mejillones a la crema estilo Francia","Pejerrey al horno con papas fritas",
  "Salmón glaseado con mandarina y miel","Brownie red velvet cheesecake","Cheesecake de frutos rojos",
  "Flan de miel con nueces","Gelatina de zanahoria","Manzana al horno con canela","Marquise de chocolate",
  "Mousse de Durazno","Pastel de coco","Tarta de manzana sin hojaldre","Tarta de yogur griego",
];

// redes:
redes.forEach((tab) => {

  tab.addEventListener("mouseover", function () {
    this.classList.add("hover");
  });

  tab.addEventListener("mouseout", function () {
    this.classList.remove("hover");
  });

  tab.addEventListener("click",function () {
    this.classList.add("clicked");

    setTimeout(()=>{
      this.classList.remove("clicked")
    },1000)
})
});


//Botones:

btnResultados.forEach((tab) => {
  // Añade la clase 'hover' al elemento sobre que este el mouse
  tab.addEventListener("mouseover", function () {
    this.classList.add("hover");
  });
// Elimina la clase 'hover' al elemento cuando el mouse deja de estar encima
  tab.addEventListener("mouseout", function () {
    this.classList.remove("hover");

    //Añade la clase 'clicked' al elemento que es clickeado
    tab.addEventListener("click",function () {
      this.classList.add("clicked");
  // Pasado 1 seg la elimina
      setTimeout(()=>{
        this.classList.remove("clicked") 
      },1000)
  })
  });
});

btnHeader.forEach((tab) => {
  tab.addEventListener("mouseover", function () {
    this.classList.add("hover");
  });

  tab.addEventListener("mouseout", function () {
    this.classList.remove("hover");

    tab.addEventListener("click",function () {
      this.classList.add("clicked");
  
      setTimeout(()=>{
        this.classList.remove("clicked")
      },1000)
  })
  });
});

// Añade la clase 'hover' al elemento sobre que este el mouse
btnNav.forEach((tab) => {
  tab.addEventListener("mouseover", function () {
    this.classList.add("hover");
  });
// Elimina la clase 'hover' al elemento cuando el mouse deja de estar encima
  tab.addEventListener("mouseout", function () {
    this.classList.remove("hover");

    tab.addEventListener("click",function () {
      this.classList.add("clicked");
  
      setTimeout(()=>{
        this.classList.remove("clicked")
      },1000)
  })
  });
});

btnNav.forEach((tab) => {
  tab.addEventListener("click", function () {
    btnNav.forEach((t) => t.classList.remove("active"));
    // Añade la clase 'active' al elemento clicado
    this.classList.add("active");
  });
});




// Carrusel:

// Averiguar cuants slides hay
let slides = document.querySelectorAll('.slide');
let slidesCount = slides.length;

// Obtenemos el ancho de todas las slides juntas
let slidesContainer = document.querySelector('.slidesContainer');

// Obtenemos cuanto se debe mover una diapositiva
let movement = slides[0].clientWidth;

// Seleccionamos el boton de la derecha
let moveRight = document.querySelector('.right');

// Contamos la cantidad de movimiento
let count = 0;

// id del intervalo
let intervalId;


// Se calcula el ancho del Slide cada vez que cambia el tamaño de la ventana
window.addEventListener("resize", function(){
  clearInterval(intervalId); // Se detiene el intervalo al cambiar el tamaño de la ventana
  movement = slides[0].clientWidth;
  resetInterval(); // Se reinicia el intervalo después del cambio de tamaño de la ventana
})

// Marca y desmarca el boton cuando esta el mouse sobre la flecha derecha
moveRight.addEventListener("mouseover", function(){
  this.classList.add("btn-active");
});

moveRight.addEventListener("mouseout", function () {
  this.classList.remove("btn-active");
});

// Mover a la derecha
moveRight.addEventListener('click', function() {
    clearInterval(intervalId); // Se detiene el intervalo al hacer clic
    moveToRight();
    resetInterval(); // Se reinicia el intervalo después del clic
});

function moveToRight() {
    count++;
    // Avanza una posicion
    if (count < slidesCount) {
        slidesContainer.style.transform = 'translate(-' + movement * count + 'px)';
    } 
    // Vuelve a cero
    else {
        slidesContainer.style.transform = 'translate(0px)';
        count = 0;
    }
}

// Seleccionamos el boton de la izquierda
let moveLeft = document.querySelector('.left');

// Marca y desmarca el boton cuando esta el mouse sobre la flecha izquierda
moveLeft.addEventListener("mouseover", function(){
  this.classList.add("btn-active");
});

moveLeft.addEventListener("mouseout", function () {
  this.classList.remove("btn-active");
});

moveLeft.addEventListener('click', function() {
    clearInterval(intervalId); // Se para el intervalo al hacer clic
    moveToLeft();
    resetInterval(); // Se reinicia el intervalo después del clic
});

function moveToLeft() {
    count--;
    // Retrocede una posición
    if (count >= 0) {
        slidesContainer.style.transform = 'translate(-' + movement * count + 'px)';
    } 
    // Vuelve al final
    else {
        slidesContainer.style.transform = 'translate(-' + movement * (slidesCount - 1) + 'px)';
        count = slidesCount - 1;
    }
}


function resetInterval() {
    intervalId = setInterval(() => {
        moveToRight();
    }, 3000);
}

resetInterval();

//Buscador

buscador.onkeyup = function(){
  let resultado = [];
  let input = buscador.value;
  if(input.length){
    resultado = recetas.filter((palabra)=>{
      return palabra.toLowerCase().includes(input.toLowerCase());
    });
  }
  mostrar(resultado);

  if(!resultado.length){
    resultados.innerHTML = "";
  }
}
//Esta funcion va a tomar lo que vaya obteniendo de "resultado" y lo muestra por pantalla
function mostrar(resultado){
  const contenido = resultado.map((lista)=>{
    return "<li>"+ lista + "</li>";
  })

  resultados.innerHTML = "<ul>" + contenido + "</ul>";
}