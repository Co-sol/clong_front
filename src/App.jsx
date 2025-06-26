import "./App.css";
import GList from "./components/GList";
import PList from "./components/PList";
import { createContext } from "react";

let mockdata = [
    {
        id: 1,
        badgeId: 1,
        place: "거실",
        toClean: "tv 닦기",
        deadLine: "D-2",
    },
    {
        id: 2,
        badgeId: 2,
        place: "A의 방",
        toClean: "바닥 쓸기",
        deadLine: "D-day",
    },
];

export const toCleanContext = createContext();

function App() {
    return (
        <div className="App">
            <toCleanContext.Provider value={{ mockdata }}>
                <GList />
                <PList />
            </toCleanContext.Provider>
        </div>
    );
}

export default App;
