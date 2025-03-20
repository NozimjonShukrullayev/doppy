import { getUserOnboardingStatus } from '@/actions/user'
import { industries } from '@/data/industries'
import { redirect } from 'next/navigation'
import OnboardingForm from './_components/onboarding-form'

export default async function OnboardingPage() {
	// Check if user is already onboarded
	const { isOnboarded } = await getUserOnboardingStatus()

	if (isOnboarded) {
		redirect('/dashboard')
	}

	return (
		<main>
			<OnboardingForm industries={industries} />
		</main>
	)
}
