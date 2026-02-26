import { carsList } from "../cars.const";
import '../Table.css'
import '../styles/TextCell.css'
import '../styles/CustomCell.css'

function TableRow() {
    return  <section>

      {carsList.map((car) => <div className="table__row">

      <div> {car.brand + " " + car.model} </div> 
      <div> {car.price} </div>  
      <div> {car.year} </div>
      <div className="custom-cell">
        <select className="custom-width"> 
        {
            car.color.map(color => <option>{color}</option>)
        }
        </select>
      </div>

      <div>
        <button disabled={car.isReserved}>
            Забронировать
        </button>
      </div>

      </div>)}

  </section>
  }
  
  export default TableRow;