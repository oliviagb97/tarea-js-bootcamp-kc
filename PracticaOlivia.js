import readline from 'readline';

const students = [{
  age: 32,
  examScores: [],
  gender: 'male',
  name: 'edu'
},
{
  age: 29,
  examScores: [],
  gender: 'female',
  name: 'silvia'
}];

const availableMaleNames = ['pepe', 'juan', 'victor', 'Leo', 'francisco', 'carlos'];
const availableFemaleNames = ['cecilia', 'ana', 'luisa', 'silvia', 'isabel', 'virginia'];
const availableGenders = ['male', 'female'];

function calculateRandomNumber(min, max) {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
}


// configuramos la utilidad de node para que los datos se pidan y se muestren por consola.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// productor
function getNumberFromConsole() {
  const promise = new Promise((resolve, reject) => {
    // nos permite hacer una pregunta por consola al usuario. Ojo que es un proceso asíncrono.
    rl.question('Introduce la opción: ', (num) => {
      rl.pause();
      resolve(num)
      // si el usuario mete un número, resolvemos la promesa con ese número.
      // si el usuario mete una letra, debemos rechazar/rejectear la promesa.
    })
  })

  return promise;
}

//Requisito 1
function MostrarTablaAlumnos(ListaAlumnos) {
  console.table(ListaAlumnos);
}

//Requisito #2
function MostrarCantidadAlumnos(ListaAlumnos) {
  console.log(ListaAlumnos.length);
}

//Requisito #3
function MostrarNombreAlumnos(listaAlumnos) {
  listaAlumnos.forEach(alumno => {
    console.log(alumno.name);
  });
}

///Requisito #4
function EliminarUltimoAlumno(listaAlumnos) {
  return listaAlumnos.pop();
}

//Requisito #5
function EliminarAlumnoAleatorio(listaAlumnos) {
  let min = 0;
  let max = listaAlumnos.length - 1;

  if (max >= 0) {
    let randomNumber = calculateRandomNumber(min, max);
    listaAlumnos.splice(randomNumber, 1);
  }
}

//Requisito #6
function MostrarDatosChicas(listaAlumnos) {
  let chicas = [];

  listaAlumnos.forEach(alumno => {
    if (alumno.gender == "female") {
      chicas.push(alumno);
    }
  });

  console.table(chicas);
}

//Requisito #7
function CantidadChicosYChicas(listaAlumnos) {
  let countChicas = 0;
  let countChicos = 0;

  listaAlumnos.forEach(element => {
    if (element.gender == "female")
      countChicas++;
    else
      countChicos++;
  });

  console.log("Numero de Chicas: ", countChicas);
  console.log("Numero de Chicos: ", countChicos);
}

//Requisito #8
function ChequearChicas(listaAlumnos) {
  let countChicas = 0;
  listaAlumnos.forEach(element => {
    if (element.gender == "female")
      countChicas++;
  });

  console.log(countChicas == listaAlumnos.length);
}


//Requisito #9
function AlumnosEntre20y35(listaAlumnos) {
  let alumnos = "";
  listaAlumnos.forEach(element => {
    if (element.age >= 20 && element.age <= 25)
      alumnos += element.name + " ";
  });

  console.log(alumnos);
}

//Requisito #10
function AñadirAlumno(listaAlumnos) {
  let sexo = availableGenders[calculateRandomNumber(0, 1)]
  let nombre = sexo == "female" ? availableFemaleNames[calculateRandomNumber(0, availableFemaleNames.length - 1)] : availableMaleNames[calculateRandomNumber(0, availableMaleNames.length - 1)]

  listaAlumnos.push({
    age: calculateRandomNumber(20, 50),
    examScores: [],
    gender: sexo,
    name: nombre
  });
}

//Requisito #11
function PersonaMasJoven(listaAlumnos) {
  let nombre = "";
  let edad = 999;

  listaAlumnos.forEach(element => {
    if (element.age <= edad) {
      nombre = element.name;
      edad = element.age;
    }
  });

  console.log(nombre);
}

//Requisito #12
function EdadMedia(listaAlumnos) {
  let suma = 0;

  listaAlumnos.forEach(element => {
    suma += element.age;
  });

  if(listaAlumnos.length > 0)
    console.log(Math.floor(suma / listaAlumnos.length));
  else
    console.log("0");
}

//Requisito #13
function EdadMediaChicas(listaAlumnos) {
  let suma = 0;
  let countChicas = 0;

  listaAlumnos.forEach(element => {
    if (element.gender == "female") {
      suma += element.age;
      countChicas++;
    }
  });

  if (countChicas > 0)
    console.log(Math.floor(suma / countChicas));
  else
    console.log("0");
}

//Requisito #14
function AñadirNotas(listaAlumnos) {
  for (let index = 0; index < listaAlumnos.length; index++) {
    listaAlumnos[index].examScores.push(calculateRandomNumber(0, 10));
  }
}

//Requisito #15
function OrdenarAlfabeticamente(listaAlumnos) {
  listaAlumnos.sort(function (a, b) {
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1;
    }
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });
}

//Requisito #16
function AlumnosMejorNotas(listaAlumnos) {
  let mejorNota = 0;
  let alumnoNombre = "";

  listaAlumnos.forEach(element => {
    if(SumarNotas(element) > mejorNota) {
      mejorNota = SumarNotas(element);
      alumnoNombre = element.name;
    }
  });

  console.log(alumnoNombre);
}

function SumarNotas(alumno) {
  let suma = 0;
  alumno.examScores.forEach(element => {
    suma += element;
  });

  return suma;
}

//Requisito #17
function AlumnoMejorNotaMedia(listaAlumnos) {
  let mejorNota = 0;
  let alumnoNombre = "";

  listaAlumnos.forEach(element => {
    if (NotaMedia(element) > mejorNota) {
      mejorNota = NotaMedia(element);
      alumnoNombre = element.name;
    }
  });

  console.log(alumnoNombre);
}

function NotaMedia(alumno) {
  let suma = 0;
  alumno.examScores.forEach(element => {
    suma += element;
  });

  if (alumno.examScores.length > 0)
    return suma / alumno.examScores.length;
  else
    return 0;
}

//Requisito #18
function AddPuntoExtra(listaAlumnos) {
  listaAlumnos.forEach(element => {
    for (let index = 0; index < element.examScores.length; index++) {
      if (element.examScores[index] < 10)
        element.examScores[index] += 1;
    }
  });
}

console.log("Menu:" +
  "\n1-Mostrar en formato de tabla todos los alumnos" +
  "\n2-Mostrar por consola la cantidad de alumnos que hay en clase" +
  "\n3-Mostrar por consola todos los nombres de los alumnos." +
  "\n4-Eliminar el último alumno de la clase" +
  "\n5-Eliminar un alumno aleatoriamente de la clase" +
  "\n6-Mostrar por consola todos los datos de los alumnos que son chicas" +
  "\n7-Mostrar por consola el número de chicos y chicas que hay en la clase" +
  "\n8-Mostrar true o false por consola si todos los alumnos de la clase son chicas" +
  "\n9-Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años." +
  "\n10-Añadir un alumno nuevo" +
  "\n11-Mostrar por consola el nombre de la persona más joven de la clase." +
  "\n12-Mostrar por consola la edad media de todos los alumnos de la clase" +
  "\n13-Mostrar por consola la edad media de las chicas de la clase" +
  "\n14-Añadir nueva nota a los alumnos" +
  "\n15-Ordenar el array de alumnos alfabéticamente según su nombre" +
  "\n16-Mostrar por consola el alumno de la clase con las mejores notas" +
  "\n17-Mostrar por consola la nota media más alta de la clase y el nombre del alumno al que pertenece" +
  "\n18-ñadir un punto extra a cada nota existente de todos los alumnos");


do {
 var opcion = await getNumberFromConsole();
  opcion = parseInt(opcion);

  if(opcion.isNaN){
    opcion=20;
  }

  switch (opcion) {
    case 1:
      MostrarTablaAlumnos(students);
      break;
    case 2:
      MostrarCantidadAlumnos(students);
      break;
    case 3:
      MostrarNombreAlumnos(students);
      break;
    case 4:
      EliminarUltimoAlumno(students);
      break;
    case 5:
      EliminarAlumnoAleatorio(students);
      break;
    case 6:
      MostrarDatosChicas(students);
      break;
    case 7:
      CantidadChicosYChicas(students);
      break;
    case 8:
      ChequearChicas(students);
      break;
    case 9:
      AlumnosEntre20y35(students);
      break;
    case 10:
      AñadirAlumno(students);
      break;
    case 11:
      PersonaMasJoven(students);
      break;
    case 12:
      EdadMedia(students);
      break;
    case 13:
      EdadMediaChicas(students);
      break;
    case 14:
      AñadirNotas(students);
      break;
    case 15:
      OrdenarAlfabeticamente(students);
      break;
    case 16:
      AlumnosMejorNotas(students);
      break;
    case 17:
      AlumnoMejorNotaMedia(students);
      break;
    case 18:
      AddPuntoExtra(students);
      break;
    default:
      break;
  }
} while (opcion >= 1 && opcion <= 18);


