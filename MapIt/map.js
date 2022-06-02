function initMap() {
    const new_delhi = { lat: 28.613939, lng: 77.209023 };
    const map = new google.maps.Map(document.getElementById("box"), {
      zoom: 4,
      center: new_delhi,
    });
    const marker = new google.maps.Marker({
      position: new_delhi,
      map: map,
    });
 

  
  }