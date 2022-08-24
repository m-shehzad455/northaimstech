import { Image, Text } from "@mantine/core";
// import { Button } from '../../../Components'
import AppShell from "../../../_app/AppShell";
import { NewProject } from "../../Mocked/Project";

function Project() {
  return (
    <AppShell>
      <div className="m-5 mb-8 flex flex-col z-40">
        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {NewProject.map((item) => (
            <div
              key={item.name}
              className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6 hover:shadow-2xl"
            >
              <Image className="w-full rounded-sm" src={item.img} />
              <Text className="mt-1 text-3xl font-semibold text-gray-900 pt-5">
                {item.stat}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}

export default Project;
