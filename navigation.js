// 예전 단일 페이지 주소(#papers 등)로 접속해도 새 페이지로 연결합니다.
// 기본 메뉴 이동에는 JavaScript가 필요하지 않습니다.
(() => {
  const routes = { '#papers': 'papers.html', '#cv': 'cv.html', '#talks': 'talks.html', '#misc': 'materials.html', '#notes': 'materials.html' };
  const followLegacyLink = () => {
    const route = routes[window.location.hash];
    if (route) window.location.replace(route);
  };
  followLegacyLink();
  window.addEventListener('hashchange', followLegacyLink);
})();
