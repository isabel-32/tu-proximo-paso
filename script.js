const preguntas = [

{
pregunta:
"¿Qué actividad disfrutás más?",

opciones:[

{
texto:"🎨 Diseñar y crear",
valor:"diseño"
},

{
texto:"💻 Usar tecnología",
valor:"tecnologia"
},

{
texto:"🤝 Ayudar personas",
valor:"salud"
},

{
texto:"📈 Liderar proyectos",
valor:"negocios"
}

]
},

{
pregunta:
"¿Qué materia te gusta más?",

opciones:[

{
texto:"🧮 Matemática",
valor:"tecnologia"
},

{
texto:"🎭 Arte",
valor:"diseño"
},

{
texto:"🧠 Biología",
valor:"salud"
},

{
texto:"💼 Economía",
valor:"negocios"
}

]
},

{
pregunta:
"¿Cómo te describirías?",

opciones:[

{
texto:"🎨 Creativo/a",
valor:"diseño"
},

{
texto:"⚙️ Analítico/a",
valor:"tecnologia"
},

{
texto:"💙 Empático/a",
valor:"salud"
},

{
texto:"📈 Líder",
valor:"negocios"
}

]
}

];

let preguntaActual = 0;

let respuestas = [];

const pregunta =
document.getElementById("pregunta");

const opciones =
document.querySelector(".opciones");

const progress =
document.getElementById("progress");

function cargarPregunta(){

pregunta.innerHTML =
preguntas[preguntaActual].pregunta;

opciones.innerHTML = "";

preguntas[preguntaActual]
.opciones.forEach(op => {

const boton =
document.createElement("button");

boton.classList.add("option");

boton.innerHTML = op.texto;

boton.onclick = () =>
responder(op.valor);

opciones.appendChild(boton);

});

progress.style.width =
((preguntaActual + 1)
/
preguntas.length) * 100 + "%";
}

function responder(valor){

respuestas.push(valor);

preguntaActual++;

if(preguntaActual <
preguntas.length){

cargarPregunta();
}

else{

mostrarResultado();
}

}

function mostrarResultado(){

const resultado =
document.getElementById("resultado");

document.querySelector(".test-box").style.display = "none";

let tecnologia =
respuestas.filter(r =>
r == "tecnologia").length;

let diseño =
respuestas.filter(r =>
r == "diseño").length;

let salud =
respuestas.filter(r =>
r == "salud").length;

let negocios =
respuestas.filter(r =>
r == "negocios").length;

if(tecnologia >= 2){

resultado.innerHTML = `

<div class="result-card">

<h2>
💻 Ingeniería en Sistemas
</h2>

<div class="compatibilidad">
85% compatibilidad
</div>

<p>
Te destacás por tu pensamiento lógico,
resolución de problemas e interés
por la tecnología.
</p>

<h3>
🏫 Universidades recomendadas
</h3>

<ul>

<li>UTN</li>

<li>UNR</li>

<li>UCA</li>

</ul>

</div>
`;
}

else if(diseño >= 2){

resultado.innerHTML = `

<div class="result-card">

<h2>
🎨 Diseño Gráfico
</h2>

<div class="compatibilidad">
89% compatibilidad
</div>

<p>
Tenés un perfil creativo,
visual e innovador.
</p>

<h3>
🏫 Universidades recomendadas
</h3>

<ul>

<li>UNR</li>

<li>UAI</li>

</ul>

</div>
`;
}

else if(salud >= 2){

resultado.innerHTML = `

<div class="result-card">

<h2>
🧠 Psicología
</h2>

<div class="compatibilidad">
91% compatibilidad
</div>

<p>
Te interesa ayudar personas
y comprender las emociones.
</p>

<h3>
🏫 Universidades recomendadas
</h3>

<ul>

<li>UNR</li>

<li>UCA</li>

</ul>

</div>
`;
}

else{

resultado.innerHTML = `

<div class="result-card">

<h2>
📈 Administración
</h2>

<div class="compatibilidad">
83% compatibilidad
</div>

<p>
Tenés capacidad de liderazgo,
organización y gestión.
</p>

<h3>
🏫 Universidades recomendadas
</h3>

<ul>

<li>UCA</li>

<li>UNR</li>

</ul>

</div>
`;
}

}

cargarPregunta();