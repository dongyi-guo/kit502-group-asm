class myFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="container">
          <footer class="py-3 my-4">
            <ul class="nav justify-content-center border-bottom pb-3 mb-3">
              <li class="nav-item"><a href="./index.html" class="nav-link px-2 text-muted">Home</a></li>
              <li class="nav-item"><a href="./pricing.html" class="nav-link px-2 text-muted">Pricing</a></li>
              <li class="nav-item"><a href="./privacy.html" class="nav-link px-2 text-muted">Your Privacy</a></li>
              <li class="nav-item"><a href="./terms-conditions.html" class="nav-link px-2 text-muted">Terms and Conditions</a></li>
              <li class="nav-item"><a href="./about-us.html" class="nav-link px-2 text-muted">About Us</a></li>
              <li class="nav-item"><a href="#top" class="nav-link px-2 text-muted"><u>Back to Top</u></a></li>
              
            </ul>
            <p class="text-center text-muted">© 2023 TaGET Inc.</p>
          </footer>
        </div>`
    }
}

customElements.define('my-footer',myFooter);