import { useState } from "react"
import ItemLista from "./ItemLista"
import { v4 } from "uuid"
import './ListaDeCompras.css'

function ListaDeCompras() {
    const [itensLista, setItensLista] = useState([])
    const [itemName, setItemName] = useState("")

    function handleChange(usuarioEscreve) {
        setItemName(usuarioEscreve.target.value)
    }

    function handleAdd() {
        if(itemName !== ""){
        const listaComNovoItem = itensLista.concat({itemName, id: v4()})
        setItensLista(listaComNovoItem)
        setItemName("");
        } else {
            return
        }
    }
    
    return(
        <div>
            <ul className="listaDeCompras"> 
            {itensLista.map((item) => (<ItemLista nomeItem={item.itemName} key={item.id}/>))}
            </ul>
            
            <div>
                <input type="text" value={itemName} onChange={handleChange}></input>
                <button onClick={handleAdd}>ENVIAR</button>
            </div>
        </div>
    )
}

export default ListaDeCompras