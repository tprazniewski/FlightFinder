export type TypeFlight = {
  oneway: [
    {
      _id: string;
      arrivalDestination: string;
      depatureDestination: string;
      flight_id: string;
      itineraries: {
        arriveAt: string;
        avaliableSeats: number;
        depatureAt: string;
        prices: [
          {
            adult: number;
            child: number;
            currency: string;
          }
        ];
      };
    }
  ];
  returnWay: [
    {
      _id: string;
      arrivalDestination: string;
      depatureDestination: string;
      flight_id: string;
      itineraries: {
        arriveAt: string;
        avaliableSeats: number;
        depatureAt: string;
        prices: [
          {
            adult: number;
            child: number;
            currency: string;
          }
        ];
      };
    }
  ];
};

// export type TypeFlight = {
//   _id: string;
//   arrivalDestination: string;
//   depatureDestination: string;
//   flight_id: string;
//   itineraries: {
//     arriveAt: string;
//     avaliableSeats: number;
//     depatureAt: string;
//     prices: [
//       {
//         adult: number;
//         child: number;
//         currency: string;
//       }
//     ];
//   };
// };
