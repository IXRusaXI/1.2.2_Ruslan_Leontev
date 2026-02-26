import "../styles/HeaderCell.css"

function TableHeader() {
    return  <div className="table__row">
      <div className="header-cell"> Марка </div> 
      <div  className="header-cell"> Цена </div>  
      <div  className="header-cell"> Год </div>
      <div  className="header-cell"> Цвет </div>
      <div  className="header-cell"> Заказать </div>
    </div>
}
  export default TableHeader;