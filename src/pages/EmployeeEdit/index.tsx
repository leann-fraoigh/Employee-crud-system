import { useSelector } from "react-redux";
import { useParams, useFetcher } from "react-router-dom";
import { RootState } from '../../store';
// Кастомные хуки
import { useFromWithFetcher } from "../../shared/EmployeeForm/useFormWithFetcher";

// Компоненты
import { EmployeeForm } from "../../shared/EmployeeForm";
// Типы
import { Employee } from "../../model";
// UI
import Box from "@mui/material/Box";

export default function EmployeeEdit() {
  const fetcher = useFetcher();
  const { formState } = useFromWithFetcher(fetcher);
  const id = useParams<{ id: string }>().id?.slice(1) ?? '';
  const employee = useSelector((state: RootState) =>
    state.app.data.find((emp: Employee) => emp.id === id)
  );
  return (
    <>
      <Box sx={{ width: '100%', display: 'flex', flexWrap: 'wrap', flexDirection: 'column',  mb: 1.5, gap: 1.5 }} >
        {employee ? (
          <EmployeeForm data={employee} state={formState} method="PATCH" fetcher={fetcher}/>
        ) : (
          <div>К сожалению, мы не нашли данных об этом сотруднике.</div>
        )}
      </Box>
    </>
  )
}
