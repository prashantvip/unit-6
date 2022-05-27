import { Sidebar } from "./Sidebar"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getList } from "../redux/action";
export const Summary = ()=>{
    const list = useSelector((store) => store.list);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getList());
    }, []);
    let todo=0;
    let inProgress=0;
    let done=0;
    for (let i = 0; i < list.length; i++) {
        if (list[i].status=="todo") {
            todo++;
        }
        if (list[i].status=="inProgress") {
            inProgress++;
        }
        if (list[i].status=="done") {
            done++;
        }
      }
    return (
        <div className="flex">
            <Sidebar/>
            <div>
                <h3>Summary</h3>
                <div className="flex">
                    <div>Todo</div>
                    <div>{todo}</div>
                </div>
                <div className="flex">
                    <div>In Progress</div>
                    <div>{inProgress}</div>
                </div>
                <div className="flex">
                    <div>Done</div>
                    <div>{done}</div>
                </div>
            </div>
        </div>
    )
}