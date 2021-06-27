import EditUser from "../../pages/EditUser";
import ListUsers from "../../pages/ListUsers";

const Routes = [
  {
    path: "/users",
    component: ListUsers,
  },
  {
    path: "/users/:userId",
    component: EditUser,
  },
];

export default Routes;
