# OmertexNodeTask

для старта 

переименовать .env copy в .env \n
npm start


GET запрсы
в каждом запросе устанавливаем актуальный токен

'headers': {
'Authorization': 'Bearer <актуальный accessToken>'
},

при каждом запрсе получаем свежий токен с экспаерсом в 5минут,
мне показалось что такая реализация предпочтительнее, тк
прямая реализация условия задания позволяет накликать
очень большое время жизни токена

если на фронт приходит сообщение 'TokenExpired', чтобы не перелогиниваться
нужно реализовать получение нового токена доступа по рефреш токену
