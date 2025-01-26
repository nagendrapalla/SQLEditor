import React, { useEffect, useRef } from 'react';
import * as monaco from 'monaco-editor';

// SQL tables and columns for autocomplete (static for this example)
const tables = ['Users', 'Orders', 'Products'];
// Define the columns type
const columns: Record<string, string[]> = {
    Users: ['id', 'name', 'age', 'email'],
    Orders: ['order_id', 'user_id', 'amount', 'status'],
    Products: ['product_id', 'product_name', 'price'],
};
const sqlKeywords = ['SELECT', 'FROM', 'WHERE', 'ORDER BY', 'GROUP BY', 'INSERT INTO', 'UPDATE', 'DELETE'];

interface MonacoSqlEditorProps {
    initialValue?: string;
    theme?: string;
    height?: string;
    width?: string;
    handleOnChange: (newValue: string) => void;
}

const MonacoSQLEditor: React.FC<MonacoSqlEditorProps> = ({
    initialValue = '',
    theme = 'vs-dark',
    height = '500px',
    width = '100%',
    handleOnChange
}) => {
    const editorRef = useRef<HTMLDivElement | null>(null);
    const monacoInstance = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
        handleOnChange(event.target.value); // Pass the value back to the parent
    };

    useEffect(() => {
        if (editorRef.current) {
            // Initialize Monaco Editor
            monacoInstance.current = monaco.editor.create(editorRef.current, {
                value: initialValue,
                language: 'sql', // Use SQL language
                theme: theme,
                automaticLayout: true,
                scrollBeyondLastLine: false,
                minimap: { enabled: false },
            });

            // Register a completion item provider for SQL
            const disposable = monaco.languages.registerCompletionItemProvider('sql', {
                provideCompletionItems: (model, position) => {
                    const suggestions: monaco.languages.CompletionItem[] = [];
                    const lineContent = model.getLineContent(position.lineNumber);
                    const wordsBeforeCursor = lineContent.slice(0, position.column - 1).split(/\s+/);
                    const lastWord = wordsBeforeCursor[wordsBeforeCursor.length - 1];

                    const wordRange = {
                        startLineNumber: position.lineNumber,
                        endLineNumber: position.lineNumber,
                        startColumn: position.column - lastWord.length,
                        endColumn: position.column,
                    };

                    // Suggestions based on context
                    if (lastWord.toUpperCase() === 'SELECT' || lastWord === '') {
                        // Suggest columns and keywords after SELECT
                        suggestions.push(
                            ...columns['Users'].map((col) => ({
                                label: col,
                                kind: monaco.languages.CompletionItemKind.Field,
                                insertText: col,
                                detail: `Column in Users table`,
                                range: wordRange, // Specify the range
                            }))
                        );
                        suggestions.push(
                            ...sqlKeywords
                                .filter((keyword) => keyword !== 'SELECT')
                                .map((keyword) => ({
                                    label: keyword,
                                    kind: monaco.languages.CompletionItemKind.Keyword,
                                    insertText: keyword,
                                    detail: `SQL Keyword`,
                                    range: wordRange, // Specify the range
                                }))
                        );
                    } else if (lastWord.toUpperCase() === 'FROM') {
                        // Suggest table names after FROM
                        suggestions.push(
                            ...tables.map((table) => ({
                                label: table,
                                kind: monaco.languages.CompletionItemKind.Module,
                                insertText: table,
                                detail: `SQL Table`,
                                range: wordRange, // Specify the range
                            }))
                        );
                    } else if (lastWord.toUpperCase() === 'WHERE') {
                        // Suggest column names after WHERE
                        const tableName = wordsBeforeCursor[wordsBeforeCursor.length - 2]; // Table name before WHERE
                        if (columns[tableName]) {
                            suggestions.push(
                                ...columns[tableName].map((col) => ({
                                    label: col,
                                    kind: monaco.languages.CompletionItemKind.Field,
                                    insertText: col,
                                    detail: `Column in ${tableName} table`,
                                    range: wordRange, // Specify the range
                                }))
                            );
                        }
                    }

                    return { suggestions };
                },
            });

            return () => {
                // Clean up Monaco Editor and disposable providers
                disposable.dispose();
                monacoInstance.current?.dispose();
            };
        }
    }, [initialValue, theme]);

    return <div ref={editorRef} onChange={onInputChange} style={{ height, width }} />;
};

export default MonacoSQLEditor;
