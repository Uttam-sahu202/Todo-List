import { useState } from 'react';



export default function Todo() {

  const [listitem, setlistitem] = useState([]);
  const [charector, setcharector] = useState("");

  function collectingtext(e) {
    setcharector(e.target.value);
  }


  function addingInTodoList() {
    let temp = [...listitem];
    temp.push(charector);
    setlistitem(
      temp
    )

    console.log(listitem);
    setcharector('');

  }


  function Todolist() {
    function deletingitem(item, index) {
      const afterdeletingList = listitem.filter((_, i) => i !== index);
      setlistitem(afterdeletingList);
    }

    const list = listitem.map((item, index) => {
      return (<li>{item}
        <button key={index} onClick={() => deletingitem(item, index)}>Delete</button>
      </li>)
    })




    return list;
  }


  return (
    <div>
      <input value={charector} onChange={(e) => collectingtext(e)} placeholder='add your todos'></input>
      <button onClick={() => addingInTodoList()}>Add</button>
      <Todolist />
    </div>

  );
}