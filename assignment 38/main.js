"use strict";
function describe_city(city, country = "pakistan") {
    console.log(`${city} is in the ${country}`);
}
describe_city("karachi", "pakistan");
describe_city("lahore");
describe_city("mumbai", "india");
