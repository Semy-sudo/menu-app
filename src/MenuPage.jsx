import { useState } from "react";

/* ================================
   위스키 그룹
================================ */
const whiskyGroups = [
  {
    title: "🇺🇸 미국",
    items: [
      { name: "메이커스마크 버번", price: "12,000원 / 9만" },
      { name: "우드포드리저브", price: "15,000원 / 16만" },
    ],
  },
  {
    title: "🇮🇪 아일랜드",
    items: [{ name: "부쉬밀 10Y", price: "12,000원 / 13만" }],
  },
  {
    title: "🏴 스코틀랜드",
    items: [
      { name: "달위니 15Y", price: "15,000원 / 28만" },
      { name: "발베니 12Y", price: "16,000원 / 30만" },
      { name: "발베니 14Y 캐리비안 캐스크", price: "29,000원 / 40만" },
      { name: "맥캘란 더블 캐스크", price: "19,000원 / 29만" },
      { name: "맥캘란 셰리 캐스크", price: "29,000원 / 38만" },
      { name: "글랜피딕 15Y", price: "22,000원 / 29만" },
      { name: "글랜피딕 18Y", price: "31,000원 / 45만" },
      { name: "글렌드로낙 12Y", price: "23,000원 / 29만" },
      { name: "발렌타인 10Y", price: "13,000원 / 8만" },
      { name: "발렌타인 17Y", price: "32,000원 / 30만" },
    ],
  },
  {
    title: "🏴  아일라",
    items: [
      { name: "아드백 10Y", price: "22,000원 / 30만" },
      { name: "라프로익 10Y", price: "22,000원 / 32만" },
      { name: "조니워커 블랙", price: "13,000원 / 14만" },
      { name: "조니워커 그린", price: "15,000원 / 22만" },
      { name: "조니워커 루비", price: "17,000" },
      { name: "조니워커 블루 (Bottle Only)", price: "45만" },
    ],
  },
  {
    title: "🇹🇼 대만",
    items: [
      { name: "카발란 트리플 셰리", price: "32,000" },
      { name: "카발란 비노바리크", price: "42,000" },
    ],
  },
  {
    title: "🏴 Isle of Arran",
    items: [
      { name: "아란 10Y", price: "19,000원 / 25만" },
      { name: "아란 셰리 캐스크", price: "33,000원 / 35만" },
    ],
  },
  {
    title: "🇫🇷 프랑스 (코냑)",
    items: [
      { name: "헤네시 VSOP", price: "20,000원 / 29만" },
      { name: "레미마틴 VSOP", price: "22,000원 / 30만" },
    ],
  },
  {
    title: "🇲🇽 멕시코 (데킬라)",
    items: [
      { name: "호세 쿠엘보", price: "12,000원 / 15만" },
      { name: "1800 아네호", price: "18,000원 / 25만" },
    ],
  },
];

/* ================================
   메뉴 데이터
================================ */
const menuData = {
  생맥주: [{ name: "기네스", price: "13,000" }],

  병맥주: [
    { name: "(*임시품절)기린", price: "8,900" },
    { name: "산미구엘", price: "10,000" },
    { name: "빅웨이브", price: "10,500" },
    { name: "코로나", price: "11,900" },
    { name: "하이네켄", price: "9,500" },
    { name: "인디카나 IPA", price: "13,500" },
    { name: "호가든(기본/로제)", price: "8,900" },
    { name: "스텔라", price: "10,000" },
    { name: "듀체스 브루고뉴 와인맥주 750ml", price: "56,000" },
    { name: "모스카토 스파클링 샴페인 750ml", price: "44,000" },
    { name: "밀크초콜릿 스타우드", price: "11,000" },
    { name: "꿀꺽", price: "13,000" },
    { name: "스밈", price: "15,000" },
    { name: "희구", price: "18,000" },
  ],

  안주: [
    { name: "참치치즈카나페", price: "15,000" },
    { name: "커리부어스트 소시지", price: "16,000" },
    { name: "베이컨듬뿍 투움바파스타", price: "13,000" },
    { name: "오지치즈후라이", price: "12,000" },
    { name: "기본초콜릿", price: "3,000" },
    { name: "팝콘", price: "4,000" },
    { name: "마약치즈크래커", price: "6,500" },
    { name: "1인과일볼", price: "12,900" },
    { name: "치즈나쵸", price: "9,500" },
    { name: "1인마른안주(육포+마요소스 & 견과류)", price: "8,000" },
  ],

  칵테일: [
    { name: "진토닉", price: "14,900", description: "시트러스 향 가득, 가장 클래식한 칵테일" },
    { name: "핸드릭스 진토닉", price: "17,900", description: "오이와 장미 향이 어우러진 고급 진토닉" },
    { name: "x토닉", price: "15,900", description: "진하고 깊은 맛, 독특한 토닉의 매력" },
    { name: "갓파더", price: "17,900", description: "위스키와 아마레토의 진한 한 방울" },
    { name: "갓마더", price: "16,900", description: "보드카와 아마레토의 부드러운 달콤함" },
    { name: "마티니", price: "22,900", description: "007이 사랑한 클래식" },
    { name: "보드카 토닉", price: "11,900", description: "깔끔하고 청량한 한 잔" },
    { name: "화이트 러시안", price: "19,900", description: "달콤한 크림과 커피 리큐르" },
    { name: "프리미엄 블랙 러시안", price: "22,900", description: "묵직한 커피 향" },
    { name: "파우스트", price: "23,900", description: "도수 높은 악마의 칵테일" },
    { name: "아이리쉬카밤", price: "16,900", description: "폭발적인 조합" },
    { name: "블루 라군", price: "19,900", description: "바다 같은 청량감" },
    { name: "깔루아 코크/밀크", price: "10,900", description: "달콤한 커피 리큐르" },
    { name: "말리부 오렌지/콕/밀크", price: "10,900", description: "코코넛 트로피컬" },
    { name: "모히토", price: "16,900", description: "생라임 상콤함" },
    { name: "잭콕", price: "14,900", description: "클래식 조합" },
    { name: "잭허니 밀크", price: "15,900", description: "꿀처럼 부드럽다" },
  ],

  위스키: [{ name: "이달의 위스키", price: "9,900" }],

  하이볼: [
    { name: "짐빔 하이볼", price: "12,900" },
    { name: "산토리 레몬 하이볼", price: "12,900" },
    { name: "조니워커 진저에일 하이볼", price: "13,900" },
    { name: "제임슨 하이볼", price: "15,000" },
    { name: "발베니 진저에일 하이볼", price: "16,000" },
  ],

  넌알코올: [
    { name: "파리제트 논알콜", price: "12,000" },
    { name: "셜리템플 논알콜", price: "12,000" },
    { name: "블루라군 논알콜", price: "13,900" },
    { name: "모히또 논알콜", price: "15,000" },
  ],

  
};

/* ================================
   컴포넌트
================================ */
export default function MenuPage() {
  const categories = Object.keys(menuData);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <div className="min-h-screen bg-black flex flex-col items-center py-6 gap-6 text-[#ff4d4d]">

      {/* 이벤트 배너 */}
      <div className="w-full max-w-xl bg-gradient-to-r from-[#ff4d4d] to-[#ff0000] text-white rounded-2xl p-4 text-center shadow-lg">
        <p className="font-bold">영수증 리뷰 이벤트</p>
        <p className="font-extrabold">시그니처 칵테일 1잔 서비스 🍸</p>
      </div>

      {/* 카테고리 */}
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition
            ${
              activeCategory === cat
                ? "bg-gradient-to-r from-[#ff4d4d] to-[#ff0000] text-white"
                : "border border-[#ff4d4d] text-[#ff4d4d]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 메뉴 */}
      <div className="w-full max-w-xl bg-black border border-[#ff4d4d] rounded-2xl p-6">

        {activeCategory === "위스키" ? (
          whiskyGroups.map((group, idx) => (
            <div key={idx} className="mb-6">
              <h3 className="text-[#ff8c00] font-bold border-b border-[#ff4d4d] mb-3">
                {group.title}
              </h3>

              {group.items.map((item, i) => (
                <div key={i} className="flex justify-between mb-2">
                  <span>{item.name}</span>
                  <span className="text-[#ff8c00]">{item.price}</span>
                </div>
              ))}
            </div>
          ))
        ) : (
          menuData[activeCategory].map((item, idx) => (
            <div key={idx} className="flex justify-between border-b border-[#ff4d4d] py-2">
              <span>{item.name}</span>
              <span className="text-[#ff8c00]">{item.price}원</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
