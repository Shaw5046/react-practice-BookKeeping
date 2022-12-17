import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import SignUpScreen from "./pages/SignUpScreen";
import LoginScreen from "./pages/LoginScreen";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Header />
        <Container className="mt-3">
          <Switch>
            <Route path="/" component={HomeScreen} exact />
            <Route path="/signup" component={SignUpScreen} exact />
            <Route path="/login" component={LoginScreen} exact />
          </Switch>
        </Container>
      </AuthProvider>
    </Router>
  );
}

export default App;
