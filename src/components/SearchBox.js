import {
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  Box,
  Text,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { useState } from "react";

const SearchBox = ({ setSearchStr, setSrOffset }) => {
  const [chars, setChars] = useState(false);
  const [searchTextValue, setSearchTextValue] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    setSrOffset(0);
    setSearchStr(searchTextValue);
  };

  const checkInputLength = (e) => {
    e.preventDefault();
    e.target.value.length < 3 ? setChars(true) : setChars(false);
    setSearchTextValue(e.target.value);
  };

  return (
    <>
      <InputGroup justifyContent="center">
        <Input
          placeholder="Search Wikipedia Articles"
          size="md"
          maxW="36rem"
          onBlur={checkInputLength}
          onChange={checkInputLength}
        />
        <InputRightElement position="relative">
          <IconButton
            aria-label="Search database"
            icon={<Search2Icon />}
            onClick={handleClick}
            isDisabled={chars}
          />
        </InputRightElement>
      </InputGroup>
      {chars && (
        <Box display="flex" justifyContent="center">
          <Text fontSize="sm" w="36rem">
            Please enter at least 3 characters!
          </Text>
        </Box>
      )}
    </>
  );
};

export { SearchBox };
