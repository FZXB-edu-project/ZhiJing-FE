"use client";

import Header from "@/components/main-header";
import TeacherNavbar from "@/components/teacher/teacher-navbar";
import PieChart from "@/components/pie-chart";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const page = () => {
	const data = [
		{ value: 735, name: "选择题" },
		{ value: 510, name: "是非题" },
		{ value: 434, name: "计算题" },
	];

	return (
		<main>
			<Header />
			<PieChart
				title="错题类别"
				subTitle="知境"
				seriesName="错题数"
				className="relative top-[10vh]"
				data={data}
			/>
			<div className="w-full h-[30vh] relative top-[3vh] flex flex-col items-center gap-[2vh]">
				<p className="font-bold text-lg">错题分布分析</p>
				<div className="w-full flex gap-1 justify-center items-center rounded">
					<Textarea
						id="analyze"
						value="根据上述分析，该同学在选择题、是非题和计算题上都存在一定的困难和错误。为了改善错题分布，建议该同学重点关注在这三个题型上的弱点，并采取相应的措施进行提高，例如加强对题目的理解、注意细节、加强对公式和概念的掌握、多做相关类型的练习题目等。此外，及时反馈和与老师的沟通也是提高题目解答能力的重要途径。"
						className="bg-gray-900 w-[80%] h-[20vh] outline-none border-none"
						disabled
					/>
				</div>
				<Button>易错题生成</Button>
			</div>
			<TeacherNavbar activeID={3} />
		</main>
	);
};

export default page;
