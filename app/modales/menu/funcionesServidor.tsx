import { supabase } from "@/app/supabase";

export async function userSignUp(email: string, password: string) {
	let { data: signUpData, error: signUpError } = await supabase.auth.signUp({
		email,
		password,
	});

	if (!signUpError) {
		return {signUpData}
	}

	return {signUpError}
}


export async function userLogInEmailPassword(email: string, password: string) {
	let { data: loginEmailPassordData, error: loginEmailPassordError } = await supabase.auth.signInWithPassword({
		email,
		password,
	});

	if (!loginEmailPassordError) {
		return {loginEmailPassordData}
	}

	return {loginEmailPassordError}
}

export async function userLogInMagicLinkViaEmail(email: string) {
	let { data: loginMagicLinkData, error: loginMagicLinkError } = await supabase.auth.signInWithOtp({ email });

	if (!loginMagicLinkError) {
		return {loginMagicLinkData}
	}

	return {loginMagicLinkData}
}