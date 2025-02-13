import { useState } from 'react';



export default function Todo() {

  const [listitem, setlistitem] = useState([]);
  const [charector, setcharector] = useState("");

  const collectingtext = (e) => {
    setcharector(e.target.value);
  }

  const addingInTodoList = () => {
    let newList = [...listitem, charector];
    setlistitem(newList)
    setcharector('');
  }

  const deletingitem = (indexToDelete) => {
    const afterdeletingList = listitem.filter((_, index) => index !== indexToDelete);
    setlistitem(afterdeletingList);
  }

  return (
    <div>
      <input value={charector} onChange={(e) => collectingtext(e)} placeholder='add your todos'></input>
      <button onClick={() => addingInTodoList()}>Add</button>
      {listitem.map((curr, index) => (
        <div key={`${curr}-${index}`}>
          <div>{curr}</div>
          <button onClick={() => deletingitem(index)}>Delete</button>
        </div>
      ))}
    </div>

  );
}