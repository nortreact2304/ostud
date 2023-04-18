function Ostud({ostukorv}) {
    return (
        <div className="ostud">
            {
            ostukorv.map((ost, index) => {
                return (
                    <div className="row" key={index}>
                        <div className="col-7">{ost.nimetus}</div>
                        <div className="col-3">{ost.kogus}</div>
                    </div>
                )
            })  
            }
        </div>
    )
}

export default Ostud