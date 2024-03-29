"use client";

import SimilarQuestions from "@/components/function-button/similar-questions";
import PlanGeneration from "@/components/function-button/plan-generation";
import QuestionGeneration from "@/components/function-button/question-generation";

type ChatFuctionProps = {
	userType: "student" | "teacher";
};

const ChatFunction: React.FC<ChatFuctionProps> = ({ userType }) => {
	return (
		<div className="w-full h-[5vh] fixed bottom-[15.5vh] flex flex-col">
			<div className="w-full h-[0.1vh] bg-gray-700"></div>
			{userType === "student" && <SimilarQuestions />}
			{userType === "teacher" && (
				<div className="flex">
					<PlanGeneration /> <QuestionGeneration />
				</div>
			)}
		</div>
	);
};

export default ChatFunction;
