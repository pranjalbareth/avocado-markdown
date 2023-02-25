function handleItalic(editorContent, editorRef, setEditorContent) {
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

    if (selectedText.startsWith("*") && selectedText.endsWith("*")) {
        const unboldText = selectedText.substring(1, selectedText.length - 1);
        newContent = `${beforeSelection}${unboldText}${afterSelection}`;
    } else {
        const boldText = `*${selectedText}*`;
        newContent = `${beforeSelection}${boldText}${afterSelection}`;
    }

    setEditorContent(newContent);
}

export { handleItalic };
