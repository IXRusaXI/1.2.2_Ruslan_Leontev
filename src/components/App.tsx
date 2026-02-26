import '../App.css';
import TableRow from './TableRow';
import TableHeader from './TableHeader';
import { carsList } from '../cars.const';


function App() {
  const tableContent = () => {
    if (!carsList.length) {
      return <h1>
        Автомобили не найдены
      </h1>
    } else {
      return <TableRow />
    }
  }

  return <>
    <TableHeader />

    {tableContent()}
  </>;
}

export default App;
