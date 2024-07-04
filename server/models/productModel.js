const mongoose = require('mongoose');

const schema = mongoose.Schema;

const productSchema = new schema(
    {
        name: { type: String, required: true },
        adjective: { type: String, required: true },
        description: { type: String, required: true },
        price: { type: String, required: true },
        category: { type: String, required: true },
        imageUrl: { type: String, required: true }

    }
)

module.exports = mongoose.model('Product', productSchema);