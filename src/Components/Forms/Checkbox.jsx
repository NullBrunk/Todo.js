/**
 * @param {function} onChange
 * @param {boolean} value
 * @param {string} htmlclass
 * @param {string} id 
 * @param {string} label  
 */
function Checkbox ({onChange, value = false, htmlclass = "", id = undefined, label = undefined}) {
    return (
        <>
            <input onChange={onChange} 
                checked={value}  
                className={("checkbox " + htmlclass )} 
                type="checkbox"
                id={id}
            />

            {label && <label htmlFor={id} className="text-base text-gray-900 ml-3 select-none">{label}</label>}
        </>
    )
}

export default Checkbox;