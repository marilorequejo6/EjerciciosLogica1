import {
  contarInfectadas,
  contarSanas,
  contarInfecPaises,
  paisMasInfectado,
  nombresMascotas,
  nombresPersonasInfectadas,
  perrosEsp,
  mascotasPersonas,
  animalMasComun,
  contarPatas,
  personasMascotas4Patas,
  paisesLoros,
  infectadosPaisMascotaOchoPatas,
} from "/JavaScript/functions.js";

// ## EJERCICIO 1 ##
const ejercicio1 = document.createElement("div");
ejercicio1.innerHTML = `<strong>Ejercicio 1. </strong> Número de personas infectadas: ${contarInfectadas()}`;
ejercicio1.className = "ejercicios";
document.body.append(ejercicio1);

// ## EJERCICIO 2 ##
const ejercicio2 = document.createElement("div");
ejercicio2.innerHTML = `<strong>Ejercicio 2. </strong> Número de personas sanas: ${contarSanas()}`;
ejercicio2.className = "ejercicios";
document.body.append(ejercicio2);

// ## EJERCICIO 3 ##
const ejercicio3 = document.createElement("div");
ejercicio3.innerHTML = `<strong>Ejercicio 3. </strong> Total personas infectadas: ${contarInfecPaises()}`;
ejercicio3.className = "ejercicios";
document.body.append(ejercicio3);

// ## EJERCICIO 4 ##
const ejercicio4 = document.createElement("div");
ejercicio4.innerHTML = `<strong>Ejercicio 4. </strong> País más infectado: ${paisMasInfectado()}`;
ejercicio4.className = "ejercicios";
document.body.append(ejercicio4);

// ## EJERCICIO 5 ##
const ejercicio5 = document.createElement("div");
ejercicio5.innerHTML = `<strong>Ejercicio 5. </strong> Nombres mascotas: ${nombresMascotas()}`;
ejercicio5.className = "ejercicios";
document.body.append(ejercicio5);

// ## EJERCICIO 6 ##
const ejercicio6 = document.createElement("div");
ejercicio6.innerHTML = `<strong>Ejercicio 6. </strong> Nombres personas infectadas: ${nombresPersonasInfectadas()}`;
ejercicio6.className = "ejercicios";
document.body.append(ejercicio6);

// ## EJERCICIO 7 ##
const ejercicio7 = document.createElement("div");
ejercicio7.innerHTML = `<strong>Ejercicio 7. </strong> Nombres personas españolas con perro: ${perrosEsp()}`;
ejercicio7.className = "ejercicios";
document.body.append(ejercicio7);

// ## EJERCICIO 8 ##
const ejercicio8 = document.createElement("div");
ejercicio8.innerHTML = `<strong>Ejercicio 8. </strong> Personas y mascotas: ${mascotasPersonas()}`;
ejercicio8.className = "ejercicios";
document.body.append(ejercicio8);

// ## EJERCICIO 9 ##
const ejercicio9 = document.createElement("div");
ejercicio9.innerHTML = `<strong>Ejercicio 9. </strong> Mascota más común: ${animalMasComun()}`;
ejercicio9.className = "ejercicios";
document.body.append(ejercicio9);

// ## EJERCICIO 10 ##
const ejercicio10 = document.createElement("div");
ejercicio10.innerHTML = `<strong>Ejercicio 10. </strong> Número de patas mascotas: ${contarPatas()}`;
ejercicio10.className = "ejercicios";
document.body.append(ejercicio10);

// ## EJERCICIO 11 ##
const ejercicio11 = document.createElement("div");
ejercicio11.innerHTML = `<strong>Ejercicio 11. </strong> Personas con mascotas de 4 patas: ${personasMascotas4Patas()}`;
ejercicio11.className = "ejercicios";
document.body.append(ejercicio11);

// ## EJERCICIO 12 ##

// ## EJERCICIO 13 ##
const ejercicio13 = document.createElement("div");
ejercicio13.innerHTML = `<strong>Ejercicio 13. </strong> Países con loros: ${paisesLoros()}`;
ejercicio13.className = "ejercicios";
document.body.append(ejercicio13);

// ## EJERCICIO 14 ##
const ejercicio14 = document.createElement("div");
ejercicio14.innerHTML = `<strong>Ejercicio 14. </strong> Infectados países con mascotas 8 patas: ${infectadosPaisMascotaOchoPatas()}`;
ejercicio14.className = "ejercicios";
document.body.append(ejercicio14);
