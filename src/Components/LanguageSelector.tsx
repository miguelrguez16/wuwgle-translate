import { Form } from 'react-bootstrap';
import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from '../const';
import { FromLanguage, Language, Sections } from '../types';

type Props =
	| { type: Sections.From; value: FromLanguage; onChange: (language: FromLanguage) => void }
	| { type: Sections.To; value: Language; onChange: (language: Language) => void };

export const LanguageSelector: React.FC<Props> = ({ onChange, type, value }) => {
	const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		onChange(event.target.value as Language);
	};

	return (
		<Form.Select aria-label="Selecciona el idioma" onChange={handleChange} value={value}>
			{type === Sections.From && <option value={AUTO_LANGUAGE}>Detectar idioma</option>}

			{Object.entries(SUPPORTED_LANGUAGES).map(([key, literal]) => (
				<option key={key} value={key}>
					{literal}
				</option>
			))}
		</Form.Select>
	);
};
