import DisplayList from "./DisplayList";
import useFetch from "./useFetch";

const NewStand = () => {

    const {data: newStand, isPending, error} = useFetch('http://localhost:9000/NewStand');
    return ( 
        <div className="newstand">
            {isPending && <div>loading....</div> }
            {error && <div> {error} </div> }
            <div className="newstand-style"> {newStand && < DisplayList  newStand = {newStand} />} </div>
            
        </div>
     );
}
 
export default NewStand;