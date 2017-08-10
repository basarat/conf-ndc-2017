function deliveryMethod() {
  // TODO
  return "overnight";
}

function shipWeight() {
  return parseInt(document.getElementById('weight'));
}

/*
 * emailAddr - An email address (or an array of email addresses) to ship to
 */
function sendUpdates(emailAddr) {
  function sendEmail(addr) {
    // Default to standard delivery if empty
    console.log(`Shipping to ${addr} via ${deliveryMethod() | "standard"} delivery`);

    if (shipWeight() > 100) {
      console.log("WARNING: Oversize package");
    }
  }
  // If it's an array, loop over it
  if (emailAddr.length) {
    emailAddr.forEach((idx, val) => {
      sendEmail(val.trim());
    });
  } else {
    sendEmail(emailAddr.trim());
  }
}
