import "./App.css";
import videobg from "./assets/pink.mov";
import AddToDoForm from "./components/AddToDoForm";
import CompletedTotal from "./components/CompletedTotal";
import ToDoListDest from "./components/ToDoListDest";
function App() {
  return (
    <div className="App">
      <div className="container-fluid video-bg d-flex flex-column align-items-center justify-content-center">
        <video className="video" autoPlay loop muted src={videobg}></video>
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
