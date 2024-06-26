import { Avatar } from "../Avatar/Avatar";
import { Comment } from "../Comment/Comment";
import { format, formatDistanceToNow } from "date-fns";
import ptBr from 'date-fns/locale/pt-BR'

import styles from "./Post.module.css";
import { useState } from "react";

/*
  THIS DATAS WAS CREATED FOR STUDIES FINALITIES, ANY SIMILARITY TO REALITY IS PURELY COINCIDENTAL !
  ESTES DADOS FORAM CRIADOS PARA FINALIDADES DE ESTUDO, QUALQUER SEMELHANÇA COM A REALIDADE É MERA COINCIDÊNCIA !
*/

export function Post({ author, content, publishedAt }) {
  const [comments, setComments] = useState([
   'Post muito bacana, hein ?'
  ]);
  const [newCommentText, setNewCommentText] = useState("");

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h.'", {
    locale: ptBr,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBr,
    addSuffix: true
  })

  function handleCreateNewComment(event) {
    event.preventDefault();
    
    setComments([...comments, newCommentText]);
    setNewCommentText('');
  }

  function handleNewCommentInvalid(event) {
    event.target.setCustomValidity('Esse campo é obrigatório.');
  }

  function handleNewCommentChange(event) {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value)
  }

  function deleteComment(commentToDelete) {
    const commentsWithoutDeletedOne = comments.filter(comment => comment!==commentToDelete);
    
    setComments(commentsWithoutDeletedOne);
  }
 const isNewCommentEmpty = newCommentText.length === 0; 

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
            src={author.avatarUrl}
          />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
            if (line.type === 'paragraph') {
              return <p key={line.content}>{line.content}</p>
            } else if (line.type === 'link') {
              return <p key={line.content}><a href={line.content}>{line.content}</a></p>
            }
        })}  
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu comentário</strong>
        
        <textarea
          placeholder="Digite aqui"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />
        
        <footer>
          <button
            type="submit"
            disabled={isNewCommentEmpty}
          >
            Comentar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => (
          <Comment 
            key={comment}
            content={comment}
            onDeleteComment={deleteComment}
          />
        ))}
      </div>
    </article>
  );
}
