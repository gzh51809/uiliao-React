import React, { Component } from 'react';
import {Route,NavLink,Link,Switch,withRouter,Redirect} from 'react-router-dom'

import logo from './logo.svg';
import axios from 'axios';
import './font/iconfont.css'
import './styles/reset.less';
import {ReactReduxContext,connect} from 'react-redux';
// ------------------ 引入组件
import Home from 'd/components/Home/Home'
import Classify from 'd/components/Classify/Classify'
import Search from 'd/components/Search/Search'
import ClassifyList from 'd/components/ClassifyList/ClassifyList'
import Details from 'd/components/Details/Details'
import Addcart from 'd/components/Details/common/Addcart'
// ------------------ 引入组件 END

Component.prototype.$axios=axios

class App extends Component {
  
  render() {
   
    return (
      <div >
        <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/classify" component={Classify}/>
          <Route path="/search" component={Search}/>
          <Route path="/list" component={ClassifyList}/>
          <Route path="/details" component={Details}/>
          <Route path="/addcart" component={Addcart}/>
          <Redirect from="/" to="/home"/>
        </Switch>
        
      </div>
    );
  }
}



export default App;
