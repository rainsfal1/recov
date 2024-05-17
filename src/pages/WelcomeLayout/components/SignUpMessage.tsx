export default function SignUpMessage() {
  return (
    <div className="create-account-container">
      <p>
        Don't have an account?
        <a
          href="/WelcomeLayout/components/SignUpMessage"
          target="_blank"
          rel="noopener noreferrer"
          className="signup-link"
        >
          <span style={{ fontWeight: 700 }}> Sign up</span>
        </a>
      </p>
    </div>
  );
}
