function Header(props) {
    return (
        <>
            <h1 style={{margin:"20px 20px 0"}}>{props.headerName}</h1>
            <hr style={{width:"95%"}}/>
        </>
        );
}

export default Header;