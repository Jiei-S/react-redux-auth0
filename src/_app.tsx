import store from "./modules";
import { Provider } from "react-redux";
import { Project } from "./pages/projects";

function App() {
  return (
    <Provider store={store}>
      <Project />
    </Provider>
  );
}

export default App;
