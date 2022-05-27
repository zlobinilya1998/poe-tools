import './App.css';
import {Categories} from "./models/entities/League";
import ItemsTable from "./components/shared/ItemsTable";

function App() {
    return (
        <div className="app">
            <div className="app-container">
                <div className="drawer">Navigation drawer</div>
                <ItemsTable category={Categories.Fossil}/>
            </div>
        </div>
    );
}

export default App;
