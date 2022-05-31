function TotalMoney({listTransactions}){

    return(
        <div>
            
            {listTransactions.reduce((acc,next)=> acc + next.value, 0)}

        </div>
    )
}

export default TotalMoney