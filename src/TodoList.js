import { useState } from 'react';
import styled from 'styled-components';
import GlobalStyles from './GlobalStyles';

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
      <TaskInput
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <AddButton type="button" value="Add" onClick={handleAdd} />
      <TaskList>
        <TaskHeader>Tasks</TaskHeader>
        {list.map((item) => {
          return <Task key={item.id}>{item.task}</Task>;
        })}
      </TaskList>
      <GlobalStyles />
    </>
  );
}

const TaskInput = styled.input`
  border: none;
  border-bottom: 1px solid #e9ecef;
  margin: 15px;
  padding: 5px;

  &:focus {
    outline: 1px solid #e9ecef;
  }
`;

const AddButton = styled.input`
  background-color: #748ffc;
  color: white;
  border: none;
  padding: 8px 32px;
  border-radius: 14px;
  font-weight: bold;
`;

const TaskHeader = styled.h1`
  font-size: 2rem;
  color: #868e96;
`;

const TaskList = styled.ul`
  list-style-type: none;
`;

const Task = styled.li`
  padding: 6px;
  color: #212529;

  &::before {
    content: '✓  ';
  }
`;
