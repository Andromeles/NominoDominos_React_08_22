

export const Child = (props) => {
    const handleClick = () => {
        props.handleChengeNumber(prevCount => prevCount + 1);
    }

    return <>
        <p>{props.name}</p>
        <button onClick={handleClick}>Cliker</button>
    </>
}