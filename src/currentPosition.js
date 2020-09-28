function getPosition( options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
} ) {
    return new Promise( function( resolve, reject ) {
        navigator.geolocation.getCurrentPosition( resolve, reject, options );
    } );
}

export default getPosition;