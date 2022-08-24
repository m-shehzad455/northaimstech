import { Skeleton, Card, Group, Box, MediaQuery } from "@mantine/core";

/* eslint-disable-next-line */
export interface ListExecutionPreloaderProps {}

export function ListExecutionPreloader() {
  return (
    <Card className="border border-1 m-5">
      <Group position="apart" className="px-5 pt-3">
        <Box>
          <Group>
            <Skeleton height={20} circle mb="xl" />
            <Skeleton height={10} width={100} mb="xl" />
          </Group>
          <Skeleton height={8} width={200} mb="xl" />
        </Box>
        <Box>
          <Group>
            <Skeleton height={10} width={100} mb="xl" />
            <Skeleton height={10} width={100} mb="xl" />
          </Group>
        </Box>
      </Group>
      <Box className="px-6">
        <Skeleton height={8} radius="xl" />
      </Box>
      <Group position="apart" className="p-6">
        <MediaQuery
          query="(max-width: 640px)"
          styles={{
            "&:first-child": {
              gridTemplateColumns: "repeat(2, 2fr)",
              gap: "2rem",
            },
          }}
        >
          <Group className="grid gap-10 sm:grid-cols-3 lg:grid-cols-5">
            <Box className="items-start">
              <Skeleton height={8} radius="xl" />
              <Skeleton height={8} mt={6} radius="xl" />
            </Box>
            <Box className="items-start">
              <Skeleton height={8} radius="xl" />
              <Skeleton height={8} mt={6} radius="xl" />
            </Box>
            <Box>
              <Skeleton height={8} radius="xl" />
              <Skeleton
                className="min-w-max w-28"
                height={8}
                mt={6}
                radius="xl"
              />
            </Box>
            <Box>
              <Skeleton height={8} radius="xl" />
              <Skeleton height={8} mt={6} radius="xl" />
            </Box>
            <Box>
              <Skeleton height={8} radius="xl" />
              <Skeleton height={8} mt={6} radius="xl" />
            </Box>
          </Group>
        </MediaQuery>
        <Box>
          <Group>
            <Skeleton height={10} width={100} />
            <Skeleton height={10} width={100} />
          </Group>
        </Box>
      </Group>
    </Card>
  );
}

export default ListExecutionPreloader;
