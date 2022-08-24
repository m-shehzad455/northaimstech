import { useEffect, useState } from "react";
import ListExecutionPreloader from "./Pipeline/ListExecutionPreloader";
import ViewExecutionCard from "./ViewExecution";
import Mocked from "../Mocked/GetPipelines_1234567890.json";
// import { Mocker } from "../Mocked/Dome";

function ListExecution() {
  const skeletonMap = [0, 1, 2, 3, 4, 5];
  // const [openDetailsPanel, setOpenDetailsPanel] = useState(false);
  // const [panelData, setPanelData] = useState("");
  const [data, setData] = useState(Mocked);
  useEffect(() => {
    setData(Mocked);
  }, []);
  {
    !data && (
      <div>
        {skeletonMap.map(() => {
          return <ListExecutionPreloader />;
        })}
      </div>
    );
  }
  return (
    <>
      {data.map((execution) => (
        <div key={execution.id} role="listitem">
          <ViewExecutionCard execution={execution} />
        </div>
      ))}
    </>
  );
}

export default ListExecution;
