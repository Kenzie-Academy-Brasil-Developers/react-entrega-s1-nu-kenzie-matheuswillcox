function Card({transaction, excluirCard, id}){

    return (
        <div style={{display: "flex", gap:"50px"}}>
            {/* <div>{transaction.id}</div> */}
            <div>{transaction.description}</div>
            <div>{transaction.type}</div>
            <div>{transaction.value}</div>
            <button onClick={()=>excluirCard(id)}>Excluir</button>
        </div>
    )
}

export default Card

