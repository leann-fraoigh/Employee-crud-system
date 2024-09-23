export interface Employee {
  /* Уникальный идентификатор. */
  id: string;
  /* Имя. */
  name: string;
  /* Должность. */
  role: Role;
  /* Статус. */
  isArchive: boolean;
  /* Телефон. */
  phone: string;
  /* День рождения. */
  birthday: string;
}

export type Role = 'driver' | 'cook' | 'waiter';

export const roleMap = {
  "driver": "Водитель",
  "cook": "Повар",
  "waiter": "Официант"
} satisfies Record<Role, string>;

export type EmployeePatch = Omit<Employee, 'id' >;

export interface Form {
  /* Имя. */
  name?: string;
  /* Должность. */
  role?: string;
  /* Статус. */
  isArchive?: boolean;
  /* День рождения. */
  birthday?: string;
}