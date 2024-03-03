import { Route, Routes } from "react-router-dom";
import { AppRoutes } from "./shared/router/routes";
import { HomeScreen } from "./home/ui/screens/HomeScreen";

function App() {
  return (
    <Routes>
      <Route path={AppRoutes.Home} element={<HomeScreen />} />
    </Routes>
  );
}

export default App;
