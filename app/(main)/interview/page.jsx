import { getAssessments } from '@/actions/interview'
import PerformanceChart from './_components/performace-chart'
import QuizList from './_components/quiz-list'
import StatsCards from './_components/stats-cards'

export default async function InterviewPrepPage() {
	const assessments = await getAssessments()

	return (
		<div>
			<div className='flex container px-4 items-center justify-between mb-5'>
				<h1 className='text-6xl font-bold gradient-title'>
					Interview Preparation
				</h1>
			</div>
			<div className='space-y-6'>
				<StatsCards assessments={assessments} />
				<PerformanceChart assessments={assessments} />
				<QuizList assessments={assessments} />
			</div>
		</div>
	)
}
