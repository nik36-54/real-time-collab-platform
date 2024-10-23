const Document = require("..models/Document");

// Save Document
const saveDocument = async (req, res) => {
  const { content } = req.body;
  const userId = req.user.id; // Assuming you have user info in req.user
  try {
    const newDocument = await Document.create({ content, userId });
    res
      .status(201)
      .json({ message: "Document saved", documentId: newDocument.id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Recent Documents
const getRecentDocuments = async (req, res) => {
  const userId = req.user.id;
  try {
    const documents = await Document.findAll({ where: { userId } });
    res.status(200).json(documents);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { saveDocument, getRecentDocuments };
