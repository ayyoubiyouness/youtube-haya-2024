import './feauturedProp.css'

const FeauturedProp = () => {
  return (
    <div className='fp'>
      <div className="fpItem">
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1" alt="" className="fpImg" />
        <span className="fpName">Starry Sky Cabins</span>
        <span className="fpCity">city</span>
        <span className="fpPrice">Starting from $200</span>
        <div className="fpRating">
          <button>2.5</button>
          <span>Excellent</span>
        </div>

      </div>

      <div className="fpItem">
        <img src="https://www.camif-habitat.fr/wp-content/uploads/data/2021/11/20839/renovation-appartement.jpg" alt="" className="fpImg" />
        <span className="fpName">Ocean Heaven Hotel</span>
        <span className="fpCity">city</span>
        <span className="fpPrice">Starting from $80</span>
        <div className="fpRating">
          <button>2.5</button>
          <span>Excellent</span>
        </div>

      </div>
      <div className="fpItem">
        <img src="https://media.admagazine.fr/photos/65300bdda7dee5dd8ac5e683/16:9/w_2560%2Cc_limit/18th%2520apartment%2520-%2520wiercinski-studio%252016.jpg" alt="" className="fpImg" />
        <span className="fpName">Luxe Getaways Retreats</span>
        <span className="fpCity">city</span>
        <span className="fpPrice">Starting from $150</span>
        <div className="fpRating">
          <button>2.5</button>
          <span>Excellent</span>
        </div>

      </div>
      <div className="fpItem">
        <img src="https://media.admagazine.fr/photos/629f16b4f795d89c6bbcf890/16:9/w_2560%2Cc_limit/JacquesHervouet23371.jpg" alt="" className="fpImg" />
        <span className="fpName">Woodland Escape Villas</span>
        <span className="fpCity">city</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>2.5</button>
          <span>Excellent</span>
        </div>

      </div>

    </div>
  )
}

export default FeauturedProp
