module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  darkMode: "class", // media
  plugins: [],
};

// 위 content 배열안에 넣어준것들에 대해서 설명해보자.
// 해당 배열안에는 우리가 tailwindcss를 어디서 사용할것인가에 대해 지정해줘야 하는 부분이다.
// 위 설정해놓은 부분을 보면 우리는 이번 프로젝트에서 tailwindcss를 pages 와 components 폴더 안에 있는 모든 폴더들과(**), 모든파일들에(*)있는 확장자가 js,jsx,ts,tsx로 끝나는 모든 파일들에 대해서 사용해줄것이다 라고 명시하고 있는것이다.


// 다크모드 필요 시 다크모드를 컴퓨터의 모드에 따라 갈것인지 아니면 다른 방법을 통해 토글시킬 수 있도록 할것인지를 이곳에서 설정해줘야 한다.
// darkMode: "media" 라고 하면 다크모드 설정은 환경설정을 따라가게 된다.
// darkMode: "class" 라고 하면 다크모드 설정은 환경설정을 따라가지 않게 된다.
