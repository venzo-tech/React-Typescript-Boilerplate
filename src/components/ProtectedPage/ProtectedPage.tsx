export const ProtectedPage = () => {
  const isAuthorized = window.location.hash === '#authorized'; // Check for hash fragment

  if (!isAuthorized) {
    // Redirect or display appropriate message
    return <div>You are not authorized to access this page.</div>;
  }

  // Render protected content
  return (
    <div>
      <h1>Protected Page</h1>
      {/* Protected content here */}
    </div>
  );
};
