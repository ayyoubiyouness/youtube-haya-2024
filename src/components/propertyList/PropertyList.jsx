import './propertylist.css'

const PropertyList = () => {
   
    return (
        <div className='pList'>
            <div className="pListItem">
                <img src= "https://www.newworldhotels.com/wp-content/uploads/2014/05/Mobile-NWHBR-Exterior.jpg"
                alt="" 
                className="pListImg" />
                <div className="pListTitles">
                    <h1>Appartement</h1>
                    <h2>18 appartemenst</h2>
                </div>
            </div>

            <div className="pListItem">
                <img src= "https://www.swissotel.fr/assets/0/92/3686/3768/3770/6442451433/ae87da19-9f23-450a-8927-6f4c700aa104.jpg"
                alt="" 
                className="pListImg" />
                <div className="pListTitles">
                    <h1>Cabins</h1>
                    <h2>3 appartemenst</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src= "https://www.hilton.com/im/en/AMADOES/5322417/exterior-day-1-.jpg?impolicy=crop&cw=0%&ch=0%&gravity=NorthWest&xposition=0&yposition=0&rw=640&rh=262"
                alt="" 
                className="pListImg" />
                <div className="pListTitles">
                    <h1>Hotel</h1>
                    <h2>18 appartement</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcHYT8tvGbXbOlyz-ep94ZJg-HDCBaOb-j_NPj_96gFA&s"
                alt="" 
                className="pListImg" />
                <div className="pListTitles">
                    <h1>Villas</h1>
                    <h2>3 rooms</h2>
                </div>
            </div>
        </div>
    )
}

export default PropertyList
