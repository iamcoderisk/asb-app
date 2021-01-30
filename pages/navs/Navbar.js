export default function Navbar() {
  
 
  return(
    <div>
    <nav className="navbar navbar-expand-lg navbar-light has-shadow bg-custom">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">FE Engineering Test 1</a>
     
  
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navbar-nav d-block p-4"></div>
            <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#"> <ion-icon name="home"></ion-icon> Home </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"> <ion-icon name="folder"></ion-icon> Entries</a>
              </li>
                <li className="nav-item">
            <a className="nav-link" href="#"> <ion-icon name="folder"></ion-icon> Divisions</a>
          </li>
          
        </ul>
        <ul className="mr-auto"></ul>
         <ul className="navbar-nav ">
            <div className="row">
                

                  <div className="input-container">
                    <div className="input_search">
                        <ion-icon name="search-outline"></ion-icon>
                    </div>
                    <input type="text" className='form-control col-md-9' />
                  </div>
                  
               
                
                  <div className="notification_container">
                  <ion-icon name="notifications"></ion-icon>
                  </div>
               
            
                  <div className="profile_container">
                    <img src="/images/user.png" />
                    
                      
                    <span className="profile_icon">
                      <ion-icon name="chevron-down"></ion-icon>
                      </span>
                     
                  </div>
              </div>   
      

          
        </ul>
      
      </div>
      </div>
    </nav>
    </div>
  );
}
