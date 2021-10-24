import { useState } from 'react';

export default function Todo() {
  let [taskName, setTaskName] = useState('');
  const [list, setList] = useState([]);
  let idNumber = 0;

  function handleAdd() {
    setList([
      ...list,
      {
        id: idNumber,
        task: taskName,
      },
    ]);

    idNumber++;

    setTaskName('');
  }

  return (
    <>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <input type="button" value="Add" onClick={handleAdd} />
      <ul>
        Tasks:
        {list.map((item) => {
          return <li key={item.id}>{item.task}</li>;
        })}
      </ul>
    </>
  );
}
