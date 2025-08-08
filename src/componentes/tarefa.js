import RemoverTarefa from "./removertarefa"
import Completar from "./completar"
export default function TarefaEmSi(props){
    
    
    return(
        <div className="Tarefa" key={props.id}>
            <div>
                <div id="TituloTarefa" style={props.Style}>{props.TituloTarefa}</div>
                <div id="Categoria" style={{ color: 'gray' }}>&#40;{props.Categoria}&#41;</div>
            </div>
            <div id="Botoes">
                <button id="completar" onClick={(el)=>{Completar(props.id, props.Tarefa, props.SetTarefa)}}>Completar</button>
                <button id="excluir" onClick={(el) => {RemoverTarefa(props.id, props.Tarefa, props.SetTarefa) }}>X</button>
            </div>

        </div>
    )
}