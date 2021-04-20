function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the 
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.
  let noError = true;
  let lat = document.querySelector("#latitude").value;
  let lng = document.querySelector("#longitude").value;

  let latlbl = document.querySelector("#latlabel");
  let lnglbl = document.querySelector("#lnglabel");
  console.log(lat, lng, NaN === Number(lat), NaN === Number(lng), Number(lat), Number(lng));
  if(Number.isNaN(Number(lat)) || lat > 90 || lat < -90){
    noError = false;
    latlbl.innerHTML = 'Latitude<span class=\"required\">* must be a valid Latitude (-90 to 90)</span>';
  }
  else{
    latlbl.innerHTML='Latitude<span class=\"required\">*</span>';
  }
  if(Number.isNaN(Number(lng))|| lng > 180 || lng < -180){
    noError=false;
    lnglbl.innerHTML= 'Longitude<span class=\"required\">* must be a valid Longitude (-180 to 180)</span>';
  }
  else{
    lnglbl.innerHTML='Longitude<span class=\"required\">*</span>';
  }

  if(!noError){
    event.preventDefault();

  }
  console.log('TODO - validate the longitude, latitude values before submitting');
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function() {
  const form = document.querySelector('form');
  form.onsubmit = validate;
};
