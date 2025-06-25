import fs from "fs";
import path from "path";

const ListPage = () => {
  const filePath = path.join(process.cwd(), "files", "Laravel.md");
  const fileContent = fs.fstatSync(fs.openSync(filePath, 'r'))

  console.log(fileContent);

  return (
    <div>
      <h1>List of Files</h1>
      {/* <ul>
        {fileContent.map((file) => (
          <li key={file}>{file}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default ListPage;
