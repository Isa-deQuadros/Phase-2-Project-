

function Searchbar({handleingtheSearch}){

    return(
        <input type="text" placeholder="Search by Name and Genre"
                onChange={(synthEvent)=> handleingtheSearch(synthEvent.target.value)}/>
    )
}
export default Searchbar