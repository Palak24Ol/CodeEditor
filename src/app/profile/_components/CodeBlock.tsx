"use client";
import React, { useState } from 'react'
interface CodeBlockProps {
  code: string;
  language: string;
}



const CodeBlock = ({ code }: CodeBlockProps) => {
  const [isExpanded] = useState(false);
  const lines = code.split("\n");
  const displayCode = isExpanded ? code : lines.slice(0, 6).join("\n");
  return (
    <div>{displayCode}</div>
  )
}

export default CodeBlock