export default function RemoverTarefa(id,Tarefa,SetTarefa){ 
  const ArrayFiltrado = Tarefa.filter((el)=>{
    if(el.id != id){
        return el
    }
  })

  SetTarefa(ArrayFiltrado)
  
}