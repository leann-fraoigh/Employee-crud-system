import { Outlet, useNavigation } from "react-router-dom";
// UI
import Typography from '@mui/material/Typography';

export default function Root() {
  const navigation = useNavigation();
  return (
    <>
      <Typography variant="h4" component="h1" className="sr-only">Личный кабинет</Typography>
      <div
        id="detail"
        className={
          `app-overlay ${navigation.state === "loading" ? "app-overlay--loading" : ""}`
        }
      >  
        <Outlet />
      </div>
    </>
  )
}
