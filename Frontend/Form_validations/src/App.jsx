import { BrowserRouter } from "react-router-dom";
import PrivateRoutes from "../Routes/PrivateRoutes";

function App() {
  return (
    <BrowserRouter>
      <PrivateRoutes />
    </BrowserRouter>
  );
}

export default App;
