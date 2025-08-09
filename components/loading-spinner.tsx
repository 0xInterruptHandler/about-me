"use client"

export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        <div className="w-12 h-12 border-2 border-[#a6adc8] rounded-full"></div>
        <div className="absolute top-0 left-0 w-12 h-12 border-2 border-[#cba6f7] border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  )
}
