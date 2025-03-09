import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./context/AuthContext";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
	return (
		<Router>
			<AuthProvider>
				<Toaster
					position="top-right"
					toastOptions={{
						className: "dark:bg-gray-800 dark:text-white",
						style: {
							background: "#1a1a1a",
							color: "#fff",
						},
					}}
				/>
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<SignUp />} />
					<Route
						path="/dashboard"
						element={
							<ProtectedRoute>
								<Dashboard />
							</ProtectedRoute>
						}
					/>
					<Route path="/" element={<Navigate to="/dashboard" replace />} />
				</Routes>
			</AuthProvider>
		</Router>
	);
}

export default App;
