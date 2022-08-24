import AlertCard from "src/Components/AlertCard/AlertCard";
import AppShell from "../../../_app/AppShell";
import ListExecution from "../ListExecution";

function Report() {
  return (
    <AppShell>
      <div className="m-5 mb-8 flex flex-col z-40">
        <div className="pb-5">
          <AlertCard.Simple
            title="We are still working on this page"
            text={"Follow Term and Condtion"}
            type={"error"}
          />
        </div>
        <ListExecution />
      </div>
    </AppShell>
  );
}

export default Report;
