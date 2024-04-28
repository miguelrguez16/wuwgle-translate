import { type AUTO_LANGUAGE, type SUPPORTED_LANGUAGES } from './const';

export interface State {
	fromLanguage: FromLanguage;
	toLanguage: Language;
	fromText: string;
	result: string;
	loading: boolean;
}

export enum ACTIONS {
	SET_FROM_LANGUAGE = 'SET_FROM_LANGUAGE',
	SET_TO_LANGUAGE = 'SET_TO_LANGUAGE',
	INTERCHANGE_LANGUAGES = 'INTERCHANGE_LANGUAGES',
	SET_FROM_TEXT = 'SET_FROM_TEXT',
	SET_RESULT_TEXT = 'SET_RESULT_TEXT',
}

export type Action =
	| { type: ACTIONS.INTERCHANGE_LANGUAGES }
	| { type: ACTIONS.SET_FROM_TEXT; payload: { fromText: string } }
	| { type: ACTIONS.SET_RESULT_TEXT; payload: { result: string } }
	| { type: ACTIONS.SET_FROM_LANGUAGE; payload: { fromLanguage: FromLanguage } }
	| { type: ACTIONS.SET_TO_LANGUAGE; payload: { toLanguage: Language } };

export type Language = keyof typeof SUPPORTED_LANGUAGES;
export type AutoLanguage = typeof AUTO_LANGUAGE;
export type FromLanguage = Language | AutoLanguage;

export enum Sections {
	From = 'from',
	To = 'to',
}
