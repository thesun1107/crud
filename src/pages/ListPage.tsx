import { useNavigate } from 'react-router-dom'; // 리액트 라우터에서 다른 페이지로 이동시켜주는 리액트 훅

// 타입스크립트의 타입 정의
interface Post {
  id: number; // 숫자형 ID
  title: string; // 제목
  author: string; // 작성자
  date: string; // 작성일 (문자열. 예: '2025-07-29')
}

// 더미 데이터
const dummyPosts: Post[] = [
  { id: 1, title: '첫 번째 게시글', author: '임씨', date: '2026-03-18' },
  { id: 2, title: '두 번째 게시글', author: '김씨', date: '2026-03-18' },
];

// 파일 이름과 함수 이름이 반드시 같을 필요는 없지만, 보통은 같게 짓는 게 권장되는 규칙이다.
// 즉, 한 파일당 하나의 주요 컴포넌트 함수만 두는 게 일반적이다.
function ListPage() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '20px' }}>
      <h1>게시글 목록</h1>

      <button onClick={() => navigate('/create')} style={{ marginBottom: '20px' }}>
        글쓰기
      </button>

      <ul>
        {dummyPosts.map((post) => (
          <li
            key={post.id}
            onClick={() => navigate(`/post/${post.id}`)}
            style={{ cursor: 'pointer', marginBottom: '10px' }}
          >
            <strong>{post.title}</strong> - {post.author} ({post.date})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListPage;