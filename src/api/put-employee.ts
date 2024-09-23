import { APIRoute } from './const';
import { EmployeePatch } from '../model';

export async function putEmployee(data: EmployeePatch, id: string): Promise<EmployeePatch | void> {
  const apiUrl = new URL(APIRoute.Employees);
  const response = await fetch(`${apiUrl.toString()}/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(data)
  });
  if (!response.ok) {
    throw new Error(`Failed to patch advertisement`);
  }
  return;
}