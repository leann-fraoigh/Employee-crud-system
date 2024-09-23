import { useLoaderData, Link } from "react-router-dom";
import { useEffect } from "react";
import { useAppDispatch } from "../../store/hooks";
import { setData } from "../../store/sclices/app.slice";
// Компоненты
import EmployeesList from "./EmployeesList";
// Типы
import { Employee } from "../../model";
// UI
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AddBox from "@mui/icons-material/AddBox";
import Tooltip from '@mui/material/Tooltip';

export default function Employees() {
  // TODO: Оптимистичная типизация. Можно подумать, как сделать строже
  const employees = useLoaderData() as Employee[];
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setData(employees));
  }, [dispatch, employees]);

  return (
    <>
      <Box sx={{ width: '100%', display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', mb: 1.5, gap: 1.5 }} >
        <Typography variant="h5" component="h2">Все сотрудники</Typography>
        <Link to={`new`} style={{textDecoration: 'none'}}>
          <Tooltip title="Добавить сотрудника">
            <AddBox fontSize='small' sx={{verticalAlign: 'text-bottom'}} />
          </ Tooltip>  
        </Link>
      </Box>
      <EmployeesList/>
    </>
  )
}
