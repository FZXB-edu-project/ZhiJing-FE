import SubpageHeader from "@/components/subpage-header";
import SudentNavbar from "@/components/student/student-navbar";
import ChatInput from "@/components/chat/chat-input";
import ChatFuction from "@/components/chat/chat-function";
import {
	UserMessage,
	ZJMessage,
} from "@/components/chat/chat-message";

const page = () => {
	const messages = [
		{
			id: 1,
			content: "123",
			role: "你",
		},
		{
			id: 2,
			content:
				"我好爱你我好爱你我好爱你我好爱你我好爱你我好爱你我好爱你我好爱你我好爱你",
			role: "ZJ",
		},
		{
			id: 3,
			content:
				"我好爱你我好爱你我好爱你我好爱你我好爱你我好爱你我好爱你我好爱你我好爱你",
			role: "你",
		},
		{
			id: 4,
			content:
				"啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊",
			role: "ZJ",
		},
	];

	return (
		<main>
			<SubpageHeader backUrl="/" title="知境" purpose="dialogue"/>
			<div className="w-full relative top-[10vh] flex flex-col gap-[2vh] px-[5%]">
				{messages.map((item, index) =>
					item.role === "ZJ" ? (
						<ZJMessage
							key={item.id}
							content={item.content}
							isLatest={index === messages.length - 1}
						/>
					) : (
						<UserMessage key={item.id} content={item.content} />
					)
				)}
			</div>
			<ChatFuction userType="student"/>
			<ChatInput purpose="dialogue"/>
			<SudentNavbar activeID={1} />
		</main>
	);
};

export default page;
