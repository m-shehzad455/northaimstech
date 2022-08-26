import { Text, Title } from "@mantine/core";
import AlertCard from "src/Components/AlertCard/AlertCard";
import Graph from "src/Components/Charts/SimpleChart";
import AppShell from "../../../_app/AppShell";
import Map from "src/Components/Map";

function Docs() {
  return (
    <AppShell>
      <div className="m-5 mb-8 flex flex-col z-40">
        <div className="pb-5">
          <AlertCard.Simple
            title="We announced a new product!"
            text={"Learn more"}
            type={"info"}
          />
        </div>
        <div className="py-5 px-5">
        <div className="text-xl font-bold tracking-wide Montserrat">
            Goodmorning
        </div>
        </div>
        <div>
          <Map />
        </div>
        <Graph />
      </div>
    </AppShell>
  );
}

export default Docs;
