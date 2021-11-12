const quotes = [
    {
        auddjs: "화가 날 때는 100까지 세라. 최악일 때는 욕설을 퍼부어라",
        wkrrk: "마크 트웨인",
    },
    {
        auddjs: "만족할 줄 아는 사람은진정한 부자이고, 탐욕스러운 사람은진실로 가난한 사람이다",
        wkrrk: "솔론",
    },
    {
        auddjs: "작은 기회로 부터 종종 위대한 업적이 시작된다",
        wkrrk: "데모스테네스",
    },
    {
        auddjs: "최고에 도달하려면 최저에서 시작하라",
        wkrrk: "P.시루스",
    },
    {
        auddjs: "문제는 목적지에 얼마나 빨리 가느내가 아니라 그 목적지가 어디냐는 것이다.",
        wkrrk: "메이벨 뉴컴버",
    },
    {
        auddjs: "당신의 행복은 무엇이 당신의 영혼을 노래하게 하는가에 따라 결정된다",
        wkrrk: "낸시 설리번",
    },
    {
        auddjs: "네 자신의 불행을 생각하지 않게 되는 가장 좋은 방법은 일에 몰두하는 것이다",
        wkrrk: "베토벤",
    },
    {
        auddjs: "실패는 잊어라 그러나 그것이 준 교훈은 절대 잊으면 안된다.",
        wkrrk: "하버트 개서",
    },
    {
        auddjs: "눈물과 더불어 빵을 먹어 보지 않은 자는 인생의 참다운 맛을 모른다",
        wkrrk: "괴테",
    },
    {
        auddjs: "문제점을 찾지 말고 해결책을 찾으라",
        wkrrk: "핸리포드",
    }
]
const auddjs = document.querySelector("#auddjs span:first-child");
const wkrrk = document.querySelector("#auddjs span:last-child");

const todayAuddjs = quotes[Math.floor(Math.random() * quotes.length)];

auddjs.innerText = todayAuddjs.auddjs;
wkrrk.innerText = todayAuddjs.wkrrk;