import { APIRoute } from './const';
import { Employee } from '../model';

export async function getEmployees(): Promise<Employee[] | void> {
  const apiUrl = new URL(APIRoute.Employees);
  const response = await fetch(`${apiUrl.toString()}`);

  // if (!response.ok) {
  //   throw new Error(`Failed to fetch list of employees.`);
  // }
  const responseJson = await response.json() as Employee[];
  return responseJson;
}

