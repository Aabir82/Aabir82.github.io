import { SearchBox } from "./components/SearchBox";
import { ChakraProvider, extendTheme, Heading, VStack } from "@chakra-ui/react";
import "./styles.css";
import { ResultCard } from "./components/ResultCard";
import { ResultSummary } from "./components/ResultSummary";
import { Pages } from "./components/Pages";
import { useState } from "react";
import Api from "./components/Api";
import Footer from "./components/Footer";

const theme = extendTheme({
  fonts: {
    body: "Roboto, sans-serif",
    heading: "Roboto, serif",
    mono: "Menlo, monospace",
  },
});

export default function App() {

  const [searchStr, setSearchStr] = useState(""); //for storing the search string
  const [qres, setQres] = useState([]); //for storing results
  const [resultsCount, setResultsCount] = useState(-1); //for storing result count
  const [srOffset, setSrOffset] = useState(0); //for incrementing  & decrementing pages

  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        <Heading as="h1" textAlign="center" mb={4} mt={5}>
          Wiki Search
        </Heading>

        <SearchBox
          setSearchStr={setSearchStr}
          setSrOffset={setSrOffset}
        />
        <VStack justifyContent="center">
          <ResultSummary
          resultCount={resultsCount}
          />
          <ResultCard
            qres={qres}
            resultsCount= {resultsCount}/>
          <Pages
            srOffset={srOffset}
            setSrOffset={setSrOffset}
            resultsCount= {resultsCount}
          />
          <Footer/>
        </VStack>
        <Api searchStr={searchStr}
          setQres={setQres}
          qres={qres}
          setResultsCount={setResultsCount}
          srOffset={srOffset}
          
        />  
      
      </div>
    </ChakraProvider>
  );
}
