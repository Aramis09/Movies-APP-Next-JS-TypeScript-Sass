import styles from "./modal.module.scss";
import { useStyle } from "@/customHooks/useStyles";
interface MsgModalType {
  tittle: string;
  body: string;
}

export default function Modal(msg: MsgModalType) {
  const { style, changeStyles } = useStyle({
    styles,
    first: "containerShowModal",
    second: "containerHideModal",
  });
  console.log(style);

  return (
    <div className={style}>
      <p onClick={changeStyles} className={styles.close}>
        X
      </p>
      <h4>{msg.tittle}</h4>
      <p>{msg.body}</p>
    </div>
  );
}
