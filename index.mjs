import { writeFile } from 'node:fs/promises';
import presets from './input/presets.json' assert { type: 'json' };
import { generateCsv } from './script/csv.mjs';
import { generateIcs, generateIcsEvents } from './script/ics.mjs';

const year = 2023;

const dates = presets[year];

if (!dates || typeof dates !== 'object' || !Object.keys(dates).length) throw new Error('Invalid dates format');

for (const date in dates) {
	const subject = dates[date];
	if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) throw new Error('Invalid date format');
	if (!subject || typeof subject !== 'string') throw new Error('Invalid subject format');
};

await writeFile(`./output/${year}.csv`, generateCsv(dates));
await writeFile(`./output/${year}.ics`, generateIcs(generateIcsEvents(dates)));
