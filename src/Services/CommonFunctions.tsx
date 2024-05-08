export const camelCaseConvertForErrorMessage = (message: any) => {
  const RESPONSE_CAMEL_AVOID_WORDS = [
    "in",
    "the",
    "with",
    "and",
    "or",
    "not",
    "didn't",
    "is",
    "this",
    "without",
    "your",
    "cannot",
    "be",
    "id",
    "make",
    "are",
    "which",
    "added",
  ];
  const messageArray = message.split(" ");
  const convertedArray = messageArray.map((msg: any) => {
    if (RESPONSE_CAMEL_AVOID_WORDS.includes(msg)) return msg;
    let result = msg.slice(0, msg.length).toLowerCase();
    return result.charAt(0).toUpperCase() + result.slice(1);
  });
  return convertedArray.join(" ");
};

export const NavigateToSignInWithRouteParams = (response: any) => {
  const origin = window.location.origin;
  const search = window.location.search;
  sessionStorage.setItem("lastExpiredRoute", window.location.pathname+search);
  window.location.href = `${origin}/login?errormessage=${response.data.message}`;
}

export const authErrors: any = {
  "auth/user-not-found": "Please sign up",
  "auth/email-already-exists":
    "Email Id already exists, Please Sign in to Continue",
  "auth/wrong-password": "Invalid password",
  "auth/too-many-requests": "Please try again after 30 seconds",
};