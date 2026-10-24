// Example application behaviour, not a required de-gualle runtime.
const $ = (id) => document.getElementById(id);
const form = $("composer"),
  input = $("message"),
  list = $("messages");
const send = $("send"),
  stop = $("stop"),
  retry = $("retry"),
  status = $("chat-status");
let timer,
  active = false,
  lastPrompt = "",
  responseItem;
const text =
  "Progressive enhancement starts with useful HTML. CSS adds a clear visual hierarchy, and optional JavaScript adds interactions. A missing enhancement should never hide the essential content or prevent someone from using a control.";
const responses = {
  normal: text,
  long: Array(5).fill(text).join("\n\n"),
  code: 'Use a native button with an explicit state. No extra state class is needed.\n\n<button type="submit" aria-busy="true" disabled>Sending…</button>',
};
function addMessage(speaker, content) {
  const item = document.createElement("li");
  item.dataset.speaker = speaker;
  const header = document.createElement("header");
  const author = document.createElement("strong");
  author.textContent = speaker === "user" ? "You" : "Assistant";
  header.append(author);
  const body = document.createElement("p");
  body.style.whiteSpace = "pre-wrap";
  body.textContent = content;
  item.append(header, body);
  list.append(item);
  return item;
}
function sync() {
  const unavailable = $("scenario").value === "unavailable";
  send.disabled = active || unavailable;
  send.setAttribute("aria-busy", String(active));
  send.textContent = active ? "Responding…" : "Send message";
  stop.hidden = !active;
  $("clear").disabled = active;
  $("scenario").disabled = active;
  input.readOnly = active;
  if (unavailable)
    status.textContent =
      "Service unavailable. Your draft is preserved. Choose another scenario to continue.";
}
function finish(message) {
  clearInterval(timer);
  active = false;
  list.setAttribute("aria-busy", "false");
  sync();
  status.textContent = message;
}
function respond(isRetry = false) {
  $("chat-error").hidden = true;
  active = true;
  sync();
  status.textContent = "Assistant is responding. You can stop the response.";
  list.setAttribute("aria-busy", "true");
  responseItem = addMessage("assistant", "");
  const scenario = $("scenario").value;
  if (scenario === "error" && !isRetry) {
    timer = setInterval(() => {
      responseItem.remove();
      finish("Response failed. Your message is preserved.");
      $("error-message").textContent =
        "We could not complete the response. Retry to simulate a successful recovery.";
      $("chat-error").hidden = false;
    }, 450);
    return;
  }
  const response = responses[scenario] || responses.normal;
  const paragraph = responseItem.querySelector("p");
  let position = 0;
  timer = setInterval(() => {
    // Follow only when the reader is already near the bottom.
    const follow = list.scrollHeight - list.scrollTop - list.clientHeight < 80;
    position += 12;
    paragraph.textContent = response.slice(0, position);
    if (follow) list.scrollTop = list.scrollHeight;
    if (position >= response.length) {
      if (scenario === "code") {
        paragraph.textContent = response.split("\n\n")[0];
        const pre = document.createElement("pre"),
          code = document.createElement("code");
        code.textContent = response.split("\n\n")[1];
        pre.append(code);
        responseItem.append(pre);
      }
      finish("Response complete. " + response.slice(0, 220));
    }
  }, 65);
}
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (active || $("scenario").value === "unavailable") return;
  if (!input.value.trim()) {
    input.setCustomValidity("Enter a message containing more than spaces.");
    input.setAttribute("aria-invalid", "true");
    input.reportValidity();
    return;
  }
  lastPrompt = input.value.trim();
  addMessage("user", lastPrompt);
  input.value = "";
  respond();
});
input.addEventListener("input", () => {
  input.setCustomValidity("");
  input.removeAttribute("aria-invalid");
});
input.addEventListener("invalid", () =>
  input.setAttribute("aria-invalid", "true"),
);
stop.addEventListener("click", () => {
  finish("Response stopped. The partial response is preserved.");
  const note = document.createElement("small");
  note.textContent = " — Response stopped";
  responseItem.append(note);
  input.focus();
});
retry.addEventListener("click", () => {
  if (!active && lastPrompt) {
    respond(true);
    input.focus();
  }
});
$("clear").addEventListener("click", () => {
  if (active) return;
  list.replaceChildren();
  lastPrompt = "";
  $("chat-error").hidden = true;
  status.textContent = "Conversation cleared. Start a new message.";
  input.focus();
});
$("scenario").addEventListener("change", () => {
  $("chat-error").hidden = true;
  status.textContent = "Scenario ready. Send a message to try it.";
  sync();
});
$("appearance").addEventListener("change", (event) => {
  if (event.target.value === "system") delete document.body.dataset.theme;
  else document.body.dataset.theme = event.target.value;
});
$("size").addEventListener("change", (event) => {
  document.body.dataset.size = event.target.value;
});
sync();
