function AgeResult(props) {
    return (
        <li>
            {" "}
            {props.result.name} tiene {props.result.age} años
            {props.result.country ? ` en ${props.result.country}` : "."}
        </li>
    );
}

export default AgeResult;
