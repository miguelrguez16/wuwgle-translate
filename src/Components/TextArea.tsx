import { Form } from 'react-bootstrap';
import { Sections } from '../types';

interface Props {
	type: Sections;
	loading?: boolean;
	onChange: (value: string) => void;
	value: string;
}

const commonStyles = { border: 0, height: '200px' };

const getPlaceholder = ({ type, loading }: { type: Sections; loading?: boolean }) => {
	if (type === Sections.From) return 'Introducir texto';
	if (loading === true) return 'Cargando...';
	return 'Traducción';
};

export const TextArea = ({ type, loading, value, onChange }: Props) => {
	const styles = type === Sections.From ? commonStyles : { ...commonStyles, backgroundColor: '#f5f5f5' };

	const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		onChange(event.target.value);
	};

	return (
		<Form.Control
			autoFocus={type === Sections.From}
			as="textarea"
			disabled={type === Sections.To}
			placeholder={getPlaceholder({ type, loading })}
			style={styles}
			value={value}
			onChange={handleChange}
		/>
	);
};
