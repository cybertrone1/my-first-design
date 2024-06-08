const DisplayList = ({newStand}) => {
    return ( 
        <div className="newstand-list">
            {
                newStand.map((newStands) => (
                    <div className="newstand-preview" key= {newStands.id}>
                        <div className="newstand-image">
                            <img src={newStands.image} alt={newStands.name} />
                        </div>
                            <div className="newstand-details">
                                <h3> {newStands.name} </h3>
                                <h4> {newStands.description} </h4>
                            </div>
                    </div>
                ))
            }
        </div> 
    );
}
 
export default DisplayList;