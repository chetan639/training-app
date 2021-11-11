function CustomButton(props) {
    return (
        <>
            <h1>Its a component example!!</h1>
            <h1>My component name is {props.compName}</h1>
            <button onClick={props.action}>{props.buttonName}</button>
        </>
    )
}

export default CustomButton;