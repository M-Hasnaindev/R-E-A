document
  .getElementById("propertyForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var property = {
      title: document.getElementById("title").value,
      type: document.getElementById("type").value,
      bedrooms: document.getElementById("bedrooms").value,
      bathrooms: document.getElementById("bathrooms").value,
      price: document.getElementById("price").value,
      image: "",
    };

    var fileInput = document.getElementById("image");
    var file = fileInput.files[0];
    var reader = new FileReader();

    reader.onloadend = function () {
      property.image = reader.result;

      var properties = JSON.parse(localStorage.getItem("properties")) || [];
      properties.push(property);
      localStorage.setItem("properties", JSON.stringify(properties));

      displayProperties();

      alert("Property added successfully!");
      document.getElementById("propertyForm").reset();
    };

    reader.readAsDataURL(file);
  });

  function displayProperties() {
    var properties = JSON.parse(localStorage.getItem("properties")) || [];
    var propertiesContainer = document.getElementById("propertiesContainer");
    propertiesContainer.innerHTML = "";
  
    properties.forEach(function (property, index) {
      var propertyElement = document.createElement("div");
      propertyElement.classList.add("property");
  
      var imageElement = document.createElement("img");
      imageElement.src = property.image;
      imageElement.alt = "Property Image";
      propertyElement.appendChild(imageElement);
  
      var buyNowBtn = document.createElement("button");
      buyNowBtn.classList.add("buy-now-btn");
      buyNowBtn.textContent = "Buy Now";
      buyNowBtn.setAttribute("data-index", index);
      propertyElement.appendChild(buyNowBtn);
  
      var detailsElement = document.createElement("div");
      detailsElement.classList.add("property-details");
      detailsElement.innerHTML = `
        <h3>${property.title}</h3>
        <p>Type: ${property.type}</p>
        <p>Bedrooms: ${property.bedrooms}</p>
        <p>Bathrooms: ${property.bathrooms}</p>
        <p>Price: $${property.price}</p>
      `;
      propertyElement.appendChild(detailsElement);
  
      propertiesContainer.appendChild(propertyElement);
    });
  
    var buyNowButtons = document.getElementsByClassName("buy-now-btn");
    Array.from(buyNowButtons).forEach(function (button) {
      button.addEventListener("click", function () {
        var index = parseInt(this.getAttribute("data-index"));
        var selectedProperty = properties[index];
        showPropertyDetails(selectedProperty, index);
      });
    });
  }



  function displayPropertiesMain() {
    var properties = JSON.parse(localStorage.getItem("properties")) || [];

    console.log(properties);
    // var propertiesContainer = document.getElementById("propertiesContainer");
    // propertiesContainer.innerHTML = "";
  
    // properties.forEach(function (property, index) {
    //   var propertyElement = document.createElement("div");
    //   propertyElement.classList.add("property");
  
    //   var imageElement = document.createElement("img");
    //   imageElement.src = property.image;
    //   imageElement.alt = "Property Image";
    //   propertyElement.appendChild(imageElement);
  
    //   var buyNowBtn = document.createElement("button");
    //   buyNowBtn.classList.add("buy-now-btn");
    //   buyNowBtn.textContent = "Buy Now";
    //   buyNowBtn.setAttribute("data-index", index);
    //   propertyElement.appendChild(buyNowBtn);
  
    //   var detailsElement = document.createElement("div");
    //   detailsElement.classList.add("property-details");
    //   detailsElement.innerHTML = `
    //     <h3>${property.title}</h3>
    //     <p>Type: ${property.type}</p>
    //     <p>Bedrooms: ${property.bedrooms}</p>
    //     <p>Bathrooms: ${property.bathrooms}</p>
    //     <p>Price: $${property.price}</p>
    //   `;
    //   propertyElement.appendChild(detailsElement);
  
    //   propertiesContainer.appendChild(propertyElement);
    // });
  
    // var buyNowButtons = document.getElementsByClassName("buy-now-btn");
    // Array.from(buyNowButtons).forEach(function (button) {
    //   button.addEventListener("click", function () {
    //     var index = parseInt(this.getAttribute("data-index"));
    //     var selectedProperty = properties[index];
    //     showPropertyDetails(selectedProperty, index);
    //   });
    // });
  }
  
function showPropertyDetails(property) {
  document.body.innerHTML = `
    <h2>Checkout Form</h2>
    <div class="row">
      <div class="col-50">
        <div class="container">
          <form action="#">
            <div class="row">
              <div class="col-50">
                <h3>Billing Address</h3>
                <label for="fname"><i class="fa fa-user"></i> Full Name</label>
                <input type="text" id="fname" name="firstname"
                       placeholder="Your Name">
                <label for="email"><i class="fa fa-envelope"></i> Email</label>
                <input type="text" id="email" name="email" placeholder="
    ​                   ​name@example.com">
                <label for="adr"><i class="fa-sharp fa-solid fa-location-dot"></i> Address</label>
                <input type="text" id="adr" name="address" placeholder="
                       pakistan , karachi">
                <label for="city"><i class="fa fa-institution"></i> City</label>
                <input type="text" id="city" name="city" placeholder="Karachi">
    
                <div class="row">
                  <div class="col-50">
                    <label for="state">State</label>
                    <input type="text" id="state" name="state" placeholder="Sindh">
                  </div>
                  <div class="col-50">
                    <label for="zip">Zip</label>
                    <input type="text" id="zip" name="zip" placeholder="Zip Code">
                  </div>
                </div>
              </div>
    
              <div class="col-50">
                <h3>Payment</h3>
                <label for="fname">Accepted Cards</label>
                <div class="icon-container">
                <i class="fa-brands fa-cc-visa" style="color:navy;"></i>
                <i class="fa-brands fa-cc-amex" style="color:blue;"></i>
                <i class="fa-brands fa-cc-mastercard" style="color:red;"></i>
                <i class="fa-brands fa-cc-discover" style="color:orange;"></i>
                </div>
                <label for="cname">Name on Card</label>
                <input type="text" id="cname" name="cardname" 
                        placeholder="Your Name">
                <label for="ccnum">Credit card number</label>
                <input type="text" id="ccnum" name="cardnumber" 
                      placeholder="4242-4242-4242-4242">
                <label for="expmonth">Exp Month</label>
                <input type="text" id="expmonth" name="expmonth" 
                   placeholder="September">
                <div class="row">
                  <div class="col-50">
                    <label for="expyear">Exp Year</label>
                    <input type="text" id="expyear" name="expyear" placeholder="2023">
                  </div>
                  <div class="col-50">
                    <label for="cvv">CVV</label>
                    <input type="text" id="cvv" name="cvv" placeholder="123">
                  </div>
                </div>
              </div>
              
            </div>
            <label>
              <input type="checkbox" checked="checked" name="sameadr"> 
               Shipping address same as billing
            </label>
            <input type="submit" value="Continue to checkout" class="btn">
          </form>
        </div>
      </div>
      <div class="col-50">
        <div class="container oneMore">
        <div class="property-details">
        <div class="property-image">
          <img src="${property.image}" alt="Property Image">
        </div>
        
        <div class="property-info">
          <a class="d-block h5 mb-2" href="">${property.title}</a>
          <a class="d-block h5 mb-2" href="">Golden Urban House For Sell</a>
          <div class="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
          <div class="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">${property.type}</div>
          <small class="flex-fill text-center border-end py-2"><i class="fa fa-bed text-primary me-2"></i>${property.bedrooms}</small>
          <small class="flex-fill text-center py-2"><i class="fa fa-bath text-primary me-2"></i>${property.bathrooms}</small>
          <h5 class="text-primary mb-3">$${property.price}</h5>
          <small class="flex-fill text-center border-end py-2"><i class="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft</small>
        </div>
      </div>
        </div>
      </div>
    </div>
    `;
}

displayProperties();

document
  .getElementById("checkoutForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const urlParams = new URLSearchParams(window.location.search);
    const propertyIndex = urlParams.get("property");

    window.location.href = "./index.html";

    var properties = JSON.parse(localStorage.getItem("properties")) || [];
    properties.splice(propertyIndex, 6);
    localStorage.setItem("properties", JSON.stringify(properties));
  });

  
