import Card from "../Card";

function List({ listTransactions, excluirCard }) {
  return (
    <>
      {listTransactions.map((transaction, index) => (
        <Card
          excluirCard={excluirCard}
          transaction={transaction}
          key={index}
          id={transaction.id}
        />
      ))}
    </>
  );
}

export default List;
