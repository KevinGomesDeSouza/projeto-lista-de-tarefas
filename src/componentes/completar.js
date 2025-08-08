export default function Completar(id,Tarefa,SetTarefa){
    const ArrayFiltrado = Tarefa.filter((el)=>{
    
    if(el.id == id && Object.keys(el.Style).length === 0){
        const marcar = {textDecoration:"line-through"}
        el.Style = marcar
        el.Completar = true
        return el
    }
    else if(el.id == id && Object.keys(el.Style).length != 0){
        el.Style = {}
        el.Completar = false
        return el

    }
    else{
        return el
    }
  })
  console.log(ArrayFiltrado)

  SetTarefa(ArrayFiltrado)
   
       
    
    
  }


