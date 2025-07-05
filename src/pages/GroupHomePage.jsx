import Header from "../components/Header";
import GroupHome from "../components/GroupHome/GroupHome";

const GroupHomePage = () => {
    return (
        <>
            <Header />
            <checklistStateContext.Provider>
                <GroupHome />
            </checklistStateContext.Provider>
        </>
    );
};

export default GroupHomePage;
