import { useNavigate } from "react-router-dom";

const Intro = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center">
            <div className="text-center p-6 bg-white rounded-2xl shadow-xl max-w-md w-full">
                <h1 className="text-4xl font-bold mb-4 text-indigo-700">
                    📝 Todo APP
                </h1>
                <p className="text-gray-600 mb-6">
                    오늘의 할 일을 정리해보세요.
                    <br />
                    간단하고 빠르게 할 일 관리하기!
                </p>
                <button
                    onClick={() => navigate("/todos")}
                    className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-200"
                >
                    시작하기
                </button>
            </div>
        </div>
    );
};

export default Intro;
