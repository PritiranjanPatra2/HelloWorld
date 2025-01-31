import React, { useState, useEffect } from "react";
import "./CodeEditor.css";

function CodeEditor() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");

  const generatePreview = () => {
    return `
      <html>
        <head>
          <style>${css}</style>
        </head>
        <body>
          ${html}
          <script>${js}<\/script>
        </body>
      </html>
    `;
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      const iframe = document.getElementById("output");
      iframe.contentDocument.open();
      iframe.contentDocument.write(generatePreview());
      iframe.contentDocument.close();
    }, 300);
    
    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <div className="code-editor-container">
      <div className="editor-section">
        <div className="editor">
          <h3>HTML</h3>
          <textarea value={html} onChange={(e) => setHtml(e.target.value)} placeholder="Write HTML here..."></textarea>
        </div>
        <div className="editor">
          <h3>CSS</h3>
          <textarea value={css} onChange={(e) => setCss(e.target.value)} placeholder="Write CSS here..."></textarea>
        </div>
        <div className="editor">
          <h3>JavaScript</h3>
          <textarea value={js} onChange={(e) => setJs(e.target.value)} placeholder="Write JavaScript here..."></textarea>
        </div>
      </div>

      <div className="output-section">
        <h3>Output</h3>
        <iframe id="output" title="Live Output"></iframe>
      </div>
    </div>
  );
}

export default CodeEditor;
