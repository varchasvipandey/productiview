export const isBrowserNotificationSupported = () => typeof Notification !== 'undefined';

export const checkNotificationPermission = () => {
  if (isBrowserNotificationSupported()) {
    return Notification.permission;
  }
};

export const showNotification = (title: string, body: string) => {
  // if (document.visibilityState === 'visible') return;

  const notification = new Notification(title, { body });

  notification.onclick = () => {
    window.parent.focus();
    notification.close();
  };
};

// notification permission check if denied already
export const requestNotificationPermission = async (bypassPreRes?: boolean) => {
  if (isBrowserNotificationSupported()) {
    if (!bypassPreRes) {
      if (Notification.permission !== 'denied') {
        const res = await Notification.requestPermission();
        if (res === 'granted')
          showNotification('Great Job!', 'Notifications helps you to keep a track of your time');
        return res;
      }
    } else {
      const res = await Notification.requestPermission();
      if (res === 'granted')
        showNotification('Great Job!', 'Notifications helps you to keep a track of your time');
      return res;
    }
  }
};
