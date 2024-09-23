import { getEmployees } from "../../api/get-employees";

export async function loader() {
  const response = await getEmployees();
  
  if (response !== undefined) {
    return response;
  }
}
