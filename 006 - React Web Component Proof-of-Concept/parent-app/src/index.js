const validPropsChangingCodePattern = /^document.querySelector\(["']react-button["']\).setAttribute\(["']color["'],\s?["'](#[0-9a-fA-F]{3}|#[0-9a-fA-F]{6}|#[0-9a-fA-F]{8}|[a-zA-z]+)["']\);$/
const runCodeButton = document.querySelector("#run-code-button");

runCodeButton.addEventListener("click", () => {
  let editedCode = document.querySelector(".runnable-code-block pre").textContent;

  const matches = editedCode.match(validPropsChangingCodePattern);
  const isSafe = matches !== null;

  if (!isSafe) {
    alert("Edited code is not in correct format. Due to security reason, the code is not executed.")
    return;
  }

  document.querySelector("react-button").setAttribute("color", matches[1]);
});
