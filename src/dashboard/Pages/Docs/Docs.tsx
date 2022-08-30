import { Text, Title } from "@mantine/core";
import AlertCard from "src/Components/AlertCard/AlertCard";
import Map from "src/Components/Map";
import AppShell from "../../../_app/AppShell";

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
          <Title className="font-bold">All Documents</Title>
          <Text>
            All the documents in your Workspace — in sync and available
            anywhere.
          </Text>
        </div>
        <Map />
      </div>
    </AppShell>
  );
}

export default Docs;