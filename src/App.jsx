import "./App.css";
import GList from "./components/GList";
import PList from "./components/PList";
import { createContext, useReducer, useRef } from "react";

export const toCleanStateContext = createContext();
export const toCleanDispatchContext = createContext();

const mockdata = {
    group: [
        {
            target: "group",
            id: 1,
            badgeId: 1,
            place: "거실",
            toClean: "tv 닦기",
            deadLine: "D-2",
        },
        {
            target: "group",
            id: 2,
            badgeId: 2,
            place: "화장실",
            toClean: "거울 닦기",
            deadLine: "D-day",
        },
    ],
    personal: [
        {
            target: "personal",
            id: 1,
            badgeId: 1,
            place: "A의 방",
            toClean: "책상 정리",
            deadLine: "D-2",
        },
        {
            target: "personal",
            id: 2,
            badgeId: 2,
            place: "B의 방",
            toClean: "이불 개기",
            deadLine: "D-day",
        },
    ],
};

function reducer(data, action) {
    switch (action.type) {
        case "CREATE":
            return {
                ...data,
                [action.data.target]: [
                    ...data[action.data.target],
                    action.data,
                ],
            };
        case "UPDATE":
            return data[action.target].map((item) => {
                if (String(item.id) === String(action.data.id)) {
                    return action.data;
                }
                return item;
            });
        case "DELETE":
            return data[action.target].filter(
                (item) => String(item.id) !== String(action.id)
            );
        default:
            return data;
    }
}

function App() {
    const [data, dispatch] = useReducer(reducer, mockdata);
    const idRef = useRef(3);

    const onCreate = (target, id, badgeId, place, toClean, deadLine) => {
        dispatch({
            type: "CREATE",
            data: {
                target,
                id: idRef.current++,
                badgeId,
                place,
                toClean,
                deadLine,
            },
        });
    };

    const onUpdate = (target, id, badgeId, place, toClean, deadLine) => {
        dispatch({
            type: "UPDATE",
            target,
            data: {
                target,
                id,
                badgeId,
                place,
                toClean,
                deadLine,
            },
        });
    };

    const onDelete = (target, id) => {
        dispatch({
            type: "DELETE",
            target,
            id,
        });
    };

    return (
        <div className="App">
            <toCleanDispatchContext.Provider
                value={{ onCreate, onUpdate, onDelete }}
            >
                <toCleanStateContext.Provider value={data}>
                    <GList />
                    <PList />
                </toCleanStateContext.Provider>
            </toCleanDispatchContext.Provider>
        </div>
    );
}

export default App;
