import { Provider } from "react-redux";
import "./App.css";
import TodoApp from "./component/TodoApp";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>TodoList App Faeze hadi</h1>
        <TodoApp />
      </div>
    </Provider>
  );
}

export default App;
