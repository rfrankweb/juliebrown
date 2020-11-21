let headerMain = {
    template: `
    <header>
      <div id="logos">
        <h4 id="logo">The Law Office of</h4>
        <h3 id="logo2">Julie A. Brown, Attorney at Law</h3>
      </div>
      <img id="logo-justice" src="./images/logo-justice.svg" alt="Picture of Justice">
      <nav>
        <a class="navs" href="./index.html">Home</a>
        <div class="dropdown">
          <a class="dropbtn navs">Services</a>
          <div class="dropdown-content">
            <a href="/divorcechildcustody.html">Divorce and Child Custody</a>
            <a href="/mediation.html">Mediation</a>
            <a href="/adoptions.html">Adoptions</a>
          </div>
        </div>
        <a class="navs" href="/contact.html">Contact</a>
        <a class="navs" href="/about.html">About Us</a>
      </nav>
    </header>
    `
}

new Vue({
  el: "#header-container",
  components: {
    'header-main': headerMain,
  }
})