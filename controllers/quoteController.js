let quotes = [];

const getQuote = async (req, res) => {
    try {
        console.log("Conteúdo do req.params:", req.params);
        console.log("Conteúdo do req.body:", req.body);

        const response = await fetch('https://api.animechan.io/v1/quotes/random');
        const data = await response.json();

        quotes.push(data);

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
