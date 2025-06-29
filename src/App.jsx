import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import CreateGroupPage from "./pages/CreateGroupPage";
import TutorialPage from "./pages/TutorialPage";
import CreateSpacePage from "./pages/CreateSpacePage";
import NoGroupPage from "./pages/NoGroupPage";
import { useAuthStatus } from "./hooks/useAuthStatus";
import GroupSpacePage from "./Pages/GroupSpacePage";
import { useState, useReducer, createContext, useRef } from "react";

export const toCleanStateContext = createContext();
export const toCleanDispatchContext = createContext();

// 한번에 모든 정보를 담고, map으로 찾을 생각 (첨엔, group/person으로 나눴었는데, 짜피 target=group/personal 정보도 저장하니 굳이 싶어 구분없앰)
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
        badgeId: 2,
        place: "화장실",
        toClean: "거울 닦기",
        deadLine: "D-day",
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
        badgeId: 2,
        place: "화장실",
        toClean: "거울 닦기",
        deadLine: "D-day",
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
        badgeId: 2,
        place: "화장실",
        toClean: "거울 닦기",
        deadLine: "D-day",
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

function App() {
    const { isLoggedIn, hasGroup } = useAuthStatus();
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
        <>
            <toCleanDispatchContext.Provider
                value={{ onCreate, onUpdate, onDelete }}
            >
                <toCleanStateContext.Provider value={data}>
                    <Routes>
                        <Route path="/" element={<LoginPage />} />
                        <Route path="/noGroup" element={<NoGroupPage />} />
                        <Route
                            path="/createGroup"
                            element={<CreateGroupPage />}
                        />
                        <Route path="/tutorial" element={<TutorialPage />} />
                        <Route
                            path="/createSpace"
                            element={<CreateSpacePage />}
                        />
                        <Route
                            path="/groupSpace"
                            element={<GroupSpacePage />}
                        />
                        <Route
                            path="/redirect"
                            element={
                                isLoggedIn ? (
                                    hasGroup ? (
                                        <Navigate to="/createSpace" replace />
                                    ) : (
                                        <Navigate to="/createGroup" replace />
                                    )
                                ) : (
                                    <Navigate to="/" replace />
                                )
                            }
                        />
                        <Route
                            path="*"
                            element={<div>잘못된 페이지입니다.</div>}
                        />
                    </Routes>
                </toCleanStateContext.Provider>
            </toCleanDispatchContext.Provider>
        </>
    );
}

export default App;
