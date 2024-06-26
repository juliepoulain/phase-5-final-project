import React, { useContext } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import UserProfile from "./UserProfile";
import Homepage from "./Homepage";
import Login from "./Login";
import NavBar from "./NavBar";
import Routine from "./Routine";
import RoutineWithTask from "./RoutineWithTask";
import ManageTask from "./ManageTask";
import { UserContext } from "./UserContext";


function App() {
  const { userId, setUserId, phone, setPhone } = useContext(UserContext);

  return (
    <Router>
      <NavBar userId={userId} />
      <div className="wrapper">
        <Switch>
          <Route exact path="/login">
            <Login
              userId={userId}
              setUserId={setUserId}
              phone={phone}
              setPhone={setPhone}
            />
          </Route>
          <Route exact path="/">
            {userId ? (
              <Homepage
                userId={userId}
                setUserId={setUserId}
                phone={phone}
                setPhone={setPhone}
              />
            ) : (
              <Login
                userId={userId}
                setUserId={setUserId}
                phone={phone}
                setPhone={setPhone}
              />
            )}
          </Route>
          <Route exact path="/user">
            {userId ? (
              <UserProfile userId={userId} setUserId={setUserId} />
            ) : (
              <Login
                userId={userId}
                setUserId={setUserId}
                phone={phone}
                setPhone={setPhone}
              />
            )}
          </Route>
          <Route exact path="/user/:id">
            {userId ? (
              <UserProfile userId={userId} setUserId={setUserId} />
            ) : (
              <Login
                userId={userId}
                setUserId={setUserId}
                phone={phone}
                setPhone={setPhone}
              />
            )}
          </Route>
          <Route exact path="/routines">
            {userId ? (
              <Routine
                userId={userId}
                setUserId={setUserId}
                phone={phone}
                setPhone={setPhone}
              />
            ) : (
              <Login
                userId={userId}
                setUserId={setUserId}
                phone={phone}
                setPhone={setPhone}
              />
            )}
          </Route>
          <Route exact path="/routinetasks/:routineId">
            {userId ? (
              <RoutineWithTask
                userId={userId}
                setUserId={setUserId}
                phone={phone}
                setPhone={setPhone}
              />
            ) : (
              <Login
                userId={userId}
                setUserId={setUserId}
                phone={phone}
                setPhone={setPhone}
              />
            )}
          </Route>
          <Route exact path="/manage-tasks">
            {userId ? (
              <ManageTask
                userId={userId}
                setUserId={setUserId}
                phone={phone}
                setPhone={setPhone}
              />
            ) : (
              <Login
                userId={userId}
                setUserId={setUserId}
                phone={phone}
                setPhone={setPhone}
              />
            )}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
