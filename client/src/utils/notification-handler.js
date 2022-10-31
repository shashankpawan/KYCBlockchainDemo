import { Store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

const renderNotification = (type, title, message) => {
  Store.addNotification({
    title: `${title}!`,
    message,
    type,
    insert: "top",
    container: "top-center",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 1500,
      onScreen: true
    }
  });
};

export default renderNotification;