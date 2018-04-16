import { concatClassNames, propValidator } from "../src/helpers.js";

describe("concatClassNamess", () => {
  let f = concatClassNames;

  test("joins an array of strings", () =>
    expect(f(["a", "b", "c"])).toBe("a b c"));

  test("deduplicates strings", () =>
    expect(f("a", "a", "hello", "world world")).toBe("a hello world"));

  test("handles mixed, string, array args", () =>
    expect(f("hello", ["world", "how", "are"], "you", ["today"])).toBe(
      "hello world how are you today"
    ));

  test("throws when called with non-array or non-string values", () =>
    expect(() => f(["a", { hello: "there" }])).toThrow());

  test("splits string elements on spaces, flattens the array", () =>
    expect(f("hello world how", ["are you", "today"])).toBe(
      "hello world how are you today"
    ));
});

describe("propValidator.endsWithpx", () => {
  let f = propValidator.endsWithpx;
  let props = { size: "12px", bad: "not", otherBad: ["hello", "there"] };
  test("returns nothing for px props", () =>
    expect(f(props, "size", "MyComponent")).toBeUndefined());

  test("returns Error on non-px props", () =>
    expect(f(props, "bad", "MyComponent")).toBeInstanceOf(Error));

  test("returns Error for non-string props (does not throw)", () =>
    expect(f(props, "otherBad", "MyComponent")).toBeInstanceOf(Error));
});
