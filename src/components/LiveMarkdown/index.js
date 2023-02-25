import { useRef, useState } from "react";
import './LiveMarkdown.css';
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { handleBoldClick } from "../../utils/handleBold";
import { handleItalic } from "../../utils/handleItalic";
import { handleUnderline } from "../../utils/handleUnderline";
import { handleH1 } from "../../utils/handleH1";
import { handleH2 } from "../../utils/handleH2";
import { handleH3 } from "../../utils/handleH3";
import { handleBlockQuote } from "../../utils/handleBlockQuote";
import { QuoteLeft } from "@styled-icons/boxicons-solid";
import { Bold, Italic, Underline } from "@styled-icons/boxicons-regular";
import { H1, H2, H3 } from "@styled-icons/remix-editor";
import { ListUnordered, ListOrdered, HorizontalRule } from "@styled-icons/octicons";
import { Link2Outline } from "@styled-icons/evaicons-outline";
import { Image } from "@styled-icons/evaicons-solid";
import Tooltip from '../ToolTip';

export default function LiveMarkdown() {
    const [markdown, setMarkdown] = useState("");
    const markdownRef = useRef(null);

    const handleEditorChange = (event) => {
        setMarkdown(event.target.value);
    };
    return (
        <div className='LiveMarkdown'>
            <div class="editingFeatures">
                <div className="features separate-features">
                    <Tooltip text="Bold">
                        <button onClick={() => handleBoldClick(markdown, markdownRef, setMarkdown)} className="feature"><Bold /></button>
                    </Tooltip>
                    <Tooltip text="Italic">
                        <button onClick={() => handleItalic(markdown, markdownRef, setMarkdown)} className="feature"><Italic /></button>
                    </Tooltip>
                    <Tooltip text="Underline">
                        <button onClick={() => handleUnderline(markdown, markdownRef, setMarkdown)} className="feature"><Underline /></button>
                    </Tooltip>
                </div>
                <div className="features joint-feature">
                    <Tooltip text="Heading 1">
                        <button onClick={() => handleH1(markdown, markdownRef, setMarkdown)} style={{ borderRadius: "5px 0px 0px 5px" }}><H1 /></button>
                    </Tooltip>
                    <Tooltip text="Heading 2">
                        <button onClick={() => handleH2(markdown, markdownRef, setMarkdown)} style={{ borderRadius: "0px" }}><H2 /></button>
                    </Tooltip>
                    <Tooltip text="Heading 3">
                        <button onClick={() => handleH3(markdown, markdownRef, setMarkdown)} style={{ borderRadius: "0px 5px 5px 0px" }}><H3 /></button>
                    </Tooltip>
                </div>
                <div className="features separate-features">
                    <Tooltip text="BlockQuotes">
                        <button onClick={() => handleBlockQuote(markdown, markdownRef, setMarkdown)} className="feature"><QuoteLeft /></button>
                    </Tooltip>
                </div>
                {/* <div className="features joint-feature">
                    <Tooltip text="Ordered List">
                        <button disabled style={{ borderRadius: "5px 0px 0px 5px" }}><ListUnordered /></button>
                    </Tooltip>
                    <Tooltip text="Unordered List">
                        <button disabled style={{ borderRadius: "0px 5px 5px 0px" }}><ListOrdered /></button>
                    </Tooltip>
                </div>
                <div className="features separate-features">
                    <Tooltip text="Horizontal Rule">
                        <button disabled className="feature"><HorizontalRule /></button>
                    </Tooltip>
                    <Tooltip text="Link">
                        <button disabled className="feature"><Link2Outline /></button>
                    </Tooltip>
                    <Tooltip text="Image">
                        <button disabled className="feature"><Image /></button>
                    </Tooltip>
                </div> */}
            </div>
            <div className="Tags">
                <p>Markdown</p>
            </div>
            <div className="frame">
                <textarea
                    className='textarea'
                    ref={markdownRef}
                    value={markdown}
                    onChange={handleEditorChange}
                ></textarea>
                <div className="Tags" style={{ padding: "6px 0px 6px 12px" }}>
                    <p>Preview</p>
                </div>
                <div className='preview'>
                    <ReactMarkdown rehypePlugins={[rehypeRaw]}>{markdown}</ReactMarkdown>
                </div>
            </div>
        </div>
    )
}
