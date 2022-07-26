# Movies Explorer
<p align="center">
    <img alt="Version 1.0.0" src="https://img.shields.io/badge/version-1.0.0-blue" />
    <img alt="Quality" src="https://img.shields.io/badge/status-release-orange.svg" >
    <img alt="Made by: Comediany" src="https://img.shields.io/badge/made%20by-MenshikovZakhar-blue" />
</p>

## :memo: Описание
Backend для дипломного проекта Movies Explorer, выполненный в рамках учебной программы Яндекс.Практикум 
по специальности веб-разработчик
Проект представляет собой сервис поиска фильмов по запросу и с возможностью их сохранения в личном кабинете.
В проекте задействованы две сущности: пользователи и фильмы. Схемы и модели созданы через Mongoose с валидируемыми полями. Все роуты, кроме логина и логаута, защищены мидлвэрей auth, которая проверяет Authorization и наличие в нем токена в приходящих запросах. Обращение к API происходит через роуты с валидацией запросов через Joi и celebrate. В контроллерах описана логика обработки запросов. Контроллер логина создает JWT токен сроком на неделю. В контроллере регистрации пользователя пароль хешеруется модулем bcryptjs. В проекте реализована централизованная обработка ошибок через конструкторы ошибок - конструкторы передаются в блоках catch через функцию next и далее в мидлвэр обработки ошибок в app.js. Для логгирования запросов и ошибок используется библиотека Winston. 

## Адрес домена сервера
https://api.domainname.movies.nomoredomains.xyz

## Публичный IP-адрес сервера
130.193.53.103

## 💻 Функционал
1. Авторизация пользователя по email и паролю, без подтверждения email
2. Аутентификация пользователя по email и паролю
3. Редактирование профиля пользователя
4. Поиск фильмов по ключевым словам в сервисе MoviesExplorer
5. Сохранение\удаление найденных фильмов в своем личном кабинете

## :hammer: Стэк технологий
1. Node.js;
2. MongoDB;
3. Express.js;
4. Mongoose.
