import { Card, Box, Text } from "@mantine/core";
import React from "react";
import { Button } from "../../Button/Button";
import ReactIcon from "../../Reacticon/ReactIcon";
import { TextInput } from "../../TextInput/TextInput";

type SearchProps = {
  setSearchBox: (val: boolean) => void;
  setLogsVisible: (val: boolean) => void;
};

const Search: React.FC<SearchProps> = ({ setSearchBox, setLogsVisible }) => {
  return (
    <Card className="fixed top-0 left-0 right-0 h-screen flex justify-center items-center bg-custome">
      <Button
        sm
        className="fixed top-5 right-5 shadow-lg text-2xl px-1 py-1 focus:ring-0 rounded-none"
      >
        <ReactIcon icon="VscClose" onClick={() => setLogsVisible(false)} />
      </Button>
      <Box className="shadow-xl p-6 bg-slate-400 w-1/2 rounded-md">
        <Text>Search Box</Text>
        <TextInput name="Search Box" placeholder="Search post" showSearchIcon />
      </Box>
    </Card>
  );
};

export default Search;
