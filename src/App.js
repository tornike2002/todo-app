import "./App.css";
import videobg from "./assets/pink.mov";
import AddToDoForm from "./components/AddToDoForm";
import CompletedTotal from "./components/CompletedTotal";
import ToDoListDest from "./components/ToDoListDest";
function App() {
  return (
    <div className="App">
      <div className="video-bg d-flex flex-column align-items-center justify-content-center">
        <div className="todo-elements">
          <AddToDoForm />
          <ToDoListDest />
          <CompletedTotal />
        </div>
      </div>
    </div>
  );
}

export default App;
