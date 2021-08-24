import Card_Style from "./Card";
import products from "./database";
const MappingCard=()=>{

    return<>
      <div style={{marginTop:"20px"}} className="container">
          <div className="row">
          {
              products.map(product=>(<Card_Style prod={product} />))

          }
      </div>
      </div>

    </>

}
export default MappingCard;