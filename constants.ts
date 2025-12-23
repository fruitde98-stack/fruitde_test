import { Product, Post, Category } from './types';

// Beanit Logo SVG based on user image
export const BEANIT_LOGO_URL = `data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 200' style='background-color: transparent;'%3E%3Cstyle%3E.bean%7Bfill:none;stroke:%231a1a1a;stroke-width:8;stroke-linecap:round;stroke-linejoin:round;%7D .face%7Bfill:none;stroke:%231a1a1a;stroke-width:5;stroke-linecap:round;%7D .eye%7Bfill:%231a1a1a;%7D .text%7Bfill:%23332822;font-family:%22Noto Sans KR%22, sans-serif;font-weight:bold;font-size:45px;letter-spacing:2px;%7D%3C/style%3E%3Cpath class='bean' d='M90,135 C50,135 20,105 20,75 C20,40 55,20 90,20 C125,20 150,50 150,85' /%3E%3Cpath class='face' d='M60,95 Q80,110 100,95' /%3E%3Ccircle class='eye' cx='65' cy='80' r='4' /%3E%3Ccircle class='eye' cx='95' cy='80' r='4' /%3E%3Cpath class='bean' d='M410,135 C450,135 480,105 480,75 C480,40 445,20 410,20 C375,20 350,50 350,85' /%3E%3Cpath class='face' d='M380,95 Q400,110 420,95' /%3E%3Ccircle class='eye' cx='385' cy='80' r='4' /%3E%3Ccircle class='eye' cx='415' cy='80' r='4' /%3E%3Ccircle class='bean' cx='250' cy='85' r='75' style='fill:white'/%3E%3Cpath class='face' d='M220,100 Q250,120 280,100' /%3E%3Ccircle class='eye' cx='230' cy='80' r='5' /%3E%3Ccircle class='eye' cx='270' cy='80' r='5' /%3E%3Cpath class='face' d='M240,35 Q250,20 260,35' /%3E%3Ctext x='80' y='180' class='text' text-anchor='middle'%3EBeanit%3C/text%3E%3Ctext x='380' y='180' class='text' text-anchor='middle'%3E비 닛%3C/text%3E%3C/svg%3E`;

export const CATEGORIES: Category[] = [
  { id: 'all', name: '전체 상품' },
  { id: 'fruit-cup', name: '프리미엄 컵과일' },
  { id: 'beverage', name: '저당 밀크티' },
  { id: 'dried-fruit', name: '과일 건조칩' },
  { id: 'sugar-free', name: '무설탕 디저트' },
  { id: 'kong-pearl', name: '콩펄 (Beanit)' },
  { id: 'gift-set', name: '과일 선물세트' },
];

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'cup-real-1',
    name: '프리미엄 제철 컵과일 (M)',
    category: 'fruit-cup',
    price: 5500,
    image: 'https://images.unsplash.com/photo-1619158403521-ed9198566144?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: '투명 컵에 정성스럽게 담아낸 5가지 신선 제철 과일 믹스.',
    isFeatured: true,
  },
  {
    id: 'cup-real-2',
    name: '프리미엄 컵과일 (L)',
    category: 'fruit-cup',
    price: 8500,
    image: 'https://images.unsplash.com/photo-1595456428628-918999e2954a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: '풍성한 구성으로 든든하게 즐기는 한 컵의 비타민.',
    isFeatured: true,
  },
  {
    id: 'dried-chips-1',
    name: '자연건조 믹스 과일칩',
    category: 'dried-fruit',
    price: 6500,
    image: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: '첨가물 없이 저온에서 천천히 말려 영양을 그대로 담았습니다.',
    isFeatured: true,
  },
  {
    id: 'milktea-low-1',
    name: '비닛 저당 얼그레이 밀크티',
    category: 'beverage',
    price: 7000,
    image: 'https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: '당 걱정 없이 향긋한 얼그레이 향을 가득 담은 시그니처 밀크티.',
    isFeatured: true,
  },
  {
    id: 'milktea-low-2',
    name: '제주 말차 저당 밀크티',
    category: 'beverage',
    price: 7500,
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: '깊고 진한 제주 말차와 건강한 단맛의 조화.',
    isFeatured: false,
  },
  {
    id: 'kong-kit-1',
    name: '비닛(Beanit) 콩펄 키트',
    category: 'kong-pearl',
    price: 15000,
    image: BEANIT_LOGO_URL,
    description: '국산 콩으로 만든 쫄깃하고 고소한 단백질 콩펄.',
    isFeatured: true,
  },
  {
    id: 'tart-1',
    name: '무설탕 샤인머스캣 타르트',
    category: 'sugar-free',
    price: 13000,
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: '설탕 대신 스테비아로 건강한 달콤함을 완성한 타르트.',
    isFeatured: false,
  },
  {
    id: 'gift-premium-1',
    name: '명품 과일 혼합 선물세트',
    category: 'gift-set',
    price: 85000,
    image: 'https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: '감사의 마음을 품격 있게 전하는 프리미엄 구성.',
    isFeatured: true,
  },
];

export const INITIAL_POSTS: Post[] = [
  {
    id: '1',
    title: '프룻디 그랜드 오픈 기념 이벤트',
    date: '2023-10-01',
    content: '전 품목 10% 할인 행사를 진행합니다.',
  },
];