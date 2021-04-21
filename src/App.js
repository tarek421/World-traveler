import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home/Home';
import Admin from './components/Admin/Admin';
// import PrivetRoute from './components/Login/PrivetRoute/PrivetRoute';
import NoMatch from './components/NoMatch/NoMatch';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { createContext, useState } from 'react';
import Login from './components/Login/Login';
import DestinationBook from './components/Home/DestinationBook/DestinationBook';
import OrderList from './components/Admin/OrderList';
import AddServices from './components/Admin/AddServices';
import MakeAdmin from './components/Admin/MakeAdmin';
import ManageServices from './components/Admin/ManageServices';
import Book from './components/Home/DestinationBook/Book';
import BookingList from './components/Home/DestinationBook/BookingList';
import AddReview from './components/Home/DestinationBook/AddReview';

export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <>
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/admin">
              <Admin />
            </Route>

            <Route path="/destinationBook/:destinationId">
              <DestinationBook />
            </Route>

            <Route path="/login">
              <Login />
            </Route>
            <Route path="/orderList">
              <OrderList />
            </Route>
            <Route path="/addServices">
              <AddServices />
            </Route>
            <Route path="/makeAdmin">
              <MakeAdmin />
            </Route>
            <Route path="/manageServices">
              <ManageServices />
            </Route>



            <Route path="/book">
              <Book />
            </Route>
            <Route path="/bookingList">
              <BookingList />
            </Route>
            <Route path="/review">
              <AddReview />
            </Route>

            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </Router>
    </userContext.Provider>
  </>
  );
}

export default App;
