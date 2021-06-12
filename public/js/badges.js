// Retrieving data from variables.json
fetch('variables.json').then(function (response) {
    return response.json();
 }).then(function (obj) {
   console.log(obj);
   console.log(obj.address);
 }).catch(function (error) {
   console.log("Something went wrong retriving JSON file");
   console.log(error);
 })

// POST to server using fetch() api
const a=10,b=6;
console.log(medsc);

const data = {medsc,a,b};
const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
        // "Content-Type": "application/x-www-form-urlencoded",
    },
    body: JSON.stringify(data)
};
fetch('/api', options);