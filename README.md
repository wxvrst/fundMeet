# Vue 3 + TypeScript + Vite

**Запуск:**  
── npm i  
── npm run dev  
This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).

**Технологии:** Vite, Vue, VueUse, Vue-router, Vue-final-modal, ESLint, tailwindCSS, Pinia, axios, pinia-plugin-persistedstate, unplugin-auto-import  
**Для проверки:** npm run lint и npx eslint src/  
**Правила FSD:**  
├── app-  
├── pages: Точка сборки, где виджеты собираются вместе  
├── widgets: Собранные блоки, компановка готовых features и entities: header, footer, sidebar, profileCard  
├── features: Действия, UI+ЛОГИКА конкретные пользовательские сценарии: форма(?) login, authorization  
├── entities: Бизнес логика  
└── shared: Атомы, переиспользуемая часть проекта: buttons, inputs, modals  
── Слой ──> Слайс ──> Сегмент
── Слой- разделить код на основе того, сколько ответственности ему требуется и от скольких других модулей в приложении он зависит. Каждый слой несет особое семантическое значение, чтобы помочь вам определить, сколько ответственности следует выделить вашему коду
── Слайс- группировать код по его значению для продукта, бизнеса или просто приложения
── Сегмент- группирует код по его техническому назначению (ui, api, model, lib, config)
── Не обязательно использовать все слои, но каркас это app, pages, shared
── app и shared являются одновременно слоями и слайсами, т.е. не имеют слайсов и состоят из сегментов напрямую
── Если Сегмент содержит не долее одного файла, то можно не создавать под него отдельную папку
── Объединение нужно делать по техничестому назначению
── В слое можно использовать только импорт из слоёв строго ниже(возможно на 2 ниже только), или в папких ниже внутри себя, shared же ни от кого не зависит  
── Для сущностей создавать свои index.ts файлы- Public API  
── Строго следить за зависимостями  
── entities- бизнес сущность это объект реального мира, то на чём строится бизнес(клиент, товар, заказ), информацию о котором мы храним в система  
── entities- чистый слой, по сути он не должен ничего знать ни про UI, ни про формы, кнопки
── В entities: api, types, store, config, model
── В entities сущности с типами и моделями, логика же в features
── features- это больше про "как": как добавляем товар в корзину, как оформляем заказ, как логинимся, фича предпологает действие, когда пользователь кликает  
── shared- ui слой "чем" чем мы чтото показываем, чем помогаем фичам и сущностям  
── Кросс импорты не стоит делать, что это? Каждый слой/слайс должен жить сам по себе и общаться только через publicApi, но есть @x что бы это ни было
── Headless компоненты- логика в composables, отображение в ui
── Типы локальны слою
**Термины:**
Ручка- запрос с бэка
Методы CRUD- create, read, update, delete
**Планы:**
── Перенести всё с React
── Конструктор сделать createBaseApiServices (пример в 112 shared/services/api/base.ts)
**Заметки:**
/\*\* \*\*/
── Пропсы и слоты
── Не обязательно следовать всем правилам, как минимум архитектура и идея удобные
