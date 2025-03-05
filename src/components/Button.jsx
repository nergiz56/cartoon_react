export default function Button ({onSelect, children,isSelected}){

    //isSelected-> seçili butonum
    return(
        <li>
            <button className={isSelected ? "active" : undefined} onClick={onSelect}>{children}</button>
        </li>
    )
}