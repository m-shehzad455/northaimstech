import {
  Badge,
  Box,
  Card,
  Group,
  Image,
  Popover,
  Text,
  Transition,
} from "@mantine/core";

import { useState } from "react";
import { Button } from "../../Components/Button/Button";
import ReactIcon from "../../Components/Reacticon/ReactIcon";
import { ExecutionViewButton } from "../../Utils/execution.constants";

type SearchProps = {
  execution: any;
};

export const ViewExecutionCard: React.FC<SearchProps> = ({ execution }) => {
  const [logsVisible, setLogsVisible] = useState(false);
  const [popperOpen, setPopperOpen] = useState(false);
  // const [detailsOpen, setDetailsOpen] = useState(false);

  return (
    <Card className="border border-1 mb-8">
      <Group position="apart" className="p-6">
        <Box>
          <Group className="mb-1">
            <ReactIcon icon="BsCircleFill" />
            <Text weight={550} className="">
              #{"1"} | Pipeline {"pipelineId"}
            </Text>
          </Group>
          <Text size="xs" color="gray">
            {`Commit ${"123454563"}`}
          </Text>
        </Box>
        <Group className="flex">
          <Badge color="green" variant="outline" radius="sm">
            LATEST
          </Badge>
          <Button
            xs
            onClick={() => setLogsVisible(!logsVisible)}
            className="py-1 bg-gray-400 focus:ring-0 uppercase"
          >
            {ExecutionViewButton.Details}
          </Button>
        </Group>
      </Group>
      {/* <Transition
        mounted={logsVisible}
        transition={"slide-right"}
        duration={250}
      >
        {(styles) => {
          return (
            <div style={styles}>
              <LogCodeCard execution={execution} />
            </div>
          );
        }}
      </Transition> */}
      <Image
        className="w-full rounded-sm"
        height={300}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXoPs7av_3dWLBqDdhBCuvlaYeG6_nX1D7rA&usqp=CAU"
      />
      <Group position="apart" className="p-6">
        <div className="flex flex-1 flex-col gap-10 lg:flex-row lg:gap-0 justify-between">
          <Group className="grid gap-10 xl:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-stretch justify-items-start">
            <Box>
              <Text color="gray" size="xs" className="min-w-max box-content">
                Commit Message
              </Text>
              <Text className="min-w-max xl:mr-4" size="sm"></Text>
              <Popover
                opened={popperOpen}
                onClose={() => setPopperOpen(false)}
                position="bottom"
                placement="center"
                withArrow
                trapFocus={false}
                closeOnEscape={false}
                transition="pop-top-left"
                width={260}
                target={
                  <Text
                    size="sm"
                    onMouseEnter={() => setPopperOpen(true)}
                    onMouseLeave={() => setPopperOpen(false)}
                  >
                    {"commitMsg"}
                  </Text>
                }
              >
                <div style={{ display: "flex" }}>
                  <Text size="sm">{"commitMsg"}</Text>
                </div>
              </Popover>
            </Box>
          </Group>
          <Group className="grid gap-3 grid-cols-1 flex-shrink">
            <Button className="px-8 whitespace-nowrap">
              {ExecutionViewButton.Reaady}
            </Button>
          </Group>
        </div>
      </Group>
    </Card>
  );
};

export default ViewExecutionCard;
