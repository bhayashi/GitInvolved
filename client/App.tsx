import React from 'react';
import LoginContainer from './Containers/LoginContainer';
import ProfileContainer from './Containers/ProfileContainer';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Switch, Route } from 'react-router-dom';
import Cookies from 'js-cookie';

function App() {
  const loggedIn = Cookies.get('loggedIn');
  return(
    <Switch>
      <DndProvider backend={HTML5Backend}>
        <Route path="/profile" exact component={ProfileContainer} />
        <Route path="/" exact component={LoginContainer} />
      </DndProvider>
    </Switch>
  )
}

export const ItemTypes = {
  DRAGME: 'dragme'
}

export default App;
