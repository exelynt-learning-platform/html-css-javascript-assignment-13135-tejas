
const scheduleButton = document.querySelector("#schedule-toggle");
const scheduleSection = document.querySelector("#schedule");

scheduleButton.addEventListener("click", function () {
    scheduleSection.classList.toggle("hidden");

    const isHidden = scheduleSection.classList.contains("hidden");

    scheduleButton.textContent = isHidden
        ? "Show Schedule"
        : "Hide Schedule";

    scheduleButton.setAttribute("aria-expanded", String(!isHidden));
});
