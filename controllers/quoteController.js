fs = require('node:fs/promises');
path = require('node:path');

const DATA_DIR = path.resolve('data');
const FILE_PATH = path.join(DATA_DIR, 'quotes.json');

const ensureFileExists = async (filePath) => {
    try {
        //checks if the dir exists
        await fs.mkdir(DATA_DIR, { recursive: true });
        // try to open the file for writing and fails if the path exists. 
        // empty array to avoid empty file, this is safer for json.parse();
        await fs.writeFile(filePath, '[]', { flag: 'wx' });
        console.log('File did not exist and was successfully created.');
    } catch (error) {
        if (error.code === 'EEXIST') {
            console.log('File already exists. No action taken.');
        } else {
            throw error;
        }
    }
}

const getQuote = async (req, res) => {
    try {
        console.log("Conteúdo do req.params:", req.params);
        console.log("Conteúdo do req.body:", req.body);

        const response = await fetch('https://api.animechan.io/v1/quotes/random');
        const data = await response.json();

        await ensureFileExists(FILE_PATH);

        const fileContent = await fs.readFile(FILE_PATH, 'utf-8');
        const quotes = JSON.parse(fileContent);

        quotes.push(data);

        await fs.writeFile(FILE_PATH, JSON.stringify(quotes, null, 2));

        console.log("Saved quotes total:", quotes.length);
        res.json(data);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error while getting quote. Try again later" });
    }
}

const deleteQuote = (req, res) => {
    quote = "No quote anymore"

    res.json({ message: `${quote}` })
}


module.exports = { getQuote, deleteQuote }
