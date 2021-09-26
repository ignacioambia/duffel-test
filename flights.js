import { duffelInstance } from './duffelInstance.js';

duffelInstance.offerRequests.create({
    slices:[
        {
            origin: "MEX",
            destination: "MTY",
            departure_date:"2021-10-01",
        },
        {
            origin: "MTY",
            destination: "MEX",
            departure_date:"2021-10-10",
        }
    ],
    passengers: [ { type: "adult"}],
    cabin_class: "business"
}).then(  ( value ) => {
    const { offers } = value.data;
    console.log('offers ',  offers);
    console.log('total offers : ', offers.length)
});


