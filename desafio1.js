class Usuario {
    constructor (nombre, apellido, mascotas = [], libros = []){
        this.nombre = nombre 
        this.apellido= apellido
        this.mascotas = mascotas
        this.libros= libros
    }

    getFullName() {        
        return (`Mi nombre completo es ${this.nombre} ${this.apellido}`)
    }

    addMascota(nombreMascota) {
        return this.mascotas.push(nombreMascota)
       
    }
    
    countMascotas() {                
        let cantidadMascotas = this.mascotas.length 
        return cantidadMascotas       
    }

    addBook(nombreLibro, autor) {
        return this.libros.push({nombreLibro, autor})
    }

    addBookNames(usuarioAconsultar) {
         for(let i = [0]; i < this.libros.length; i++){
            let titulos = [usuarioAconsultar.libros[i].nombreLibro]
            console.log(titulos)
        }         
    }
} 

const usuario2 = new Usuario ("Ramón", "Gimenez",)

console.log(usuario2.getFullName()) // Consulta 1er metodo getFullName

usuario2.addMascota("juanita")      //
usuario2.addMascota("romancito")    // 2do metodo addMascotas
usuario2.addMascota("cosita")       //
usuario2.addMascota("lunita")       //

console.log(usuario2.countMascotas()) // 3er metodo countMascotas

usuario2.addBook("1984", "George Orwel")                                //
usuario2.addBook("Cien años de soledad", "Gabriel Garcia Marquez")      // 4do metodo addBook
usuario2.addBook("Rayuela", "Julio Cortazar")                           //

usuario2.addBookNames(usuario2)    //5to metodo addBookNames

