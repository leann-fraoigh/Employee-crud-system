import { useSelector } from "react-redux";
import { useParams, useFetcher } from "react-router-dom";
import { RootState } from '../../store';
// Кастомные хуки
import { useFromWithFetcher } from './useFormWithFetcher';
// Компоненты
import EmployeeEditForm from "./EmployeeEditForm";
// Типы
import { Employee } from "../../model";
// UI
import { Typography, Box } from "@mui/material";

export default function EmployeesEdit() {
  const fetcher = useFetcher();
  const { formState } = useFromWithFetcher(fetcher);
  const id = useParams<{ id: string }>().id?.slice(1) ?? '';
  const employee = useSelector((state: RootState) =>
    state.app.data.find((emp: Employee) => emp.id === id)
  );
  return (
    <>
      <Box sx={{ width: '100%', display: 'flex', flexWrap: 'wrap', flexDirection: 'column',  mb: 1.5, gap: 1.5 }} >
        <Typography variant="h5" component="h2">Редактировать данные о сотруднике</Typography>
        {employee ? (
          <EmployeeEditForm data={employee} state={formState} method="PATCH" fetcher={fetcher}/>
        ) : (
          <div>К сожалению, мы не нашли данных об этом сотруднике.</div>
        )}
      </Box>
    </>
  )
}
