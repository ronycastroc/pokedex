import { useLocalStorage } from "@hooks";
import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { useDispatch } from "react-redux";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
}));

describe("useLocalStorage", () => {
  let dispatchMock: jest.Mock;

  beforeEach(() => {
    dispatchMock = jest.fn();
    (useDispatch as jest.Mock).mockReturnValue(dispatchMock);
  });

  afterEach(() => {
    localStorage.clear();
  });

  it("should return initial value if localStorage is empty", () => {
    const { result } = renderHook(() => useLocalStorage("testKey", "testValue"));
    expect(result.current[0]).toEqual("testValue");
  });

  it("should return stored value from localStorage", () => {
    localStorage.setItem("testKey", JSON.stringify("storedValue"));
    const { result } = renderHook(() => useLocalStorage("testKey", "testValue"));
    expect(result.current[0]).toEqual("storedValue");
  });

  it("should update stored value when setting new value", () => {
    const { result } = renderHook(() => useLocalStorage("testKey", "testValue"));
    const newValue = "testNewValue";
    act(() => {
      result.current[1](newValue);
    });
    expect(JSON.parse(localStorage.getItem("testKey")!)).toEqual(newValue);
    expect(result.current[0]).toEqual(newValue);
  });

  it("should dispatch action with stored value when component mounts", () => {
    localStorage.setItem("testKey", JSON.stringify("storedValue"));
    renderHook(() => useLocalStorage("testKey", "testValue"));
    expect(dispatchMock).toHaveBeenCalledWith({ type: "ADD_FAVORITE_POKEMONS", payload: "storedValue" });
  });

  it("should catch errors and return initial value", () => {
    const spy = jest.spyOn(global.console, "log");
    localStorage.setItem("testKey", "invalidJSON");
    const { result } = renderHook(() => useLocalStorage("testKey", "testValue"));
    expect(spy).toHaveBeenCalled();
    expect(result.current[0]).toEqual("testValue");
  });
});

