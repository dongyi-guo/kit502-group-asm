class userSlideMenu extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="d-flex flex-sm-column flex-row flex-no-wrap flex-shrink-0 p-3 bg-light sticky-top" style="width: 280px;">
         <span class="fs-4">Welcome</span>
         <hr>
         <ul class="nav nav-pills flex-column mb-auto">
          <li class="nav-item">
           <a href="#" class="nav-link link-dark" aria-current="page">
            <svg class="bi me-2" width="16" height="16"><use xlink:href="#home"></use></svg>
            Dashboard
           </a>
          </li>
          <li>
           <a href="#" class="nav-link active">
            <svg class="bi me-2" width="16" height="16"><use xlink:href="#speedometer2"></use></svg>
            Trading
           </a>
          </li>
          <li>
           <a href="#" class="nav-link link-dark">
            <svg class="bi me-2" width="16" height="16"><use xlink:href="#table"></use></svg>
            Transaction History
           </a>
          </li>
          <li>
           <a href="#" class="nav-link link-dark">
            <svg class="bi me-2" width="16" height="16"><use xlink:href="#grid"></use></svg>
            Balance
           </a>
          </li>
          <li>
           <a href="#" class="nav-link link-dark">
            <svg class="bi me-2" width="16" height="16"><use xlink:href="#people-circle"></use></svg>
            Top-up/Withdraw
           </a>
          </li>
         </ul>
         <hr>
          <a href="./index.html" class="d-flex align-items-center link-dark text-decoration-none">
           <strong>Sign Out</strong></a>
        </div>
        `
    }
}

customElements.define('user-slide-menu',userSlideMenu);