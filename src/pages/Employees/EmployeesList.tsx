import { useSelector } from 'react-redux';
import { RootState } from '../../store';
// UI
import { styled } from '@mui/material/styles';
import { Link } from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Tooltip from '@mui/material/Tooltip';
import TableCell, { tableCellClasses } from '@mui/material/TableCell'

import Edit from "@mui/icons-material/Edit";

export default function EmployeesList() {

  const employees = useSelector((state: RootState) => state.app.data);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.action.selected,
    },

  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Имя</StyledTableCell>
              <StyledTableCell align="right">Должность</StyledTableCell>
              <StyledTableCell align="right">Телефон</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map((employee) => (
              <StyledTableRow 
                key={employee.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <StyledTableCell component="th" scope="row">
                  <Link to={`:${employee.id}`} style={{textDecoration: 'none'}}>
                    {employee.name}
                    &nbsp;
                    <Tooltip title="Редактировать данные">
                      <Edit fontSize='small' sx={{verticalAlign: 'text-bottom'}} />
                    </ Tooltip>  
                  </Link>
                </StyledTableCell>
                <StyledTableCell align="right">{employee.role}</StyledTableCell>
                <StyledTableCell align="right">{employee.phone}</StyledTableCell>
              </StyledTableRow >
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
