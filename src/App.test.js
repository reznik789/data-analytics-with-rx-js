import React from "react";
import { render, waitForDomChange } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  test("render N/A on initialization, and value after getting data", async () => {
    let { getByTestId, rerender } = render(<App />);
    const tempSpan = getByTestId("temp-val");
    const pressSpan = getByTestId("press-val");
    const humSpan = getByTestId("hum-val");
    expect(tempSpan.textContent).toBe("N/A");
    expect(pressSpan.textContent).toBe("N/A");
    expect(humSpan.textContent).toBe("N/A");
    await waitForDomChange(tempSpan);
    await waitForDomChange(pressSpan);
    await waitForDomChange(humSpan);
    rerender();
    const isNumberStringOrDefault = val =>
      /^[0-9]*$/.test(val) || val === "N/A";
    expect(tempSpan.textContent).toSatisfy(isNumberStringOrDefault);
    expect(pressSpan.textContent).toSatisfy(isNumberStringOrDefault);
    expect(humSpan.textContent).toSatisfy(isNumberStringOrDefault);
  });
});
