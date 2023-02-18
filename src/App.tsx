import "./styles.css";
import Dropdown from "./dropdown/Dropdown";
import {countries, users} from "./data";

export default function App() {
    return (
        <div className="App">
             <Dropdown data={countries} />

             <Dropdown data={users} />
        </div>
    );
}
