import { ActionFunctionArgs, redirect } from "react-router-dom";
import { putEmployee } from "../../api/put-employee";
import { Employee, Role } from "../../model";

export async function action({ request, params }: ActionFunctionArgs) {
  const cuttentEmployeeId = params.id?.slice(1) ?? '';

  switch (request.method) {
    case "POST": {
      const formData = await request.formData();
      const formObject = Object.fromEntries(formData.entries());
      
      const advertisement: Employee = {
        id: formObject.employeeId as string,
        name: formObject.name as string,
        role: formObject.role as Role,
        birthday: formObject?.birthday as string,
        phone: formObject?.phone as string,
        isArchive: Boolean(formObject?.isArchive),
      };

      await putEmployee(advertisement, cuttentEmployeeId);

      // return putEmployee;
      return redirect('/employees');
      break;
    }
    default: {
      throw new Error('Method not allowed');
    }
  }
}