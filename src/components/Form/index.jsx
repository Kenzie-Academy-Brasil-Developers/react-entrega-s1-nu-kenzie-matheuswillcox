import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./styles.css";

function Form({
  listTransactions,
  setListTransactions,
  setFilterTransactions,
  filterTransactions,
}) {
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");

  function addForm(newForm) {
    setFilterTransactions([...filterTransactions, newForm]);
    setListTransactions([...listTransactions, newForm]);
    reset();
  }
  function reset() {
    setType("");
    setDescription("");
    setValue("");
  }

  return (
  
    <>

    <header>
      <h1>Nu<span>Kenzie</span></h1>
      <button>Inirio</button>
      </header>
    <form onSubmit={(event) => event.preventDefault()}>
      <h3>Descrição</h3>
      <input
        className="formValorInput"
        value={value}
        type="number"
        placeholder="Valor"
        onChange={(event) => setValue(Number(event.target.value))}
      ></input>
      <input
        value={description}
        placeholder="Descrição"
        onChange={(event) => setDescription(event.target.value)}
      ></input>
      <select
        value={type}
        onChange={(event) => {
     
          setType(event.target.value);
        }}
        name="select"
      >
        <option value="">Selecione</option>
        <option value="entrada">Entrada</option>
        <option value="saída">Saída</option>
      </select>
      <button
        disabled={!type || !description || !value ? true : false}
        onClick={() => addForm({ id: uuidv4(), description, type, value })}
      >
        Enviar
      </button>
    </form>
    </>
  );
}
export default Form;
