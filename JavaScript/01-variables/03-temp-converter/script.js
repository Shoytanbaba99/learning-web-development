const nmb = document.getElementById("celsiusInput");
const btn = document.getElementById("convertBtn");
const rslt = document.getElementById("output");

btn.addEventListener("click", () => {
    const F = (Number(nmb.value) * 1.8) + 32;

    rslt.innerText = F + " °F";
});
