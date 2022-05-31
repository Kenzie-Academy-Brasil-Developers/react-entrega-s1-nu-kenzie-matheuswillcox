function Filters({filters}){


    return(
        <div>
            <button onClick={()=>filters.getAll()}>Todos</button>
            <button onClick={()=>filters.getEntradas()}>Entradas</button>
            <button onClick={()=>filters.getSaidas()}>Despesas</button>
        </div>

    )
}

export default Filters