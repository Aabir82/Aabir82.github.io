import { HStack, Button, Text } from "@chakra-ui/react";

const Pages = ({ srOffset, setSrOffset, resultsCount }) => {

  const handleClick = (e) => {
    (e.target.name === 'increment') ? setSrOffset(() => srOffset + 5) : setSrOffset(() => srOffset - 5)
  }


  return (
    <HStack w={[ '100vw',"36rem" ]} justifyContent='space-between'>
      {<Button onClick={handleClick} name='decrement' visibility={(srOffset < 5) ? 'hidden' : 'visible'}> {"<"} Previous page</Button>}
      {(resultsCount > 0) && <Text fontSize='sm'>{srOffset}-{srOffset + 5}</Text>}
      {( resultsCount - srOffset) >=5 && <Button onClick={handleClick} name='increment'>Next page {">"}</Button>}
    </HStack>
  );
};

export { Pages };
