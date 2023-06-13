// import dummyImage from "./img/property-1.jpg";

function displayPropertiesMain() {
  var properties = JSON.parse(localStorage.getItem("properties")) || [];

  console.log(properties);
  document.getElementById("test1").innerHTML = properties
    .map(
      (user, index) =>
        `
      <div class="col-lg-4 col-md-6 wow fadeInUp"  data-wow-delay="0.1s" >
                                    <div class="property-item rounded overflow-hidden">
                                    <div class="position-relative overflow-hidden">
                                        <a href=""><img class="img-fluid" src=${
                                          user
                                            ? user.image
                                            : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fin.pinterest.com%2Fpin%2Fcss-loader-preloader-examples-video--1040683426363976272%2F&psig=AOvVaw2A-URTzFCMc2S49MaMTx1G&ust=1686814329971000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKCV7N3JwP8CFQAAAAAdAAAAABAE"
                                        } alt=""></a>
                                        <div class="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sale</div>
                                        <div class="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">${
                                          user.type
                                        }</div>
                                        </div>
                                        <div class="buy-now-button" id=${index} onclick="showPropertyDetails(${user})">Buy Now</div>
                                    <div class="p-4 pb-0">
                                        <h5 class="text-primary mb-3">$${
                                          user.price
                                        }</h5>
                                        <a class="d-block h5 mb-2" href="">${
                                          user.title
                                        }</a>
                                        <p><i class="fa fa-map-marker-alt text-primary me-2"></i>123 Street, New York, USA</p>
                                    </div>
                                    <div class="d-flex border-top">
                                        <small class="flex-fill text-center border-end py-2"><i class="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft</small>
                                        <small class="flex-fill text-center border-end py-2"><i class="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                        <small class="flex-fill text-center py-2"><i class="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                    </div>
                                </div>
      </div>
      `
    )
    .join("");

  // properties.forEach(function (property, index) {
  //   var propertyElement = document.createElement("div");
  //   propertyElement.classList.add("property");
  //   var propertiesContainer = document.getElementById("test1");
  //   test1.innerHTML = "";
  //   var imageElement = document.createElement("img");
  //   imageElement.src = property.image;
  //   imageElement.alt = "Property Image";
  //   propertyElement.appendChild(imageElement);

  // var buyNowBtn = document.createElement("button");
  // buyNowBtn.classList.add("buy-now-btn");
  // buyNowBtn.textContent = "Buy Now";
  // buyNowBtn.setAttribute("data-index", index);
  // propertyElement.appendChild(buyNowBtn);

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

  var buyNowButtonsMain = document.getElementsByClassName("buy-now-button");
  console.log(buyNowButtonsMain, "sdas");
  Array.from(buyNowButtonsMain).forEach(function (button, index) {
    let indexGot = index;

    button.addEventListener("click", function () {
      console.log(properties, "sdas");
      var index = parseInt(indexGot);
      console.log(index, "sdas");
      var selectedProperty = properties[index];
      console.log(selectedProperty, "sdas");
      showPropertyDetails(selectedProperty, index);
    });
  });
}

function showPropertyDetails(property, index) {
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
                <input type="text" id="fname" name="firstname" placeholder="Your Name">
                <label for="email"><i class="fa fa-envelope"></i> Email</label>
                <input type="text" id="email" name="email" placeholder="
    &ZeroWidthSpace;                   &ZeroWidthSpace;name@example.com">
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
                <input type="text" id="cname" name="cardname" placeholder="Your Name">
                <label for="ccnum">Credit card number</label>
                <input type="text" id="ccnum" name="cardnumber" placeholder="4242-4242-4242-4242">
                <label for="expmonth">Exp Month</label>
                <input type="text" id="expmonth" name="expmonth" placeholder="September">
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
            <input type="submit" value="Continue to checkout" class="btn" id="continueBtn">
          </form>
        </div>
      </div>
      <div class="col-50">
        <div class="container oneMore">




        <div class="col-lg-4 col-md-6 wow fadeInUp"  data-wow-delay="0.1s" >
                                    <div class="property-item rounded overflow-hidden">
                                    <div class="position-relative overflow-hidden">
                                        <a href=""><img class="img-fluid" src=${
                                          property
                                            ? property.image
                                            : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fin.pinterest.com%2Fpin%2Fcss-loader-preloader-examples-video--1040683426363976272%2F&psig=AOvVaw2A-URTzFCMc2S49MaMTx1G&ust=1686814329971000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKCV7N3JwP8CFQAAAAAdAAAAABAE"
                                        } alt=""></a>
                                        <div class="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sale</div>
                                        <div class="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">${
                                          property.type
                                        }</div>
                                        </div>
                                        <button class="buy-now-button" onclick="showPropertyDetails(${property}, ${index})">Buy Now</button>
                                    <div class="p-4 pb-0">
                                        <h5 class="text-primary mb-3">$${
                                          property.price
                                        }</h5>
                                        <a class="d-block h5 mb-2" href="">${
                                          property.title
                                        }</a>
                                        <p><i class="fa fa-map-marker-alt text-primary me-2"></i>123 Street, New York, USA</p>
                                    </div>
                                    <div class="d-flex border-top">
                                        <small class="flex-fill text-center border-end py-2"><i class="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft</small>
                                        <small class="flex-fill text-center border-end py-2"><i class="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                        <small class="flex-fill text-center py-2"><i class="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                    </div>
                                </div>
      </div>

        </div>
      </div>
    </div>
      `;
      var continueBtn = document.getElementById("continueBtn");
  continueBtn.addEventListener("click", function () {
    var properties = JSON.parse(localStorage.getItem("properties")) || [];
    properties.splice(index, 1);
    localStorage.setItem("properties", JSON.stringify(properties));

    displayPropertiesMain();
  });
}
displayPropertiesMain();
