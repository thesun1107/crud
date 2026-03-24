import { useState } from 'react';
  import { useNavigate } from 'react-router-dom';
  import { createPost } from '../api/posts';

  export default function CreatePage() {
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();

      const data = await createPost({
        title,
        author,
        content,
        date: new Date().toISOString(),
      });

      console.log(data);
      navigate('/');
    };

    return (
      <div style={{ padding: '20px' }}>
        <h1>글쓰기</h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label>제목</label>
            <br />
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
          </div>

          <div>
            <label>작성자</label>
            <br />
            <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
          </div>

          <div>
            <label>내용</label>
            <br />
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={5}
              required
            />
          </div>

          <button type="submit" style={{ marginTop: '20px' }}>
            등록
          </button>
        </form>
      </div>
    );
  }