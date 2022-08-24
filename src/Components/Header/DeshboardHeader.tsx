import { Text, Group, Box } from "@mantine/core";
import { Button } from "../Button/Button";

/* eslint-disable-next-line */
export interface DashboardProjectHeaderProps {}

export function DashboardHeader() {
  return (
    <Box className=" p-5 mb-8 border-b-2">
      <Group position="apart">
        <Group>
          <Text>Events</Text>
          <Text
            size="xs"
            color="gray"
            className="cursor-pointer text-sky-600 hover:text-sky-800 hover:underline"
          >
            Updated 45 min ago
          </Text>
        </Group>
        <Group>
          <Button transparent>App Log</Button>
          <Button transparent>View Events</Button>
        </Group>
      </Group>
    </Box>
  );
}

export default DashboardHeader;
