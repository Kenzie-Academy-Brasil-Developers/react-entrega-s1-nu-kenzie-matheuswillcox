import Form from "../../components/Form";
import List from "../../components/List";
import TotalMoney from "../../components/TotalMoney";
import Filters from "../../components/Filters";
import { useState } from "react";
import "./styles.css";

function Dashboard() {
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
      <header className="header">
        <h1 className="h1">
          Nu<span className="span">Kenzie</span>
        </h1>
        <button className="headerButton">Início</button>
      </header>
      <main className="mainDash">
        <div className="divBoxLeft">
          <div className="divBoxLeftTop">
          <Form
            filterTransactions={filterTransactions}
            setFilterTransactions={setFilterTransactions}
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          />
          </div>
          <TotalMoney listTransactions={filterTransactions} />
        </div>
        <div className="divBoxRight">
          <Filters filters={filters} />
          <List
            excluirCard={excluirCard}
            listTransactions={filterTransactions}
          />
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
