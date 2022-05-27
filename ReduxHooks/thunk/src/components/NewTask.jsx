import { useState } from "react";
import {useDispatch} from "react-redux"
import {taskCreator, Tasks} from "../redux/action"
import { Sidebar } from "./Sidebar";
export const NewTask = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    status: "",
    tags: {},
    subtask: [],
    date: "",
  });
  const [subtask, setSubtask] = useState([]);
  const [text, setText] = useState("");
  const [tagStatus, setTagStatus] = useState({
    official: true,
    personal: true,
    other: true,
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setTask((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleRadio = (e) => {
    setTask((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCheckBox = (e) => {
    setTagStatus((prev) => ({
      ...prev,
      [e.target.name]: !tagStatus[e.target.name],
    }));
    if (tagStatus[e.target.name]) {
      setTask((prev) => ({
        ...prev,
        tags: { ...prev.tags, [e.target.name]: e.target.value },
      }));
    } else if (!tagStatus[e.target.name]) {
      //   setTag((prev) => {
      //     delete prev[e.target.name];
      //     return prev;
      //   });
      setTask((prev) => {
        delete prev.tags[e.target.name];
        return prev;
      });
    }
  };
  const handleDate = (e) => {
    setTask((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubtask = (e) => {
    setText(e.target.value);
  };
  const add = () => {
    setTask((prev) => ({ ...prev, subtask: [...prev.subtask,text] }));
    setText("")

  };
const create = ()=>{
    dispatch(taskCreator(task))
    window.location.reload ()
}
console.log(task)
  return (
    <div className="flex">
      <Sidebar/>
    <div>
      <input
        type="text"
        placeholder="Title"
        name="title"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="subtask"
        name="subtask"
        onChange={handleSubtask}
        value={text}
      />
      <button onClick={add}>ADD</button>
      {task.subtask.map((e) => (
        <div key={Math.random()*1000}>
          <span>{e} </span>
          <button
            onClick={() =>(
              setTask((prev) => { const a= prev.subtask.filter((el)=>el!=e) 
                return {...prev,subtask:a}
              })
      )}
          >
            X
          </button>
        </div>
      ))}
      <br />
      <textarea
        name="description"
        id=""
        cols="30"
        rows="10"
        placeholder="Description"
        onChange={handleChange}
      ></textarea>
      <br />
      <input type="radio" name="status" value="todo" onClick={handleRadio} />
      <span>Todo</span>
      <input
        type="radio"
        name="status"
        value="inProgress"
        onClick={handleRadio}
      />
      <span>In Progress</span>
      <input type="radio" name="status" value="done" onClick={handleRadio} />
      <span>Done</span>
      <br />
      <input
        type="checkbox"
        onChange={handleCheckBox}
        value="official"
        name="official"
      />
      <span>Official</span>
      <input
        type="checkbox"
        onChange={handleCheckBox}
        value="personal"
        name="personal"
      />
      <span>Personal</span>
      <input
        type="checkbox"
        onChange={handleCheckBox}
        value="others"
        name="other"
      />
      <span>Others</span>
      <br />
      <input type="date" onChange={handleDate} name="date" />
      <button onClick={create}>Create new task</button>
    </div>
    </div>
  );
};
