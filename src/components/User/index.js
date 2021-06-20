import "./index.scss";

const User = ({ userType, title, setUserType, currentUser }) => {
    const isSelected = userType === currentUser;
    const handleUserClick = () => {
        setUserType(isSelected ? "" : userType);
    };
    return (
        <div className="User">
            <div className={`icon-container ${isSelected && "selected"}`} onClick={handleUserClick}>
                <span
                    className={`${userType}-icon ${isSelected && "selected"}`}
                ></span>
            </div>
            <h5 className="user-title">{title}</h5>
        </div>
    );
};

export default User;
