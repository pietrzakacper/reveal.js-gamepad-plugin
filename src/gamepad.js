const doc = document;

const date = new Date();
const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const msg = `Today is ${weekDays[date.getDay()]} and if you can see this message everything works properly.`;

const $dialog = doc.querySelector(".dialog");

const cookie = doc.cookie.match(/([^=]+)=(.*)/);

if (cookie && cookie[2] !== "true") {
  $dialog.className = "dialog";
} else {
  doc.querySelector("#hello").innerHTML = "Hello there... again!";
}

doc.querySelector("#dialog-msg").innerHTML = msg;
doc.querySelector("#dialog-close").onclick = () => {
  $dialog.className = "dialog";

  if (doc.querySelector("#show-again").checked) {
    const exdays = 365;
    date.setTime(date.getTime() + (exdays * 24 * 60 * 60 * 1000));
    doc.cookie = `showDialog=false; expires=${date.toUTCString()}`;
  }
};

doc.cookie = `asd=false; expires=${date.toUTCString()}`;

console.info(msg);
