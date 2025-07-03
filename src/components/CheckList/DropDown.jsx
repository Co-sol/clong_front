import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const DropDown = ({ title, style, data, setCreateData, createData }) => {
    return (
        <div class="dropdown-center">
            <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ ...style }}
            >
                {createData.place || title}
            </button>
            <ul class="dropdown-menu">
                {data.map((item) => (
                    <li
                        class="text-center"
                        onClick={() => {
                            setCreateData({
                                ...createData,
                                place: item.place,
                            });
                        }}
                    >
                        <a class="dropdown-item" href="#">
                            {item.place}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DropDown;
