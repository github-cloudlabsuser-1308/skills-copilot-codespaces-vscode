import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function MarkdownEditor() {
    const [markdown, setMarkdown] = useState("type markdown here");

    const handleChange = (event) => {
        setMarkdown(event.target.value);
    };

    // Example data array
    const data = [
        [
            { name: 'John', age: 25 },
            { name: 'Jane', age: 30 }
        ],
        [
            { name: 'Bob', age: 40 }
        ]
    ];

    // Extract names from the data array
    const names = data.flat().map(person => person.name);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px' }}>
            <textarea
                value={markdown}
                onChange={handleChange}
                style={{ width: '100%', height: '200px', fontSize: '16px', padding: '10px' }}
            />
            <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
                <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
            <div>
                <h3>Extracted Names:</h3>
                <ul>
                    {names.map((name, index) => (
                        <li key={index}>{name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}