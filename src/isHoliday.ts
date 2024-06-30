import { Preset } from '$types';
import * as latest from './holidays/latest.js';
import * as presets from './holidays/presets.js';
import { toROKDateString } from './modules/utilities.js';

export const generateFn = (presets: Record<string, Preset>) => (date: Date) => {
	if (!(date instanceof Date)) throw new TypeError(`${date} is not a Date`);

	const dateString = toROKDateString(date);
	const moduleName = 'y' + dateString.substring(0, 4);

	const isValidModuleName = (str: string): str is keyof typeof presets => str in presets;
	if (!isValidModuleName(moduleName)) throw new RangeError(`${dateString} cannot be determined.`);

	const preset = presets[moduleName];

	const isValidDateString = (str: string): str is keyof typeof preset => str in preset;
	if (!isValidDateString(dateString)) return null;

	return preset[dateString];
};

export const getHolidayNames = generateFn(latest);
export const isHoliday = (date: Date) => !!getHolidayNames(date);

export const getHolidayNamesE = generateFn(presets);
export const isHolidayE = (date: Date) => !!getHolidayNamesE(date);
