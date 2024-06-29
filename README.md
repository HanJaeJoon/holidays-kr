# South Korea's National Holidays

Yearly updated based on the official gazette. Available in [npm] and [jsDelivr].

[npm]: https://www.npmjs.com/package/@hyunbinseo/holidays-kr
[jsDelivr]: https://www.jsdelivr.com/package/npm/@hyunbinseo/holidays-kr

## Usage

```js
// ESM and CJS are both supported.
import { y2025 } from '@hyunbinseo/holidays-kr';
const { y2025 } = require('@hyunbinseo/holidays-kr');
```

```js
import { y2025 } from '@hyunbinseo/holidays-kr';

'2025-01-01' in y2025; // true
'2025-01-02' in y2025; // false
```

```jsonc
// y2025 is shaped like this:
{
  "2025-01-01": ["1월 1일"],
  "2025-01-28": ["설날 전날"]
  // ...
}
```

Check if a JavaScript Date is a holiday:

```js
// Uses the latest 2 years of holiday data.
// v3.2025 supports dates in the year 2024-2025
import { isHoliday } from '@hyunbinseo/holidays-kr';

// Jan 01 2025 00:00:00 GMT+0900 is a holiday in ROK.
isHoliday(new Date('2025-01-01T00:00:00.000+0900')); // true

// Be cautious with the date's time zone.
// Dec 31 2024 23:00:00 GMT+0900 is not a holiday in ROK.
isHoliday(new Date('2025-01-01T00:00:00.000+1000')); // false

// Throws RangeError in versions 3.2025 and above.
isHoliday(new Date('2023-01-01T00:00:00.000+0900'));
```

```js
// Uses holiday data from the year 2022.
// v3.2025 supports dates in the year 2022-2025
import { isHolidayExtended as isHoliday } from '@hyunbinseo/holidays-kr';

isHoliday(new Date('2023-01-01T00:00:00.000+0900')); // true
```

## Migration

### 3.x

- The `/public` directory has been removed.
- Saturday, Sunday checks have been removed.
- Throws `RangeError` instead of returning `null`.
- `isHoliday` uses the latest 2 years of holiday data.

```diff
# Yearly holidays changed from a Map to an Object.
- y2025.has('2025-01-01');
+ '2025-01-01' in y2025;
```

### 2.x

```diff
- import { isHoliday } from '@hyunbinseo/holidays-kr/check';
+ import { isHoliday } from '@hyunbinseo/holidays-kr';
```
