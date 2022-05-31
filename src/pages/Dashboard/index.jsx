import Form from "../../components/Form";
import List from "../../components/List";
import TotalMoney from "../../components/TotalMoney";
import Filters from "../../components/Filters";
import { useState } from "react";

function Dashboard (){
    const [listTransactions, setListTransactions] = useState([]);
    
      const [filterTransactions, setFilterTransactions] =
        useState(listTransactions);
    
      const filters = {
        getAll: () => {
          setFilterTransactions(listTransactions);
        },
        getEntradas: () => {
          setFilterTransactions(
            listTransactions.filter((item) => item.type === "entrada")
          );
        },
        getSaidas: () => {
          setFilterTransactions(
            listTransactions.filter((item) => item.type === "saída")
          );
        },
      };
      const excluirCard = (id) => {
        setListTransactions(listTransactions.filter((item) => item.id !== id));
        setFilterTransactions(filterTransactions.filter((item) => item.id !== id));
      };

    return (
        <div>
        <Filters filters={filters} />
        <Form
          filterTransactions={filterTransactions}
          setFilterTransactions={setFilterTransactions}
          listTransactions={listTransactions}
          setListTransactions={setListTransactions}
        />
        <List excluirCard={excluirCard} listTransactions={filterTransactions} />
        <TotalMoney listTransactions={filterTransactions} />

        </div>
    )
}

export default Dashboard