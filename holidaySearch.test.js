const HolidaySearch = require("./holidaySearch")

describe("Holiday Search", ()=>{
    it("validate the First Result of the search", () => {
        var Results = HolidaySearch({
            DepartingFrom: 'MAN',
            TravelingTo: 'AGP',
            DepartureDate: '2023/07/01',
            Duration: 7
            });
        expect(Results.First().TotalPrice).toEqual(826);
    });

    it("Customer 1", () => {
        var Results = HolidaySearch({
            DepartingFrom: 'MAN',
            TravelingTo: 'AGP',
            DepartureDate: '2023/07/01',
            Duration: 7
            });
        expect(Results.Flights[0].id).toEqual(2);
        expect(Results.Hotels[0].id).toEqual(9);
    });

    it("Customer 2", () => {
        var Results = HolidaySearch({
            DepartingFrom: 'Any London Airport',
            TravelingTo: 'PMI',
            DepartureDate: '2023/06/15',
            Duration: 10
            });
        expect(Results.Flights[0].id).toEqual(6);
        expect(Results.Hotels[0].id).toEqual(5);
    });

    it("Customer 3", () => {
        var Results = HolidaySearch({
            DepartingFrom: 'Any Airport',
            TravelingTo: 'LPA',
            DepartureDate: '2022/11/10',
            Duration: 14
            });
        expect(Results.Flights[0].id).toEqual(7);
        expect(Results.Hotels[0].id).toEqual(6);
    });

})