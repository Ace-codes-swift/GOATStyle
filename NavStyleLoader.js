<script>
!function(){
  if(window.__GHL_LOADER__) return;
  window.__GHL_LOADER__ = !0;

  var o = {
    init: function(){
      var t = window.location.pathname.match(/^\/v2\/location\/([^/]+)/);
      if(t){
        var e = t[1];
        this.applyTheme(e, "main");
      }
    },
    applyTheme: function(t, e){
      var n = "GHL_THEME_CACHE::" + t + "::" + e,
          r = localStorage.getItem(n);

      // Remove old styles
      document.querySelectorAll("link[data-ghl-theme], style[data-ghl-theme]").forEach(function(s){
        s.remove();
      });

      // If cached, apply instantly
      if(r){
        var c = document.createElement("style");
        c.setAttribute("data-ghl-theme","true"),
        c.textContent = r,
        document.head.appendChild(c);
      }

      // Always fetch fresh CSS from your repo
      fetch("https://cdn.jsdelivr.net/gh/Ace-codes-swift/GOATStyle@main/NavStyle.css")
        .then(function(s){
          if(!s.ok) throw new Error("Failed to load theme");
          return s.text();
        })
        .then(function(css){
          localStorage.setItem(n, css);
          var l = document.createElement("style");
          l.setAttribute("data-ghl-theme","true"),
          l.textContent = css,
          document.head.appendChild(l);
        })
        .catch(function(err){
          console.error("[GHL Loader] Theme fetch failed:", err);
        });
    }
  };
  o.init();
}();
</script>
