import { FiTrash2, FiThumbsUp } from "react-icons/fi";
import { Avatar } from "../Avatar/Avatar";
import styles from "./Comment.module.css";

export function Comment({content, onDeleteComment}) {

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/VitorC0sta.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Vitor Costa</strong>
              <time title="15 de Maio às 11:17" dateTime="2024-05-15 12:17:35">
                1h
              </time>
            </div>
            <button title="Deletar Comentário" onClick={handleDeleteComment}><FiTrash2 size={24}/></button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button>
            <FiThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
