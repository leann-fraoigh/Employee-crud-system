import { useFetcher } from "react-router-dom";
import { useSelector } from 'react-redux';

// Кастомные хуки
import { useFromWithFetcher } from "../../shared/EmployeeForm/useFormWithFetcher";
// Компоненты
import { EmployeeForm } from "../../shared/EmployeeForm";
// UI
import Box from "@mui/material/Box";
// Типы
import { RootState } from '../../store';
// Хелперы
import { getNewID } from './getNewId';

export default function EmployeeAdd() {
  const fetcher = useFetcher();
  const { formState } = useFromWithFetcher(fetcher);
  const employee = useSelector((state: RootState) => state.app.data);
  const id = getNewID(employee);

  return (
    <>
      <Box sx={{ width: '100%', display: 'flex', flexWrap: 'wrap', flexDirection: 'column',  mb: 1.5, gap: 1.5 }} >
        <EmployeeForm state={formState} method="POST" fetcher={fetcher} newId={id} />
      </Box>
    </>
  )
}
