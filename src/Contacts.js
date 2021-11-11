import Clothing from "./assets/Clothing.json"

function Contacts() {
    return (
    <div>
        {Clothing.map((cloth)=><ul><li>{cloth.name}<button>Add</button></li></ul>)}
    </div>
    )
}

export default Contacts;