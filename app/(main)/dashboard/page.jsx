import { getIndustryInsights } from '@/actions/dashboard'
import { getUserOnboardingStatus } from '@/actions/user'
import { redirect } from 'next/navigation'
import DashboardView from './_component/dashboard-view'

export default async function DashboardPage() {
	const { isOnboarded } = await getUserOnboardingStatus()

	// If not onboarded, redirect to onboarding page
	// Skip this check if already on the onboarding page
	if (!isOnboarded) {
		redirect('/onboarding')
	}

	const insights = await getIndustryInsights()

	return (
		<div className='container px-4 mx-auto'>
			<DashboardView insights={insights} />
		</div>
	)
}
