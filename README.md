# Картинная галерея

Это SPA-приложение для просмотра картинной галереи, созданное с использованием React 18, TypeScript 5 и Vite. Приложение позволяет переключать тему, запрашивать картины с сервера, искать картины по названию и использовать пагинацию для просмотра других картин.

## Используемые технологии:

- **React 18**;
- **TypeScript 5**;
- **SCSS** (модули стилей: `*.module.scss`);
- **Axios** для HTTP-запросов;
- **Redux Toolkit и RTK Query** для управления состоянием;
- **Eslint** с конфигом Airbnb для TypeScript;
- **Prettier** для форматирования кода (2 пробела для отступов, точки с запятой после каждого оператора).

## Установка

1. Клонируйте репозиторий:
    ```bash
    git clone https://github.com/azatkhisamov/art-gallery.git
    cd your-repo
    ```

2. Установите зависимости:
    ```bash
    npm install
    ```

3. Исправьте ошибки, выявленные линтером:
    ```bash
    npm run lint:fix
    ```

## Запуск приложения

Для запуска приложения в режиме разработки используйте команду:
```bash
npm run dev
```

## Структура проекта

| Папка/Файл         | Описание                          |
|---------------------|-----------------------------------|
| `src/`              | Исходный код проекта              |
| `src/components/`   | Компоненты приложения             |
| `src/styles/`       | Глобальные стили и переменные SCSS|
| `src/App.js`        | Главный компонент приложения      |
| `src/features/`     | Фичи                              |
| `src/hooks/`        | Кастомные хуки                    |
| `src/pages/`        | Страницы приложения               |
| `src/store/`        | Конфигурация Redux store          |
| `src/main.tsx`      | Точка входа приложения            |
| `public/`           | Публичные файлы                   |
| `index.html`        | Главная HTML-страница             |
| `package.json`      | Зависимости и конфигурация проекта|
| `README.md`         | Документация проекта              |

## Скрипты
- npm run dev - Запуск приложения в режиме разработки
- npm run build - Сборка приложения для продакшена
- npm run lint - Запуск Eslint для проверки кода
- npm run lint:fix - Автоматическое исправление ошибок и предупреждений, выявленных инструментом ESLint
- npm run format - Форматирование кода с помощью Prettier

## Github Pages
- https://azatkhisamov.github.io/art-gallery
- для лучшей работы следует отключить блокировщик рекламы
