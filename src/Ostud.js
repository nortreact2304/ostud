function Ostud({ostukorv, kustutaToode, toggleKasKorvis}) {
    const kustutaKlikk = (index) => {
        kustutaToode(index)
    }

    //CRUD operats


    return (
        <div className="ostud">
            {
            ostukorv.map((ost, index) => {
                let reaKlassid = "row"
                if (ost.korvis) {
                    reaKlassid += " korvis"
                }
                return (
                    <div className={reaKlassid} key={index}>
                        <input 
                            className="col-1" 
                            type="checkbox"  
                            defaultChecked={ost.korvis}
                            onChange={() => toggleKasKorvis(index)}
                        />
                        <div className="col-5">{ost.nimetus}</div>
                        <div className="col-3">{ost.kogus}</div>
                        <div className="col-2">{ost.yhik}</div>
                        <button 
                            className="col-1 btn btn-link"
                            onClick={() => kustutaKlikk(index)}
                        >
                                X
                        </button>
                    </div>
                )
            })  
            }
        </div>
    )
}

export default Ostud