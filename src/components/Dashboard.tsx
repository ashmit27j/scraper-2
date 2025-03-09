import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
	const { user, logout } = useAuth();
	const navigate = useNavigate();

	const handleLogout = async () => {
		try {
			await logout();
			navigate("/login");
		} catch (error) {
			console.error("Failed to log out:", error);
		}
	};

	return (
		<div className="min-h-screen bg-primary p-4">
			<div className="mx-auto max-w-7xl">
				<div className="flex items-center justify-between">
					<h1 className="text-2xl font-bold text-white">
						Welcome, {user?.email}
					</h1>
					<button onClick={handleLogout} className="btn-secondary">
						Sign out
					</button>
				</div>
				<div className="mt-8">
					<div className="rounded-lg bg-secondary p-6">
						<h2 className="text-xl font-semibold text-white">
							Dashboard Content
						</h2>
						<p className="mt-2 text-gray-400">
							This is a protected dashboard page. You can only see this if
							you're logged in.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
