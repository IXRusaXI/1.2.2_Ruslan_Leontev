import { carsList } from "../cars.const";
import '../styles/Table.css'
import '../styles/TableCell.css'

function TableRow() {


    return  <section>

      {carsList.map((car) => <div className="table__row">

      <div className="text-cell"> {car.brand + " " + car.model} </div> 
      <div className="text-cell"> {car.price} </div>  
      <div className="text-cell"> {car.year} </div>
      <div className="custom-cell">
        <select className="select-width"> 
        {
            car.color.map(color => <option>{color}</option>)
        }
        </select>
      </div>

      <div className="custom-cell">
        <button className="order-button" disabled={car.isReserved}>
          <span>
            {car.isReserved ? 'Зарезервирован' : 'Забронировать'}
          </span>
        </button>
      </div>

      </div>)}

  </section>
  }
  
  export default TableRow;