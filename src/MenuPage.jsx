import { useState } from "react";

const menuData = {
  "생맥주": [
    { name: "기네스", price: "13,000" },
    { name: "과일향과 구운맥아의 미국식 페일에일 - APA", price: "11,500" },
    { name: "[임시품절]청량감 - 기본 라거", price: "8,900" },
    { name: "홉의 개성을 느낄수 있는 라거 - 꿀꺽(*신메뉴)", price: "11,000" },
    { name: "커피, 초콜릿, 7가지 맥아의 다크에일 - 캄캄(*신메뉴)", price: "13,000" }
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
    { name: "듀체스 브루고뉴 와인맥주 750ml", price: "40,000" },
    { name: "모스카토 스파클링 샴페인 750ml", price: "44,000" },
    { name: "밀크초콜릿 스타우드", price: "11,000" },
    { name: "꿀꺽", price: "13,000" },
    { name: "스밈", price: "15,000" },
    { name: "희구", price: "18,000" }
  ],
  "안주": [
    { name: "기본초콜릿", price: "3,000" },
    { name: "팝콘", price: "4,000" },
    { name: "마약치즈크래커", price: "6,500" },
    { name: "참치치즈카나페", price: "15,000" },
    { name: "1인과일볼", price: "12,900" },
    { name: "치즈나쵸", price: "9,000" },
    { name: "1인마른안주(육포+마요소스 & 견과류)", price: "8,000" },
    { name: "세상의 모든 감자튀김", price: "10,000" },
    { name: "프랑크푸르트 모둠소시지", price: "17,900" },
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
    { name: "모히토", price: "16,900", description: "민트와 라임이 선사하는 상쾌한 청량감" },
    { name: "잭콕", price: "14,900", description: "전설적인 조합, 잭다니엘과 콜라의 클래식" },
    { name: "잭허니 밀크", price: "15,900", description: "꿀처럼 달콤하고 부드러운 잭허니의 변주" }
  ],
  "위스키": [
    { name: "이달의 위스키", price: "9,900" },
    { name: "조니워커 블랙", price: "13,000" },
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
    { name: "카발란 클래식", price: "23,000" },
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
        <p className="text-sm text-gray-300 leading-relaxed mb-6">
          사운드예술은 다양한 주류와 음악/영화/스포츠 감상 펍입니다. <br />
          신청곡 작성해주시면 틀어드립니다^^ <br />
          혼술/단체 모두 환영 합니다. <br />
        </p>

        {/* 외부 음식/주류 안내 */}
        <div className="bg-[#1f1f1f] border border-[#c5a572] rounded-xl p-4 text-sm text-gray-200 mb-6">
          <p className="font-semibold text-[#d4af37] mb-2">『외부 음식/주류 반입시 참고 부탁드립니다.』</p>
          <p className="mb-1">□ 외부 음식 : 무료 </p>
          <p className="mb-1">□ 외부 주류</p>
          <p className="ml-4">와인 30,000원</p>
          <p className="ml-4">위스키 50,000원 (병당 기준)</p>
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
              <span className="text-[#e2ca7a] font-bold">생맥 주문시! 감자튀김 </span> 
              <span className="line-through text-gray-500 mr-2">10,000원</span>
              <span className="text-[#d4af37] font-bold">9,000원</span>
            </p>
            
            {/* 프라이즈 문구 */}
            <p className="text-xs text-gray-300">
              🍟 바삭한 감튀와 함께 즐겨보세요!
            </p>
          </div>
        )}
        
        {menuData[activeCategory].map((item, idx) => {
          const isNew = item.name.includes("(*신메뉴)");
          return (
            <div
              key={idx}
              className="border-b border-gray-600 pb-3 mb-3 last:border-0 last:pb-0 last:mb-0"
            >
              <div className="flex justify-between items-center">
                <span className="text-gray-200 font-semibold flex items-center gap-2">
                  {isNew ? item.name.replace("(*신메뉴)", "") : item.name}
                  {isNew && (
                    <span className="text-xs bg-gradient-to-r from-[#c5a572] to-[#d4af37] text-black px-2 py-0.5 rounded-full font-bold shadow">
                      신메뉴
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
        })}
      </div>
    </div>
  );
}
