import "./GroupHomePage.css";
import GList from "../components/GList";
import PList from "../components/PList";
import { createContext, useReducer, useRef } from "react";

export const toCleanStateContext = createContext();
export const toCleanDispatchContext = createContext();

// mockdata={group:[], person:[]} 으로 카테고리 나눴었는데, 한번에 모든 정보를 저장하게 하는 형태가
// 나중에 group별(장소 기준), personal별(name 기준), 전체(각 개인의 모든 checklist) 에서 Data에 접근할 때 유리할거라 판단함
// 그래도 target을 group, person
const mockdata = [
    {
        target: "group",
        id: 1,
        name: "A",
        badgeId: 1,
        place: "거실",
        toClean: "tv 닦기",
        deadLine: "D-2",
    },
    {
        target: "group",
        id: 2,
        name: "B",
        badgeId: 2,
        place: "화장실",
        toClean: "거울 닦기",
        deadLine: "D-day",
    },
    {
        target: "group",
        id: 2,
        name: "B",
        badgeId: 4,
        place: "화장실",
        toClean: "욕조 닦기",
        deadLine: "D-day",
    },
    {
        target: "group",
        id: 2,
        name: "B",
        badgeId: 4,
        place: "화장실",
        toClean: "욕조 닦기",
        deadLine: "D-day",
    },
    {
        target: "group",
        id: 2,
        name: "B",
        badgeId: 4,
        place: "화장실",
        toClean: "욕조 닦기",
        deadLine: "D-day",
    },
    {
        target: "group",
        id: 2,
        name: "B",
        badgeId: 4,
        place: "화장실",
        toClean: "욕조 닦기",
        deadLine: "D-day",
    },
    {
        target: "group",
        id: 2,
        name: "B",
        badgeId: 4,
        place: "화장실",
        toClean: "욕조 닦기",
        deadLine: "D-day",
    },
    {
        target: "group",
        id: 2,
        name: "B",
        badgeId: 4,
        place: "화장실",
        toClean: "욕조 닦기",
        deadLine: "D-day",
    },
    {
        target: "person",
        id: 3,
        name: "A",
        badgeId: 1,
        place: "책상",
        toClean: "책상 정리",
        deadLine: "D-2",
    },
    {
        target: "person",
        id: 4,
        name: "B",
        badgeId: 2,
        place: "침대",
        toClean: "이불 개기",
        deadLine: "D-day",
    },
];

function reducer(data, action) {
    switch (action.type) {
        case "CREATE":
            return [...data, action.data];
        case "UPDATE":
            return data.map((item) => {
                if (String(item.id) === String(action.data.id)) {
                    return action.data;
                }
                return item;
            });
        case "DELETE":
            return data.filter((item) => String(item.id) !== String(action.id));
        default:
            return data;
    }
}

function GroupHomePage() {
    const [data, dispatch] = useReducer(reducer, mockdata);
    const idRef = useRef(5);

    const onCreate = (target, id, name, badgeId, place, toClean, deadLine) => {
        dispatch({
            type: "CREATE",
            data: {
                target,
                id: idRef.current++,
                name,
                badgeId,
                place,
                toClean,
                deadLine,
            },
        });
    };

    const onUpdate = (target, id, name, badgeId, place, toClean, deadLine) => {
        dispatch({
            type: "UPDATE",
            target,
            data: {
                target,
                id,
                name,
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
        <div className="GroupHome">
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

export default GroupHomePage;
