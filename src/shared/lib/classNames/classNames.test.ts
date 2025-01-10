import { classNames } from "./classNames";

describe("classNames", () => {
    test("only main class", () => {
        expect(classNames("mainClass")).toBe("mainClass");
    });

    test("with additional classes", () => {
        const expected = "mainClass class1 class2";
        expect(classNames("mainClass", {}, ["class1", "class2"])).toBe(expected);
    });

    test("with mods", () => {
        const expected = "mainClass class1 class2 hovered scrollable";
        expect(
            classNames("mainClass", { hovered: true, scrollable: true }, ["class1", "class2"]),
        ).toBe(expected);
    });

    test("with falsy mods", () => {
        const expected = "mainClass class1 class2 hovered";
        expect(
            classNames("mainClass", { hovered: true, scrollable: false }, ["class1", "class2"]),
        ).toBe(expected);
    });

    test("with undefined mods", () => {
        const expected = "mainClass class1 class2 hovered";
        expect(
            classNames("mainClass", { hovered: true, scrollable: undefined }, ["class1", "class2"]),
        ).toBe(expected);
    });
});
