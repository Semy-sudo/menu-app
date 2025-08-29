import { useState } from "react";

const menuData = {
  "생맥주": [
    { name: "기네스", price: "13,000" },
    { name: "APA", price: "11,500" },
    { name: "라거", price: "8,900" },
    { name: "클라우드", price: "6,900" }
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
    { name: "밀크초콜릿 스타우드", price: "11,000" }
  ],
  "안주": [
    { name: "기본초콜릿", price: "3,000" },
    { name: "마약치즈크래커", price: "5,500" },
    { name: "1일과일볼", price: "12,900" },
    { name: "치즈나쵸", price: "9,000" },
    { name: "잭허니아포가토", price: "13,000" },
    { name: "세상의 모든 감자튀김", price: "1인 6900 / 2인 11900" },
    { name: "프랑크푸르트 모둠소시지", price: "17,900" },
  ],
  "칵테일": [
    { name: "짐빔 하이볼", price: "11,900" },
    { name: "산토리/조니워커 하이볼", price: "12,900" },
    { name: "진토닉", price: "14,900" },
    { name: "핸드릭스 진토닉", price: "17,900" },
    { name: "x토닉", price: "15,900" },
    { name: "갓파더", price: "17,900" },
    { name: "갓마더", price: "16,900" },
    { name: "마티니", price: "22,900" },
    { name: "보드카 토닉", price: "11,900" },
    { name: "화이트 러시안", price: "19,900" },
    { name: "프리미엄 블랙 러시안", price: "22,900" },
    { name: "파우스트", price: "23,900" },
    { name: "아이리쉬카밤", price: "16,900" },
    { name: "블루 라군", price: "19,900" },
    { name: "깔루아 코크/밀크", price: "10,900" },
    { name: "말리부 오렌지/콕/밀크", price: "10,900" },
    { name: "모히토", price: "16,900" },
    { name: "잭콕", price: "14,900" },
    { name: "잭허니 밀크", price: "15,900" }
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
    { name: "아란 10Y", price: "19,000" },
    { name: "아란 셰리 캐스크", price: "33,000" },
    { name: "헤네시 VSOP", price: "20,000" },
    { name: "조니워커 블루", glass: "싯가" },
    { name: "로얄살루트 21Y", glass: "싯가" },
    { name: "사장님픽 위스키", glass: "싯가" }
  ],
};

export default function MenuPage() {
  const categories = Object.keys(menuData);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <div className="min-h-screen bg-neutral-200 flex flex-col items-center p-6 gap-6">
      
      {/* 상단 브랜드 영역 */}
      <div className="bg-yellow-100 border border-black rounded-2xl p-6 max-w-xl text-center shadow-lg">
        <div className="text-3xl font-extrabold bg-black text-yellow-100 px-4 py-1 rounded-xl inline-block mb-4">
          사운드예술
        </div>
        <p className="text-sm text-gray-800 leading-relaxed mb-6">
          사운드예술은 다양한 주류와 함께 음악/영화 감상을 할 수 있는 펍입니다. <br />
          신청곡 작성해주시면 틀어드립니다^^ <br />
          혼술/단체 모두 환영 합니다. <br />
        </p>

        {/* 외부 음식/주류 안내 */}
        <div className="bg-yellow-50 border border-black rounded-xl p-4 text-sm text-gray-800 mb-6">
          <p className="font-semibold mb-2">『외부 음식/주류 반입시 참고 부탁드립니다.』</p>
          <p className="mb-1">□ 외부 음식 : 무료 </p>
          <p className="mb-1">□ 외부 주류</p>
          <p className="ml-4">와인 30,000원</p>
          <p className="ml-4">위스키 50,000원 (병당 기준)</p>
        </div>

        <p className="text-xs text-gray-600">
          * 이용자 여러분의 즐거운 시간을 위하여 쾌적하게 이용 부탁드립니다. <br />
        </p>
        <p className="text-gray-700 mt-2 font-semibold">@sound_ye_sul</p>
      </div>

      {/* 카테고리 버튼 */}
      <div className="flex gap-3 overflow-x-auto pb-3 mt-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition ${
              activeCategory === cat
                ? "bg-black text-yellow-100"
                : "bg-neutral-300 hover:bg-neutral-400 text-black"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 메뉴 리스트 */}
      <div className="mt-6 w-full max-w-xl bg-yellow-50 border border-black rounded-2xl p-6 shadow">
        {menuData[activeCategory].map((item, idx) => (
          <div
            key={idx}
            className="flex justify-between items-center border-b border-neutral-300 pb-3 mb-3 last:border-0 last:pb-0 last:mb-0 rounded-lg"
          >
            <span className="text-gray-900">{item.name}</span>
            <span className="text-black font-bold">
              {item.price ? `${item.price}원` : item.glass || ""}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
