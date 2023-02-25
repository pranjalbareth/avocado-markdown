function handleUnderline(editorContent, editorRef, setEditorContent) {
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

    if (selectedText.startsWith("<u>") && selectedText.endsWith("</u>")) {
        const unboldText = selectedText.substring(3, selectedText.length - 4);
        newContent = `${beforeSelection}${unboldText}${afterSelection}`;
    } else {
        const boldText = `<u>${selectedText}</u>`;
        newContent = `${beforeSelection}${boldText}${afterSelection}`;
    }

    setEditorContent(newContent);
}

export { handleUnderline };
