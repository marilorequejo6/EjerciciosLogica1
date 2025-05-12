import { persons, pets, animals, countries } from "/JavaScript/data.js";

// ## EJERCICIO 1 ##
export function contarInfectadas() {
  let personasInfectadas = 0;
  for (let i = 0; i < persons.length; i++) {
    if (persons[i].infected === true) {
      personasInfectadas++;
    }
  }
  return personasInfectadas;
}

// ## EJERCICIO 2 ##
export function contarSanas() {
  let personasSanas = 0;
  for (let i = 0; i < persons.length; i++) {
    if (persons[i].infected === false) {
      personasSanas++;
    }
  }
  return personasSanas;
}

// ## EJERCICIO 3 ##
export function contarInfecPaises() {
  let infectadasPaises = 0;
  for (let i = 0; i < countries.length; i++) {
    infectadasPaises = infectadasPaises + countries[i].infected;
  }
  return infectadasPaises;
}

// ## EJERCICIO 4 ##
export function paisMasInfectado() {
  let varPaisMasInfectado = "";
  let numMaxInfectados = 0;
  for (let i = 0; i < countries.length; i++) {
    if (countries[i].infected > numMaxInfectados) {
      numMaxInfectados = countries[i].infected;
      varPaisMasInfectado = countries[i].name;
    }
  }
  return varPaisMasInfectado;
}

// ## EJERCICIO 5 ##
export function nombresMascotas() {
  let nomMascotas = [];
  for (let i = 0; i < pets.length; i++) {
    nomMascotas.push(pets[i].name);
  }
  return nomMascotas;
}

// ## EJERCICIO 6 ##
export function nombresPersonasInfectadas() {
  let arrayNomPersInfect = [];
  for (let i = 0; i < persons.length; i++) {
    if (persons[i].infected === true) {
      arrayNomPersInfect.push(persons[i].name);
    }
  }
  return arrayNomPersInfect;
}

// ## EJERCICIO 7 ##
export function perrosEsp() {
  let persEspPerro = [];
  /* -- VERSIÓN LARGA --
  let persEsp = []; 
  let nombresPerros = [];
  for (let i = 0; i < persons.length; i++) {
    if (persons[i].country === "ES") {
      persEsp.push(persons[i]);
    }
  }

  for (let i = 0; i < pets.length; i++) {
    if (pets[i].type === "perro") {
      nombresPerros.push(pets[i].name);
    }
  }

    for (let i = 0; i < persEsp.length; i++) {
        if (nombresPerros.includes(persEsp[i].pet)) {
        persEspPerro.push(persEsp[i].name);
        }
    } */
  // -- VERSIÓN CORTA --
  for (let i = 0; i < persons.length; i++) {
    for (let j = 0; j < pets.length; j++)
      if (
        persons[i].country === "ES" &&
        persons[i].pet === pets[j].name &&
        pets[j].type === "perro"
      ) {
        persEspPerro.push(persons[i].name);
      }
  }

  return persEspPerro;
}

// ## EJERCICIO 8 ##
export function mascotasPersonas() {
  let personasYMascotas = [];
  for (let persona of persons) {
    for (let pet of pets) {
      if (persona.pet === pet.name) {
        personasYMascotas.push({
          persona: persona.name,
          mascota: {
            nombre: pet.name,
            animal: pet.type,
          },
        });
      }
    }
  }
  //
  //console.log("personasYMascotas ", personasYMascotas);

  let datosEnSerie = "";
  for (let valores of personasYMascotas) {
    //console.log("valores ", valores);
    datosEnSerie += `[Persona: ${valores.persona}, mascota: ${valores.mascota.nombre}, animal: ${valores.mascota.animal} ], \n`;
  }
  console.log("datosEnSerie ", datosEnSerie);
  return datosEnSerie;
}

// ## EJERCICIO 9 ##
export function animalMasComun() {
  let numPerros = 0;
  let numGatos = 0;
  let numLoros = 0;
  let numArañas = 0;
  for (let persona of persons) {
    for (let pet of pets) {
      if (persona.pet === pet.name && pet.type === "perro") {
        numPerros++;
      } else if (persona.pet === pet.name && pet.type === "gato") {
        numGatos++;
      } else if (persona.pet === pet.name && pet.type === "loro") {
        numLoros++;
      } else if (persona.pet === pet.name && pet.type === "araña") {
        numArañas++;
      }
    }
  }

  const arrayMascotas = {
    Perro: numPerros,
    Gato: numGatos,
    Loro: numLoros,
    Araña: numArañas,
  };
  let mascotaMasComun = "";
  let numMascotaMasComun = 0;
  for (let mascota in arrayMascotas) {
    if (arrayMascotas[mascota] > numMascotaMasComun) {
      numMascotaMasComun = arrayMascotas[mascota];
      mascotaMasComun = mascota;
    }
  }
  return mascotaMasComun;
}

// ## EJERCICIO 10 ##
// HECHO SIN UTILIZAR EL ARRAY DE ANIMALS (NO LO VI A TIEMPO)
export function contarPatas() {
  let numPerros = 0;
  let numGatos = 0;
  let numLoros = 0;
  let numArañas = 0;
  for (let persona of persons) {
    for (let pet of pets) {
      if (persona.pet === pet.name && pet.type === "perro") {
        numPerros++;
      } else if (persona.pet === pet.name && pet.type === "gato") {
        numGatos++;
      } else if (persona.pet === pet.name && pet.type === "loro") {
        numLoros++;
      } else if (persona.pet === pet.name && pet.type === "araña") {
        numArañas++;
      }
    }
  }

  const arrayMascotas = {
    Perro: numPerros,
    Gato: numGatos,
    Loro: numLoros,
    Araña: numArañas,
  };
  let numPatas = 0;
  for (let mascota in arrayMascotas) {
    if (mascota === "Perro" || mascota === "Gato") {
      numPatas = arrayMascotas[mascota] * 4 + numPatas;
    } else if (mascota === "Loro") {
      numPatas = arrayMascotas[mascota] * 2 + numPatas;
    } else if (mascota === "Araña") {
      numPatas = arrayMascotas[mascota] * 8 + numPatas;
    }
  }
  return numPatas;
}

// ## EJERCICIO 11 ##
export function personasMascotas4Patas() {
  let varPersonasMascotas4Patas = [];
  for (let persona of persons) {
    for (let pet of pets) {
      if (persona.pet === pet.name) {
        for (let animal of animals) {
          if (pet.type === animal.kind && animal.legs == 4) {
            varPersonasMascotas4Patas.push(persona.name);
          }
        }
      }
    }
  }
  return varPersonasMascotas4Patas;
}

// ## EJERCICIO 12 ##

// ## EJERCICIO 13 ##
export function paisesLoros() {
  let paisesConLoros = [];
  for (let persona of persons) {
    for (let pet of pets) {
      if (pet.name === persona.pet && pet.type === "loro") {
        for (let country of countries) {
          if (persona.country === country.code) {
            paisesConLoros.push(country.name);
          }
        }
      }
    }
  }

  return paisesConLoros;
}

// ## EJERCICIO 14 ##
export function infectadosPaisMascotaOchoPatas() {
  let numInfectadosPaisMascotaOchoPatas = 0;
  for (let persona of persons) {
    for (let pet of pets) {
      if (persona.pet === pet.name) {
        for (let animal of animals) {
          if (pet.type === animal.kind && animal.legs === 8) {
            for (let country of countries) {
              if (persona.country === country.code) {
                numInfectadosPaisMascotaOchoPatas =
                  country.infected + numInfectadosPaisMascotaOchoPatas;
              }
            }
          }
        }
      }
    }
  }

  return numInfectadosPaisMascotaOchoPatas;
}
