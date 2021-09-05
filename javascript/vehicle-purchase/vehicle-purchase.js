// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines whether or not you need a licence to operate a certain kind of vehicle.
 *
 * @param {string} kind
 * @returns {boolean} whether a license is required
 */
export function needsLicense(kind) {
  if (kind === "car" || kind === "truck") {
    return true
  } else {
    return false
  }

  throw new Error('Please implement the needsLicense function');
}

/**
 * Helps choosing between two options by recommending the one that
 * comes first in dictionary order.
 *
 * @param {string} option1
 * @param {string} option2
 * @returns {string} a sentence of advice which option to choose
 */
export function chooseVehicle(option1, option2) {
  if (option1.charCodeAt(0) < option2.charCodeAt(0)) {
    return option1 + " is clearly the better choice."
  } else {
    return option2 + " is clearly the better choice."
  }
  throw new Error('Please implement the chooseVehicle function');
}

/**
 * Calculates an estimate for the price of a used vehicle in the dealership
 * based on the original price and the age of the vehicle.
 *
 * @param {number} originalPrice
 * @param {number} age
 * @returns expected resell price in the dealership
 */
export function calculateResellPrice(originalPrice, age) {
  if (age < 3) {
    return originalPrice - (originalPrice * 0.2)
  } else if (age < 4 && age > 10) {
    return originalPrice - (originalPrice * 0.5)
  } else {
    return originalPrice - (originalPrice * 0.3)
  }
  throw new Error('Please implement the calculateResellPrice function');
}