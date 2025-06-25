import fs from 'fs';
import path from 'path';
import HTMLReactParser from 'html-react-parser/lib/index';
import { marked } from 'marked';


const DemoPage = async () => {

    // files/Laravel.md
    const filePath = path.join(process.cwd(), 'files', 'Laravel.md');
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    const html = await marked.parse(fileContent);

    return (
        <>
        <div className="flex flex-col h-screen ">
            <p>Welcome to Demo Page</p>
            {HTMLReactParser(html)}
        </div>
        </>
    )
}

export default DemoPage;