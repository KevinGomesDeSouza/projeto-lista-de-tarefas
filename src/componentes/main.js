import { useState } from "react"
import AddTarefa from "./addtarefa"
import TarefaEmSi from "./tarefa"
import {Crescente,Decrescente} from "./ordem"
export default function Main(props){
const [TituloTarefa,SetTituloTarefa] = useState()
const [Categoria,SetCategoria] = useState()
const [FiltroCategoria, SetFiltroCategoria] = useState("Todas")
const [Pesquisa,SetPesquisa] = useState('')


    return(
        <main>
            <div id="titulo">
                <h1>Lista de Tarefas</h1>
            </div>
            
            <section>
                <h2>Pesquisar:</h2>
                <input placeholder="Digite para pesquisar" onChange={(el)=>{SetPesquisa(el.currentTarget.value)}}></input>
                <hr></hr>
            </section>
            
            <section>
                <h2>Filtrar:</h2>
                <div id="FiltrosContainer">
                    <div id="Status">
                        <p>Status</p>
                        <select onChange={(el)=>{SetFiltroCategoria(el.currentTarget.value)}}>
                            <option value={"Todas"}>Todas</option>
                            <option value={"Trabalho"}>Trabalho</option>
                            <option value={"Pessoal"}>Pessoal</option>
                            <option value={"Estudo"}>Estudo</option>
                            <option value={"Completas"}>Completas</option>
                        </select>
                    </div>
                    <div id="OrdemAlfa">
                        <p>Ordem alfabética</p>
                        <button onClick={()=>{Crescente(props.Tarefa,props.SetTarefa)}}>Asc</button>
                        <button onClick={()=>{Decrescente(props.Tarefa,props.SetTarefa)}}>Desc</button>
                    </div>
                </div>
                <hr></hr>
            </section>
            <section>
                {props.Tarefa.map((element)=>{
                    if(FiltroCategoria == "Todas" && Pesquisa == '')
                    return (
                        <TarefaEmSi id={element.id} TituloTarefa = {element.TituloTarefa} Categoria ={element.Categoria} Tarefa = {props.Tarefa} SetTarefa ={props.SetTarefa} Style = {element.Style}></TarefaEmSi>
                    )
                    else if(FiltroCategoria == "Todas" && Pesquisa != ''){
                        const regEx = RegExp(`^${Pesquisa}`,"i")
                        if(element.TituloTarefa.match(regEx)){
                         return (
                        <TarefaEmSi id={element.id} TituloTarefa = {element.TituloTarefa} Categoria ={element.Categoria} Tarefa = {props.Tarefa} SetTarefa ={props.SetTarefa} Style = {element.Style}></TarefaEmSi>
                    )   
                        }
                    }
                    else if(FiltroCategoria != "Todas" && Pesquisa == '' && FiltroCategoria != "Completas"){
                        if(FiltroCategoria == element.Categoria){
                            return(
                                <TarefaEmSi id={element.id} TituloTarefa = {element.TituloTarefa} Categoria ={element.Categoria} Tarefa = {props.Tarefa} SetTarefa ={props.SetTarefa} Style = {element.Style}></TarefaEmSi>
                            )

                        }
                    }
                    else if(FiltroCategoria != "Todas" && Pesquisa != '' && FiltroCategoria != "Completas"){
                        const regEx = RegExp(`^${Pesquisa}`,"i")
                        if(FiltroCategoria == element.Categoria && element.TituloTarefa.match(regEx) ){
                            return(
                                <TarefaEmSi id={element.id} TituloTarefa = {element.TituloTarefa} Categoria ={element.Categoria} Tarefa = {props.Tarefa} SetTarefa ={props.SetTarefa} Style = {element.Style}></TarefaEmSi>
                            )

                        }
                    }
                    else if(FiltroCategoria == "Completas" && Pesquisa == ''){
                        if(element.Completar == true){
                            return (
                            <TarefaEmSi id={element.id} TituloTarefa = {element.TituloTarefa} Categoria ={element.Categoria} Tarefa = {props.Tarefa} SetTarefa ={props.SetTarefa} Style = {element.Style}></TarefaEmSi>
                        )
                    }
                    
                    }
                    else if(FiltroCategoria == "Completas" && Pesquisa != ''){
                        const regEx = RegExp(`^${Pesquisa}`,"i")
                        if(element.Completar == true && element.TituloTarefa.match(regEx)){
                            return (
                            <TarefaEmSi id={element.id} TituloTarefa = {element.TituloTarefa} Categoria ={element.Categoria} Tarefa = {props.Tarefa} SetTarefa ={props.SetTarefa} Style = {element.Style}></TarefaEmSi>
                        )
                    }
                    
                    }

                })}
            </section>

            <section>
                <hr></hr>
                <h2>Criar Tarefa:</h2>
                <input placeholder="Digite o titulo" onChange={(el)=>{SetTituloTarefa(el.currentTarget.value)}}></input>
                <select onChange={(el)=>{SetCategoria(el.currentTarget.value)}}>
                    <option value="">Seleciona uma categoria</option>
                    <option value="Trabalho">Trabalho</option>  
                    <option value="Pessoal">Pessoal</option>  
                    <option value="Estudo">Estudo</option>          
                </select>
                <button onClick={()=>{AddTarefa(props.Tarefa,props.SetTarefa,TituloTarefa,Categoria)}}>Criar Tarefa</button>
            </section>



                
        </main>

    )
}