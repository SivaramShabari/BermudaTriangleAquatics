import './App.css';
import Bill from './components/bill';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Admin from './components/admin';
import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import SignIn from './components/signIn';
import Navbar from './components/Navbar';
import ViewBill from './components/ViewBill';
import NoRoute from './components/NoRoute';
import ViewAllBills from './components/ViewAllBills';

function App() {
  const auth = getAuth();
  const [admin, setAdmin] = useState(false)
  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        console.log(user);
        setAdmin(user)
      }
      else {
        console.log("no user");
        setAdmin(false)
      }
    })
  })
  return (
    <div className="App">
      <Navbar user={admin} />
      <Router>
        <Switch>
          <Route exact path="/">
            <h1>
              Bermuda Triangle Aquatics
            </h1>
          </Route>

          <Route exact path="/admin">
            {admin &&
              <>
                <h1 className='m-3'>Admin Bill Generation</h1>
                <h3 className='m-3'>Hello {admin.displayName}</h3>
                <Admin />
              </>
            }
            {
              !admin && <h1>
                Access Restricted
              </h1>
            }
          </Route>
          <Route exact path="/signin">
            <SignIn />
          </Route>
          <Route exact path="/bill/:id">
            <ViewBill />
          </Route>
          <Route exact path="/admin/bills">
            {admin &&
              <>
                <h1 className='m-3'>All Bills</h1>
                <h3 className='mb-5'></h3>
                <ViewAllBills />
              </>
            }
            {
              !admin && <h1>
                Access Restricted
              </h1>
            }
          </Route>
          <Route component={NoRoute} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
