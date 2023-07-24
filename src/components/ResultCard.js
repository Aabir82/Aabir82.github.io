import { Card, CardHeader, CardBody, Heading, Text } from "@chakra-ui/react";

const ResultCard = ({ qres, resultsCount }) => {
  //check if the array is empty and if so print nothing

  if (resultsCount > 0) {
    return (
      <>
        {qres.map((result) => {
          return (
            <Card w={["100vw", "36rem"]} m={2} key={result.pageid}>
              <CardHeader p={1}>
                <Heading as="h5" size="sm">
                  {result.title}
                </Heading>
              </CardHeader>
              <CardBody p={1}>
                <Text
                  as="a"
                  fontSize="sm"
                  color="gray.600"
                  noOfLines={2}
                  dangerouslySetInnerHTML={{ __html: result.snippet }}
                  href={encodeURI(
                    `https://en.wikipedia.org/wiki/${result.title}`
                  )}
                  target="_blank"
                ></Text>
              </CardBody>
            </Card>
          );
        })}
      </>
    );
  } else if (resultsCount === 0) {
    return (
      <Text>
        The search did not return any result. Please try with a different
        keyword.
      </Text>
    );
  } else {
    return <></>;
  }
};

export { ResultCard };
