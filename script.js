class Mascota {
 constructor(nombre, edad, raza, horas, dueño) {
    this.nombre = nombre
    this.edad = edad
    this.raza = raza 
    this.horas = parseFloat(horas)
    this.dueño = dueño
 }
    total(mascota)  {
        if (this.horas < 8) { 
            return this.horas * 200
        }
        else {
            return (this.horas * 200) + 200
        }    
    }
}
const mascota1 = new Mascota("Paco", 3, "Bulldog", 8, "Jose Luis")
const mascota2 = new Mascota("Lucia", 5, "Golden", 12, "Maria")
const mascota3 = new Mascota("Milo", 1, "Caniche", 6, "Franco")
const mascota4 = new Mascota("Keyla", 2, "Dalmata", 4, "Carlos")
const mascota5= new Mascota("Nono", 7, "Silvestre", 3, "Maximo")

const mascotas = [mascota1, mascota2, mascota3, mascota4, mascota5]

let nombrem = prompt('Ingrese su nombre')
let index = 1
let user = true
    for (const mascota of mascotas) {
            if (mascota.dueño == nombrem) {
                    alert("Hola "+ (mascota.dueño) + ", ya puede retirar a su perro/a, " + (mascota.nombre) + " el/la " + (mascota.raza) + " estuvo un total de " + (mascota.horas) + " horas con nosotros, por lo que usted debe " + mascota.total(mascota) + " pesos")
                    break
            }
            if (index == mascotas.length) {
                alert('Usted no tiene perros en la guarderia')
                user = false
            }
            else  { 
             index += 1
             continue
            }
            if (user == false) {
                let create = prompt('¿Desea ingresar a su mascota a la guarderia?')
                    if (create == "no") {
                        break
                    }
                    else if (create == "si") {
                        mascotas.push(new Mascota(
                            prompt('Inserte el nombre de su mascota'),
                            parseFloat(prompt('Inserte la edad de su mascota')),
                            prompt('Inserte la raza de su mascota'),
                            0,
                            prompt('Inserte su nombre')
                            )
                        )
                        alert('Felicidades, su mascota fue registrada con exito!')
                        nombrem = prompt('Ingrese su nombre nuevamente para verificar su perfil')
                    }   
            }
    console.log(mascotas)
    }

