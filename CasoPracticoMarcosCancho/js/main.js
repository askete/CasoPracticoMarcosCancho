// Obtener los selectores
const instituciones = document.getElementById("instituciones");
const listainstituciones = document.getElementById("listainstituciones");

// Escuchar el evento change en el primer selector

instituciones.addEventListener("change", function () {
	// Obtener el valor seleccionado en el primer selector
	const selectedOption = instituciones.value;
	// Limpiar las opciones del segundo selector
	listainstituciones.innerHTML = "";

	// Agregar las nuevas opciones en función del valor seleccionado en el primer selector
	if (selectedOption === "bancos") {
		listainstituciones.innerHTML += "<option value='caixabank'>CaixaBank</option>";
		listainstituciones.innerHTML += "<option value='ing'>ING</option>";
		listainstituciones.innerHTML += "<option value='bbva'>BBVA</option>";

	} else {
		listainstituciones.innerHTML += "<option value='vivus'>Vivus</option>";
		listainstituciones.innerHTML += "<option value='moneyman'>Moneyman</option>";
		listainstituciones.innerHTML += "<option value='wenance'>Wenance</option>";

	}

});


const formulario = document.getElementById('formulario');
let inputs = document.querySelectorAll('#formulario input');


const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	telefono: /^\d{9}$/, // 7 a 14 numeros.
	montodeuda: /^[4-9]\d{3,}$|^[1-3]\d{4,}$/,
	correoele: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

}

const campos = {
	name: false,
	fname: false,
	lname: false,
	phone: false,
	deuda: false,
	email: false

}

const enviarbtn = document.getElementById("env");


function comprobarcampos() {
	if (campos.name == true & campos.fname == true & campos.lname == true & campos.phone == true & campos.deuda == true & campos.email == true) {
		enviarbtn.disabled = false;
	} else {
		enviarbtn.disabled = true;
	}
}
const validarFormulario = (e) => {
	switch (e.target.name) {

		case "name":
			validarCampo(expresiones.nombre, e.target, 'name');
			break;
		case "fname":
			validarCampo(expresiones.nombre, e.target, 'fname');
			break;
		case "lname":
			validarCampo(expresiones.nombre, e.target, 'lname');
			break;;
		case "phone":
			validarCampo(expresiones.telefono, e.target, 'phone');
			break;
		case "deuda":
			validarCampo(expresiones.montodeuda, e.target, 'deuda');
			break;
		case "email":
			validarCampo(expresiones.correoele, e.target, 'email');
			break;
	}
}
const validarCampo = (expresion, input, campo) => {


	if (expresion.test(input.value)) {

		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-circle-check');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-circle-xmark');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;

	}
	else {

		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-circle-xmark');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-circle-check');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;

	}
}



function addEvent() {
	inputs.forEach((input) => {
		input.addEventListener('keyup', validarFormulario);		
		input.addEventListener('keyup', comprobarcampos);		

	});
}
addEvent();


const siguientebtn = document.getElementById("siguiente");


document.getElementById("deuda").addEventListener("keyup", function () {
	if (deuda.value >= 4000) {
		siguientebtn.disabled = false
	} else {
		siguientebtn.disabled = true
	}
});






var button = document.getElementById("siguiente");
var content1 = document.getElementById("paso1");
var content2 = document.getElementById("paso2");
button.addEventListener("click", function () {


	content1.style.display = "none";
	content2.style.display = "block";

});

var buttonatras = document.getElementById("atras");
var content1 = document.getElementById("paso1");
var content2 = document.getElementById("paso2");
buttonatras.addEventListener("click", function () {

	content1.style.display = "block";
	content2.style.display = "none";

});




// Obtener el formulario
var form = document.getElementById("formulario");

// Asignar un evento al botón de enviar
form.addEventListener("submit", function (event) {
	event.preventDefault();



	// Obtener los valores de los campos del formulario
	var instituciones = form.elements.instituciones.value;
	var listainstituciones = form.elements.listainstituciones.value;
	var deuda = form.elements.deuda.value;
	var name = form.elements.name.value;
	var fname = form.elements.fname.value;
	var lname = form.elements.lname.value;
	var phone = form.elements.phone.value;
	var email = form.elements.email.value;


	// Guardar los valores en el localstorage
	localStorage.setItem("instituciones", instituciones);
	localStorage.setItem("listainstituciones", listainstituciones);
	localStorage.setItem("deuda", deuda);
	localStorage.setItem("name", name);
	localStorage.setItem("primerapellido", fname);
	localStorage.setItem("lname", lname);
	localStorage.setItem("phone", phone);
	localStorage.setItem("email", email);

	// Mostrar un mensaje de éxito
	alert("REGISTRO EXITOSO!! (Valores guardados en el localstorage, se ve en la consola)");
	console.log(localStorage);

});
