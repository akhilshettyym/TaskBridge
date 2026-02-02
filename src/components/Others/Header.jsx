import { headerChildDiv, headerClassBtn, headerClassH1, headerClassSpan, headerLoadingDiv, headerMainDiv } from "../../constants/imports";

const Header = ({ data, handleLogout, orgData }) => {

    if (!data) {
        return <div className={headerLoadingDiv}>Loading...</div>
    }

    const firstName = data.firstName.replace(/\b\w/g, char => char.toUpperCase());
    const lastName = data.lastName.replace(/\b\w/g, char => char.toUpperCase());
    const renderName = `${firstName} ${lastName}`;

    return (
        <div className={headerMainDiv}>
            <div className={headerChildDiv}>
                <h1 className={headerClassH1}> Hello <span className={headerClassSpan}> {renderName ?? ""} 👋</span> </h1>
                {/* <h1 className=""><span className=""> {orgData?.name ?? ""} </span> </h1> */}
                <button onClick={handleLogout} className={headerClassBtn}>Logout</button>
            </div>
        </div>
    )
}

export default Header;