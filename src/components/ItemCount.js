import {useState} from "react"


const ItemCount = ({stock,initial,onAdd}) => {

    const [contador, setContador] = useState(0)

    return ( 
        <>
            <p>Contador : {contador}</p>
            <button onClick={()=>{setContador(contador+1) }} > + </button>
            <button onClick={()=>{ 
                 if (contador == 0){
                    return
                } else
                setContador(contador-1) }} > - </button>
            <button onClick={()=>{ console.log("Compra confirmada") }} > confirmar compra </button>
        </>
    );
}
 
export default ItemCount;