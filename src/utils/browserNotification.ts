export const isBrowserNotificationSupported = () => typeof Notification !== 'undefined';

export const checkNotificationPermission = () => {
  if (isBrowserNotificationSupported()) {
    return Notification.permission;
  }
};

export const showNotification = (
  title: string,
  body: string,
  bypassActiveScreenCheck?: boolean
) => {
  if (!bypassActiveScreenCheck && document.visibilityState === 'visible') return;

  const options = { body, silent: true };

  const notification = new Notification(title, options);

  notification.onclick = () => {
    window.parent.focus();
    notification.close();
  };
};

// notification permission check if denied already
export const requestNotificationPermission = async (bypassPreRes?: boolean) => {
  if (isBrowserNotificationSupported()) {
    if (checkNotificationPermission() !== 'granted') {
      if (!bypassPreRes) {
        if (Notification.permission !== 'denied') {
          const res = await Notification.requestPermission();
          if (res === 'granted')
            showNotification(
              'Great Job!',
              'Notifications help you to keep a track of your time',
              true
            );
          return res;
        }
      } else {
        const res = await Notification.requestPermission();
        if (res === 'granted')
          showNotification(
            'Great Job!',
            'Notifications help you to keep a track of your time',
            true
          );
        return res;
      }
    }
  }
};
