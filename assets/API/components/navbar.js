function navbarDesign() {
  const navbarContainer = document.getElementById("navbar-social-links");
  navbarContainer.innerHTML = `   
  <div class="header__others-3">
  <ul class="social-media hover-1">
    <li>
      <a target="_blank" href=${WEBSITE_SOCIAL_LINKS.FACEBOOK}
        ><i class="fa-brands fa-facebook"></i
      ></a>
    </li>
    <li>
      <a target="_blank" href=${WEBSITE_SOCIAL_LINKS.INSTAGRAM}
        ><i class="fa-brands fa-instagram"></i
      ></a>
    </li>
    <li>
      <a target="_blank" href=${WEBSITE_SOCIAL_LINKS.TWITTER}
        ><i class="fa-brands fa-twitter"></i
      ></a>
    </li>
    <li>
      <a target="_blank" href=${WEBSITE_SOCIAL_LINKS.WHATSAPP}
        ><i class="fa-brands fa-whatsapp"></i
      ></a>
    </li>
  </ul>
</div>
`;
}

navbarDesign();
