export default function LogoutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-md mx-auto text-center space-y-4">
        <div className="inline-flex items-center justify-center p-4 bg-muted rounded-full mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-muted-foreground"
          >
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" x2="9" y1="12" y2="12" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold">You have been logged out</h1>
        <p className="text-muted-foreground leading-relaxed">Thank you for using CollegeDash. See you again soon!</p>
      </div>
    </div>
  )
}
