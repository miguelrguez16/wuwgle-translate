import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Row, Stack } from 'react-bootstrap';
import { ArrowsIcon } from './assets/icons';
import { LanguageSelector } from './Components/LanguageSelector';
import { TextArea } from './Components/TextArea';
import { useGoogleReducer } from './hooks';
import { Sections } from './types';

const App = () => {
	const {
		fromLanguage,
		toLanguage,
		interchangeLanguages,
		setFromLanguage,
		setToLanguage,
		loading,
		fromText,
		result,
		setResult,
		setFromText,
	} = useGoogleReducer();

	return (
		<Container fluid>
			<h2>Google Translate</h2>
			<Row>
				<Col xs="auto">
					<Stack gap={2}>
						<LanguageSelector onChange={setFromLanguage} type={Sections.From} value={fromLanguage} />
						<TextArea type={Sections.From} loading={loading} value={fromText} onChange={setFromText} />
					</Stack>
				</Col>

				<Col>
					<Button variant="light" onClick={interchangeLanguages}>
						<ArrowsIcon />
					</Button>
				</Col>
				<Col xs="auto">
					<Stack gap={2}>
						<LanguageSelector onChange={setToLanguage} type={Sections.To} value={toLanguage} />
						<TextArea type={Sections.To} loading={loading} value={result} onChange={setResult} />
					</Stack>
				</Col>
			</Row>
		</Container>
	);
};

export default App;
