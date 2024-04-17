import { isWithinInterval, parseISO } from "date-fns";

import mockTraveller from "./data.js";

function findActiveBahnCard(traveller) {
    const today = new Date();
    for (let card of traveller.bahnCards) {
        const validFrom = parseISO(card.validFrom.toString());
        const validTo = parseISO(card.validTo.toString());
        if (isWithinInterval(today, { start: validFrom, end: validTo })) {
            return card;
        }
    }
    return null;
}

console.log("Checking active BahnCard for traveller:" , mockTraveller.firstName, mockTraveller.lastName);
const activeCard = findActiveBahnCard(mockTraveller);
if (activeCard) {
    let validFrom = activeCard.validFrom.toString().split("T")[0];
    let validTo = activeCard.validTo.toString().split("T")[0];
    let messageText = `Active BahnCard found: ${activeCard.bcType} valid from ${validFrom} to ${validTo}`;
    console.log(messageText);
} else {
    console.log("No active BahnCard found.");
}

export { findActiveBahnCard };