import { TbForbid } from "react-icons/tb";
export default function Forbidmark() {
    return (
        <span className="me-1 position-relative">
            <TbForbid style={{ top: "1px" }}
                className="text-dark me-1 position-absolute fs-5" />
            <TbForbid className="text-white me-1 fs-6" />
        </span>
    );
}
