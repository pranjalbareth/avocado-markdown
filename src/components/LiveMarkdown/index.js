import { useRef, useState } from "react";
import './LiveMarkdown.css';
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export default function LiveMarkdown() {
    const [markdown, setMarkdown] = useState("");
    const markdownRef = useRef(null);

    const handleEditorChange = (event) => {
        setMarkdown(event.target.value);
    };
    return (
        <div className='LiveMarkdown'>
            <div className="frame">
                <textarea
                    className='textarea'
                    ref={markdownRef}
                    value={markdown}
                    onChange={handleEditorChange}
                ></textarea>
                <div className='preview'>
                    <ReactMarkdown rehypePlugins={[rehypeRaw]}>{markdown}</ReactMarkdown>
                </div>
            </div>
        </div>
    )
}
