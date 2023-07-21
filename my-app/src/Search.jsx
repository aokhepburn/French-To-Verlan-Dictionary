export default function Search({searchText, setSearchText}){
    

    return(
        <div className="search-container">
            <input type="text" placeholder="Cherchez..." onChange={(e) => setSearchText(e.target.value)} />
        </div>
    )
}