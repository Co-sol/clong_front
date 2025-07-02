import Header from "../components/Header";
import "./GroupSpacePage.css";
import PList from "../components/CheckList/PList";
import GList from "../components/CheckList/GList";

import { useState, useReducer, createContext, useRef } from "react";

const personMockData = [
    {
        name: "A",
        badgeId: 1,
        email: "A@email.com",
        pw: "1111",
        cleanSensitivity: 50,
    },
    {
        name: "B",
        badgeId: 2,
        email: "B@email.com",
        pw: "2222",
        cleanSensitivity: 80,
    },
    {
        name: "C",
        badgeId: 3,
        email: "C@email.com",
        pw: "333",
        cleanSensitivity: 30,
    },
    {
        name: "D",
        badgeId: 4,
        email: "D@email.com",
        pw: "444",
        cleanSensitivity: 20,
    },
];

// 한번에 모든 정보를 담고, map으로 찾을 생각 (첨엔, group/person으로 나눴었는데, 짜피 target=group/personal 정보도 저장하니 굳이 싶어 구분없앰)
const checkListMockData = [
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

export const toCleanStateContext = createContext();
export const toCleanDispatchContext = createContext();

function GroupSpacePage() {
    const [checkListData, dispatch] = useReducer(reducer, checkListMockData);
    const [personData, setPersonData] = useState(personMockData);
    const idRef = useRef(5);

    const onCreate = (target, name, badgeId, place, toClean, deadLine) => {
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
        <div className="GroupSpace">
            <toCleanDispatchContext.Provider
                value={{ onCreate, onUpdate, onDelete }}
            >
                <toCleanStateContext.Provider
                    value={{ checkListData, personData }}
                >
                    <Header />
                    <div className="GroupSpaceContent">
                        <div className="sidebar">사이드바</div>
                        <div className="middle">
                            <div className="mostCleanNeeded">
                                지금 가장 청소가 필요한 공간
                            </div>
                            <div className="space">공간</div>
                        </div>
                        <PList />
                    </div>
                </toCleanStateContext.Provider>
            </toCleanDispatchContext.Provider>
        </div>
    );
}

export default GroupSpacePage;
