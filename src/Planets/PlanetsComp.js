export const Planet = (props) => {
    return (
        <div>
            <h2> { props.gas ? props.name : '' } </h2>
        </div>
    );
}

