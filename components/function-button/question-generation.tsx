import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const QuestionGeneration = () => {
	return (
		<div className="w-full h-[4.5vh] flex items-center">
			<Dialog>
				<DialogTrigger asChild>
					<Button
						className="absolute border-0 w-[20%] h-[3vh] p-0 left-[25%]"
						variant="default"
						size="sm"
					>
						题目生成
					</Button>
				</DialogTrigger>
				<DialogContent className="sm:max-w-[425px]">
					<DialogHeader>
						<DialogTitle>题目生成</DialogTitle>
						<DialogDescription>请填写以下信息</DialogDescription>
					</DialogHeader>
					<div className="grid gap-4 py-4">
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="text" className="text-right">
								知识点
							</Label>
							<Textarea
								id="text"
								placeholder="请输入知识点"
								className="col-span-3"
							/>
						</div>
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="text" className="text-right">
								题目类型
							</Label>
							<Input
								id="text"
								placeholder="请输入题目类型"
								className="col-span-3"
							/>
						</div>
					</div>
					<DialogFooter>
						<Button type="submit">生成题目</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default QuestionGeneration;
