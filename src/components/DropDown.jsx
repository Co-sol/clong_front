import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const DropDown = ({ style }) => {
    return (
        <div class="dropdown-center">
            <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ ...style }}
            >
                Centered dropdown
            </button>
            <ul class="dropdown-menu">
                <li>
                    <a class="dropdown-item" href="#">
                        Action
                    </a>
                </li>
                <li>
                    <a class="dropdown-item" href="#">
                        Action two
                    </a>
                </li>
                <li>
                    <a class="dropdown-item" href="#">
                        Action three
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default DropDown;
