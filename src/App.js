import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import DynamicArticle from "./DynamicArticle/DynamicArticle.jsx";
import { isEmpty } from "lodash";
import ArticleList from "./ArticleList/ArticleList.jsx"

function App() {
  const [fetchedData, setFetchedData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      // put data fetching code here!
      const response = await fetch("http://demo1390455.mockable.io/articles")
      const responseJson = await response.json();
      setFetchedData(responseJson);
    };

    if (isEmpty(fetchedData)) {
      fetchData();
    }
  }, [fetchedData]);

  return isEmpty(fetchedData) ? <div>You have no data!</div> : (
    <div className="App">
      <Switch>
        <Route
          exact
          path={`/articlelist/:slug`}
          render={({ match }) => {
            // getting the parameters from the url and passing
            // down to the component as props
            console.log("this slug", match.params.slug);
            let renderArticle;
            for (const key in Object.values(fetchedData)) {
              if (Object.values(fetchedData)[key].slug === match.params.slug) {
                renderArticle = Object.values(fetchedData)[key];
              }
            }
            return <DynamicArticle article={renderArticle} />;
          }}
        />
        <Route path="/articlelist">
            <ArticleList articles={Object.values(fetchedData)} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;