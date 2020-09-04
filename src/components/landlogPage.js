import React from 'react';
import {Link , BrowserRouter as Router , Switch , } from 'react-router-dom';



class Landlogpage extends React.Component{
    
   render(){
       return(
          <div>    
              <Router>
               <nav class="navbar navbar-expand-lg  fixed-top">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <div class="menui">
               <div class="bar1"></div>
                <div class="bar2"></div>
               <div class="bar3"></div>
              </div>
          </button>
          <a class="navbar-brand" href="#"><b>Shoku</b></a>
        
          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            
              <li class="nav-item">
                <a class="nav-link" href="#">Home</a>
              </li>
              <li class="nav-item">
                <Link to="#" href="#" class="nav-link">Contact</Link>
              </li>
              <li class="nav-item">
                <Link to="#" href="#" class="nav-link">About</Link>
              </li>
              <li class="nav-item">
                <Link to="#" href="#" class="nav-link">Team</Link>
              </li>
            </ul>
          </div>
        </nav>
        </Router>

          
        {/*Landing / login page content */}
      <div class="container-fluid">
        <div className="App-header">
          <div class="row">
            <div class="col-md-6">
          <h1 className="head">About Us</h1>
          <div class="container">
          <lorem>What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting 
industry. Lorem Ipsum has been the industry's standard dummy text
ever since the 1500s, when an unknown printer took a galley of type and
 scrambled it to make a type specimen book. It has survived not only 
 five centuries<br/>
 <button class="btn btn-primary">Learn More</button>
 </lorem> 
        
          </div>
          </div>

         
              {/*Login form  */}
          <div class="col-md-6">
          <form>
        <div class="container">
        <h3 className="formhead"class="text-primary">Login Form</h3>
  <div class="form-group">
    <div class="row">
    <div class="col">
      <input type="email"  id="email" class="form-control" placeholder="Email"
     required />
    </div>
    </div>
    </div>
    
    <div class="form-group">
    <div class="row">
    <div class="col">
      <input type="Password"  id="password" class="form-control" placeholder="Password"
     required />
    </div>
    </div>
    </div>

      <div class="form-group">
        <div class="row">
          <div class="col">
            <small>Login with facebook</small> &nbsp;
            <Router>
            <Link to="#" class="fa fa-facebook"></Link>
            <br />
            <small>Login with google</small> &nbsp;
            <Link to="#" class="fa fa-google"></Link>
            </Router>
          </div>
        </div>
        </div>  
  
  <button type="submit" class="btn btn-outline-warning" value="Login"><i class="fa fa-paper-plane"></i> Login </button> 
    </div>

   <small><a href="#">Sign Up</a></small>
</form>
          </div>
          </div>
        </div>
      </div>
              
              

            </div>
              
       )
   }
}
export default Landlogpage;