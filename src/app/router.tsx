import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate

} from "react-router-dom";

import Employees from '../pages/Employees/index.tsx';
import { loader as employeesLoader } from '../pages/Employees/loader.ts';
import EmployeeEdit from '../pages/EmployeeEdit/index.tsx';
import { action as employeeEditAction } from '../pages/EmployeeEdit/action.ts';
import Root from '../pages/Root.tsx';
import Error from '../pages/Error.tsx';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<Error />}>
      <Route index element={<Navigate to="/employees" />} />
      <Route
        path="/employees"
        element={<Employees />}
        errorElement={<Error />}
        loader={employeesLoader}
      ></Route>
      <Route
        path="/employees/:id"
        element={<EmployeeEdit />}
        errorElement={<Error />}
        action={employeeEditAction}
      ></Route>
    </Route>
  )
);