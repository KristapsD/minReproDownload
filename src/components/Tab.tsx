import { useContext } from "react";
import { Welcome } from "./sample/Welcome";
import { TeamsFxContext } from "./Context";
import config from "./sample/lib/config";

const showFunction = Boolean(config.apiName);

export default function Tab() {
  const { themeString } = useContext(TeamsFxContext);

  const testDownload = () => {
    var a = document.createElement("a");
    a.href = window.URL.createObjectURL(new Blob(["CONTENT"], {type: "text/plain"}));
    a.download = "demo.txt";
    a.click();
  }

  return (
    <div
      className={themeString === "default" ? "light" : themeString === "dark" ? "dark" : "contrast"}
    >
      <button onClick={testDownload}>Test Download</button>
    </div>
  );
}
