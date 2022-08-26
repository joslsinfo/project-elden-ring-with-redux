import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { resetUser } from '../store/authSlice';

const useSignout = () => {
	const storage = localStorage;
	const key = "user";
	const navigate = useNavigate();
	const dispatch = useDispatch();

	return () => {
		dispatch(resetUser());
		storage.removeItem(key);
		navigate("/login");
	}
};

export default useSignout;