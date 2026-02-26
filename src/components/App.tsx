import '../App.css';
import TableRow from './TableRow';
import TableHeader from './TableHeader';
import { carsList } from '../cars.const';


function App() {
  console.log(carsList);
  return <>
  <TableHeader />

  <TableRow />
  </>;
}

export default App;
