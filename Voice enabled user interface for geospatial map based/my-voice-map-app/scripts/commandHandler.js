function handleVoiceCommand(command) {
    if (command.includes('zoom in')) {
      map.setZoom(map.getZoom() + 1);
    } else if (command.includes('find restaurant')) {
        const restaurantIcon = L.icon({
            iconUrl: 'images/restaurant.png',
            iconSize: [32, 32]
        });
        L.marker([51.5, -0.09], { icon: restaurantIcon }).addTo(map);
    } else if (command.includes('zoom out')) {
        map.setZoom(map.getZoom() - 1);
    } else if (command.includes('find museum')) {
        const museumIcon = L.icon({
            iconUrl: 'images/museum.png',
            iconSize: [32, 32]
        });
        L.marker([51.5, -0.09], { icon: museumIcon }).addTo(map);
    }

    console.log('Voice Command:', command);
}

function zoomIn() {
    map.setZoom(map.getZoom() + 1);
}

function zoomOut() {
    map.setZoom(map.getZoom() - 1);
}

function zoomToLocation() {
    map.setView([51.5, -0.09], 13);
}

function zoomToCountry() {
    map.setView([51.5, -0.09], 5);
}

function zoomToCity() {
    map.setView([51.5, -0.09], 10);
}

function zoomToStreet() {
    map.setView([51.5, -0.09], 15);
}

function zoomToLandmark() {
    map.setView([51.5, -0.09], 17);
}

function zoomToPlace() {
    map.setView([51.5, -0.09], 16);
}

function zoomToAddress() {
    map.setView([51.5, -0.09], 14);
}

function zoomToCoordinates() {
    map.setView([51.5, -0.09], 12);
}

function zoomToLatitude() {
    map.setView([51.5, -0.09], 11);
}

function zoomToLongitude() {
    map.setView([51.5, -0.09], 11);
}

function findRestaurant() {
    const restaurantIcon = L.icon({
        iconUrl: 'images/restaurant.png',
        iconSize: [32, 32]
    });
    L.marker([51.5, -0.09], { icon: restaurantIcon }).addTo(map);
}

function findMuseum() {
    const museumIcon = L.icon({
        iconUrl: 'images/museum.png',
        iconSize: [32, 32]
    });
    L.marker([51.5, -0.09], { icon: museumIcon }).addTo(map);
}

function findPark() {
    const parkIcon = L.icon({
        iconUrl: 'images/park.png',
        iconSize: [32, 32]
    });
    L.marker([51.5, -0.09], { icon: parkIcon }).addTo(map);
}

function findHotel() {
    const hotelIcon = L.icon({
        iconUrl: 'images/hotel.png',
        iconSize: [32, 32]
    });
    L.marker([51.5, -0.09], { icon: hotelIcon }).addTo(map);
}

function findCafe() {
    const cafeIcon = L.icon({
        iconUrl: 'images/cafe.png',
        iconSize: [32, 32]
    });
    L.marker([51.5, -0.09], { icon: cafeIcon }).addTo(map);
}

function findBar() {
    const barIcon = L.icon({
        iconUrl: 'images/bar.png',
        iconSize: [32, 32]
    });
    L.marker([51.5, -0.09], { icon: barIcon }).addTo(map);
}

function findShop() {
    const shopIcon = L.icon({
        iconUrl: 'images/shop.png',
        iconSize: [32, 32]
    });
    L.marker([51.5, -0.09], { icon: shopIcon }).addTo(map);
}

function findSchool() {
    const schoolIcon = L.icon({
        iconUrl: 'images/school.png',
        iconSize: [32, 32]
    });
    L.marker([51.5, -0.09], { icon: schoolIcon }).addTo(map);
}

function findLibrary() {
    const libraryIcon = L.icon({
        iconUrl: 'images/library.png',
        iconSize: [32, 32]
    });
    L.marker([51.5, -0.09], { icon: libraryIcon }).addTo(map);
}

function findHospital() {
    const hospitalIcon = L.icon({
        iconUrl: 'images/hospital.png',
        iconSize: [32, 32]
    });
    L.marker([51.5, -0.09], { icon: hospitalIcon }).addTo(map);
}