import { Employee } from "../../model";

// Предполагаем, что id в базе -- это числа.
export const getNewID = (employees: Employee[]): string => {
  const ids = employees.map((employee) =>  parseInt(employee.id, 10));
  const highestID = Math.max(...ids) + 1;
  return highestID.toString();
};
