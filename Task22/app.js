const date = new Date();
const weekDay = date.getDay();
function lessonAlert(weekD) {
  if (weekD >= 1 && weekD <= 5) {
    return alert("Bu gün dərsə getməlisiniz...");
  } else {
    return alert("Bu gün istirahət günüdür...");
  }
}

lessonAlert(weekDay);
