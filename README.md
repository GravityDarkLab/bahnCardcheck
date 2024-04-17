# bahnCardcheck

This is a simple script written in JavaScipt to check if a given traveler have a valid Bahncard or not.
This script use mocked mangoDB data.

## Pseudo code

```javascript
Function findActiveBahnCard(traveller)
    // Set the current date as today
    today := current date

    // Loop through each BahnCard in the traveller's list of BahnCards
    For each card in traveller.bahnCards
        // Parse the validFrom and validTo ISOstrings into date objects
        validFrom := parse card.validFrom as date
        validTo := parse card.validTo as date

        // Check if today's date falls within the validFrom and validTo range
        If today is within the interval [validFrom, validTo]
            Return card    // Return the active BahnCard

    // If no active card is found, return null
    Return null
EndFunction
```

## How to run the script

1. Clone the repository
2. Run `npm install` to install the dependencies.
3. Run `npm run check` to run the script.
4. Run `npm run test` to run the test cases.
