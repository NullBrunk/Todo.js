import { memo, useState } from "react";

const Search = memo(({setShowMarked, setFilter}) => {
    
    // Affiche "show" ou "hide" marked tasks au niveau de la checkbox
    // en fonction de si elle est checkée ou pas 
    const [isMarked, setIsMarked ] = useState("Hide");

    return (
        <form className="flex flex-col mt-16 mb-12">
            {/* Input to search for a task */}
            <div className="w-full flex m-auto rounded-md ring-1 ring-gray-300 text-xl focus:outline-none">
                <span className="flex items-center select-none px-4 text-gray-500 ">
                    <i className="bi bi-search m-auto"></i>
                </span>
                
                <input onChange={
                        (e) => setFilter(e.target.value)
                    } 
                    type="text"
                    className="bg-transparent py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none w-full" id="search" placeholder="Search for a task" 
                />
            </div>

            {/* Toggle to show/hide marked tasks */}
            <div className="flex mt-2 items-center">
                <input type="checkbox" onChange={
                        (e) => {
                            setShowMarked(e.target.checked)
                            setIsMarked(isMarked === "Hide" ? "Show" : "Hide");
                        }
                    } 
                    className="checkbox border-black" id="mark"
                />
                <label htmlFor="mark" className="text-base text-gray-900 ml-3 select-none">{isMarked} marked tasks</label>
            </div>
        </form>
    );
});

export default Search;