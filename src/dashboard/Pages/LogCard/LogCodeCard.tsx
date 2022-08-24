import { Card, Text, Badge, Group, Box } from "@mantine/core";
import { Prism } from "@mantine/prism";
import ReactIcon from "../../../Components/Reacticon/ReactIcon";
import { PipelineExecutionStatus } from "../../../Utils/execution.constants";
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface LogCodeCardProps {
  execution: any;
}

// type SearchProps = {
//   execution: any;
// };

export const LogCodeCard: React.FC<LogCodeCardProps> = ({ execution }) => {
  // export const LogCodeCard: React.FC<SearchProps> (_props: LogCodeCardProps) => {
  const code =
    "Initializing User | Email | Password | Like | Followers | Follow";
  return (
    <Card className="border border-1 m-5 p-5">
      <Group position="apart">
        <Box>
          <Group>
            <ReactIcon
              icon="BsCircleFill"
              className={
                execution.status === PipelineExecutionStatus.Success
                  ? "text-green-500"
                  : execution.status === PipelineExecutionStatus.Pending
                  ? "text-yellow-400"
                  : "text-red-500"
              }
            />
            <Text weight={500}>{"Logs"}</Text>
          </Group>
        </Box>
        <Group>
          <Badge
            color="gray"
            radius="sm"
            variant="filled"
            className="uppercase"
          >
            {"{ExecutionViewButton.Logs}"}
          </Badge>
        </Group>
      </Group>
      <Prism className="mt-5" colorScheme="dark" language="tsx">
        {code}
      </Prism>
    </Card>
  );
};

export default LogCodeCard;
