import { StrictMode } from 'react'                  // React 개발 모드에서 오류를 더 빨리 캐치해주는 래퍼. 실제 동작에는 영향 없음.
import { createRoot } from 'react-dom/client'       // React 18 이상에서 사용하는 새로운 렌더링 방식.
import { BrowserRouter } from 'react-router-dom';   // 리액트에서 라우팅 적용 (이거 추가)

import './index.css'
import App from './App.tsx'                         // 실제 앱 컴포넌트를 가져옴


// HTML에서 <div id="root"></div> 요소를 가져와 여기에 리액트를 붙임
createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>         
        <App />
      </BrowserRouter>
  </StrictMode>,
)