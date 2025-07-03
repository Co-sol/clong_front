import { Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const DropDown = ({ title, targetPlaceData, setCreateData, createData }) => {
    return (
        <Dropdown
            style={{
                marginBottom: "2.1vw",
                width: "130px",
                height: "43px",
                fontFamily: "sans-serif, Noto Sans KR",
            }}
        >
            <Dropdown.Toggle
                id="dropdown-basic"
                className="w-100"
                style={{
                    backgroundColor: "#F5F5F5",
                    color: "rgb(117,117,117)",
                    border: "none",
                    borderRadius: "15px",

                    height: "45px",
                    width: "20px",

                    fontSize: "1.1rem",
                }}
            >
                {createData.place || title}
            </Dropdown.Toggle>

            <Dropdown.Menu
                className="text-center w-100"
                drop="down-centered"
                style={{
                    backgroundColor: "transparent",
                    border: "none",
                }}
            >
                {targetPlaceData.map((item) => (
                    <Dropdown.Item
                        key={item.place}
                        onClick={() =>
                            setCreateData({
                                ...createData,
                                place: item.place,
                            })
                        }
                        style={{
                            backgroundColor: "#ffffff",
                            color: "black",
                            transform: "translate(-124.9px,-7px)",

                            width: "120px",
                            height: "40px",
                            border: "1px solid rgb(210,210,210)",

                            paddingTop: "7px",
                        }}
                    >
                        {item.place}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default DropDown;
