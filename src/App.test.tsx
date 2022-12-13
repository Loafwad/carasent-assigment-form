import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

//NOTE:
// I would usually seperate each component side by side with their own respective tests.
/* ./components/MyComponent/Component.tsx */
/* ./components/MyComponent/Component.test.tsx */
/* ./components/MyComponent/Component.scss */ //if not using tailwind
