import styled from "styled-components";
import Form from "../form/Form";

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

function App() {
	return (
		<Container>
			<Form />
		</Container>
	);
}

export default App;
