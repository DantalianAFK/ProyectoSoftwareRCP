var Fila = null
function onSubmit() {
        let DataForm = Leer()
        if (Fila == null){
            InsertarDatos(DataForm)
        } else{
            Actualizar(DataForm)
            Vaciar()
    }
}

function Leer() {
    let DataForm = {}
    DataForm["ID"] = document.getElementById("ID").value
    DataForm["Nom"] = document.getElementById("Nom").value
    DataForm["Marc"] = document.getElementById("Marc").value
    DataForm["Fven"] = document.getElementById("Fven").value
    return DataForm
}
function InsertarDatos(data) {
    let table = document.getElementById("tabla").getElementsByTagName('tbody')[0]
    let Fila = table.insertRow(table.length)
    columna1 = Fila.insertCell(0).innerHTML = data.ID
    columna2 = Fila.insertCell(1).innerHTML = data.Nom
    columna3 = Fila.insertCell(2).innerHTML = data.Marc
    columna4 = Fila.insertCell(3).innerHTML = data.Fven
    columna4 = Fila.insertCell(4).innerHTML = `<input class="submit" type="button" onClick="Editarr(this)" value="Editar" >
                                               <input class="submit" type="button" onClick="Borrarr(this)" value="Borrar" >`
    document.getElementById("ID").focus()
    Vaciar()
}

function Vaciar() {
    document.getElementById("ID").value = ""
    document.getElementById("Nom").value = ""
    document.getElementById("Marc").value = ""
    document.getElementById("Fven").value = ""
    Fila = null
}
function Editarr(td) {
    Fila = td.parentElement.parentElement
    document.getElementById("ID").value = Fila.cells[0].innerHTML
    document.getElementById("Nom").value = Fila.cells[1].innerHTML
    document.getElementById("Marc").value = Fila.cells[2].innerHTML
    document.getElementById("Fven").value = Fila.cells[3].innerHTML
}
function Actualizar(DataForm) {
    Fila.cells[0].innerHTML = DataForm.ID
    Fila.cells[1].innerHTML = DataForm.Nom
    Fila.cells[2].innerHTML = DataForm.Marc
    Fila.cells[3].innerHTML = DataForm.Fven
    document.getElementById("ID").focus()
}
function Borrarr(td) {
    if (confirm('¿Desea borrar el Item?')) {
        row = td.parentElement.parentElement
        document.getElementById("tabla").deleteRow(row.rowIndex)
        Vaciar()
    }
}
