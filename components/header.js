class myHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <!-- Register Modal -->
          <div class="modal fade" id="register">
           <div class="modal-dialog">
              <div class="modal-content">
             <!-- Modal Header -->
             <div class="modal-header">
             <h4 class="modal-title">Registration</h4>
             <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
             </div>
             <!-- Modal body -->
             <div class="modal-body">
              <div class="modal-response"></div>
              <div class="mb-3">
               <label for="formGroupExampleInput" class="form-label">Name:</label>
               <input id="user-name" type="text" class="form-control" placeholder="Name">
              </div>
              <div class="mb-3">
               <label for="formGroupExampleInput2" class="form-label">Email:</label>
               <input id="email-addr" type="email" class="form-control" placeholder="Email">
              </div>
              <div class="mb-3">
               <label for="formGroupExampleInput2" class="form-label">Password</label>
               <input id="passwd" type="password" class="form-control" placeholder="Password">
              </div>
              <div class="mb-3">
               <label for="formGroupExampleInput2" class="form-label">Confirm Password</label>
               <input id="confirm-passwd" type="password" class="form-control" placeholder="Confirm Password">
              </div>
              <label class="me-2">Are you a:</label>
              <div class="form-check form-check-inline">
               <input class="form-check-input" type="checkbox" value="" id="buyer-check">
               <label class="form-check-label" for="buyer-check">Buyer</label>
               </div>
               <div class="forms-check form-check-inline">
               <input class="form-check-input" type="checkbox" value="" id="seller-check">
               <label class="form-check-label" for="seller-check">Seller</label>
               </div>
              <div class="row"><br></div>
              <div class="form-check">
               <input class="form-check-input" type="checkbox" value="" id="terms-check">
               <label class="form-check-label" for="terms-check">
                I acknowledge that I have read and understand the terms and conditions.
               </label>
              </div>
             </div>
             <!-- Modal footer -->
             <div class="modal-footer">
             <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
             <button onclick="registerFeedback()" type="button" 
             class="btn btn-primary" title>Submit</button>
             </div>
             </div>
           </div>
          </div>
          
          <div class="modal fade" id="login">
           <div class="modal-dialog">
              <div class="modal-content">
             <!-- Modal Header -->
             <div class="modal-header">
             <h4 class="modal-title">Login</h4>
             <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
             </div>
             <!-- Modal body -->
             <div class="modal-body">
              <div class="modal-response"></div>
              <div class="mb-3">
               <label for="formGroupExampleInput2" class="form-label">Email:</label>
               <input id="login-email" type="email" class="form-control" placeholder="Email">
              </div>
              <div class="mb-3">
               <label for="formGroupExampleInput2" class="form-label">Password</label>
               <input id="login-passwd" type="password" class="form-control" placeholder="Password">
              </div>
             </div>
             <!-- Modal footer -->
             <div class="modal-footer">
             <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
             <button onclick="loginFeedback()" type="button" 
             class="btn btn-primary" title>Submit</button>
             </div>
             </div>
           </div>
          </div>
        
          <nav class="navbar navbar-expand-lg bg-light my-2, my-lg-0, me-sm-0, my-sm-0">
           <div class="container-fluid">
             <a class="navbar-brand" href="./index.html">TaGET</a>
             <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
             </button>
             <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item"><a class="nav-link" aria-current="page" href="./pricing.html">Pricing</a></li>
                  <li class="nav-item"><a class="nav-link" aria-current="page" href="./about-us.html">About Us</a></li>
                  <li class="nav-item"><a class="nav-link" aria-current="page" href="./privacy.html">Privacy</a></li>
                  <li class="nav-item"><a class="nav-link" aria-current="page" href="./terms-conditions.html">Terms</a></li>
                </ul>
             </div>
             <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <form class="d-flex" action="./pricing.html">
                  <input class="form-control me-2" type="search" placeholder="Search Your Energy" aria-label="Search">
                  <button class="btn btn-outline-success me-2" type="submit">Search</button>
                </form>
                <ul class="navbar-nav">
                  <li class="nav-item"><button type="button" class="btn btn-outline-secondary me-2" data-bs-target="#register" data-bs-toggle="modal">Register</button></li>
                  <li class="nav-item"><button type="button" class="btn btn-secondary" data-bs-target="#login" data-bs-toggle="modal">Login</button></li>
                </ul>
             </div>
           </div>
          </nav>`
    }
}
customElements.define('my-header', myHeader);