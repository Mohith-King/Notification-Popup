const toastBox = document.querySelector(".toastBox");
let successmsg =
  ' <i class="fa-solid fa-circle-check"></i> Successfull Notified';
let errormsg = '<i class="fa-solid fa-circle-xmark"></i> Please Fix the Error';
let invalidmsg =
  '<i class="fa-solid fa-circle-exclamation"></i> Invalid input,check again';

function showToast(msg) {
  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = msg;
  toastBox.appendChild(toast);

  if (msg.includes("Error")) {
    toast.classList.add("error");
    console.log("");
  }
  if (msg.includes("Invalid")) {
    toast.classList.add("invalid");
  }

  setTimeout(() => {
    toast.remove();
  }, 1000);
}
