import { createContext } from "react";

const UserContext = createContext({
  user:{
    name: "NITIN",
    email: "nituukumar1112@gmail.com",
  },
});

export default UserContext;
