export default function Loading() {
  return (
    <div className="container-px mx-auto max-w-7xl py-20 flex items-center justify-center">
      <div className="flex items-center gap-3">
        <div className="h-8 w-8 rounded-xl bg-brand animate-pulse" />
        <span className="text-lg font-medium">Loading...</span>
      </div>
    </div>
  )
}