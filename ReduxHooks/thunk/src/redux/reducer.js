import { TOKEN , TASKS, LIST } from "./action";
const init = {token:{} , tasks:[],list:[]}
export const reducer = (store=init, { type, payload }) => {
  switch (type) {
    case TOKEN:
      return { ...store, token: payload };
      case TASKS:
        return { ...store, tasks: [...store.tasks,payload] };
        case LIST:
          return {...store, list:payload}
    default:
      return store;
  }
};
