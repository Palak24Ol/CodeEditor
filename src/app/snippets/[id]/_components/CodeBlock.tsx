import React from 'react'

function CodeBlock({ language, code }: { language: string; code: string }) {
  return (
    <div className="bg-gray-800 p-4 rounded my-4">
      <div className="text-xs text-gray-400 mb-2">{language}</div>
      <pre className="text-sm text-gray-200 overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  )
}

export default CodeBlock