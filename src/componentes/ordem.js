export function Crescente (Tarefa,SetTarefa){
    const ArrayOrdenado = [...Tarefa]
    ArrayOrdenado.sort((a,b)=>{return a.TituloTarefa.localeCompare(b.TituloTarefa)})
    SetTarefa(ArrayOrdenado)
    
}

export function Decrescente(Tarefa,SetTarefa){
    const ArrayOrdenado = [...Tarefa]
    ArrayOrdenado.sort((a,b)=>{return b.TituloTarefa.localeCompare(a.TituloTarefa)})
    SetTarefa(ArrayOrdenado)
    
}