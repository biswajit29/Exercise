//TODO: investigate why the import is breaking with Jest syntax error
// import { flightData, hotelData } from "./data.js"


const flightData = [
    {
      "id": 1,
      "airline": "First Class Air",
      "from": "MAN",
      "to": "TFS",
      "price": 470,
      "departure_date": "2023-07-01"
    },
    {
      "id": 2,
      "airline": "Oceanic Airlines",
      "from": "MAN",
      "to": "AGP",
      "price": 245,
      "departure_date": "2023-07-01"
    },
    {
      "id": 3,
      "airline": "Trans American Airlines",
      "from": "MAN",
      "to": "PMI",
      "price": 170,
      "departure_date": "2023-06-15"
    },
    {
      "id": 4,
      "airline": "Trans American Airlines",
      "from": "LTN",
      "to": "PMI",
      "price": 153,
      "departure_date": "2023-06-15"
  
    },
    {
      "id": 5,
      "airline": "Fresh Airways",
      "from": "MAN",
      "to": "PMI",
      "price": 130,
      "departure_date": "2023-06-15"
    },
    {
      "id": 6,
      "airline": "Fresh Airways",
      "from": "LGW",
      "to": "PMI",
      "price": 75,
      "departure_date": "2023-06-15"
    },
    {
      "id": 7,
      "airline": "Trans American Airlines",
      "from": "MAN",
      "to": "LPA",
      "price": 125,
      "departure_date": "2022-11-10"
    },
    {
      "id": 8,
      "airline": "Fresh Airways",
      "from": "MAN",
      "to": "LPA",
      "price": 175,
      "departure_date": "2023-11-10"
    },
    {
      "id": 9,
      "airline": "Fresh Airways",
      "from": "MAN",
      "to": "AGP",
      "price": 140,
      "departure_date": "2023-04-11"
    },
    {
      "id": 10,
      "airline": "First Class Air",
      "from": "LGW",
      "to": "AGP",
      "price": 225,
      "departure_date": "2023-07-01"
    },
    {
      "id": 11,
      "airline": "First Class Air",
      "from": "LGW",
      "to": "AGP",
      "price": 155,
      "departure_date": "2023-07-01"
    },
    {
      "id": 12,
      "airline": "Trans American Airlines",
      "from": "MAN",
      "to": "AGP",
      "price": 202,
      "departure_date": "2023-10-25"
    }
  ]
 const hotelData = [
    {
      "id": 1,
      "name": "Iberostar Grand Portals Nous",
      "arrival_date": "2022-11-05",
      "price_per_night": 100,
      "local_airports": ["TFS"],
      "nights": 7
    },
    {
      "id": 2,
      "name": "Laguna Park 2",
      "arrival_date": "2022-11-05",
      "price_per_night": 50,
      "local_airports": ["TFS"],
      "nights": 7
    },
    {
      "id": 3,
      "name": "Sol Katmandu Park & Resort",
      "arrival_date": "2023-06-15",
      "price_per_night": 59,
      "local_airports": ["PMI"],
      "nights": 14
    },
    {
      "id": 4,
      "name": "Sol Katmandu Park & Resort",
      "arrival_date": "2023-06-15",
      "price_per_night": 59,
      "local_airports": ["PMI"],
      "nights": 14
    },
    {
      "id": 5,
      "name": "Sol Katmandu Park & Resort",
      "arrival_date": "2023-06-15",
      "price_per_night": 60,
      "local_airports": ["PMI"],
      "nights": 10
    },
    {
      "id": 6,
      "name": "Club Maspalomas Suites and Spa",
      "arrival_date": "2022-11-10",
      "price_per_night": 75,
      "local_airports": ["LPA"],
      "nights": 14
    },
    {
      "id": 7,
      "name": "Club Maspalomas Suites and Spa",
      "arrival_date": "2022-09-10",
      "price_per_night": 76,
      "local_airports": ["LPA"],
      "nights": 14
    },
    {
      "id": 8,
      "name": "Boutique Hotel Cordial La Peregrina",
      "arrival_date": "2022-10-10",
      "price_per_night": 45,
      "local_airports": ["LPA"],
      "nights": 7
    },
    {
      "id": 9,
      "name": "Nh Malaga",
      "arrival_date": "2023-07-01",
      "price_per_night": 83,
      "local_airports": ["AGP"],
      "nights": 7
    },
    {
      "id": 10,
      "name": "Barcelo Malaga",
      "arrival_date": "2023-07-05",
      "price_per_night": 45,
      "local_airports": ["AGP"],
      "nights": 10
    },
    {
      "id": 11,
      "name": "Parador De Malaga Gibralfaro",
      "arrival_date": "2023-10-16",
      "price_per_night": 100,
      "local_airports": ["AGP"],
      "nights": 7
    },
    {
      "id": 12,
      "name": "MS Maestranza Hotel",
      "arrival_date": "2023-07-01",
      "price_per_night": 45,
      "local_airports": ["AGP"],
      "nights": 14
    },
    {
      "id": 13,
      "name": "Jumeirah Port Soller",
      "arrival_date": "2023-06-15",
      "price_per_night": 295,
      "local_airports": ["PMI"],
      "nights": 10
    },
  ]
const LondonAirports = ["LTN", "LGW"]

const HolidaySearch = ({DepartingFrom, TravelingTo,DepartureDate,Duration}) => { 
    var DepartureDateFmt = DepartureDate.split('/').join('-') ;
    var selectedFlights = flightData
                        .filter(({from, to, departure_date}) => {
                            return (DepartingFrom === "Any Airport" 
                              || (DepartingFrom ==="Any London Airport" && LondonAirports.includes(from) )
                              || from.toUpperCase() === DepartingFrom.toUpperCase())
                                && to.toUpperCase() === TravelingTo.toUpperCase()
                                && departure_date === DepartureDateFmt
                        } )
                        .sort((prev, next) => (prev.price > next.price) ? 1 : -1);

    var selectedHotels = hotelData
                        .filter(({arrival_date, local_airports, nights}) => {
                            return arrival_date === DepartureDateFmt
                                && local_airports.find(element => {
                                    return element.toUpperCase() === TravelingTo.toUpperCase();
                                  })
                                && nights === Duration
                        } )
                        .sort((prev, next) => (prev.price_per_night > next.price_per_night) ? 1 : -1);
    var  Results = {
        Flights : selectedFlights,
        Hotels : selectedHotels,
        First : () => {
            return {
                TotalPrice :  selectedFlights[0].price + selectedHotels[0].price_per_night * Duration,
                Flight     : {
                    Id            : selectedFlights[0].id,
                    DepartingFrom : selectedFlights[0].from,
                    TravelingTo   : selectedFlights[0].to,
                    Price         : selectedFlights[0].price,
                },
                Hotel : {
                    Id      : selectedHotels[0].id,
                    Name    : selectedHotels[0].name,
                    Price   : selectedHotels[0].price_per_night,
                }

            }
    }
}                  
return Results;
}
module.exports = HolidaySearch
