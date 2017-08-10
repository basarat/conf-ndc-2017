function deliveryMethod() {
    return "overnight";
}
function shipWeight() {
    return parseInt(document.getElementById('weight').textContent);
}
function sendUpdates(emailAddr) {
    function sendEmail(addr) {
        console.log("Shipping to " + addr + " via " + (deliveryMethod() || "standard") + " delivery");
        if (shipWeight() > 100) {
            console.log("WARNING: Oversize package");
        }
    }
    if (Array.isArray(emailAddr)) {
        emailAddr.forEach(function (val) {
            sendEmail(val.trim());
        });
    }
    else {
        sendEmail(emailAddr.trim());
    }
}
