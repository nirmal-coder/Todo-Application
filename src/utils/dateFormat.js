function formatDueDate(dateString, type) {
  const inputDate = new Date(dateString);

  // normalize dates to remove time (so comparisons work correctly)
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);

  const checkDate = new Date(inputDate);
  checkDate.setHours(0, 0, 0, 0);

  if (checkDate.getTime() === today.getTime()) {
    return "Today";
  }

  if (checkDate.getTime() === tomorrow.getTime()) {
    return "Tomorrow";
  }

  if (checkDate < today && type !== "createdAt") {
    return "Due date is over";
  }

  // Format dd/mm/yyyy
  const day = String(inputDate.getDate()).padStart(2, "0");
  const month = String(inputDate.getMonth() + 1).padStart(2, "0");
  const year = inputDate.getFullYear();

  return `${day}/${month}/${year}`;
}

export default formatDueDate;
