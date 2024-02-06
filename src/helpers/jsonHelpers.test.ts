import { containEmptyCell, jsonPathToValue } from "./jsonHelpers";

describe("jsonPathToValue", () => {
  test("given JSON object and Path should return data", () => {
    // Arrage
    const jsonData = { test: { firstWord: "me", secondWord: "level" } };
    const firstPath = "test.firstWord";
    const secondPath = "test.secondWord";

    // Act
    const expectedFirstOutput = jsonPathToValue(firstPath, jsonData);
    const expectedSecondOutput = jsonPathToValue(secondPath, jsonData);

    // Assert
    expect(expectedFirstOutput).toBe("me");
    expect(expectedSecondOutput).toBe("level");
  });

  test("given JSON object and WRONG Path should return undefined", () => {
    // Arrage
    const jsonData = { test: { firstWord: "me", secondWord: "level" } };
    const wrongPathath = "test.wrong";

    // Act
    const expectedFirstOutput = jsonPathToValue(wrongPathath, jsonData);

    // Assert
    expect(expectedFirstOutput).toBeUndefined();
  });

  test("given JSON object and UNFORMATTED Path should return undefined", () => {
    // Arrage
    const jsonData = { test: { firstWord: "me", secondWord: "level" } };
    const unformattedPath = "test..firstWord";

    // Act
    const expectedFirstOutput = jsonPathToValue(unformattedPath, jsonData);

    // Assert
    expect(expectedFirstOutput).toBeUndefined();
  });

  test("given JSON object and array in Path should return data", () => {
    // Arrage
    const jsonData = { test: { fields: [{ id: "33x" }] }, secondWord: "level" };
    const unformattedPath = "test.fields[0].id";

    // Act
    const expectedFirstOutput = jsonPathToValue(unformattedPath, jsonData);

    // Assert
    expect(expectedFirstOutput).toBe("33x");
  });
});

describe("containEmptyCell", () => {
  test("Given array object with NON empty cells should return FALSE", () => {
    // Arrage
    const tab: string[] = ["test", "firstWord", "me"];

    // Act
    const result = containEmptyCell(tab);

    // Assert
    expect(result).toBeFalsy();
  });

  test("Given array object with empty cells should return true", () => {
    // Arrage
    const tab: string[] = ["test", "", "me"];

    // Act
    const result = containEmptyCell(tab);

    // Assert
    expect(result).toBeTruthy();
  });

  test("Given array object with a MULTI SPACES cell should return true", () => {
    // Arrage
    const tab: string[] = ["test", "  ", "me"];

    // Act
    const result = containEmptyCell(tab);

    // Assert
    expect(result).toBeTruthy();
  });
});
