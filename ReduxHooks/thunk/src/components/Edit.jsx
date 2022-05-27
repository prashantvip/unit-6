import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getList } from "../redux/action";
import { Sidebar } from "./Sidebar";
export const Edit = () => {
  const list = useSelector((store) => store.list);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getList());
  }, []);
  return (
      <div className="flex">
          <Sidebar/>
    <div className="flex">
      <div>
        <h3>TODO</h3>
        {list.map((e) =>
          e.status === "todo" ? <div key={e.id}>{e.title}</div> : null
        )}
      </div>
      <div>
        <h3>IN PROGRESS</h3>
        {list.map((e)=>(
              e.status==="inProgress"? <div key={e.id}>{e.title}</div>:null
          ))}
      </div>
      <div>
        <h3>DONE</h3>
        {list.map((e)=>(
              e.status==="done"? <div key={e.id}>{e.title}</div>:null
          ))}
      </div>
    </div>
    </div>
  );
};
