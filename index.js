const form = document.getElementById("formulario");


//Se crea la funcion principal
function capturar(){
      function persona(nombre,edad){
      this.nombre=nombre;
      this.edad=edad;
      }
      const name = document.getElementById("name").value
      const age = document.getElementById("age").value

      nuevoIngreso = new persona (name,age);
      console.log(nuevoIngreso)
      agregar()

      localStorage.setItem("ingreso",JSON.stringify(baseDatos))

      const answer = document.getElementById ("respuesta")
      answer.textContent = `Hola ${name} tienes la edad de ${age} años`
}

var baseDatos= [];

//pusheo al array
function agregar(){
      console.log ("capturado")
       baseDatos.push(nuevoIngreso);
      console.log(baseDatos)
}



