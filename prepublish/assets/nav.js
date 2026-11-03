/* スマホ用メニュー（ハンバーガー）の開閉。フレームワーク不使用。 */
(function () {
  var html = document.documentElement;
  html.classList.add('js');
  var btn = document.querySelector('.nav-toggle');
  var nav = document.getElementById('gnav');
  if (!btn || !nav) return;
  function setOpen(open) {
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く');
    nav.classList.toggle('is-open', open);
  }
  btn.addEventListener('click', function () {
    setOpen(btn.getAttribute('aria-expanded') !== 'true');
  });
  document.addEventListener('keydown', function (e) {
    if ((e.key === 'Escape' || e.key === 'Esc') && btn.getAttribute('aria-expanded') === 'true') {
      setOpen(false); btn.focus();
    }
  });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) setOpen(false); });
  var mq = window.matchMedia('(min-width: 761px)');
  var onChange = function () { if (mq.matches) setOpen(false); };
  if (mq.addEventListener) mq.addEventListener('change', onChange); else if (mq.addListener) mq.addListener(onChange);
})();
