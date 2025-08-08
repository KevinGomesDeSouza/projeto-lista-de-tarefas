
export default function AddTarefa (Tarefa,SetTarefa,TituloTarefa,Categoria){

    if(TituloTarefa != undefined && TituloTarefa != '' && Categoria != '' && Categoria != undefined){
        
        

        return (

            SetTarefa([...Tarefa,{
                id: Math.random()*100000,
                TituloTarefa: TituloTarefa,
                Categoria: Categoria,
                Style:{},
                Completar:false
            }]
                    
  
                 
                
                )

        )
    }
    


        
    
}