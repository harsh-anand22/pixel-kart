document.getElementById("contentAndFilter").innerHTML+=`
<!----navbar------------->
<header id="nav_bar">
  <div class="logo">
    PIXEL - KART
  </div>
  <input type="checkbox" id="click">
  <div class="search-bar" id="bar--">
    <input type="text" placeholder="  Search For Photos" >
  </div>
  <nav>
    <ul class="list">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
      <li class="d-none d-xl-inline"><a href="#">Cart</a></li>
      <li><a href="#" class="btn-success">Login</a></li>
    </ul>
  </nav>
  <div class="d-flex">
    <a href="#" class="btn btn-light btn-sm d-xl-none">Cart</a>
    <label for="click" class="menu-btn">
      <i class="fas fa-bars"></i>
    </label>
  </div>
</header>
<!----homepage----------->
<section id="home_page">
  <div class="title">
    <h1>EXPLORE BEST STOCK IMAGES</h1>
    <h3>Created by talented creators</h3>
  </div>
</section>
`;
