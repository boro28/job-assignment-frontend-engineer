import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Article from "./routes/Article";
import ArticleList from "./routes/ArticleList";
import Editor from "./routes/Editor";
import LoginRegister from "./routes/LoginRegister";
import Logout from "./routes/Logout";
import Profile from "./routes/Profile";
import Settings from "./routes/Settings";
import { QueryClient, QueryClientProvider } from "react-query";
import Navigation from "./components/Navigation";
import Footer from "./components/Fotter";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <ScrollToTop />
        <Navigation />
        <Switch>
          <Route path="/editor" exact component={Editor} />
          <Route path="/editor/:slug" exact component={Editor} />
          <Route path="/login" exact component={LoginRegister} />
          <Route path="/logout" exact component={Logout} />
          <Route path="/profile/:username" exact component={Profile} />
          <Route path="/profile/:username/favorites" exact component={Profile} />
          <Route path="/register" exact component={LoginRegister} />
          <Route path="/settings" exact component={Settings} />
          <Route path="/home" component={ArticleList} />
          <Route path="/:slug" exact component={Article} />
          {/*TODO: quick hack for default view*/}
          <Route path="/" component={ArticleList} />
        </Switch>
        <Footer />
      </Router>
    </QueryClientProvider>
  );
}

export default App;
