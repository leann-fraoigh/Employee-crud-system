import { FetcherWithComponents } from 'react-router-dom';
// Компоненты
import { TextMaskInput } from './TextMaskInput';
// UI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import FormControl from '@mui/material/FormControl';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import NativeSelect from '@mui/material/NativeSelect';
import FormGroup from '@mui/material/FormGroup';
import Input from '@mui/material/Input';
import Check from '@mui/icons-material/Check';
// Типы
import { Employee } from "../../model";

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: 2.5,
  maxWidth: '440px',
};

interface Props {
  fetcher: FetcherWithComponents<never>;
  state: 'success' | 'initial' | 'submitting';
  data?: Employee;
  method: 'POST' | 'PATCH'
}

export default function EmployeeEditForm(props: Props) {
  const { method, fetcher, state } = props;
  const { name, birthday, phone, isArchive, role  } = props.data ?? {};

  const text = {
    title: method === 'POST' ? 'Добавление нового сотрудника' : 'Редактирование данных о сотруднике',
    callToAction: method === 'POST' ? 'Опубликовать' : 'Отредактировать',
    successMessage: method === 'POST' ? 'Данные добавленф.' : 'Даные отредактированы.', 
  }
  return (
    <fetcher.Form method={method} action='#' >
      <Box sx={ containerStyle }>
        <Typography gutterBottom variant="h5" component="h4" sx={{ width: '100%', mb: 0.5 }}>{text.title}</Typography>
        {/* Имя */}
        <TextField id="name" label="Имя" variant="standard" name='name' defaultValue={name} required />
        {/* Телефон */}
        <FormControl variant="standard">
          <InputLabel htmlFor="phone">Телефон</InputLabel>
          <Input
            defaultValue={phone}
            name="phone"
            id="phone"
            type='phone'
            required
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
            inputComponent={TextMaskInput as any}
          />
        </FormControl>
        {/* День рождения */}
        <FormControl variant="standard">
          <InputLabel htmlFor="birthday">День рождения</InputLabel>
          <Input
            defaultValue={birthday}
            name="birthday"
            id="birthday"
            type='birthday'
            required
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
            inputComponent={TextMaskInput as any}
          />
        </FormControl>
        {/* Должность */}
        <FormControl variant="standard" size="small" >
          <InputLabel htmlFor="role-select-small-label">Должность</InputLabel>
          <NativeSelect
            defaultValue={role}
            inputProps={{
              name: 'role',
              id: 'role-select-small-label',
            }}
            required
          > 
            <option value={''}></option>
            <option value={'driver'}>Водитель</option>
            <option value={'cook'}>Повар</option>
            <option value={'waiter'}>Официант</option>
          </NativeSelect>
        </FormControl>
        {/* Статус */}
        <FormGroup>
          <FormControlLabel
              control={
                <Checkbox name="isArchive" defaultChecked={isArchive} />
              }
              label="В архиве"
            />
        </FormGroup>
        {state !== 'success' ? (
          <Button size="small" variant="contained" sx={{ width: 'auto', alignSelf: 'center', mt: 0.5 }} type='submit' disabled={state === 'submitting'} >{text.callToAction}</Button>
        ) : ( 
          <Alert icon={<Check fontSize="inherit" />} severity="success">
            {text.successMessage}
          </Alert>
        )}
      </Box>
    </fetcher.Form>
  );
}