function showNotification(id) {
    const notification = document.getElementById(id);
    notification.classList.add('show');
  }

  function hideNotification(id) {
    const notification = document.getElementById(id);
    notification.classList.remove('show');
  }
  