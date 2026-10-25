// Demo-only application logic. The library itself has no JavaScript runtime.
const $ = (id) => document.getElementById(id);
const rows = Array.from(document.querySelectorAll("tbody tr"));
let pending = false;
function filter() {
  if (pending) return;
  const query = $("search").value.toLowerCase().trim(),
    status = $("filter").value;
  let count = 0;
  for (const row of rows) {
    row.hidden =
      !row.cells[0].textContent.toLowerCase().includes(query) ||
      (status !== "all" && row.cells[1].textContent !== status);
    if (!row.hidden) count++;
  }
  $("empty").hidden = count > 0;
  $("results").hidden = count === 0;
  $("dashboard-status").textContent =
    `${count} project${count === 1 ? "" : "s"} shown.`;
}
function refresh(fail = false, returnFocus = false) {
  if (pending) return;
  pending = true;
  $("dashboard-error").hidden = true;
  $("empty").hidden = true;
  $("results").hidden = true;
  $("dashboard-status").textContent = "Loading projects…";
  $("refresh").setAttribute("aria-busy", "true");
  for (const id of ["refresh", "fail", "retry"]) $(id).disabled = true;
  setTimeout(() => {
    pending = false;
    $("refresh").setAttribute("aria-busy", "false");
    for (const id of ["refresh", "fail", "retry"]) $(id).disabled = false;
    if (fail) {
      $("dashboard-error").hidden = false;
      $("dashboard-status").textContent = "Refresh failed.";
    } else {
      filter();
    }
    if (returnFocus) $("refresh").focus();
  }, 750);
}
$("filters").addEventListener("submit", (event) => event.preventDefault());
$("search").addEventListener("input", filter);
$("filter").addEventListener("change", filter);
$("refresh").addEventListener("click", () => refresh());
$("fail").addEventListener("click", () => refresh(true));
$("retry").addEventListener("click", () => refresh(false, true));
