/* eslint no-eval: 0 */

export const jsonPathToValue = (path: String, data: Object) => {
  const properties = path.split(".");

  // Early exit if there is contains empty spaces or empty path
  if (
    properties.length === 0 ||
    !(data instanceof Object) ||
    containEmptyCell(properties)
  )
    return undefined;

  let propertyStr = "";
  for (let property in properties) {
    // Elarly exit if array symbol [] don't have index
    if (
      properties[property].indexOf("]") - properties[property].indexOf("[") ===
      1
    ) {
      return undefined;
    }
    // If the property is already an array then we need
    // To keep the index after the mapping of the key
    else if (
      properties[property].indexOf("[") !== -1 &&
      properties[property].indexOf("]") !== -1
    ) {
      // Get Index of array symbols (needed to get later the exact index)
      const openingSymbol = properties[property].indexOf("[");
      const closingSymbol = properties[property].indexOf("]");
      // Get the array name
      let keyasArray = properties[property].substring(0, openingSymbol);
      propertyStr +=
        "['" +
        keyasArray +
        "']" +
        "[" +
        properties[property].substring(openingSymbol + 1, closingSymbol) +
        "]";
    } else {
      // If Property is not an array then simple mapping
      propertyStr += "['" + properties[property] + "']";
    }
  }

  let result = undefined;
  const expression = "result = data" + propertyStr + ";";

  try {
    eval(expression);
    return result;
  } catch (e) {
    console.warn(
      "The mapped json path is not right and causes issues when using ABSENT keys",
    );
    return undefined;
  }
};

export const containEmptyCell = (tab: String[]) =>
  tab.some((element) => element.trim() === "");
