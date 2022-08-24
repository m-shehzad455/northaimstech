import { Tabs } from "@mantine/core";
import ReactIcon from "../Reacticon/ReactIcon";

function Demo() {
  return (
    <div className="">
      <Tabs variant="pills">
        <Tabs.Tab label="Gallery" icon={<ReactIcon icon="BiBookmark" />}>
          <div className="bg-gray-100">Gallery tab content</div>
        </Tabs.Tab>
        <Tabs.Tab label="Messages" icon={<ReactIcon icon="BiBookmark" />}>
          Messages tab content
        </Tabs.Tab>
        <Tabs.Tab label="Settings" icon={<ReactIcon icon="BiBookmark" />}>
          Settings tab content
        </Tabs.Tab>
      </Tabs>
    </div>
  );
}
export default Demo;
