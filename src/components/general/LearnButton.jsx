import { useNavigate } from "react-router-dom";

function LearnButton({ to = "/" }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(to)}
      className="px-5 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
    >
      Learn More
    </button>
  );
}

export default LearnButton;
