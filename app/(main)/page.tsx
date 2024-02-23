import { ModeToggle } from "@/components/mode-toggle";
import Navbar from "@/components/navbar";

export default function Home() {
	return (
		<main>
			<Header />
			<div className="relative top-[10vh] flex justify-center">
				<p className="text-gray-400">选择咨询科目</p>
			</div>
			<div className="w-full h-[25vh] grid grid-cols-2 grid-rows-2 gap-x-[10px] gap-y-[10px] px-[20px] py-[10px] relative top-[11vh]">
				<div className="bg-blue-500 rounded-lg flex justify-center items-center">
					<div className="font-bold">数学</div>
				</div>
				<div className="bg-red-500 rounded-lg flex justify-center items-center">
					<div className="font-bold">语文</div>
				</div>
				<div className="bg-yellow-500 rounded-lg flex justify-center items-center">
					<div className="font-bold">历史</div>
				</div>
				<div className="bg-orange-500 rounded-lg flex justify-center items-center">
					<div className="font-bold">物理</div>
				</div>
			</div>
			<Navbar />
		</main>
	);
}

const Header = () => {
	return (
		<header className="fixed w-full h-[10vh]">
			<span className="w-[5vh] h-[5vh] bg-purple-600 absolute left-[5%] top-[2.5vh]"></span>
			<p className="text-sm text-gray-400 absolute left-[17%] top-[2.5vh]">
				欢迎使用
			</p>
			<p className="text-lg font-bold absolute left-[17.2%] top-[4.5vh]">
				知境
			</p>
			<div className="absolute right-[5%] top-[3vh]">
				<ModeToggle />
			</div>
		</header>
	);
};
