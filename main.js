const costBtn = document.querySelector('.cost-btn')
const city = document.querySelector('#city')
const nightNumber = document.querySelector('.nightNum')
const container =document.querySelector('.container')
container.style.textAlign='center'
container.style.backgroundColor = '#B8D6D4'
container.style.borderRadius = '20px'



function hotelCost(numNight) {
    let priceHotel = numNight * 140
    return priceHotel
}

function flightCost(city, numNight) {
    let priceFlight = city * numNight
    if (numNight <= 3) {
        return priceFlight
    } else if (numNight > 3) {
        return priceFlight - (priceFlight * 0.1)
    }
}

function rentalCost(numNight) {
    let priceRental = numNight * 40
    if (numNight < 3) {
        return priceRental
    } else if (numNight >= 3 && numNight < 7) {
        return priceRental -= 20
    } else if (numNight >= 7) {
        return priceRental -= 50
    }
}

const hotelCostResult = document.querySelector('.hotelCostResult')
const travelCostResult = document.querySelector('.travelCostResult')
const costCarRentalResult = document.querySelector('.costCarRentalResult')
const totalCostResult = document.querySelector('.totalCostResult')

function calculateCost() {
    costBtn.onclick = () => {
        let hotelCostValue = hotelCost(nightNumber.value)
        let flightCostValue = flightCost((city.value) * 1, nightNumber.value)
        let rentalCostValue = rentalCost(nightNumber.value)

        hotelCostResult.value = `${hotelCostValue}`
        travelCostResult.value = `${flightCostValue}`
        costCarRentalResult.value = `${rentalCostValue}`

        let totalCostTravel = hotelCostValue + flightCostValue + rentalCostValue
        totalCostResult.value = `${totalCostTravel}`
    }
}
calculateCost()