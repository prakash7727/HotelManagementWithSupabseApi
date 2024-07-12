import Button from "../../ui/Button";
import Model from "../../ui/Model-1";
import CreateCabinForm from "./CreateCabinForm";

function AddCabin() {
  return (
    <div>
      <Model>
        <Model.Open opens="cabin-form">
          <Button>Add new cabin</Button>
        </Model.Open>
        <Model.Window name="cabin-form">
          <CreateCabinForm />
        </Model.Window>
      </Model>
    </div>
  );
}
// function AddCabin() {
//   const [isOpenModel, setIsOpenModel] = useState(false);

//   return (
//     <>
//       <div>
//         <Button onClick={() => setIsOpenModel((show) => !show)}>
//           Add New cabin
//         </Button>
//         {isOpenModel && <Model onClose={() => setIsOpenModel(false)}><CreateCabinForm onCloseForm={() => setIsOpenModel(false)}/></Model>}
//       </div>
//     </>
//   );
// }
export default AddCabin;
{
  /* <Model.Open opens="table">
                        <Button>Show cabins</Button>
                  </Model.Open>
                  <Model.Window name="table">
                        <CabinTable/>
                  </Model.Window> */
}
