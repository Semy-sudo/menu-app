import { useState } from "react";

const whiskyGroups = [
  {
    title: "🇺🇸 미국 (버번)",
    items: [
      { name: "메이커스마크 버번", price: "12,000원 / (품절)9만" },
      { name: "우드포드리저브", price: "15,000원 / 16만" },
    ],
  },
  {
    title: "🇮🇪 아일랜드 (버번 캐스크)",
    items: [{ name: "부쉬밀 10Y", price: "12,000원 / (품절)13만" }],
  },
  {
    title: "🏴 스코틀랜드 / 스페이사이드 (셰리 / 밸런스)",
    items: [
      { name: "달위니 15Y", price: "22,000원 / 28만" },
      { name: "발베니 12Y", price: "22,000원 / 30만" },
      { name: "발베니 14Y 캐리비안 캐스크", price: "29,000원 / 40만" },
      { name: "맥캘란 더블 캐스크", price: "19,000원 / 29만" },
      { name: "맥캘란 셰리 캐스크", price: "29,000원 / 38만" },
      { name: "글랜피딕 15Y", price: "23,000원 / 29만" },
      { name: "글랜피딕 18Y", price: "31,000원 / 45만" },
      { name: "글렌드로낙 12Y", price: "23,000원 / 29만" },
      { name: "발렌타인 10Y", price: "13,000원 / 8만" },
      { name: "발렌타인 17Y", price: "32,000원 / 30만" },
      { name: "로얄살루트 21Y (Bottle Only)", price: "54만" }
    ],
  },
  {
    title: "🏴 스코틀랜드 / 아일라 (피트, 스모키)",
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
    title: "🇹🇼 대만 (셰리 / 와인 캐스크)",
    items: [
      { name: "카발란 트리플 셰리", price: "32,000" },
      { name: "카발란 비노바리크", price: "42,000" },
    ],
  },
  {
    title: "🏴 스코틀랜드 / 아란섬",
    items: [
      { name: "아란 10Y", price: "19,000원 / 25만" },
      { name: "아란 셰리 캐스크", price: "33,000원 / 35만" },
    ],
  },
  {
    title: "🇫🇷 프랑스 (코냑)",
    items: [
      { name: "헤네시 VSOP", price: "20,000원 / 29만" },
      { name: "레미마틴 VSOP", price: "22,000원 / 30만" }
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


const menuData = {
  "생맥주": [
    { name: "기네스", price: "13,000" },
    { name: "과일향과 구운맥아의 미국식 페일에일 - APA", price: "11,500" },
    { name: "청량감 - 기본 라거", price: "8,900" },
    { name: "홉의 개성을 느낄수 있는 라거 - 꿀꺽(*신메뉴)", price: "11,000" },
    { name: "커피, 초콜릿, 7가지 맥아의 다크에일 - 캄캄(*신메뉴)", price: "13,000" },
    { name: "구름처럼 가볍게 흘려 마시는 - 구름 위트에일", price: "12,000" },
    { name: "빈투바 초콜릿스타우드(*커밍쑨)", price: "14,000" }
  ],
  "병맥주": [
    { name: "기린", price: "8,900" },
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
    { name: "희구", price: "18,000" }
  ],
  "안주": [
    { name: "참치치즈카나페", price: "15,000" },
    { name: "커리부어스트 소시지(*신메뉴)", price: "13,000" },
    { name: "오지치즈후라이", price: "12,000" },
    { name: "기본초콜릿", price: "3,000" },
    { name: "팝콘", price: "4,000" },
    { name: "마약치즈크래커", price: "6,500" },
    { name: "1인과일볼", price: "12,900" },
    { name: "치즈나쵸", price: "9,500" },
    { name: "1인마른안주(육포+마요소스 & 견과류)", price: "8,000" }
  ],
  "칵테일": [
    { name: "진토닉", price: "14,900", description: "시트러스 향 가득, 가장 클래식한 칵테일" },
    { name: "핸드릭스 진토닉", price: "17,900", description: "오이와 장미 향이 어우러진 고급 진토닉" },
    { name: "x토닉", price: "15,900", description: "진하고 깊은 맛, 독특한 토닉의 매력" },
    { name: "갓파더", price: "17,900", description: "위스키와 아마레토의 진한 한 방울" },
    { name: "갓마더", price: "16,900", description: "보드카와 아마레토가 선사하는 부드러운 달콤함" },
    { name: "마티니", price: "22,900", description: "007이 사랑한, 강렬하면서도 우아한 칵테일" },
    { name: "보드카 토닉", price: "11,900", description: "깔끔하고 청량한 보드카의 시원한 매력" },
    { name: "화이트 러시안", price: "19,900", description: "달콤한 크림과 커피 리큐르의 부드러운 유혹" },
    { name: "프리미엄 블랙 러시안", price: "22,900", description: "진한 커피 리큐르와 보드카의 묵직한 한 잔" },
    { name: "파우스트", price: "23,900", description: "악마의 속삭임, 도수는 높지만 취기는 확실하다!" },
    { name: "아이리쉬카밤", price: "16,900", description: "한 번에 폭발하는 아일랜드의 강렬한 매력" },
    { name: "블루 라군", price: "19,900", description: "시원한 블루 빛깔, 바다 같은 청량감" },
    { name: "깔루아 코크/밀크", price: "10,900", description: "커피 리큐르의 달콤함과 부드러운 조화" },
    { name: "말리부 오렌지/콕/밀크", price: "10,900", description: "코코넛 향이 가득한 트로피컬 무드" },
    { name: "모히토", price: "16,900", description: "생라임 하나가 통째로! 상콤 청량을 느끼고 싶다면" },
    { name: "잭콕", price: "14,900", description: "전설적인 조합, 잭다니엘과 콜라의 클래식" },
    { name: "잭허니 밀크", price: "15,900", description: "꿀처럼 달콤하고 부드러운 잭허니의 변주" }
  ],
  "위스키": [
    { name: "이달의 위스키", price: "9,900" },
    { name: "조니워커 블랙", price: "13,000" },
    { name: "조니워커 그린", price: "15,000" },
    { name: "조니워커 루비", price: "17,000" },
    { name: "발베니 12Y", price: "22,000" },
    { name: "발베니 14Y 캐리비안 캐스크", price: "29,000" },
    { name: "메이커스마크 버번", price: "12,000" },
    { name: "발렌타인 12Y", price: "13,000" },
    { name: "부쉬밀 10Y", price: "19,000" },
    { name: "우드포드리저브", price: "15,000" },
    { name: "맥캘란 더블 캐스크", price: "19,000" },
    { name: "맥캘란 셰리 캐스크", price: "29,000" },
    { name: "글랜피딕 15Y", price: "23,000" },
    { name: "아드백 10Y", price: "22,000" },
    { name: "발렌타인 17Y", price: "32,000" },
    { name: "라프로익 10Y", price: "22,000" },
    { name: "카발란 트리플 셰리", price: "32,000" },
    { name: "카발란 비노바리크", price: "4,000" },
    { name: "아란 10Y", price: "19,000" },
    { name: "아란 셰리 캐스크", price: "33,000" },
    { name: "헤네시 VSOP", price: "20,000" },
    { name: "조니워커 블루", price: "BOTTLE 600,000" },
    { name: "로얄살루트 21Y", price: "BOTTLE 640,000" },
    { name: "사장님픽 위스키", glass: "싯가" }
  ],
  "하이볼": [
    { name: "짐빔 하이볼", price: "12,900" },
    { name: "산토리 레몬 하이볼", price: "12,900" },
    { name: "조니워커 진저에일 하이볼", price: "13,900" },
    { name: "제임슨 하이볼", price: "15,000" },
    { name: "발베니 진저에일 하이볼", price: "16,000" }
  ],
  "넌알코올": [
    { name: "파리제트 논알콜", price: "12,000" },
    { name: "셜리템플 논알콜", price: "12,000" },
    { name: "블루라군 논알콜", price: "13,900" },
    { name: "모히또 논알콜", price: "15,000" }
  ],
  "기타": [
    { name: "즉석 필름사진", price: "3,000" }
  ],
};

export default function MenuPage() {
  const categories = Object.keys(menuData);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <div className="min-h-screen w-full max-w-full bg-gradient-to-br from-[#1a1a1a] to-[#2c2c2c] flex flex-col items-center px-0 py-6 gap-6 text-[#f5f5dc]">
      {/* 상단 브랜드 영역 */}
      <div className="bg-[#2b2b2b] border border-[#c5a572] rounded-2xl p-6 max-w-xl text-center shadow-xl">
        <div className="text-3xl font-extrabold bg-gradient-to-r from-[#c5a572] to-[#d4af37] text-black px-6 py-2 rounded-xl inline-block mb-4 tracking-wide">
          사운드예술
        </div>
        <div className="bg-gradient-to-r from-amber-900/40 to-yellow-800/20 rounded-2xl p-4 border border-amber-600/50 shadow-lg mb-6">
  <h3 className="text-lg font-extrabold text-amber-400 mb-3 flex items-center gap-2">
    💡 오늘의 꿀팁
  </h3>
  <ul className="text-sm text-gray-100 space-y-2 leading-relaxed font-medium">
    <li>
      <span className="text-amber-400 font-semibold">TIP 1.</span> 신청곡(제목/가수) 작성해 주시면{" "}
      <span className="font-bold text-white">다 틀어드립니다 🎶</span>
    </li>
    <li>
      <span className="text-amber-400 font-semibold">TIP 2.</span> 영수증 리뷰 시{" "}
      <span className="font-bold text-white">팝콘 무료 🍿</span>
    </li>
    <li>
      <span className="text-amber-400 font-semibold">TIP 3.</span> 넌센스 퀴즈 3개 맞추시면{" "}
      <span className="font-bold text-white">도파민초콜릿 제공 🍫</span>
    </li>
    <li>
      <span className="text-amber-400 font-semibold">TIP 4.</span> 알바생이랑 젠가 이기면{" "}
      <span className="font-bold text-white">칵테일 한잔 무료 🍸</span>
    </li>
    <li>
      <span className="text-amber-400 font-semibold">TIP 5.</span> 매주{" "}
      <span className="font-bold text-white">수요일 10시 30분</span> —{" "}
      <span className="text-amber-300 font-semibold">‘나는 솔로’ 함께 봐요 💞</span>
    </li>
  </ul>
</div>


        {/* 외부 음식/주류 안내 */}
        <div className="bg-[#1f1f1f] border border-[#c5a572] rounded-xl p-4 text-sm text-gray-200 mb-6">
          <p className="font-semibold text-[#d4af37] mb-2">『외부 음식/주류 반입시 참고 부탁드립니다.』</p>
          <p className="mb-1">□ 외부 음식 : 무료 </p>
          <p className="mb-1">□ 외부 주류</p>
          <p className="ml-4">와인 30,000원</p>
          <p className="ml-4">위스키 60,000원 (병당 기준)</p>
        </div>

        <p className="text-[#c5a572] mt-2 font-semibold">@sound_ye_sul</p>
      </div>

      {/* 카테고리 버튼 */}
      <div className="flex flex-wrap justify-center gap-3 pb-3 mt-4 w-full">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition 
              ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-[#c5a572] to-[#d4af37] text-black shadow-md"
                  : "bg-[#3a3a3a] text-gray-200 hover:bg-[#4a4a4a]"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 메뉴 리스트 */}
      <div className="mt-6 w-full max-w-full md:max-w-xl mx-auto bg-[#1e1e1e] border border-[#c5a572] rounded-2xl p-6 shadow-lg">
       
        {/* 생맥주 이벤트 문구 */}
        {activeCategory === "생맥주" && (
          <div className="mb-4 p-4 bg-[#2b2b2b] border border-[#d4af37] rounded-xl text-center shadow-md">
            {/* 이미지 */}
            <img 
              src="/images/frenchfries.png"   // 👉 public/images 폴더에 저장
              alt="Beer and Fries"
              className="mx-auto mb-3 rounded-lg shadow-md w-40 h-auto"
            />
            
            {/* 가격 이벤트 */}
            <p className="text-sm text-[#f5f5dc] mb-1">
              <span className="text-[#e2ca7a] font-bold">생맥 주문시! 오지치즈후라이 </span> 
              <span className="line-through text-gray-500 mr-2">12,000원</span>
              <span className="text-[#d4af37] font-bold">11,000원</span>
            </p>
            
            {/* 프라이즈 문구 */}
            <p className="text-xs text-gray-300">
              🍟 바삭한 감튀와 함께 즐겨보세요!
            </p>
          </div>
        )}

        {activeCategory === "안주" && (
  <div className="mb-6 p-4 bg-[#2b2b2b] border border-[#d4af37] rounded-xl text-center shadow-md">
    <p className="text-lg font-extrabold text-[#d4af37] mb-2">
      🍴 안주 메뉴, 이 가격 실화?!
    </p>
    <p className="text-sm text-gray-200">
      저렴하게 즐기고 안 먹으면 손해일걸요 😎
    </p>
  </div>
)}


        {activeCategory === "위스키" ? (
          
          <div>
          {/* 바틀 주문 시 과일볼 서비스 강조 */}
    <div className="mb-6 p-4 bg-[#2b2b2b] border border-[#d4af37] rounded-xl text-center shadow-md">
      <p className="text-lg font-extrabold text-[#d4af37] mb-2">
        🥂 위스키 바틀 주문 시!
      </p>
      <p className="text-sm text-gray-200">
        과일볼 <span className="text-[#c5a572] font-bold">서비스 드립니다 🍊🍓🍍</span>
      </p>

      <div className="flex justify-center mt-4">
       
      </div>
    </div>

            {whiskyGroups.map((group, idx) => (
              <div key={idx} className="mb-6">
                <h3 className="font-bold text-[#c5a572] border-b border-[#555] pb-2 mb-3">
                  {group.title}
                </h3>
                {group.items.map((item, i) => (
                  <div key={i} className="flex justify-between items-center mb-2">
                    <span className="text-gray-200">{item.name}</span>
                    <span className="text-[#d4af37] font-semibold">{item.price}원</span>
                  </div>
                ))}
              </div>
            ))}




<div className="text-center mb-6">
              <h2 className="text-xl font-bold text-[#d4af37] mb-2">이달의 위스키</h2>
              <p className="text-gray-300">9,900원</p>
            </div>

            <div className="text-center mb-6">
              <h2 className="text-xl font-bold text-[#d4af37] mb-2">사장님 픽 위스키</h2>
              <p className="text-gray-300">싯가</p>
            </div>
          </div>
        ) : (
          menuData[activeCategory].map((item, idx) => {
          const isNew = item.name.includes("(*신메뉴)");
          const isCommingSoon = item.name.includes("(*커밍쑨)");

          return (
            <div
              key={idx}
              className="border-b border-gray-600 pb-3 mb-3 last:border-0 last:pb-0 last:mb-0"
            >
              <div className="flex justify-between items-center">
                <span className="text-gray-200 font-semibold flex items-center gap-2">
                  {item.name
    .replace("(*신메뉴)", "")
    .replace("(*커밍쑨)", "")
    .trim()}
                  
                  {isNew && (
                    <span className="text-xs bg-gradient-to-r from-[#c5a572] to-[#d4af37] text-black px-2 py-0.5 rounded-full font-bold shadow">
                      신메뉴
                    </span>
                  )}
                  {isCommingSoon && (
                    <span className="text-xs bg-gradient-to-r from-[#5dade2] to-[#2e86c1] text-white px-2 py-0.5 rounded-full font-bold shadow">
                      커밍쑨
                    </span>
                  )}
                </span>
                <span className="text-[#d4af37] font-bold">
                  {item.price ? `${item.price}원` : item.glass || ""}
                </span>
              </div>

              {item.description && (
                <p className="text-xs text-[#d4af37] mt-1 text-left">
                  {item.description}
                </p>
              )}
            </div>
          );
        })
        )}




      </div>
    </div>
  );
}