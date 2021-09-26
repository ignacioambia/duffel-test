import { duffelInstance } from './duffelInstance.js';

var allAirlines = []
async function getNextAirlines(after){
    console.log('after value received : ', after ? true : false);
    const request = {};

    if(after) request.after = after;
    request.limit = 200;

    return await duffelInstance.airlines.list(request).then( value => {
        allAirlines = [...allAirlines, ...value.data];
        return value.meta.after;
    });
}

getNextAirlines()
.then( getNextAirlines)
.then(getNextAirlines)
.then(getNextAirlines)
.then(getNextAirlines)
.then(getNextAirlines)
.then(getNextAirlines)
.then(()=>{
    allAirlines.forEach( e=> console.log(e.name));
});

