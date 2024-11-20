import { _saveQuestion } from "../utils/_DATA";

describe("_saveQuestion", () => {
  // Test case for valid data
  it("should return the saved question with all expected fields when passed valid question data", async () => {
    const question = {
      optionOneText: "Option 1",
      optionTwoText: "Option 2",
      author: "sarahedo",
    };

    const result = await _saveQuestion(question);

    expect(result).toHaveProperty("id");
    expect(result).toHaveProperty("timestamp");
    expect(result).toHaveProperty("author", question.author);
    expect(result).toHaveProperty("optionOne");
    expect(result.optionOne).toHaveProperty("text", question.optionOneText);
    expect(result.optionOne).toHaveProperty("votes");
    expect(result).toHaveProperty("optionTwo");
    expect(result.optionTwo).toHaveProperty("text", question.optionTwoText);
    expect(result.optionTwo).toHaveProperty("votes");
  });

  // Test case for invalid data
  it("should throw an error when missing optionOneText, optionTwoText, or author in the question data", async () => {
    const incorrectQuestion = {
      optionOneText: "Option 1", // Missing optionTwoText and author
    };

    await expect(_saveQuestion(incorrectQuestion)).rejects.toEqual(
      "Please provide optionOneText, optionTwoText, and author"
    );
  });
});
