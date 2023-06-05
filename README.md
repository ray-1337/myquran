# api.myquran.com
This is an unofficial lightweight (~5kB) API wrapper of `api.myquran.com`, with TypeScript typings.

# Examples
```js
// JavaScript
const { findPrayCityByKeyword } = require("myquran");
const city = await findPrayCityByKeyword("depok");
console.log(city.data.lokasi); // "KOTA DEPOK"
```

```ts
// TypeScript
const { getTafsirByID } = require("myquran");
const tafsir = await getTafsirByID("1337");
console.log(tafsir.data[0].text); // "Dan ada pula orang lain yang berada di sekeliling ..."
```

# Features
- TypeScript supports.
- Async-await promise.
- Simple error handling. Simply will return as `null` instead of `{ status: false, message: string }`

# Documentations
Everything is picked up based on [api-myquran.com](https://bit.ly/api-v1-myquran) docs.

# LICENSE
[MIT](LICENSE)