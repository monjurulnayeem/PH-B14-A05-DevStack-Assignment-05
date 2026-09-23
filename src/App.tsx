@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap");

@import "tailwindcss";

@theme {
  --font-sans: "Inter", sans-serif;
}

@layer base {
  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    min-width: 320px;
    background: #ffffff;
    color: #0f172a;
    font-family: "Inter", sans-serif;
  }

  button,
  a {
    -webkit-tap-highlight-color: transparent;
  }
}