import React, { useEffect } from "react";

const Api = ({ searchStr, setQres, setResultsCount, srOffset }) => {
  const contiNu = "||";
  const srLimit = 5;

  useEffect(
    () => {
      //set the url for wikipedia api
      const apiURL = encodeURI(
        `https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&list=search&continue=-${contiNu}&formatversion=2&srsearch=${searchStr}&srlimit=${srLimit}&sroffset=${srOffset}&srprop=snippet`
      );

      //fetch the data from wikipedia api
      fetch(apiURL)
        .then((resolve) => resolve.json())
        .then((json) => {
          if (json.batchcomplete === true) {
            setResultsCount(json.query.searchinfo.totalhits);
            setQres(json.query.search.map((result) => result));
          }
          return null;
        })
        .catch(err => {
          console.log(err)
          throw new Error('Oops! Unable to fetch data. Please try again later.')
        }
        );
    },
    // }
    [contiNu, searchStr, srLimit, srOffset, setResultsCount, setQres]
  );

  return <></>;
};

export default Api;
