import { findActiveBahnCard } from "./bahnCardCheck.js";
import mockTraveller from "./data.js";

describe("findActiveBahnCard", () => {
    it("should return the active BahnCard if found", () => {
        const activeCard = findActiveBahnCard(mockTraveller);
        expect(activeCard).toBeDefined();
        expect(activeCard.bcType).toBe("BCB50");
    });

    it("should return null if no active BahnCard is found", () => {
        const travellerWithoutBahnCard = { ...mockTraveller, bahnCards: [] };
        const activeCard = findActiveBahnCard(travellerWithoutBahnCard);
        expect(activeCard).toBeNull();
    });
});
