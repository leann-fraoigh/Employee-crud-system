
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import { router }  from './router.tsx';
import { init } from './initial.ts';
import { Provider } from 'react-redux';
import { store } from '../store/index.ts';
import { setErrorStatus } from '../store/sclices/app.slice.ts';

import '../assets/css/index.pcss';
import '@fontsource/roboto/cyrillic-400.css'
import '@fontsource/roboto/cyrillic-500.css'
import CssBaseline from '@mui/material/CssBaseline';




try {
  init(store.dispatch);
} catch (err) {
  console.error(err);
  store.dispatch(setErrorStatus(true));
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  {/* <> */}
    <CssBaseline />
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  {/* </> */}
  </StrictMode>,
)
