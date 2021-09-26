# Duffel api example

In this project you can find an example
on how to connect to duffel api to search
for flights.

You can find the complete documentation of duffel api [here](https://duffel.com/docs/guides/quick-start)

Requirements:
    npm is required

Steps to run this project:
1. Clone the repo.
2. Run `npm install`
3. Go to [duffel.com](duffel.com), login or signup and get an access token
4. Create a `.env` file and add this line:
```
ACCESS_TOKEN= <your access token>
```
5. In order to get the results, edit `index.js` file and run:
```
node index.js
```

