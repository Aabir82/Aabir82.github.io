# Wiki Search Project

This project was created using Create React App and Chakra UI libraries.

## Objective

To retrieve articles from Wikipedia.org for user provided search strings.

## Methodology

1. The user enters a search string in the search box (A minimum of 3 characters are required to initiate the search).

2. The app uses the Wikipedia API to fetch results from the server.

3. If no results are found, then a message is displayed to the user.

4. The Fetch function retrieves the total number of hits (results) but displays only the 5 most relevant restults in the starting screen.

5. The user has the option to navigate through all the results by using the next and previous button.

6. In order to display results in well formatted manner, Card component from the Chakra UI library has been used.

7. The card consists of the title of the article the corresponding snippet.

8. Upon clicking the snippet, the article opens up in a new window on the user's browser.
