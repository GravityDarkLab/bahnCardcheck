// Purpose: This file is used to mimic the data that would be returned from a MangoDB database.

//Mimic the ObjectId function from MongoDB
const ObjectId = (value) => {
    return value;
};

//Mimic the NumberInt function from MongoDB
const NumberInt = (value) => {
    return Number(value);
};

//Mimic the ISODate function from MongoDB
function ISODate(dateString) {
    const date = new Date(dateString);
    return {
        date,
        toString: () => date.toISOString(),
        valueOf: () => date
}
}

const mockTraveller = {
    "_id": 1021,
    "firstName": "Karsten",
    "lastName": "Kolle",
    "bahnCards": [
        {
        "bcType" : "BCB50",
        "saving" : NumberInt(50),
        "clazz" : NumberInt(1),
        "category" : "BUSINESS",
        "validFrom" : ISODate("2022-12-06T00:00:00.000+0000"),
        "validTo" : ISODate("2023-12-05T00:00:00.000+0000"),
        "cardNo" : "7081420003669999",
        "costs" : NumberInt(626),
        "purchaseDate" : ISODate("2022-12-02T00:00:00.000+0000"),
        "bookingNo" : "1-159224153111",
        "productName" : "DB BC100 1 HK",
        "_id" : ObjectId("641c3f464f6b6b6336923d4d")
        },
        {
            "bcType" : "BCB50",
            "saving" : NumberInt(50),
            "clazz" : NumberInt(1),
            "category" : "BUSINESS",
            "validFrom" : ISODate("2021-12-01T00:00:00.000+0000"),
            "validTo" : ISODate("2022-11-30T00:00:00.000+0000"),
            "cardNo" : "7081420003669999",
            "costs" : NumberInt(626),
            "purchaseDate" : ISODate("2021-11-17T00:00:00.000+0000"),
            "bookingNo" : "1-14578251110",
            "productName" : "DB BC100 1 HK",
            "_id" : ObjectId("641c3f644f6b6b6336924a8a")
        },
        {
            "bcType" : "BCB50",
            "saving" : NumberInt(50),
            "clazz" : NumberInt(1),
            "category" : "BUSINESS",
            "validFrom" : ISODate("2023-12-16T00:00:00.000+0000"),
            "validTo" : ISODate("2024-12-15T00:00:00.000+0000"),
            "cardNo" : "7081420003669999",
            "costs" : NumberInt(626),
            "purchaseDate" : ISODate("2023-12-07T00:00:00.000+0000"),
            "bookingNo" : "1-1720622208",
            "productName" : "DB BC100 1 HK",
            "_id" : ObjectId("65a1170f5d89ec4f8b35eba6")
        }
    ]
};

export default mockTraveller;
