import { Box } from "@chakra-ui/react";

const ResultSummary = ({ resultCount }) => {
  return (Number(resultCount>0)?<Box color={"gray.600"} mt={3} maxW={'36rem'}> Total Results: {resultCount}</Box>:'')

};

export { ResultSummary };
