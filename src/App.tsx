import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

function App() {
  const [language, setLanguage] = useState<"en" | "ua">("en");

  return <RouterProvider router={router} />;
}

export default App;
