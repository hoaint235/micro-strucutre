import AddUser from "../../pages/AddUser";
import EditUser from "../../pages/EditUser";
import ListUsers from "../../pages/ListUsers";

const Routes = [
  {
    path: "/users",
    component: ListUsers,
  },
  {
    path: "/add-user",
    component: AddUser,
  },
  {
    path: "/users/:userId",
    component: EditUser,
  },
];

export default Routes;
