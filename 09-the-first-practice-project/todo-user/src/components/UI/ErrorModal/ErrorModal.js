import Button from "../Button/Button";
import Card from "../Card/Card";
import classes from "./ErroModal.module.css";

const ErrorModal = ({ message, title, onErrorHandler }) => {
  return (
    <div className={classes.modal} onClick={onErrorHandler}>
      <Card classes={classes["content-modal"]}>
        <div className={classes["header-modal"]}>{title}</div>
        <div className={classes["body-modal"]}>
          {message}
        </div>
        <div className={classes["footer-modal"]}>
          <Button onClick={onErrorHandler}>Cerrar</Button>
        </div>
      </Card>
    </div>
  );
};

export default ErrorModal;
