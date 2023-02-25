function handleH1(editorContent, editorRef, setEditorContent) {
    const editor = editorRef.current;
    const selectionStart = editor.selectionStart;
    const selectionEnd = editor.selectionEnd;

    if (selectionStart === selectionEnd) {
        return;
    }

    const beforeSelection = editorContent.substring(0, selectionStart);
    const selectedText = editorContent.substring(selectionStart, selectionEnd);
    const afterSelection = editorContent.substring(selectionEnd, editorContent.length);

    let newContent;

    if (selectedText.startsWith("#")) {
        const unheadingText = selectedText.substring(2, selectedText.length);
        newContent = `${beforeSelection}${unheadingText}${afterSelection}`;
    } else {
        const headingText = `# ${selectedText}`;
        newContent = `${beforeSelection}${headingText}${afterSelection}`;
    }

    setEditorContent(newContent);
}

export { handleH1 };
