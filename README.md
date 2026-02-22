# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).

**Технологии:** Vite, Vue, VueUse, Vue-router, Vue-final-modal, ESLint, tailwindCSS, Pinia, axios, pinia-plugin-persistedstate, unplugin-auto-import  
**Правила FSD:**  
├── app-
├── pages: Точка сборки, где виджеты собираются вместе
├── widgets: Собранные блоки, компановка готовых features и entities: header, footer, sidebar, profileCard
├── features: Действия, конкретные пользовательские сценарии: форма(?) login, authorization
├── entities: Бизнес логика
└── shared: Атомы, переиспользуемая часть проекта: buttons, inputs, modals
── Верхний слой может ссылаться только на 2 ниже его в иерархии, shared же ни от кого не зависит
── Для сущностей создавать свои index.ts файлы- Public API 
── Строго следить за зависимостями
── Entities- бизнес сущность это объект реального мира, то на чём строится бизнес(клиент, товар, заказ), информацию о котором мы храним в система
── Entities- чистый слой, по сути он не должен ничего знать ни про UI, ни про формы, кнопки
── Features- это больше про "как": как добавляем товар в корзину, как оформляем заказ, как логинимся, фича предпологает действие, когда пользователь кликает
── Shared- ui слой "чем" чем мы чтото показываем, чем помогаем фичам и сущностям
── Кросс импорты не стоит делать, что это? Каждый слой должен жить сам по себе и общаться только через publicApi, но есть @x что бы это ни было
**Архитектура**:├── │ └──  

src/  
├── app/  
│		├── provides/  
│		│		├── router/  
│		│		│		├── routes/  
│		│		│		├── index.ts  
│		│		│		└── routes.ts  
│		│		└──	index.ts  
│ 	├── styles/
│ 	│		└── style.css
│ 	├──	App.vue
│ 	└── index.ts
├── pages/ 
│  	├── HomePage/
│		│		├── ui/
│		│		│		└── HomePage.vue
│		│		└── index.ts
│		└── NoMatchPage/
├── widgets/ 
│		├── Footer/
│		│		├── ui/
│		│		│		└── Footer.vue
│		│		└── index.ts
│		└── Header/
│		│		├── ui/
│		│		│		└── Header.vue
│		│		└── index.ts
├── features/ 
├── entities/ 
└── shared/ 