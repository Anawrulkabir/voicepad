'use client'
import React, { useState } from 'react'
import { Mic, X, Check, Pause } from 'lucide-react'
import ShineBorder from './ui/shine-border'

const AskRecordChatBtn = () => {
  const [dialog, setDialog] = useState<null | 'ask' | 'note' | 'record'>(null)
  const [isRecording, setIsRecording] = useState(false)
  const [recordingTime, setRecordingTime] = useState(0)
  const [showRecordingDot, setShowRecordingDot] = useState(true)

  React.useEffect(() => {
    let timerInterval: any
    let blinkInterval: any

    if (isRecording) {
      timerInterval = setInterval(() => {
        setRecordingTime((prev) => prev + 1)
      }, 1000)

      blinkInterval = setInterval(() => {
        setShowRecordingDot((prev) => !prev)
      }, 500)
    }

    return () => {
      clearInterval(timerInterval)
      clearInterval(blinkInterval)
    }
  }, [isRecording])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
  }

  return (
    <div className="relative h-screen bg-white text-zinc-800">
      {/* Fixed bottom buttons */}

      <ShineBorder
        className="fixed bottom-6 left-1/2 transform -translate-x-1/2 flex gap-x-2 bg-white rounded-full p-2 shadow-lg  items-center justify-between"
        color={['#A07CFE', '#FE8FB5', '#FFBE7B']}
      >
        <button
          onClick={() => setDialog('ask')}
          className="flex items-center  px-6 py-2 rounded-full bg-gray-100"
        >
          <span className="text-xl">💭</span>
          Ask AI
        </button>

        <button
          onClick={() => setDialog('note')}
          className="flex items-center  px-6 py-2 rounded-full bg-gray-100"
        >
          <span className="text-xl">✏️</span>
          Note
        </button>

        <button
          onClick={() => {
            setDialog('record')
            setIsRecording(true)
          }}
          className="flex items-center  px-6 py-2 rounded-full bg-black text-white"
        >
          <Mic className="w-5 h-5" />
          Record
        </button>
      </ShineBorder>

      {/* Ask AI Dialog */}
      {dialog === 'ask' && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-xl bg-white rounded-xl shadow-lg p-4">
          <div className="flex justify-between items-center mb-4">
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-white rounded-full border border-gray-200">
                Ask
              </button>
              <button className="px-4 py-2 bg-gray-100 rounded-full border border-gray-200">
                Create
              </button>
            </div>
            <button onClick={() => setDialog(null)} className="p-2">
              <X className="w-6 h-6" />
            </button>
          </div>
          <p className="text-gray-600 mb-4">
            Ask anything about your notes. Since December 22, 2024, you&apos;ve
            recorded a total of 8 notes.
          </p>
          <div className="p-4 bg-gray-100 rounded-lg flex items-center gap-2">
            <input
              type="text"
              placeholder="Ask a question"
              className="flex-1 bg-transparent outline-none"
            />
            <Mic className="w-5 h-5 text-gray-500" />
          </div>
        </div>
      )}

      {/* Note Dialog */}
      {dialog === 'note' && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-xl bg-white rounded-xl shadow-lg">
          <textarea
            placeholder="Write a note..."
            className="w-full p-4 outline-none resize-none rounded-t-xl"
            rows={8}
          />
          <div className="p-3 flex justify-between items-center border-t">
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <img
                src="/api/placeholder/24/24"
                alt="Add media"
                className="w-6 h-6"
              />
            </button>
            <div className="flex gap-2">
              <button
                onClick={() => setDialog(null)}
                className="px-4 py-2 text-black"
              >
                <X className="w-5 h-5" />
              </button>
              <button className="px-4 py-2 text-green-600 font-medium">
                <span className="flex items-center gap-1">
                  <Check className="w-5 h-5" />
                  Done
                </span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Recording Dialog */}
      {dialog === 'record' && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-xl bg-white rounded-xl shadow-lg p-4">
          <div className="flex justify-between items-center mb-4">
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-white rounded-full border border-gray-200">
                Note
              </button>
              <button className="px-4 py-2 bg-gray-100 rounded-full border border-gray-200 flex items-center gap-1">
                Meeting
                <span className="w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center text-xs">
                  i
                </span>
              </button>
            </div>
            <div className="flex items-center gap-2">
              {isRecording && (
                <div
                  className={`w-2 h-2 rounded-full ${
                    showRecordingDot ? 'bg-red-500' : 'bg-transparent'
                  }`}
                />
              )}
              <span className="text-lg font-medium">
                {formatTime(recordingTime)}
              </span>
            </div>
          </div>

          {/* Waveform visualization placeholder */}
          <div className="w-full h-32 bg-gray-50 mb-4 rounded"></div>

          <div className="flex justify-between gap-3">
            <button
              onClick={() => {
                setDialog(null)
                setIsRecording(false)
              }}
              className="flex items-center justify-center gap-2 px-6 py-2 rounded-full bg-red-50 text-red-500"
            >
              <X size={20} />
              Cancel
            </button>

            <button
              onClick={() => setIsRecording(!isRecording)}
              className="flex items-center justify-center gap-2 px-6 py-2 rounded-full bg-gray-100"
            >
              <Pause size={20} />
              Pause
            </button>

            <button
              onClick={() => {
                setDialog(null)
                setIsRecording(false)
              }}
              className="flex items-center justify-center gap-2 px-6 py-2 rounded-full bg-green-50 text-green-500"
            >
              <Check size={20} />
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AskRecordChatBtn
