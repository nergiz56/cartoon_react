export default function Button ({onSelect, children}){

    return(
        <li>
            <button onClick={onSelect}>{children}</button>
        </li>
    )
}