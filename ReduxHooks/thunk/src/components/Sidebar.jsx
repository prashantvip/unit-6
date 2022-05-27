import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getList } from "../redux/action";

export const Sidebar = () => {
  const list = useSelector((store) => store.list);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getList());
  }, []);

  let off = 0;
  let per = 0;
  let oth = 0;

  for (let i = 0; i < list.length; i++) {
    if (list[i].tags.official) {
      off++;
    }
    if (list[i].tags.personal) {
      per++;
    }
    if (list[i].tags.other) {
      oth++;
    }
  }

  return (
    <div>
      <div className="flex">
        <div>All</div>
        <div>{list.length}</div>
      </div>
      <div className="flex">
        <div>Official</div>
        <div>{off}</div>
      </div>
      <div className="flex">
        <div>Personal</div>
        <div>{per}</div>
      </div>
      <div className="flex">
        <div>Others</div>
        <div>{oth}</div>
      </div>
    </div>
  );
};
