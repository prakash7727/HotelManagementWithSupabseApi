import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
import AddCabin from "../features/cabins/AddCabins";
import CabinTableOpration from "../features/cabins/CabinTableOpration";

function Cabins() {
  return (
    <>
    <div>
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <CabinTableOpration/>
    </Row>
    </div>
    <div>
    <Row type="vertical">
      <CabinTable/>
      <AddCabin/>
    </Row>
    </div>
      
    </>
  );
}

export default Cabins;
