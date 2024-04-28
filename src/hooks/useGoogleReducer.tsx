import React from 'react';
import { AUTO_LANGUAGE } from '../const';
import { Action, ACTIONS, FromLanguage, Language, State } from '../types';

const initState: State = {
	fromLanguage: 'auto',
	toLanguage: 'es',
	fromText: '',
	result: '',
	loading: false,
};

const reducer = (state: State, action: Action): State => {
	const { type } = action;
	console.log('type', type);

	if (ACTIONS.INTERCHANGE_LANGUAGES === type) {
		console.log('state.toLanguage', state.toLanguage);
		console.log('state.fromLanguage', state.fromLanguage);
		if (state.fromLanguage === AUTO_LANGUAGE) return state;

		return {
			...state,
			fromLanguage: state.toLanguage,
			toLanguage: state.fromLanguage,
		};
	}
	// FROM LANGUAGE
	if (ACTIONS.SET_FROM_LANGUAGE === type) {
		return {
			...state,
			fromLanguage: action.payload.fromLanguage,
		};
	}

	// TO LANGUAGE
	if (ACTIONS.SET_TO_LANGUAGE === type) {
		return {
			...state,
			toLanguage: action.payload.toLanguage,
		};
	}

	// FROM TEXT
	if (type === ACTIONS.SET_FROM_TEXT) {
		return {
			...state,
			loading: true,
			fromText: action.payload.fromText,
		};
	}
	// TO TEXT
	if (ACTIONS.SET_RESULT_TEXT === type) {
		return {
			...state,
			loading: false,
			result: action.payload.result,
		};
	}

	return state;
};

export const useGoogleReducer = (): {
	fromLanguage: FromLanguage;
	toLanguage: Language;
	fromText: string;
	result: string;
	loading: boolean;
	interchangeLanguages: () => void;
	setFromLanguage: (newLanguage: FromLanguage) => void;
	setToLanguage: (newLanguage: Language) => void;
	setFromText: (fromText: string) => void;
	setResult: (result: string) => void;
} => {
	const [state, dispatch] = React.useReducer(reducer, initState);

	const { fromLanguage, toLanguage, fromText, result, loading } = state;

	const interchangeLanguages = () => dispatch({ type: ACTIONS.INTERCHANGE_LANGUAGES });

	const setFromLanguage = (newLanguage: FromLanguage) =>
		dispatch({ type: ACTIONS.SET_FROM_LANGUAGE, payload: { fromLanguage: newLanguage } });

	const setToLanguage = (newLanguage: Language) =>
		dispatch({ type: ACTIONS.SET_TO_LANGUAGE, payload: { toLanguage: newLanguage } });

	const setFromText = (fromText: string) =>
		dispatch({ type: ACTIONS.SET_FROM_TEXT, payload: { fromText: fromText } });

	const setResult = (result: string) => dispatch({ type: ACTIONS.SET_RESULT_TEXT, payload: { result: result } });

	return {
		fromLanguage,
		toLanguage,
		fromText,
		result,
		loading,
		interchangeLanguages,
		setFromLanguage,
		setToLanguage,
		setFromText,
		setResult,
	};
};
