const costBtn = document.querySelector('.cost-btn')
const city = document.querySelector('#city')
const nightNumber = document.querySelector('.nightNum')

function hotelCost(numNight) {
    let priceHotel = numNight * 140
    return priceHotel
}

function flightCost(city, numNight) {
    let priceFlight = city * numNight
    if (numNight<=3) {
        return priceFlight
    }else if(numNight>3){
        return priceFlight - (priceFlight*0.1)
    }
}

function rentalCost(numNight) {
    let priceRental = numNight * 40
    if (numNight<3) {
        return priceRental
    }else if(numNight>=3 && numNight<7){
        return priceRental -= 20
    }else if (numNight>=7){
        return priceRental -= 50
    }
}

function calculateCost() {
    costBtn.onclick=() => {
        
    }
}