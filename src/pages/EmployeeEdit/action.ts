import { ActionFunctionArgs } from "react-router-dom";
import { patchEmployee } from "../../api/patch-employee";
import { EmployeePatch, Role } from "../../model";

export async function action({ request, params }: ActionFunctionArgs) {
  const cuttentEmployeeId = params.id?.slice(1) ?? '';

  switch (request.method) {
    case "PATCH": {
      // TODO: Возможно, доработать, чтобы не отправлялось, если данные не изменились
      const formData = await request.formData();
      const formObject = Object.fromEntries(formData.entries());
      
      const advertisement: EmployeePatch = {
        name: formObject.name as string,
        role: formObject.role as Role,
        birthday: formObject?.birthday as string,
        phone: formObject?.phone as string,
        isArchive: Boolean(formObject?.isArchive),
      };

      await patchEmployee(advertisement, cuttentEmployeeId);

      return patchEmployee;
      break;
    }
    default: {
      throw new Error('Method not allowed');
    }
  }
}