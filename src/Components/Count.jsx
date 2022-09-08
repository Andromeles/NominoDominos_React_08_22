import { useState } from "react";

// Можно написать props, а потом работать как с объектом
export const Count = ({ city }) => {
    const [count, setCount] = useState(1)

    const handleClick = () => {
        setCount((prevCount) => prevCount + 1)
    }

    return <>
        <p>Count: {count}</p>
        <button type="button" onClick={handleClick}>Click</button>
        <p>{city}</p>
    </>

}
