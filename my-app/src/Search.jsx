export default function Search({searchText, setSearchText}){
    
    // let placeholderText = displayLanguage ? "Cherchez..." : "Search..."

    return(
        <div className="search-container">
            <input type="text" placeholder="Cherchez..." onChange={(e) => setSearchText(e.target.value)} />
        </div>
    )
}