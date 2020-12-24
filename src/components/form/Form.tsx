import { useFormik } from "formik";
import styled from "styled-components";
import * as Yup from "yup";

const FormContainer = styled.form`
	width: 500px;
	height: 500px;
	display: flex;
	align-items: center;
	flex-direction: column;
`;

const FormGroup = styled.div`
	width: 100%;
	margin-bottom: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const Label = styled.label`
	width: 100%;
`;

const Input = styled.input`
	width: 100%;
	font-size: 2rem;
	padding: 0;
`;

const Error = styled.div`
	width: 100%;
	height: 20px;
	color: #ff6767;
`;

const ErrorPlaceholder = styled.div`
	width: 100%;
	height: 20px;
`;

const Button = styled.button`
	width: 100%;
	height: 50px;
	color: #fff;
	background-color: #181616;
	border: none;
	font-size: 1.5rem;
	transition: box-shadow 300ms ease;
	:hover {
		cursor: pointer;
		box-shadow: 0 0 15px #000000;
	}
`;

function Form() {
	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: Yup.object({
			email: Yup.string().email().required("Required"),
			password: Yup.string().min(6).max(30).required("Required"),
		}),
		onSubmit: (values, { resetForm }) => {
			alert(JSON.stringify(values, null, 2));
			resetForm();
		},
	});

	return (
		<FormContainer onSubmit={formik.handleSubmit}>
			<FormGroup>
				<Label htmlFor="email">Email</Label>
				<Input
					id="email"
					name="email"
					type="text"
					autoComplete="true"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.email}
				/>
				{formik.touched.email && formik.errors.email ? (
					<Error>{formik.errors.email}</Error>
				) : (
					<ErrorPlaceholder />
				)}
			</FormGroup>
			<FormGroup>
				<Label htmlFor="password">Password</Label>
				<Input
					id="password"
					name="password"
					type="password"
					autoComplete="true"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.password}
				/>
				{formik.touched.password && formik.errors.password ? (
					<Error>{formik.errors.password}</Error>
				) : (
					<ErrorPlaceholder />
				)}
			</FormGroup>
			<Button type="submit">Submit</Button>
		</FormContainer>
	);
}

export default Form;
